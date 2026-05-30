import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { ProblemSection } from '@/components/sections/problem';
import { SolutionSection } from '@/components/sections/solution';
import { IntroSection } from '@/components/sections/intro';
import { TrustSection } from '@/components/sections/trust';
import { ServicesSection } from '@/components/sections/services';
import { FounderSection } from '@/components/sections/founder';
import { VideoTestimonialsSection } from '@/components/sections/video-testimonials';
import { PodcastSection } from '@/components/sections/podcast';
import { ActionSection } from '@/components/sections/action';
import { NewsSection } from '@/components/sections/news';
import { SessionsGallery } from '@/components/sections/gallery';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <HeroSection />
      <IntroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <FounderSection />
      <VideoTestimonialsSection />
      <SessionsGallery />
      <PodcastSection />
      <TrustSection />
      <NewsSection />
      <ActionSection />
      <Footer />
    </main>
  );
}
