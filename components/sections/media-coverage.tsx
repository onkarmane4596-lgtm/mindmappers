'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Newspaper, Calendar, Maximize2, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const recentCoverage = [
  {
    id: 1,
    publication: 'Lokmat',
    marathiPub: 'लोकमत',
    edition: 'Aurangabad / Pune Edition',
    date: '24 October 2026',
    title: 'पदवी शिक्षणासोबतच स्पर्धा परीक्षांची तयारी करा : दिनेश ताठे यांचे मार्गदर्शन',
    summary: 'At Sharadchandra Pawar College of Engineering (Hadapsar, Pune), Prof. Dinesh Tathe guided graduation students on early competitive examination planning, time management, and building unshakable self-confidence.',
    image: '/media-coverage/lokmat_clipping.png',
    badge: 'Recent News Feature',
    accent: 'bg-red-50 text-red-600 border-red-200'
  },
  {
    id: 2,
    publication: 'Janpravas',
    marathiPub: 'जनप्रवास',
    edition: 'State Edition',
    date: '24 October 2026',
    title: 'पदवीच्या काळातच स्पर्धा परीक्षांची तयारी करावी : प्रा. दिनेश ताठे',
    summary: 'Comprehensive feature highlighting Prof. Dinesh Tathe’s keynote session on competitive-exam readiness during graduation and selecting the right career path based on personal aptitude.',
    image: '/media-coverage/janpravas_clipping.png',
    badge: 'Recent News Feature',
    accent: 'bg-amber-50 text-amber-700 border-amber-200'
  }
];

const archiveCoverage = [
  {
    id: 3,
    title: 'आपले ध्येय कायम नजरेसमोर ठेवा : प्रा. दिनेश ताठे',
    category: 'Press Archive',
    source: 'Leading Daily',
    image: '/media-coverage/press_archive.png',
    note: 'Guidance on goal clarity and focused career preparation.'
  },
  {
    id: 4,
    title: 'अग्निदिव्य दैनिक प्रसिद्धी',
    category: 'Published Coverage',
    source: 'Agniaditya Newspaper',
    image: '/media-coverage/agniaditya_clipping.png',
    note: 'In-depth reporting on youth empowerment and career counseling.'
  },
  {
    id: 5,
    title: 'Institutional Recognition and Invited Programmes',
    category: 'Felicitation',
    source: 'Academic Convocation',
    image: '/media-coverage/institutional_stage.png',
    note: 'Felicitation of Prof. Dinesh Tathe for educational contribution.'
  }
];

export function MediaCoverageSection() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  const openLightbox = (imgSrc: string, title: string) => {
    setActiveLightbox(imgSrc);
    setActiveTitle(title);
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-bold text-xs tracking-wider uppercase mb-3 shadow-sm">
            <Newspaper size={13} className="text-red-500" />
            Print Media Recognition
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Media Coverage & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Public Trust</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
            वृत्तपत्रांतील प्रसिद्धी आणि शैक्षणिक उपक्रमांचा आढावा
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Leading regional and state newspapers regularly feature MindMappers' educational seminars, competitive examination guidance, and student development initiatives.
          </p>
        </div>

        {/* Section 1: Recent Media Coverage — 24 October 2026 */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <h3 className="text-base sm:text-xl font-black text-slate-800 tracking-tight">
              Recent Media Coverage <span className="text-xs sm:text-sm font-semibold text-slate-400">• 24 October 2026</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {recentCoverage.map((item) => (
              <Card 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col group"
              >
                <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-black text-lg sm:text-xl text-red-600">{item.marathiPub}</span>
                    <span className="text-xs font-bold text-slate-400">({item.publication})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    <Calendar size={12} className="text-[#F4A16C]" /> {item.date}
                  </div>
                </div>

                {/* Newspaper Clipping Visual Container */}
                <div 
                  onClick={() => openLightbox(item.image, item.title)}
                  className="relative aspect-[16/11] w-full bg-slate-50 cursor-pointer overflow-hidden group/img"
                >
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2 group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#1a235c] font-black text-xs shadow-xl">
                      <Maximize2 size={13} /> Click to Inspect Clipping
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 mb-1 block">
                      Edition: {item.edition}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-[#1a235c] leading-snug mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button 
                      onClick={() => openLightbox(item.image, item.title)}
                      className="text-xs font-bold text-[#1a235c] hover:text-[#F4A16C] transition-colors flex items-center gap-1"
                    >
                      <Maximize2 size={13} /> View Original Article
                    </button>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Verified Press
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Earlier Media Mentions Archive (Mobile-Swiper / Desktop Grid) */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#1a235c]" />
              <h3 className="text-base sm:text-xl font-black text-slate-800 tracking-tight">
                Earlier Media Mentions & Recognition Archive
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
              Swipe to inspect &rarr;
            </span>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar">
            {archiveCoverage.map((item) => (
              <Card 
                key={item.id}
                onClick={() => openLightbox(item.image, item.title)}
                className="w-[260px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-50 p-2 overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-slate-800 text-[11px] font-bold shadow-md">
                      <Maximize2 size={12} /> Zoom
                    </span>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C] bg-orange-50 px-2 py-0.5 rounded-full mb-1.5 inline-block">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-[#1a235c] group-hover:text-blue-700 transition-colors line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.note}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <p className="sm:hidden text-xs text-slate-400 mt-2 text-center">
            &larr; Swipe to view archive press &rarr;
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!activeLightbox} onOpenChange={(open) => !open && setActiveLightbox(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-4 bg-white/98 backdrop-blur-xl border-slate-200 rounded-3xl">
          <div className="p-3 border-b border-slate-100 flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-bold text-[#1a235c] line-clamp-1 pr-4">{activeTitle}</h4>
            <span className="text-[11px] font-bold text-slate-400">High-Resolution Press Clipping</span>
          </div>
          {activeLightbox && (
            <div className="relative w-full aspect-[4/3] max-h-[75vh] flex items-center justify-center p-2 bg-slate-50 rounded-2xl">
              <Image 
                src={activeLightbox} 
                alt="Newspaper Clipping" 
                fill 
                className="object-contain" 
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
