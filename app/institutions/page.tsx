'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  School, 
  BookOpen, 
  Sparkles, 
  Users, 
  BrainCircuit, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Phone, 
  Target, 
  Heart, 
  TrendingUp, 
  ShieldCheck, 
  MessageCircle,
  FileText,
  Calendar,
  Compass,
  Smile,
  Maximize2
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { EnquiryModal } from '@/components/enquiry-modal';

// The 6 School & College Programmes
const schoolProgrammes = [
  {
    num: '01',
    title: 'Career Awareness Sessions',
    marathi: 'करिअर जाणीव जागृती सत्रे',
    desc: 'Introducing students to 350+ career avenues, realistic subject combinations, emerging modern degrees, and future-proof professions.',
    detailed: 'Helps students move beyond traditional herd-mentality streams and discover authentic possibilities in technology, commerce, humanities, vocational, and creative fields.',
    icon: Target,
    badge: 'Popular for 9th-12th',
    accentColor: 'text-[#1a235c] bg-blue-50 border-blue-200'
  },
  {
    num: '02',
    title: 'Motivation & Study Skills',
    marathi: 'अभ्यास कौशल्ये व प्रेरणा',
    desc: 'Scientific time management, overcoming procrastination, memory techniques, note-taking frameworks, and structured daily routines.',
    detailed: 'Transforms academic anxiety into study discipline through actionable daily habit conditioning and distraction management techniques.',
    icon: BookOpen,
    badge: 'Academic Excellence',
    accentColor: 'text-amber-800 bg-amber-50 border-amber-200'
  },
  {
    num: '03',
    title: 'EQ and Personality Development',
    marathi: 'भावनिक संतुलन व व्यक्तिमत्त्व विकास',
    desc: 'Cultivating emotional balance, positive body language, stage fear eradication, active listening, and social communication skills.',
    detailed: 'Empowers students with interpersonal maturity, healthy peer relationships, impulse control, and unshakable self-confidence.',
    icon: BrainCircuit,
    badge: 'Holistic Growth',
    accentColor: 'text-purple-800 bg-purple-50 border-purple-200'
  },
  {
    num: '04',
    title: 'Parent–Teacher Interaction',
    marathi: 'पालक-शिक्षक संयुक्त मार्गदर्शन',
    desc: 'Sensitizing parents and educators to generational mindset shifts, exam pressure relief, cyber parenting, and constructive encouragement.',
    detailed: 'Builds a healthy triangular support system between student, parent, and teachers, replacing unrealistic pressure with mutual trust.',
    icon: Users,
    badge: 'Triangular Alignment',
    accentColor: 'text-rose-800 bg-rose-50 border-rose-200'
  },
  {
    num: '05',
    title: 'Exam Mindset & Confidence',
    marathi: 'परीक्षा पूर्व मानसिकता व आत्मविश्वास',
    desc: 'Calming pre-board and entrance test anxieties, peak performance mindset conditioning, and realistic goal setting without fear of failure.',
    detailed: 'Prepares students mentally to stay calm, focused, and composed during high-stakes board examinations and entrance tests.',
    icon: Award,
    badge: 'Exam Readiness',
    accentColor: 'text-emerald-800 bg-emerald-50 border-emerald-200'
  },
  {
    num: '06',
    title: 'Customised Age-Group Modules',
    marathi: 'वयोगटानुसार विशेष सत्रे',
    desc: 'Tailor-made modules customized specifically for middle school, high school, senior college, or competitive exam academy batches.',
    detailed: 'Customized content for specific classes—from 10th stream choices to graduation-level competitive exam readiness.',
    icon: Sparkles,
    badge: 'Tailored Framework',
    accentColor: 'text-indigo-800 bg-indigo-50 border-indigo-200'
  }
];

