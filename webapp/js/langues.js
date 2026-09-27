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

/**
 * `locale` n'est pas le code de la langue : une date écrite pour « en » seul
 * sortirait à l'américaine (« Mar 3 »), là où la boutique vend en Europe.
 * C'est la seule chose que ce fichier dise du format des nombres et des dates.
 */
export const LANGUES = [
  { code: 'fr', nom: 'Français', drapeau: '🇫🇷', locale: 'fr-FR' },
  { code: 'en', nom: 'English', drapeau: '🇬🇧', locale: 'en-GB' },
  { code: 'es', nom: 'Español', drapeau: '🇪🇸', locale: 'es-ES' },
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

    /* ── La porte du bot ── */
    'porte.entree': 'Entrée',
    'porte.titre': "Un calcul, et c'est ouvert",
    'porte.texte':
      "Retourne dans la conversation du bot : il t'y pose une petite addition. " +
      "Réponds-y, puis reviens — la boutique s'ouvre toute seule.",
    'porte.fine':
      "C'est demandé une seule fois, pour éviter les faux comptes. " +
      "Aucune information supplémentaire ne t'est demandée.",
    'porte.ouvrir': 'Ouvrir la conversation',
    'porte.reessayer': "J'ai répondu — réessayer",

    /* ── La porte d'âge ── */
    'age.titre': 'Stop !',
    'age.texte':
      'Cette boutique est réservée aux personnes majeures. ' +
      'Tu confirmes avoir <strong>18&nbsp;ans ou plus</strong>&nbsp;?',
    'age.oui': "Oui, j'ai 18 ans",
    'age.non': 'Non',

    /* ── L'épreuve de tuiles ── */
    'tuiles.entete': 'Vérification',
    'tuiles.consigne': 'Touche les 3 feuilles',
    'tuiles.texte': "Une seconde, le temps de vérifier que tu n'es pas un robot.",
    'tuiles.valider': 'Valider',

    /* ── La vérification de pièce ── */
    'verif.entete': 'Accès contrôlé',
    'verif.titre': 'Vérification requise',
    'verif.fine':
      "La boutique n'enregistre pas ton document : il reste dans la conversation " +
      'Telegram, et tu peux le supprimer une fois la vérification faite.',
    'verif.ouvrir': 'Ouvrir la conversation',
    'verif.attendre': 'Regarder la boutique en attendant',

    /* ── Le bandeau ── */
    'hero.horaires': 'Ouvert 7/7 · 13h – 00h',
    'hero.service': 'Meetup & Livraison',

    /* ── Le tri ── */
    'tri.defaut': 'Tri : par défaut',
    'tri.nouveautes': "Nouveautés d'abord",
    'tri.prixCroissant': 'Prix croissant',
    'tri.prixDecroissant': 'Prix décroissant',
    'tri.alphabetique': 'Ordre alphabétique',

    /* ── Les rappels ── */
    'reprise.titre': 'La même chose',
    'catalogue.videTotal': 'Le catalogue est vide pour le moment.',

    /* ── Les avis ── */
    'avis.titre': 'Avis',
    'avis.voirTous': 'Voir tous les avis',
    'avis.commentCetait': "Comment c'était ?",
    'avis.tonAvis': 'Ton avis',
    'avis.unMot': 'Un mot, si tu veux',
    'avis.facultatif': 'facultatif',
    'avis.signe': 'Avec mon prénom',
    'avis.signeAide': 'Un avis signé inspire plus confiance.',
    'avis.anonyme': 'Anonyme',
    'avis.anonymeAide': "Ton avis s'affiche sans nom.",
    'avis.plusTard': 'Plus tard',
    'avis.envoyer': 'Envoyer',

    /* ── La navigation ── */
    'catalogue.rienNeCorrespond': 'Rien ne correspond à « {mot} ».',
    'catalogue.videCategorie': 'Rien dans cette catégorie pour le moment.',
    'produit.epuiseMinuscule': 'épuisé',
    'produit.prevenu': '🔔 Tu seras prévenu',

    'etat.fermeDans': 'ferme dans {duree}',
    'etat.ouvreDans': 'ouvre dans {duree}',
    'etat.minutes': '{n} min',

    'onglet.catalogue': 'Catalogue',
    'onglet.categories': 'Catégories',
    'onglet.contact': 'Contact',
    'onglet.profil': 'Profil',

    /* ── Le catalogue ── */
    'catalogue.rechercher': 'Rechercher un produit',
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
    'contact.texte':
      "Un doute sur un produit, une commande qui traîne, une demande particulière : "
      + 'écris-nous, on répond dans la conversation.',
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
    'profil.alertesIntro':
      "Ce que la boutique peut t'envoyer dans cette conversation. "
      + 'Tu coupes et rallumes quand tu veux.',
    'profil.stop':
      "⚠️ Tu as envoyé <b>/stop</b> au bot : rien ne t'arrivera tant que tu n'auras pas "
      + 'écrit <b>/annonces</b> pour rouvrir la porte.',

    /* ── L'état de la boutique ── */
    'etat.ouverte': 'Boutique ouverte',
    'etat.fermee': 'Boutique fermée',
    'etat.dispo': 'Dispo maintenant',
    'etat.retourA': 'De retour à',
    'etat.fermePourLInstant': "Fermé pour l'instant",

    /* ── L'ouverture ── */
    /* ── Ce que le script dit lui-même ── */
    'msg.chargement': 'Chargement…',
    'msg.injoignable': 'Boutique momentanément injoignable',
    'msg.injoignableTexte':
      "Le catalogue n'a pas pu être chargé. Ce n'est pas que la boutique est vide : "
      + 'le serveur ne répond pas comme il faut.',
    'msg.reessayer': 'Réessayer',
    'msg.catalogueIndispo': 'Catalogue indisponible, réessaie dans un instant.',
    'msg.pieceEnAttente': 'Tu pourras commander une fois ta pièce validée.',
    'msg.calculEnAttente': 'Pas encore — réponds au calcul dans la conversation.',
    'msg.articleParti': "Cet article n'est plus au catalogue. Voici le reste de la boutique.",
    'msg.vendeurAbsent': "Le compte vendeur n'est pas encore configuré.",
    'msg.verifIndispo': 'Vérification indisponible. Réessaie dans un instant.',
    'msg.reglageRefuse': 'Réglage non enregistré, réessaie.',

    /* ── L'alerte de retour ── */
    'alerte.inscrit': "On t'écrit dès que ça revient.",
    'alerte.impossible': 'Inscription impossible pour le moment.',

    /* ── Les rayons ── */
    'rayon.unProduit': '1 produit',
    'rayon.produits': '{n} produits',

    /* ── Le contact, en détail ── */
    'contact.vendeurAbsent':
      "Le compte vendeur n'est pas encore renseigné : reviens un peu plus tard.",
    'contact.tuEcrisA': "Tu écris à @{nom}. Réponse dès qu'on est dispo.",
    'contact.onPrend': 'On prend les commandes.',
    'contact.onRouvre': 'On rouvre bientôt.',
    'contact.retrait': 'Retrait sur place',
    'contact.retraitDetail': 'Rendez-vous convenu dans la conversation.',
    'contact.livraison': 'Livraison',
    'contact.livraisonDetail': 'Adresse demandée au moment de la commande.',
    'contact.especes': 'Paiement en espèces',
    'contact.especesDetail': 'À la remise, rien à avancer.',

    /* ── Les favoris ── */
    'favori.mettre': 'Mettre en favori',
    'favori.retirer': 'Retirer des favoris',
    'favori.epuiseAlerte': "Épuisé — active l'alerte de retour",
    'favoris.desactives': 'Les favoris ne sont pas activés sur cette boutique.',
    'favoris.vide': 'Touche le ♥ sur un produit pour le garder ici.',

    /* ── Les commandes ── */
    'commandes.desactivees': "L'historique des commandes n'est pas activé sur cette boutique.",
    'commandes.vide': "Tu n'as pas encore passé de commande.",
    'commandes.depuisTelegram': 'Ouvre la boutique depuis Telegram pour retrouver tes commandes.',
    'commandes.profilIndispo': 'Profil indisponible pour le moment.',
    'commandes.reprendre': '🔁 Reprendre cette commande',
    'profil.client': 'Client {boutique}',

    /* ── Les avis, suite ── */
    'avis.compte': 'Avis ({n})',
    'avis.voirLesN': 'Voir les {n} avis',
    'avis.uneEtoile': '{n} étoile',
    'avis.desEtoiles': '{n} étoiles',
    'avis.toucheUneEtoile': 'Touche au moins une étoile.',
    'avis.merci': 'Merci pour ton avis !',
    'avis.envoi': 'Envoi…',
    'avis.refuse': 'Avis refusé.',
    'avis.tonAvisSur': 'Ton avis sur {quoi}',
    'avis.reponseBoutique': 'Réponse de la boutique',

    /* ── La musique ── */
    'juke.ouvrir': 'Ouvrir le lecteur de musique',

    /* ── Les médias ── */
    'media.video': '▶ Vidéo',

    /* ── La mention légale, l'accès, la vérification ── */
    'legal.mention':
      'Produits réservés aux personnes majeures. Vérifie la législation en vigueur '
      + 'chez toi avant toute commande : la disponibilité de ces produits dépend de ta juridiction.',
    'titre.page': 'Boutique',
    'etat.compteBloque':
      "Ce compte ne peut pas passer commande. Écris-nous dans la conversation si c'est une erreur.",
    'etat.fermeeMessage': 'La boutique est fermée pour le moment.',
    'etat.ouvertCourt': 'Ouvert',
    'etat.fermeCourt': 'Fermé',
    'verif.texteAucune':
      "Pour commander ici, une pièce d'identité doit être validée. Envoie-la en photo "
      + 'dans la conversation du bot : le vendeur la regarde et te répond.',
    'verif.texteEnCours':
      'Ta pièce est en cours de vérification. Tu recevras la réponse dans la conversation du bot.',
    'verif.texteRefusee':
      "La vérification a été refusée. Écris-nous dans la conversation si tu penses que c'est une erreur.",
    'verif.titreEnCours': 'En cours de vérification',
    'verif.titreRefusee': 'Vérification refusée',
    'captcha.rate': 'Raté. Essaie encore.',

    /* ── Les suggestions ── */
    'produit.memeCategorieAvec': 'Même catégorie · {cat}',

    /* ── Ce qu'on écrit au vendeur ── */
    'msg.bonjourCommander': 'Bonjour ! Je voudrais commander sur {boutique} ⚡',
    'msg.bonjourQuestion': 'Bonjour ! Une question sur {boutique} ⚡',
    'msg.bonjourRecommander': 'Bonjour ! Je voudrais recommander la même chose sur {boutique} ⚡',
    'msg.article': 'Article',

    /* ── Le retour ── */
    'retour.simple': 'Retour',
    'retour.catalogue': 'Retour au catalogue',
    'retour.categories': 'Retour aux catégories',
    'retour.profil': 'Retour au profil',

    /* ── Les listes de noms ── */
    'liste.etAutre': '{liste} et {n} autre',
    'liste.etAutres': '{liste} et {n} autres',

    /* ── L'écran d'avis ── */
    'avis.ajouteUnMot': 'Ajoute un mot',
    'avis.tuAsNote': 'Tu as noté {quoi}',
    'avis.dejaNote': 'Tu as déjà noté {quoi}. Ajoute un mot, si tu veux.',
    'avis.commandeRef': 'Commande {ref} — {quoi}',
    'avis.avecPrenom': 'Avec « {prenom} »',

    /* ── Ce que lit une synthèse vocale ── */
    'aria.effacer': 'Effacer la recherche',
    'aria.trier': 'Trier les produits',
    'aria.fermer': 'Fermer',
    'aria.fiche': 'Fiche produit',
    'aria.navigation': 'Navigation',
    'aria.medias': 'Médias',
    'aria.mediaPrec': 'Média précédent',
    'aria.mediaSuiv': 'Média suivant',
    'aria.question': 'Poser une question sur ce produit',
    'aria.signer': 'Signer ton avis',

    /* ── Le lecteur ── */
    'juke.menu': 'Lecteur de musique',
    'juke.lecture': 'Lecture',
    'juke.pause': 'Pause',
    'juke.precedent': 'Morceau précédent',
    'juke.suivant': 'Morceau suivant',

    /* ── Ce qui reste privé dans un avis ── */
    'avis.noteVie':
      'Dans les deux cas, ni ton pseudo Telegram, ni ton numéro, ni ton adresse '
      + "ne sont publiés. Le vendeur, lui, voit toujours quelle commande a été notée.",

    /* ── Les canaux d'alerte ──
       Le serveur dit QUELS canaux existent ; le dictionnaire dit comment ils
       se lisent. Les libellés du serveur servent encore au bot, qui parle
       français : les traduire là-bas changerait aussi ses messages. */
    'alertes.nouveautes': 'Nouveaux produits',
    'alertes.nouveautesAide': 'Un message quand un article arrive au catalogue.',
    'alertes.promos': 'Promos et codes',
    'alertes.promosAide': 'Un message quand une remise ou un code promo démarre.',

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

    'porte.entree': 'Entry',
    'porte.titre': 'One sum, and you’re in',
    'porte.texte':
      'Go back to the bot chat: it will give you a small sum. ' +
      'Answer it, then come back — the shop opens by itself.',
    'porte.fine':
      'Asked only once, to keep fake accounts out. ' +
      'Nothing else is asked of you.',
    'porte.ouvrir': 'Open the chat',
    'porte.reessayer': 'I answered — try again',

    'age.titre': 'Stop!',
    'age.texte':
      'This shop is for adults only. ' +
      'Do you confirm you are <strong>18&nbsp;or older</strong>&nbsp;?',
    'age.oui': 'Yes, I am 18',
    'age.non': 'No',

    'tuiles.entete': 'Check',
    'tuiles.consigne': 'Tap the 3 leaves',
    'tuiles.texte': 'One moment, just checking you are not a robot.',
    'tuiles.valider': 'Confirm',

    'verif.entete': 'Restricted access',
    'verif.titre': 'Verification required',
    'verif.fine':
      'The shop does not store your document: it stays in the Telegram chat, ' +
      'and you can delete it once the check is done.',
    'verif.ouvrir': 'Open the chat',
    'verif.attendre': 'Browse the shop meanwhile',

    'hero.horaires': 'Open 7/7 · 1pm – midnight',
    'hero.service': 'Meetup & Delivery',

    'tri.defaut': 'Sort: default',
    'tri.nouveautes': 'Newest first',
    'tri.prixCroissant': 'Price, low to high',
    'tri.prixDecroissant': 'Price, high to low',
    'tri.alphabetique': 'Alphabetical',

    'reprise.titre': 'The same again',
    'catalogue.videTotal': 'The catalogue is empty for now.',

    'avis.titre': 'Reviews',
    'avis.voirTous': 'See all reviews',
    'avis.commentCetait': 'How was it?',
    'avis.tonAvis': 'Your review',
    'avis.unMot': 'A word, if you like',
    'avis.facultatif': 'optional',
    'avis.signe': 'With my first name',
    'avis.signeAide': 'A signed review inspires more trust.',
    'avis.anonyme': 'Anonymous',
    'avis.anonymeAide': 'Your review appears without a name.',
    'avis.plusTard': 'Later',
    'avis.envoyer': 'Send',

    'catalogue.rienNeCorrespond': 'Nothing matches “{mot}”.',
    'catalogue.videCategorie': 'Nothing in this category for now.',
    'produit.epuiseMinuscule': 'sold out',
    'produit.prevenu': '🔔 You’ll be told',

    'etat.fermeDans': 'closes in {duree}',
    'etat.ouvreDans': 'opens in {duree}',
    'etat.minutes': '{n} min',

    'onglet.catalogue': 'Catalogue',
    'onglet.categories': 'Categories',
    'onglet.contact': 'Contact',
    'onglet.profil': 'Profile',

    'catalogue.rechercher': 'Search for a product',
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
    'contact.texte':
      'Unsure about a product, an order taking its time, a special request: '
      + 'write to us, we answer right here in the chat.',
    'contact.ouvrir': 'Open the chat',
    'contact.nousEcrire': 'Write to us',

    'profil.titre': 'My profile',
    'profil.commandes': 'Orders',
    'profil.favoris': 'Favourites',
    'profil.produits': 'Products',
    'profil.alertes': 'Alerts',
    'profil.langue': 'Language',
    'profil.langueAide': "The shop’s own text. Products stay in the seller’s language.",
    'profil.alertesIntro':
      'What the shop may send you in this chat. '
      + 'Turn it off and back on whenever you like.',
    'profil.stop':
      '⚠️ You sent <b>/stop</b> to the bot: nothing will reach you until you write '
      + '<b>/annonces</b> to open the door again.',

    'etat.ouverte': 'Shop open',
    'etat.fermee': 'Shop closed',
    'etat.dispo': 'Open now',
    'etat.retourA': 'Back at',
    'etat.fermePourLInstant': 'Closed for now',

    /* ── Ce que le script dit lui-même ── */
    'msg.chargement': 'Loading…',
    'msg.injoignable': 'Shop temporarily unreachable',
    'msg.injoignableTexte':
      "The catalogue could not be loaded. It isn't that the shop is empty: "
      + "the server isn't answering properly.",
    'msg.reessayer': 'Try again',
    'msg.catalogueIndispo': 'Catalogue unavailable, try again in a moment.',
    'msg.pieceEnAttente': 'You can order once your ID has been checked.',
    'msg.calculEnAttente': 'Not yet — answer the sum in the chat.',
    'msg.articleParti': "This item has left the catalogue. Here's the rest of the shop.",
    'msg.vendeurAbsent': 'The seller account is not set up yet.',
    'msg.verifIndispo': 'Verification unavailable. Try again in a moment.',
    'msg.reglageRefuse': 'Setting not saved, try again.',

    /* ── L'alerte de retour ── */
    'alerte.inscrit': "We'll write as soon as it's back.",
    'alerte.impossible': "Can't sign you up right now.",

    /* ── Les rayons ── */
    'rayon.unProduit': '1 product',
    'rayon.produits': '{n} products',

    /* ── Le contact, en détail ── */
    'contact.vendeurAbsent':
      'The seller account is not filled in yet: come back a little later.',
    'contact.tuEcrisA': "You're writing to @{nom}. We answer as soon as we're around.",
    'contact.onPrend': "We're taking orders.",
    'contact.onRouvre': "We'll reopen soon.",
    'contact.retrait': 'Meetup',
    'contact.retraitDetail': 'Time and place agreed in the chat.',
    'contact.livraison': 'Delivery',
    'contact.livraisonDetail': 'Address asked for when you order.',
    'contact.especes': 'Cash payment',
    'contact.especesDetail': 'On handover, nothing up front.',

    /* ── Les favoris ── */
    'favori.mettre': 'Add to favourites',
    'favori.retirer': 'Remove from favourites',
    'favori.epuiseAlerte': 'Sold out — turn on the back-in-stock alert',
    'favoris.desactives': 'Favourites are not enabled in this shop.',
    'favoris.vide': 'Tap the ♥ on a product to keep it here.',

    /* ── Les commandes ── */
    'commandes.desactivees': 'Order history is not enabled in this shop.',
    'commandes.vide': "You haven't placed an order yet.",
    'commandes.depuisTelegram': 'Open the shop from Telegram to find your orders.',
    'commandes.profilIndispo': 'Profile unavailable for the moment.',
    'commandes.reprendre': '🔁 Order this again',
    'profil.client': '{boutique} customer',

    /* ── Les avis, suite ── */
    'avis.compte': 'Reviews ({n})',
    'avis.voirLesN': 'See all {n} reviews',
    'avis.uneEtoile': '{n} star',
    'avis.desEtoiles': '{n} stars',
    'avis.toucheUneEtoile': 'Tap at least one star.',
    'avis.merci': 'Thanks for your review!',
    'avis.envoi': 'Sending…',
    'avis.refuse': 'Review refused.',
    'avis.tonAvisSur': 'Your review of {quoi}',
    'avis.reponseBoutique': 'Reply from the shop',

    /* ── La musique ── */
    'juke.ouvrir': 'Open the music player',

    /* ── Les médias ── */
    'media.video': '▶ Video',

    /* ── La mention légale, l'accès, la vérification ── */
    'legal.mention':
      'For adults only. Check the law where you are before ordering: '
      + 'whether these products are available depends on your jurisdiction.',
    'titre.page': 'Shop',
    'etat.compteBloque':
      "This account cannot place orders. Write to us in the chat if that's a mistake.",
    'etat.fermeeMessage': 'The shop is closed for the moment.',
    'etat.ouvertCourt': 'Open',
    'etat.fermeCourt': 'Closed',
    'verif.texteAucune':
      'To order here, an ID has to be checked. Send a photo of it in the bot chat: '
      + 'the seller looks at it and gets back to you.',
    'verif.texteEnCours':
      "Your ID is being checked. You'll get the answer in the bot chat.",
    'verif.texteRefusee':
      'The check came back refused. Write to us in the chat if you think that is a mistake.',
    'verif.titreEnCours': 'Being checked',
    'verif.titreRefusee': 'Check refused',
    'captcha.rate': 'Missed. Try again.',

    /* ── Les suggestions ── */
    'produit.memeCategorieAvec': 'Same category · {cat}',

    /* ── Ce qu'on écrit au vendeur ── */
    'msg.bonjourCommander': 'Hello! I would like to order from {boutique} ⚡',
    'msg.bonjourQuestion': 'Hello! A question about {boutique} ⚡',
    'msg.bonjourRecommander': 'Hello! I would like to order the same thing again from {boutique} ⚡',
    'msg.article': 'Item',

    /* ── Le retour ── */
    'retour.simple': 'Back',
    'retour.catalogue': 'Back to the catalogue',
    'retour.categories': 'Back to categories',
    'retour.profil': 'Back to my profile',

    /* ── Les listes de noms ── */
    'liste.etAutre': '{liste} and {n} more',
    'liste.etAutres': '{liste} and {n} more',

    /* ── L'écran d'avis ── */
    'avis.ajouteUnMot': 'Add a word',
    'avis.tuAsNote': 'You rated {quoi}',
    'avis.dejaNote': 'You already rated {quoi}. Add a word, if you like.',
    'avis.commandeRef': 'Order {ref} — {quoi}',
    'avis.avecPrenom': 'As “{prenom}”',

    /* ── Ce que lit une synthèse vocale ── */
    'aria.effacer': 'Clear the search',
    'aria.trier': 'Sort the products',
    'aria.fermer': 'Close',
    'aria.fiche': 'Product page',
    'aria.navigation': 'Navigation',
    'aria.medias': 'Media',
    'aria.mediaPrec': 'Previous media',
    'aria.mediaSuiv': 'Next media',
    'aria.question': 'Ask a question about this product',
    'aria.signer': 'Sign your review',

    /* ── Le lecteur ── */
    'juke.menu': 'Music player',
    'juke.lecture': 'Play',
    'juke.pause': 'Pause',
    'juke.precedent': 'Previous track',
    'juke.suivant': 'Next track',

    /* ── Ce qui reste privé dans un avis ── */
    'avis.noteVie':
      'Either way, your Telegram handle, your number and your address stay unpublished. '
      + 'The seller does still see which order was rated.',

    /* ── Les canaux d'alerte ── */
    'alertes.nouveautes': 'New products',
    'alertes.nouveautesAide': 'A message when an item lands in the catalogue.',
    'alertes.promos': 'Deals and codes',
    'alertes.promosAide': 'A message when a discount or a promo code starts.',

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

    'porte.entree': 'Entrada',
    'porte.titre': 'Una cuenta, y ya estás dentro',
    'porte.texte':
      'Vuelve a la conversación del bot: te pondrá una suma sencilla. ' +
      'Respóndela y vuelve — la tienda se abre sola.',
    'porte.fine':
      'Se pide una sola vez, para evitar cuentas falsas. ' +
      'No se te pide nada más.',
    'porte.ouvrir': 'Abrir la conversación',
    'porte.reessayer': 'Ya respondí — reintentar',

    'age.titre': '¡Alto!',
    'age.texte':
      'Esta tienda es solo para mayores de edad. ' +
      '¿Confirmas que tienes <strong>18&nbsp;años o más</strong>&nbsp;?',
    'age.oui': 'Sí, tengo 18 años',
    'age.non': 'No',

    'tuiles.entete': 'Comprobación',
    'tuiles.consigne': 'Toca las 3 hojas',
    'tuiles.texte': 'Un momento, comprobamos que no eres un robot.',
    'tuiles.valider': 'Validar',

    'verif.entete': 'Acceso controlado',
    'verif.titre': 'Verificación necesaria',
    'verif.fine':
      'La tienda no guarda tu documento: permanece en la conversación de ' +
      'Telegram, y puedes borrarlo una vez hecha la verificación.',
    'verif.ouvrir': 'Abrir la conversación',
    'verif.attendre': 'Ver la tienda mientras tanto',

    'hero.horaires': 'Abierto 7/7 · 13:00 – 00:00',
    'hero.service': 'Encuentro y entrega',

    'tri.defaut': 'Orden: por defecto',
    'tri.nouveautes': 'Novedades primero',
    'tri.prixCroissant': 'Precio, de menor a mayor',
    'tri.prixDecroissant': 'Precio, de mayor a menor',
    'tri.alphabetique': 'Orden alfabético',

    'reprise.titre': 'Lo mismo otra vez',
    'catalogue.videTotal': 'El catálogo está vacío por ahora.',

    'avis.titre': 'Opiniones',
    'avis.voirTous': 'Ver todas las opiniones',
    'avis.commentCetait': '¿Qué tal estuvo?',
    'avis.tonAvis': 'Tu opinión',
    'avis.unMot': 'Unas palabras, si quieres',
    'avis.facultatif': 'opcional',
    'avis.signe': 'Con mi nombre',
    'avis.signeAide': 'Una opinión firmada inspira más confianza.',
    'avis.anonyme': 'Anónimo',
    'avis.anonymeAide': 'Tu opinión aparece sin nombre.',
    'avis.plusTard': 'Más tarde',
    'avis.envoyer': 'Enviar',

    'catalogue.rienNeCorrespond': 'Nada coincide con «{mot}».',
    'catalogue.videCategorie': 'Nada en esta categoría por ahora.',
    'produit.epuiseMinuscule': 'agotado',
    'produit.prevenu': '🔔 Te avisaremos',

    'etat.fermeDans': 'cierra en {duree}',
    'etat.ouvreDans': 'abre en {duree}',
    'etat.minutes': '{n} min',

    'onglet.catalogue': 'Catálogo',
    'onglet.categories': 'Categorías',
    'onglet.contact': 'Contacto',
    'onglet.profil': 'Perfil',

    'catalogue.rechercher': 'Buscar un producto',
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
    'contact.texte':
      'Una duda sobre un producto, un pedido que tarda, una petición especial: '
      + 'escríbenos, respondemos en la conversación.',
    'contact.ouvrir': 'Abrir la conversación',
    'contact.nousEcrire': 'Escríbenos',

    'profil.titre': 'Mi perfil',
    'profil.commandes': 'Pedidos',
    'profil.favoris': 'Favoritos',
    'profil.produits': 'Productos',
    'profil.alertes': 'Avisos',
    'profil.langue': 'Idioma',
    'profil.langueAide': 'Los textos de la tienda. Los productos mantienen el idioma del vendedor.',
    'profil.alertesIntro':
      'Lo que la tienda puede enviarte en esta conversación. '
      + 'Lo apagas y lo vuelves a encender cuando quieras.',
    'profil.stop':
      '⚠️ Enviaste <b>/stop</b> al bot: no recibirás nada hasta que escribas '
      + '<b>/annonces</b> para volver a abrir la puerta.',

    'etat.ouverte': 'Tienda abierta',
    'etat.fermee': 'Tienda cerrada',
    'etat.dispo': 'Disponible ahora',
    'etat.retourA': 'De vuelta a las',
    'etat.fermePourLInstant': 'Cerrado por ahora',

    /* ── Ce que le script dit lui-même ── */
    'msg.chargement': 'Cargando…',
    'msg.injoignable': 'Tienda momentáneamente inaccesible',
    'msg.injoignableTexte':
      'No se ha podido cargar el catálogo. No es que la tienda esté vacía: '
      + 'el servidor no responde como debería.',
    'msg.reessayer': 'Reintentar',
    'msg.catalogueIndispo': 'Catálogo no disponible, inténtalo en un momento.',
    'msg.pieceEnAttente': 'Podrás pedir en cuanto se valide tu documento.',
    'msg.calculEnAttente': 'Todavía no — responde a la suma en la conversación.',
    'msg.articleParti': 'Este artículo ya no está en el catálogo. Aquí tienes el resto de la tienda.',
    'msg.vendeurAbsent': 'La cuenta del vendedor aún no está configurada.',
    'msg.verifIndispo': 'Verificación no disponible. Inténtalo en un momento.',
    'msg.reglageRefuse': 'Ajuste no guardado, inténtalo de nuevo.',

    /* ── L'alerte de retour ── */
    'alerte.inscrit': 'Te escribimos en cuanto vuelva.',
    'alerte.impossible': 'No se puede apuntar por ahora.',

    /* ── Les rayons ── */
    'rayon.unProduit': '1 producto',
    'rayon.produits': '{n} productos',

    /* ── Le contact, en détail ── */
    'contact.vendeurAbsent':
      'La cuenta del vendedor aún no está indicada: vuelve un poco más tarde.',
    'contact.tuEcrisA': 'Escribes a @{nom}. Respondemos en cuanto estemos disponibles.',
    'contact.onPrend': 'Estamos tomando pedidos.',
    'contact.onRouvre': 'Volvemos a abrir pronto.',
    'contact.retrait': 'Recogida en mano',
    'contact.retraitDetail': 'Cita acordada en la conversación.',
    'contact.livraison': 'Entrega',
    'contact.livraisonDetail': 'La dirección se pide al hacer el pedido.',
    'contact.especes': 'Pago en efectivo',
    'contact.especesDetail': 'En la entrega, nada por adelantado.',

    /* ── Les favoris ── */
    'favori.mettre': 'Añadir a favoritos',
    'favori.retirer': 'Quitar de favoritos',
    'favori.epuiseAlerte': 'Agotado — activa el aviso de vuelta',
    'favoris.desactives': 'Los favoritos no están activados en esta tienda.',
    'favoris.vide': 'Toca el ♥ en un producto para guardarlo aquí.',

    /* ── Les commandes ── */
    'commandes.desactivees': 'El historial de pedidos no está activado en esta tienda.',
    'commandes.vide': 'Todavía no has hecho ningún pedido.',
    'commandes.depuisTelegram': 'Abre la tienda desde Telegram para ver tus pedidos.',
    'commandes.profilIndispo': 'Perfil no disponible por el momento.',
    'commandes.reprendre': '🔁 Repetir este pedido',
    'profil.client': 'Cliente de {boutique}',

    /* ── Les avis, suite ── */
    'avis.compte': 'Opiniones ({n})',
    'avis.voirLesN': 'Ver las {n} opiniones',
    'avis.uneEtoile': '{n} estrella',
    'avis.desEtoiles': '{n} estrellas',
    'avis.toucheUneEtoile': 'Toca al menos una estrella.',
    'avis.merci': '¡Gracias por tu opinión!',
    'avis.envoi': 'Enviando…',
    'avis.refuse': 'Opinión rechazada.',
    'avis.tonAvisSur': 'Tu opinión sobre {quoi}',
    'avis.reponseBoutique': 'Respuesta de la tienda',

    /* ── La musique ── */
    'juke.ouvrir': 'Abrir el reproductor de música',

    /* ── Les médias ── */
    'media.video': '▶ Vídeo',

    /* ── La mention légale, l'accès, la vérification ── */
    'legal.mention':
      'Productos reservados a personas mayores de edad. Comprueba la legislación vigente '
      + 'donde estés antes de pedir: la disponibilidad depende de tu jurisdicción.',
    'titre.page': 'Tienda',
    'etat.compteBloque':
      'Esta cuenta no puede hacer pedidos. Escríbenos en la conversación si es un error.',
    'etat.fermeeMessage': 'La tienda está cerrada por el momento.',
    'etat.ouvertCourt': 'Abierto',
    'etat.fermeCourt': 'Cerrado',
    'verif.texteAucune':
      'Para pedir aquí hay que validar un documento de identidad. Envíalo en foto '
      + 'en la conversación del bot: el vendedor lo mira y te responde.',
    'verif.texteEnCours':
      'Tu documento está en proceso de verificación. Recibirás la respuesta en la conversación del bot.',
    'verif.texteRefusee':
      'La verificación ha sido rechazada. Escríbenos en la conversación si crees que es un error.',
    'verif.titreEnCours': 'En verificación',
    'verif.titreRefusee': 'Verificación rechazada',
    'captcha.rate': 'Fallaste. Inténtalo otra vez.',

    /* ── Les suggestions ── */
    'produit.memeCategorieAvec': 'Misma categoría · {cat}',

    /* ── Ce qu'on écrit au vendeur ── */
    'msg.bonjourCommander': '¡Hola! Quiero hacer un pedido en {boutique} ⚡',
    'msg.bonjourQuestion': '¡Hola! Una pregunta sobre {boutique} ⚡',
    'msg.bonjourRecommander': '¡Hola! Quiero repetir el mismo pedido en {boutique} ⚡',
    'msg.article': 'Artículo',

    /* ── Le retour ── */
    'retour.simple': 'Volver',
    'retour.catalogue': 'Volver al catálogo',
    'retour.categories': 'Volver a las categorías',
    'retour.profil': 'Volver a mi perfil',

    /* ── Les listes de noms ── */
    'liste.etAutre': '{liste} y {n} más',
    'liste.etAutres': '{liste} y {n} más',

    /* ── L'écran d'avis ── */
    'avis.ajouteUnMot': 'Añade un comentario',
    'avis.tuAsNote': 'Has valorado {quoi}',
    'avis.dejaNote': 'Ya has valorado {quoi}. Añade un comentario, si quieres.',
    'avis.commandeRef': 'Pedido {ref} — {quoi}',
    'avis.avecPrenom': 'Como «{prenom}»',

    /* ── Ce que lit une synthèse vocale ── */
    'aria.effacer': 'Borrar la búsqueda',
    'aria.trier': 'Ordenar los productos',
    'aria.fermer': 'Cerrar',
    'aria.fiche': 'Ficha del producto',
    'aria.navigation': 'Navegación',
    'aria.medias': 'Medios',
    'aria.mediaPrec': 'Medio anterior',
    'aria.mediaSuiv': 'Medio siguiente',
    'aria.question': 'Hacer una pregunta sobre este producto',
    'aria.signer': 'Firmar tu opinión',

    /* ── Le lecteur ── */
    'juke.menu': 'Reproductor de música',
    'juke.lecture': 'Reproducir',
    'juke.pause': 'Pausa',
    'juke.precedent': 'Tema anterior',
    'juke.suivant': 'Tema siguiente',

    /* ── Ce qui reste privé dans un avis ── */
    'avis.noteVie':
      'En ambos casos, ni tu usuario de Telegram, ni tu número, ni tu dirección se publican. '
      + 'El vendedor sí ve siempre qué pedido se ha valorado.',

    /* ── Les canaux d'alerte ── */
    'alertes.nouveautes': 'Productos nuevos',
    'alertes.nouveautesAide': 'Un mensaje cuando llega un artículo al catálogo.',
    'alertes.promos': 'Ofertas y códigos',
    'alertes.promosAide': 'Un mensaje cuando empieza un descuento o un código promocional.',

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
