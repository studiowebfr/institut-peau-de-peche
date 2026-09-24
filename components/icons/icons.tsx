import type { SVGProps } from "react";

/**
 * Pictogrammes au trait, dessinés sur mesure pour Peau de Pêche — pas de
 * pack d'icônes générique. Tous en `currentColor`, trait fin (1.4), sans
 * remplissage, cohérents avec la direction artistique.
 */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconAnnees(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 20 L20 11" />
      <path d="M20 20 L26 24" />
      <path d="M8 10 Q4 20 8 30" strokeDasharray="1 4" />
    </svg>
  );
}

export function IconMarques(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M17 6h6v5.5l3 4V33a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V15.5l3-4Z" />
      <path d="M15 20h10" />
    </svg>
  );
}

export function IconSurMesure(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M9 27 27 9" />
      <path d="M13 31 9 27" />
      <path d="M15 21l4 4" />
      <path d="M20 16l4 4" />
      <path d="M25 11l4 4" />
    </svg>
  );
}

export function IconPraticienne(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="13" r="6" />
      <path d="M9 32c1.5-7 5.5-11 11-11s9.5 4 11 11" />
    </svg>
  );
}

export function IconRendezVous(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <rect x="7" y="9" width="26" height="23" rx="2" />
      <path d="M7 16h26" />
      <path d="M13 6v6M27 6v6" />
      <path d="M14 23l4 4 8-8" />
    </svg>
  );
}

export function IconLieu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M20 34s11-10.5 11-18a11 11 0 1 0-22 0c0 7.5 11 18 11 18Z" />
      <circle cx="20" cy="16" r="4" />
    </svg>
  );
}

export function IconTelephone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M12 8c-2.5 0-4 2-4 4 0 11 9 20 20 20 2 0 4-1.5 4-4l-1-5-6-1-2 3c-4-1.5-6.5-4-8-8l3-2-1-6Z" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function IconEtoile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5 14.5 9.5 21 10.3 16.2 14.6 17.6 21 12 17.6 6.4 21 7.8 14.6 3 10.3 9.5 9.5Z" />
    </svg>
  );
}

export function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.6c0-.6.3-1 1-1h1.5V8Z" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.3" cy="7.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconFermer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconFleche(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
