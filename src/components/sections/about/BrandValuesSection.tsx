'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { aboutPage, brandValues } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

export default function BrandValuesSection() {
  const { t, isRTL, locale } = useI18n();
  const gridRef = useStaggerReveal<HTMLDivElement>({ staggerMs: 100 });

  return (
    <section
      className="section-padding bg-obsidian-900"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className={cn('mb-16 text-center')}>
          <p className="section-label mb-4">{t(aboutPage.values.sectionLabel)}</p>
          <h2
            id="values-heading"
            className={cn(
              'heading-display text-cream-100',
              locale === 'ar'
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t(aboutPage.values.headline)}
          </h2>
        </header>

        {/* Values Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {brandValues.map((value) => (
            <article
              key={value.id}
              className={cn(
                'reveal-child card-luxury p-7 flex flex-col gap-4',
                isRTL && 'text-right',
              )}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 border border-gold-500/30 flex items-center justify-center text-2xl"
                aria-hidden
              >
                {value.icon}
              </div>

              <h3
                className={cn(
                  'text-cream-100',
                  locale === 'ar'
                    ? 'font-amiri text-xl'
                    : 'font-cormorant text-2xl',
                )}
              >
                {t(value.title)}
              </h3>

              <p className="text-cream-500 text-sm leading-relaxed">
                {t(value.description)}
              </p>

              {/* Bottom gold accent */}
              <div className="mt-auto pt-4">
                <div className={cn('h-px w-10 bg-gold-600/40', isRTL && 'ms-auto')} aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
