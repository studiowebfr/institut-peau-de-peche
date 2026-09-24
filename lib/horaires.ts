import type { Creneau, JourSemaine } from "@/content/horaires";

const FUSEAU = "Europe/Paris";

type PartiesDate = {
  annee: number;
  mois: number;
  jour: number;
  heure: number;
  minute: number;
  jourSemaine: JourSemaine;
};

/**
 * Lit la date/heure locale de Paris à partir d'un objet Date, quel que soit
 * le fuseau du serveur. Gère le changement d'heure automatiquement puisqu'on
 * délègue le calcul du fuseau à Intl plutôt que de fixer un décalage fixe.
 */
export function partiesParis(date: Date): PartiesDate {
  const fmt = new Intl.DateTimeFormat("fr-FR", {
    timeZone: FUSEAU,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "long",
  });
  const parts = fmt.formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  return {
    annee: Number(get("year")),
    mois: Number(get("month")),
    jour: Number(get("day")),
    heure: Number(get("hour")),
    minute: Number(get("minute")),
    jourSemaine: get("weekday").toLowerCase() as JourSemaine,
  };
}

function dateISO({ annee, mois, jour }: PartiesDate): string {
  return `${annee}-${String(mois).padStart(2, "0")}-${String(jour).padStart(2, "0")}`;
}

function minutesDepuisMinuit(heure: number, minute: number): number {
  return heure * 60 + minute;
}

function minutesCreneau(creneau: Creneau): { debut: number; fin: number } {
  const [hDebut, mDebut] = creneau.debut.split(":").map(Number);
  const [hFin, mFin] = creneau.fin.split(":").map(Number);
  return {
    debut: minutesDepuisMinuit(hDebut, mDebut),
    fin: minutesDepuisMinuit(hFin, mFin),
  };
}

export type FermetureExceptionnelle = {
  debut: string; // "AAAA-MM-JJ"
  fin: string; // "AAAA-MM-JJ"
  motif: string;
};

/**
 * Ne garde que les fermetures dont la date de fin n'est pas encore passée.
 * C'est ce qui fait "disparaître seules" les fermetures exceptionnelles
 * du site une fois la date dépassée — sans intervention manuelle.
 */
export function fermeturesActives(
  fermetures: FermetureExceptionnelle[],
  date: Date,
): FermetureExceptionnelle[] {
  const aujourdhui = dateISO(partiesParis(date));
  return fermetures.filter((f) => f.fin >= aujourdhui);
}

function fermetureEnCours(
  fermetures: FermetureExceptionnelle[],
  date: Date,
): FermetureExceptionnelle | undefined {
  const aujourdhui = dateISO(partiesParis(date));
  return fermetures.find((f) => f.debut <= aujourdhui && f.fin >= aujourdhui);
}

export type StatutOuverture =
  | { ouvert: true }
  | { ouvert: false; motif: "jour_ferme" | "hors_creneau" }
  | { ouvert: false; motif: "fermeture_exceptionnelle"; libelle: string };

/**
 * Détermine si l'institut est ouvert à l'instant `date`, en tenant compte :
 * - du jour de la semaine et de la coupure méridienne éventuelle
 * - des fermetures exceptionnelles en cours (congés, formation...)
 */
export function statutOuverture(
  horaires: Record<JourSemaine, Creneau[]>,
  fermetures: FermetureExceptionnelle[],
  date: Date,
): StatutOuverture {
  const fermeture = fermetureEnCours(fermetures, date);
  if (fermeture) {
    return { ouvert: false, motif: "fermeture_exceptionnelle", libelle: fermeture.motif };
  }

  const parties = partiesParis(date);
  const creneauxDuJour = horaires[parties.jourSemaine];

  if (!creneauxDuJour || creneauxDuJour.length === 0) {
    return { ouvert: false, motif: "jour_ferme" };
  }

  const minutesActuelles = minutesDepuisMinuit(parties.heure, parties.minute);
  const estDansUnCreneau = creneauxDuJour.some((c) => {
    const { debut, fin } = minutesCreneau(c);
    return minutesActuelles >= debut && minutesActuelles < fin;
  });

  return estDansUnCreneau ? { ouvert: true } : { ouvert: false, motif: "hors_creneau" };
}

export function formatCreneau(creneau: Creneau): string {
  return `${creneau.debut.replace(":", "h")} – ${creneau.fin.replace(":", "h")}`;
}
