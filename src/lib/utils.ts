// ─────────────────────────────────────────────────────────────
//  Qahwa House · Shared Utilities
// ─────────────────────────────────────────────────────────────

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind class names with clsx, resolving conflicts via twMerge.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Creates an intersection observer that triggers a callback when
 * an element enters the viewport. Returns a cleanup function.
 */
export function createIntersectionObserver(
  element: Element,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    { threshold: 0.1, ...options },
  );

  observer.observe(element);
  return () => observer.unobserve(element);
}

/**
 * Validates an email address format.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Validates a Saudi/international phone number.
 */
export function isValidPhone(phone: string): boolean {
  // Accepts Saudi mobile (+966 5X XXX XXXX) and general international
  return /^(\+?966|0)?5[0-9]{8}$|^\+?[1-9]\d{7,14}$/.test(
    phone.replace(/[\s\-()]/g, ''),
  );
}

/**
 * Truncates a string to maxLength characters, appending '...'.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Generates a random integer between min and max (inclusive).
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Detects if the user's browser prefers RTL based on their language settings.
 */
export function detectBrowserLocale(): 'en' | 'ar' {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language?.split('-')[0]?.toLowerCase();
  return lang === 'ar' ? 'ar' : 'en';
}

/**
 * Formats a date for display in the given locale.
 */
export function formatDate(date: Date, locale: 'en' | 'ar'): string {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
