import type { Metadata } from "next";
import { institut } from "@/content/institut";
import { parcours, parcoursExemple } from "@/content/a-propos";
import { Bouton } from "@/components/Bouton";
import { MiseAuPoint } from "@/components/MiseAuPoint";
import { IconPraticienne } from "@/components/icons/icons";

export const metadata: Metadata = {
  title: "L'institut Peau de Pêche — Virginie, Saint-Vit",
  description:
    "Virginie vous accueille depuis 30 ans à l'institut Peau de Pêche, Saint-Vit. Marques professionnelles Guinot, Yon-Ka, Masters Colors.",
};

export default function InstitutPage() {
  return (
    <>
      <section className="bg-ivoire">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:py-20">
          <p className="eyebrow text-taupe-texte">L&apos;institut</p>
          <h1 className="mt-3 font-display text-4xl text-encre sm:text-5xl">
            {institut.praticienne} vous accueille depuis {institut.anneesExperience} ans
          </h1>
        </div>
      </section>

      <section className="bg-creme">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            {/*
              Aucune photo de mannequin présentée comme Virginie. Cet
              emplacement reste un placeholder visible tant que le vrai
              portrait (accord écrit requis, voir docs/) n'est pas fourni.
            */}
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-champagne-clair bg-ivoire px-6 text-center">
              <IconPraticienne className="h-10 w-10 text-champagne-texte" />
              <p className="text-sm text-taupe-texte">
                Portrait de {institut.praticienne} — à intégrer après le shooting
                <br />
                (accord écrit requis, voir docs/cession-image.md)
              </p>
            </div>
          </div>

          <div>
            {parcours.map((p, i) => (
              <p key={i} className="mb-4 text-encre/85">
                {p}
              </p>
            ))}
            {parcoursExemple && (
              <p className="text-xs italic text-taupe-texte">exemple de présentation</p>
            )}

            <div className="mt-8">
              <Bouton href="/contact#rendez-vous">Prendre rendez-vous</Bouton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <MiseAuPoint
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8"
            alt="Produits de soin professionnels présentés en cabine"
            sizes="(min-width: 768px) 45vw, 90vw"
            className="aspect-[4/3] rounded-sm"
          />
          <div>
            <p className="eyebrow text-taupe-texte">Les marques utilisées en cabine</p>
            <h2 className="mt-3 font-display text-3xl text-encre">
              Des marques professionnelles, pas de la grande distribution
            </h2>
            <p className="mt-4 max-w-md text-encre/85">
              Les soins sont réalisés et les produits sélectionnés parmi trois marques
              professionnelles de cabine :
            </p>
            <ul className="mt-4 space-y-1.5 font-display text-xl text-champagne-texte">
              {institut.marques.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-taupe-texte">
              [[À VALIDER]] accord écrit pour la citation de ces marques
            </p>
          </div>
        </div>
      </section>

      <section className="bg-creme">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl text-encre">Le lieu</h2>
          <p className="mx-auto mt-4 max-w-xl text-encre/85">
            L&apos;institut se trouve dans la galerie du Super U, ZA les Belles Ouvrières à
            Saint-Vit — un repère facile à trouver, avec un stationnement gratuit et abondant juste
            devant.
          </p>
          <div className="mt-7">
            <Bouton href="/contact" variante="cerne">
              Voir l&apos;accès
            </Bouton>
          </div>
        </div>
      </section>
    </>
  );
}
