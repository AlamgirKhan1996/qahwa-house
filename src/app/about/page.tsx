// ─────────────────────────────────────────────────────────────
//  Qahwa House · About Page
// ─────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import AboutHero from '@/components/sections/about/AboutHero';
import BrandValuesSection from '@/components/sections/about/BrandValuesSection';
import HeritageTimeline from '@/components/sections/about/HeritageTimeline';
import MissionSection from '@/components/sections/about/MissionSection';

export const metadata: Metadata = {
  title: 'About Qahwa House — Our Story & Heritage',
  description:
    'Learn the story behind Qahwa House — our passion for Saudi coffee heritage, our sourcing philosophy, and the team behind every exceptional cup.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutHero />
      <BrandValuesSection />
      <HeritageTimeline />
      <MissionSection />
    </PageWrapper>
  );
}
