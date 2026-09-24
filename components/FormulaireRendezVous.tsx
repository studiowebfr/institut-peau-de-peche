"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { schemaRendezVous, type DonneesRendezVous } from "@/lib/schema-rendez-vous";
import { categories } from "@/content/soins";
import { institut } from "@/content/institut";

type Statut = "repos" | "envoi" | "succes" | "erreur";

const champBase =
  "w-full rounded-sm border border-champagne-clair bg-creme px-4 py-2.5 text-encre placeholder:text-taupe/60 focus-visible:outline-champagne-texte";

export function FormulaireRendezVous() {
  const [statut, setStatut] = useState<Statut>("repos");
  const [messageErreur, setMessageErreur] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DonneesRendezVous>({
    resolver: zodResolver(schemaRendezVous),
    defaultValues: { nom: "", telephone: "", email: "", soinSouhaite: "", message: "" },
  });

  async function onSubmit(donnees: DonneesRendezVous) {
    setStatut("envoi");
    setMessageErreur("");
    try {
      const reponse = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees),
      });

      if (!reponse.ok) {
        const corps = await reponse.json().catch(() => null);
        setMessageErreur(corps?.erreur || "L'envoi a échoué. Merci de réessayer.");
        setStatut("erreur");
        return;
      }

      setStatut("succes");
      reset();
    } catch {
      setMessageErreur("L'envoi a échoué. Merci de réessayer ou d'appeler l'institut.");
      setStatut("erreur");
    }
  }

  if (statut === "succes") {
    return (
      <div role="status" aria-live="polite" className="rounded-sm border border-sauge bg-ivoire p-6 text-encre">
        Votre demande a bien été envoyée. L&apos;institut vous recontactera pour confirmer votre
        rendez-vous.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-encre">
          Nom
        </label>
        <input id="nom" type="text" autoComplete="name" className={champBase} {...register("nom")} />
        {errors.nom && (
          <p role="alert" className="mt-1 text-sm text-red-700">
            {errors.nom.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-encre">
          Téléphone
        </label>
        <input
          id="telephone"
          type="tel"
          autoComplete="tel"
          className={champBase}
          {...register("telephone")}
        />
        {errors.telephone && (
          <p role="alert" className="mt-1 text-sm text-red-700">
            {errors.telephone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-encre">
          E-mail <span className="font-normal text-taupe-texte">(facultatif)</span>
        </label>
        <input id="email" type="email" autoComplete="email" className={champBase} {...register("email")} />
        {errors.email && (
          <p role="alert" className="mt-1 text-sm text-red-700">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="soinSouhaite" className="mb-1.5 block text-sm font-medium text-encre">
          Soin souhaité <span className="font-normal text-taupe-texte">(facultatif)</span>
        </label>
        <select id="soinSouhaite" className={champBase} {...register("soinSouhaite")}>
          <option value="">Je ne sais pas encore</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.titre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-encre">
          Message <span className="font-normal text-taupe-texte">(facultatif)</span>
        </label>
        <textarea id="message" rows={4} className={champBase} {...register("message")} />
      </div>

      {statut === "erreur" && (
        <p role="alert" className="text-sm text-red-700">
          {messageErreur}{" "}
          <a href={institut.telephoneLien} className="underline">
            {institut.telephone}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center bg-champagne-texte px-6 py-3 text-sm font-medium uppercase tracking-wide text-creme transition-colors hover:bg-encre disabled:opacity-60"
      >
        {isSubmitting ? "Envoi en cours…" : "Envoyer la demande"}
      </button>
    </form>
  );
}
