'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BrochuresSection, brochuresData } from '@/components/brochures-view';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Building2, 
  GraduationCap, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Printer,
  Calendar,
  Layers,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { EnquiryModal } from '@/components/enquiry-modal';

// Detailed Page-by-Page Table of Contents
const counsellingTOC = [
  { page: 'Page 01', title: 'Brand Vision & Philosophy', desc: 'Shaping Your Best Version • Discover Potential • Guidance beyond marks.' },
  { page: 'Page 02', title: 'The 4-Step Guidance Process', desc: 'Step 1: Understand • Step 2: Assess • Step 3: Interpret • Step 4: Plan & Follow Up.' },
  { page: 'Page 03', title: 'IQ vs EQ Development (Our USP)', desc: 'Emotional intelligence, exam panic handling, self-awareness & parenting tips.' },
  { page: 'Page 04', title: 'Assessments & Diagnostic Reports', desc: 'IQ cognitive ability, EQ emotional skills, aptitude mapping & psychometrics.' },
  { page: 'Page 05', title: 'Programmes for Schools & Colleges', desc: 'Career awareness (350+ options), study motivation, exam confidence & EQ.' },
  { page: 'Page 06', title: 'Invited Sessions & Community Outreach', desc: 'Institutional honours, grassroots seminars, rural guidance & stage keynotes.' },
  { page: 'Page 07', title: 'Print Media Coverage & Public Trust', desc: 'Verified news clippings from Lokmat (24 Oct 2026) & Janpravas.' },
  { page: 'Page 08', title: 'Founder Profile & Centre Locations', desc: 'Prof. Dinesh Tathe credentials, Pune, Satara, Chh. Sambhajinagar, Nanded.' }
];

const corporateTOC = [
  { page: 'Pages 01-02', title: 'Corporate Philosophy & Vertical Overview', desc: 'Build Better Minds • Strengthen Teams • Transform Workplaces.' },
  { page: 'Pages 03-04', title: 'Six Key Areas of Employee Development', desc: 'Mental wellbeing, work efficiency, work-life balance, ethics, sales & financial wellness.' },
  { page: 'Pages 05-06', title: '10 Small Training Modules (12 Hours)', desc: 'Detailed 10-module curriculum with specific hours, bilingual outcomes & activities.' },
  { page: 'Page 07', title: 'Interactive Learning Activities & Games', desc: 'Team Tower, Salary Survival Budget Game, Stress Bucket, Ethics Courtroom.' },
  { page: 'Page 08', title: 'Industry-Specific Solutions', desc: 'Tailored roadmaps for IT & Software, Automobile, BFSI & Healthcare.' },
  { page: 'Page 09', title: 'Corporate Packages & Transparent Pricing', desc: 'Essential (₹30,000), Growth 360 (₹50,000), Transformation (₹4,000/employee).' },
  { page: 'Page 10', title: 'Lead Trainer Profile & Booking Process', desc: 'Prof. Dinesh Tathe corporate experience, past workshop gallery & contact details.' }
];

