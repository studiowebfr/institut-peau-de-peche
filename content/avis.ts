/**
 * AVIS CLIENTES
 * ==============
 * ⚠️ RÈGLE ABSOLUE : tant que ces avis sont marqués `exemple: true`, ils ne
 * doivent JAMAIS porter de prénom réel ni de portrait réel — d'où "Cliente
 * de l'institut" et une initiale neutre. Remplace-les par de vrais avis,
 * avec l'accord écrit de chaque cliente, avant de passer `exemple` à
 * `false`. Ne mets jamais de note chiffrée ou d'étoiles tant que les avis
 * sont des exemples : le composant les masque automatiquement.
 */

export type Avis = {
  texte: string;
  auteur: string;
  exemple: boolean;
};

export const avis: Avis[] = [
  {
    texte:
      "Exemple de présentation — un avis réel, avec l'accord écrit de la cliente, prendra cette place.",
    auteur: "Cliente de l'institut",
    exemple: true,
  },
  {
    texte:
      "Exemple de présentation — un avis réel, avec l'accord écrit de la cliente, prendra cette place.",
    auteur: "Cliente de l'institut",
    exemple: true,
  },
  {
    texte:
      "Exemple de présentation — un avis réel, avec l'accord écrit de la cliente, prendra cette place.",
    auteur: "Cliente de l'institut",
    exemple: true,
  },
];
