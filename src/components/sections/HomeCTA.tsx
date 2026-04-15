'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Home CTA Section
// ─────────────────────────────────────────────────────────────

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { ui } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomeCTA() {
  const { t, isRTL, locale } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="reveal relative py-32 px-4 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background: obsidian with gold radial glow */}
      <div className="absolute inset-0 bg-obsidian-900" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Large Arabic background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span className="font-amiri text-[18rem] text-gold-500/[0.03] leading-none">
          قهوة
        </span>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-10" aria-hidden>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-600" />
          <span className="text-gold-500 font-amiri text-2xl">✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-600" />
        </div>

        <h2
          className={cn(
            'heading-display text-cream-100 mb-6',
            locale === 'ar'
              ? 'font-amiri text-display-xl'
              : 'font-cormorant text-display-xl',
          )}
        >
          {t({ en: 'Ready for an\nExceptional Cup?', ar: 'هل أنت مستعد\nلفنجان استثنائي؟' })}
        </h2>

        <p className="text-cream-400 mb-10 max-w-lg mx-auto leading-relaxed">
          {t({
            en: 'Join us at Qahwa House and discover why we are Riyadh\'s most beloved specialty coffee destination.',
            ar: 'انضم إلينا في بيت القهوة واكتشف لماذا نحن الوجهة المفضلة للقهوة المتخصصة في الرياض.',
          })}
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
