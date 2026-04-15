'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Home Hero Section
//  Fullscreen hero with Arabic calligraphy, animated gold
//  accents, and bilingual headline
// ─────────────────────────────────────────────────────────────

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { homePage, ui } from '@/lib/translations';
import { cn } from '@/lib/utils';

// ── Decorative SVG: Geometric Star ───────────────────────────

function IslamicStar({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 8-pointed star */}
      <polygon
        points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
        stroke="#D4AF37"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      <polygon
        points="50,15 59,40 85,40 65,55 72,80 50,65 28,80 35,55 15,40 41,40"
        stroke="#D4AF37"
        strokeWidth="0.5"
        fill="none"
        opacity="0.25"
      />
      <circle cx="50" cy="50" r="4" fill="#D4AF37" opacity="0.6" />
    </svg>
  );
}

// ── Scroll Cue ────────────────────────────────────────────────

function ScrollCue({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 animate-fade-in">
      <span className="text-xs tracking-[0.2em] text-cream-500 uppercase">{label}</span>
      <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent animate-float" />
    </div>
  );
}

// ── Main Hero ─────────────────────────────────────────────────

export default function HeroSection() {
  const { t, isRTL, locale } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ── Subtle particle canvas ─────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    // Particles: small gold dots floating upward
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.4 + 0.1,
      alpha: Math.random() * 0.4 + 0.05,
    }));

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();

        p.y -= p.speed;
        if (p.y < -2) {
          p.y = h + 2;
          p.x = Math.random() * w;
        }
      });

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const headlineLines = t(homePage.hero.headline).split('\n');

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label={t({ en: 'Hero', ar: 'الصفحة الرئيسية' })}
    >
      {/* ── Background layers ──────────────────────────── */}

      {/* Deep obsidian base */}
      <div className="absolute inset-0 bg-obsidian-950" aria-hidden />

      {/* Radial gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0A0804, transparent)',
        }}
        aria-hidden
      />

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* ── Decorative Arabic Calligraphy ──────────────── */}
      {/* Large faded Arabic character — atmospheric decoration */}
      <div
        className="absolute top-16 inset-x-0 flex justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-amiri text-[20rem] leading-none text-gold-500/[0.04] select-none"
          style={{ lineHeight: 1 }}
        >
          قهوة
        </span>
      </div>

      {/* Geometric star — top left */}
      <IslamicStar
        className={cn(
          'absolute top-24 w-32 h-32 animate-spin-slow',
          isRTL ? 'right-8 md:right-24' : 'left-8 md:left-24',
        )}
      />

      {/* Geometric star — bottom right */}
      <IslamicStar
        className={cn(
          'absolute bottom-28 w-20 h-20 animate-spin-slow opacity-60',
          isRTL ? 'left-8 md:left-20' : 'right-8 md:right-20',
        )}
        style={{ animationDirection: 'reverse', animationDuration: '30s' } as React.CSSProperties}
      />

      {/* ── Hero Content ──────────────────────────────── */}
      <div
        className={cn(
          'relative z-10 text-center px-4 max-w-5xl mx-auto',
          isRTL && 'font-arabic',
        )}
      >
        {/* Eyebrow label */}
        <p
          className="section-label mb-8 animate-fade-in"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          {t(homePage.hero.eyebrow)}
        </p>

        {/* Main headline */}
        <h1
          className={cn(
            'heading-display mb-8',
            locale === 'ar'
              ? 'font-amiri text-display-xl leading-tight text-cream-100'
              : 'font-cormorant text-display-2xl leading-none text-cream-100',
          )}
          style={{ opacity: 0 }}
        >
          {headlineLines.map((line, i) => (
            <span
              key={i}
              className={cn(
                'block animate-fade-up',
                i === 1 && 'text-gold-gradient',
              )}
              style={{ animationDelay: `${0.25 + i * 0.15}s` }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Divider ornament */}
        <div
          className="flex items-center justify-center gap-3 mb-8 animate-fade-in"
          style={{ animationDelay: '0.6s', opacity: 0 }}
          aria-hidden
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-600" />
          <span className="text-gold-500 font-amiri text-xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-600" />
        </div>

        {/* Sub-headline */}
        <p
          className={cn(
            'max-w-2xl mx-auto text-cream-400 leading-relaxed mb-12 animate-fade-up',
            locale === 'ar' ? 'text-lg' : 'text-base md:text-lg',
          )}
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          {t(homePage.hero.subheadline)}
        </p>

        {/* CTAs */}
        <div
          className={cn(
            'flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up',
            isRTL && 'sm:flex-row-reverse',
          )}
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <Link href="/services" className="btn-gold">
            {t(ui.cta.exploreMenu)}
          </Link>
          <Link href="/about" className="btn-outline-gold">
            {t(ui.cta.ourStory)}
          </Link>
        </div>
      </div>

      {/* ── Scroll Cue ────────────────────────────────── */}
      <div
        className="absolute bottom-10 inset-x-0 flex justify-center"
        style={{ animationDelay: '1.2s' }}
      >
        <ScrollCue label={t(homePage.hero.scrollCue)} />
      </div>
    </section>
  );
}
