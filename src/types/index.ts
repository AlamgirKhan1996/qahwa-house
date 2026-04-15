// ─────────────────────────────────────────────────────────────
//  Qahwa House · Global TypeScript Types
// ─────────────────────────────────────────────────────────────

// ── Language & Localization ──────────────────────────────────

/** Supported locale codes */
export type Locale = 'en' | 'ar';

/** Text direction based on locale */
export type Direction = 'ltr' | 'rtl';

/** Bilingual string — every piece of content has both translations */
export interface BilingualText {
  en: string;
  ar: string;
}

// ── Navigation ───────────────────────────────────────────────

export interface NavItem {
  label: BilingualText;
  href: string;
  /** Optional sub-items for dropdown */
  children?: NavItem[];
}

// ── Product / Coffee ─────────────────────────────────────────

export type CoffeeOrigin =
  | 'Saudi Arabia'
  | 'Ethiopia'
  | 'Yemen'
  | 'Colombia'
  | 'Guatemala';

export interface CoffeeProduct {
  id: string;
  name: BilingualText;
  description: BilingualText;
  origin: CoffeeOrigin;
  roastLevel: 'light' | 'medium' | 'medium-dark' | 'dark';
  flavorNotes: BilingualText[];
  price: number;
  currency: 'SAR';
  image?: string;
  featured?: boolean;
  inStock?: boolean;
}

// ── Brand Story / Heritage ────────────────────────────────────

export interface HeritageMilestone {
  year: number;
  title: BilingualText;
  description: BilingualText;
}

export interface BrandValue {
  id: string;
  icon: string; // SVG path or emoji
  title: BilingualText;
  description: BilingualText;
}

// ── Services ─────────────────────────────────────────────────

export interface ServiceOffering {
  id: string;
  title: BilingualText;
  description: BilingualText;
  longDescription: BilingualText;
  icon: string;
  features: BilingualText[];
  price?: BilingualText;
  featured?: boolean;
}

// ── Team ─────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: BilingualText;
  role: BilingualText;
  bio: BilingualText;
  image?: string;
}

// ── Contact ──────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredLanguage: Locale;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export interface BusinessHours {
  day: BilingualText;
  hours: BilingualText;
  closed?: boolean;
}

export interface LocationInfo {
  address: BilingualText;
  neighborhood: BilingualText;
  city: BilingualText;
  country: BilingualText;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  hours: BusinessHours[];
}

// ── Testimonials ─────────────────────────────────────────────

export interface Testimonial {
  id: string;
  author: BilingualText;
  role?: BilingualText;
  content: BilingualText;
  rating: 1 | 2 | 3 | 4 | 5;
  date?: string;
}

// ── SEO ──────────────────────────────────────────────────────

export interface PageSEO {
  title: BilingualText;
  description: BilingualText;
  keywords: BilingualText;
  ogImage?: string;
  noIndex?: boolean;
}

// ── Component Props ──────────────────────────────────────────

/** Base props for all localizable components */
export interface LocaleProps {
  locale: Locale;
  direction: Direction;
}

/** Animation timing configuration */
export interface AnimationConfig {
  delay?: number;
  duration?: number;
  easing?: string;
}

/** Common section props */
export interface SectionProps extends Partial<LocaleProps> {
  className?: string;
  id?: string;
  animate?: boolean;
}
