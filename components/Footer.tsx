"use client";

import Link from 'next/link';
import { Locale, content } from '../lib/content';
import { siteConfig } from '../lib/site.config';

interface FooterProps {
  locale: Locale;
  isArabic: boolean;
}

export function Footer({ locale, isArabic }: FooterProps) {
  const copy = content[locale].footer;
  const hasTikTok = siteConfig.tiktokUrl && !siteConfig.tiktokUrl.startsWith('TODO_');
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-36 pt-8 sm:pb-8">
        <div className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${isArabic ? 'text-right sm:flex-row-reverse' : ''}`}>
          <div>
            <div className="text-lg font-semibold text-charcoal">{siteConfig.businessName}</div>
            <p className="text-sm text-gray-600">{copy.tagline}</p>
            <div className={`mt-2 text-sm text-gray-600 ${isArabic ? 'text-right' : 'text-left'}`}>
              <div>{siteConfig.address}</div>
              <a className="font-semibold text-charcoal hover:text-accent" href={`tel:${siteConfig.whatsappNumber}`}>
                {siteConfig.whatsappDisplay}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <Link href="/tapis-salon-nador" className="font-semibold text-charcoal hover:text-accent">
              Tapis salon
            </Link>
            <Link href="/tapis-chambre-nador" className="font-semibold text-charcoal hover:text-accent">
              Tapis chambre
            </Link>
            <Link href="/moquette-nador" className="font-semibold text-charcoal hover:text-accent">
              Moquette
            </Link>
            <span>{copy.socials}</span>
            <Link href={siteConfig.instagramUrl} className="font-semibold text-charcoal hover:text-accent" target="_blank" rel="noreferrer">
              Instagram
            </Link>
            {hasTikTok ? (
              <a className="font-semibold text-charcoal hover:text-accent" href={siteConfig.tiktokUrl} target="_blank" rel="noreferrer">
                TikTok
              </a>
            ) : null}
          </div>
        </div>
        <div className={`mt-4 flex flex-col gap-2 text-xs text-gray-500 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div>{copy.rights}</div>
          <Link href={siteConfig.googleMapsUrl} className="font-semibold text-charcoal hover:text-accent" target="_blank" rel="noreferrer">
            Google Maps
          </Link>
        </div>
      </div>
    </footer>
  );
}
