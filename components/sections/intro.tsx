'use client';

import { Sparkles, Users, Award, Navigation } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

const sliderImages = [
  '/hero/slider/1.jpeg',
  '/hero/slider/2.jpeg',
  '/hero/slider/3.jpeg',
  '/hero/slider/4.jpeg',
  '/hero/slider/5.jpeg',
];

export function IntroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-white">
      {/* Live, Dynamic and Creative Constellation Background - Spanning All Over */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Sleek coordinate tech grid covering all over */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.06] select-none pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(26,35,92,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,35,92,0.5) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* Massive, colorful fluid orbs slowly shifting all over */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#1a235c]/10 to-[#3D57C5]/10 rounded-full blur-[110px] animate-orb-1 pointer-events-none z-0" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-[#F4A16C]/10 to-[#FF6B00]/8 rounded-full blur-[100px] animate-orb-2 pointer-events-none z-0" />
        <div className="absolute top-[25%] left-[30%] w-[450px] h-[450px] bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-[90px] animate-orb-3 pointer-events-none z-0" />

        {/* Scattered Mind Map Constellation covering all over */}
        <svg 
          className="absolute inset-0 w-full h-full text-[#1a235c] opacity-30 select-none pointer-events-none z-0" 
          viewBox="0 0 1440 600" 
          preserveAspectRatio="none" 
          fill="none"
        >
          {/* Constellation Connection pathways */}
          <line x1="120" y1="150" x2="380" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="380" y1="80" x2="720" y2="180" stroke="currentColor" strokeWidth="1.2" />
          <line x1="120" y1="150" x2="250" y2="240" stroke="currentColor" strokeWidth="1" />
          <line x1="250" y1="240" x2="450" y2="420" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
          <line x1="450" y1="420" x2="720" y2="180" stroke="currentColor" strokeWidth="1.5" />
          <line x1="720" y1="180" x2="820" y2="450" stroke="currentColor" strokeWidth="1.5" />
          <line x1="820" y1="450" x2="1100" y2="320" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="1100" y1="320" x2="980" y2="100" stroke="currentColor" strokeWidth="1.2" />
          <line x1="1100" y1="320" x2="1320" y2="480" stroke="currentColor" strokeWidth="1" />
          <line x1="980" y1="100" x2="1380" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

          {/* Glowing flowing thought pulses across the pathways */}
          <path d="M120 150 L380 80 L720 180" stroke="#F4A16C" strokeWidth="2.2" strokeLinecap="round" className="animate-dash-flow" style={{ strokeDasharray: '25 150' }} />
          <path d="M720 180 L820 450 L1100 320" stroke="#1a235c" strokeWidth="2" strokeLinecap="round" className="animate-dash-flow" style={{ strokeDasharray: '20 120' }} />
          <path d="M250 240 L450 420 L720 180" stroke="#F4A16C" strokeWidth="2.5" strokeLinecap="round" className="animate-dash-flow" style={{ strokeDasharray: '15 90' }} />

          {/* Constellation Nodes all over */}
          <circle cx="120" cy="150" r="5" fill="currentColor" className="animate-pulse" />
          <circle cx="120" cy="150" r="10" stroke="currentColor" strokeWidth="1" className="animate-ping opacity-20" style={{ animationDuration: '3s' }} />

          <circle cx="380" cy="80" r="7" fill="#F4A16C" className="animate-pulse" />

          <circle cx="250" cy="240" r="5" fill="currentColor" />

          <circle cx="450" cy="420" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="450" cy="420" r="12" stroke="currentColor" strokeWidth="1" className="animate-ping opacity-20" style={{ animationDuration: '4s' }} />

          <circle cx="720" cy="180" r="9" fill="#1a235c" />
          <circle cx="720" cy="180" r="18" stroke="currentColor" strokeWidth="1" className="animate-ping opacity-20" style={{ animationDuration: '2.5s' }} />

          <circle cx="980" cy="100" r="6" fill="#F4A16C" className="animate-pulse" />

          <circle cx="1100" cy="320" r="8" fill="currentColor" />
          <circle cx="1100" cy="320" r="15" stroke="currentColor" strokeWidth="1" className="animate-ping opacity-25" style={{ animationDuration: '3.5s' }} />

          <circle cx="820" cy="450" r="5" fill="currentColor" />

          <circle cx="1320" cy="480" r="6" fill="#F4A16C" className="animate-pulse" />

          <circle cx="1380" cy="150" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Column 1: Text Content - Always First for a better User Journey */}
          <div className="lg:col-span-5 text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-black text-[10px] tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles size={12} className="text-[#F4A16C]" />
              <span>Welcome to MindMappers</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 leading-[1.1] tracking-tight pb-1">
              Shaping Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] relative">
                Best Version
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-orange-200/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h2>

            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Empowering individuals aged 12 to 25 to achieve their academic and career goals through specialized, expert-led guidance for a successful future.
            </p>

            {/* Stats - Balanced and Professional */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 border-t border-slate-100 pt-6 md:pt-8">
              <div className="flex flex-col">
                <span className="font-black text-2xl md:text-3xl text-[#1a235c]">10k+</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Students</span>
              </div>
              <div className="flex flex-col border-l border-slate-100 pl-6">
                <span className="font-black text-2xl md:text-3xl text-[#1a235c]">13+</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years</span>
              </div>
              <div className="flex flex-col border-l border-slate-100 pl-6">
                <span className="font-black text-2xl md:text-3xl text-[#1a235c]">97%</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Accuracy</span>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Stage - STACKED LAYOUT for Zero Overlap and Maximum Impact */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 mt-8 lg:mt-0 relative group/stage">
            
            {/* Dynamic Background Overlap - Premium Floating Element (MOBILE ONLY) */}
            <div className="absolute -top-12 -right-12 w-[120%] h-[120%] -z-10 opacity-[0.03] grayscale pointer-events-none group-hover/stage:opacity-[0.05] transition-opacity duration-1000 lg:hidden text-white">
              <Image
                src="/poster/poster4.jpg"
                alt="Background ornament"
                fill
                className="object-cover animate-float-slow"
              />
            </div>

            {/* Top Row: Full-Width Slider Frame */}
            <div className="relative w-full aspect-[16/10] sm:aspect-video lg:aspect-[1.8/1] bg-white rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-3 border border-slate-100 shadow-xl shadow-blue-900/5 group flex-shrink-0">
              <div className="relative h-full rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden border border-slate-50">
                <div ref={emblaRef} className="h-full overflow-hidden">
                  <div className="flex h-full">
                    {sliderImages.map((src, index) => (
                      <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                        <Image
                          src={src}
                          alt={`Counseling Session ${index + 1}`}
                          fill
                          className="object-cover transition-all duration-[10000ms] group-hover:scale-110"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Pagination */}
                <div className="absolute bottom-6 right-8 flex gap-2 z-20">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`h-1 rounded-full transition-all duration-500 ${selectedIndex === index ? 'bg-white w-8 shadow-sm' : 'bg-white/40 w-2'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Character and Stream Labels side-by-side */}
            <div className="flex items-end justify-between px-2 sm:px-6 lg:px-8 min-h-[200px] sm:min-h-[280px] relative">

              {/* Left Side: Heroic Character (Self-contained) */}
              <div className="relative w-[45%] h-full flex flex-col justify-end">
                <div className="relative w-full aspect-[2/3.5] z-30">
                  <Image
                    src="/poster/boy.png"
                    alt="Student character"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] scale-110 sm:scale-125 origin-bottom"
                    sizes="(max-width: 640px) 45vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Right Side: Vertical Stream Labels */}
              <div className="flex flex-col gap-2.5 sm:gap-4 mb-4 sm:mb-8">
                <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                  <div className="bg-white px-3 sm:px-5 py-2 rounded-xl shadow-md border border-blue-50 flex items-center gap-2 sm:gap-3 group hover:scale-105 transition-all">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-[#1a235c] font-black text-[11px] sm:text-xs uppercase tracking-widest">Science Stream</span>
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-500">
                  <div className="bg-white px-3 sm:px-5 py-2 rounded-xl shadow-md border border-orange-50 flex items-center gap-2 sm:gap-3 group hover:scale-105 transition-all">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F4A16C] animate-pulse shadow-[0_0_10px_rgba(244,161,108,0.5)]" />
                    <span className="text-[#1a235c] font-black text-[11px] sm:text-xs uppercase tracking-widest">Commerce Stream</span>
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-700">
                  <div className="bg-white px-3 sm:px-5 py-2 rounded-xl shadow-md border border-purple-50 flex items-center gap-2 sm:gap-3 group hover:scale-105 transition-all">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <span className="text-[#1a235c] font-black text-[11px] sm:text-xs uppercase tracking-widest">Arts Stream</span>
                  </div>
                </div>
              </div>

              {/* Subtle Decorative Elements for extra polish */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-900/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.1); }
        }
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -300; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-orb-1 {
          animation: orb-float-1 20s ease-in-out infinite;
        }
        .animate-orb-2 {
          animation: orb-float-2 25s ease-in-out infinite;
        }
        .animate-orb-3 {
          animation: orb-float-3 18s ease-in-out infinite;
        }
        .animate-dash-flow {
          animation: dash-flow 8s linear infinite;
        }
      `}} />
    </section>
  );
}
