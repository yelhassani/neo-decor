"use client";

import { Locale, content } from '../lib/content';

interface TrustProps {
  locale: Locale;
  isArabic: boolean;
}

export function Trust({ locale, isArabic }: TrustProps) {
  const copy = content[locale].trust;
  return (
    <section id="trust" className="bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {content[locale].nav.trust}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{copy.title}</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            {locale === 'ar'
              ? 'نزوركم لاختيار الأنسب ونشارك خبرتنا في الخامات والمقاسات والصيانة.'
              : 'Nous vous aidons à choisir le bon modèle, matière et format pour votre espace.'}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-gray-600">Google Reviews</div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1 text-xl text-amber-500" aria-hidden>
                {'★★★★★'}
              </div>
              <div className="text-3xl font-semibold text-charcoal">4.8/5</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{copy.ratingLabel}</p>
          </div>
          {copy.blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-charcoal">{block.title}</h3>
              <p className={`mt-2 text-sm text-gray-700 ${isArabic ? 'text-right' : 'text-left'}`}>
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
