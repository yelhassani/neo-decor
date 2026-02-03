"use client";

import Link from 'next/link';
import { siteConfig } from '../lib/site.config';
import { Locale, content } from '../lib/content';

interface HeroProps {
  locale: Locale;
  isArabic: boolean;
}

export function Hero({ locale, isArabic }: HeroProps) {
  const copy = content[locale].hero;
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;

  return (
    <section id="hero" className="relative overflow-hidden bg-sand">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-20%] top-[-10%] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-gray-200 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,59,42,0.08),transparent_40%)]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:pt-16 lg:flex-row lg:items-center lg:gap-16">
        <div className={`flex-1 space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-sm">
            Neo-Decor · {siteConfig.city}
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              {copy.headline}
            </h1>
            <p className="text-lg text-gray-700 sm:text-xl">{copy.subheadline}</p>
          </div>
          <div className={`flex flex-wrap gap-3 ${isArabic ? 'justify-end' : 'justify-start'}`}>
            <Link
              href={whatsappLink}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              target="_blank"
              rel="noreferrer"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={siteConfig.googleMapsUrl}
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              {copy.secondaryCta}
            </Link>
          </div>
          <div className={`flex flex-wrap gap-3 text-sm font-semibold text-gray-700 ${isArabic ? 'justify-end' : 'justify-start'}`}>
            {copy.trustBullets.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex-1 rounded-3xl bg-white p-6 shadow-card ring-1 ring-gray-100">
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-sm">
            Textures
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square rounded-2xl bg-gradient-to-br from-white via-sand to-gray-100 shadow-inner ring-1 ring-gray-200" />
            ))}
          </div>
          <p className={`mt-4 text-sm text-gray-600 ${isArabic ? 'text-right' : 'text-left'}`}>
            {locale === 'ar'
              ? 'صور توضيحية مؤقتة. استبدلها بصور صالة العرض الخاصة بك.'
              : 'Images temporaires. Remplacez-les par vos photos de showroom.'}
          </p>
        </div>
      </div>
    </section>
  );
}
