import { Bouton } from "@/components/Bouton";

export default function NotFound() {
  return (
    <section className="bg-ivoire">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="eyebrow text-taupe-texte">Erreur 404</p>
        <h1 className="mt-3 font-display text-4xl text-encre">Cette page n&apos;existe pas</h1>
        <p className="mt-4 text-encre/85">
          La page que vous cherchez a peut-être changé d&apos;adresse. Retrouvez nos soins, nos
          tarifs ou contactez directement l&apos;institut.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Bouton href="/">Retour à l&apos;accueil</Bouton>
          <Bouton href="/tarifs" variante="cerne">
            Voir les tarifs
          </Bouton>
        </div>
      </div>
    </section>
  );
}
