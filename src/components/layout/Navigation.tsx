'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Navigation
//  Features: scroll-aware style, RTL, mobile drawer, lang toggle
// ─────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import { navItems, ui } from '@/lib/translations';
import { cn } from '@/lib/utils';
import LanguageToggle from './LanguageToggle';

// ── Logo ──────────────────────────────────────────────────────

function QahwaLogo({ className }: { className?: string }) {
  const { locale, t } = useI18n();

  return (
    <Link
      href="/"
      className={cn('flex flex-col leading-none group', className)}
      aria-label={t(ui.brandName)}
    >
      {/* Arabic calligraphy mark (decorative) */}
      <span
        className="text-gold-500 font-amiri text-2xl leading-none group-hover:text-gold-300 transition-colors duration-300"
        aria-hidden="true"
      >
        ق
      </span>
      <span
        className={cn(
          'font-display text-cream-100 tracking-wide transition-colors duration-300 group-hover:text-gold-400',
          locale === 'ar'
            ? 'font-amiri text-xl leading-tight'
            : 'font-cormorant text-lg leading-tight',
        )}
      >
        {t(ui.brandName)}
      </span>
    </Link>
  );
}

// ── Desktop Nav Link ──────────────────────────────────────────

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-sm tracking-widest uppercase transition-colors duration-300',
        'after:absolute after:bottom-0 after:h-px after:bg-gold-500',
        'after:transition-all after:duration-300',
        isActive
          ? 'text-gold-400 after:w-full after:start-0'
          : 'text-cream-400 hover:text-cream-100 after:w-0 after:start-1/2 hover:after:w-full hover:after:start-0',
      )}
    >
      {label}
    </Link>
  );
}

// ── Main Navigation ───────────────────────────────────────────

export default function Navigation() {
  const { t, isRTL } = useI18n();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // ── Scroll detection ─────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ─────────────
  useEffect(() => {
    if (isMobileOpen) {
      document.documentElement.classList.add('menu-open');
    } else {
      document.documentElement.classList.remove('menu-open');
    }
    return () => document.documentElement.classList.remove('menu-open');
  }, [isMobileOpen]);

  // ── Close on route change ─────────────────────────────────
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // ── Close on Escape ───────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* ── Main Nav Bar ──────────────────────────────────── */}
      <header
        role="banner"
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass border-b border-gold-600/20 py-3'
            : 'bg-transparent py-5',
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <QahwaLogo />

          {/* Desktop Links */}
          <ul
            className={cn(
              'hidden md:flex items-center gap-10',
              isRTL && 'flex-row-reverse',
            )}
            role="list"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={t(item.label)}
                  isActive={
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)
                  }
                />
              </li>
            ))}
          </ul>

          {/* Right-side Controls */}
          <div className={cn('flex items-center gap-4', isRTL && 'flex-row-reverse')}>
            <LanguageToggle />

            {/* CTA — Book */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn-gold text-xs py-2.5 px-5"
            >
              {t(ui.cta.bookExperience)}
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
              aria-label={
                isMobileOpen ? t(ui.nav.closeMenu) : t(ui.nav.openMenu)
              }
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={cn(
                  'w-6 h-px bg-cream-200 transition-all duration-300 origin-center',
                  isMobileOpen && 'rotate-45 translate-y-[7px]',
                )}
              />
              <span
                className={cn(
                  'w-4 h-px bg-gold-500 transition-all duration-300',
                  isRTL ? 'self-end' : 'self-start',
                  isMobileOpen && 'opacity-0 scale-x-0',
                )}
              />
              <span
                className={cn(
                  'w-6 h-px bg-cream-200 transition-all duration-300 origin-center',
                  isMobileOpen && '-rotate-45 -translate-y-[7px]',
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ──────────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label={t(ui.nav.openMenu)}
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            'absolute top-0 bottom-0 w-72 glass flex flex-col',
            'transition-transform duration-500',
            isRTL ? 'left-0' : 'right-0',
            isMobileOpen
              ? 'translate-x-0'
              : isRTL
                ? '-translate-x-full'
                : 'translate-x-full',
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gold-600/20">
            <QahwaLogo />
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-cream-400 hover:text-gold-400 transition-colors"
              aria-label={t(ui.nav.closeMenu)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M1 1L17 17M17 1L1 17" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex-1 p-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'py-3.5 px-4 text-lg transition-all duration-200',
                  'border-b border-gold-600/10',
                  'hover:text-gold-400 hover:ps-6',
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    ? 'text-gold-400 font-medium'
                    : 'text-cream-300',
                  isMobileOpen && `animate-fade-up`,
                )}
                style={{ animationDelay: `${idx * 0.08}s`, opacity: 0 }}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-gold-600/20 flex flex-col gap-4">
            <LanguageToggle fullWidth />
            <Link href="/contact" className="btn-gold w-full text-center text-xs">
              {t(ui.cta.bookExperience)}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
