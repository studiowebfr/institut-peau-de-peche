import type { Metadata } from "next";
import { getCategorie } from "@/content/soins";
import { PageSoins } from "@/components/PageSoins";

export const metadata: Metadata = {
  title: "Soins du visage à Saint-Vit",
  description:
    "Nettoyage profond, soin anti-âge, soin hydratant, soin homme... Neuf soins du visage à l'institut Peau de Pêche, à Saint-Vit.",
};

export default function Page() {
  const categorie = getCategorie("soins-visage")!;
  return <PageSoins categorie={categorie} />;
}
