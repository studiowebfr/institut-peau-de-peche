import { avantages } from "@/content/avantages";
import { Reveal } from "@/components/Reveal";
import { IconAnnees, IconMarques, IconSurMesure, IconPraticienne } from "@/components/icons/icons";

const icones = {
  annees: IconAnnees,
  marques: IconMarques,
  surmesure: IconSurMesure,
  praticienne: IconPraticienne,
};

export function Avantages() {
  return (
    <section className="bg-ivoire">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4 md:divide-x md:divide-champagne-clair/50 md:py-16">
        {avantages.map((a, i) => {
          const Icone = icones[a.icone];
          return (
            <Reveal key={a.titre} delayMs={i * 80} className="px-2 text-center md:px-8">
              <Icone className="mx-auto h-10 w-10 text-champagne-texte" />
              <h3 className="mt-4 font-display text-lg text-encre">{a.titre}</h3>
              <p className="mt-1.5 text-sm text-taupe-texte">{a.sousTitre}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
