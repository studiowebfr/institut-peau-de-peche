import Link from "next/link";
import { categories } from "@/content/soins";
import { MiseAuPoint } from "@/components/MiseAuPoint";
import { Reveal } from "@/components/Reveal";
import { IconFleche } from "@/components/icons/icons";

export function NosSoins() {
  return (
    <section id="soins" className="scroll-mt-24 bg-creme">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-encre sm:text-4xl">Nos soins</h2>
          <p className="mt-4 text-taupe-texte">
            Cinq familles de soins, du visage aux mains, pour composer le rendez-vous qui vous
            correspond.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delayMs={i * 70}>
              <Link href={`/${c.slug}`} className="group block">
                <MiseAuPoint
                  src={c.image}
                  alt={c.imageAlt}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
                  className="aspect-[4/5] rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="border border-t-0 border-champagne-clair/40 px-4 py-5">
                  <h3 className="font-display text-lg text-encre">{c.titre}</h3>
                  <p className="mt-1.5 text-sm text-taupe-texte line-clamp-2">{c.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-champagne-texte">
                    Découvrir <IconFleche className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
