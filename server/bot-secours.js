import { Bot, InlineKeyboard } from 'grammy';
import { config } from './config.js';
import { getSettings, isBlocked } from './settings.js';
import { estPasse, ouvrirLaPorte, demanderLEpreuve, repondre } from './bot-captcha.js';
import { estAdmin } from './admins.js';
import { listOrders } from './orders.js';
import { noterUtilisateur } from './users.js';
import { noterPassage } from './presence.js';
import { messageRelaye, texteValide } from './messagerie.js';
import { creerCadence, attenteEnClair } from './cadence.js';
import { inscrire, oublier, configure } from './secours.js';

/**
 * Le bot de secours : une porte de plus sur la même boutique.
 *
 * Ce n'est pas un second exemplaire du premier bot, et c'est volontaire. Le
 * premier porte toute la console du vendeur — la validation des pièces, les
 * photos de produits, les annonces, les états de commande. Dupliquer tout
 * cela, c'est doubler la surface à maintenir pour un bot qui, les bons
 * jours, ne sert à rien. Et le vendeur ne perd rien à la panne : sa console
 * est aussi dans la Mini App, que ce serveur sert lui-même.
 *
 * Le secours fait donc trois choses, celles qu'un client attend d'une porte :
 * il ouvre la boutique, il transmet les messages au vendeur, et il se tient
 * prêt à annoncer la nouvelle adresse. Rien de plus.
 *
 * Il tourne en même temps que le premier. C'est la seule façon : Telegram
 * interdit à un bot d'écrire le premier à quelqu'un qui ne l'a jamais
 * démarré. Un secours qui n'existerait qu'à partir de la panne serait un
 * numéro que personne n'a dans son répertoire.
 */

/** `null` quand aucun jeton n'est donné — et alors rien de tout ceci ne tourne. */
export const botSecours = configure() ? new Bot(config.botTokenSecours) : null;

const urlUtilisable = () => /^https:\/\/[^\s]+$/.test(config.webappUrl);

const clavierBoutique = () =>
  urlUtilisable() ? new InlineKeyboard().webApp('🛒 Ouvrir la boutique', config.webappUrl) : undefined;

/** Les mêmes caractères réservés que dans le bot principal. */
const echapper = (texte) => String(texte).replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, '\\$&');

/** Le nom du bot de secours, pour fabriquer le lien qu'on donne aux clients. */
let nomConnu = config.botUsernameSecours || '';
export async function usernameDuSecours() {
  if (nomConnu) return nomConnu;
  if (!botSecours) return '';
  try {
    const moi = await botSecours.api.getMe();
    nomConnu = moi.username ?? '';
  } catch {
    // Pas de nom, pas de lien : la boutique n'affichera simplement pas la
    // carte du secours. Mieux que d'afficher un lien qui ne mène nulle part.
    nomConnu = '';
  }
  return nomConnu;
}

/** Le lien t.me qui ouvre la conversation du secours, ou '' s'il est inconnu. */
export async function lienDuSecours() {
  const nom = await usernameDuSecours();
  return nom ? `https://t.me/${nom}` : '';
}

