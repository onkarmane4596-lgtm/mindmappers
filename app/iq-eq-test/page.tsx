'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight,
  MessageCircle,
  Brain,
  Target,
  ShieldCheck,
  HeartPulse,
  Compass,
  BookOpen,
  TrendingUp,
  Award,
  Cpu,
  Clock,
  CheckCircle2,
  Users
} from 'lucide-react';

export default function IQEQTestPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      
      {/* Page Header Banner */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10 bg-[#1a235c] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero/slider/3.jpeg" 
            alt="MindMappers IQ & EQ Assessment" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#1a235c]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c] via-[#1a235c]/60 to-[#1a235c]/30" />
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F4A16C]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-[#F4A16C] font-bold text-xs tracking-widest uppercase mb-4 opacity-90">
             <span>Home</span> <span className="text-white/30">•</span> <span>Assessments</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 leading-tight">
            IQ & EQ Assessment
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-black text-[#F4A16C] uppercase tracking-widest bg-white/5 py-1.5 px-5 rounded-full inline-block border border-white/10 shadow-inner">
            आमच्या बुद्धिमापन व भावनांक चाचण्या
          </p>
        </div>
      </section>

      {/* Double Lens Scientific Intro Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight pb-2">
              The Double Lens <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">of Human Potential</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              True capability combines raw intellect (IQ) with deep emotional resilience (EQ). Discover how these two pillars define ultimate personal, academic, and career success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* IQ Column */}
            <Card className="group relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1F2F78] to-[#3D57C5] text-white overflow-hidden shadow-xl shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 border-0">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-[#1a235c] mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                  <Cpu size={32} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-1 tracking-tight">Intelligence Quotient (IQ)</h3>
                <p className="text-xs font-bold text-[#F4A16C] uppercase tracking-widest mb-6">बुद्धिमापन चाचणी (बुद्ध्यांक)</p>
                
                <p className="text-white/80 font-medium text-sm leading-relaxed mb-8">
                  IQ measures essential cognitive operations—including logical reasoning, mathematical proficiency, structural pattern extraction, spatial mapping, and verbal recall. It represents the logical computing capacity of the mind.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10 mt-auto">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-[#F4A16C]">Analytical Domains</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Logical Core Reasoning',
                      'Quantitative Operations',
                      'Visuo-Spatial Ability',
                      'Pattern Classification'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-white/90 font-semibold">
                        <CheckCircle2 size={16} className="text-[#F4A16C] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* EQ Column */}
            <Card className="group relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#F4A16C] to-[#FF6B00] text-white overflow-hidden shadow-xl shadow-orange-950/10 transition-all duration-500 hover:-translate-y-2 border-0">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white text-[#FF6B00] mb-8 shadow-lg transform group-hover:-rotate-6 transition-transform duration-500">
                  <HeartPulse size={32} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-1 tracking-tight">Emotional Quotient (EQ)</h3>
                <p className="text-xs font-bold text-[#1a235c] uppercase tracking-widest mb-6">भावनांक चाचणी (भावना सूचकांक)</p>
                
                <p className="text-white/80 font-medium text-sm leading-relaxed mb-8">
                  EQ quantifies the capacity to identify, regulate, synthesize, and leverage emotional intelligence inside real-world environments. It facilitates adaptive resilience, active situational empathy, and effective peer relationships.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10 mt-auto">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-[#1a235c]">Emotional Domains</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Internal Self-Regulation',
                      'Active Social Empathy',
                      'Situational Communication',
                      'Stress Tolerance'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-white/90 font-semibold">
                        <CheckCircle2 size={16} className="text-[#1a235c] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Assessment Selector Grid */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A16C]/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a235c] mb-4 tracking-tight">
              Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Assessments</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#F4A16C] uppercase tracking-widest mb-4">आमच्या तज्ज्ञ चाचण्या</p>
            <p className="text-sm md:text-lg text-slate-600 font-medium max-w-xl mx-auto">
              Select an assessment tailored to target specific strengths, unlock logical talents, or develop profound emotional balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* IQ Assessment Card */}
            <Card className="group relative p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#1F2F78] to-[#3D57C5] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#1F2F78] to-[#3D57C5] text-white shadow-lg shadow-blue-900/20 transform group-hover:scale-110 transition-transform duration-500">
                    <Brain size={28} />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                    <Clock size={12} className="text-[#1F2F78]" />
                    <span>60 Minutes</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#1a235c] mb-1 tracking-tight">IQ Assessment</h3>
                <p className="text-xs font-bold text-[#F4A16C] uppercase tracking-widest mb-6">बुद्धिमत्ता चाचणी</p>
                
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-grow">
                  A comprehensive cognitive assessment structured to gauge critical reasoning, numeric processing speed, abstract spatial structures, and verbal operations.
                </p>

                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <h4 className="font-bold text-xs text-[#1a235c] uppercase tracking-widest mb-4">Evaluation Modules</h4>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Logical Pattern Sequencing',
                      'Mathematical Problem Solving',
                      'Verbal Comprehension Scale',
                      'Visuo-Spatial Manipulation',
                      'Active Structural Inference'
                    ].map((section, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 bg-[#1F2F78] rounded-full shrink-0" />
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full h-12 rounded-2xl bg-[#1a235c] hover:bg-[#3D57C5] text-white font-black text-xs sm:text-sm uppercase tracking-widest border-0 flex items-center justify-center gap-2"
                    asChild
                  >
                    <a 
                      href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20am%20interested%20in%20booking%20the%20IQ%20Assessment.%20Please%20guide%20me%20with%20available%20slots." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book IQ Assessment
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* EQ Assessment Card */}
            <Card className="group relative p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-orange-950/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#F4A16C] to-[#FF6B00] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#F4A16C] to-[#FF6B00] text-white shadow-lg shadow-orange-500/20 transform group-hover:scale-110 transition-transform duration-500">
                    <HeartPulse size={28} />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                    <Clock size={12} className="text-[#FF6B00]" />
                    <span>45 Minutes</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#1a235c] mb-1 tracking-tight">EQ Assessment</h3>
                <p className="text-xs font-bold text-[#F4A16C] uppercase tracking-widest mb-6">भावनांक चाचणी</p>
                
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-grow">
                  A high-fidelity psychometric evaluation mapping stress boundaries, interpersonal communication flow, empathetic intelligence, and internal resilience.
                </p>

                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <h4 className="font-bold text-xs text-[#1a235c] uppercase tracking-widest mb-4">Evaluation Modules</h4>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Self-Awareness Mapping',
                      'Emotional Self-Management',
                      'Active Empathy & Social Quotient',
                      'Interpersonal Collaboration Core',
                      'Internal Motivation Scales'
                    ].map((section, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full shrink-0" />
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] hover:shadow-lg hover:shadow-[#F4A16C]/30 text-white font-black text-xs sm:text-sm uppercase tracking-widest border-0 flex items-center justify-center gap-2"
                    asChild
                  >
                    <a 
                      href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20am%20interested%20in%20booking%20the%20EQ%20Assessment.%20Please%20guide%20me%20with%20available%20slots." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book EQ Assessment
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight pb-2">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Benefits</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Unlock a scientifically grounded profile that optimizes academic choices, boosts career performance, and nurtures robust self-awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Self-Discovery',
                description: 'Understand cognitive benchmarks and build deep self-regulation schemas for everyday life.',
                icon: Brain,
                color: 'from-[#1F2F78] to-[#3D57C5]'
              },
              {
                title: 'Career Guidance',
                description: 'Establish objective mappings between logical abilities and viable, highly-rewarding career streams.',
                icon: Compass,
                color: 'from-[#F4A16C] to-[#FF6B00]'
              },
              {
                title: 'Academic Planning',
                description: 'Determine highly-compatible study disciplines and reduce stream friction early in development.',
                icon: BookOpen,
                color: 'from-[#1F2F78] to-[#3D57C5]'
              },
              {
                title: 'Personal Development',
                description: 'Refine critical soft-skills, regulate stress under pressure, and build robust communication cycles.',
                icon: HeartPulse,
                color: 'from-[#F4A16C] to-[#FF6B00]'
              },
              {
                title: 'Goal Setting',
                description: 'Establish actionable and highly scientific goals that align completely with verified talent metrics.',
                icon: Target,
                color: 'from-[#1F2F78] to-[#3D57C5]'
              },
              {
                title: 'Future Success',
                description: 'Nurture balanced logical and emotional capacities to secure long-term vocational and social achievements.',
                icon: TrendingUp,
                color: 'from-[#F4A16C] to-[#FF6B00]'
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${benefit.color} text-white mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-500`}>
                    <benefit.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-black text-[#1a235c] mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curved Bottom CTA Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] bg-[#1a235c] overflow-hidden shadow-2xl shadow-blue-900/20 px-6 pt-12 pb-0 md:px-16 md:py-20 flex flex-col md:flex-row items-center border border-slate-100/10">
             
             {/* Background Effects */}
             <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
             <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4A16C]/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

             {/* Text Content */}
             <div className="w-full md:w-3/5 text-center md:text-left relative z-20 pb-12 md:pb-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-xs tracking-widest uppercase mb-8 shadow-sm">
                   <span className="w-2 h-2 rounded-full bg-[#F4A16C] animate-pulse" />
                   <span>Identify Potential Today</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 tracking-tight leading-tight pb-1">
                  Ready to map your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">IQ & EQ profile?</span>
                </h2>
                <p className="text-sm md:text-lg text-white/80 font-medium mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                  Take the first step to uncover logical capabilities and social empathy profiles. Connect with our counselors directly to schedule a full testing slot.
                </p>
                
                <Button asChild size="lg" className="h-14 px-10 rounded-full bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] text-white hover:shadow-lg hover:shadow-[#F4A16C]/40 hover:-translate-y-1 transition-all duration-300 font-black text-sm uppercase tracking-widest border-0">
                  <a 
                    href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20want%20to%20schedule%20an%20IQ%20%26%20EQ%20Assessment%20for%20myself%20or%20my%20child.%20Please%20guide%20me%20with%20slots." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3"
                  >
                    Book Your Slot Now
                    <MessageCircle size={18} />
                  </a>
                </Button>
             </div>

             {/* 3D Parents Character Container */}
             <div className="w-full md:w-2/5 mt-12 md:mt-0 relative h-[300px] md:h-full md:absolute md:right-0 md:bottom-0 flex items-center justify-center md:justify-end pointer-events-none z-10 pb-8 md:pb-0 md:pr-10">
                <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-white rounded-full border-[8px] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden z-10 animate-[float_6s_ease-in-out_infinite]">
                  <Image
                     src="/parents/3d-parents-thinking.png"
                     alt="3D Parents Thinking Illustration"
                     fill
                     className="object-cover object-center"
                  />
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

