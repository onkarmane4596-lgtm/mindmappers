'use client';

import Image from 'next/image';
import { 
  Compass, 
  BrainCircuit, 
  FileCheck2, 
  MapPin, 
  Sparkles, 
  Lightbulb, 
  ThumbsUp, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { EnquiryModal } from '@/components/enquiry-modal';
import { Button } from '@/components/ui/button';

const steps = [
  {
    step: '01',
    name: 'Understand',
    marathi: 'समजून घेणे',
    title: 'In-Depth Student & Parent Discussion',
    description: 'Detailed discussion with students and parents to understand interests, strengths, concerns, study habits and long-term goals.',
    icon: Compass,
    accent: 'border-purple-200 bg-purple-50 text-purple-700',
    numberBadge: 'bg-[#1a235c] text-white',
  },
  {
    step: '02',
    name: 'Assess',
    marathi: 'मूल्यमापन',
    title: 'Scientific Multi-Dimensional Assessment',
    description: 'Scientific assessment using standardized IQ, EQ, aptitude mapping, learning style diagnostic and psychometric evaluation tools.',
    icon: BrainCircuit,
    accent: 'border-blue-200 bg-blue-50 text-blue-700',
    numberBadge: 'bg-[#0284c7] text-white',
  },
  {
    step: '03',
    name: 'Interpret',
    marathi: 'विश्लेषण व अहवाल',
    title: 'Clear, Jargon-Free Diagnostic Report',
    description: 'Clear and easy-to-understand personalised report detailing innate strengths, developmental areas and suitable career alternatives.',
    icon: FileCheck2,
    accent: 'border-amber-200 bg-amber-50 text-amber-700',
    numberBadge: 'bg-[#F4A16C] text-slate-900',
  },
  {
    step: '04',
    name: 'Plan & Follow Up',
    marathi: 'आराखडा व मार्गदर्शन',
    title: 'Personalised Pathway & Continuous Support',
    description: 'Personalised career pathway with practical next steps, subject stream selection, college guidance and follow-up at critical stages.',
    icon: MapPin,
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    numberBadge: 'bg-emerald-600 text-white',
  },
];

const gains = [
  {
    title: 'Clarity',
    marathi: 'स्पष्ट दिशा',
    description: 'Clear understanding of strengths, natural capabilities, and realistic career options.',
    icon: Lightbulb,
    color: 'text-amber-500 bg-amber-50',
  },
  {
    title: 'Confidence',
    marathi: 'आत्मविश्वास',
    description: 'More self-awareness, positive mindset, and freedom from confusing peer pressure.',
    icon: ThumbsUp,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    title: 'Better Decision-Making',
    marathi: 'योग्य निर्णय',
    description: 'Well-informed, realistic academic and career choices suited to the student’s mindset.',
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'A Practical Roadmap',
    marathi: 'प्रत्यक्ष आराखडा',
    description: 'Step-by-step guidance towards a brighter future with practical milestones.',
    icon: Sparkles,
    color: 'text-[#1a235c] bg-purple-50',
  },
];

export function GuidanceProcessSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F4A16C]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-wider uppercase mb-3 shadow-sm">
            <Sparkles size={13} className="text-[#F4A16C]" />
            Scientific 4-Step Methodology
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Guidance That Goes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5]">Beyond Marks</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
            गुणांपलीकडे जाऊन क्षमतांना योग्य दिशा
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Every student has a unique combination of abilities, interests, emotions and aspirations. Our counselling helps students and parents understand these clearly and choose a realistic, suitable direction — not just a popular course.
          </p>
        </div>

        {/* Highlight Image & Concept Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14 sm:mb-16">
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image 
                src="/counselling/guidance-process-discussion.jpg"
                alt="MindMappers Guidance Discussion with Student and Parents"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C] bg-slate-900/90 px-2.5 py-0.5 rounded-full">
                  Personalised Dialogue
                </span>
                <p className="text-xs sm:text-sm font-bold mt-1 text-white/95">
                  Direct interaction with students & parents to uncover authentic strengths.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#1a235c]">
              Why Most Career Decisions Go Wrong & How We Fix It
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Academic marks only indicate memory and syllabus compliance at a given moment. They do not reveal stress resilience, interpersonal ability, creative intuition, or long-term career satisfaction. MindMappers bridges this critical gap through empathetic, scientific assessment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {gains.map((gain, i) => {
                const Icon = gain.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${gain.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1.5">
                        <span>{gain.title}</span>
                        <span className="text-[10px] font-bold text-[#F4A16C]">• {gain.marathi}</span>
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-relaxed">
                        {gain.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4-Step Visual Grid (Mobile-Swipe Carousel / Desktop Grid) */}
        <div className="mb-10">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 px-2 sm:px-0 snap-x snap-mandatory no-scrollbar">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.step}
                  className="w-[270px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shadow-sm ${step.numberBadge}`}>
                        {step.step}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${step.accent}`}>
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Step {step.step} • {step.marathi}
                      </span>
                      <h4 className="text-base font-black text-slate-800 group-hover:text-[#1a235c] transition-colors mt-0.5">
                        {step.name}
                      </h4>
                    </div>

                    <p className="text-xs font-bold text-[#F4A16C] mb-2 leading-snug">
                      {step.title}
                    </p>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>MindMappers Process</span>
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  </div>
                </Card>
              );
            })}
          </div>
          <p className="sm:hidden text-xs text-slate-400 mt-2 text-center">
            &larr; Swipe to view all 4 steps &rarr;
          </p>
        </div>

        {/* Interactive CTA */}
        <div className="text-center pt-2">
          <EnquiryModal 
            initialVertical="student"
            trigger={
              <Button size="lg" className="rounded-full px-8 h-12 bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/15">
                Book a Counselling Session <ArrowRight size={15} className="ml-1.5" />
              </Button>
            }
          />
        </div>

      </div>
    </section>
  );
}
