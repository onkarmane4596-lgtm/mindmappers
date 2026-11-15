'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Brain, 
  Heart, 
  Compass, 
  Lightbulb, 
  Users, 
  School, 
  Download, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const heroTexts = [
  {
    prefix: "Discover Potential.",
    highlight1: "Design The",
    suffix: "Right",
    highlight2: "Future.",
    p: "Career counselling, psychometric assessment, EQ mapping and holistic development for students, parents and schools."
  },
  {
    prefix: "Guidance That Goes",
    highlight1: "Beyond",
    suffix: "Marks",
    highlight2: "Alone.",
    p: "Understand authentic strengths, emotional resilience, and choose a realistic, suitable career direction — not just a popular course."
  },
  {
    prefix: "IQ Helps You Score.",
    highlight1: "EQ Helps",
    suffix: "You",
    highlight2: "Grow.",
    p: "Shaping your best version through emotional intelligence, exam confidence, and lifelong adaptability."
  }
];

const capabilities = [
  { label: 'IQ Assessment', icon: Brain, color: 'text-purple-700 bg-purple-50' },
  { label: 'EQ Assessment', icon: Heart, color: 'text-rose-700 bg-rose-50' },
  { label: 'Aptitude Assessment', icon: Compass, color: 'text-amber-800 bg-amber-50' },
  { label: 'Psychometric Insights', icon: Lightbulb, color: 'text-blue-700 bg-blue-50' },
  { label: 'Personality Development', icon: Sparkles, color: 'text-emerald-700 bg-emerald-50' },
  { label: 'School Sessions', icon: School, color: 'text-indigo-700 bg-indigo-50' },
  { label: 'Parent Guidance', icon: Users, color: 'text-orange-700 bg-orange-50' },
];

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4500);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 w-full max-w-full" style={{ contain: 'paint' }}>

      {/* Dynamic Background with Parallax (Clean Solid Overlays, NO Glassmorphism) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div
          className="relative w-full h-[120%] -top-[10%] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
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
          {/* Clean High-Contrast Overlays (NO Glassmorphism) */}
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center shrink-0">

        {/* Dynamic Rotating Headline */}
        <div key={textIndex} className="animate-in fade-in duration-700 slide-in-from-bottom-2 w-full text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.12] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4">
            <span className="block text-slate-700 font-semibold text-lg sm:text-2xl lg:text-4xl mb-1.5">
              {heroTexts[textIndex].prefix}
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-4">
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

          <p className="text-sm sm:text-base lg:text-xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            {heroTexts[textIndex].p}
          </p>
        </div>

        {/* Rotating Animated Border Split CTAs (Solid Crisp Styling, NO Glassmorphism) */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-10 w-full max-w-xl">
          
          {/* Free Call Split Button */}
          <div className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-xl shadow-blue-900/10 transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#1a235c,#F4A16C,#1a235c)] animate-border-flow" />
            <a href="tel:+919822258300" className="relative flex items-center bg-white rounded-full p-1 border border-slate-200">
              <div className="bg-[#1a235c] p-2.5 sm:p-3 rounded-full shadow-md flex items-center justify-center">
                <FaPhoneAlt className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="px-4 sm:px-6 py-2 text-[#1a235c] font-black tracking-wider uppercase text-xs sm:text-sm">
                Free Call
              </span>
            </a>
          </div>

          {/* Book Session Split Button (WhatsApp Attached) */}
          <div className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-xl shadow-blue-900/10 transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#25D366,#1a235c,#25D366)] animate-border-flow" />
            <a 
              href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20career%20counselling%20session.%20Please%20share%20the%20details." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative flex items-center bg-white rounded-full p-1 border border-slate-200"
            >
              <div className="bg-[#25D366] p-2.5 sm:p-3 rounded-full shadow-md flex items-center justify-center">
                <MessageCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="px-4 sm:px-6 py-2 text-[#1a235c] font-black tracking-wider uppercase text-xs sm:text-sm">
                Book on WhatsApp
              </span>
            </a>
          </div>

          {/* Download Brochure Link Button */}
          <div className="inline-flex items-center">
            <a 
              href="/asset/MindMappers-Career-Counselling-Brochure.pdf" 
              download="MindMappers_Career_Counselling_Brochure_Updated_Media_2026.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-[#1a235c] font-bold text-xs uppercase tracking-wider border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Download size={14} className="text-[#F4A16C]" />
              <span>Brochure (PDF)</span>
            </a>
          </div>
        </div>

        {/* 7 Capabilities Bar (Solid White Pills, Horizontal Scrollable on Mobile) */}
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-2 no-scrollbar scroll-smooth">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-800 whitespace-nowrap shrink-0 hover:border-[#1a235c] transition-colors"
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center ${cap.color}`}>
                    <Icon size={11} />
                  </span>
                  <span>{cap.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes border-flow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-flow {
          animation: border-flow 6s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
