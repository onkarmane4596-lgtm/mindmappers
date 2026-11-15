'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { 
  School, 
  BookOpen, 
  Sparkles, 
  Users, 
  BrainCircuit, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Target,
  ChevronLeft,
  ChevronRight,
  Smile,
  ShieldCheck,
  TrendingUp,
  Heart
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from '@/components/enquiry-modal';

const schoolProgrammes = [
  {
    title: 'Career Awareness Sessions',
    marathi: 'करिअर जाणीव जागृती सत्रे',
    desc: 'Introducing students to 350+ career avenues, realistic subject combinations, emerging modern degrees, and future-proof professions.',
    icon: Target,
    badge: 'Popular for 9th-12th',
    accentColor: 'text-purple-600 bg-purple-50'
  },
  {
    title: 'Motivation & Study Skills',
    marathi: 'अभ्यास कौशल्ये व प्रेरणा',
    desc: 'Scientific time management, overcoming procrastination, memory techniques, note-taking frameworks, and structured daily routines.',
    icon: BookOpen,
    badge: 'Academic Excellence',
    accentColor: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'EQ and Personality Development',
    marathi: 'भावनिक संतुलन व व्यक्तिमत्त्व विकास',
    desc: 'Cultivating emotional balance, positive body language, stage fear eradication, active listening, and social communication skills.',
    icon: BrainCircuit,
    badge: 'Holistic Growth',
    accentColor: 'text-amber-600 bg-amber-50'
  },
  {
    title: 'Parent–Teacher Interaction',
    marathi: 'पालक-शिक्षक संयुक्त मार्गदर्शन',
    desc: 'Sensitizing parents and educators to generational mindset shifts, exam pressure relief, cyber parenting, and constructive encouragement.',
    icon: Users,
    badge: 'Triangular Alignment',
    accentColor: 'text-rose-600 bg-rose-50'
  },
  {
    title: 'Exam Mindset & Confidence',
    marathi: 'परीक्षा पूर्व मानसिकता व आत्मविश्वास',
    desc: 'Calming pre-board and entrance test anxieties, peak performance mindset conditioning, and realistic goal setting without fear of failure.',
    icon: Award,
    badge: 'Exam Readiness',
    accentColor: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Customised Age-Group Modules',
    marathi: 'वयोगटानुसार विशेष सत्रे',
    desc: 'Tailor-made modules customized specifically for middle school, high school, senior college, or competitive exam academy batches.',
    icon: Sparkles,
    badge: 'Tailored Framework',
    accentColor: 'text-indigo-600 bg-indigo-50'
  }
];

const whySchoolsInviteUs = [
  {
    step: '01',
    title: 'Interactive Style',
    marathi: 'संवादात्मक व रंजक पद्धत',
    desc: 'Two-way dialogues, live demonstrations, and relatable real-world stories instead of boring one-way lectures.',
    icon: Smile
  },
  {
    step: '02',
    title: 'Student-Friendly Language',
    marathi: 'सहज व समजेल अशी भाषा',
    desc: 'Comfortable bilingual delivery in Marathi & English that connects naturally with youth psychology.',
    icon: Heart
  },
  {
    step: '03',
    title: 'Clear Actionable Takeaways',
    marathi: 'प्रत्यक्ष कृती आराखडा',
    desc: 'Concrete worksheets, study habit roadmaps, and immediate self-evaluation tools for every attendee.',
    icon: TrendingUp
  },
  {
    step: '04',
    title: 'Parent & Faculty Relevance',
    marathi: 'पालक व शिक्षकांना उपयुक्त',
    desc: 'Addresses real campus challenges: mobile addiction, academic stress, peer comparisons, and indiscipline.',
    icon: Users
  },
  {
    step: '05',
    title: 'Proven Practical Value',
    marathi: 'दीर्घकालीन उपयुक्तता',
    desc: 'Trusted by hundreds of schools, junior colleges, and prominent educational trusts across Maharashtra.',
    icon: ShieldCheck
  }
];

