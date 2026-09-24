import type { Metadata } from "next";
import { institut } from "@/content/institut";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl text-encre">Mentions légales</h1>

        <div className="prose-sm mt-8 space-y-6 text-encre/85">
          <div>
            <h2 className="font-display text-xl text-encre">Éditeur du site</h2>
            <p className="mt-2">
              {institut.nom}
              <br />
              {institut.adresse.ligne1}, {institut.adresse.ligne2}
              <br />
              {institut.adresse.codePostal} {institut.adresse.ville}
              <br />
              Téléphone : {institut.telephone}
            </p>
            <p className="mt-2 text-sm italic text-taupe-texte">
              [[À COMPLÉTER]] Dénomination sociale, forme juridique, capital le cas échéant,
              numéro SIRET, RCS, numéro de TVA intracommunautaire, nom du responsable de
              publication.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Hébergement</h2>
            <p className="mt-2 text-sm italic text-taupe-texte">
              [[À COMPLÉTER]] Nom, adresse et contact de l&apos;hébergeur du site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus de ce site (textes, images, logo) est la propriété de{" "}
              {institut.nom} ou de ses partenaires, sauf mention contraire. Toute reproduction
              sans autorisation est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Crédits photographiques</h2>
            <p className="mt-2">
              Les photographies utilisées à titre temporaire proviennent d&apos;Unsplash — voir le
              fichier CREDITS.md du projet. Elles seront remplacées par des photographies propres
              à l&apos;institut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
