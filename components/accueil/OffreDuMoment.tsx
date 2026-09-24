import { offre } from "@/content/offre";
import { Bouton } from "@/components/Bouton";
import { MiseAuPoint } from "@/components/MiseAuPoint";

export function OffreDuMoment() {
  if (!offre) return null;

  return (
    <section className="bg-sauge">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow text-creme/90">{offre.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl text-creme sm:text-4xl">{offre.titre}</h2>
          <p className="mt-4 max-w-md text-encre/90">{offre.description}</p>
          <p className="chiffres-tabulaires mt-5 font-display text-2xl text-creme">{offre.prix}</p>
          {offre.exemple && (
            <span className="mt-1 block text-xs italic text-creme/80">exemple de présentation</span>
          )}
          <div className="mt-6">
            <Bouton href="/contact#rendez-vous" variante="plein" className="bg-champagne-texte">
              Prendre rendez-vous
            </Bouton>
          </div>
        </div>
        <MiseAuPoint
          src={offre.image}
          alt={offre.imageAlt}
          sizes="(min-width: 768px) 45vw, 90vw"
          className="aspect-[4/3] rounded-sm"
        />
      </div>
    </section>
  );
}
