'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  HelpCircle, 
  Users, 
  Compass, 
  Brain, 
  Target, 
  ShieldCheck, 
  HeartPulse,
  Activity,
  UserCheck
} from 'lucide-react';

export interface ServiceData {
  slug: string;
  title: string;
  marathiTitle: string;
  description: string;
  detailedIntro: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  colorGradient: string; // e.g., 'from-[#1F2F78] to-[#3D57C5]'
  accentColor: string; // e.g., '#F4A16C'
  secondaryAccent: string; // e.g., 'bg-orange-50 text-[#F4A16C] border-orange-100'
  bannerImage: string;
  benefits: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
  processSteps: {
    title: string;
    description: string;
  }[];
  targetAudience: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

interface ServiceTemplateProps {
  service: ServiceData;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  const IconComponent = service.icon;

  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc] overflow-hidden">
      <Header />

      {/* 1. Creative Hero Banner */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10 bg-[#1a235c] overflow-hidden">
        {/* Background Image with Parallax Shift */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.bannerImage} 
            alt={service.title} 
            fill 
            className="object-cover object-center scale-105"
            priority
          />
        </div>
        
        {/* Advanced Overlays */}
        <div className="absolute inset-0 bg-[#1a235c]/85 backdrop-blur-[2px] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c] via-[#1a235c]/60 to-[#1a235c]/30 z-0" />
        <div className="absolute inset-0 opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        {/* Glowing Decorative Orbs */}
        <div className={`absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br ${service.colorGradient} opacity-30 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none z-0`} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4A16C] font-black text-[10px] sm:text-xs tracking-widest uppercase mb-4 shadow-xl animate-fade-in">
            <IconComponent size={14} className="shrink-0" />
            <span>Our Specialized Program</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 leading-tight">
            {service.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-black text-[#F4A16C] uppercase tracking-widest bg-white/5 py-1.5 px-5 rounded-full inline-block border border-white/10 shadow-inner">
            {service.marathiTitle}
          </p>
        </div>
      </section>

      {/* 2. Interactive Details Grid */}
      <section className="py-12 md:py-20 relative z-10 -mt-10 md:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Educational & Core Program details (8 spans) */}
            <div className="lg:col-span-8 space-y-10 md:space-y-14">
              
              {/* Card A: Deep Intro */}
              <Card className="p-6 md:p-10 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-900/5 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${service.colorGradient}`} />
                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  <div className={`w-16 h-16 rounded-[1.2rem] flex items-center justify-center bg-gradient-to-br ${service.colorGradient} text-white shrink-0 shadow-lg shadow-blue-900/10`}>
                    <IconComponent size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1a235c] mb-4 tracking-tight leading-none">
                      Program Overview
                    </h2>
                    <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed text-justify">
                      {service.detailedIntro}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card B: Program Benefits Grid */}
              <div className="space-y-6 md:space-y-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-black text-[#1a235c] tracking-tight leading-none mb-3">
                    Why Choose This Program?
                  </h2>
                  <p className="text-slate-500 font-bold text-sm tracking-wide">KEY ADVANTAGES & EXPECTED OUTCOMES</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {service.benefits.map((benefit, idx) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <Card key={idx} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex gap-4 items-start transform hover:-translate-y-1">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.colorGradient} text-white flex items-center justify-center shrink-0 shadow-md transform group-hover:rotate-6 transition-transform duration-300`}>
                          <BenefitIcon size={20} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-black text-[#1a235c] text-sm md:text-base leading-tight group-hover:text-[#F4A16C] transition-colors">{benefit.title}</h4>
                          <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Card C: Step-by-Step Process Timeline */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-black text-[#1a235c] tracking-tight leading-none mb-3">
                    Our Scientific Counseling Process
                  </h2>
                  <p className="text-slate-500 font-bold text-sm tracking-wide">A STRUCTURED PATHWAY TO DEVELOPMENT</p>
                </div>

                <div className="relative border-l-2 border-dashed border-slate-200 pl-6 sm:pl-8 ml-4 space-y-8 py-2">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot Indicator */}
                      <span className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#1a235c] text-[#1a235c] font-black text-xs sm:text-sm flex items-center justify-center z-10 group-hover:bg-[#F4A16C] group-hover:border-[#F4A16C] group-hover:text-white transition-all duration-300 shadow-md`}>
                        {idx + 1}
                      </span>
                      
                      <div className="space-y-1.5">
                        <h4 className="text-base sm:text-lg font-black text-[#1a235c] tracking-tight">{step.title}</h4>
                        <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-2xl text-justify">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact forms & Program requirements (4 spans) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Card D: Interactive Instant Booking / Inquiry Box */}
              <Card className="p-6 md:p-8 bg-gradient-to-b from-[#1a235c] to-[#121840] border-0 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white group">
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4A16C]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Activity size={20} className="text-[#F4A16C]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#F4A16C] uppercase">Secure Spot</span>
                      <h3 className="text-xl font-black tracking-tight leading-none mt-0.5">Book a Session</h3>
                    </div>
                  </div>
                  
                  <div className="h-[1px] bg-white/10 w-full" />
                  
                  <p className="text-white/80 font-medium text-xs sm:text-sm leading-relaxed">
                    Begin your transformative counseling journey with our experts. Get immediate support and flexible timing.
                  </p>

                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full h-12 rounded-full bg-gradient-to-r from-[#F4A16C] to-[#e66000] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-[#F4A16C]/20 hover:shadow-xl hover:shadow-[#F4A16C]/40 hover:-translate-y-0.5 transition-all duration-300 border-0"
                    >
                      <a href={`https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20am%20interested%20in%20booking%20a%20session%20for%20"${encodeURIComponent(service.title)}".%20Please%20guide%20me%20on%20available%20slots.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle size={16} />
                        WhatsApp Inquiry
                      </a>
                    </Button>

                    <Button 
                      asChild 
                      variant="outline"
                      className="w-full h-12 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300"
                    >
                      <a href="tel:+919822258300" className="flex items-center justify-center gap-2">
                        <Phone size={14} />
                        Call Us Directly
                      </a>
                    </Button>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Counselor Direct Helpline</span>
                    <p className="text-sm font-black text-[#F4A16C] tracking-wider mt-0.5">+91 98222 58300</p>
                  </div>
                </div>
              </Card>

              {/* Card E: Target Audience */}
              <Card className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-900/5 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.colorGradient} text-white flex items-center justify-center`}>
                      <UserCheck size={18} />
                    </div>
                    <h3 className="text-lg font-black text-[#1a235c] tracking-tight">Who Is This For?</h3>
                  </div>
                  
                  <div className="h-[1px] bg-slate-100 w-full" />
                  
                  <ul className="space-y-3">
                    {service.targetAudience.map((audience, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 size={16} className="text-[#F4A16C] shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-medium text-xs sm:text-sm leading-tight">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Creative FAQ Section (with dynamic styling) */}
      <section className="py-16 md:py-24 bg-[#f1f5f9] relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-[10px] tracking-widest uppercase mb-4 shadow-sm">
              <HelpCircle size={12} className="text-[#F4A16C]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] tracking-tight leading-none pb-1">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {service.faqs.map((faq, idx) => (
              <Card key={idx} className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <h4 className="text-base sm:text-lg font-black text-[#1a235c] mb-2 leading-snug group-hover:text-[#F4A16C] transition-colors">{faq.q}</h4>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed text-justify">{faq.a}</p>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Brand-Consistent Dynamic CTA Banner */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] bg-[#1a235c] overflow-hidden shadow-2xl px-6 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center border border-white/10">
            {/* Graphics Background */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4A16C]/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
            
            <div className="w-full md:w-3/5 text-center md:text-left relative z-20 space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 text-[#F4A16C] text-[10px] md:text-xs font-black rounded-full shadow-lg uppercase tracking-widest">
                Start Growing Today
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Unlock potential and shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">best version.</span>
              </h2>
              <p className="text-sm md:text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                Every mind is unique. Let us partner with you to discover, develop, and accelerate the ideal pathways to your goals.
              </p>
              
              <Button asChild size="lg" className="h-14 px-10 rounded-full bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] text-white hover:shadow-lg hover:shadow-[#F4A16C]/40 hover:-translate-y-1 transition-all duration-300 font-black text-sm uppercase tracking-widest border-0">
                <a href={`https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20discuss%20about%20"${encodeURIComponent(service.title)}"."`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  Let's Get Started
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
            
            <div className="w-full md:w-2/5 mt-12 md:mt-0 relative h-[250px] md:h-full md:absolute md:right-0 md:bottom-0 flex items-center justify-center md:justify-end pointer-events-none z-10 pr-0 md:pr-16">
              <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-white/5 rounded-full border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="relative w-[85%] h-[85%] bg-white rounded-full overflow-hidden border-[6px] border-white/10">
                  <Image
                    src="/parents/3d-parents-thinking.png"
                    alt="MindMappers Illustration"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
