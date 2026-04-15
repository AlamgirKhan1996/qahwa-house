'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Internationalization Context & Utilities
// ─────────────────────────────────────────────────────────────

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { Locale, Direction, BilingualText } from '@/types';

// ── Storage Key ───────────────────────────────────────────────

const LOCALE_STORAGE_KEY = 'qahwa-house-locale';

// ── Context Type ──────────────────────────────────────────────

interface I18nContextValue {
  /** Active locale: 'en' | 'ar' */
  locale: Locale;
  /** Text direction based on locale */
  direction: Direction;
  /** True when locale is Arabic */
  isRTL: boolean;
  /** Resolve a bilingual string to the active locale's value */
  t: (text: BilingualText) => string;
  /** Switch to a specific locale */
  setLocale: (locale: Locale) => void;
  /** Toggle between 'en' and 'ar' */
  toggleLocale: () => void;
}

// ── Create Context ────────────────────────────────────────────

const I18nContext = createContext<I18nContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────

interface I18nProviderProps {
  children: ReactNode;
  /** Default locale if none is stored */
  defaultLocale?: Locale;
}

export function I18nProvider({
  children,
  defaultLocale = 'en',
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // ── Hydrate from localStorage on mount ──────────────────────
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      if (stored && (stored === 'en' || stored === 'ar')) {
        setLocaleState(stored);
      }
    } catch {
      // SSR or private browsing — ignore
    }
  }, []);

  // ── Sync direction and lang attribute to <html> ──────────────
  useEffect(() => {
    const dir: Direction = locale === 'ar' ? 'rtl' : 'ltr';
    const html = document.documentElement;
    html.setAttribute('dir', dir);
    html.setAttribute('lang', locale);
    // Swap font class for Arabic
    if (locale === 'ar') {
      html.classList.add('font-arabic');
      html.classList.remove('font-english');
    } else {
      html.classList.add('font-english');
      html.classList.remove('font-arabic');
    }
  }, [locale]);

  // ── Persist locale ───────────────────────────────────────────
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  }, [locale, setLocale]);

  // ── Translation resolver ─────────────────────────────────────
  const t = useCallback(
    (text: BilingualText): string => {
      return text[locale] ?? text['en'] ?? '';
    },
    [locale],
  );

  const direction: Direction = locale === 'ar' ? 'rtl' : 'ltr';
  const isRTL = direction === 'rtl';

  return (
    <I18nContext.Provider
      value={{ locale, direction, isRTL, t, setLocale, toggleLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────

/**
 * useI18n — access locale state and translation utilities
 * Must be used inside <I18nProvider>.
 */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an <I18nProvider>');
  }
  return ctx;
}

// ── Utility: Conditional RTL class ───────────────────────────

/**
 * Returns ltr-variant or rtl-variant class depending on direction.
 *
 * @example
 * rtlConditional(isRTL, 'ml-4', 'mr-4') // → 'mr-4' when RTL
 */
export function rtlConditional(
  isRTL: boolean,
  ltrClass: string,
  rtlClass: string,
): string {
  return isRTL ? rtlClass : ltrClass;
}

/**
 * Formats a number using Arabic-Indic digits when locale is 'ar'.
 */
export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US').format(
    value,
  );
}

/**
 * Formats currency in SAR for the given locale.
 */
export function formatCurrency(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 0,
  }).format(amount);
}
