'use client';

import Image from 'next/image';
import { Award, Presentation, Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const outreachHighlights = [
  {
    title: 'Recognition & Invited Presence',
    marathi: 'संस्थात्मक सन्मान व निमंत्रित उपस्थिती',
    description: 'Felicitation and guest presence at prestigious academic organizations including Rayat Shikshan Sanstha, engineering colleges, and government education committees.',
    image: '/outreach/recognition-invited-presence.jpg',
    icon: Award,
    badge: 'Institutional Honour',
    tag: 'Felicitation Ceremonies'
  },
  {
    title: 'Stage Sessions & Motivational Guidance',
    marathi: 'व्यासपीठ व्याख्याने व प्रेरक मार्गदर्शन',
    description: 'Keynote addresses, auditorium seminars, and youth orientation summits covering exam preparation, competitive-test psychology, and unshakeable self-belief.',
    image: '/outreach/stage-sessions-guidance.jpg',
    icon: Presentation,
    badge: 'Keynote Seminars',
    tag: 'Auditorium Speeches'
  },
  {
    title: 'Community Interaction & Grassroot Guidance',
    marathi: 'सामाजिक संवाद व सर्वसमावेशक समुपदेशन',
    description: 'Active grassroots initiatives guiding rural families, grassroots youth associations, and parents who lack access to modern career counseling information.',
    image: '/outreach/community-interaction.jpg',
    icon: Users,
    badge: 'Public Outreach',
    tag: 'Ground Mentorship'
  }
];

export function OutreachSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F4A16C]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-wider uppercase mb-3 shadow-sm">
            <Sparkles size={13} className="text-[#F4A16C]" />
            Credibility & Public Engagement
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Invited Sessions, <span className="text-[#1a235c]">Recognition & </span><span className="text-[#F4A16C]">Outreach</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
            समाज, शाळा आणि संस्थांमधील प्रेरणादायी सहभाग
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            MindMappers and Prof. Dinesh Tathe are regularly invited for student welfare sessions, motivational interactions, career awareness programmes and educational outreach across Maharashtra.
          </p>
        </div>

        {/* 3 Prominent Categories Cards (Mobile Swiper Carousel / Desktop 3-Card Grid) */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {outreachHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card 
                key={idx}
                className="w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
              >
                {/* Photo Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#1a235c] shadow-sm">
                      <Icon size={12} className="text-[#F4A16C]" />
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-slate-900/90 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-[#1a235c] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F4A16C] mb-2.5">
                      {item.marathi}
                    </p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#F4A16C]" /> Maharashtra Outreach
                    </span>
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="md:hidden text-xs text-slate-400 mt-2 text-center">
          &larr; Swipe to view outreach highlights &rarr;
        </p>

        {/* Locations Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-xs sm:text-sm font-black text-[#1a235c]">Active Regional Centres</h4>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
              Available for personal consultations, group workshops and school seminars in:
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Pune', 'Satara', 'Chhatrapati Sambhajinagar', 'Nanded'].map((loc) => (
              <span key={loc} className="px-3 py-1 rounded-xl bg-white text-[#1a235c] font-black text-xs border border-slate-200 shadow-xs">
                📍 {loc}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
