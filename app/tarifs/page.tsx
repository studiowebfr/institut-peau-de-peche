import type { Metadata } from "next";
import { categories } from "@/content/soins";
import { Bouton } from "@/components/Bouton";
import { institut } from "@/content/institut";

export const metadata: Metadata = {
  title: "Tarifs — Institut Peau de Pêche Saint-Vit",
  description:
    "La grille tarifaire complète de l'institut Peau de Pêche à Saint-Vit : soins du visage, du corps, épilation, mains et pieds, maquillage.",
};

export default function TarifsPage() {
  return (
    <>
      <section className="bg-ivoire">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center md:py-20">
          <p className="eyebrow text-taupe-texte">Institut de beauté · Saint-Vit</p>
          <h1 className="mt-3 font-display text-4xl text-encre sm:text-5xl">Nos tarifs</h1>
          <p className="mx-auto mt-5 max-w-xl text-encre/85">
            Un devis précis est toujours établi avec vous lors du premier rendez-vous — cette
            grille donne une base de repère.
          </p>
          {institut.maquette && (
            <p className="mt-3 text-xs italic text-taupe-texte">
              exemple de présentation — grille à confirmer avec l&apos;institut
            </p>
          )}
        </div>
      </section>

      <nav
        aria-label="Familles de soins"
        className="sticky top-[57px] z-30 border-y border-champagne-clair/40 bg-creme/95 backdrop-blur-sm md:top-[73px]"
      >
        <div className="mx-auto flex max-w-5xl gap-6 overflow-x-auto px-6 py-3 text-sm">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="eyebrow shrink-0 text-taupe-texte hover:text-champagne-texte"
            >
              {c.titre}
            </a>
          ))}
        </div>
      </nav>

      <section className="bg-creme">
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
          {categories.map((categorie) => (
            <div key={categorie.slug} id={categorie.slug} className="scroll-mt-28">
              <h2 className="font-display text-2xl text-encre">{categorie.titre}</h2>
              <table className="mt-5 w-full border-collapse text-sm">
                <caption className="sr-only">Tarifs — {categorie.titre}</caption>
                <thead>
                  <tr className="border-b border-champagne-clair/60 text-left">
                    <th scope="col" className="py-2 font-medium text-taupe-texte">
                      Soin
                    </th>
                    <th scope="col" className="py-2 font-medium text-taupe-texte">
                      Durée
                    </th>
                    <th scope="col" className="py-2 text-right font-medium text-taupe-texte">
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categorie.prestations.map((p) => (
                    <tr key={p.slug} className="border-b border-champagne-clair/30">
                      <th scope="row" className="py-3 pr-4 text-left font-normal text-encre">
                        {p.nom}
                        {p.exemple && (
                          <span className="block text-[0.68rem] italic text-taupe-texte">
                            exemple de présentation
                          </span>
                        )}
                      </th>
                      <td className="chiffres-tabulaires py-3 text-taupe-texte">{p.duree}</td>
                      <td className="chiffres-tabulaires py-3 text-right font-medium text-champagne-texte">
                        {p.tarif}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 border-t border-champagne-clair/40 pt-10">
            <Bouton href="/contact#rendez-vous">Prendre rendez-vous</Bouton>
            <Bouton href="/cheque-cadeau" variante="cerne">
              Offrir un soin
            </Bouton>
          </div>
        </div>
      </section>
    </>
  );
}
