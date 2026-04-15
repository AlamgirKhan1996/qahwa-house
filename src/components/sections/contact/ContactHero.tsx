'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { contactPage } from '@/lib/translations';
import { cn } from '@/lib/utils';

export default function ContactHero() {
  const { t, isRTL, locale } = useI18n();

  return (
    <section
      className="relative min-h-[55vh] flex items-end pb-20 pt-40 px-4 overflow-hidden"
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0 bg-obsidian-950" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 70% 40%, rgba(212,175,55,0.06) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      {/* Decorative compass rose */}
      <div
        className="absolute top-24 end-8 md:end-24 w-48 h-48 pointer-events-none select-none"
        aria-hidden
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-[0.06]">
          <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" stroke="#D4AF37" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="3" fill="#D4AF37" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 50 + 10 * Math.cos(rad);
            const y1 = 50 + 10 * Math.sin(rad);
            const x2 = 50 + (deg % 90 === 0 ? 44 : 38) * Math.cos(rad);
            const y2 = 50 + (deg % 90 === 0 ? 44 : 38) * Math.sin(rad);
            return (
              <line
                key={deg}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#D4AF37"
                strokeWidth={deg % 90 === 0 ? '1' : '0.5'}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className={cn('max-w-2xl', isRTL && 'text-right mr-auto ml-0')}>
          <p
            className="section-label mb-6"
            style={{ opacity: 0, animation: 'fade-in 0.6s 0.1s ease forwards' }}
          >
            {t(contactPage.hero.eyebrow)}
          </p>
          <h1
            id="contact-hero-heading"
            className={cn(
              'heading-display text-cream-100 mb-6',
              locale === 'ar'
                ? 'font-amiri text-display-xl leading-tight'
                : 'font-cormorant text-display-xl leading-none',
            )}
            style={{ opacity: 0, animation: 'fade-up 0.8s 0.2s ease forwards' }}
          >
            {t(contactPage.hero.headline)
              .split('\n')
              .map((line, i) => (
                <span key={i} className={cn('block', i === 1 && 'text-gold-gradient')}>
                  {line}
                </span>
              ))}
          </h1>
          <p
            className={cn(
              'text-cream-400 leading-relaxed',
              locale === 'ar' ? 'text-lg' : 'text-base md:text-lg',
            )}
            style={{ opacity: 0, animation: 'fade-up 0.8s 0.4s ease forwards' }}
          >
            {t(contactPage.hero.body)}
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
