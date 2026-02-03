"use client";

import { useMemo, useState } from 'react';
import { CTA } from '../components/CTA';
import { Categories } from '../components/Categories';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { LocationHours } from '../components/LocationHours';
import { Trust } from '../components/Trust';
import { Why } from '../components/Why';
import { content, Locale } from '../lib/content';
import { siteConfig } from '../lib/site.config';

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('fr');
  const isArabic = locale === 'ar';
  const whatsappLink = useMemo(
    () => `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
    [],
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-sand text-charcoal">
      <Header locale={locale} onChange={setLocale} isArabic={isArabic} />
      <main dir={isArabic ? 'rtl' : 'ltr'} lang={locale === 'ar' ? 'ar' : 'fr'}>
        <Hero locale={locale} isArabic={isArabic} />
        <Categories locale={locale} isArabic={isArabic} />
        <Trust locale={locale} isArabic={isArabic} />
        <Gallery locale={locale} isArabic={isArabic} />
        <Why locale={locale} isArabic={isArabic} />
        <LocationHours locale={locale} isArabic={isArabic} />
        <FAQ locale={locale} isArabic={isArabic} />
        <CTA locale={locale} isArabic={isArabic} />
      </main>
      <Footer locale={locale} isArabic={isArabic} />
      <a
        href={whatsappLink}
        className="sticky-whatsapp sm:hidden"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        {content[locale].hero.primaryCta}
      </a>
    </div>
  );
}
