import { describe, expect, it } from "vitest";
import { statutOuverture, fermeturesActives, formatCreneau } from "@/lib/horaires";
import type { Creneau, JourSemaine } from "@/content/horaires";

const horairesTest: Record<JourSemaine, Creneau[]> = {
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

// 2026-03-03 est un mardi.
function parisDate(iso: string): Date {
  // interprété comme heure de Paris via un décalage explicite pour éviter
  // toute ambiguïté avec le fuseau de la machine qui exécute les tests
  return new Date(`${iso}:00+01:00`);
}

describe("statutOuverture", () => {
  it("est fermé un jour sans créneaux (lundi)", () => {
    const date = new Date("2026-03-02T10:00:00+01:00"); // lundi
    const statut = statutOuverture(horairesTest, [], date);
    expect(statut).toEqual({ ouvert: false, motif: "jour_ferme" });
  });

  it("est ouvert pendant un créneau du matin", () => {
    const date = parisDate("2026-03-03T10:00"); // mardi
    const statut = statutOuverture(horairesTest, [], date);
    expect(statut.ouvert).toBe(true);
  });

  it("est fermé pendant la coupure méridienne", () => {
    const date = parisDate("2026-03-03T13:00"); // mardi, entre 12h et 14h
    const statut = statutOuverture(horairesTest, [], date);
    expect(statut).toEqual({ ouvert: false, motif: "hors_creneau" });
  });

  it("est ouvert en continu le samedi", () => {
    const date = parisDate("2026-03-07T16:30"); // samedi
    const statut = statutOuverture(horairesTest, [], date);
    expect(statut.ouvert).toBe(true);
  });

  it("priorise une fermeture exceptionnelle sur les horaires habituels", () => {
    const date = parisDate("2026-03-03T10:00"); // mardi, normalement ouvert
    const statut = statutOuverture(
      horairesTest,
      [{ debut: "2026-03-01", fin: "2026-03-10", motif: "Congés" }],
      date,
    );
    expect(statut).toEqual({
      ouvert: false,
      motif: "fermeture_exceptionnelle",
      libelle: "Congés",
    });
  });
});

describe("fermeturesActives", () => {
  it("retire les fermetures dont la date de fin est passée", () => {
    const date = parisDate("2026-03-15T10:00");
    const resultat = fermeturesActives(
      [
        { debut: "2026-01-01", fin: "2026-01-05", motif: "Passée" },
        { debut: "2026-03-20", fin: "2026-03-25", motif: "À venir" },
      ],
      date,
    );
    expect(resultat).toHaveLength(1);
    expect(resultat[0]?.motif).toBe("À venir");
  });
});

describe("formatCreneau", () => {
  it("formate un créneau en heures françaises", () => {
    expect(formatCreneau({ debut: "09:00", fin: "12:00" })).toBe("09h00 – 12h00");
  });
});
