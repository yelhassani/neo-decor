"use client";

import { Locale, content } from '../lib/content';

interface WhyProps {
  locale: Locale;
  isArabic: boolean;
}

export function Why({ locale, isArabic }: WhyProps) {
  const copy = content[locale].why;
  return (
    <section className="bg-white" id="why">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`rounded-3xl border border-gray-100 bg-sand/50 p-8 shadow-sm ${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {locale === 'ar' ? 'قصتنا' : 'Notre histoire'}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 max-w-3xl text-gray-700">{copy.story}</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {copy.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                  ✓
                </span>
                <p className="text-sm text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
