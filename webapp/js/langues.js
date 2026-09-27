/**
 * Les textes de la boutique, en trois langues.
 *
 * Un seul fichier plutôt qu'un par langue : à cette taille, trois fichiers
 * obligeraient à ouvrir trois onglets pour vérifier qu'une clef existe
 * partout, et c'est exactement l'oubli qui produit un « undefined » à
 * l'écran. Côte à côte, une traduction manquante se voit.
 *
 * Le français est la langue de référence : c'est celle qui est écrite en
 * premier, et celle qui sert de repli quand une clef manque ailleurs. Un
 * texte non traduit s'affiche donc en français plutôt que de disparaître.
 *
 * Ce que ce fichier ne traduit pas, et ne traduira pas : les noms et les
 * descriptions des produits. Ils sont écrits par le vendeur, dans sa langue,
 * et une machine qui traduirait « Plasma Static — Banana Kush » rendrait un
 * service à personne.
 */

export const LANGUES = [
  { code: 'fr', nom: 'Français', drapeau: '🇫🇷' },
  { code: 'en', nom: 'English', drapeau: '🇬🇧' },
  { code: 'es', nom: 'Español', drapeau: '🇪🇸' },
];

export const TEXTES = {
  fr: {
    /* ── L'accueil ── */
    'accueil.bienvenue': 'Bienvenue',
    'accueil.texte':
      "Quatre ans dans le milieu, et la même exigence depuis le premier jour. " +
      'Plusieurs variétés disponibles, 7 jours sur 7 de 13 h à minuit. ' +
      'Meetup ou livraison.',
    'accueil.langue': 'Choisis ta langue',
    'accueil.entrer': 'Entrer dans la boutique',

    /* ── La navigation ── */
    'onglet.catalogue': 'Catalogue',
    'onglet.categories': 'Catégories',
    'onglet.contact': 'Contact',
    'onglet.profil': 'Profil',

    /* ── Le catalogue ── */
    'catalogue.rechercher': 'Rechercher un produit',
    'catalogue.tout': 'Tout',
    'catalogue.vide': 'Aucun produit ne correspond.',
    'catalogue.epuise': 'ÉPUISÉ',
    'catalogue.retour': 'Retour au catalogue',

    /* ── La fiche produit ── */
    'produit.format': 'Choisis ton format',
    'produit.commander': 'Commander',
    'produit.question': 'Une question',
    'produit.questionCourt': 'Question',
    'produit.prevenir': '🔔 Préviens-moi du retour',
    'produit.memeCategorie': 'Même catégorie',
    'produit.aimerAussi': 'Tu vas aimer aussi',

    /* ── Le contact ── */
    'contact.titre': 'Une question ?',
    'contact.ouvrir': 'Ouvrir la conversation',
    'contact.nousEcrire': 'Nous écrire',

    /* ── Le profil ── */
    'profil.titre': 'Mon profil',
    'profil.commandes': 'Commandes',
    'profil.favoris': 'Favoris',
    'profil.produits': 'Produits',
    'profil.alertes': 'Alertes',
    'profil.langue': 'Langue',
    'profil.langueAide': "Les textes de la boutique. Les produits gardent la langue du vendeur.",

    /* ── L'état de la boutique ── */
    'etat.ouverte': 'Boutique ouverte',
    'etat.fermee': 'Boutique fermée',
    'etat.dispo': 'Dispo maintenant',
    'etat.retourA': 'De retour à',
    'etat.fermePourLInstant': "Fermé pour l'instant",

    /* ── L'ouverture ── */
    'ouverture.1': 'Ouverture de la boutique…',
    'ouverture.2': 'On branche le courant…',
    'ouverture.3': 'On allume les néons…',
    'ouverture.4': 'On sort la marchandise…',
    'ouverture.5': 'Prêt.',
  },

  en: {
    'accueil.bienvenue': 'Welcome',
    'accueil.texte':
      'Four years in the game, and the same standards since day one. ' +
      'Several varieties in stock, seven days a week from 1pm to midnight. ' +
      'Meetup or delivery.',
    'accueil.langue': 'Choose your language',
    'accueil.entrer': 'Enter the shop',

    'onglet.catalogue': 'Catalogue',
    'onglet.categories': 'Categories',
    'onglet.contact': 'Contact',
    'onglet.profil': 'Profile',

    'catalogue.rechercher': 'Search for a product',
    'catalogue.tout': 'All',
    'catalogue.vide': 'Nothing matches.',
    'catalogue.epuise': 'SOLD OUT',
    'catalogue.retour': 'Back to catalogue',

    'produit.format': 'Choose your size',
    'produit.commander': 'Order',
    'produit.question': 'Ask a question',
    'produit.questionCourt': 'Question',
    'produit.prevenir': '🔔 Tell me when it’s back',
    'produit.memeCategorie': 'Same category',
    'produit.aimerAussi': 'You might also like',

    'contact.titre': 'A question?',
    'contact.ouvrir': 'Open the chat',
    'contact.nousEcrire': 'Write to us',

    'profil.titre': 'My profile',
    'profil.commandes': 'Orders',
    'profil.favoris': 'Favourites',
    'profil.produits': 'Products',
    'profil.alertes': 'Alerts',
    'profil.langue': 'Language',
    'profil.langueAide': "The shop’s own text. Products stay in the seller’s language.",

    'etat.ouverte': 'Shop open',
    'etat.fermee': 'Shop closed',
    'etat.dispo': 'Open now',
    'etat.retourA': 'Back at',
    'etat.fermePourLInstant': 'Closed for now',

    'ouverture.1': 'Opening the shop…',
    'ouverture.2': 'Plugging in…',
    'ouverture.3': 'Lighting the neon…',
    'ouverture.4': 'Bringing out the goods…',
    'ouverture.5': 'Ready.',
  },

  es: {
    'accueil.bienvenue': 'Bienvenido',
    'accueil.texte':
      'Cuatro años en el oficio, y la misma exigencia desde el primer día. ' +
      'Varias variedades disponibles, los siete días de 13:00 a medianoche. ' +
      'Encuentro o entrega.',
    'accueil.langue': 'Elige tu idioma',
    'accueil.entrer': 'Entrar en la tienda',

    'onglet.catalogue': 'Catálogo',
    'onglet.categories': 'Categorías',
    'onglet.contact': 'Contacto',
    'onglet.profil': 'Perfil',

    'catalogue.rechercher': 'Buscar un producto',
    'catalogue.tout': 'Todo',
    'catalogue.vide': 'No hay resultados.',
    'catalogue.epuise': 'AGOTADO',
    'catalogue.retour': 'Volver al catálogo',

    'produit.format': 'Elige tu formato',
    'produit.commander': 'Pedir',
    'produit.question': 'Una pregunta',
    'produit.questionCourt': 'Pregunta',
    'produit.prevenir': '🔔 Avísame cuando vuelva',
    'produit.memeCategorie': 'Misma categoría',
    'produit.aimerAussi': 'También te puede gustar',

    'contact.titre': '¿Una pregunta?',
    'contact.ouvrir': 'Abrir la conversación',
    'contact.nousEcrire': 'Escríbenos',

    'profil.titre': 'Mi perfil',
    'profil.commandes': 'Pedidos',
    'profil.favoris': 'Favoritos',
    'profil.produits': 'Productos',
    'profil.alertes': 'Avisos',
    'profil.langue': 'Idioma',
    'profil.langueAide': 'Los textos de la tienda. Los productos mantienen el idioma del vendedor.',

    'etat.ouverte': 'Tienda abierta',
    'etat.fermee': 'Tienda cerrada',
    'etat.dispo': 'Disponible ahora',
    'etat.retourA': 'De vuelta a las',
    'etat.fermePourLInstant': 'Cerrado por ahora',

    'ouverture.1': 'Abriendo la tienda…',
    'ouverture.2': 'Conectando la corriente…',
    'ouverture.3': 'Encendiendo los neones…',
    'ouverture.4': 'Sacando la mercancía…',
    'ouverture.5': 'Listo.',
  },
};

/** La langue par défaut, et le repli de toutes les autres. */
export const LANGUE_PAR_DEFAUT = 'fr';

/**
 * La langue que parle le téléphone, si on la propose.
 *
 * Telegram donne la langue du client dans `initDataUnsafe.user.language_code`,
 * le navigateur dans `navigator.language` : on prend la première des deux qui
 * répond, et on ne garde que les deux premières lettres — « en-GB » et
 * « en-US » sont la même entrée dans ce fichier.
 *
 * Ce n'est qu'une proposition : elle préselectionne le bouton de l'écran
 * d'accueil, elle ne décide pas à la place du client.
 */
export function langueProposee(codeTelegram) {
  const brut = codeTelegram || (typeof navigator !== 'undefined' ? navigator.language : '') || '';
  const deux = String(brut).slice(0, 2).toLowerCase();
  return LANGUES.some((l) => l.code === deux) ? deux : LANGUE_PAR_DEFAUT;
}
