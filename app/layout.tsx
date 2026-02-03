import type { Metadata } from 'next';
import { Playfair_Display, Cairo } from 'next/font/google';
import '../styles/globals.css';
import { siteConfig } from '../lib/site.config';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-playfair' });
const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Tapis premium à ${siteConfig.city}`,
  description:
    'Tapis premium, valeur sûre et conseils personnalisés à Nador. Boutique Neo-Decor, showroom local avec large choix.',
  openGraph: {
    title: `${siteConfig.businessName} | Tapis premium à ${siteConfig.city}`,
    description:
      'Tapis premium, valeur sûre et conseils personnalisés à Nador. Boutique Neo-Decor, showroom local avec large choix.',
    type: 'website',
    locale: 'fr_FR',
    siteName: siteConfig.businessName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${cairo.variable} antialiased bg-sand text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
