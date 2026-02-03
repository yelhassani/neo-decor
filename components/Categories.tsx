"use client";

import { Locale, content } from '../lib/content';

interface CategoriesProps {
  locale: Locale;
  isArabic: boolean;
}

const icons = ['🛋️', '🛏️', '🛣️', '🧶', '✨', '📏'];

export function Categories({ locale, isArabic }: CategoriesProps) {
  const copy = content[locale].categories;
  return (
    <section id="categories" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {content[locale].nav.categories}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{copy.title}</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            {locale === 'ar'
              ? 'خيارات جاهزة للمساحات المختلفة مع إمكانية المقاسات الخاصة عند الحاجة.'
              : 'Des options prêtes pour chaque espace, avec du sur-mesure possible.'}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, idx) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-sand to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {icons[idx]}
                </span>
                <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
              </div>
              <p className={`mt-3 text-sm text-gray-700 ${isArabic ? 'text-right' : 'text-left'}`}>
                {item.description}
              </p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-accent/15 blur-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
