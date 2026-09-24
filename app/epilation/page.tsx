import type { Metadata } from "next";
import { getCategorie } from "@/content/soins";
import { PageSoins } from "@/components/PageSoins";

export const metadata: Metadata = {
  title: "Épilation à Saint-Vit",
  description:
    "Cire tiède jetable et épilation longue durée avec Épil Confort, jambes, maillot, visage. L'épilation à l'institut Peau de Pêche, Saint-Vit.",
};

export default function Page() {
  const categorie = getCategorie("epilation")!;
  return <PageSoins categorie={categorie} />;
}
