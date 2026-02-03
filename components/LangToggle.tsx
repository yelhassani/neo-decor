"use client";

import { Locale } from '../lib/content';

interface LangToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export function LangToggle({ locale, onChange }: LangToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
      {(
        [
          { code: 'fr', label: 'FR' },
          { code: 'ar', label: 'AR' },
        ] as { code: Locale; label: string }[]
      ).map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => onChange(item.code)}
            className={`${
              active
                ? 'bg-accent text-white shadow-sm'
                : 'text-charcoal hover:bg-gray-100'
            } px-3 py-1 text-sm font-semibold rounded-full transition-colors`}
            aria-pressed={active}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

