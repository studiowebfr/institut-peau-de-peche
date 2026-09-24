import type { Metadata } from "next";
import { institut } from "@/content/institut";

export const metadata: Metadata = { title: "Confidentialité" };

export default function ConfidentialitePage() {
  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl text-encre">Confidentialité</h1>

        <div className="mt-8 space-y-6 text-encre/85">
          <p>
            Ce site ne dépose aucun cookie de mesure d&apos;audience, aucun traceur publicitaire,
            et n&apos;utilise aucun service tiers (pas d&apos;analytics, pas de police distante,
            pas de carte interactive tierce). C&apos;est pourquoi aucun bandeau de consentement
            cookies n&apos;est nécessaire — voir la page{" "}
            <a href="/cookies" className="text-champagne-texte hover:underline">
              Cookies
            </a>
            .
          </p>

          <div>
            <h2 className="font-display text-xl text-encre">Formulaire de rendez-vous</h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact (nom, téléphone, e-mail,
              message) sont utilisées uniquement pour traiter votre demande de rendez-vous et ne
              sont ni revendues, ni transmises à un tiers en dehors du prestataire technique
              d&apos;envoi d&apos;e-mails.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Vos droits</h2>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données, vous disposez d&apos;un
              droit d&apos;accès, de rectification et de suppression des données vous concernant.
              Pour l&apos;exercer, contactez l&apos;institut au {institut.telephone}
              {institut.email ? ` ou par e-mail à ${institut.email}` : ""}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
