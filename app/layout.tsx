import type { Metadata } from 'next';
import { Playfair_Display, Cairo } from 'next/font/google';
import '../styles/globals.css';
import { content } from '../lib/content';
import { siteConfig } from '../lib/site.config';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-playfair' });
const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700'], variable: '--font-cairo' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: content.fr.seo.title,
  description: content.fr.seo.description,
  openGraph: {
    title: content.fr.seo.title,
    description: content.fr.seo.description,
    type: 'website',
    locale: 'fr_FR',
    siteName: siteConfig.businessName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: siteConfig.businessName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    telephone: siteConfig.whatsappNumber,
    sameAs: [siteConfig.googleMapsUrl, siteConfig.instagramUrl],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${cairo.variable} antialiased bg-sand text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