export default function BrochuresPage() {
  const [activeTab, setActiveTab] = useState<'counselling' | 'corporate'>('counselling');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleWhatsAppKitRequest = (docName: string) => {
    const text = `Hello Prof. Dinesh Tathe & MindMappers Team! 🌟\n\nI am reviewing the official brochure: "${docName}". I would like to request additional details and discuss a tailored presentation for our institution/organization.`;
    window.open(`https://wa.me/919822258300?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 w-full max-w-full overflow-x-hidden selection:bg-[#F4A16C]/30">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#1a235c] via-[#212b6b] to-[#1a235c] text-white overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        
        {/* Subtle Brand Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4A16C]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F4A16C] text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="text-[#F4A16C]" />
            OFFICIAL PUBLICATIONS & RESOURCE CENTER • 2026 EDITIONS
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] mb-5 text-white max-w-4xl mx-auto">
            MindMappers® Official <br />
            <span className="text-[#F4A16C]">Reference Brochures</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-bold text-[#F4A16C] mb-4 max-w-2xl mx-auto">
            अधिकृत माहितीपत्रके व अभ्यासक्रम तपशील — येथे मोफत डाऊनलोड करा.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            Access and download our official reference documentation covering scientific career assessment frameworks, school workshop modules, and corporate employee transformation packages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="#brochure-cards"
              className="h-11 px-6 rounded-full bg-[#F4A16C] hover:bg-[#FF6B00] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
            >
              <Download size={15} /> Download Brochures Below
            </a>

            <Button 
              onClick={() => handleWhatsAppKitRequest('General Brochure Inquiry')}
              variant="outline"
              className="h-11 px-6 rounded-full border-white/20 bg-white/10 hover:bg-white hover:text-[#1a235c] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <MessageCircle size={15} className="mr-1.5 text-[#25D366]" /> Chat on WhatsApp
            </Button>
          </div>

        </div>
      </section>

      {/* 2. THE 2 OFFICIAL REFERENCE BROCHURES (SHOWCASE SECTION) */}
      <div id="brochure-cards">
        <BrochuresSection />
      </div>

      {/* 3. DETAILED TABLE OF CONTENTS & PAGE-BY-PAGE INDEX */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden w-full max-w-full border-y border-slate-200/80" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <BookOpen size={13} className="text-[#F4A16C]" />
              Transparent Curriculum Outline
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Page-by-Page <span className="text-[#1a235c]">Brochure Index</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              दोन्ही माहितीपत्रकांमध्ये नक्की काय समाविष्ट आहे?
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Explore the complete structure before downloading. Every page contains verified, practical guidance without fluff or generic content.
            </p>
          </div>

          {/* Interactive Document Switcher Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-slate-200/70 rounded-full border border-slate-300/60 max-w-full overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('counselling')}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === 'counselling'
                    ? 'bg-[#1a235c] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap size={15} />
                <span>Career Counselling (8 Pages)</span>
              </button>

              <button
                onClick={() => setActiveTab('corporate')}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === 'corporate'
                    ? 'bg-[#1a235c] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 size={15} />
                <span>Corporate Training (10 Pages)</span>
              </button>
            </div>
          </div>

          {/* Table of Contents Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {(activeTab === 'counselling' ? counsellingTOC : corporateTOC).map((item, idx) => (
              <Card 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a235c] font-black text-xs flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#1a235c] group-hover:text-white transition-colors">
                  {idx + 1}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-[#1a235c] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                      {item.page}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Direct Download Button for Active Document */}
          <div className="text-center mt-10">
            {activeTab === 'counselling' ? (
              <Button asChild size="lg" className="h-12 px-8 rounded-full bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                <a href="/asset/MindMappers-Career-Counselling-Brochure.pdf" download="MindMappers_Career_Counselling_Brochure_Updated_Media_2026.pdf">
                  <Download size={15} className="mr-2" /> Download Career Counselling PDF (8 Pages • 1.2 MB)
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" className="h-12 px-8 rounded-full bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                <a href="/asset/MindMappers-Corporate-Training-Brochure.pdf" download="MindMappers_Corporate_Training_Brochure.pdf">
                  <Download size={15} className="mr-2" /> Download Corporate Training PDF (10 Pages • 2.1 MB)
                </a>
              </Button>
            )}
          </div>

        </div>
      </section>

      {/* 4. HARD-COPY BROCHURE OR INSTITUTIONAL KIT REQUEST BANNER */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#1a235c] text-[10px] font-black uppercase tracking-wider mb-3">
                <Printer size={13} className="text-[#F4A16C]" /> For Principals, Trustees & HR Directors
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                Need a Physical Printed Copy for Your Board?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                If your school management, academic trust, or corporate HR committee requires a high-resolution printed hard copy or a customized slide deck presentation, connect with us directly. We will courier the official pack or share the executive deck via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Button 
                onClick={() => handleWhatsAppKitRequest('Physical Printed Brochure Pack Request')}
                className="h-12 px-7 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> Request via WhatsApp
              </Button>

              <Button 
                onClick={() => setEnquiryModalOpen(true)}
                variant="outline"
                className="h-12 px-7 rounded-xl border-slate-200 text-slate-800 hover:bg-white font-bold text-xs uppercase tracking-wider"
              >
                Submit Delivery Address
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY WE BELIEVE IN TRANSPARENT DOCUMENTATION */}
      <section className="py-14 sm:py-20 bg-[#1a235c] text-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-2xl sm:text-4xl font-black mb-3 text-white tracking-tight">
            Guidance Built on <span className="text-[#F4A16C]">Ethics & Authenticity</span>
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            We do not use generic promises or exaggerated outcomes. Our brochures reflect our actual curriculum, psychometric methodology, and real newspaper clippings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <ShieldCheck size={22} className="text-[#F4A16C] mb-3" />
              <h4 className="text-sm font-black text-white mb-1">Standardized Frameworks</h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Tools based on validated psychometric standards covering cognitive IQ, emotional EQ, and RIASEC aptitude.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <Layers size={22} className="text-[#F4A16C] mb-3" />
              <h4 className="text-sm font-black text-white mb-1">Structured 10 Modules</h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Clear 12-hour corporate modular curriculum with hands-on activities, not endless slide presentations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <Phone size={22} className="text-[#F4A16C] mb-3" />
              <h4 className="text-sm font-black text-white mb-1">Direct Director Access</h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Sessions conducted directly by Prof. Dinesh Tathe with personalized attention for every student and team.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button asChild size="lg" className="h-12 px-8 rounded-full bg-[#F4A16C] hover:bg-[#FF6B00] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
              <Link href="/contact">
                Visit Our Centres in Pune, Satara, Chh. Sambhajinagar & Nanded <ArrowRight size={15} className="ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Global WhatsApp Connected Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen}
        onOpenChange={setEnquiryModalOpen}
      />

      <Footer />
    </main>
  );
}
