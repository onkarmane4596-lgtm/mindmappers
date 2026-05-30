'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Brain, 
  Activity, 
  BarChart, 
  BookOpen, 
  Users, 
  Lightbulb, 
  Puzzle, 
  Target, 
  Compass, 
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function StudentReportPage() {
  const features = [
    {
      title: "Brain Dominance Analysis",
      icon: <Brain className="w-8 h-8 text-[#1a235c]" />,
      items: ["Left vs Right Brain balance", "Logical vs Creative thinking", "Decision-making style", "Problem-solving approach", "Natural strengths & tendencies"]
    },
    {
      title: "Brain Lobe Potential Mapping",
      icon: <Activity className="w-8 h-8 text-[#1a235c]" />,
      items: ["Pre-Frontal: Leadership & Planning", "Frontal: Thinking & Imagination", "Temporal: Memory & Auditory", "Occipital: Visual Processing", "Parietal: Kinesthetic Abilities"]
    },
    {
      title: "Multiple Quotient Assessment",
      icon: <BarChart className="w-8 h-8 text-[#1a235c]" />,
      items: ["IQ: Logical & analytical ability", "EQ: Emotional intelligence", "AQ: Handling challenges & pressure", "CQ: Innovation & creative thinking"]
    },
    {
      title: "Learning Style Identification",
      icon: <BookOpen className="w-8 h-8 text-[#1a235c]" />,
      items: ["Visual Learner profile", "Auditory Learner profile", "Kinesthetic Learner profile", "Most effective learning methods"]
    },
    {
      title: "Personality & Behavioral Analysis",
      icon: <Users className="w-8 h-8 text-[#1a235c]" />,
      items: ["Leadership tendencies", "Teamwork abilities", "Communication style", "Confidence & decision-making patterns"]
    },
    {
      title: "Acquiring & Learning Method",
      icon: <Lightbulb className="w-8 h-8 text-[#1a235c]" />,
      items: ["Self-learning ability", "Observation and imitation", "Guided learning needs", "Innovative/reverse thinking"]
    },
    {
      title: "Multiple Intelligence Assessment",
      icon: <Puzzle className="w-8 h-8 text-[#1a235c]" />,
      items: ["Intra/Interpersonal Intelligence", "Logical & Linguistic Intelligence", "Spatial & Kinesthetic Intelligence", "Other key intelligence domains"]
    },
    {
      title: "Strength & Development Areas",
      icon: <Target className="w-8 h-8 text-[#1a235c]" />,
      items: ["Natural core strengths", "Uncovering hidden talents", "Areas requiring improvement", "Skill development recommendations"]
    },
    {
      title: "Career Suitability Mapping",
      icon: <Compass className="w-8 h-8 text-[#1a235c]" />,
      items: ["Engineering & Management", "Banking, Finance & Medical", "Defense & Public Administration", "Psychology, Design, Education & more"]
    },
    {
      title: "Personalized Career Counselling",
      icon: <GraduationCap className="w-8 h-8 text-[#1a235c]" />,
      items: ["Stream selection guidance", "Degree recommendations", "Competitive exam pathways", "Career roadmap & parent action plan"]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Dynamic Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1a235c]/5 via-white to-white pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[size:32px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a235c]/10 text-[#1a235c] text-xs font-black tracking-wider uppercase mb-8 border border-[#1a235c]/20">
              <span className="w-2 h-2 rounded-full bg-[#F4A16C] animate-pulse" />
              Comprehensive Analysis
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-[#1a235c] tracking-tight mb-6 text-balance max-w-4xl mx-auto leading-[1.15]">
              Unlock Your Potential with Our <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#e66000]">Assessment Report</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
              Our assessment scientifically analyzes a student's brain preferences, personality, learning style, intelligence, emotional strengths, and career interests to provide a personalized education and career roadmap.
            </p>
            
          </div>
        </section>

        {/* Feature Grid Section (Bento Box Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a235c] mb-4">
              What Does Our Assessment Report Provide?
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
              A deep dive into the 10 core pillars of our scientific assessment, giving you actionable insights for a successful future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  idx === 0 || idx === 9 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a235c]/5 to-[#F4A16C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#1a235c]/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a235c]/10 transition-all duration-300 border border-[#1a235c]/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#1a235c] mb-4 group-hover:text-[#3D57C5] transition-colors">
                    {idx + 1}. {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#F4A16C] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Creative but Secondary Admin Login */}
          <div className="flex justify-center border-t border-slate-100 pt-12">
            <a 
              href="https://mindreports.in/login.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-2 py-2 pr-6 rounded-full bg-slate-50 border border-slate-200 hover:border-[#1a235c]/30 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-[#1a235c]/5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a235c]/5 to-[#F4A16C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 group-hover:bg-[#1a235c] group-hover:border-[#1a235c] transition-colors duration-500 shadow-sm">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <div className="relative flex flex-col items-start">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#F4A16C] transition-colors duration-500">Authorized Personnel</span>
                <span className="text-sm font-black text-slate-600 group-hover:text-[#1a235c] tracking-wider uppercase transition-colors duration-500">
                  Admin Portal
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
