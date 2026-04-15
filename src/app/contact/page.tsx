// ─────────────────────────────────────────────────────────────
//  Qahwa House · Contact Page
// ─────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactLayout from '@/components/sections/contact/ContactLayout';
import FAQSection from '@/components/sections/contact/FAQSection';

export const metadata: Metadata = {
  title: 'Contact Qahwa House — Visit Us in Riyadh',
  description:
    "Find Qahwa House in the heart of Riyadh. Get directions, business hours, and send us a message. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactHero />
      <ContactLayout />
      <FAQSection />
    </PageWrapper>
  );
}
