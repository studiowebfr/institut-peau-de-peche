import type { Metadata } from "next";
import { Bouton } from "@/components/Bouton";
import { MiseAuPoint } from "@/components/MiseAuPoint";
import { institut } from "@/content/institut";
import { periodeCadeaux, montantsExemple, montantsSontExemple } from "@/content/cheque-cadeau";
import { IconCheck } from "@/components/icons/icons";

export const metadata: Metadata = {
  title: "Chèque cadeau institut de beauté Doubs",
  description:
    "Offrez un soin à l'institut Peau de Pêche, à Saint-Vit : chèque cadeau valable sur tous les soins du visage, du corps, de manucure ou de maquillage.",
};

export default function ChequeCadeauPage() {
  return (
    <section className={periodeCadeaux ? "bg-sauge" : "bg-ivoire"}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className={`eyebrow ${periodeCadeaux ? "text-creme/90" : "text-taupe-texte"}`}>
            Offrir un soin
          </p>
          <h1
            className={`mt-3 font-display text-4xl sm:text-5xl ${
              periodeCadeaux ? "text-creme" : "text-encre"
            }`}
          >
            Le chèque cadeau Peau de Pêche
          </h1>
          <p className={`mt-5 max-w-md ${periodeCadeaux ? "text-encre/90" : "text-encre/85"}`}>
            Valable sur tous les soins : visage, corps, épilation, mains et pieds, maquillage.
            Une idée simple pour offrir un vrai moment, sans se tromper.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-champagne-texte" />
              <span className={periodeCadeaux ? "text-creme" : "text-encre"}>
                Valable sur l&apos;ensemble des prestations de l&apos;institut
              </span>
            </li>
            <li className="flex items-start gap-3">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-champagne-texte" />
              <span className={periodeCadeaux ? "text-creme" : "text-encre"}>
                Remis en main propre ou par téléphone
              </span>
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            {montantsExemple.map((m) => (
              <span
                key={m}
                className="chiffres-tabulaires rounded-full border border-champagne-clair bg-creme px-4 py-1.5 text-sm text-encre"
              >
                {m}
              </span>
            ))}
          </div>
          {montantsSontExemple && (
            <p className={`mt-2 text-xs italic ${periodeCadeaux ? "text-creme/80" : "text-taupe-texte"}`}>
              exemple de présentation — montants à confirmer avec l&apos;institut
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Bouton href={institut.telephoneLien} className={periodeCadeaux ? "bg-champagne-texte" : undefined}>
              Appeler pour offrir un soin
            </Bouton>
            <Bouton href="/contact" variante="cerne">
              Contacter l&apos;institut
            </Bouton>
          </div>
        </div>

        <MiseAuPoint
          src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c"
          alt="Présentation soignée d'un chèque cadeau et de produits de soin"
          sizes="(min-width: 768px) 45vw, 90vw"
          className="aspect-[4/5] rounded-sm"
        />
      </div>
    </section>
  );
}
