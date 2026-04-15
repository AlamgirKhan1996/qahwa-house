'use client';

import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { contactPage } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
  isRTL,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  isRTL: boolean;
}) {
  return (
    <div className="reveal-child border-b border-gold-600/20 last:border-0">
      <button
        type="button"
        id={`faq-btn-${id}`}
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-4 py-5',
          'text-start transition-colors duration-200',
          'hover:text-gold-400',
          isOpen ? 'text-gold-400' : 'text-cream-200',
          isRTL && 'flex-row-reverse',
        )}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
      >
        <span className="text-base font-medium leading-snug">{question}</span>
        <span
          className={cn(
            'flex-shrink-0 w-6 h-6 border border-current flex items-center justify-center',
            'transition-transform duration-300',
            isOpen && 'rotate-45',
          )}
          aria-hidden
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 1V9M1 5H9" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={cn(
          'overflow-hidden transition-all duration-400',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0',
        )}
      >
        <p
          className={cn('text-cream-500 text-sm leading-relaxed', isRTL && 'text-right')}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { t, isRTL, locale } = useI18n();
  const ref = useStaggerReveal<HTMLDivElement>({ staggerMs: 80 });
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      className="section-padding bg-obsidian-800 pattern-geometric"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <header className={cn('mb-12', isRTL ? 'text-right' : '')}>
          <p className="section-label mb-4">{t(contactPage.faq.sectionLabel)}</p>
          <h2
            id="faq-heading"
            className={cn(
              'heading-display text-cream-100',
              locale === 'ar'
                ? 'font-amiri text-display-lg'
                : 'font-cormorant text-display-lg',
            )}
          >
            {t(contactPage.faq.headline)}
          </h2>
        </header>

        <div ref={ref}>
          {contactPage.faq.items.map((item, idx) => (
            <FAQItem
              key={idx}
              id={String(idx)}
              question={t(item.question)}
              answer={t(item.answer)}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
