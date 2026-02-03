# CONTEXT
You are a senior front-end engineer + conversion-focused landing page designer.
Build a bilingual (FR + AR) landing page for: Neo-Decor — a carpet/rug store in Nador, Morocco.
Primary goals:
1) Drive local foot traffic to the physical store
2) Generate WhatsApp inquiries (primary CTA)
3) Improve credibility for Google/Instagram visitors (trust + brand)

Target audience: broad (families, couples, businesses, MRE) — so messaging must be universal, clear, and trust-building.
Positioning: Premium quality + excellent value for money.

# OUTPUT REQUIREMENTS
- Deliver a complete, runnable project.
- Use Next.js (App Router) + TypeScript + TailwindCSS.
- One main page: `/` (landing page).
- Include basic SEO (title, meta description, OpenGraph), performance best practices, and accessibility.
- Provide clean, modern design, mobile-first, and fast loading.
- Implement bilingual toggle FR/AR.
- Arabic must be RTL with proper typography and layout mirroring where needed.

# CONTENT & SECTIONS (MUST HAVE)
## 1) HERO (above the fold)
- Big headline FR + AR
- Subheadline explaining value proposition: premium rugs, good prices, large choice
- Primary CTA button: "WhatsApp" (opens wa.me link)
- Secondary CTA button: "Itinéraire" (opens Google Maps directions)
- Add 3 quick trust bullets: "Qualité", "Prix", "Conseil"

## 2) PRODUCT CATEGORIES (cards/grid)
Show 6 categories with icons/placeholders:
- Salon
- Chambre
- Couloir
- Berbère / Traditionnel
- Moderne
- Sur mesure / Grand format (optional)
Each card: short FR+AR description.

## 3) SOCIAL PROOF / TRUST
- 3 trust blocks: "Clients satisfaits", "Large choix", "Conseils en magasin"
- Include a placeholder for Google Reviews embed or a simple component with rating stars + “4.8/5 (placeholder)”
(Do not fake real reviews; mark as placeholder.)

## 4) GALLERY
- Image gallery section with placeholders
- Expect user to replace with real photos later
- Use responsive images (Next/Image) and nice spacing.

## 5) WHY NEO-DECOR
- Short story + differentiators: premium, value, curated selection, local Nador store
- FR + AR

## 6) LOCATION & HOURS (high priority)
- Address block (placeholder variables)
- Embedded Google Maps iframe (use placeholder map embed URL)
- Store hours table (placeholder, editable)
- CTA repeated: WhatsApp + Directions

## 7) FAQ
At least 6 FAQs (FR + AR) focused on:
- Delivery in Nador / nearby cities
- Payment methods
- Custom sizes
- Installation / advice
- Prices range
- How to reach WhatsApp quickly

## 8) FINAL CTA STRIP
A strong CTA banner at the bottom with WhatsApp button.

## 9) FOOTER
- Brand name + short slogan FR/AR
- Social links placeholders (Instagram, TikTok)
- Legal minimal (© year)

# BRANDING / DESIGN
- Visual style: premium but warm, Moroccan touch subtle (patterns as background accents optional).
- Colors: neutral base (white/cream), dark text, accent color inspired by rugs (deep red / terracotta) but keep it minimal.
- Typography: readable, modern. Ensure AR font looks good (use a Google Font that supports Arabic, e.g. Cairo or Tajawal).
- Use consistent spacing, large CTAs, sticky WhatsApp button on mobile.

# INTERNATIONALIZATION (IMPORTANT)
Implement a simple i18n approach:
- A `content.ts` (or JSON) holding all strings for FR and AR.
- A language toggle in header.
- When AR is selected: set `dir="rtl"` and align layout accordingly.

# CONFIG / PLACEHOLDERS (IMPORTANT)
Create a single config file (e.g. `site.config.ts`) containing:
- businessName: "Neo-Decor"
- city: "Nador"
- whatsappNumber: "+212 6 27 21 37 07"
- whatsappMessage: "Bonjour, je souhaite des infos sur vos tapis."
- address: "106-108 Rue KHALID IBN ELOUALID, Nador 62000, Maroc"
- googleMapsUrl: "https://maps.app.goo.gl/9FmF4Jn2k7Fpc1RS8"
- googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.260500948134!2d-2.9257331244318863!3d35.17505927275488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a7f6a4fc5a83%3A0x70773251433d751c!2sNeo-Decor!5e0!3m2!1sfr!2sfr!4v1770123738586!5m2!1sfr!2sfr"
- instagramUrl: "https://www.instagram.com/neodecor_nador/"
- openingHours: du lundi au samedi de 09:30 a 18h

All buttons should use these config values.

# FILE STRUCTURE (REQUIRED)
- app/page.tsx
- app/layout.tsx
- components/ (Header, Hero, Categories, Trust, Gallery, LocationHours, FAQ, CTA, Footer, LangToggle)
- lib/content.ts (FR/AR strings)
- lib/site.config.ts
- styles/globals.css
- README.md with:
  - install/run commands
  - where to edit WhatsApp number, address, images
  - how to deploy (Vercel recommended)

# COPYWRITING TONE
- Professional, reassuring, direct.
- Strong local callouts: "à Nador" / "بالناظور"
- Emphasize: quality + fair prices + guidance in-store.
- No overhype, no fake claims.

# FINAL DELIVERABLE
Return the full code for the project with all files, ready to run.
