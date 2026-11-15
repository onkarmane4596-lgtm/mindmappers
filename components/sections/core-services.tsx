'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, UserCheck, Presentation, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from '@/components/enquiry-modal';

const serviceHighlights = [
  {
    title: 'Personalised Career Guidance',
    marathi: 'वैयक्तिक करिअर मार्गदर्शन',
    subtitle: 'Understand strengths. Explore opportunities.',
    description: 'One-on-one scientific counselling analyzing unique student abilities, personality patterns, and stream fitment after 10th & 12th.',
    image: '/counselling/service-personalized-guidance.jpg',
    badge: '1-on-1 Mentorship',
    icon: UserCheck,
    tag: 'Individual Assessment'
  },
  {
    title: 'Inspiring Sessions',
    marathi: 'प्रेरणादायी व्याख्याने',
    subtitle: 'Beyond marks, towards meaningful careers.',
    description: 'Dynamic keynote seminars instilling exam confidence, emotional resilience, study discipline, and long-term goal clarity.',
    image: '/counselling/service-inspiring-sessions.jpg',
    badge: 'Keynote Seminars',
    icon: Presentation,
    tag: 'Auditorium Sessions'
  },
  {
    title: 'Workshops for Schools',
    marathi: 'शालेय करिअर कार्यशाळा',
    subtitle: 'Career awareness for brighter generations.',
    description: 'Comprehensive campus programs addressing modern 350+ career avenues, competitive exams, study habits, and parent-teacher alignment.',
    image: '/counselling/service-school-workshops.jpg',
    badge: 'Campus Programs',
    icon: School,
    tag: 'Institutional Outreach'
  }
];

export function CoreServicesSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-100 w-full max-w-full" style={{ contain: 'paint' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles size={13} className="text-[#F4A16C]" />
              Core Pillars of Guidance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Three Pillars of Career Success
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#F4A16C] mt-1">
              दिशा, प्रेरणा आणि संस्थात्मक सक्षमीकरण
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
              Swipe on mobile to view all &rarr;
            </span>
          </div>
        </div>

        {/* 3 Modern Cards: Mobile Touch Carousel / Desktop 3-Card Grid */}
        <div className="flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar">
          {serviceHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="w-[290px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white text-[#1a235c] shadow-sm">
                      <Icon size={12} className="text-[#F4A16C]" />
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3">
                    <span className="text-[10px] font-bold text-white bg-slate-900/90 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-[#1a235c] transition-colors mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F4A16C] mb-2.5">
                      {item.marathi}
                    </p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400 text-[11px] flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      MindMappers Proven
                    </span>
                    <EnquiryModal 
                      initialVertical="student"
                      trigger={
                        <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1 text-xs font-bold group-hover:translate-x-0.5 transition-transform">
                          Enquire on WhatsApp <ArrowRight size={13} />
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="sm:hidden text-xs text-slate-400 mt-2 text-center">
          &larr; Swipe horizontally to explore all 3 pillars &rarr;
        </p>

      </div>
    </section>
  );
}

