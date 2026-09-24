import type { Metadata } from "next";
import { getCategorie } from "@/content/soins";
import { PageSoins } from "@/components/PageSoins";

export const metadata: Metadata = {
  title: "Maquillage à Saint-Vit",
  description:
    "Maquillage soirée, maquillage mariage, cours d'auto-maquillage à l'institut Peau de Pêche, Saint-Vit.",
};

export default function Page() {
  const categorie = getCategorie("maquillage")!;
  return <PageSoins categorie={categorie} />;
}
