"use client";

import { useEffect, useMemo, useState } from 'react';
import { CTA } from './CTA';
import { Categories } from './Categories';
import { DeliveryAreas } from './DeliveryAreas';
import { FAQ } from './FAQ';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import { Header } from './Header';
import { Hero } from './Hero';
import { LocationHours } from './LocationHours';
import { MobileNavBar } from './MobileNavBar';
import { Trust } from './Trust';
import { Why } from './Why';
import { type Locale } from '../lib/content';
import { siteConfig } from '../lib/site.config';

interface HomePageClientProps {
  initialLocale: Locale;
}

export function HomePageClient({ initialLocale }: HomePageClientProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const isArabic = locale === 'ar';
  const whatsappLink = useMemo(
    () => `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
    [],
  );
  const mapsCtaUrl = useMemo(() => {
    if (siteConfig.googleMapsUrl.includes('?')) {
      return `${siteConfig.googleMapsUrl}&utm_source=website&utm_medium=cta&utm_campaign=maps`;
    }
    return `${siteConfig.googleMapsUrl}?utm_source=website&utm_medium=cta&utm_campaign=maps`;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'ar' ? 'ar' : 'fr';
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';

    const url = new URL(window.location.href);
    if (locale === 'ar') {
      url.searchParams.set('lang', 'ar');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  }, [locale]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-sand text-charcoal">
      <Header locale={locale} onChange={setLocale} isArabic={isArabic} />
      <main
        dir={isArabic ? 'rtl' : 'ltr'}
        lang={locale === 'ar' ? 'ar' : 'fr'}
        className="pb-0"
      >
        <Hero locale={locale} isArabic={isArabic} />
        <Trust locale={locale} isArabic={isArabic} />
        <Categories locale={locale} isArabic={isArabic} />
        <Gallery locale={locale} isArabic={isArabic} />
        <Why locale={locale} isArabic={isArabic} />
        <LocationHours locale={locale} isArabic={isArabic} />
        <DeliveryAreas locale={locale} isArabic={isArabic} />
        <FAQ locale={locale} isArabic={isArabic} />
        <CTA locale={locale} isArabic={isArabic} />
      </main>
      <Footer locale={locale} isArabic={isArabic} />
      <div
        className={`mobile-action-bar fixed bottom-[72px] left-0 right-0 z-40 px-4 sm:hidden ${
          isArabic ? 'text-right' : 'text-left'
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
          <a
            href={whatsappLink}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-accent px-4 py-3 text-center text-xs font-semibold leading-tight text-white shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            {isArabic ? 'راسلنا على واتساب' : 'Demander des photos sur WhatsApp'}
          </a>
          <a
            href={mapsCtaUrl}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-3 text-center text-xs font-semibold leading-tight text-charcoal"
            target="_blank"
            rel="noreferrer"
          >
            {isArabic ? 'افتح الطريق إلى المتجر' : 'Ouvrir l’itineraire Google Maps'}
          </a>
        </div>
      </div>
      <MobileNavBar locale={locale} isArabic={isArabic} />
    </div>
  );
}
