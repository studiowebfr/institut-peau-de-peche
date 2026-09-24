import type { NextConfig } from "next";

/**
 * Table de redirections 301 — migration depuis institutdebeautebesancon.com.
 * Chaque ancienne URL doit rediriger vers sa nouvelle équivalente. Ne jamais
 * supprimer une entrée sans confirmer qu'elle n'est plus indexée.
 */
const redirectsAncienSite = [
  { source: "/index.php", destination: "/" },
  {
    source:
      "/page/2243_accueil-institut-de-beaute-peau-de-peche-a-saint-vit-pour-profiter-dun-moment-de-detente-et-bienetre-lors-dun-soin-du-visagedu-corps-dune-manucuried.php",
    destination: "/",
  },
  {
    source:
      "/page/2260_les-soins-du-visage-nettoyage-profond-phyto-aromatique-soin-antiage-soin-lifting-soin-aux-aha-soin-hydratant-soin-homme-soin-puretesoin-aux-pierres-chaudessoin-phyto-aromatique-da.php",
    destination: "/soins-visage",
  },
  {
    source:
      "/page/2258_les-soins-du-corps-minceur-fermete-detente-gommage-modelage-relaxant-soin-jambes-legeres-hydratationenveloppement-aux-algues.php",
    destination: "/soins-corps",
  },
  {
    source:
      "/page/2259_epilation-a-la-cire-tiede-jetable-epilation-longue-duree-avec-epil-confortforfaits-epilation-epilation-jambes-maillot-aisselles-visage-dos-torse-bra.php",
    destination: "/epilation",
  },
  {
    source:
      "/page/2262_beaute-des-mains-manucurie-soin-pose-de-vernis-et-french-manucure-pose-dongles-en-gel-kapping-gel-mains-et-pieds.php",
    destination: "/mains-et-pieds",
  },
  {
    source:
      "/page/2261_maquillage-maquillage-soiree-maquillage-mariage-cours-dauto-maquillage.php",
    destination: "/maquillage",
  },
  {
    source:
      "/page/2263_offrir-un-soin-cheque-cadeau-soin-du-visage-soin-du-corps-manucurie-maquillage-epilation.php",
    destination: "/cheque-cadeau",
  },
  {
    source:
      "/page/2267_les_produits_de_soin_cabine_et_vente_guinot_yon_ka_masters_colors_.php",
    destination: "/l-institut",
  },
  {
    source:
      "/page/2266_nos_conseils_afin_de_profiter_au_mieux_des_soins_du_visage_et_du_corps_epilation_maquillage_ou_manucurie_pour_un_moment_de_detente_parfait_.php",
    destination: "/l-institut",
  },
  { source: "/albumphoto.php", destination: "/" },
  { source: "/contact.php", destination: "/contact" },
  { source: "/planacces.php", destination: "/contact" },
  { source: "/ml.php", destination: "/mentions-legales" },
];

/**
 * GITHUB_PAGES=true bascule le build en export statique pour publier un
 * aperçu public sur GitHub Pages (repo.github.io/<nom-du-repo>).
 *
 * ⚠️ Ce mode n'est PAS le déploiement de production visé par le brief :
 * GitHub Pages ne sait pas exécuter de code serveur, donc dans ce mode :
 *  - les redirections 301 (§6 du brief) ne sont pas actives — un hébergeur
 *    Node (Vercel, Netlify…) reste nécessaire pour la mise en ligne réelle ;
 *  - la route API /api/rendez-vous est absente du build (voir le script
 *    scripts/build-github-pages.sh qui l'exclut temporairement) — le
 *    formulaire affiche alors son message de repli invitant à appeler
 *    l'institut, au lieu d'envoyer l'e-mail.
 */
const exportGitHubPages = process.env.GITHUB_PAGES === "true";
const nomDepot = "institut-peau-de-peche";

const nextConfig: NextConfig = {
  images: {
    unoptimized: exportGitHubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  ...(exportGitHubPages
    ? {
        output: "export" as const,
        basePath: `/${nomDepot}`,
        trailingSlash: true,
      }
    : {
        async redirects() {
          return redirectsAncienSite.map((r) => ({ ...r, permanent: true }));
        },
      }),
};

export default nextConfig;
