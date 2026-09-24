import { NextResponse } from "next/server";
import { Resend } from "resend";
import { schemaRendezVous } from "@/lib/schema-rendez-vous";
import { institut } from "@/content/institut";
import { categories } from "@/content/soins";

export async function POST(request: Request) {
  const corps = await request.json().catch(() => null);

  if (!corps) {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  const resultat = schemaRendezVous.safeParse(corps);
  if (!resultat.success) {
    return NextResponse.json(
      { erreur: "Formulaire invalide.", details: resultat.error.flatten() },
      { status: 400 },
    );
  }

  const { nom, telephone, email, soinSouhaite, message } = resultat.data;

  const cleApi = process.env.RESEND_API_KEY;
  const adresseDestination = process.env.EMAIL_DESTINATAIRE || institut.email;

  if (!cleApi || !adresseDestination) {
    console.error(
      "RESEND_API_KEY ou EMAIL_DESTINATAIRE manquant — voir .env.local.example",
    );
    return NextResponse.json(
      { erreur: "Le formulaire n'est pas encore configuré. Merci d'appeler l'institut directement." },
      { status: 503 },
    );
  }

  const nomSoin = categories.find((c) => c.slug === soinSouhaite)?.titre;

  try {
    const resend = new Resend(cleApi);
    await resend.emails.send({
      from: "Site Peau de Pêche <site@institut-peaudepeche.fr>",
      to: adresseDestination,
      replyTo: email || undefined,
      subject: `Demande de rendez-vous — ${nom}`,
      text: [
        `Nom : ${nom}`,
        `Téléphone : ${telephone}`,
        email ? `E-mail : ${email}` : null,
        nomSoin ? `Soin souhaité : ${nomSoin}` : null,
        message ? `Message :\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ succes: true });
  } catch (erreur) {
    console.error("Échec d'envoi de l'e-mail de demande de rendez-vous", erreur);
    return NextResponse.json(
      { erreur: "L'envoi a échoué. Merci d'appeler l'institut directement." },
      { status: 502 },
    );
  }
}