// Stage-Wise Programmes
const audienceStages = [
  {
    stage: '8th, 9th & 10th Standards',
    marathi: '८ वी, ९ वी व १० वी चे विद्यार्थी',
    focus: 'Foundational Stream Selection & Self-Discovery',
    topics: [
      'Science vs Commerce vs Arts vs Polytechnic Diplomas',
      'Understanding personal aptitude beyond marks',
      'Overcoming mobile & social media distraction',
      'Study planning for 10th SSC / CBSE Board Examinations'
    ],
    accent: 'bg-blue-50 border-blue-200 text-[#1a235c]'
  },
  {
    stage: '11th & 12th Standards (Junior College)',
    marathi: '११ वी व १२ वी (कनिष्ठ महाविद्यालय)',
    focus: 'Entrance Exam Strategy & Realistic Career Planning',
    topics: [
      'JEE, NEET, MHT-CET, CA Foundation, CLAT, NIFT roadmaps',
      'Handling intense entrance coaching pressure & burnout',
      'Alternative & emerging backup career options',
      'Personality refinement & emotional balance'
    ],
    accent: 'bg-amber-50 border-amber-200 text-amber-900'
  },
  {
    stage: 'Degree Colleges & Coaching Academies',
    marathi: 'पदवी महाविद्यालय व स्पर्धा परीक्षा वर्ग',
    focus: 'Career Transition, Competitive Exams & Employability',
    topics: [
      'Preparing for MPSC / UPSC / Banking during graduation',
      'Corporate interview skills, resume & communication',
      'Higher education in India vs Abroad (Post-Graduation)',
      'Developing professional resilience and career roadmap'
    ],
    accent: 'bg-emerald-50 border-emerald-200 text-emerald-900'
  }
];

// Why Schools Invite Us
const whySchoolsInviteUs = [
  {
    step: '01',
    title: 'Interactive Dialogue Style',
    marathi: 'संवादात्मक व रंजक पद्धत',
    desc: 'Two-way dialogues, live demonstrations, and relatable real-world stories instead of boring one-way lectures.',
    icon: Smile
  },
  {
    step: '02',
    title: 'Student-Friendly Bilingual Delivery',
    marathi: 'सहज व समजेल अशी मराठी-इंग्रजी भाषा',
    desc: 'Comfortable delivery in Marathi & English that connects naturally with today’s youth psychology.',
    icon: Heart
  },
  {
    step: '03',
    title: 'Actionable Worksheets & Takeaways',
    marathi: 'प्रत्यक्ष कृती आराखडा व स्वाध्याय',
    desc: 'Concrete worksheets, study habit roadmaps, and immediate self-evaluation tools for every attendee.',
    icon: TrendingUp
  },
  {
    step: '04',
    title: 'Parent & Faculty Relevance',
    marathi: 'पालक व शिक्षकांना उपयुक्त दृष्टिकोन',
    desc: 'Addresses real campus challenges: mobile addiction, academic stress, peer comparisons, and indiscipline.',
    icon: Users
  },
  {
    step: '05',
    title: 'Proven Practical Value',
    marathi: 'दीर्घकालीन उपयुक्तता व विश्वास',
    desc: 'Trusted by hundreds of schools, junior colleges, and prominent educational trusts across Maharashtra.',
    icon: ShieldCheck
  }
];

// 4-Step Partnership Process
const partnershipSteps = [
  {
    step: '01',
    title: 'Institutional Discussion',
    marathi: 'प्राथमिक चर्चा व उद्दिष्टे',
    desc: 'Connect with our team to discuss student batch size, specific challenges, academic stream, and preferred dates.'
  },
  {
    step: '02',
    title: 'Customised Curriculum',
    marathi: 'अभ्यासक्रम व सत्र रचना',
    desc: 'We design a session tailored specifically for your campus: 2-hour keynote, half-day workshop, or full-day campus event.'
  },
  {
    step: '03',
    title: 'High-Energy Campus Workshop',
    marathi: 'प्रत्यक्ष कार्यशाळा व संवाद',
    desc: 'Prof. Dinesh Tathe conducts the engaging auditorium seminar with live interactions, real-life examples, and student Q&A.'
  },
  {
    step: '04',
    title: 'Worksheets & Follow-Up',
    marathi: 'कृती आराखडा व मार्गदर्शन',
    desc: 'Students receive concrete next steps, worksheets, and individual counselling access if parents request personalized testing.'
  }
];

