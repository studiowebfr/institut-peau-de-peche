"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navigation } from "@/lib/navigation";
import { institut } from "@/content/institut";
import { IconFermer } from "@/components/icons/icons";

type MenuMobileProps = {
  ouvert: boolean;
  onFermer: () => void;
};

const SELECTEUR_FOCALISABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MenuMobile({ ouvert, onFermer }: MenuMobileProps) {
  const panneauRef = useRef<HTMLDivElement>(null);
  const boutonFermerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ouvert) return;

    const scrollPrecedent = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    boutonFermerRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onFermer();
        return;
      }

      if (e.key !== "Tab" || !panneauRef.current) return;

      const focalisables = Array.from(
        panneauRef.current.querySelectorAll<HTMLElement>(SELECTEUR_FOCALISABLE),
      );
      if (focalisables.length === 0) return;

      const premier = focalisables[0];
      const dernier = focalisables[focalisables.length - 1];

      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = scrollPrecedent;
    };
  }, [ouvert, onFermer]);

  if (!ouvert) return null;

  return (
    <div
      id="menu-mobile"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      ref={panneauRef}
      className="fixed inset-0 z-50 flex flex-col bg-creme"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-display text-xl text-encre">Peau de Pêche</span>
        <button
          ref={boutonFermerRef}
          type="button"
          onClick={onFermer}
          aria-label="Fermer le menu"
          className="p-2 text-encre"
        >
          <IconFermer className="h-6 w-6" />
        </button>
      </div>

      <nav aria-label="Navigation principale" className="flex flex-1 flex-col justify-center gap-6 px-8">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onFermer}
            className="font-display text-3xl text-encre transition-colors hover:text-champagne-texte"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-3 border-t border-champagne-clair/40 px-8 py-6">
        <a href={institut.telephoneLien} className="eyebrow text-taupe-texte">
          {institut.telephone}
        </a>
        <span className="text-sm text-taupe-texte">
          {institut.adresse.ligne1}, {institut.adresse.ville}
        </span>
      </div>
    </div>
  );
}
