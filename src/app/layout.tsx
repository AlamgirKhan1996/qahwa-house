// ─────────────────────────────────────────────────────────────
//  Qahwa House · Root Layout
//  Fonts: Cormorant Garamond (EN display), Outfit (EN body),
//         Amiri (AR display), Noto Sans Arabic (AR body)
// ─────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from 'next';
import {
  Cormorant_Garamond,
  Outfit,
  Amiri,
  Noto_Sans_Arabic,
} from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import './globals.css';

// ── Font Loading ─────────────────────────────────────────────

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
  preload: false, // loaded on-demand for Arabic locale
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-arabic',
  display: 'swap',
  preload: false,
});

// ── Metadata ─────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://qahwahouse.sa'),
  title: {
    default: 'Qahwa House — Premium Saudi Coffee Experience',
    template: '%s | Qahwa House',
  },
  description:
    'Experience the finest Saudi coffee culture at Qahwa House, Riyadh. Premium arabica blends, traditional brewing, modern ambiance.',
  keywords: [
    'Saudi coffee',
    'Qahwa',
    'specialty coffee Riyadh',
    'Arabic coffee',
    'premium coffee',
    'قهوة سعودية',
    'مقهى الرياض',
  ],
  authors: [{ name: 'Qahwa House', url: 'https://qahwahouse.sa' }],
  creator: 'Qahwa House',
  publisher: 'Qahwa House',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://qahwahouse.sa',
    siteName: 'Qahwa House',
    title: 'Qahwa House — Premium Saudi Coffee Experience',
    description:
      'Experience the finest Saudi coffee culture in Riyadh. Premium arabica blends, traditional brewing, modern ambiance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Qahwa House — Premium Saudi Coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@qahwahouse',
    creator: '@qahwahouse',
    title: 'Qahwa House — Premium Saudi Coffee Experience',
    description:
      'Experience the finest Saudi coffee culture in Riyadh.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://qahwahouse.sa',
    languages: {
      'en-US': 'https://qahwahouse.sa/en',
      'ar-SA': 'https://qahwahouse.sa/ar',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0804',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ── Structured Data ───────────────────────────────────────────

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Qahwa House',
  description:
    'Premium Saudi specialty coffee brand based in Riyadh, offering exceptional coffee experiences rooted in Arabian heritage.',
  url: 'https://qahwahouse.sa',
  logo: 'https://qahwahouse.sa/logo.png',
  image: 'https://qahwahouse.sa/og-image.jpg',
  telephone: '+966-11-XXX-XXXX',
  email: 'hello@qahwahouse.sa',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al-Olaya District, King Fahd Road',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.6877,
    longitude: 46.6923,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      opens: '07:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday'],
      opens: '07:00',
      closes: '01:00',
    },
  ],
  servesCuisine: ['Coffee', 'Arabian Coffee', 'Specialty Coffee'],
  priceRange: '$$',
  currenciesAccepted: 'SAR',
  paymentAccepted: 'Cash, Credit Card, Apple Pay, STC Pay',
  sameAs: [
    'https://instagram.com/qahwahouse',
    'https://twitter.com/qahwahouse',
    'https://snapchat.com/add/qahwahouse',
  ],
};

// ── Root Layout ───────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${outfit.variable} ${amiri.variable} ${notoArabic.variable} font-english`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* DNS Prefetch for Google Fonts */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="bg-obsidian-900 text-cream-200 antialiased overflow-x-hidden">
        <I18nProvider defaultLocale="en">{children}</I18nProvider>
      </body>
    </html>
  );
}
