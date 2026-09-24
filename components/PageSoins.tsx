import type { Categorie } from "@/content/soins";
import { MiseAuPoint } from "@/components/MiseAuPoint";
import { Reveal } from "@/components/Reveal";
import { Bouton } from "@/components/Bouton";
import { institut } from "@/content/institut";

export function PageSoins({ categorie }: { categorie: Categorie }) {
  return (
    <>
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow text-taupe-texte">Institut de beauté · Saint-Vit</p>
            <h1 className="mt-3 font-display text-4xl text-encre sm:text-5xl">{categorie.titre}</h1>
            <p className="mt-5 max-w-md text-encre/85">{categorie.intro}</p>
            <div className="mt-7">
              <Bouton href="/contact#rendez-vous">Prendre rendez-vous</Bouton>
            </div>
          </div>
          <MiseAuPoint
            src={categorie.image}
            alt={categorie.imageAlt}
            sizes="(min-width: 768px) 45vw, 90vw"
            priority
            className="aspect-[4/3] rounded-sm"
          />
        </div>
      </section>

      <section className="bg-creme">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="divide-y divide-champagne-clair/40">
            {categorie.prestations.map((p, i) => (
              <Reveal key={p.slug} delayMs={Math.min(i * 40, 200)} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                <div className="min-w-[200px] flex-1">
                  <h2 className="font-display text-xl text-encre">{p.nom}</h2>
                  <p className="mt-1 text-sm text-taupe-texte">{p.description}</p>
                  {p.exemple && (
                    <span className="mt-1 block text-[0.68rem] italic text-taupe-texte">
                      exemple de présentation
                    </span>
                  )}
                </div>
                <div className="chiffres-tabulaires flex shrink-0 items-baseline gap-4 text-sm text-encre">
                  <span className="text-taupe-texte">{p.duree}</span>
                  <span className="font-medium text-champagne-texte">{p.tarif}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-taupe-texte">
            Un devis précis est établi lors du premier rendez-vous. Voir aussi{" "}
            <a href="/tarifs" className="text-champagne-texte hover:underline">
              la grille tarifaire complète
            </a>
            .
          </p>
          {/* [[À VÉRIFIER]] : un diagnostic de peau gratuit au premier rendez-vous est-il
              vraiment proposé ? Si confirmé, l'ajouter en toutes lettres ci-dessus. */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Bouton href="/contact#rendez-vous">Prendre rendez-vous</Bouton>
            <Bouton href={institut.telephoneLien} variante="cerne">
              Appeler l&apos;institut
            </Bouton>
          </div>
        </div>
      </section>
    </>
  );
}
