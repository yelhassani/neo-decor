"use client";

import Link from 'next/link';
import { Locale, content } from '../lib/content';
import { siteConfig } from '../lib/site.config';
import { LangToggle } from './LangToggle';

interface HeaderProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
  isArabic: boolean;
}

export function Header({ locale, onChange, isArabic }: HeaderProps) {
  const nav = content[locale].nav;
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;
  const links = [
    { href: '#hero', label: nav.hero },
    { href: '#categories', label: nav.categories },
    { href: '#trust', label: nav.trust },
    { href: '#gallery', label: nav.gallery },
    { href: '#location', label: nav.location },
    { href: '#faq', label: nav.faq },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4 ${
          isArabic ? 'flex-row-reverse text-right' : ''
        }`}
      >
        <Link href="#hero" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-semibold shadow-md">
            ND
          </div>
          <div className="leading-tight">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-600">Neo-Decor</div>
            <div className="text-base font-semibold text-charcoal">Tapis premium | Nador</div>
          </div>
        </Link>
        <nav
          className={`hidden items-center gap-6 text-sm font-semibold text-gray-700 md:flex ${
            isArabic ? 'flex-row-reverse' : ''
          }`}
        >
          {links.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle locale={locale} onChange={onChange} />
          <a
            href={whatsappLink}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:block"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

