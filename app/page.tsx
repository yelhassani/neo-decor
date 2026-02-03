"use client";

import { useEffect, useMemo, useState } from 'react';
import { CTA } from '../components/CTA';
import { Categories } from '../components/Categories';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { LocationHours } from '../components/LocationHours';
import { MobileNavBar } from '../components/MobileNavBar';
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
  const mapsCtaUrl = useMemo(() => {
    if (siteConfig.googleMapsUrl.includes('?')) {
      return `${siteConfig.googleMapsUrl}&utm_source=website&utm_medium=cta&utm_campaign=maps`;
    }
    return `${siteConfig.googleMapsUrl}?utm_source=website&utm_medium=cta&utm_campaign=maps`;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang === 'fr' || lang === 'ar') {
      setLocale(lang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'ar' ? 'ar' : 'fr';
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title = content[locale].seo.title;
    const description = content[locale].seo.description;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', locale);
    window.history.replaceState({}, '', url.toString());

    const setLink = (rel: string, hreflang: string | null, href: string) => {
      const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
      let link = document.querySelector(selector) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (hreflang) link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    const frUrl = new URL(window.location.href);
    frUrl.searchParams.set('lang', 'fr');
    const arUrl = new URL(window.location.href);
    arUrl.searchParams.set('lang', 'ar');
    setLink('canonical', null, url.toString());
    setLink('alternate', 'fr', frUrl.toString());
    setLink('alternate', 'ar', arUrl.toString());
  }, [locale]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-sand text-charcoal">
      <Header locale={locale} onChange={setLocale} isArabic={isArabic} />
      <main dir={isArabic ? 'rtl' : 'ltr'} lang={locale === 'ar' ? 'ar' : 'fr'} className="pb-44 sm:pb-0">
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
      <div
        className={`mobile-action-bar fixed bottom-[72px] left-0 right-0 z-40 px-4 sm:hidden ${
          isArabic ? 'text-right' : 'text-left'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2">
          <a
            href={whatsappLink}
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            {content[locale].hero.primaryCta}
          </a>
          <a
            href={mapsCtaUrl}
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-charcoal"
            target="_blank"
            rel="noreferrer"
          >
            {content[locale].hero.secondaryCta}
          </a>
        </div>
      </div>
      <MobileNavBar locale={locale} isArabic={isArabic} />
    </div>
  );
}
