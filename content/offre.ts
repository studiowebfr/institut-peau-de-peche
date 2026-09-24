/**
 * OFFRE DU MOMENT
 * ================
 * Cette section n'apparaît sur le site QUE si `offre` n'est pas `null`.
 * Pour la retirer (par exemple entre deux offres) : remplace tout le
 * contenu par `export const offre = null;`
 *
 * ⚠️ Jamais de prix barré fictif ("75 € au lieu de 105 €") : c'est une
 * pratique commerciale trompeuse si l'ancien prix n'a pas réellement été
 * pratiqué. Un seul prix, réel, suffit.
 */

export type Offre = {
  eyebrow: string;
  titre: string;
  description: string;
  prix: string;
  image: string;
  imageAlt: string;
  exemple: boolean;
};

export const offre: Offre | null = {
  eyebrow: "L'offre du moment",
  titre: "Soin visage hydratant + gommage corps",
  description:
    "Un protocole combiné, à réserver pour retrouver un moment pour vous entre deux saisons.",
  prix: "à partir de 79 €",
  image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c",
  imageAlt: "Produits de soin en institut, présentation soignée",
  exemple: true,
};
