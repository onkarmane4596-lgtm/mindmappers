'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight,
  MessageCircle,
  Users,
  Brain,
  Target,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Student Career Counseling',
    marathiTitle: 'विद्यार्थी करिअर मार्गदर्शन',
    description: 'Personalized scientific guidance to help students aged 12-25 discover their ideal stream, subjects, and long-term career paths.',
    icon: Users,
    href: '/services/student-career-counseling',
    color: 'from-[#1F2F78] to-[#3D57C5]'
  },
  {
    title: 'IQ & EQ Testing',
    marathiTitle: 'आयक्यू आणि इक्यू चाचणी',
    description: 'Scientific psychometric assessments to measure cognitive capabilities and emotional intelligence, unlocking hidden potentials.',
    icon: Brain,
    href: '/services/iq-eq-testing',
    color: 'from-[#F4A16C] to-[#FF6B00]'
  },
  {
    title: 'Personality Development',
    marathiTitle: 'व्यक्तिमत्व विकास',
    description: 'Holistic training programs to build unshakeable self-confidence, public speaking ability, and positive social body language.',
    icon: Target,
    href: '/services/personality-development',
    color: 'from-[#1F2F78] to-[#3D57C5]'
  },
  {
    title: 'Parents Counseling',
    marathiTitle: 'पालक समुपदेशन',
    description: 'Empathetic counseling sessions for parents to understand teens better, bridge generation gaps, and restore mutual trust.',
    icon: Users,
    href: '/services/parents-counseling',
    color: 'from-[#F4A16C] to-[#FF6B00]'
  },
  {
    title: 'Cyber Parenting',
    marathiTitle: 'सायबर पालकत्व',
    description: 'Equipping modern parents to manage screen-time addictions, internet boundaries, and digital playground safety.',
    icon: ShieldCheck,
    href: '/services/cyber-parenting',
    color: 'from-[#1F2F78] to-[#3D57C5]'
  },
  {
    title: 'Anger Management',
    marathiTitle: 'राग व्यवस्थापन',
    description: 'Evidence-based cognitive and emotional control techniques to regulate temper spikes and resolve conflicts peacefully.',
    icon: HeartPulse,
    href: '/services/anger-management',
    color: 'from-[#F4A16C] to-[#FF6B00]'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      
      {/* Page Header Banner */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10 bg-[#1a235c] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/hero/slider/3.jpeg" 
            alt="MindMappers Services" 
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
             <span>Home</span> <span className="text-white/30">•</span> <span>Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 leading-tight">
            Our Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-black text-[#F4A16C] uppercase tracking-widest bg-white/5 py-1.5 px-5 rounded-full inline-block border border-white/10 shadow-inner">
            आमच्या सेवा आणि मार्गदर्शन
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight pb-2">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Guidance</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Discover our core programs designed to nurture potential, resolve challenges, and build a foundation for lifelong success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Decorative Background Blob */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg shadow-current/20 transform group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#1a235c] mb-1 tracking-tight">{service.title}</h3>
                  <p className="text-xs font-bold text-[#F4A16C] uppercase tracking-widest mb-4">{service.marathiTitle}</p>
                  
                  <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between gap-4">
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#1a235c] hover:text-[#F4A16C] transition-colors group/link"
                    >
                      Know More
                      <ArrowRight size={14} className="transform group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>

                    <Button 
                      asChild 
                      size="sm"
                      className="rounded-full bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] hover:shadow-md hover:shadow-[#F4A16C]/20 border-0 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest h-9 px-4"
                    >
                      <a href={`https://wa.me/919822258300?text=Hello%20MindMappers!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noopener noreferrer">
                        Inquire
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative 3D Call to Action */}
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
                     <span>Free Consultation</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 tracking-tight leading-tight pb-1">
                    Not sure which service is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">right for you?</span>
                  </h2>
                  <p className="text-sm md:text-lg text-white/80 font-medium mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    Don't worry! Connect with our experts directly. We'll help you understand your unique needs and recommend the perfect guidance program for you or your child.
                  </p>
                  
                  <Button asChild size="lg" className="h-14 px-10 rounded-full bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] text-white hover:shadow-lg hover:shadow-[#F4A16C]/40 hover:-translate-y-1 transition-all duration-300 font-black text-sm uppercase tracking-widest border-0">
                    <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20I%20need%20help%20choosing%20a%20service." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      Chat With an Expert
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
