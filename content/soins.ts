/**
 * CATALOGUE DES SOINS
 * ====================
 * Les NOMS des soins sont réels (relevés sur l'ancien site). Les
 * DESCRIPTIONS, DURÉES et TARIFS sont des exemples cohérents en attendant
 * la validation de Virginie — chaque entrée avec `exemple: true` porte la
 * mention "exemple de présentation" sur le site tant que
 * `institut.maquette` est à `true`.
 *
 * Pour mettre à jour un soin : modifie le texte entre guillemets. Pour
 * qu'un soin ne soit plus marqué "exemple", passe son `exemple` à `false`
 * une fois la description et le tarif confirmés avec Virginie.
 *
 * ⚠️ Aucune allégation de résultat dans les descriptions ("anti-âge",
 * "lifting" et "minceur" sont des noms de protocoles, pas des promesses).
 */

export type Prestation = {
  nom: string;
  slug: string;
  description: string;
  duree: string;
  tarif: string;
  exemple: boolean;
};

export type Categorie = {
  slug: "soins-visage" | "soins-corps" | "epilation" | "mains-et-pieds" | "maquillage";
  titre: string;
  intro: string;
  image: string;
  imageAlt: string;
  prestations: Prestation[];
};

export const categories: Categorie[] = [
  {
    slug: "soins-visage",
    titre: "Soins du visage",
    intro:
      "Neuf protocoles, du nettoyage profond au soin aux pierres chaudes, pour un moment adapté à votre peau et à votre emploi du temps.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    imageAlt: "Soin du visage en institut, lumière naturelle douce",
    prestations: [
      {
        nom: "Nettoyage profond",
        slug: "nettoyage-profond",
        description:
          "Un protocole de nettoyage en cabine, étape par étape, pour préparer la peau avant tout autre soin.",
        duree: "45 min",
        tarif: "48 €",
        exemple: true,
      },
      {
        nom: "Soin phyto-aromatique",
        slug: "phyto-aromatique",
        description: "Un protocole aux huiles essentielles, choisi selon votre type de peau.",
        duree: "1 h",
        tarif: "62 €",
        exemple: true,
      },
      {
        nom: "Soin anti-âge",
        slug: "anti-age",
        description: "Un protocole ciblé, avec les gammes professionnelles utilisées en cabine.",
        duree: "1 h",
        tarif: "68 €",
        exemple: true,
      },
      {
        nom: "Soin lifting",
        slug: "lifting",
        description: "Un protocole en cabine associant gestes manuels et produits professionnels.",
        duree: "1 h",
        tarif: "70 €",
        exemple: true,
      },
      {
        nom: "Soin aux AHA",
        slug: "aux-aha",
        description: "Un protocole exfoliant doux, réalisé en cabine avec un suivi adapté.",
        duree: "45 min",
        tarif: "58 €",
        exemple: true,
      },
      {
        nom: "Soin hydratant",
        slug: "hydratant",
        description: "Un protocole pensé pour les peaux qui ont besoin d'un apport en confort.",
        duree: "45 min",
        tarif: "52 €",
        exemple: true,
      },
      {
        nom: "Soin homme",
        slug: "homme",
        description: "Un protocole de soin du visage adapté à la peau masculine.",
        duree: "45 min",
        tarif: "52 €",
        exemple: true,
      },
      {
        nom: "Soin pureté",
        slug: "purete",
        description: "Un protocole pour les peaux mixtes à grasses, réalisé en cabine.",
        duree: "1 h",
        tarif: "60 €",
        exemple: true,
      },
      {
        nom: "Soin aux pierres chaudes",
        slug: "pierres-chaudes",
        description: "Un protocole associant le soin du visage à la chaleur des pierres.",
        duree: "1 h 15",
        tarif: "78 €",
        exemple: true,
      },
    ],
  },
  {
    slug: "soins-corps",
    titre: "Soins du corps",
    intro: "Huit protocoles pour un moment détente ou un soin ciblé, sur mesure.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    imageAlt: "Modelage du corps en institut",
    prestations: [
      {
        nom: "Soin minceur",
        slug: "minceur",
        description: "Un protocole ciblé, réalisé en cabine avec les produits professionnels de l'institut.",
        duree: "1 h",
        tarif: "72 €",
        exemple: true,
      },
      {
        nom: "Soin fermeté",
        slug: "fermete",
        description: "Un protocole en cabine associant modelage et produits dédiés.",
        duree: "1 h",
        tarif: "72 €",
        exemple: true,
      },
      {
        nom: "Soin détente",
        slug: "detente",
        description: "Un moment calme, pensé pour souffler entre deux obligations.",
        duree: "1 h",
        tarif: "65 €",
        exemple: true,
      },
      {
        nom: "Gommage corps",
        slug: "gommage",
        description: "Un protocole d'exfoliation du corps, en préparation d'un autre soin ou seul.",
        duree: "30 min",
        tarif: "38 €",
        exemple: true,
      },
      {
        nom: "Modelage relaxant",
        slug: "modelage-relaxant",
        description: "Un modelage du corps à but détente, sans visée thérapeutique.",
        duree: "1 h",
        tarif: "68 €",
        exemple: true,
      },
      {
        nom: "Soin jambes légères",
        slug: "jambes-legeres",
        description: "Un protocole rafraîchissant pour les jambes, en cabine.",
        duree: "45 min",
        tarif: "48 €",
        exemple: true,
      },
      {
        nom: "Soin hydratation corps",
        slug: "hydratation",
        description: "Un protocole d'hydratation du corps avec les gammes professionnelles utilisées en cabine.",
        duree: "45 min",
        tarif: "55 €",
        exemple: true,
      },
      {
        nom: "Enveloppement aux algues",
        slug: "enveloppement-algues",
        description: "Un protocole d'enveloppement, en cabine, avec un temps de pose accompagné.",
        duree: "1 h",
        tarif: "70 €",
        exemple: true,
      },
    ],
  },
  {
    slug: "epilation",
    titre: "Épilation",
    intro: "Cire tiède jetable et épilation longue durée avec Épil Confort, à la demande ou en forfait.",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af",
    imageAlt: "Cabine de soin, matériel d'épilation professionnel",
    prestations: [
      {
        nom: "Épilation jambes",
        slug: "jambes",
        description: "À la cire tiède jetable ou en épilation longue durée avec Épil Confort, au choix.",
        duree: "30–45 min",
        tarif: "18–28 €",
        exemple: true,
      },
      {
        nom: "Épilation maillot",
        slug: "maillot",
        description: "À la cire tiède jetable, plusieurs formules selon vos préférences.",
        duree: "15–20 min",
        tarif: "12–20 €",
        exemple: true,
      },
      {
        nom: "Épilation aisselles",
        slug: "aisselles",
        description: "À la cire tiède jetable.",
        duree: "10 min",
        tarif: "10 €",
        exemple: true,
      },
      {
        nom: "Épilation visage",
        slug: "visage",
        description: "Sourcils, lèvre ou menton, à la cire tiède jetable.",
        duree: "10–15 min",
        tarif: "8–14 €",
        exemple: true,
      },
      {
        nom: "Épilation dos",
        slug: "dos",
        description: "À la cire tiède jetable.",
        duree: "20 min",
        tarif: "22 €",
        exemple: true,
      },
      {
        nom: "Épilation torse",
        slug: "torse",
        description: "À la cire tiède jetable.",
        duree: "20 min",
        tarif: "22 €",
        exemple: true,
      },
      {
        nom: "Épilation bras",
        slug: "bras",
        description: "À la cire tiède jetable.",
        duree: "20 min",
        tarif: "16 €",
        exemple: true,
      },
      {
        nom: "Forfait épilation",
        slug: "forfait",
        description: "Plusieurs zones combinées — le détail est établi avec vous en cabine.",
        duree: "Variable",
        tarif: "Sur devis",
        exemple: true,
      },
    ],
  },
  {
    slug: "mains-et-pieds",
    titre: "Beauté des mains et des pieds",
    intro: "Manucure, pose de vernis, french manucure, pose d'ongles en gel et kapping gel.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
    imageAlt: "Soin des mains en institut",
    prestations: [
      {
        nom: "Manucure",
        slug: "manucure",
        description: "Limage, cuticules et soin des mains, avec ou sans pose de vernis.",
        duree: "45 min",
        tarif: "32 €",
        exemple: true,
      },
      {
        nom: "Soin des mains",
        slug: "soin-mains",
        description: "Un protocole d'hydratation et de confort pour les mains.",
        duree: "30 min",
        tarif: "26 €",
        exemple: true,
      },
      {
        nom: "Pose de vernis",
        slug: "pose-vernis",
        description: "Pose simple, sur ongles naturels préparés.",
        duree: "20 min",
        tarif: "16 €",
        exemple: true,
      },
      {
        nom: "French manucure",
        slug: "french-manucure",
        description: "Manucure avec finition french, classique ou colorée.",
        duree: "50 min",
        tarif: "36 €",
        exemple: true,
      },
      {
        nom: "Pose d'ongles en gel",
        slug: "pose-gel",
        description: "Pose complète en gel, avec choix de la forme et de la couleur.",
        duree: "1 h 15",
        tarif: "48 €",
        exemple: true,
      },
      {
        nom: "Kapping gel",
        slug: "kapping-gel",
        description: "Renforcement de l'ongle naturel par une fine couche de gel.",
        duree: "50 min",
        tarif: "38 €",
        exemple: true,
      },
    ],
  },
  {
    slug: "maquillage",
    titre: "Maquillage",
    intro: "Maquillage soirée, maquillage mariage et cours d'auto-maquillage.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    imageAlt: "Maquillage professionnel en institut",
    prestations: [
      {
        nom: "Maquillage soirée",
        slug: "soiree",
        description: "Un maquillage réalisé en cabine, adapté à l'occasion.",
        duree: "45 min",
        tarif: "42 €",
        exemple: true,
      },
      {
        nom: "Maquillage mariage",
        slug: "mariage",
        description: "Essai puis réalisation le jour J, sur rendez-vous dédié.",
        duree: "1 h (+ essai)",
        tarif: "Sur devis",
        exemple: true,
      },
      {
        nom: "Cours d'auto-maquillage",
        slug: "cours-auto-maquillage",
        description: "Un temps individuel pour apprendre les gestes adaptés à votre visage.",
        duree: "1 h 30",
        tarif: "65 €",
        exemple: true,
      },
    ],
  },
];

export function getCategorie(slug: Categorie["slug"]): Categorie | undefined {
  return categories.find((c) => c.slug === slug);
}
