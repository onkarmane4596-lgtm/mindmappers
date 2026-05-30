'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Target, Users, BookOpen, Presentation, ShieldCheck, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Student Career Counseling',
    description: 'Personalized guidance to help students discover their ideal career path.',
    image: '/services/student.png',
    href: '/services/student-career-counseling',
    icon: Users,
    color: 'from-[#1F2F78] to-[#3D57C5]'
  },
  {
    title: 'IQ & EQ Testing',
    description: 'Scientific assessments to measure cognitive and emotional intelligence.',
    image: '/services/iqeq.png',
    href: '/services/iq-eq-testing',
    icon: Brain,
    color: 'from-[#F4A16C] to-[#FF6B00]'
  },
  {
    title: 'Personality Development',
    description: 'Holistic programs to enhance self-confidence and communication skills.',
    image: '/services/personality.png',
    href: '/services/personality-development',
    icon: Target,
    color: 'from-[#1F2F78] to-[#3D57C5]'
  },
  {
    title: 'Parents Counseling',
    description: 'Supportive sessions for parents to better understand and guide their children.',
    image: '/services/parent.png',
    href: '/services/parents-counseling',
    icon: Users,
    color: 'from-[#F4A16C] to-[#FF6B00]'
  },
  {
    title: 'Cyber Parenting',
    description: 'Equipping parents with tools to navigate the digital world safely.',
    image: '/services/cyber.png',
    href: '/services/cyber-parenting',
    icon: ShieldCheck,
    color: 'from-[#1F2F78] to-[#3D57C5]'
  },
  {
    title: 'Anger Management',
    description: 'Effective strategies for emotional regulation and conflict resolution.',
    image: '/services/anger.png',
    href: '/services/anger-management',
    icon: HeartPulse,
    color: 'from-[#F4A16C] to-[#FF6B00]'
  }
];

export function ServicesSection() {
  return (
    <section className="py-10 md:py-16 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-4 shadow-sm">
            <BookOpen size={12} className="text-[#F4A16C]" />
            <span>Our Expert Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight pb-1">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">We Do?</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#1a235c] to-[#F4A16C] mx-auto rounded-full opacity-40" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full transform hover:-translate-y-1">
                {/* Image Section - Compact Aspect Ratio */}
                <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/60 via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Smaller Icon Badge */}
                  <div className={`absolute top-2 md:top-4 right-2 md:right-4 w-7 h-7 md:w-10 md:h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-500`}>
                    <Icon size={14} className="md:w-[18px] md:h-[18px]" />
                  </div>
                </div>

                {/* Compact Content Section */}
                <div className="p-3 md:p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#1a235c] mb-1.5 md:mb-2 leading-tight group-hover:text-[#F4A16C] transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 line-clamp-2 md:line-clamp-3 mb-3 md:mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center gap-1.5 text-[10px] md:text-sm font-bold text-[#1a235c] hover:text-[#F4A16C] transition-colors group/link"
                  >
                    Know More 
                    <ArrowRight size={12} className="md:w-[14px] md:h-[14px] transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
