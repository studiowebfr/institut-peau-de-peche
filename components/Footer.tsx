import Link from "next/link";
import { institut } from "@/content/institut";
import { categories } from "@/content/soins";
import { horaires, ordreJours, libellesJours } from "@/content/horaires";
import { formatCreneau } from "@/lib/horaires";
import { IconFacebook, IconInstagram, IconLieu, IconTelephone } from "@/components/icons/icons";

export function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer className="border-t border-champagne-clair/40 bg-creme pb-20 md:pb-0">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-14 text-sm md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-xl text-encre">Peau de Pêche</span>
          <p className="mt-2 text-taupe-texte">Institut de beauté à Saint-Vit</p>
          <div className="mt-4 flex gap-3">
            <a
              href={institut.reseaux.facebook}
              aria-label="Facebook de l'institut"
              className="rounded-full border border-champagne-clair p-2 text-champagne-texte hover:bg-ivoire"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
            <a
              href={institut.reseaux.instagram}
              aria-label="Instagram de l'institut"
              className="rounded-full border border-champagne-clair p-2 text-champagne-texte hover:bg-ivoire"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow mb-3 text-taupe-texte">Nos soins</h2>
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-encre hover:text-champagne-texte">
                  {c.titre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-3 text-taupe-texte">Informations</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/tarifs" className="text-encre hover:text-champagne-texte">
                Tarifs
              </Link>
            </li>
            <li>
              <Link href="/cheque-cadeau" className="text-encre hover:text-champagne-texte">
                Chèque cadeau
              </Link>
            </li>
            <li>
              <Link href="/l-institut" className="text-encre hover:text-champagne-texte">
                L&apos;institut
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-encre hover:text-champagne-texte">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-3 text-taupe-texte">Horaires</h2>
          <ul className="chiffres-tabulaires space-y-1.5 text-encre">
            {ordreJours.map((jour) => (
              <li key={jour} className="flex justify-between gap-4">
                <span className="text-taupe-texte">{libellesJours[jour]}</span>
                <span>
                  {horaires[jour].length === 0
                    ? "Fermé"
                    : horaires[jour].map((c) => formatCreneau(c)).join(" / ")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-3 text-taupe-texte">Contact</h2>
          <ul className="space-y-2.5 text-encre">
            <li className="flex items-start gap-2">
              <IconLieu className="mt-0.5 h-4 w-4 shrink-0 text-champagne-texte" />
              <span>
                {institut.adresse.ligne1}
                <br />
                {institut.adresse.ligne2}
                <br />
                {institut.adresse.codePostal} {institut.adresse.ville}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IconTelephone className="h-4 w-4 shrink-0 text-champagne-texte" />
              <a href={institut.telephoneLien} className="hover:text-champagne-texte">
                {institut.telephone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-champagne-clair/30 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-taupe-texte md:flex-row">
          <p>
            © {anneeActuelle} {institut.nom}
          </p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-champagne-texte">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-champagne-texte">
              Confidentialité
            </Link>
            <Link href="/cookies" className="hover:text-champagne-texte">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
