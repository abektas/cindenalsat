'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { AboutSection } from '@/components/about-section'
import { CtaSection } from '@/components/cta-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export function HomePageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
