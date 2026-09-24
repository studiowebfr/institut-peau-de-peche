import { institut } from "@/content/institut";
import { Bouton } from "@/components/Bouton";
import { IconLieu } from "@/components/icons/icons";

const adresseComplete = `${institut.adresse.ligne1}, ${institut.adresse.ligne2}, ${institut.adresse.codePostal} ${institut.adresse.ville}`;
const lienItineraire = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adresseComplete)}`;

/**
 * Carte stylisée en SVG — volontairement pas d'iframe (pas de tiers, pas
 * de tracker, cf. §11 RGPD). Purement illustrative : le repère utile est
 * le texte "galerie du Super U" et le bouton d'itinéraire vers Maps.
 */
export function CarteAcces() {
  return (
    <div>
      <svg
        viewBox="0 0 400 260"
        role="img"
        aria-label="Plan stylisé de la galerie du Super U à Saint-Vit"
        className="w-full rounded-sm border border-champagne-clair/50 bg-ivoire"
      >
        <line x1="0" y1="60" x2="400" y2="60" stroke="#E0C89A" strokeWidth="6" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="#E0C89A" strokeWidth="6" />
        <line x1="120" y1="0" x2="120" y2="260" stroke="#E0C89A" strokeWidth="6" />
        <rect x="150" y="90" width="140" height="80" rx="4" fill="#FBF8F3" stroke="#C9A96A" strokeWidth="1.5" />
        <text x="220" y="135" textAnchor="middle" fontSize="12" fill="#2B2420" fontFamily="var(--font-sans)">
          Super U
        </text>
        <circle cx="220" cy="90" r="9" fill="#7A5F30" />
        <path d="M220 79 L220 60" stroke="#7A5F30" strokeWidth="2" />
      </svg>

      <div className="mt-5 flex items-start gap-3">
        <IconLieu className="mt-0.5 h-5 w-5 shrink-0 text-champagne-texte" />
        <p className="text-sm text-encre/85">
          L&apos;institut se trouve dans la galerie du Super U — un repère immédiat pour tout le
          monde à Saint-Vit, avec un stationnement gratuit et abondant.
        </p>
      </div>

      <div className="mt-5">
        <Bouton href={lienItineraire} variante="cerne">
          Itinéraire
        </Bouton>
      </div>
    </div>
  );
}