// Campus Glimpses
const campusPhotos = [
  {
    title: 'Campus Career Seminar',
    src: '/counselling/service-school-workshops.jpg',
    category: 'Auditorium Session'
  },
  {
    title: 'Inspiring Keynote Session',
    src: '/counselling/service-inspiring-sessions.jpg',
    category: 'Youth Motivation'
  },
  {
    title: 'Stage Presence & Guidance',
    src: '/outreach/stage-sessions-guidance.jpg',
    category: 'Stage Keynote'
  },
  {
    title: 'Institutional Felicitation',
    src: '/outreach/recognition-invited-presence.jpg',
    category: 'Institutional Honour'
  },
  {
    title: 'Student & Faculty Interaction',
    src: '/counselling/school-college-session.jpg',
    category: 'Campus Interaction'
  },
  {
    title: 'Community Career Outreach',
    src: '/outreach/community-interaction.jpg',
    category: 'Public Outreach'
  }
];

export default function InstitutionsPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const handleWhatsAppBooking = (programmeName?: string) => {
    const text = programmeName
      ? `Hello Prof. Dinesh Tathe & MindMappers Team! 🌟\n\nWe would like to invite you for the session: "${programmeName}" at our school/college. Please share available dates and details.`
      : 'Hello Prof. Dinesh Tathe & MindMappers Team! 🌟\n\nWe would like to invite MindMappers for an institutional career awareness and student development workshop at our school/college campus.';
    window.open(`https://wa.me/919822258300?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 w-full max-w-full overflow-x-hidden selection:bg-[#F4A16C]/30">
      <Header />

      {/* 1. INSTITUTIONAL HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#1a235c] via-[#212b6b] to-[#1a235c] text-white overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        
        {/* Decorative Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4A16C]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F4A16C] text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
            <School size={14} className="text-[#F4A16C]" />
            PROGRAMMES FOR SCHOOLS, COLLEGES & COACHING INSTITUTES
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-5 text-white max-w-5xl mx-auto">
            Inspiring Generations. <br />
            <span className="text-white">Guidance That Goes </span>
            <span className="text-[#F4A16C]">Beyond Marks.</span>
          </h1>

          {/* Marathi Subtitle */}
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#F4A16C] mb-4 max-w-3xl mx-auto">
            शाळा, कनिष्ठ व वरिष्ठ महाविद्यालये आणि कोचिंग क्लासेससाठी विशेष करिअर जाणीव जागृती व व्यक्तिमत्त्व विकास व्याख्याने.
          </p>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            MindMappers conducts dynamic, interactive campus sessions designed to support career awareness (350+ avenues), study discipline, exam confidence, emotional growth, and parent-teacher alignment.
          </p>

          {/* Action CTAs (WhatsApp Connected) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Button 
              onClick={() => handleWhatsAppBooking()}
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Invite Session via WhatsApp
            </Button>

            <Button 
              onClick={() => setEnquiryModalOpen(true)}
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#F4A16C] hover:bg-[#FF6B00] text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl"
            >
              Submit Campus Request
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-13 px-7 rounded-full border-white/20 bg-white/10 hover:bg-white hover:text-[#1a235c] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <a href="/asset/MindMappers-Career-Counselling-Brochure.pdf" download="MindMappers_Career_Counselling_Brochure_Updated_Media_2026.pdf">
                <Download size={15} className="mr-2 text-[#F4A16C]" /> Download School Brochure (PDF)
              </a>
            </Button>
          </div>

          {/* Impact Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-[#F4A16C]">50+</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Institutions Partnered</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-white">15,000+</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Students Guided</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-[#F4A16C]">350+</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Career Options Covered</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-white">100% Bilingual</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Marathi & English</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE 6 FLAGSHIP CAMPUS PROGRAMMES */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles size={13} className="text-[#F4A16C]" />
              Holistic Student Enrichment
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Six Flagship <span className="text-[#1a235c]">Campus Programmes</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              शाळा व महाविद्यालयांसाठी ६ विशेष शैक्षणिक व प्रेरणादायी कार्यशाळा
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Every session connects deeply with youth mindset, answers real doubts, and leaves students with concrete worksheets and self-awareness tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {schoolProgrammes.map((prog) => {
              const Icon = prog.icon;
              return (
                <Card 
                  key={prog.num}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-xl bg-[#1a235c] text-white font-black text-xs flex items-center justify-center shadow-xs">
                        {prog.num}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${prog.accentColor}`}>
                        <Icon size={12} /> {prog.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#1a235c] transition-colors mb-1 leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-xs font-bold text-[#F4A16C] mb-3">
                      {prog.marathi}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                      {prog.desc}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-2">
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        {prog.detailed}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button 
                      onClick={() => handleWhatsAppBooking(prog.title)}
                      className="text-xs font-black text-[#1a235c] hover:text-[#F4A16C] flex items-center gap-1 transition-colors"
                    >
                      Book this Session <ArrowRight size={13} />
                    </button>
                    <CheckCircle2 size={15} className="text-emerald-500" />
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. STAGE-WISE PROGRAMMES BREAKDOWN */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden w-full max-w-full border-y border-slate-200/80" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <Compass size={13} className="text-[#F4A16C]" />
              Targeted Age-Group Customisation
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Programmes by <span className="text-[#1a235c]">Academic Stage</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              शालेय ते पदवी स्तरापर्यंत प्रत्येक वयोगटासाठी योग्य मार्गदर्शन
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Different age groups face fundamentally different challenges. We customize our presentation language, examples, and roadmaps accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {audienceStages.map((stageItem, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-3 ${stageItem.accent}`}>
                    {stageItem.focus}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-0.5">
                    {stageItem.stage}
                  </h3>

                  <p className="text-xs font-bold text-[#F4A16C] mb-5">
                    {stageItem.marathi}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                      Core Session Highlights:
                    </span>
                    {stageItem.topics.map((top, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{top}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => handleWhatsAppBooking(stageItem.stage)}
                  className="w-full h-11 rounded-xl bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} /> Enquire for this Batch
                </Button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY SCHOOLS INVITE US YEAR AFTER YEAR */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <ShieldCheck size={13} className="text-[#F4A16C]" />
              Institutional Trust & Excellence
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Why Institutions <span className="text-[#1a235c]">Invite Us Year After Year</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              आमच्या कार्यशाळांना शाळा व महाविद्यालयांची पहिली पसंती का?
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Our interactive methodology connects deeply with today’s generation while strictly respecting institutional values and teacher guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {whySchoolsInviteUs.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.step}
                  className="bg-slate-50 rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:bg-white hover:border-[#1a235c]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1a235c] font-black text-xs flex items-center justify-center border border-blue-100">
                        {item.step}
                      </span>
                      <Icon size={18} className="text-[#F4A16C]" />
                    </div>

                    <h4 className="text-sm font-black text-slate-900 mb-0.5">
                      {item.title}
                    </h4>

                    <p className="text-[11px] font-bold text-[#F4A16C] mb-2.5">
                      {item.marathi}
                    </p>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span>MindMappers Hallmark</span>
                    <CheckCircle2 size={13} className="text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. HOW CAMPUS COLLABORATION WORKS (4-STEP PATHWAY) */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#1a235c] text-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F4A16C] font-bold text-xs uppercase tracking-wider mb-3">
              <Calendar size={13} />
              Simple 4-Step Process
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
              How Institutions <span className="text-[#F4A16C]">Partner With Us</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              शाळा व महाविद्यालयांमध्ये सत्र आयोजित करण्याची सोपी पद्धत
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              From the initial telephonic briefing to the energetic auditorium finale and post-session worksheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipSteps.map((s) => (
              <div 
                key={s.step}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-2xl bg-[#F4A16C] text-slate-950 font-black text-sm flex items-center justify-center mb-4">
                    {s.step}
                  </span>

                  <h3 className="text-base font-black text-white mb-1">
                    {s.title}
                  </h3>

                  <p className="text-xs font-bold text-[#F4A16C] mb-3">
                    {s.marathi}
                  </p>

                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-bold text-slate-400">
                  Transparent & Hassle-Free
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => handleWhatsAppBooking()}
              size="lg"
              className="h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle size={17} /> Connect with Prof. Dinesh Tathe on WhatsApp
            </Button>
          </div>

        </div>
      </section>

      {/* 6. CAMPUS PHOTO GLIMPSES & AUDITORIUM SESSIONS */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles size={13} className="text-[#F4A16C]" />
              Real Moments Across Maharashtra
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Campus Sessions & <span className="text-[#1a235c]">Auditorium Glimpses</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              विविध शैक्षणिक संस्थांमधील प्रेरणादायी व्याख्याने व विद्यार्थी उपस्थिती
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Photographs captured across secondary schools, junior colleges, engineering institutes, and public auditorium summits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusPhotos.map((photo, pIdx) => (
              <div 
                key={pIdx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={() => setLightboxImg({ src: photo.src, title: photo.title })}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase text-white bg-slate-900/80 px-2.5 py-1 rounded-full">
                      {photo.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-black text-slate-900 mb-0.5">
                    {photo.title}
                  </h4>
                  <p className="text-xs font-bold text-[#F4A16C]">
                    MindMappers Educational Outreach
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PRINT MEDIA RECOGNITION (LOKMAT & JANPRAVAS 2026) */}
      <section className="py-14 sm:py-20 bg-[#f8fafc] relative overflow-hidden w-full max-w-full border-t border-slate-200/80" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#1a235c] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs inline-block mb-2">
              Print Media Endorsement
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
              Trusted by Leading News Dailies
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Extensive coverage in Lokmat and Janpravas highlighting our guidance at Sharadchandra Pawar College of Engineering, Hadapsar, Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full inline-block mb-3 border border-red-100">
                  Lokmat • 24 October 2026
                </span>
                <h4 className="text-sm font-black text-slate-900 mb-2 leading-snug">
                  पदवी शिक्षणासोबतच स्पर्धा परीक्षांची तयारी करा : दिनेश ताठे यांचे मार्गदर्शन
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Sharadchandra Pawar College of Engineering (Hadapsar, Pune) featured Prof. Dinesh Tathe’s guidance on early competitive examination planning, time management, and emotional resilience.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                Verified News Clipping Available in 2026 Brochure
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full inline-block mb-3 border border-amber-100">
                  Janpravas • 24 October 2026
                </span>
                <h4 className="text-sm font-black text-slate-900 mb-2 leading-snug">
                  पदवीच्या काळातच स्पर्धा परीक्षांची तयारी करावी : प्रा. दिनेश ताठे
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  State-level feature emphasizing Prof. Dinesh Tathe’s keynote session on academic goal clarity, scientific aptitude mapping, and building self-confidence during graduation.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                Verified News Clipping Available in 2026 Brochure
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FINAL INSTITUTIONAL BOOKING ACTION */}
      <section className="py-16 md:py-24 bg-[#1a235c] text-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">
            Schedule a Session for Your <span className="text-[#F4A16C]">Students Today</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-4">
            तुमच्या शाळेमध्ये किंवा महाविद्यालयात प्रेरणादायी करिअर कार्यशाळेचे आयोजन करा.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Connect directly with Prof. Dinesh Tathe to discuss suitable dates, themes, and arrangements for your upcoming academic semester.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button 
              onClick={() => handleWhatsAppBooking()}
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} /> Chat with Director on WhatsApp
            </Button>

            <Button 
              onClick={() => setEnquiryModalOpen(true)}
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#F4A16C] hover:bg-[#FF6B00] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg"
            >
              Submit Institutional Request
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-7 rounded-full border-white/20 bg-white/10 hover:bg-white hover:text-[#1a235c] text-white font-bold text-xs uppercase tracking-wider">
              <a href="tel:+919822258300">
                <Phone size={14} className="mr-2 text-[#F4A16C]" /> Call: +91 9822258300
              </a>
            </Button>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Serving Pune • Satara • Chhatrapati Sambhajinagar • Nanded and across Maharashtra
          </p>

        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!lightboxImg} onOpenChange={(open) => !open && setLightboxImg(null)}>
        <DialogContent className="max-w-3xl p-2 bg-slate-950 border-slate-800 text-white">
          {lightboxImg && (
            <div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image 
                  src={lightboxImg.src}
                  alt={lightboxImg.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm font-bold text-slate-200 mt-2 pb-1">
                {lightboxImg.title}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Global WhatsApp Connected Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen}
        onOpenChange={setEnquiryModalOpen}
        initialVertical="school"
      />

      <Footer />
    </main>
  );
}
