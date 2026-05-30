'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Target, Users, Presentation, Award, Sparkles, Navigation } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

// sliderImages removed - moved to intro.tsx

const heroTexts = [
  {
    prefix: "Confused About Your",
    highlight1: "Future",
    suffix: "After",
    highlight2: "10th?",
    p: "Take our scientific stream assessment to discover their perfect career fit."
  },
  {
    prefix: "Not Sure Which",
    highlight1: "Career Path",
    suffix: "is",
    highlight2: "Best?",
    p: "Get expert career counseling to unlock your child's true potential."
  },
  {
    prefix: "Help Your Child Make",
    highlight1: "The Right",
    suffix: "Career",
    highlight2: "Choice",
    p: "Personalized guidance based on their unique strengths and interests."
  }
];

export function HeroSection() {
  // Carousel logic removed - moved to intro.tsx
  const [textIndex, setTextIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000); // Cross-fade text every 4 seconds
    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:h-[90vh] flex flex-col pt-24 sm:pt-0 justify-start sm:justify-center overflow-hidden bg-white">

      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="relative w-full h-[120%] -top-[10%] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          {/* Desktop Background */}
          <Image
            src="/poster/herodesk.jpg"
            alt="MindMappers Background"
            fill
            className="object-cover hidden lg:block"
            priority
          />
          {/* Mobile Background */}
          <Image
            src="/poster/poster1.jpg"
            alt="MindMappers Mobile Background"
            fill
            className="object-cover lg:hidden"
            priority
          />
          {/* Refined Overlays for Image Visibility & Text Legibility */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center py-24 lg:py-32 shrink-0">

        {/* --- Top Banner Section (Texts & CTAs) --- */}
        <div key={textIndex} className="animate-in fade-in duration-700 slide-in-from-bottom-2 w-full text-center max-w-4xl mx-auto mb-10">

          <h1 className="text-3xl sm:text-5xl lg:text-8xl font-black leading-[1.15] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6">
            <span className="block text-slate-500 font-semibold text-xl sm:text-3xl lg:text-5xl mb-2">{heroTexts[textIndex].prefix}</span>
            <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5]">
                {heroTexts[textIndex].highlight1}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#e66000]">
                {heroTexts[textIndex].suffix}
              </span>
              <span className="bg-gradient-to-r from-[#F4A16C] to-[#e66000] bg-clip-text text-transparent">
                {heroTexts[textIndex].highlight2}
              </span>
            </div>
          </h1>

          <p className="text-base sm:text-lg lg:text-2xl text-slate-600 font-medium max-w-3xl mx-auto mb-8 px-4">
            <span className="sm:hidden">Expert Career Counseling for Students.</span>
            <span className="hidden sm:inline">AI-Enhanced & Expert-Guided Career Counseling for Students seeking clarity and success in their educational journey.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-slide-up mb-12">

          {/* Desktop Only: Free Call */}
          <div className="hidden sm:inline-flex group relative items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-2xl transition-transform hover:scale-105 active:scale-95">
            {/* Dynamic Rotating Gradient Border */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,white,transparent,white)] animate-border-flow" />

            <a href="tel:+919822258300" className="relative flex items-center bg-[#1a235c]/10 backdrop-blur-xl rounded-full p-1 border border-white/20">
              {/* Split Part 1: Icon Circle */}
              <div className="bg-[#1a235c] p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaPhoneAlt className="text-white w-5 h-5" />
              </div>
              {/* Split Part 2: Text */}
              <span className="px-6 py-2 text-[#1a235c] font-black tracking-wider uppercase text-sm">
                Free Call
              </span>
            </a>
          </div>

          {/* Desktop Only: Book a Session */}
          <div className="hidden sm:inline-flex group relative items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-2xl transition-transform hover:scale-105 active:scale-95">
            {/* Dynamic Rotating Gradient Border */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,white,transparent,white)] animate-border-flow" />

            <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20career%20counseling%20session.%20Please%20share%20the%20details%20and%20available%20time%20slots." target="_blank" rel="noopener noreferrer" className="relative flex items-center bg-[#1a235c]/10 backdrop-blur-xl rounded-full p-1 border border-white/20">
              {/* Split Part 1: Icon Circle */}
              <div className="bg-[#1a235c] p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaCalendarAlt className="text-white w-5 h-5" />
              </div>
              {/* Split Part 2: Text */}
              <span className="px-6 py-2 text-[#1a235c] font-black tracking-wider uppercase text-sm">
                Book a Session
              </span>
            </a>
          </div>

          {/* Premium Mobile CTA: Split Button with Dynamic Border */}
          <div className="sm:hidden group relative mt-8 inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-2xl transition-transform active:scale-95">
            {/* Dynamic Rotating Gradient Border */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,white,transparent,white)] animate-border-flow" />

            <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20career%20counseling%20session.%20Please%20share%20the%20details%20and%20available%20time%20slots." target="_blank" rel="noopener noreferrer" className="relative flex items-center bg-[#1a235c]/10 backdrop-blur-xl rounded-full p-1 border border-white/20">
              {/* Split Part 1: Icon Circle */}
              <div className="bg-[#1a235c] p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaCalendarAlt className="text-white w-5 h-5" />
              </div>
              {/* Split Part 2: Text */}
              <span className="px-5 py-2 text-[#1a235c] font-black tracking-wider uppercase text-xs">
                Book a Session
              </span>
            </a>
          </div>
        </div>


        {/* Slider and 3D Stage removed - moved to intro.tsx */}

      </div>

      {/* Global float animation remains as it might be used by intro */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes border-flow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-border-flow {
          animation: border-flow 6s linear infinite;
        }

      `}} />
    </section>
  );
}
