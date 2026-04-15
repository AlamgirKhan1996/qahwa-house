'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { servicesPage } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

export default function ProcessSection() {
  const { t, isRTL, locale } = useI18n();
  const ref = useStaggerReveal<HTMLDivElement>({ staggerMs: 130 });

  return (
    <section
      className="section-padding bg-obsidian-800 pattern-geometric"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className={cn('mb-16 text-center')}>
          <p className="section-label mb-4">{t(servicesPage.process.sectionLabel)}</p>
          <h2
            id="process-heading"
            className={cn(
              'heading-display text-cream-100',
              locale === 'ar'
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t(servicesPage.process.headline)}
          </h2>
        </header>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesPage.process.steps.map((step, idx) => (
            <div
              key={idx}
              className={cn(
                'reveal-child relative flex flex-col gap-5 p-7',
                'border border-gold-600/20 bg-obsidian-700/50',
                isRTL && 'text-right',
              )}
            >
              {/* Step number */}
              <span
                className="font-cormorant text-5xl text-gold-500/20 leading-none select-none"
                aria-hidden
              >
                {t(step.number)}
              </span>

              {/* Connector arrow */}
              {idx < servicesPage.process.steps.length - 1 && (
                <div
                  className={cn(
                    'absolute top-8 hidden lg:block',
                    isRTL ? '-left-3' : '-right-3',
                  )}
                  aria-hidden
                >
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    className={cn('text-gold-600/40', isRTL && 'rotate-180')}
                  >
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              )}

              <h3
                className={cn(
                  'text-cream-100',
                  locale === 'ar' ? 'font-amiri text-xl' : 'font-cormorant text-2xl',
                )}
              >
                {t(step.title)}
              </h3>

              <p className="text-cream-500 text-sm leading-relaxed">
                {t(step.description)}
              </p>

              {/* Bottom line accent */}
              <div
                className={cn('h-px mt-auto', isRTL ? 'ms-auto w-8' : 'w-8')}
                style={{ background: 'linear-gradient(to right, #D4AF37, transparent)' }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
