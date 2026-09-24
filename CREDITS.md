# Crédits photographiques (temporaires)

Toutes les images du site sont des **placeholders Unsplash**, libres de
droits, chargées directement depuis `images.unsplash.com`. **Aucune ne doit
rester en ligne après le vrai shooting** (voir §10 du brief) — elles servent
uniquement à juger de la mise en page.

| Usage | URL source |
|---|---|
| Hero (accueil) | `https://images.unsplash.com/photo-1519415387722-a1c3bbef716c` |
| Carte "Soins du visage" | `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e` |
| Carte "Soins du corps" | `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881` |
| Carte "Épilation" | `https://images.unsplash.com/photo-1571875257727-256c39da42af` |
| Carte "Mains & pieds" | `https://images.unsplash.com/photo-1596178065887-1198b6148b2b` |
| Carte "Maquillage" | `https://images.unsplash.com/photo-1516975080664-ed2fc6a32937` |
| Offre du moment / chèque cadeau | `https://images.unsplash.com/photo-1595515106969-1ce29566ff1c` |
| "Pourquoi Peau de Pêche" | `https://images.unsplash.com/photo-1512290923902-8a9f81dc236c` |
| "L'institut" — produits | `https://images.unsplash.com/photo-1560750588-73207b1ef5b8` |

Avant mise en ligne définitive :

1. Retrouver la page Unsplash de chaque photo (recherche par ID sur
   unsplash.com) pour créditer le photographe si nécessaire (non obligatoire
   légalement, mais correct).
2. Remplacer chaque URL par les vraies photographies de l'institut, une
   fois le shooting réalisé (`next/image` pointera alors vers `/public` ou
   un service d'images propre à l'institut).
3. Retirer `images.unsplash.com` de `images.remotePatterns` dans
   `next.config.ts` une fois qu'aucune image distante n'est plus utilisée.

**Aucune photo de mannequin n'est utilisée comme portrait de Virginie ou de
cliente** — voir l'emplacement réservé (encadré en pointillés) sur la page
`/l-institut`.