export function InstitutionalProgrammesSection() {
  const programmesScrollRef = useRef<HTMLDivElement>(null);
  const reasonsScrollRef = useRef<HTMLDivElement>(null);

  const scrollProgrammes = (direction: 'left' | 'right') => {
    if (programmesScrollRef.current) {
      programmesScrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollReasons = (direction: 'left' | 'right') => {
    if (reasonsScrollRef.current) {
      reasonsScrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-50/80 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-orange-50/80 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-wider uppercase mb-3 shadow-sm">
            <School size={13} className="text-[#F4A16C]" />
            Educational Outreach & Campus Seminars
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            For Schools, Colleges & <br className="hidden sm:inline" />
            <span className="text-[#1a235c]">Coaching </span>
            <span className="text-[#F4A16C]">Institutes</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
            विद्यार्थ्यांच्या सर्वांगीण विकासासाठी उपयुक्त सत्रे
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            MindMappers conducts high-impact sessions in educational institutions to build student career awareness, study discipline, personality development, confidence, and emotional growth.
          </p>
        </div>

        {/* Featured Auditorium Session Card */}
        <div className="bg-slate-50/80 rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm mb-14 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <Image 
                  src="/counselling/school-college-session.jpg"
                  alt="MindMappers Seminar at The Brilliant School Auditorium"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[11px] font-semibold text-slate-500 mt-2 text-center">
                Auditorium guidance seminar at The Brilliant School with hundreds of students
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#1a235c] font-bold text-xs border border-purple-200">
                <Sparkles size={13} className="text-[#F4A16C]" /> Auditorium & Campus Engagement
              </span>
              
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                Inspiring High School & College Students Right On Campus
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                When an institution invites MindMappers, students experience clarity about their academic potential and learn how to manage competitive exam pressure with composure.
              </p>

              <div className="space-y-2 pt-1">
                {[
                  'Customised sessions for 8th to 12th standards and degree colleges',
                  'Joint parent-faculty interaction for collaborative student support',
                  'Follow-up individual psychometric and aptitude testing options'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <EnquiryModal 
                  initialVertical="school"
                  trigger={
                    <Button className="rounded-full px-6 h-11 bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                      Invite a Session to Your Campus <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  }
                />
              </div>
            </div>

          </div>
        </div>

        {/* 6 Programmes with Mobile Scrolling Carousel */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C]">
                Institutional Offerings
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                Six Campus Guidance Programmes
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => scrollProgrammes('left')}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => scrollProgrammes('right')}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div 
            ref={programmesScrollRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {schoolProgrammes.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <Card 
                  key={idx}
                  className="w-[280px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-[#F4A16C] bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full">
                        {prog.badge}
                      </span>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${prog.accentColor}`}>
                        <Icon size={16} />
                      </div>
                    </div>

                    <h4 className="text-base font-black text-slate-800 group-hover:text-[#1a235c] transition-colors mb-0.5">
                      {prog.title}
                    </h4>
                    
                    <p className="text-xs font-bold text-[#F4A16C] mb-2">
                      {prog.marathi}
                    </p>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>Auditorium Ready</span>
                    <CheckCircle2 size={13} className="text-emerald-500" />
                  </div>
                </Card>
              );
            })}
          </div>

          <p className="sm:hidden text-xs text-slate-400 mt-2 px-1 text-center">
            &larr; Swipe horizontally to explore all 6 programmes &rarr;
          </p>
        </div>

        {/* "Why Schools & Colleges Invite Us" — Clean Modern Redesign (Fixing User's Image 2) */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#1a235c] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs inline-block mb-2">
                Institutional Trust & Excellence
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900">
                Why Schools & Colleges Invite Us Year After Year
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Our interactive, empathetic methodology connects deeply with students while respecting campus values.
              </p>
            </div>

            {/* Carousel navigation controls on mobile/tablet */}
            <div className="flex items-center gap-2 shrink-0">
              <button 
                onClick={() => scrollReasons('left')}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-xs transition-colors"
                aria-label="Previous reason"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => scrollReasons('right')}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-xs transition-colors"
                aria-label="Next reason"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Clean Modern Card Carousel (Replaces the AI-looking dark template) */}
          <div 
            ref={reasonsScrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {whySchoolsInviteUs.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.step}
                  className="w-[260px] sm:w-[280px] shrink-0 snap-start bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#1a235c]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1a235c] font-black text-xs flex items-center justify-center border border-blue-100">
                        {item.step}
                      </span>
                      <Icon size={18} className="text-[#F4A16C]" />
                    </div>

                    <h4 className="text-sm font-black text-slate-800 mb-0.5">
                      {item.title}
                    </h4>

                    <p className="text-[11px] font-bold text-[#F4A16C] mb-2.5">
                      {item.marathi}
                    </p>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span>MindMappers Hallmark</span>
                    <CheckCircle2 size={13} className="text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs font-semibold text-slate-500">
              Serving institutions in Pune, Satara, Chhatrapati Sambhajinagar, Nanded and across Maharashtra.
            </p>
            <EnquiryModal 
              initialVertical="school"
              trigger={
                <Button className="rounded-full px-6 h-11 bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                  Submit Institutional Enquiry
                </Button>
              }
            />
          </div>

        </div>

      </div>
    </section>
  );
}
