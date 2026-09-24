"use client";

import { useEffect, useState } from "react";
import {
  horaires,
  ordreJours,
  libellesJours,
  fermeturesExceptionnelles,
  horairesExemple,
  type JourSemaine,
} from "@/content/horaires";
import { formatCreneau, fermeturesActives, partiesParis } from "@/lib/horaires";

export function HorairesTable() {
  const [jourActuel, setJourActuel] = useState<JourSemaine | null>(null);

  useEffect(() => {
    setJourActuel(partiesParis(new Date()).jourSemaine);
  }, []);

  const fermetures = fermeturesActives(fermeturesExceptionnelles, new Date());

  return (
    <div>
      {horairesExemple && (
        <p className="mb-3 text-xs italic text-taupe-texte">
          Horaires d&apos;exemple, à confirmer avec l&apos;institut.
        </p>
      )}
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">Horaires d&apos;ouverture de l&apos;institut Peau de Pêche</caption>
        <thead>
          <tr className="border-b border-champagne-clair/60 text-left">
            <th scope="col" className="py-2 font-medium text-taupe-texte">
              Jour
            </th>
            <th scope="col" className="py-2 font-medium text-taupe-texte">
              Horaires
            </th>
          </tr>
        </thead>
        <tbody>
          {ordreJours.map((jour) => {
            const creneaux = horaires[jour];
            const estAujourdhui = jour === jourActuel;
            return (
              <tr
                key={jour}
                className={`border-b border-champagne-clair/30 ${
                  estAujourdhui ? "bg-ivoire font-medium text-encre" : "text-encre/90"
                }`}
              >
                <th scope="row" className="py-2 pr-4 text-left font-normal">
                  {libellesJours[jour]}
                  {estAujourdhui && <span className="sr-only"> (aujourd&apos;hui)</span>}
                </th>
                <td className="chiffres-tabulaires py-2">
                  {creneaux.length === 0
                    ? "Fermé"
                    : creneaux.map((c) => formatCreneau(c)).join(" · ")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {fermetures.length > 0 && (
        <div aria-live="polite" className="mt-4 space-y-1 text-sm text-champagne-texte">
          {fermetures.map((f) => (
            <p key={f.motif + f.debut}>
              Fermeture exceptionnelle : {f.motif} (du {f.debut.split("-").reverse().join("/")} au{" "}
              {f.fin.split("-").reverse().join("/")})
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
