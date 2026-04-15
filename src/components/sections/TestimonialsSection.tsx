'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Testimonials Section
// ─────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { homePage, testimonials } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < rating ? '#D4AF37' : 'none'}
          stroke="#D4AF37"
          strokeWidth="1"
          aria-hidden
        >
          <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.8 2.7,10.5 3.5,7 1,4.8 4.5,4.5" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
}) {
  const { t, locale } = useI18n();

  return (
    <div
      className={cn(
        'absolute inset-0 flex flex-col justify-between p-8 md:p-12',
        'transition-all duration-700',
        isActive
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8 pointer-events-none',
      )}
      aria-hidden={!isActive}
    >
      {/* Opening quote mark */}
      <span
        className="font-cormorant text-7xl text-gold-500/30 leading-none select-none"
        aria-hidden
      >
        "
      </span>

      {/* Quote text */}
      <blockquote
        className={cn(
          'flex-1 flex items-center',
        )}
      >
        <p
          className={cn(
            'text-cream-200 leading-relaxed',
            locale === 'ar'
              ? 'font-amiri text-xl text-right'
              : 'font-cormorant text-2xl italic',
          )}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {t(testimonial.content)}
        </p>
      </blockquote>

      {/* Author */}
      <footer className={cn('flex items-center gap-4 mt-8', locale === 'ar' && 'flex-row-reverse')}>
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center bg-obsidian-700">
          <span className="text-gold-500 font-cormorant text-lg">
            {t(testimonial.author)[0]}
          </span>
        </div>
        <div className={locale === 'ar' ? 'text-right' : ''}>
          <p className="text-cream-200 text-sm font-medium">{t(testimonial.author)}</p>
          {testimonial.role && (
            <p className="text-cream-600 text-xs">{t(testimonial.role)}</p>
          )}
          <StarRating rating={testimonial.rating} />
        </div>
      </footer>
    </div>
  );
}

export default function TestimonialsSection() {
  const { t, isRTL } = useI18n();
  const [active, setActive] = useState(0);
  const sectionRef = useScrollReveal<HTMLElement>();

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      className="reveal section-padding bg-obsidian-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className={cn('mb-12', isRTL ? 'text-right' : '')}>
          <p className="section-label mb-4">{t(homePage.testimonials.sectionLabel)}</p>
          <h2
            id="testimonials-heading"
            className={cn(
              'heading-display text-cream-100',
              isRTL ? 'font-amiri text-display-lg' : 'font-cormorant text-display-lg',
            )}
          >
            {t(homePage.testimonials.headline)}
          </h2>
        </header>

        {/* Testimonial stage */}
        <div
          className="relative border border-gold-600/20 bg-obsidian-800"
          style={{ minHeight: '320px' }}
          aria-live="polite"
          aria-atomic="true"
        >
          {testimonials.map((item, idx) => (
            <TestimonialCard key={item.id} testimonial={item} isActive={idx === active} />
          ))}
        </div>

        {/* Controls */}
        <div
          className={cn(
            'flex items-center justify-between mt-8',
            isRTL && 'flex-row-reverse',
          )}
        >
          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === active}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setActive(idx)}
                className={cn(
                  'transition-all duration-300',
                  idx === active
                    ? 'w-8 h-1 bg-gold-500'
                    : 'w-1 h-1 bg-cream-600 hover:bg-gold-600',
                )}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className={cn('flex items-center gap-3', isRTL && 'flex-row-reverse')}>
            <button
              onClick={isRTL ? next : prev}
              className="w-10 h-10 border border-gold-600/30 flex items-center justify-center text-cream-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 3L5 8L10 13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={isRTL ? prev : next}
              className="w-10 h-10 border border-gold-600/30 flex items-center justify-center text-cream-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
