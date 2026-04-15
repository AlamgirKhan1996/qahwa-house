'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { servicesPage } from '@/lib/translations';
import { cn } from '@/lib/utils';

export default function ServicesHero() {
  const { t, isRTL, locale } = useI18n();

  return (
    <section
      className="relative min-h-[65vh] flex items-end pb-20 pt-40 px-4 overflow-hidden"
      aria-labelledby="services-hero-heading"
    >
      <div className="absolute inset-0 bg-obsidian-950" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(212,175,55,0.06) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      {/* Decorative ☕ watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end pe-8 md:pe-24 pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span className="text-[16rem] opacity-[0.03]">☕</span>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className={cn('max-w-3xl', isRTL && 'text-right mr-auto ml-0')}>
          <p
            className="section-label mb-6"
            style={{ opacity: 0, animation: 'fade-in 0.6s 0.1s ease forwards' }}
          >
            {t(servicesPage.hero.eyebrow)}
          </p>

          <h1
            id="services-hero-heading"
            className={cn(
              'heading-display text-cream-100 mb-8',
              locale === 'ar'
                ? 'font-amiri text-display-xl leading-tight'
                : 'font-cormorant text-display-xl leading-none',
            )}
            style={{ opacity: 0, animation: 'fade-up 0.8s 0.2s ease forwards' }}
          >
            {t(servicesPage.hero.headline)
              .split('\n')
              .map((line, i) => (
                <span key={i} className={cn('block', i === 1 && 'text-gold-gradient')}>
                  {line}
                </span>
              ))}
          </h1>

          <p
            className={cn(
              'text-cream-400 leading-relaxed max-w-xl',
              locale === 'ar' ? 'text-lg' : 'text-base md:text-lg',
            )}
            style={{ opacity: 0, animation: 'fade-up 0.8s 0.4s ease forwards' }}
          >
            {t(servicesPage.hero.body)}
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0804, transparent)' }}
        aria-hidden
      />
    </section>
  );
}
