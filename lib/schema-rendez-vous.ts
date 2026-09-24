import { z } from "zod";
import { categories } from "@/content/soins";

const slugsSoins = categories.map((c) => c.slug) as [string, ...string[]];

export const schemaRendezVous = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(100),
  telephone: z
    .string()
    .trim()
    .min(10, "Numéro de téléphone incomplet.")
    .max(20)
    .regex(/^[0-9+().\s-]+$/, "Numéro de téléphone invalide."),
  email: z.union([z.literal(""), z.string().trim().email("E-mail invalide.")]),
  soinSouhaite: z.enum(slugsSoins).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type DonneesRendezVous = z.infer<typeof schemaRendezVous>;
