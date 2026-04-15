'use client';

// ─────────────────────────────────────────────────────────────
//  Qahwa House · Page Wrapper
//  Wraps all page content with Navigation + Footer
// ─────────────────────────────────────────────────────────────

import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
