'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Footer
// ─────────────────────────────────────────────────────────────

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { navItems, ui, locationInfo } from '@/lib/translations';
import { cn } from '@/lib/utils';

// ── Social Icons ──────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.166 2c1.394 0 5.185.404 5.185 4.902 0 .505.008 1.028.016 1.55.015.901.031 1.83-.016 2.718.198.088.42.138.64.138.342 0 .69-.1.975-.303.12-.085.254-.127.388-.127.27 0 .526.148.656.386.133.24.11.527-.06.74-.543.672-1.405.916-2.148 1.084-.047.44-.053.882-.053 1.293 0 .243.008.47.015.688.027.845.054 1.72-.492 2.43-.88 1.133-2.614 1.614-5.06 1.614-.17 0-.34-.003-.51-.009h-.032c-2.446 0-4.18-.481-5.06-1.614-.546-.71-.52-1.585-.492-2.43.007-.217.015-.445.015-.688 0-.41-.006-.853-.053-1.293-.743-.168-1.605-.412-2.148-1.084-.17-.213-.193-.5-.06-.74.13-.238.386-.386.656-.386.134 0 .268.042.388.127.285.203.633.303.975.303.22 0 .442-.05.64-.138-.047-.888-.031-1.817-.016-2.718.008-.522.016-1.045.016-1.55C6.649 2.404 10.44 2 11.834 2h.332z" />
    </svg>
  );
}

// ── Footer Component ──────────────────────────────────────────

export default function Footer() {
  const { t, isRTL } = useI18n();

  return (
    <footer
      className="relative bg-obsidian-950 border-t border-gold-600/20 pattern-geometric overflow-hidden"
      role="contentinfo"
    >
      {/* Radial gold glow at top */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* ── Main Footer Grid ───────────────────────────── */}
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16',
            isRTL && 'text-right',
          )}
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex flex-col mb-6">
              <span className="text-gold-500 font-amiri text-3xl leading-none" aria-hidden>ق</span>
              <span className="font-cormorant text-cream-100 text-xl mt-1">{t(ui.brandName)}</span>
            </div>

            <p className="text-cream-500 text-sm leading-relaxed max-w-xs mb-6">
              {t(ui.footer.tagline)}
            </p>

            {/* Brand tagline in Arabic calligraphy style */}
            <p className="font-amiri text-gold-600/60 text-lg leading-relaxed" dir="rtl">
              حيث يلتقي التراث بالتميز
            </p>

            {/* Social Links */}
            <div
              className={cn(
                'flex items-center gap-4 mt-8',
                isRTL && 'flex-row-reverse',
              )}
              aria-label="Social media links"
            >
              {[
                { icon: <InstagramIcon />, href: 'https://instagram.com/qahwahouse', label: 'Instagram' },
                { icon: <TwitterXIcon />, href: 'https://twitter.com/qahwahouse', label: 'X (Twitter)' },
                { icon: <SnapchatIcon />, href: 'https://snapchat.com/add/qahwahouse', label: 'Snapchat' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center',
                    'border border-gold-600/30 text-cream-500',
                    'hover:border-gold-500 hover:text-gold-400',
                    'transition-all duration-300',
                  )}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="section-label mb-6 text-gold-500">
              {t(ui.footer.sections.explore)}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-500 hover:text-gold-400 transition-colors duration-200"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-sm text-cream-500 hover:text-gold-400 transition-colors duration-200"
                >
                  {t({ en: 'Bean Subscriptions', ar: 'اشتراكات الحبوب' })}
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="section-label mb-6 text-gold-500">
              {t(ui.footer.sections.visit)}
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <p className="text-sm text-cream-400 leading-relaxed">
                {t(locationInfo.address)}<br />
                {t(locationInfo.neighborhood)}<br />
                {t(locationInfo.city)}, {t(locationInfo.country)}
              </p>
              <a
                href={`tel:${locationInfo.phone}`}
                className="text-sm text-cream-500 hover:text-gold-400 transition-colors duration-200"
                dir="ltr"
              >
                {locationInfo.phone}
              </a>
              <a
                href={`mailto:${locationInfo.email}`}
                className="text-sm text-cream-500 hover:text-gold-400 transition-colors duration-200"
              >
                {locationInfo.email}
              </a>

              {/* Hours */}
              <div className="mt-2 flex flex-col gap-2">
                {locationInfo.hours.map((h, i) => (
                  <div key={i}>
                    <p className="text-xs text-cream-600 uppercase tracking-wider">
                      {t(h.day)}
                    </p>
                    <p className="text-sm text-cream-400">{t(h.hours)}</p>
                  </div>
                ))}
              </div>
            </address>
          </div>
        </div>

        {/* ── Footer Bottom Bar ──────────────────────────── */}
        <div className="divider-gold mb-0" aria-hidden="true" />
        <div
          className={cn(
            'flex flex-col sm:flex-row items-center justify-between gap-4 py-6',
            isRTL && 'sm:flex-row-reverse',
          )}
        >
          <p className="text-xs text-cream-600">
            {t(ui.footer.copyright)}
          </p>
          <div
            className={cn(
              'flex items-center gap-6',
              isRTL && 'flex-row-reverse',
            )}
          >
            <a href="#" className="text-xs text-cream-600 hover:text-gold-500 transition-colors">
              {t(ui.footer.links.privacy)}
            </a>
            <a href="#" className="text-xs text-cream-600 hover:text-gold-500 transition-colors">
              {t(ui.footer.links.terms)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
