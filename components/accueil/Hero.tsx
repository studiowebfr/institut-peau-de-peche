import { Bouton } from "@/components/Bouton";
import { MiseAuPoint } from "@/components/MiseAuPoint";
import { PastilleOuverture } from "@/components/PastilleOuverture";

export function Hero() {
  return (
    <section className="bg-ivoire">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1fr_1.4fr] md:py-20 lg:gap-16">
        <div className="order-2 md:order-1">
          <p className="eyebrow text-taupe-texte">Institut de beauté · Saint-Vit</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-encre sm:text-5xl lg:text-6xl">
            Un accueil chaleureux,
            <br />
            <em className="font-medium italic text-champagne-texte">
              des soins qui vous ressemblent.
            </em>
          </h1>
          <p className="mt-6 max-w-md text-base text-encre/85">
            Un accueil chaleureux et bienveillant, des soins sur mesure adaptés à vos besoins, des
            produits soigneusement sélectionnés. Que vous cherchiez un moment de détente, un soin
            ciblé ou un rituel beauté, je vous guide avec passion et écoute.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Bouton href="/#soins" variante="plein">
              Découvrir nos soins
            </Bouton>
            <Bouton href="/contact#rendez-vous" variante="cerne">
              Prendre rendez-vous
            </Bouton>
          </div>
          <div className="mt-6">
            <PastilleOuverture />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <MiseAuPoint
            src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c"
            alt="Ambiance lumineuse et chaleureuse de l'institut Peau de Pêche"
            sizes="(min-width: 768px) 55vw, 100vw"
            priority
            className="aspect-[4/5] rounded-sm md:aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}
