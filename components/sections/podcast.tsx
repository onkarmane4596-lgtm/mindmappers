'use client';

import { Play } from 'lucide-react';

export function PodcastSection() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-[#f8fafc]">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4A16C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4A16C]"></span>
              </span>
              Featured Podcast
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 md:mb-6 tracking-tight leading-tight pb-1">
              Parenting & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Career Choices</span>
            </h2>
            
            <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Where do parents go wrong when choosing the career of their children? Watch our expert director decode the common pitfalls and provide actionable guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                 {[
                   '/parents/father1.png',
                   '/parents/mother1.png',
                   '/parents/father2.png',
                   '/parents/mother2.png'
                 ].map((imgSrc, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-100 shadow-sm`} style={{ zIndex: 10 - i }}>
                        <img src={imgSrc} alt="Parent" className="w-full h-full rounded-full object-cover" />
                    </div>
                ))}
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-bold">
                <span className="text-[#1a235c]">1L+</span> parents have watched this
              </div>
            </div>
          </div>

          {/* Video Container */}
          <div className="w-full lg:w-7/12 relative group">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white bg-white transition-all duration-500 group-hover:shadow-blue-900/20 transform group-hover:scale-[1.01]">
              <iframe 
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/ynaKPOVexx8?rel=0&showinfo=0&autoplay=0" 
                title="Podcast Guidance" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-8 bg-white border border-slate-100 p-3 md:p-5 rounded-2xl shadow-xl animate-bounce-slow max-w-[160px] md:max-w-xs z-20">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1a235c] flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" />
                </div>
                <div>
                  <p className="text-[#1a235c] font-black text-[10px] md:text-sm leading-tight mb-0.5 uppercase tracking-wide">Expert Advice</p>
                  <p className="text-slate-500 text-[9px] md:text-xs font-bold">Must watch for parents</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
