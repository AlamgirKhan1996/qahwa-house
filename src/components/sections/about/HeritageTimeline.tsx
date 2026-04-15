'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { aboutPage, heritageMilestones } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

export default function HeritageTimeline() {
  const { t, isRTL, locale } = useI18n();
  const ref = useStaggerReveal<HTMLDivElement>({ staggerMs: 120 });

  return (
    <section
      className="section-padding bg-obsidian-800 pattern-geometric overflow-hidden"
      aria-labelledby="heritage-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className={cn('mb-16', isRTL ? 'text-right' : '')}>
          <p className="section-label mb-4">{t(aboutPage.heritage.sectionLabel)}</p>
          <h2
            id="heritage-heading"
            className={cn(
              'heading-display text-cream-100',
              locale === 'ar'
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t(aboutPage.heritage.headline)}
          </h2>
        </header>

        {/* Timeline */}
        <div ref={ref} className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div
            className={cn(
              'absolute top-0 bottom-0 w-px bg-gold-600/20',
              isRTL ? 'right-[5.5rem] md:right-24' : 'left-[5.5rem] md:left-24',
            )}
            aria-hidden
          />

          {heritageMilestones.map((milestone, idx) => (
            <div
              key={milestone.year}
              className={cn(
                'reveal-child relative flex gap-6 md:gap-10 pb-12 last:pb-0',
                isRTL && 'flex-row-reverse',
              )}
            >
              {/* Year column */}
              <div
                className={cn(
                  'flex-shrink-0 w-20 md:w-24',
                  isRTL ? 'text-right' : 'text-left',
                )}
              >
                <span className="font-cormorant text-2xl text-gold-500 leading-none">
                  {milestone.year}
                </span>

                {/* Dot on timeline */}
                <div
                  className={cn(
                    'absolute top-1.5 w-2.5 h-2.5 rounded-full border border-gold-500 bg-obsidian-800',
                    isRTL
                      ? 'right-[5.1rem] md:right-[5.4rem]'
                      : 'left-[5.1rem] md:left-[5.4rem]',
                    idx === 0 && 'bg-gold-500',
                  )}
                  aria-hidden
                />
              </div>

              {/* Content column */}
              <div className={cn('flex-1', isRTL && 'text-right')}>
                <h3
                  className={cn(
                    'text-cream-100 mb-2',
                    locale === 'ar'
                      ? 'font-amiri text-xl'
                      : 'font-cormorant text-2xl',
                  )}
                >
                  {t(milestone.title)}
                </h3>
                <p className="text-cream-500 text-sm leading-relaxed">
                  {t(milestone.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
