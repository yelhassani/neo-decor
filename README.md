# Neo-Decor Landing Page

Landing page bilingue (FR/AR) pour Neo-Decor (tapis à Nador) construite avec Next.js 14 (App Router), TypeScript et TailwindCSS.

## Démarrage
1. Installez les dépendances :
```bash
npm install
```
2. Lancez le mode développement :
```bash
npm run dev
```
3. Ouvrez http://localhost:3000

## Configuration principale
Tous les paramètres métier sont dans `lib/site.config.ts` : numéro WhatsApp, message prérempli, adresse, liens Google Maps, Instagram, horaires. Le contenu bilingue (titres, descriptions, FAQ, etc.) est dans `lib/content.ts`.

## Personnalisation rapide
- Images : remplacez les URLs Unsplash dans `components/Gallery.tsx` par vos photos (ou placez vos fichiers dans `public/` et utilisez un chemin local). Mettez à jour `next.config.js` si vous utilisez d’autres domaines.
- CTAs : les boutons WhatsApp/Itinéraire utilisent les valeurs de `site.config.ts`. Modifiez `whatsappMessage`/`whatsappNumber` au besoin.
- Horaires : ajustez le tableau dans `components/LocationHours.tsx` ou la chaîne `openingHours` dans `site.config.ts`.
- Couleurs/typographie : modifiez `tailwind.config.js` (couleurs) et `styles/globals.css` (polices, fonds).

## Déploiement
- Recommandé : Vercel
```bash
npm run build
```
Déployez ensuite le dossier via Vercel (import Git ou `vercel deploy`).

## Structure des fichiers
- `app/` : layout global + page d’accueil
- `components/` : sections (Hero, Categories, Trust, Gallery, Why, LocationHours, FAQ, CTA, Footer, LangToggle)
- `lib/` : contenu bilingue + configuration métier
- `styles/` : styles globaux Tailwind
- `public/` : placez vos assets (photos, favicon)

## Accessibilité & bonnes pratiques
- Mise en page responsive mobile-first, bouton WhatsApp sticky sur mobile
- Direction `dir="rtl"` activée pour l’arabe, typographie adaptée (Cairo)
- Balises Meta/OpenGraph dans `app/layout.tsx`
