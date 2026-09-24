"use client";

import { useEffect, useState } from "react";
import { horaires, fermeturesExceptionnelles, horairesExemple } from "@/content/horaires";
import { statutOuverture, type StatutOuverture } from "@/lib/horaires";

const libellesMotif: Record<string, string> = {
  jour_ferme: "Fermé aujourd'hui",
  hors_creneau: "Fermé pour le moment",
};

/**
 * Pastille discrète d'ouverture en temps réel, dans le hero. Calculée
 * côté client (l'heure du visiteur fait foi) et annoncée via aria-live
 * pour les lecteurs d'écran. N'affiche rien tant que le calcul n'a pas
 * eu lieu, pour éviter tout écart entre le rendu serveur et le client.
 */
export function PastilleOuverture() {
  const [statut, setStatut] = useState<StatutOuverture | null>(null);

  useEffect(() => {
    setStatut(statutOuverture(horaires, fermeturesExceptionnelles, new Date()));
    const intervalle = setInterval(() => {
      setStatut(statutOuverture(horaires, fermeturesExceptionnelles, new Date()));
    }, 60_000);
    return () => clearInterval(intervalle);
  }, []);

  if (!statut) {
    return <span aria-live="polite" className="sr-only" />;
  }

  const texte = statut.ouvert
    ? "Ouvert actuellement"
    : statut.motif === "fermeture_exceptionnelle"
      ? `Fermé — ${statut.libelle}`
      : libellesMotif[statut.motif];

  return (
    <span
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-full border border-champagne-clair bg-ivoire px-3.5 py-1.5 text-xs text-encre"
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${statut.ouvert ? "bg-sauge" : "bg-taupe"}`}
      />
      {texte}
      {horairesExemple && <span className="text-taupe-texte italic"> · horaires d&apos;exemple</span>}
    </span>
  );
}
