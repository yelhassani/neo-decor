"use client";

import { Locale, content } from '../lib/content';

interface FAQProps {
  locale: Locale;
  isArabic: boolean;
}

export function FAQ({ locale, isArabic }: FAQProps) {
  const copy = content[locale].faq;
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{copy.title}</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            {locale === 'ar'
              ? 'إجابات سريعة على أسئلة الزبناء حول التوصيل والمقاسات والدفع.'
              : 'Réponses rapides sur la livraison, le paiement et les tailles personnalisées.'}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {copy.items.map((item) => (
            <div key={item.question} className="rounded-2xl border border-gray-100 bg-sand/40 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-charcoal">{item.question}</h3>
              <p className={`mt-2 text-sm text-gray-700 ${isArabic ? 'text-right' : 'text-left'}`}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
