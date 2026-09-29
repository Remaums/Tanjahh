/**
 * Fabrique les images de l'épreuve d'entrée, à partir du film d'ouverture.
 *
 * L'épreuve montre une photo à laquelle il manque un bout, et demande de
 * faire glisser la pièce à sa place. La photo, c'est le film de chargement de
 * la boutique : le client vient de le regarder pendant deux secondes, il
 * reconnaît l'image, et l'épreuve ne ressemble plus à un péage posé par un
 * tiers.
 *
 * Les images sont extraites ICI, une fois, et versionnées. Pas sur le
 * serveur : ffmpeg n'est pas installé sur un VPS ordinaire, et une épreuve
 * d'entrée qui dépend d'un binaire absent est une boutique fermée. Le serveur
 * ne fait que choisir un fichier et tirer la position du trou.
 *
 * À relancer quand le film change :
 *
 *   node tools/puzzle-images.mjs
 *
 * Le cadrage prend une bande paysage au milieu du film portrait : c'est là
 * que se trouve le sujet, et un carré de 300×200 se pose bien sur un
 * téléphone sans réduire la photo à un timbre.
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const executer = promisify(execFile);
const RACINE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILM = path.join(RACINE, 'webapp', 'assets', 'ui', 'charge.mp4');
const DOSSIER = path.join(RACINE, 'webapp', 'assets', 'captcha');

/** Les instants retenus. Espacés, pour que deux épreuves ne se ressemblent pas. */
const INSTANTS = [0.6, 1.8, 3.0, 4.2, 5.4, 6.6, 7.8, 9.0];

export const LARGEUR = 300;
export const HAUTEUR = 200;

const existe = async (p) => !!(await fs.stat(p).catch(() => null));

if (!(await existe(FILM))) {
  console.error(`\n  Film introuvable : ${FILM}\n`);
  process.exit(1);
}
try {
  await executer('ffmpeg', ['-version']);
} catch {
  console.error('\n  ffmpeg est nécessaire pour fabriquer ces images (une seule fois).\n');
  process.exit(1);
}

await fs.mkdir(DOSSIER, { recursive: true });
for (const f of await fs.readdir(DOSSIER)) {
  if (/^charge-\d+\.jpg$/.test(f)) await fs.unlink(path.join(DOSSIER, f));
}

let rang = 0;
for (const t of INSTANTS) {
  rang += 1;
  const sortie = path.join(DOSSIER, `charge-${rang}.jpg`);
  await executer('ffmpeg', [
    '-v', 'error',
    '-ss', String(t),
    '-i', FILM,
    '-frames:v', '1',
    // La bande du milieu, puis la taille de l'épreuve.
    '-vf', `crop=540:360:0:300,scale=${LARGEUR}:${HAUTEUR}`,
    '-q:v', '4',
    sortie, '-y',
  ]);
  const { size } = await fs.stat(sortie);
  console.log(`  charge-${rang}.jpg  ${String(Math.round(size / 1024)).padStart(3)} Ko  (t = ${t} s)`);
}

console.log(`\n  ${rang} image(s) dans webapp/assets/captcha/.\n`);
