'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · 404 Not Found Page
// ─────────────────────────────────────────────────────────────

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import PageWrapper from '@/components/layout/PageWrapper';

export default function NotFoundPage() {
  const { t, locale, isRTL } = useI18n();

  return (
    <PageWrapper>
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian-950" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
          }}
          aria-hidden
        />

        {/* Large 404 watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden
        >
          <span className="font-cormorant text-[20rem] text-gold-500/[0.03] leading-none">
            404
          </span>
        </div>

        <div className={cn('relative text-center max-w-lg', isRTL && 'font-arabic')}>
          <span
            className="font-amiri text-6xl text-gold-500/40 leading-none block mb-4"
            aria-hidden
          >
            ✦
          </span>

          <p className="section-label mb-4">
            {t({ en: 'Page Not Found', ar: 'الصفحة غير موجودة' })}
          </p>

          <h1
            className={cn(
              'heading-display text-cream-100 mb-6',
              locale === 'ar'
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t({ en: 'Lost in the\nAromatic Mist', ar: 'ضائع في\nالبخار العطري' })}
          </h1>

          <p className="text-cream-500 mb-10">
            {t({
              en: "The page you are looking for has wandered off. Let us guide you back to exceptional coffee.",
              ar: 'الصفحة التي تبحث عنها قد ضلّت طريقها. دعنا نرشدك للعودة إلى قهوة استثنائية.',
            })}
          </p>

          <div className={cn('flex flex-col sm:flex-row items-center justify-center gap-4', isRTL && 'sm:flex-row-reverse')}>
            <Link href="/" className="btn-gold">
              {t({ en: 'Return Home', ar: 'العودة للرئيسية' })}
            </Link>
            <Link href="/contact" className="btn-outline-gold">
              {t({ en: 'Contact Us', ar: 'تواصل معنا' })}
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
