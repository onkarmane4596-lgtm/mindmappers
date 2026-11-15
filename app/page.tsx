import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { CoreServicesSection } from '@/components/sections/core-services';
import { GuidanceProcessSection } from '@/components/sections/guidance-process';
import { IQEQSection } from '@/components/sections/iq-eq-section';
import { AssessmentsReportsSection } from '@/components/sections/assessments-reports';
import { CorporatePreviewSection } from '@/components/sections/corporate-preview';
import { InstitutionalProgrammesSection } from '@/components/sections/institutional-programmes';
import { FounderSection } from '@/components/sections/founder';
import { OutreachSection } from '@/components/sections/outreach';
import { MediaCoverageSection } from '@/components/sections/media-coverage';
import { BrochuresSection } from '@/components/brochures-view';
import { SessionsGallery } from '@/components/sections/gallery';
import { VideoTestimonialsSection } from '@/components/sections/video-testimonials';
import { PodcastSection } from '@/components/sections/podcast';
import { TrustSection } from '@/components/sections/trust';
import { CounsellingCTASection } from '@/components/sections/counselling-cta';
import { ActionSection } from '@/components/sections/action';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background w-full max-w-full overflow-x-hidden">
      <Header />
      
      {/* 3.1 Main Career Counselling Hero */}
      <HeroSection />

      {/* 3.1b Three Pillars of Guidance */}
      <CoreServicesSection />

      {/* 3.2 Guidance Process — Goes Beyond Marks */}
      <GuidanceProcessSection />

      {/* 3.3 IQ & EQ Development */}
      <IQEQSection />

      {/* 3.4 Assessments & Personalised Reports */}
      <AssessmentsReportsSection />

      {/* Corporate Training Vertical Highlight */}
      <CorporatePreviewSection />

      {/* 3.5 Programmes for Schools, Colleges & Coaching Institutes */}
      <InstitutionalProgrammesSection />

      {/* 3.8 Founder & Director Profile */}
      <FounderSection />

      {/* 3.6 Invited Sessions, Recognition & Outreach */}
      <OutreachSection />

      {/* 3.7 Media Coverage & Public Trust (Lokmat 24 Oct 2026, Janpravas, etc.) */}
      <MediaCoverageSection />

      {/* Official Brochure Downloads Provision */}
      <BrochuresSection compact />

      {/* Photo Gallery of Past Sessions */}
      <SessionsGallery />

      {/* Video Testimonials */}
      <VideoTestimonialsSection />

      {/* Director Featured Podcast */}
      <PodcastSection />

      {/* Family Trust & Testimonials */}
      <TrustSection />

      {/* 3.9 Career Counselling Conversion CTAs */}
      <CounsellingCTASection />

      {/* Frequently Asked Questions */}
      <ActionSection />

      <Footer />
    </main>
  );
}
