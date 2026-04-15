'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · useScrollReveal Hook
//  Adds .revealed class to an element when it enters the viewport
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef, type RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  /** If true, animation only plays once */
  once?: boolean;
}

/**
 * Returns a ref. Attach it to a DOM element to animate it
 * in via CSS .reveal → .revealed classes when it scrolls into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: UseScrollRevealOptions,
): RefObject<T> {
  const ref = useRef<T>(null);
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('revealed');
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Adds reveal animations to a set of child elements.
 * Each child with the class `reveal-child` will animate in with staggered delays.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options?: UseScrollRevealOptions & { staggerMs?: number },
): RefObject<T> {
  const ref = useRef<T>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', once = true, staggerMs = 120 } = options ?? {};

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(
      container.querySelectorAll<HTMLElement>('.reveal-child'),
    );

    // Set initial styles
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(24px)';
      child.style.transition = `opacity 0.7s ease ${i * staggerMs}ms, transform 0.7s ease ${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          if (once) observer.unobserve(container);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, staggerMs]);

  return ref;
}
