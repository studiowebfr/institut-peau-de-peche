import type { Metadata } from "next";
import { institut } from "@/content/institut";
import { FormulaireRendezVous } from "@/components/FormulaireRendezVous";
import { HorairesTable } from "@/components/HorairesTable";
import { CarteAcces } from "@/components/CarteAcces";
import { IconTelephone, IconLieu } from "@/components/icons/icons";

export const metadata: Metadata = {
  title: "Contact — Institut Peau de Pêche, Saint-Vit",
  description:
    "Adresse, horaires et formulaire de rendez-vous de l'institut de beauté Peau de Pêche, galerie du Super U à Saint-Vit.",
};

export default function ContactPage() {
  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-taupe-texte">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-encre sm:text-5xl">
            Venez nous rencontrer
          </h1>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="space-y-3">
              <a href={institut.telephoneLien} className="flex items-center gap-2 text-lg text-encre hover:text-champagne-texte">
                <IconTelephone className="h-5 w-5 text-champagne-texte" />
                {institut.telephone}
              </a>
              <p className="flex items-start gap-2 text-encre/85">
                <IconLieu className="mt-1 h-5 w-5 shrink-0 text-champagne-texte" />
                <span>
                  {institut.adresse.ligne1}
                  <br />
                  {institut.adresse.ligne2}
                  <br />
                  {institut.adresse.codePostal} {institut.adresse.ville}
                </span>
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl text-encre">Horaires</h2>
              <div className="mt-3">
                <HorairesTable />
              </div>
            </div>

            <div className="mt-8">
              <CarteAcces />
            </div>
          </div>

          <div id="rendez-vous" className="scroll-mt-24">
            <h2 className="font-display text-xl text-encre">Demande de rendez-vous</h2>
            <p className="mt-2 text-sm text-taupe-texte">
              L&apos;institut vous recontacte pour confirmer le créneau. Pour une réponse
              immédiate, un appel reste le plus rapide.
            </p>
            <div className="mt-6">
              <FormulaireRendezVous />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
