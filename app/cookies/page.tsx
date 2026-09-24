import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl text-encre">Cookies</h1>

        <div className="mt-8 space-y-4 text-encre/85">
          <p>
            Ce site n&apos;utilise aucun cookie de suivi, aucun outil de mesure d&apos;audience
            (type Google Analytics) et aucun tracker publicitaire.
          </p>
          <p>
            Aucune police de caractère n&apos;est chargée depuis un serveur externe : les polices
            sont auto-hébergées. Aucune carte interactive tierce n&apos;est intégrée — le plan
            d&apos;accès est une illustration statique.
          </p>
          <p>
            C&apos;est la raison pour laquelle ce site ne comporte pas de bandeau de consentement
            aux cookies : il n&apos;y a rien à consentir.
          </p>
        </div>
      </div>
    </section>
  );
}
