"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/navigation";
import { IconMenu } from "@/components/icons/icons";
import { MenuMobile } from "@/components/MenuMobile";

export function Header() {
  const [compact, setCompact] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOuvert(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-champagne-clair/30 bg-creme/95 backdrop-blur-sm">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-200 ${
            compact ? "py-3" : "py-5"
          }`}
        >
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl text-encre">Peau de Pêche</span>
            <span className="eyebrow mt-1 text-taupe-texte">Institut de beauté</span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow text-encre transition-colors hover:text-champagne-texte"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex items-center justify-center p-2 text-encre md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOuvert}
            aria-controls="menu-mobile"
            onClick={() => setMenuOuvert(true)}
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MenuMobile ouvert={menuOuvert} onFermer={() => setMenuOuvert(false)} />
    </>
  );
}
