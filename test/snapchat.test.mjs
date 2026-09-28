/**
 * Où mène le bouton « Commander ».
 *
 * La boutique ne prend pas la commande : elle amène le client au vendeur.
 * Jusqu'ici c'était la conversation Telegram ; le vendeur prend maintenant
 * ses commandes sur Snapchat, et le réglage décide.
 *
 * Ce que cette suite protège, en plus du réglage lui-même :
 *
 * — le pseudo se colle sous trois formes (lien de partage, @pseudo, pseudo
 *   nu), parce que le vendeur colle ce qu'il a sous la main, et qu'un champ
 *   qui refuse la forme la plus probable est un champ qui ne s'enregistre
 *   jamais sans qu'on comprenne pourquoi ;
 * — on ne garde que le pseudo, jamais l'URL entière : le lien se refabrique
 *   à l'affichage, et stocker une URL brute laisserait n'importe quoi entrer
 *   dans un `href` de la boutique ;
 * — le champ vide remet le bouton sur Telegram. C'est le chemin du retour en
 *   arrière, et il doit marcher sans redéployer.
 *
 * La suite rend le réglage tel qu'elle l'a trouvé.
 *
 * Prérequis : serveur démarré avec ADMIN_IDS contenant 424242.
 * Usage :  BOT_TOKEN=… node test/snapchat.test.mjs
 */
import 'dotenv/config';
import { signInitData } from './helpers.mjs';

const TOKEN = process.env.BOT_TOKEN;
const BASE = process.env.TEST_BASE_URL ?? `http://localhost:${process.env.PORT ?? 3000}`;
if (!TOKEN) {
  console.error('BOT_TOKEN manquant : renseigne .env avant de lancer les tests.');
  process.exit(1);
}
const ADMIN = signInitData(TOKEN, { id: 424242, first_name: 'Patron' });
const h = (initData) => ({ 'Content-Type': 'application/json', 'X-Telegram-Init-Data': initData });

let failures = 0;
const check = (label, ok, detail = '') => {
  console.log(`${ok ? 'OK   ' : 'ÉCHEC'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failures++;
};

const reglages = async () =>
  (await fetch(`${BASE}/api/admin/settings`, { headers: h(ADMIN) })).json();
const poser = (snapchat, initData = ADMIN) =>
  fetch(`${BASE}/api/admin/settings`, {
    method: 'PUT', headers: h(initData), body: JSON.stringify({ contact: { snapchat } }),
  });
const vitrine = async () => (await (await fetch(`${BASE}/api/catalog`)).json()).contact;

const depart = (await reglages()).contact?.snapchat ?? '';

try {
  console.log('\n── Poser le compte ─────────────────────────────────');

  let r = await poser('https://www.snapchat.com/add/lagratte677');
  check('Le lien de partage est accepté', r.status === 200, `HTTP ${r.status}`);
  check("Et c'est le pseudo qui est gardé, pas l'URL",
    (await r.json()).contact?.snapchat === 'lagratte677');

  check('La boutique le voit', (await vitrine())?.snapchat === 'lagratte677');

  for (const [forme, colle] of [
    ['@pseudo', '@lagratte677'],
    ['pseudo nu', 'lagratte677'],
    ['sans www', 'snapchat.com/add/lagratte677'],
    ['avec un paramètre de partage', 'https://www.snapchat.com/add/lagratte677?share_id=ABC&locale=fr'],
  ]) {
    r = await poser(colle);
    const garde = (await r.json()).contact?.snapchat;
    check(`Collé en ${forme}`, r.status === 200 && garde === 'lagratte677', garde);
  }

  console.log('\n── Ce que l on refuse ──────────────────────────────');

  for (const [quoi, valeur] of [
    ['une autre adresse', 'https://exemple.test/add/moi'],
    ['du javascript', 'javascript:alert(1)'],
    ['un espace au milieu', 'la gratte'],
    ['un pseudo qui commence par un chiffre', '677lagratte'],
    ['un pseudo trop court', 'a'],
  ]) {
    r = await poser(valeur);
    check(`Refusé : ${quoi}`, r.status === 400, `HTTP ${r.status}`);
  }

  // Le réglage n'a pas bougé pendant ces refus : un refus qui écrit à moitié
  // laisserait le bouton pointer vers rien.
  check("Aucun refus n a changé le compte",
    (await reglages()).contact?.snapchat === 'lagratte677');

  r = await poser('autrepseudo', signInitData(TOKEN, { id: 778899, first_name: 'Curieux' }));
  check('Un client ne change pas le compte', r.status === 403, `HTTP ${r.status}`);

  console.log('\n── Le retour en arrière ────────────────────────────');

  r = await poser('');
  check('Le champ vide est accepté', r.status === 200, `HTTP ${r.status}`);
  check('Le compte est effacé', (await r.json()).contact?.snapchat === '');
  check('Et la boutique retombe sur Telegram', (await vitrine())?.snapchat === '');

  console.log('\n── Ce qui ne doit pas fuir ─────────────────────────');

  // `/api/catalog` se lit sans la moindre signature : ce qui y entre est
  // public. Un pseudo Snapchat l'est déjà — un token ne l'est pas.
  const publique = await (await fetch(`${BASE}/api/catalog`)).json();
  check('Le catalogue public ne porte aucun jeton',
    !JSON.stringify(publique).includes(TOKEN));
  check("Et n'expose que le pseudo dans `contact`",
    Object.keys(publique.contact ?? {}).join() === 'snapchat',
    Object.keys(publique.contact ?? {}).join());
} finally {
  const r = await poser(depart);
  const remis = (await r.json().catch(() => ({}))).contact?.snapchat ?? '';
  const identique = remis === depart;
  console.log(`\n${identique ? 'OK   ' : 'ÉCHEC'}  Le réglage est rendu tel qu on l a trouvé`);
  if (!identique) failures++;
}

console.log(`\nSnapchat : ${failures ? `${failures} ÉCHEC(S)` : 'OK'}`);
process.exit(failures ? 1 : 0);
