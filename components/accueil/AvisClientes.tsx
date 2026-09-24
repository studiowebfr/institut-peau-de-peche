import { avis } from "@/content/avis";
import { Reveal } from "@/components/Reveal";
import { IconEtoile } from "@/components/icons/icons";

export function AvisClientes() {
  return (
    <section className="bg-ivoire">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl text-encre sm:text-4xl">Avis clientes</h2>
          <span className="mx-auto mt-3 block h-px w-14 bg-champagne-texte" aria-hidden />
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-xs italic text-taupe-texte">
          Les témoignages ci-dessous sont des exemples de présentation. Les avis réels seront
          publiés avec l&apos;accord écrit de chaque cliente.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={i} delayMs={i * 80} className="rounded-sm bg-creme p-6 shadow-sm">
              <div className="flex gap-1" aria-hidden={a.exemple}>
                {a.exemple ? (
                  <span className="text-xs italic text-taupe-texte">exemple de présentation</span>
                ) : (
                  Array.from({ length: 5 }).map((_, star) => (
                    <IconEtoile key={star} className="h-4 w-4 text-champagne-texte" />
                  ))
                )}
              </div>
              <p className="mt-3 text-sm text-encre/85">{a.texte}</p>
              <div className="mt-4 flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne-clair/50 text-xs font-medium text-champagne-texte"
                >
                  {a.auteur.charAt(0)}
                </span>
                <span className="text-sm text-taupe-texte">{a.auteur}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
