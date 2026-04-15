'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { aboutPage } from '@/lib/translations';
import { cn } from '@/lib/utils';

export default function AboutHero() {
  const { t, isRTL, locale } = useI18n();

  return (
    <section
      className="relative min-h-[70vh] flex items-end pb-20 pt-40 px-4 overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-obsidian-950" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 30% 60%, rgba(212,175,55,0.06) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      {/* Large decorative Arabic numeral / calligraphy */}
      <div
        className="absolute top-20 end-0 w-96 h-96 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span className="font-amiri text-[20rem] text-gold-500/[0.04] leading-none">
          ب
        </span>
      </div>

      {/* Vertical gold line */}
      <div
        className={cn(
          'absolute top-0 bottom-0 w-px',
          isRTL ? 'right-12 md:right-24' : 'left-12 md:left-24',
        )}
        style={{
          background: 'linear-gradient(to bottom, transparent, #D4AF37 30%, #D4AF37 70%, transparent)',
          opacity: 0.15,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className={cn('max-w-3xl', isRTL && 'text-right ml-auto mr-0')}>
          <p className="section-label mb-6 animate-fade-in">{t(aboutPage.hero.eyebrow)}</p>

          <h1
            id="about-hero-heading"
            className={cn(
              'heading-display text-cream-100 mb-8',
              locale === 'ar'
                ? 'font-amiri text-display-xl leading-tight'
                : 'font-cormorant text-display-xl leading-none',
            )}
            style={{ opacity: 0, animation: 'fade-up 0.8s 0.2s ease forwards' }}
          >
            {t(aboutPage.hero.headline)}
          </h1>

          {/* Gold ornamental divider */}
          <div
            className={cn(
              'flex items-center gap-4 mb-8',
              isRTL && 'flex-row-reverse',
            )}
            aria-hidden
          >
            <div className="h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />
            <span className="text-gold-500 font-amiri text-xl">✦</span>
          </div>

          <p
            className={cn(
              'text-cream-400 leading-relaxed max-w-2xl',
              locale === 'ar' ? 'text-lg' : 'text-base md:text-lg',
            )}
            style={{ opacity: 0, animation: 'fade-up 0.8s 0.4s ease forwards' }}
          >
            {t(aboutPage.hero.body)}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0804, transparent)' }}
        aria-hidden
      />
    </section>
  );
}
