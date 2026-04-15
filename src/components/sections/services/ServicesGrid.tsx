'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { services, ui } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const { t, locale, isRTL } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={cn(
        'reveal-child card-luxury overflow-hidden flex flex-col',
        service.featured && 'border-gold-500/40',
      )}
    >
      {/* Card Header */}
      <div className={cn('p-7 flex flex-col gap-4', isRTL && 'text-right')}>
        {/* Icon + Featured badge */}
        <div className={cn('flex items-start justify-between', isRTL && 'flex-row-reverse')}>
          <div
            className="w-12 h-12 border border-gold-500/30 flex items-center justify-center text-2xl"
            aria-hidden
          >
            {service.icon}
          </div>
          {service.featured && (
            <span className="text-xs text-gold-400 border border-gold-500/30 px-2.5 py-1 tracking-wider uppercase">
              {locale === 'ar' ? 'مميز' : 'Featured'}
            </span>
          )}
        </div>

        <h3
          className={cn(
            'text-cream-100',
            locale === 'ar' ? 'font-amiri text-xl' : 'font-cormorant text-2xl',
          )}
        >
          {t(service.title)}
        </h3>

        <p className="text-cream-500 text-sm leading-relaxed">
          {t(service.description)}
        </p>

        {/* Features list */}
        <ul className="flex flex-col gap-2 mt-1" role="list">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className={cn('flex items-center gap-2.5 text-sm text-cream-400', isRTL && 'flex-row-reverse')}
            >
              <span className="text-gold-500 text-xs" aria-hidden>✦</span>
              {t(feature)}
            </li>
          ))}
        </ul>

        {/* Expanded long description */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-500',
            expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          )}
          aria-hidden={!expanded}
        >
          <p className="text-cream-500 text-sm leading-relaxed pt-2 border-t border-gold-600/20">
            {t(service.longDescription)}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div
        className={cn(
          'mt-auto px-7 pb-7 flex items-center justify-between gap-4',
          isRTL && 'flex-row-reverse',
        )}
      >
        {service.price && (
          <span className="text-gold-400 text-sm font-outfit">{t(service.price)}</span>
        )}

        <div className={cn('flex items-center gap-3 ms-auto', isRTL && 'flex-row-reverse')}>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-cream-500 hover:text-gold-400 transition-colors duration-200 uppercase tracking-wider"
            aria-expanded={expanded}
          >
            {expanded
              ? t({ en: 'Less', ar: 'أقل' })
              : t({ en: 'Details', ar: 'التفاصيل' })}
          </button>
          <Link
            href="/contact"
            className="btn-outline-gold text-xs py-2 px-4"
          >
            {t(ui.cta.bookExperience)}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesGrid() {
  const { t, isRTL, locale } = useI18n();
  const ref = useStaggerReveal<HTMLDivElement>({ staggerMs: 100 });

  const featured = services.filter((s) => s.featured);
  const regular = services.filter((s) => !s.featured);

  return (
    <section className="section-padding bg-obsidian-900" aria-label="Services">
      <div className="max-w-7xl mx-auto">
        {/* Featured services */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold my-10" aria-hidden />

        {/* Regular services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
