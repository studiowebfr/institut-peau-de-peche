import { Bouton } from "@/components/Bouton";
import { MiseAuPoint } from "@/components/MiseAuPoint";
import { IconCheck } from "@/components/icons/icons";

const points = [
  "Trente ans d'expérience à Saint-Vit",
  "Marques professionnelles de cabine : Guinot, Yon-Ka, Masters Colors",
  "Des soins sur mesure, adaptés à vos besoins",
  "Des chèques cadeaux, sur tous les soins",
];

export function PourquoiPeauDePeche() {
  return (
    <section className="bg-creme">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow text-taupe-texte">Pourquoi Peau de Pêche</p>
          <h2 className="mt-3 font-display text-3xl text-encre sm:text-4xl">
            Un institut à taille humaine
          </h2>
          <p className="mt-5 max-w-md text-encre/85">
            Bienvenue à l&apos;institut de beauté Peau de Pêche, situé dans la galerie de Super U à
            Saint-Vit. Je vous accueille depuis trente ans, avec un soin particulier pour chaque
            visage et chaque corps qui passe par la cabine.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-encre">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-champagne-texte" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Bouton href="/l-institut" variante="cerne">
              En savoir plus sur l&apos;institut
            </Bouton>
          </div>
        </div>
        <MiseAuPoint
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c"
          alt="Intérieur soigné de l'institut de beauté"
          sizes="(min-width: 768px) 45vw, 90vw"
          className="aspect-[4/5] rounded-sm"
        />
      </div>
    </section>
  );
}
