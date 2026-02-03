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
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-8">
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
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{copy.socials}</span>
            <Link href={siteConfig.instagramUrl} className="font-semibold text-charcoal hover:text-accent" target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <a className="font-semibold text-charcoal hover:text-accent" href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>
        <div className={`mt-4 text-xs text-gray-500 ${isArabic ? 'text-right' : 'text-left'}`}>{copy.rights}</div>
      </div>
    </footer>
  );
}
