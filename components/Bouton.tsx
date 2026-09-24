import Link from "next/link";
import type { ReactNode } from "react";

type BoutonProps = {
  href: string;
  children: ReactNode;
  variante?: "plein" | "cerne";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-offset-4";

const variantes = {
  plein: "bg-champagne-texte text-creme hover:bg-encre",
  cerne: "border border-champagne-texte text-champagne-texte hover:bg-champagne-texte hover:text-creme",
};

export function Bouton({ href, children, variante = "plein", className = "" }: BoutonProps) {
  const estExterne = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");

  if (estExterne) {
    return (
      <a href={href} className={`${base} ${variantes[variante]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variantes[variante]} ${className}`}>
      {children}
    </Link>
  );
}
