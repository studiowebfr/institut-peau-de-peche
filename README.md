# Institut Peau de Pêche — site internet

Site du nouvel institut, pensé pour être mis à jour en quelques minutes,
depuis un téléphone si besoin, sans toucher au code.

## Mettre à jour un contenu (pour Virginie ou toute personne sans compétence technique)

Tous les textes qui changent souvent sont regroupés dans le dossier
`content/`. Chaque fichier est commenté en français et explique quoi
modifier. Voici les cas les plus courants :

### Changer un tarif ou une description de soin
→ Ouvrir `content/soins.ts`, chercher le nom du soin, modifier le texte
entre guillemets (`"..."`) après `tarif:`, `duree:` ou `description:`.

### Changer les horaires
→ Ouvrir `content/horaires.ts`. Chaque jour a une ligne. Pour fermer un
jour : remplacer son contenu par `[]`. Pour changer un horaire : modifier
les heures au format `"09:00"`.

### Annoncer une fermeture (congés, formation...)
→ Ouvrir `content/horaires.ts`, dans `fermeturesExceptionnelles`, ajouter
une ligne du type :
```
{ debut: "2026-08-10", fin: "2026-08-24", motif: "Congés d'été" },
```
Elle disparaît toute seule du site une fois la date de fin passée —
inutile de revenir la supprimer.

### Changer ou retirer l'offre du moment
→ Ouvrir `content/offre.ts`. Pour la retirer complètement, remplacer tout
le contenu par `export const offre = null;` — la section disparaît du site.

### Ajouter un vrai avis client (avec son accord écrit)
→ Ouvrir `content/avis.ts`, remplacer un bloc d'exemple par le vrai texte,
le vrai prénom, et passer `exemple: false`.

### Faire disparaître le bandeau "Maquette de présentation"
→ Ouvrir `content/institut.ts`, passer `maquette: true` à `maquette: false`.
**Ne fais ça qu'une fois tous les contenus (horaires, tarifs, textes)
validés** : ce réglage rend aussi le site visible sur Google (il était
invisible pendant la préparation).

Après toute modification : enregistrer le fichier suffit si le site est
en ligne sur un hébergeur connecté au dépôt (mise à jour automatique en
quelques minutes). En local, il faut relancer `npm run dev` pour voir le
changement immédiatement.

## Pour un développeur

### Stack
Next.js 15 (App Router) + TypeScript strict + Tailwind CSS v4. Aucune
librairie d'animation (pas de GSAP, Lenis, Framer Motion) : les reveals et
l'effet de mise au point utilisent `IntersectionObserver` et des
transitions CSS.

### Commandes
```
npm run dev      # serveur de développement
npm run build    # build de production
npm run start    # lance le build de production
npm run lint      # ESLint
npm run test      # Vitest (logique des horaires)
```

### Variables d'environnement
Copier `.env.local.example` en `.env.local` et renseigner :
- `RESEND_API_KEY` — clé API Resend pour l'envoi des e-mails de demande de
  rendez-vous.
- `EMAIL_DESTINATAIRE` — adresse qui reçoit ces demandes.

Sans ces deux variables, le formulaire de contact affiche un message
demandant d'appeler l'institut directement (pas de crash silencieux).

### Redirections 301
La table complète des redirections depuis l'ancien site
(`institutdebeautebesancon.com`) est dans `next.config.ts`
(`redirectsAncienSite`). Ne rien supprimer sans vérifier dans la Search
Console que l'ancienne URL n'est plus indexée.

### Images
Toutes les images actuelles sont des placeholders Unsplash (voir
`CREDITS.md`) — à remplacer par les vraies photographies de l'institut dès
que le shooting est fait (voir le brief, §10).

### Structure
```
app/            pages (App Router)
components/     composants React
content/        tout le texte et les données éditables
lib/            logique (horaires, fonts, navigation, schémas de formulaire)
docs/           modèle de cession de droit à l'image
__tests__/      tests Vitest
```
