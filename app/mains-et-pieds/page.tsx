import type { Metadata } from "next";
import { getCategorie } from "@/content/soins";
import { PageSoins } from "@/components/PageSoins";

export const metadata: Metadata = {
  title: "Manucure à Saint-Vit",
  description:
    "Manucure, pose de vernis, french manucure, pose d'ongles en gel, kapping gel. Beauté des mains et des pieds à l'institut Peau de Pêche.",
};

export default function Page() {
  const categorie = getCategorie("mains-et-pieds")!;
  return <PageSoins categorie={categorie} />;
}