if (botSecours) {
  const cadenceDuRelais = creerCadence({ max: 8, fenetreMs: 15 * 60 * 1000, nom: 'relais-secours' });

  /* ── Le registre, en tout premier ──────────────────────────
     Quiconque touche ce bot devient joignable par lui : c'est précisément
     l'information qu'on cherche, et elle vaut avant même le calcul
     d'entrée. Un curieux qui repart sans rien acheter reste une personne
     que le secours pourra prévenir. */
  botSecours.use(async (ctx, next) => {
    if (ctx.from) {
      noterUtilisateur(ctx.from).catch(() => {});
      noterPassage(ctx.from.id, 'conversation');
      inscrire(ctx.from.id).catch(() => {});
    }
    return next();
  });

  /* ── La même porte que le bot principal ────────────────────
     Le calcul est partagé : qui l'a passé d'un côté n'a pas à le repasser
     de l'autre. C'est le même client, la même boutique, et lui opposer
     deux fois la même addition ferait du secours une corvée plutôt qu'un
     filet. */
  botSecours.use(async (ctx, next) => {
    const id = ctx.from?.id;
    if (!id || (await estAdmin(id))) return next();
    if (!(await getSettings()).features.botCaptcha) return next();
    if (await estPasse(id)) return next();
    if (ctx.message?.web_app_data || (await listOrders({ userId: id, limit: 1 })).length) {
      await ouvrirLaPorte(id);
      return next();
    }

    const touche = ctx.callbackQuery?.data?.match(/^cap:(\d{1,3})$/)?.[1];
    const ecrit = touche ? null : ctx.message?.text?.trim().match(/^\d{1,3}$/)?.[0];
    const valeur = touche ?? ecrit;

    if (valeur !== null && valeur !== undefined) {
      const verdict = await repondre(id, valeur);
      if (touche) await ctx.answerCallbackQuery(verdict.ok ? '✅' : '❌').catch(() => {});
      if (verdict.ok) {
        await ctx.reply("✅ Merci, c'est bien ce que je voulais lire.");
        return accueillir(ctx);
      }
      if (verdict.pause) {
        return ctx.reply(
          `⏳ Trop d'essais. Réessaie dans ${verdict.pause} minute${verdict.pause > 1 ? 's' : ''}.`
        );
      }
      const avant = verdict.raison === 'faux'
        ? `❌ Ce n'est pas ça — encore ${verdict.restants} essai${verdict.restants > 1 ? 's' : ''}.\n\n`
        : '';
      return poserLEpreuve(ctx, verdict.epreuve, avant);
    }

    if (ctx.callbackQuery) await ctx.answerCallbackQuery().catch(() => {});
    const porte = await demanderLEpreuve(id);
    if (porte.passe) return next();
    if (porte.pause) {
      return ctx.reply(
        `⏳ Trop d'essais. Réessaie dans ${porte.pause} minute${porte.pause > 1 ? 's' : ''}.`
      );
    }
    return poserLEpreuve(ctx, porte.epreuve);
  });

  botSecours.command('start', (ctx) => accueillir(ctx));
  botSecours.command('boutique', (ctx) =>
    ctx.reply('Voilà le catalogue 👇', { reply_markup: clavierBoutique() })
  );

  botSecours.command('aide', (ctx) =>
    ctx.reply(
      "Tu es sur la porte de secours de la boutique.\n\n" +
        "Elle sert exactement à ça : rester ouverte si l'autre bot disparaît. " +
        "Tu n'as rien à faire de plus — le fait d'avoir écrit ici suffit, " +
        "je saurai te prévenir.\n\n" +
        '/boutique — ouvrir le catalogue\n' +
        '/stop — ne plus recevoir de message de secours',
      { reply_markup: clavierBoutique() }
    )
  );

  // Partir d'ici, c'est renoncer à être prévenu : on le dit franchement
  // plutôt que de laisser croire au filet.
  botSecours.command('stop', async (ctx) => {
    await oublier(ctx.from.id);
    await ctx.reply(
      "🔕 C'est noté : je ne t'écrirai plus.\n\n" +
        "Ça veut dire aussi que si l'autre bot disparaît, je n'aurai pas le " +
        'droit de te donner la nouvelle adresse — Telegram me l\'interdit. ' +
        'Écris /start ici quand tu veux pour revenir.'
    );
  });

  // Tout le reste passe au vendeur. Le secours ne sait rien faire d'autre,
  // et c'est justement ce qu'on lui demande un jour de panne.
  botSecours.on('message:text', async (ctx) => {
    const texte = ctx.message.text;
    if (texte.startsWith('/')) {
      return ctx.reply(
        "Cette commande n'existe pas ici — cette conversation est la porte de " +
          'secours de la boutique. /aide pour savoir ce qu\'elle sait faire.',
        { reply_markup: clavierBoutique() }
      );
    }
    const refus = texteValide(texte);
    if (refus) return ctx.reply(refus);

    const settings = await getSettings();
    if (isBlocked(settings, ctx.from.id)) return ctx.reply('Message bien reçu.');

    const cadence = cadenceDuRelais.passer(ctx.from.id);
    if (!cadence.ok) {
      return ctx.reply(
        'Tu as déjà écrit plusieurs fois — on te répond dès que possible. ' +
          `Réessaie dans ${attenteEnClair(cadence.attente)}.`
      );
    }
    if (!config.adminChatId) {
      console.warn('ADMIN_CHAT_ID absent : message reçu sur le secours, personne à prévenir.');
      return ctx.reply('Message bien reçu.');
    }
    try {
      await botSecours.api.sendMessage(
        config.adminChatId,
        `🆘 (bot de secours)\n${messageRelaye(ctx.from, texte)}`
      );
    } catch (err) {
      console.error('Relais depuis le secours impossible :', err.message);
    }
    return ctx.reply('Message transmis. On te répond dès que possible.');
  });

  // Une erreur dans le secours ne doit surtout pas faire tomber le process :
  // ce bot existe pour le jour où quelque chose est déjà cassé.
  botSecours.catch((err) => {
    console.error('Bot de secours :', err.message ?? err);
  });
}

