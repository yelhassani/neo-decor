import type { Metadata } from 'next';
import { Playfair_Display, Cairo } from 'next/font/google';
import '../styles/globals.css';
import { content } from '../lib/content';
import { siteConfig } from '../lib/site.config';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-playfair' });
const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700'], variable: '--font-cairo' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: content.fr.seo.title,
  description: content.fr.seo.description,
  alternates: {
    canonical: '/',
    languages: {
      fr: '/?lang=fr',
      ar: '/?lang=ar',
    },
  },
  openGraph: {
    title: content.fr.seo.title,
    description: content.fr.seo.description,
    url: '/',
    type: 'website',
    locale: 'fr_FR',
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Neo-Decor Nador - Magasin de tapis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.fr.seo.title,
    description: content.fr.seo.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${playfair.variable} ${cairo.variable} antialiased bg-sand text-charcoal`}>
        {children}
      </body>
    </html>
  );
}