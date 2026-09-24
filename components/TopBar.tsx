import { institut } from "@/content/institut";
import { Bouton } from "@/components/Bouton";
import { IconLieu, IconTelephone } from "@/components/icons/icons";

export function TopBar() {
  return (
    <div className="hidden border-b border-champagne-clair/40 bg-ivoire md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-taupe-texte">
        <span className="flex items-center gap-1.5">
          <IconLieu className="h-3.5 w-3.5 shrink-0 text-champagne-texte" />
          {institut.adresse.ligne1}, {institut.adresse.ville}
        </span>
        <div className="flex items-center gap-6">
          <a href={institut.telephoneLien} className="flex items-center gap-1.5 hover:text-encre">
            <IconTelephone className="h-3.5 w-3.5 shrink-0 text-champagne-texte" />
            {institut.telephone}
          </a>
          <Bouton href="/contact#rendez-vous" className="px-4 py-1.5 text-[0.7rem]">
            Prendre rendez-vous
          </Bouton>
        </div>
      </div>
    </div>
  );
}
