# Qahwa House · قهوة هاوس

**Production-ready Next.js website for Qahwa House**, a premium Saudi coffee brand based in Riyadh. Features bilingual English/Arabic support with full RTL layout switching, gold luxury aesthetic, and optimized Core Web Vitals.

---

## ✨ Features

- **Next.js 14** with App Router and Server Components
- **Bilingual (EN/AR)** with real-time RTL/LTR layout switching — no page reload
- **Luxury gold design** — Cormorant Garamond + Amiri typography, deep obsidian palette
- **Islamic geometric patterns** as CSS-only decorative backgrounds
- **Scroll-reveal animations** via IntersectionObserver (no heavy animation library)
- **Production contact form** with bilingual validation + Resend email integration
- **Full SEO** — structured data (JSON-LD), Open Graph, Twitter Card, sitemap, robots.txt
- **PWA manifest** for home screen installation
- **Accessibility** — WCAG 2.1 AA, focus management, ARIA labels, semantic HTML
- **Performance** — lazy loading, next/font, image optimization, no render-blocking resources
- **Deployment-ready** for Vercel with security headers and edge caching rules

---

## 🗂 Project Structure

```
qahwa-house/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — fonts, metadata, I18nProvider
│   │   ├── globals.css             # Global styles, CSS variables, RTL utilities
│   │   ├── page.tsx                # Home page
│   │   ├── about/page.tsx          # About page
│   │   ├── services/page.tsx       # Services page
│   │   ├── contact/page.tsx        # Contact page
│   │   ├── not-found.tsx           # Custom 404
│   │   ├── sitemap.ts              # Dynamic sitemap.xml
│   │   ├── robots.ts               # robots.txt
│   │   └── api/
│   │       └── contact/route.ts    # Contact form API — validation + email
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx      # Scroll-aware nav, RTL, mobile drawer
│   │   │   ├── Footer.tsx          # Bilingual footer with social links
│   │   │   ├── LanguageToggle.tsx  # EN ↔ AR switcher
│   │   │   └── PageWrapper.tsx     # Nav + main + Footer wrapper
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.tsx     # Animated hero with particle canvas
│   │       ├── FeaturedProducts.tsx
│   │       ├── StatsAndStory.tsx   # Stats counter + marquee + story preview
│   │       ├── TestimonialsSection.tsx
│   │       ├── HomeCTA.tsx
│   │       ├── about/
│   │       │   ├── AboutHero.tsx
│   │       │   ├── BrandValuesSection.tsx
│   │       │   ├── HeritageTimeline.tsx
│   │       │   └── MissionSection.tsx
│   │       ├── services/
│   │       │   ├── ServicesHero.tsx
│   │       │   ├── ServicesGrid.tsx    # Expandable service cards
│   │       │   └── ProcessSection.tsx
│   │       └── contact/
│   │           ├── ContactHero.tsx
│   │           ├── ContactLayout.tsx   # Form + location panel
│   │           └── FAQSection.tsx      # Accessible accordion
│   │
│   ├── lib/
│   │   ├── i18n.tsx          # I18nContext, useI18n hook, locale persistence
│   │   ├── translations.ts   # All bilingual content — EN + AR
│   │   └── utils.ts          # cn(), validation helpers, formatters
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts  # IntersectionObserver reveal + stagger
│   │
│   └── types/
│       └── index.ts          # Full TypeScript types for the entire app
│
├── public/
│   └── site.webmanifest
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json                # Deployment headers + caching + redirects
├── .env.example
└── .gitignore
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local` — at minimum set:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the language toggle is in the top navigation.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🌐 Language Switching

The language system is entirely client-side — no URL segments, no server rerenders.

```tsx
// Access from any client component
import { useI18n } from '@/lib/i18n';

function MyComponent() {
  const { locale, isRTL, t, toggleLocale } = useI18n();

  return <p dir={isRTL ? 'rtl' : 'ltr'}>{t({ en: 'Hello', ar: 'مرحبا' })}</p>;
}
```

**How it works:**
1. `I18nProvider` wraps the entire app in `layout.tsx`
2. On locale change, the `<html>` element gets `dir` and `lang` updated
3. Font classes swap between `font-english` (Cormorant + Outfit) and `font-arabic` (Amiri + Noto Arabic)
4. The locale is persisted to `localStorage` across sessions
5. All text is defined as `BilingualText` objects `{ en: string; ar: string }` in `src/lib/translations.ts`

---

## 📧 Contact Form Setup

The contact form validates both client-side and server-side. To enable real email delivery:

### Option A: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Add to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_FORM_TO_EMAIL=hello@qahwahouse.sa
CONTACT_FORM_FROM_EMAIL=noreply@qahwahouse.sa
```

### Option B: Any other provider

Edit `src/app/api/contact/route.ts` — replace the `sendContactEmail()` function body with your provider's SDK (SendGrid, AWS SES, Nodemailer, etc.).

---

## 🎨 Customization

### Colors

All brand colors are defined in `tailwind.config.ts` under `theme.extend.colors`:

```ts
gold: {
  500: '#D4AF37',  // primary brand gold
  600: '#B8860B',  // deep gold
},
obsidian: {
  900: '#0A0804',  // main background
},
```

Also available as CSS variables in `globals.css`:

```css
--gold-primary: #D4AF37;
--gold-deep: #B8860B;
--obsidian: #0A0804;
```

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-cormorant` | Cormorant Garamond | English display / headings |
| `--font-outfit` | Outfit | English body / UI labels |
| `--font-amiri` | Amiri | Arabic display / headings |
| `--font-noto-arabic` | Noto Sans Arabic | Arabic body / UI |

### Adding Content

All site content lives in `src/lib/translations.ts`. Every string is a `BilingualText`:

```ts
// Add a new product
export const products: CoffeeProduct[] = [
  {
    id: 'my-new-blend',
    name: { en: 'My New Blend', ar: 'مزيجي الجديد' },
    description: { en: 'Description here', ar: 'الوصف هنا' },
    // ...
  },
];
```

---

## 📦 Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

Or connect your GitHub repo on [vercel.com](https://vercel.com) for automatic deployments.

The `vercel.json` file configures:
- **Region**: `bah1` (Bahrain — closest to Riyadh for GCC users)
- **Security headers**: HSTS, CSP, X-Frame-Options
- **Cache rules**: static assets cached for 1 year
- **Redirects**: `/home` → `/`, `/menu` → `/services`

---

## ♿ Accessibility

- All interactive elements have `aria-label` or visible labels
- Form fields use `aria-required`, `aria-describedby` for errors
- Testimonial carousel uses `aria-live="polite"` for screen reader announcements
- FAQ accordion uses proper `aria-expanded` / `aria-controls` / `role="region"`
- Mobile menu uses `role="dialog"`, `aria-modal`, focus trap on open
- Color contrast ratios: gold on obsidian meets WCAG AA (≥4.5:1 for normal text)
- Keyboard navigation fully supported; custom focus styles visible

---

## 🔧 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |

---

## 📝 License

© 2024 Qahwa House. All rights reserved. This codebase is proprietary.
