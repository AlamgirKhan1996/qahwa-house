'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Language Toggle
//  Switches between EN (LTR) and AR (RTL) with a smooth pill animation
// ─────────────────────────────────────────────────────────────

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { ui } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  /** If true, renders as a full-width button (for mobile drawer) */
  fullWidth?: boolean;
}

export default function LanguageToggle({ fullWidth = false }: LanguageToggleProps) {
  const { locale, toggleLocale, t, isRTL } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
      className={cn(
        'relative flex items-center gap-2 transition-all duration-300 group',
        fullWidth
          ? 'w-full justify-between px-4 py-3 border border-gold-600/30 hover:border-gold-500/60'
          : 'px-3 py-1.5 border border-gold-600/30 hover:border-gold-500/60',
      )}
    >
      {/* Globe Icon */}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className="text-gold-500 flex-shrink-0"
        aria-hidden="true"
      >
        <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
        <path
          d="M7.5 1C7.5 1 5 4 5 7.5C5 11 7.5 14 7.5 14"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M7.5 1C7.5 1 10 4 10 7.5C10 11 7.5 14 7.5 14"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line x1="1" y1="7.5" x2="14" y2="7.5" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Toggle label — shows next language */}
      <span
        className={cn(
          'text-xs font-medium tracking-wider transition-colors duration-200',
          'text-cream-400 group-hover:text-gold-400',
          // Arabic label uses Amiri font, English uses Outfit
          locale === 'en' ? 'font-amiri text-sm' : 'font-outfit uppercase',
        )}
      >
        {t(ui.language.toggle)}
      </span>

      {/* Active locale indicator */}
      {fullWidth && (
        <span className="text-xs text-cream-500 font-outfit">
          {t(ui.language.current)}
        </span>
      )}
    </button>
  );
}
