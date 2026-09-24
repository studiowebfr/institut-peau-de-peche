import { institut } from "@/content/institut";
import { IconTelephone, IconRendezVous } from "@/components/icons/icons";
import Link from "next/link";

export function BarreActionsMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-champagne-clair/50 bg-creme shadow-[0_-2px_10px_rgba(43,36,32,0.08)] md:hidden">
      <a
        href={institut.telephoneLien}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-encre"
      >
        <IconTelephone className="h-5 w-5 text-champagne-texte" />
        Appeler
      </a>
      <Link
        href="/contact#rendez-vous"
        className="flex items-center justify-center gap-2 bg-champagne-texte py-3.5 text-sm font-medium text-creme"
      >
        <IconRendezVous className="h-5 w-5" />
        Rendez-vous
      </Link>
    </div>
  );
}
