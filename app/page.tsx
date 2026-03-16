import type { Metadata } from 'next';
import { HomePageClient } from '../components/HomePageClient';
import { content, type Locale } from '../lib/content';
import { siteConfig } from '../lib/site.config';

type HomePageProps = {
  searchParams?: {
    lang?: string;
  };
};

function resolveLocale(lang?: string): Locale {
  return lang === 'ar' ? 'ar' : 'fr';
}

export function generateMetadata({ searchParams }: HomePageProps): Metadata {
  const locale = resolveLocale(searchParams?.lang);
  const seo = content[locale].seo;
  const path = locale === 'ar' ? '/?lang=ar' : '/';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
      languages: {
        fr: '/',
        ar: '/?lang=ar',
        'x-default': '/',
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_FR',
      siteName: siteConfig.businessName,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: 'Neo-Decor Nador - Magasin de tapis et moquette',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [siteConfig.ogImage],
    },
    keywords:
      locale === 'ar'
        ? ['متجر سجاد الناظور', 'سجاد صالون الناظور', 'سجاد مغربي الناظور', 'موكيت الناظور']
        : ['magasin de tapis nador', 'tapis salon nador', 'tapis marocain nador', 'carpet store nador'],
  };
}

export default function HomePage({ searchParams }: HomePageProps) {
  return <HomePageClient initialLocale={resolveLocale(searchParams?.lang)} />;
}
