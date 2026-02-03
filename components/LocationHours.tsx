"use client";

import Link from 'next/link';
import { Locale, content } from '../lib/content';
import { siteConfig } from '../lib/site.config';

interface LocationHoursProps {
  locale: Locale;
  isArabic: boolean;
}

export function LocationHours({ locale, isArabic }: LocationHoursProps) {
  const copy = content[locale].location;
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;
  const mapsCtaUrl = siteConfig.googleMapsUrl.includes('?')
    ? `${siteConfig.googleMapsUrl}&utm_source=website&utm_medium=cta&utm_campaign=maps`
    : `${siteConfig.googleMapsUrl}?utm_source=website&utm_medium=cta&utm_campaign=maps`;
  const hours = [
    { label: locale === 'ar' ? 'الإثنين - السبت' : 'Lun - Sam', value: '09h30 - 18h00' },
    { label: locale === 'ar' ? 'الأحد' : 'Dimanche', value: locale === 'ar' ? 'مغلق' : 'Fermé' },
  ];
  return (
    <section id="location" className="bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{copy.title}</p>
            <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{copy.description}</h2>
            <div className="mt-6 space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div>
                <div className="text-sm font-semibold text-gray-600">{copy.addressLabel}</div>
                <p className="text-lg font-semibold text-charcoal">{siteConfig.address}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600">{copy.hoursLabel}</div>
                <div className="mt-2 grid grid-cols-2 gap-x-4 text-sm font-semibold text-charcoal sm:max-w-md">
                  {hours.map((slot) => (
                    <div key={slot.label} className="flex items-center justify-between gap-2 border-b border-gray-100 py-2">
                      <span>{slot.label}</span>
                      <span className="text-gray-700">{slot.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex flex-wrap gap-3 ${isArabic ? 'justify-end' : 'justify-start'}`}>
                <Link
                  href={whatsappLink}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </Link>
                <Link
                  href={mapsCtaUrl}
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.directions}
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neo-Decor location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
