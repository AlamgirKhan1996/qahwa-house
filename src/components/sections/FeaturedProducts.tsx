'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Featured Products Section
// ─────────────────────────────────────────────────────────────

import React from 'react';
import { useI18n, formatCurrency } from '@/lib/i18n';
import { homePage, products } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

// ── Roast Level Bar ───────────────────────────────────────────

const roastLevels = {
  light: 1,
  medium: 2,
  'medium-dark': 3,
  dark: 4,
} as const;

function RoastBar({ level }: { level: keyof typeof roastLevels }) {
  const filled = roastLevels[level];
  return (
    <div className="flex items-center gap-1" aria-label={`Roast level: ${level}`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'h-1 w-4 transition-colors duration-300',
            i < filled ? 'bg-gold-500' : 'bg-obsidian-600',
          )}
        />
      ))}
    </div>
  );
}

// ── Product Card ──────────────────────────────────────────────

interface ProductCardProps {
  product: (typeof products)[0];
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const { t, locale } = useI18n();

  // Deterministic placeholder gradient from product id
  const gradients = [
    'from-amber-900/40 to-obsidian-800',
    'from-stone-800/60 to-obsidian-800',
    'from-yellow-900/30 to-obsidian-800',
    'from-orange-900/30 to-obsidian-800',
  ];
  const gradient = gradients[index % gradients.length];

  // Coffee cup SVG placeholder
  const coffeeSymbols = ['☕', '🫖', '🌿', '⭐'];

  return (
    <article
      className={cn(
        'reveal-child card-luxury group cursor-pointer',
        'flex flex-col overflow-hidden',
      )}
      aria-label={t(product.name)}
    >
      {/* Image placeholder with gradient */}
      <div
        className={cn(
          'relative h-52 flex items-center justify-center',
          `bg-gradient-to-b ${gradient}`,
          'overflow-hidden',
        )}
      >
        {/* Decorative coffee symbol */}
        <span
          className="text-7xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 select-none"
          aria-hidden
        >
          {coffeeSymbols[index % coffeeSymbols.length]}
        </span>

        {/* Origin badge */}
        <div className="absolute top-4 start-4 glass px-2.5 py-1">
          <span className="text-xs text-gold-400 tracking-wider">{product.origin}</span>
        </div>

        {/* Gold shimmer overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 60%)',
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Name & price */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className={cn(
              'font-display text-cream-100 leading-tight',
              locale === 'ar' ? 'font-amiri text-xl' : 'font-cormorant text-2xl',
            )}
          >
            {t(product.name)}
          </h3>
          <span className="text-gold-400 text-sm font-medium whitespace-nowrap font-outfit">
            {formatCurrency(product.price, locale)}
          </span>
        </div>

        {/* Description */}
        <p className="text-cream-500 text-sm leading-relaxed flex-1">
          {t(product.description)}
        </p>

        {/* Flavor notes */}
        <div className="flex flex-wrap gap-1.5" aria-label="Flavor notes">
          {product.flavorNotes.map((note, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 border border-gold-600/30 text-gold-500/80"
            >
              {t(note)}
            </span>
          ))}
        </div>

        {/* Roast level */}
        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs text-cream-600 uppercase tracking-wider font-outfit">
            {locale === 'ar' ? 'التحميص' : 'Roast'}
          </span>
          <RoastBar level={product.roastLevel} />
        </div>
      </div>
    </article>
  );
}

// ── Featured Section ──────────────────────────────────────────

export default function FeaturedProducts() {
  const { t, isRTL } = useI18n();
  const sectionRef = useStaggerReveal<HTMLDivElement>({ staggerMs: 130 });

  const featured = products.filter((p) => p.featured);

  return (
    <section
      className="section-padding bg-obsidian-900"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <header
          className={cn(
            'mb-16 max-w-2xl',
            isRTL ? 'text-right mr-0 ml-auto' : '',
          )}
        >
          <p className="section-label mb-4">{t(homePage.featured.sectionLabel)}</p>
          <h2
            id="featured-heading"
            className={cn(
              'heading-display text-cream-100 mb-4',
              isRTL
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t(homePage.featured.headline)}
          </h2>
          <p className="text-cream-500 leading-relaxed">{t(homePage.featured.subheadline)}</p>
        </header>

        {/* Products Grid */}
        <div
          ref={sectionRef}
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
          )}
        >
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
