// ─────────────────────────────────────────────────────────────
//  Qahwa House · Home Page
// ─────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import { StatsSection, MarqueeStrip, StoryPreview } from '@/components/sections/StatsAndStory';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import HomeCTA from '@/components/sections/HomeCTA';

export const metadata: Metadata = {
  title: 'Qahwa House — Premium Saudi Coffee Experience in Riyadh',
  description:
    'Experience the finest Saudi coffee culture at Qahwa House, Riyadh. Premium arabica blends, traditional brewing, modern ambiance.',
  alternates: {
    canonical: 'https://qahwahouse.sa',
  },
};

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <MarqueeStrip />
      <FeaturedProducts />
      <StatsSection />
      <StoryPreview />
      <TestimonialsSection />
      <HomeCTA />
    </PageWrapper>
  );
}
