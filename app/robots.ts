import type { MetadataRoute } from "next";
import { institut } from "@/content/institut";

export const dynamic = "force-static";

const url = "https://institut-peaudepeche.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: institut.maquette ? [] : "/",
      disallow: institut.maquette ? "/" : undefined,
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
