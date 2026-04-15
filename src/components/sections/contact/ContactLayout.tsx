'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Contact Layout
//  Left: Contact form with bilingual validation
//  Right: Location info, hours, social links
// ─────────────────────────────────────────────────────────────

import React, { useState, useId } from 'react';
import { useI18n } from '@/lib/i18n';
import { ui, locationInfo } from '@/lib/translations';
import { cn, isValidEmail, isValidPhone } from '@/lib/utils';
import type { ContactFormData, ContactFormErrors } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// ── Form Field ────────────────────────────────────────────────

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
  isRTL?: boolean;
}

function Field({ id, label, error, children, required, isRTL }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', isRTL && 'text-right')}>
      <label
        htmlFor={id}
        className="text-xs tracking-widest uppercase text-cream-500 font-outfit"
      >
        {label}
        {required && (
          <span className="text-gold-500 ms-1" aria-label="required">*</span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-red-400 text-xs mt-0.5" role="alert" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

// ── Input styles ──────────────────────────────────────────────

const inputClass = (hasError: boolean, isRTL?: boolean) =>
  cn(
    'w-full bg-obsidian-700 border px-4 py-3 text-sm text-cream-200',
    'placeholder:text-cream-600',
    'focus:outline-none focus:border-gold-500',
    'transition-colors duration-200',
    hasError ? 'border-red-400/60' : 'border-gold-600/20 hover:border-gold-600/40',
    isRTL && 'text-right',
  );

// ── Contact Form ──────────────────────────────────────────────

function ContactForm() {
  const { t, isRTL, locale } = useI18n();
  const baseId = useId();

  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredLanguage: locale,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const serverErrorMsg = t({
    en: 'Something went wrong. Please try again or email us directly.',
    ar: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرةً.',
  });

  // ── Validation ────────────────────────────────────────────
  const validate = (): ContactFormErrors => {
    const errs: ContactFormErrors = {};

    if (!form.name.trim()) {
      errs.name = t(ui.form.errors.nameRequired);
    }
    if (!form.email.trim()) {
      errs.email = t(ui.form.errors.emailRequired);
    } else if (!isValidEmail(form.email)) {
      errs.email = t(ui.form.errors.emailInvalid);
    }
    if (form.phone && !isValidPhone(form.phone)) {
      // phone is optional; only validate if provided
      errs.phone = t({ en: 'Please enter a valid phone number', ar: 'يرجى إدخال رقم هاتف صحيح' });
    }
    if (!form.subject.trim()) {
      errs.subject = t(ui.form.errors.subjectRequired);
    }
    if (!form.message.trim()) {
      errs.message = t(ui.form.errors.messageRequired);
    } else if (form.message.trim().length < 10) {
      errs.message = t(ui.form.errors.messageMinLength);
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field
      const firstErrKey = Object.keys(errs)[0];
      document.getElementById(`${baseId}-${firstErrKey}`)?.focus();
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, preferredLanguage: locale }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        // Surface field-level errors from the server
        if (data.errors) setErrors(data.errors);
        setStatus('idle');
        return;
      }

      setStatus('sent');
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    // Reset form after 4s
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', phone: '', subject: '', message: '', preferredLanguage: locale });
    }, 4000);
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
        <div className="w-16 h-16 border border-gold-500/40 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold-400">
            <path d="M5 14L11 20L23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className={cn('font-cormorant text-2xl text-cream-100', locale === 'ar' && 'font-amiri')}>
          {t(ui.cta.messageSent)}
        </h3>
        <p className="text-cream-500 text-sm max-w-xs">
          {t(ui.form.successMessage)}
        </p>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-6', isRTL && 'text-right')}>
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id={`${baseId}-name`}
          label={t(ui.form.name)}
          error={errors.name}
          required
          isRTL={isRTL}
        >
          <input
            id={`${baseId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t(ui.form.namePlaceholder)}
            className={inputClass(!!errors.name, isRTL)}
            aria-required="true"
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </Field>

        <Field
          id={`${baseId}-email`}
          label={t(ui.form.email)}
          error={errors.email}
          required
          isRTL={isRTL}
        >
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t(ui.form.emailPlaceholder)}
            className={inputClass(!!errors.email, isRTL)}
            aria-required="true"
            dir="ltr"
          />
        </Field>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id={`${baseId}-phone`}
          label={t(ui.form.phone)}
          error={errors.phone}
          isRTL={isRTL}
        >
          <input
            id={`${baseId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder={t(ui.form.phonePlaceholder)}
            className={inputClass(!!errors.phone, isRTL)}
            dir="ltr"
          />
        </Field>

        <Field
          id={`${baseId}-subject`}
          label={t(ui.form.subject)}
          error={errors.subject}
          required
          isRTL={isRTL}
        >
          <input
            id={`${baseId}-subject`}
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder={t(ui.form.subjectPlaceholder)}
            className={inputClass(!!errors.subject, isRTL)}
            aria-required="true"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </Field>
      </div>

      {/* Message */}
      <Field
        id={`${baseId}-message`}
        label={t(ui.form.message)}
        error={errors.message}
        required
        isRTL={isRTL}
      >
        <textarea
          id={`${baseId}-message`}
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={t(ui.form.messagePlaceholder)}
          className={cn(inputClass(!!errors.message, isRTL), 'resize-none')}
          aria-required="true"
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </Field>

      {/* Submit */}
      {status === 'error' && (
        <p className="text-red-400 text-sm" role="alert">
          {serverErrorMsg}
        </p>
      )}
      <div className={cn(isRTL ? 'flex justify-end' : '')}>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className={cn(
            'btn-gold min-w-44',
            status === 'sending' && 'opacity-70 cursor-not-allowed',
          )}
          aria-busy={status === 'sending'}
        >
          {status === 'sending' ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
              {t(ui.cta.sending)}
            </span>
          ) : (
            t(ui.cta.sendMessage)
          )}
        </button>
      </div>
    </div>
  );
}

// ── Location Info Panel ───────────────────────────────────────

function LocationPanel() {
  const { t, isRTL } = useI18n();

  return (
    <div className={cn('flex flex-col gap-8', isRTL && 'text-right')}>
      {/* Address */}
      <div>
        <h3 className="section-label mb-4">
          {t({ en: 'Address', ar: 'العنوان' })}
        </h3>
        <address className="not-italic text-cream-400 text-sm leading-relaxed">
          {t(locationInfo.address)}<br />
          {t(locationInfo.neighborhood)}<br />
          {t(locationInfo.city)}, {t(locationInfo.country)}
        </address>
      </div>

      <div className="divider-gold" aria-hidden />

      {/* Hours */}
      <div>
        <h3 className="section-label mb-4">
          {t({ en: 'Opening Hours', ar: 'أوقات العمل' })}
        </h3>
        <div className="flex flex-col gap-3">
          {locationInfo.hours.map((h, i) => (
            <div key={i} className={cn('flex justify-between gap-4', isRTL && 'flex-row-reverse')}>
              <span className="text-cream-500 text-sm">{t(h.day)}</span>
              <span className="text-cream-300 text-sm font-medium">{t(h.hours)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-gold" aria-hidden />

      {/* Contact */}
      <div>
        <h3 className="section-label mb-4">
          {t({ en: 'Contact', ar: 'التواصل' })}
        </h3>
        <div className="flex flex-col gap-2">
          <a
            href={`tel:${locationInfo.phone}`}
            className="text-cream-400 hover:text-gold-400 text-sm transition-colors duration-200"
            dir="ltr"
          >
            {locationInfo.phone}
          </a>
          <a
            href={`mailto:${locationInfo.email}`}
            className="text-cream-400 hover:text-gold-400 text-sm transition-colors duration-200"
          >
            {locationInfo.email}
          </a>
        </div>
      </div>

      <div className="divider-gold" aria-hidden />

      {/* Map placeholder */}
      <div>
        <h3 className="section-label mb-4">
          {t({ en: 'Location', ar: 'الموقع' })}
        </h3>
        <div
          className="relative h-48 bg-obsidian-700 border border-gold-600/20 flex items-center justify-center overflow-hidden"
          aria-label="Map placeholder — Al-Olaya, Riyadh"
        >
          <div className="absolute inset-0 opacity-10">
            {/* Simple grid lines to suggest a map */}
            {Array.from({ length: 8 }).map((_, i) => (
              <React.Fragment key={i}>
                <div
                  className="absolute h-px bg-gold-500"
                  style={{ top: `${(i + 1) * 12.5}%`, left: 0, right: 0 }}
                />
                <div
                  className="absolute w-px bg-gold-500"
                  style={{ left: `${(i + 1) * 12.5}%`, top: 0, bottom: 0 }}
                />
              </React.Fragment>
            ))}
          </div>
          {/* Pin */}
          <div className="relative flex flex-col items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-gold-500 animate-pulse" />
            <div className="w-px h-6 bg-gold-500/60" />
            <p className="text-xs text-cream-400 font-outfit">
              {t(locationInfo.neighborhood)}, {t(locationInfo.city)}
            </p>
          </div>
        </div>
        <a
          href={`https://maps.google.com/?q=${locationInfo.coordinates.lat},${locationInfo.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-xs text-gold-500 hover:text-gold-300 transition-colors duration-200 uppercase tracking-wider"
        >
          {t({ en: 'Open in Google Maps', ar: 'افتح في خرائط Google' })}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 8L8 2M8 2H3M8 2V7" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ── Contact Layout (combined) ─────────────────────────────────

export default function ContactLayout() {
  const { t, isRTL, locale } = useI18n();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="reveal section-padding bg-obsidian-900"
      aria-label="Contact form and location"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12',
            isRTL && 'lg:grid-cols-[400px_1fr]',
          )}
        >
          {/* Form */}
          <div
            className={cn(
              'border border-gold-600/20 bg-obsidian-800 p-8 md:p-12',
              isRTL && 'order-last lg:order-first',
            )}
          >
            <header className={cn('mb-10', isRTL && 'text-right')}>
              <p className="section-label mb-3">
                {t({ en: 'Get in Touch', ar: 'راسلنا' })}
              </p>
              <h2
                className={cn(
                  'heading-display text-cream-100',
                  locale === 'ar'
                    ? 'font-amiri text-display-lg'
                    : 'font-cormorant text-display-lg',
                )}
              >
                {t({ en: 'Send Us a Message', ar: 'أرسل لنا رسالة' })}
              </h2>
            </header>
            <ContactForm />
          </div>

          {/* Location Info */}
          <div className={cn(isRTL ? 'order-first lg:order-last' : '')}>
            <LocationPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