const clavierDEpreuve = (choix) => {
  const clavier = new InlineKeyboard();
  choix.forEach((valeur, rang) => {
    clavier.text(String(valeur), `cap:${valeur}`);
    if (rang === 2) clavier.row();
  });
  return clavier;
};

const poserLEpreuve = (ctx, epreuve, avant = '') =>
  ctx.reply(
    `${avant}🔒 Petite vérification avant d'entrer.\n\n` +
      `Combien font ${epreuve.texte} ?\n\n` +
      "C'est pour éviter que la boutique ne soit noyée sous les faux comptes. " +
      'Touche la bonne réponse, ou écris-la.',
    { reply_markup: clavierDEpreuve(epreuve.choix) }
  );

const accueillir = (ctx) =>
  ctx.reply(
    `🆘 *${echapper(config.shopName)} — porte de secours*\n\n` +
      "C'est bien la boutique, par une seconde porte\\. Le catalogue, les prix " +
      'et tes commandes sont les mêmes : il n\'y a qu\'un seul magasin derrière ' +
      'les deux conversations\\.\n\n' +
      "Garde celle\\-ci\\. Si l'autre bot venait à disparaître, c'est ici que tu " +
      'recevras la nouvelle adresse — et je ne peux le faire que pour ceux qui ' +
      "m'ont déjà écrit au moins une fois\\.\n\n" +
      `Ton ID Telegram : \`${ctx.from.id}\``,
    { parse_mode: 'MarkdownV2', reply_markup: clavierBoutique() }
  );

/**
 * Envoie un message à tous les inscrits du secours.
 *
 * Volontairement lent : Telegram coupe un bot qui écrit trop vite, et un bot
 * coupé au moment où il annonce la nouvelle adresse serait une panne dans la
 * panne. Rend le compte de ce qui est parti et de ce qui a été refusé — un
 * refus veut presque toujours dire « ce client a bloqué le bot », et on le
 * retire alors du registre pour ne pas le compter comme couvert.
 */
export async function prevenirLesInscrits(texte, { destinataires, paquet = 20, pause = 1200 } = {}) {
  if (!botSecours) return { envoyes: 0, refuses: 0 };
  let envoyes = 0;
  let refuses = 0;
  const liste = destinataires ?? [];
  for (const [rang, id] of liste.entries()) {
    try {
      await botSecours.api.sendMessage(id, texte);
      envoyes += 1;
    } catch (err) {
      refuses += 1;
      // 403 : le client a bloqué le bot. Il n'est plus couvert, et le
      // registre doit le dire, sinon le vendeur croit avoir un filet.
      if (/403|blocked|deactivated/i.test(err.message ?? '')) await oublier(id).catch(() => {});
    }
    if ((rang + 1) % paquet === 0) await new Promise((r) => setTimeout(r, pause));
  }
  return { envoyes, refuses };
}
