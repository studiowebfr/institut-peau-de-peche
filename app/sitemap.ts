import type { MetadataRoute } from "next";
import { institut } from "@/content/institut";

const url = "https://institut-peaudepeche.fr";

export const dynamic = "force-static";

const routes = [
  "",
  "/soins-visage",
  "/soins-corps",
  "/epilation",
  "/mains-et-pieds",
  "/maquillage",
  "/tarifs",
  "/cheque-cadeau",
  "/l-institut",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Tant que le site est en maquette (noindex), le sitemap n'a pas d'utilité
  // réelle mais reste généré pour ne rien casser une fois `maquette: false`.
  if (institut.maquette) return [];

  return routes.map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
  }));
}
