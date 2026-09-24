import { Bouton } from "@/components/Bouton";
import { IconRendezVous } from "@/components/icons/icons";

export function BandeauRendezVous() {
  return (
    <section className="bg-sauge">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-4">
          <IconRendezVous className="h-8 w-8 shrink-0 text-creme" />
          <p className="font-display text-xl text-creme sm:text-2xl">
            Prenez rendez-vous en quelques instants
          </p>
        </div>
        <Bouton href="/contact#rendez-vous" variante="plein" className="bg-champagne-texte">
          Prendre rendez-vous
        </Bouton>
      </div>
    </section>
  );
}
