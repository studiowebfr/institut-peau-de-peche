/**
 * FICHE D'IDENTITÉ DE L'INSTITUT
 * ================================
 * C'est le fichier le plus important : nom, adresse, téléphone, réseaux.
 * Ces informations apparaissent sur presque toutes les pages du site.
 *
 * Pour modifier un champ : remplace juste le texte entre guillemets " "
 * et enregistre. Ne touche pas au reste (les noms avant le signe :).
 */

export const institut = {
  nom: "Institut Peau de Pêche",
  praticienne: "Virginie", // [[À VALIDER]] nom de famille et statut à ajouter quand connus
  anneesExperience: 30,

  adresse: {
    ligne1: "Galerie du Super U",
    ligne2: "ZA les Belles Ouvrières",
    codePostal: "25410",
    ville: "Saint-Vit",
  },

  telephone: "03 81 87 61 23",
  telephoneLien: "tel:+33381876123",

  // [[À COMPLÉTER]] — le site actuel n'a qu'un formulaire, pas d'e-mail public
  email: "",

  reseaux: {
    facebook: "https://www.facebook.com/v.peaudepeche/",
    instagram: "https://www.instagram.com/institutpeaudepeche25/",
  },

  marques: ["Guinot", "Yon-Ka", "Masters Colors"], // [[À VALIDER]] accord écrit pour citer ces marques

  /**
   * MODE MAQUETTE
   * -------------
   * Tant que c'est à `true` :
   *  - un bandeau "Maquette de présentation" s'affiche en haut de chaque page
   *  - le site entier passe en noindex (invisible pour Google)
   *  - les blocs marqués `exemple: true` affichent une mention "exemple de présentation"
   *
   * Quand tout le contenu réel (horaires, tarifs, textes validés par Virginie)
   * est en place : passe cette valeur à `false`. Le bandeau, les mentions et le
   * noindex disparaissent automatiquement, et le site devient indexable.
   */
  maquette: true,
} as const;

export type Institut = typeof institut;
