/**
 * LES QUATRE AVANTAGES (page d'accueil)
 * =======================================
 * Ces quatre points sont volontairement tous vérifiables — aucun chiffre
 * inventé. Si l'un d'eux change (par exemple une nouvelle marque), modifie
 * le texte ici, rien d'autre à toucher.
 */

export type Avantage = {
  titre: string;
  sousTitre: string;
  icone: "annees" | "marques" | "surmesure" | "praticienne";
};

export const avantages: Avantage[] = [
  {
    titre: "30 ans d'expérience",
    sousTitre: "Virginie vous accueille depuis trois décennies à Saint-Vit.",
    icone: "annees",
  },
  {
    titre: "Marques professionnelles",
    sousTitre: "Guinot, Yon-Ka et Masters Colors, réservées aux cabines.",
    icone: "marques",
  },
  {
    titre: "Soins sur mesure",
    sousTitre: "Chaque soin est adapté à votre peau et à votre emploi du temps.",
    icone: "surmesure",
  },
  {
    titre: "Une seule praticienne",
    sousTitre: "Vous êtes toujours suivie par la même personne.",
    icone: "praticienne",
  },
];
