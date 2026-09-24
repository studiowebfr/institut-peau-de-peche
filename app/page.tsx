import { Hero } from "@/components/accueil/Hero";
import { Avantages } from "@/components/accueil/Avantages";
import { NosSoins } from "@/components/accueil/NosSoins";
import { OffreDuMoment } from "@/components/accueil/OffreDuMoment";
import { PourquoiPeauDePeche } from "@/components/accueil/PourquoiPeauDePeche";
import { AvisClientes } from "@/components/accueil/AvisClientes";
import { BandeauRendezVous } from "@/components/accueil/BandeauRendezVous";

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <Avantages />
      <NosSoins />
      <OffreDuMoment />
      <PourquoiPeauDePeche />
      <AvisClientes />
      <BandeauRendezVous />
    </>
  );
}
