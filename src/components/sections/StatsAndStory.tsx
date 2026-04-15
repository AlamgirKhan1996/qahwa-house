'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Stats Section + Brand Story Preview
// ─────────────────────────────────────────────────────────────

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { homePage, ui } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

// ── Animated Counter ─────────────────────────────────────────

function StatItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="reveal-child flex flex-col items-center text-center gap-2">
      <span
        className="font-cormorant text-5xl md:text-6xl text-gold-gradient leading-none"
      >
        {value}
      </span>
      <span className="text-xs tracking-[0.2em] uppercase text-cream-500 font-outfit">
        {label}
      </span>
    </div>
  );
}

// ── Stats Section ─────────────────────────────────────────────

export function StatsSection() {
  const { t, isRTL, locale } = useI18n();
  const containerRef = useStaggerReveal<HTMLDivElement>({ staggerMs: 100 });

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      aria-label={t(homePage.stats.headline)}
    >
      {/* Gold divider top */}
      <div className="divider-gold mb-16 mx-auto max-w-4xl" aria-hidden />

      <div className="max-w-5xl mx-auto">
        <p
          className={cn(
            'section-label text-center mb-12',
          )}
        >
          {t(homePage.stats.headline)}
        </p>

        <div
          ref={containerRef}
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-10',
          )}
        >
          {homePage.stats.items.map((item, idx) => (
            <StatItem
              key={idx}
              value={t(item.value)}
              label={t(item.label)}
            />
          ))}
        </div>
      </div>

      {/* Gold divider bottom */}
      <div className="divider-gold mt-16 mx-auto max-w-4xl" aria-hidden />
    </section>
  );
}

// ── Marquee Strip ─────────────────────────────────────────────

export function MarqueeStrip() {
  const { t } = useI18n();
  const items = [...homePage.marquee.items, ...homePage.marquee.items]; // duplicate for seamless loop

  return (
    <div
      className="relative py-4 overflow-hidden bg-obsidian-800 border-y border-gold-600/20"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-6 mx-6">
            <span className="text-xs tracking-[0.3em] uppercase text-cream-500 font-outfit">
              {t(item)}
            </span>
            <span className="text-gold-600 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Brand Story Preview ───────────────────────────────────────

export function StoryPreview() {
  const { t, isRTL, locale } = useI18n();
  const textRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      className="section-padding bg-obsidian-800 pattern-geometric overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div
        className={cn(
          'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
          isRTL && 'lg:grid-flow-col-dense',
        )}
      >
        {/* ── Text Column ──────────────────────────── */}
        <div
          ref={textRef}
          className={cn(
            'reveal',
            isRTL ? 'text-right lg:order-last' : '',
          )}
        >
          <p className="section-label mb-5">{t(homePage.storyPreview.eyebrow)}</p>

          <h2
            id="story-heading"
            className={cn(
              'heading-display mb-6 text-cream-100',
              locale === 'ar'
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t(homePage.storyPreview.headline)}
          </h2>

          <p
            className={cn(
              'text-cream-400 leading-relaxed mb-8',
              locale === 'ar' ? 'text-lg' : 'text-base',
            )}
          >
            {t(homePage.storyPreview.body)}
          </p>

          <Link href="/about" className="btn-outline-gold">
            {t(ui.cta.ourStory)}
          </Link>
        </div>

        {/* ── Visual Column ─────────────────────────── */}
        <div
          ref={imageRef}
          className={cn(
            'reveal reveal-delay-2 relative',
            isRTL ? 'lg:order-first' : '',
          )}
        >
          {/* Main frame */}
          <div className="relative aspect-[4/5] bg-obsidian-700 border border-gold-600/20 overflow-hidden">

            {/* Arabic poetry decoration */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
              <div
                className="font-amiri text-gold-500/30 text-[5rem] leading-none select-none"
                aria-hidden
              >
                ق
              </div>

              {/* Arabic verse */}
              <div className="text-center" dir="rtl">
                <p className="font-amiri text-gold-500/50 text-xl leading-loose">
                  القهوةُ روحٌ تسكنُ الفناجين
                </p>
                <p className="font-amiri text-gold-600/40 text-lg leading-loose">
                  تُدفئُ القلوبَ وتجمعُ الأحبّين
                </p>
              </div>

              <p className="font-outfit text-xs text-cream-600 tracking-wider italic mt-2">
                Coffee is a spirit that dwells in cups,
                <br />warming hearts and uniting loved ones
              </p>
            </div>

            {/* Corner decorations */}
            {['top-3 start-3', 'top-3 end-3', 'bottom-3 start-3', 'bottom-3 end-3'].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-5 h-5 border-gold-500`}
                style={{
                  borderTopWidth: i < 2 ? 1 : 0,
                  borderBottomWidth: i >= 2 ? 1 : 0,
                  borderLeftWidth: i % 2 === 0 ? 1 : 0,
                  borderRightWidth: i % 2 === 1 ? 1 : 0,
                }}
                aria-hidden
              />
            ))}
          </div>

          {/* Offset accent box */}
          <div
            className="absolute -bottom-5 -end-5 w-32 h-32 border border-gold-500/20 bg-obsidian-950 -z-0"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
