"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MiseAuPointProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

/**
 * Élément signature du site : l'image arrive légèrement floue et teintée
 * pêche, puis se stabilise nette et fidèle à sa couleur en 1 à 2 secondes
 * à mesure qu'elle entre dans le champ de vision.
 *
 * L'image reste TOUJOURS dans le DOM avec son alt réel — l'animation est
 * purement décorative. Aucun timer : c'est l'IntersectionObserver qui
 * déclenche la transition, une seule fois. Se fige nette immédiatement si
 * `prefers-reduced-motion` est actif (géré en CSS, voir globals.css).
 */
export function MiseAuPoint({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  fill = true,
  width,
  height,
}: MiseAuPointProps) {
  const conteneurRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animationTerminee, setAnimationTerminee] = useState(false);

  useEffect(() => {
    const element = conteneurRef.current;
    if (!element) return;

    if (typeof window !== "undefined" && "matchMedia" in window) {
      const reduitMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduitMouvement) {
        setVisible(true);
        setAnimationTerminee(true);
        return;
      }
    }

    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setVisible(true);
          observateur.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <div ref={conteneurRef} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        onTransitionEnd={() => setAnimationTerminee(true)}
        className="mise-au-point-image object-cover"
        style={{
          filter: visible ? "blur(0px)" : "blur(8px)",
          transform: "translateZ(0)",
          transition: "filter 1.6s ease-out",
          willChange: animationTerminee ? "auto" : "filter",
        }}
      />
      <div
        aria-hidden
        className="mise-au-point-voile pointer-events-none absolute inset-0 bg-peche"
        style={{
          opacity: visible ? 0 : 0.22,
          transition: "opacity 1.6s ease-out",
        }}
      />
    </div>
  );
}
