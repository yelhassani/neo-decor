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
