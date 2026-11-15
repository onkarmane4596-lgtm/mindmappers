'use client';

import Image from 'next/image';
import { 
  FileSpreadsheet, 
  Brain, 
  Heart, 
  Compass, 
  Lightbulb, 
  CheckCircle2, 
  CheckCircle,
  Users, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Award,
  MessageCircle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from '@/components/enquiry-modal';

const assessmentCategories = [
  {
    id: 'iq',
    title: 'IQ / Cognitive Ability',
    marathi: 'बुद्धिमापन व आकलन क्षमता',
    description: 'Understand innate learning style, abstract reasoning, quantitative problem-solving and mental speed under timed conditions.',
    icon: Brain,
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    accentColor: '#1a235c',
    points: [
      'Logical and numerical reasoning abilities',
      'Spatial perception & abstract visualization',
      'Memory retention & cognitive processing speed',
      'Learning style diagnosis (Visual, Auditory, Kinesthetic)'
    ]
  },
  {
    id: 'eq',
    title: 'EQ / Emotional Skills',
    marathi: 'भावनांक व भावनिक संतुलन',
    description: 'Understand emotional self-awareness, impulse control, interpersonal relationships, resilience and stress coping mechanisms.',
    icon: Heart,
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    accentColor: '#e11d48',
    points: [
      'Emotional awareness & stress threshold',
      'Empathy and interpersonal communication styles',
      'Handling exam panic and setback recovery',
      'Social adaptability and teamwork maturity'
    ]
  },
  {
    id: 'aptitude',
    title: 'Aptitude & Interest Mapping',
    marathi: 'कल, आवड आणि क्षमता मॅपिंग',
    description: 'Identify natural talents, intrinsic interests and align them systematically with realistic, high-potential career fields.',
    icon: Compass,
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    accentColor: '#d97706',
    points: [
      'Holland RIASEC interest profiling',
      'Scientific subject & stream compatibility',
      'Aligning passion with real market opportunities',
      'Exploring modern emerging tech & vocational paths'
    ]
  },
  {
    id: 'psychometric',
    title: 'Psychometric Insights',
    marathi: 'मानसशास्त्रीय स्वभाव विश्लेषण',
    description: 'Get deep, scientific insights into personality traits, behavioral patterns, leadership temperament and natural work styles.',
    icon: Lightbulb,
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    accentColor: '#0284c7',
    points: [
      'Introversion vs Extraversion dynamics',
      'Decision-making logic vs emotional impulsivity',
      'Conflict-handling & collaborative teamwork profile',
      'Long-term workplace fitment & satisfaction indicators'
    ]
  }
];

const reportContents = [
  { label: 'Innate Core Strengths', desc: 'Accurate breakdown of what the student excels at naturally.' },
  { label: 'Key Development Areas', desc: 'Constructive identification of behavioral and academic blindspots.' },
  { label: 'Suitable Career Directions', desc: 'Shortlisted realistic streams, graduation courses, and job profiles.' },
  { label: 'Senior Counsellor Interpretation', desc: 'Empathetic explanation that translates numbers into human wisdom.' },
  { label: 'Actionable Next Steps', desc: 'Milestone roadmap for the upcoming 6 to 24 months.' },
];

export function AssessmentsReportsSection() {
  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden border-b border-slate-100 w-full max-w-full" style={{ contain: 'paint' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-wider uppercase mb-3 shadow-xs">
            <FileSpreadsheet size={14} className="text-[#F4A16C]" />
            Scientific Diagnostic Framework
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Assessments & <span className="text-[#1a235c]">Personalised </span><span className="text-[#F4A16C]">Reports</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
            वैज्ञानिक चाचण्या आणि समजून घेतलेला वैयक्तिक अहवाल
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            We combine counselling conversations with suitable scientific tools to understand a student's strengths, emotional patterns, aptitude, interests and future possibilities.
          </p>
        </div>

        {/* 4 Assessment Categories with Mobile Horizontal Carousel (No Text Collisions) */}
        <div className="mb-14">
          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
            {assessmentCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card 
                  key={cat.id}
                  className="w-[285px] sm:w-[330px] md:w-auto shrink-0 snap-start bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Fixed Header Layout (No overlap or clipping) */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cat.badgeColor} max-w-full`}>
                        <Icon size={14} className="shrink-0" />
                        <span className="leading-none">{cat.marathi}</span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100 shrink-0">
                        Standardized Tool
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#1a235c] transition-colors mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-100">
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                        Evaluated Parameters:
                      </p>
                      <ul className="space-y-1.5">
                        {cat.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 size={13} className="text-[#F4A16C] mt-0.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 border-t border-slate-100">
                    <span>MindMappers Validated</span>
                    <CheckCircle size={15} className="text-emerald-500" />
                  </div>
                </Card>
              );
            })}
          </div>
          <p className="md:hidden text-xs text-slate-400 mt-1 text-center">
            &larr; Swipe horizontally to explore all 4 assessments &rarr;
          </p>
        </div>

        {/* Report Overview Panel (Solid Executive Slate, NO Glassmorphism) */}
        <div className="bg-[#1a235c] text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 bg-slate-800">
                <Image 
                  src="/counselling/assessment-session.jpg"
                  alt="Students and Parents Reviewing MindMappers Report"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-bold text-slate-200">
                  Parents & students reviewing a personalised report with Prof. Dinesh Tathe
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F4A16C] bg-white/10 px-3 py-1 rounded-full inline-block">
                Diagnostic Transparency
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white">
                What the Personalised Report Includes
              </h3>
              
              <div className="space-y-2.5 pt-1">
                {reportContents.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                    <span className="w-6 h-6 rounded-lg bg-[#F4A16C] text-[#1a235c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{item.label}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-200 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Beyond The Test & Happy Parenting Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#F4A16C] flex items-center justify-center font-black mb-4 border border-amber-100">
                <Lightbulb size={22} />
              </div>
              <h4 className="text-base sm:text-xl font-black text-[#1a235c] mb-2">
                Beyond the Test — We Connect Scores with Life
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                We do not stop at scores or algorithmic graphs. We sit with the student and parents, explain every insight in warm, simple language, and connect it directly with personality development, career options, and practical daily improvements.
              </p>
            </div>
            <div className="text-xs font-bold text-[#1a235c] pt-2 flex items-center gap-1.5 border-t border-slate-200/60">
              <CheckCircle2 size={15} className="text-emerald-600" />
              100% Empathetic Human Dialogue
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-black mb-4 border border-rose-100">
                <Heart size={22} />
              </div>
              <h4 className="text-base sm:text-xl font-black text-[#1a235c] mb-2">
                Happy Parenting Tips — A Healthier Home
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Parents receive actionable guidance on how to communicate constructively with their teenagers, set the right expectations without emotional burnout, manage digital screen habits, and build a stress-free, supportive home environment.
              </p>
            </div>
            <div className="text-xs font-bold text-[#1a235c] pt-2 flex items-center gap-1.5 border-t border-slate-200/60">
              <CheckCircle2 size={15} className="text-emerald-600" />
              Harmonious Family Dynamics
            </div>
          </div>

        </div>

        {/* Assessment Direct Action Bar (WhatsApp Attached) */}
        <div className="text-center pt-2">
          <EnquiryModal 
            initialVertical="student"
            trigger={
              <Button size="lg" className="rounded-full px-8 h-12 bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                <MessageCircle size={15} className="mr-2 text-emerald-400" />
                Book an Assessment & Report Session <ArrowRight size={15} className="ml-1.5" />
              </Button>
            }
          />
        </div>

      </div>
    </section>
  );
}
