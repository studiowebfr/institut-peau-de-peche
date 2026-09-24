import type { Metadata } from "next";
import { getCategorie } from "@/content/soins";
import { PageSoins } from "@/components/PageSoins";

export const metadata: Metadata = {
  title: "Soins du corps à Saint-Vit",
  description:
    "Modelage relaxant, gommage, enveloppement aux algues, soin jambes légères... Les soins du corps de l'institut Peau de Pêche à Saint-Vit.",
};

export default function Page() {
  const categorie = getCategorie("soins-corps")!;
  return <PageSoins categorie={categorie} />;
}
