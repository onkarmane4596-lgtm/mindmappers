'use client';

import { Briefcase, Users, Target, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const credentials = [
  {
    icon: Briefcase,
    title: 'Seasoned Counselors',
    description: 'Our team brings vast, hands-on experience in career guidance, helping students navigate their future with absolute confidence.'
  },
  {
    icon: Users,
    title: 'Trusted by Families',
    description: 'We have successfully guided hundreds of families, ensuring students are well-prepared to make the right career choice.'
  },
  {
    icon: Target,
    title: 'Personalized Approach',
    description: 'Every student receives tailor-made guidance focusing entirely on their unique strengths, interests, and learning styles.'
  },
  {
    icon: Lightbulb,
    title: 'Practical Insights',
    description: 'We rely on proven, real-world strategies and deep industry knowledge to provide actionable and realistic career roadmaps.'
  },
];

const testimonials = [
  {
    initials: "SP",
    quote: "\"MindMappers helped our daughter from our village find the right path in Agricultural Engineering. Their assessment was a true game changer for her future.\"",
    name: "Santosh Patil, Parent",
    role: "Farmer, Sangli"
  },
  {
    initials: "RD",
    quote: "\"Coming from a rural background, I was confused after 12th. MindMappers showed me opportunities in Dairy Technology that I didn't even know existed!\"",
    name: "Rahul Deshmukh, Student",
    role: "B.Tech Student, Satara"
  },
  {
    initials: "RJ",
    quote: "\"We didn't have much awareness about new careers in our village. Their expert counseling helped my son prepare for a secure career in Government Services.\"",
    name: "Ramesh Jadhav, Parent",
    role: "Small Business Owner, Beed"
  },
  {
    initials: "SK",
    quote: "\"The psychometric test revealed my hidden strengths. Thanks to their guidance, I moved towards specialized Vocational Training and secured a stable job.\"",
    name: "Sneha Kadam, Student",
    role: "Working Professional, Latur"
  }
];

export function TrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <span>Why Parents Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-tight pb-1">
            Expert Guidance You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Trust</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto">
            We combine professional expertise, proven methodologies, and a deep commitment to your child's career success.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 w-full">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card key={index} className="p-5 md:p-8 border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-1.5 rounded-[1.5rem] md:rounded-[2rem] group relative overflow-hidden">
                <div className="flex gap-4 md:gap-6 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left relative z-10">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] sm:rounded-2xl bg-blue-50 text-[#1a235c] transition-all duration-300 group-hover:bg-[#1a235c] group-hover:text-white group-hover:scale-110">
                      <Icon size={24} className="sm:w-7 sm:h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1a235c] mb-1.5 sm:mb-2 leading-tight">{credential.title}</h3>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm md:text-base leading-relaxed">{credential.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="w-full bg-[#1a235c] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden shadow-2xl shadow-blue-900/20 min-h-[280px] md:min-h-[220px] flex items-center">
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          
          <div key={currentIndex} className="flex flex-col md:flex-row gap-8 items-center relative z-10 w-full animate-fade-in">
            <div className="flex-shrink-0 relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F4A16C] to-[#e67e3a] p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-[#1a235c] overflow-hidden flex items-center justify-center">
                  <span className="font-black text-white text-xl">{testimonials[currentIndex].initials}</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-4 sm:mb-6 leading-relaxed italic opacity-90">
                {testimonials[currentIndex].quote}
              </p>
              <div className="inline-flex flex-col md:flex-row md:items-center gap-1 sm:gap-2 md:gap-4">
                <p className="font-bold text-white text-base">{testimonials[currentIndex].name}</p>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#F4A16C]" />
                <p className="text-sm font-bold text-[#F4A16C] uppercase tracking-widest">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
