// ─────────────────────────────────────────────────────────────
//  Qahwa House · Services Page
// ─────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ProcessSection from '@/components/sections/services/ProcessSection';

export const metadata: Metadata = {
  title: 'Our Services — Coffee Experiences at Qahwa House',
  description:
    'Discover the full range of Qahwa House offerings — from specialty brews and cupping sessions to corporate catering and barista training.',
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
    </PageWrapper>
  );
}
