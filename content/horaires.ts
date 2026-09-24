/**
 * HORAIRES D'OUVERTURE
 * ====================
 * ⚠️ Les horaires ci-dessous sont un EXEMPLE (exemple: true dans institut.ts
 * le signale déjà). Remplace-les par les vrais horaires de l'institut dès
 * que tu les as — c'est l'information la plus recherchée par les clientes.
 *
 * Pour un jour fermé : mets `creneaux: []`.
 * Pour un jour avec coupure méridienne : deux créneaux, ex. 09:00-12:00 puis 14:00-19:00.
 * Pour un jour en continu : un seul créneau, ex. 09:00-17:00.
 * Les horaires sont au format "HH:MM", 24h.
 */

export type Creneau = { debut: string; fin: string };
export type JourSemaine =
  | "lundi"
  | "mardi"
  | "mercredi"
  | "jeudi"
  | "vendredi"
  | "samedi"
  | "dimanche";

export const horairesExemple = true; // passe à false une fois les vrais horaires confirmés

export const horaires: Record<JourSemaine, Creneau[]> = {
  lundi: [],
  mardi: [
    { debut: "09:00", fin: "12:00" },
    { debut: "14:00", fin: "19:00" },
  ],
  mercredi: [
    { debut: "09:00", fin: "12:00" },
    { debut: "14:00", fin: "19:00" },
  ],
  jeudi: [
    { debut: "09:00", fin: "12:00" },
    { debut: "14:00", fin: "19:00" },
  ],
  vendredi: [
    { debut: "09:00", fin: "12:00" },
    { debut: "14:00", fin: "19:00" },
  ],
  samedi: [{ debut: "09:00", fin: "17:00" }],
  dimanche: [],
};

export const ordreJours: JourSemaine[] = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

export const libellesJours: Record<JourSemaine, string> = {
  lundi: "Lundi",
  mardi: "Mardi",
  mercredi: "Mercredi",
  jeudi: "Jeudi",
  vendredi: "Vendredi",
  samedi: "Samedi",
  dimanche: "Dimanche",
};

/**
 * FERMETURES EXCEPTIONNELLES
 * ===========================
 * Pour annoncer une fermeture (congés, formation...), ajoute une ligne ici :
 *
 *   { debut: "2026-08-10", fin: "2026-08-24", motif: "Congés d'été" },
 *
 * Dates au format "AAAA-MM-JJ". Une fois la date de fin passée, la ligne
 * disparaît automatiquement du site — inutile de revenir la supprimer.
 */
export const fermeturesExceptionnelles: {
  debut: string;
  fin: string;
  motif: string;
}[] = [
  // Exemple désactivé — décommente et adapte le jour où une fermeture est prévue.
  // { debut: "2026-08-10", fin: "2026-08-24", motif: "Congés d'été" },
];
