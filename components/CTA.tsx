"use client";

import Link from 'next/link';
import { Locale, content } from '../lib/content';
import { siteConfig } from '../lib/site.config';

interface CTAProps {
  locale: Locale;
  isArabic: boolean;
}

export function CTA({ locale, isArabic }: CTAProps) {
  const copy = content[locale].finalCta;
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;

  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Neo-Decor</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{copy.title}</h2>
          <p className="mt-2 text-sm text-gray-200 sm:text-base">{copy.description}</p>
        </div>
        <Link
          href={whatsappLink}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          target="_blank"
          rel="noreferrer"
        >
          {copy.cta}
        </Link>
      </div>
    </section>
  );
}
