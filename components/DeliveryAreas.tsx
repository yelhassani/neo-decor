"use client";

import Link from 'next/link';
import { type Locale } from '../lib/content';
import { seoContent } from '../lib/seo';
import { siteConfig } from '../lib/site.config';

interface DeliveryAreasProps {
  locale: Locale;
  isArabic: boolean;
}

export function DeliveryAreas({ locale, isArabic }: DeliveryAreasProps) {
  const title = locale === 'ar' ? 'مناطق الخدمة والتوصيل' : 'Zones desservies autour de Nador';
  const description =
    locale === 'ar'
      ? 'نستقبل الزبناء في المعرض وننظم التوصيل إلى الناظور وبني أنصار والعروي وسلوان حسب نوع السجاد والمقاس.'
      : 'Nous accueillons les clients au showroom et organisons la livraison vers Nador, Beni Ansar, Al Aroui et Selouane selon le format du tapis.';
  const mapsLink = siteConfig.googleMapsUrl.includes('?')
    ? `${siteConfig.googleMapsUrl}&utm_source=website&utm_medium=internal_link&utm_campaign=delivery_areas`
    : `${siteConfig.googleMapsUrl}?utm_source=website&utm_medium=internal_link&utm_campaign=delivery_areas`;

  return (
    <section id="delivery-areas" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {locale === 'ar' ? 'الخدمة المحلية' : 'Service local'}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-3xl text-gray-700">{description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {seoContent.serviceAreas.map((area) => (
            <div key={area.name} className="rounded-2xl border border-gray-100 bg-sand/50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-charcoal">{area.name}</h3>
              <p className={`mt-2 text-sm text-gray-700 ${isArabic ? 'text-right' : 'text-left'}`}>{area.description}</p>
            </div>
          ))}
        </div>
        <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? 'justify-end' : 'justify-start'}`}>
          <Link
            href="/moquette-nador"
            className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-accent hover:text-accent"
          >
            {locale === 'ar' ? 'شاهد صفحة الموكيت' : 'Voir la page moquette Nador'}
          </Link>
          <Link
            href={mapsLink}
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            {locale === 'ar' ? 'افتح جوجل مابس' : 'Ouvrir Google Maps'}
          </Link>
        </div>
      </div>
    </section>
  );
}
