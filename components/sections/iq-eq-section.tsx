'use client';

import Image from 'next/image';
import { 
  Brain, 
  Heart, 
  ShieldAlert, 
  Smile, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Target,
  MessageCircle,
  Home,
  Award
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from '@/components/enquiry-modal';

const eqPillars = [
  {
    title: 'Confidence Under Pressure',
    marathi: 'दबावातही संयम व आत्मविश्वास',
    desc: 'Maintaining composure and focus during competitive exams and interviews.',
    icon: Target,
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Healthy Relationships',
    marathi: 'सकारात्मक नातेसंबंध',
    desc: 'Understanding family, peer dynamics, mutual respect and constructive dialogue.',
    icon: Heart,
    color: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Communication Skills',
    marathi: 'प्रभावी संवाद कौशल्य',
    desc: 'Articulating ideas clearly, active listening and presenting views confidently.',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Stress Handling',
    marathi: 'तणाव व्यवस्थापन',
    desc: 'Coping with academic pressure, peer comparison, and overcoming exam anxiety.',
    icon: ShieldAlert,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Adaptability in the Real World',
    marathi: 'बदलत्या जगाशी जुळवून घेणे',
    desc: 'Thriving in modern corporate environments, college transitions and diverse cultures.',
    icon: Smile,
    color: 'from-emerald-500 to-teal-500'
  }
];

const postCounsellingSuggestions = [
  {
    title: 'Personality Development Strategies',
    desc: 'Customized exercises to refine posture, body language, and stage confidence.',
    icon: Award
  },
  {
    title: 'Communication Improvement',
    desc: 'Structured techniques to overcome shyness and articulate thoughts crisply.',
    icon: MessageCircle
  },
  {
    title: 'Confidence-Building Habits',
    desc: 'Daily micro-habits that replace self-doubt with constructive resilience.',
    icon: Target
  },
  {
    title: 'Happy Parenting Tips',
    desc: 'Empathetic guidance for parents to reduce academic friction and support aspirations.',
    icon: Heart
  },
  {
    title: 'Supportive Home Environment',
    desc: 'Creating an open atmosphere free from toxic comparisons and anxiety triggers.',
    icon: Home
  }
];

export function IQEQSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Decorative Backgrounds */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#1a235c] font-bold text-xs tracking-wider uppercase mb-3 shadow-sm">
            <Brain size={13} className="text-[#F4A16C]" />
            Cognitive & Emotional Equilibrium
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            IQ Helps You Score. <span className="text-[#1a235c]">EQ Helps You </span><span className="text-[#F4A16C]">Grow.</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
            फक्त IQ पुरेसा नाही — EQ मुळे व्यक्तिमत्त्व घडते.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            In India and Maharashtra, many parents naturally focus on IQ, marks, Mathematics and Science. These are important — but today's world also demands strong EQ: self-awareness, confidence, empathy, emotional balance, communication and sound decision-making.
          </p>
        </div>

        {/* IQ vs EQ Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* IQ Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1a235c] flex items-center justify-center font-black shadow-inner">
                  <Brain size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Cognitive Ability</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a235c]">Intelligence Quotient (IQ)</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-5 leading-relaxed">
                Represents logical reasoning, analytical skills, memory retention, problem-solving speed, and academic marks in examinations.
              </p>
              
              <ul className="space-y-2.5 mb-6">
                {[
                  'Determines ability to understand complex formulas and concepts',
                  'Helps achieve high percentiles and competitive exam ranks',
                  'Aids in logical deduction, calculations and technical retention',
                  'Critical for STEM, research, and syllabus mastery'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                    <CheckCircle2 size={15} className="text-[#1a235c] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 text-center">
              "Helps open the initial door through marks & grades."
            </div>
          </div>

          {/* EQ Card (USP) */}
          <div className="bg-[#1a235c] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 text-[#F4A16C] flex items-center justify-center font-black shadow-inner">
                    <Heart size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C]">MindMappers USP</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Emotional Quotient (EQ)</h3>
                  </div>
                </div>
                <span className="bg-[#F4A16C] text-[#1a235c] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shrink-0">
                  Growth Engine
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium mb-5 leading-relaxed">
                Represents emotional awareness, interpersonal empathy, handling failure, conflict resolution, leadership, and mental stamina in real life.
              </p>

              <ul className="space-y-2.5 mb-6">
                {[
                  'Regulates stress under intense exam pressure & deadlines',
                  'Builds deep family harmony and supportive friendships',
                  'Translates academic knowledge into leadership and client respect',
                  'Enables adaptability, career longevity and true happiness'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-200">
                    <Sparkles size={15} className="text-[#F4A16C] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-xs font-bold text-slate-200 text-center relative z-10">
              "Ensures lifelong growth, leadership, and emotional stability."
            </div>
          </div>
        </div>

        {/* Authentic Photo & EQ Test USP Deep-Dive */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100">
                <Image 
                  src="/counselling/iq-eq-counselling.jpg"
                  alt="MindMappers IQ and EQ Evaluation Session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] font-bold text-slate-500 mt-2 text-center">
                Prof. Dinesh Tathe conducting an individualised EQ mapping session
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs">
                <Award size={13} className="text-amber-600" /> Our EQ Test is a Dedicated USP
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-[#1a235c]">
                MindMappers Evaluates a Child's Emotional Patterns
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                We systematically assess five critical emotional dimensions: <span className="font-bold text-[#1a235c]">Self-Awareness</span>, <span className="font-bold text-[#1a235c]">Empathy</span>, <span className="font-bold text-[#1a235c]">Behaviour Style</span>, <span className="font-bold text-[#1a235c]">Stress Response</span>, and <span className="font-bold text-[#1a235c]">Social Skills</span>.
              </p>

              {/* 5 Pillars Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {eqPillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#1a235c] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{pillar.title}</h4>
                        <p className="text-[10px] font-semibold text-[#F4A16C]">{pillar.marathi}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* After Counselling, We Suggest (Mobile Swipeable Swiper) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C] block mb-1">
                Beyond Just Test Scores
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                What We Suggest After Counselling
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                We partner with students and parents to build sustainable growth habits.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
              Swipe across recommendations &rarr;
            </span>
          </div>

          <div className="flex lg:grid lg:grid-cols-5 gap-3.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory no-scrollbar">
            {postCounsellingSuggestions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="w-[230px] lg:w-auto shrink-0 snap-start p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1a235c] flex items-center justify-center mb-3">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 mb-1 leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[10px] font-bold text-[#1a235c]">
                    <CheckCircle2 size={12} className="text-emerald-500" /> Actionable Plan
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <EnquiryModal 
              initialVertical="student"
              trigger={
                <Button className="rounded-full px-7 h-11 bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                  Schedule an IQ & EQ Assessment <ArrowRight size={14} className="ml-1.5" />
                </Button>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}
