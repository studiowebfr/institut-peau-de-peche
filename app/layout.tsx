import type { Metadata, Viewport } from "next";
import { cormorant, hanken } from "@/lib/fonts";
import { institut } from "@/content/institut";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BandeauMaquette } from "@/components/BandeauMaquette";
import { BarreActionsMobile } from "@/components/BarreActionsMobile";
import "./globals.css";

const url = "https://institut-peaudepeche.fr";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Institut Peau de Pêche — Institut de beauté à Saint-Vit",
    template: "%s | Peau de Pêche",
  },
  description:
    "Institut de beauté à Saint-Vit, dans la galerie du Super U. Virginie vous accueille depuis 30 ans pour vos soins du visage, du corps, épilation, mains et pieds, maquillage.",
  robots: institut.maquette
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: institut.nom,
    title: "Institut Peau de Pêche — Institut de beauté à Saint-Vit",
    description: "Virginie vous accueille depuis 30 ans à Saint-Vit, galerie du Super U.",
  },
};

// Zoom libre obligatoire — jamais de maximum-scale ni de user-scalable=no.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: institut.nom,
  telephone: institut.telephone,
  url,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${institut.adresse.ligne1}, ${institut.adresse.ligne2}`,
    addressLocality: institut.adresse.ville,
    postalCode: institut.adresse.codePostal,
    addressCountry: "FR",
  },
  sameAs: [institut.reseaux.facebook, institut.reseaux.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${hanken.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-champagne-texte focus:px-4 focus:py-2 focus:text-creme"
        >
          Aller au contenu
        </a>
        <BandeauMaquette />
        <TopBar />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <BarreActionsMobile />
      </body>
    </html>
  );
}
