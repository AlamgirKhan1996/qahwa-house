'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { aboutPage, ui } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MissionSection() {
  const { t, isRTL, locale } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  const headlineLines = t(aboutPage.mission.headline).split('\n');

  return (
    <section
      ref={ref}
      className="reveal relative py-32 px-4 overflow-hidden bg-obsidian-950"
      aria-labelledby="mission-heading"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <p className="section-label mb-8">{t(aboutPage.mission.eyebrow)}</p>

        <h2
          id="mission-heading"
          className={cn(
            'heading-display text-cream-100 mb-8',
            locale === 'ar'
              ? 'font-amiri text-display-xl leading-tight'
              : 'font-cormorant text-display-xl leading-none',
          )}
        >
          {headlineLines.map((line, i) => (
            <span key={i} className={cn('block', i === 1 && 'text-gold-gradient')}>
              {line}
            </span>
          ))}
        </h2>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-8" aria-hidden>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-600" />
          <span className="text-gold-500 font-amiri text-xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-600" />
        </div>

        <p
          className={cn(
            'text-cream-400 leading-relaxed max-w-2xl mx-auto mb-12',
            locale === 'ar' ? 'text-lg' : 'text-base md:text-lg',
          )}
        >
          {t(aboutPage.mission.body)}
        </p>

        <div
          className={cn(
            'flex flex-col sm:flex-row items-center justify-center gap-4',
            isRTL && 'sm:flex-row-reverse',
          )}
        >
          <Link href="/services" className="btn-gold">
            {t(ui.cta.exploreMenu)}
          </Link>
          <Link href="/contact" className="btn-outline-gold">
            {t(ui.cta.getInTouch)}
          </Link>
        </div>
      </div>
    </section>
  );
}
