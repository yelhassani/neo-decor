"use client";

import Image from 'next/image';
import { Locale, content } from '../lib/content';

interface GalleryProps {
  locale: Locale;
  isArabic: boolean;
}

const galleryImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523419400524-223f0d2ee1e3?auto=format&fit=crop&w=900&q=80',
];

export function Gallery({ locale, isArabic }: GalleryProps) {
  const copy = content[locale].gallery;
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {content[locale].nav.gallery}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{copy.title}</h2>
          <p className="mt-3 max-w-3xl text-gray-700">{copy.description}</p>
          <p className="mt-1 max-w-3xl text-sm text-gray-600">
            {locale === 'ar'
              ? 'صور افتراضية. استبدلها بصور حقيقية من معروضات المتجر.'
              : 'Images fictives. Remplacez-les par vos photos de showroom.'}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
              <Image
                src={src}
                alt={copy.alts[idx] ?? (locale === 'ar' ? 'سجاد معروض في المتجر' : 'Tapis exposé en magasin')}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
