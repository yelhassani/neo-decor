"use client";

import { Locale, content } from '../lib/content';

interface MobileNavBarProps {
  locale: Locale;
  isArabic: boolean;
}

export function MobileNavBar({ locale, isArabic }: MobileNavBarProps) {
  const nav = content[locale].nav;
  const items = [
    { href: '#hero', label: nav.hero },
    { href: '#categories', label: nav.categories },
    { href: '#gallery', label: nav.gallery },
    { href: '#location', label: nav.location },
    { href: '#faq', label: nav.faq },
  ];

  return (
    <nav
      className={`mobile-nav-bar fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-2 border-t border-gray-200 bg-white/95 px-3 py-2 backdrop-blur sm:hidden ${
        isArabic ? 'flex-row-reverse' : ''
      }`}
      aria-label={locale === 'ar' ? 'التنقل' : 'Navigation'}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="min-w-[44px] flex-1 rounded-xl px-2 py-2 text-center text-[11px] font-semibold text-gray-700 hover:text-accent"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
