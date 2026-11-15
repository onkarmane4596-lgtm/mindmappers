'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Phone, Mail, MapPin, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { FaYoutube, FaFacebookF, FaBloggerB } from 'react-icons/fa';
import { EnquiryModal } from '@/components/enquiry-modal';

export function FounderSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          {/* Image Container with Original Photograph */}
          <div className="w-full max-w-[320px] lg:max-w-none lg:w-5/12 relative group">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white mx-auto transition-all duration-500 group-hover:shadow-blue-900/20">
              <Image
                src="/founder/founder.jpg"
                alt="Prof. Dinesh Tathe - Founder & Director, MindMappers® Career Counselling Centre"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/50 via-transparent to-transparent opacity-50" />
            </div>
            
            {/* Visual Accents */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#F4A16C] rounded-2xl flex items-center justify-center shadow-xl transform rotate-6 group-hover:rotate-0 transition-all duration-500 hidden md:flex">
              <Quote size={28} className="text-white" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
              <Award size={14} className="text-[#F4A16C]" />
              Founder & Director Profile
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-2 tracking-tight">
              Prof. Dinesh Tathe
            </h2>
            
            <div className="space-y-1 mb-6">
              <p className="text-base md:text-xl font-bold text-[#F4A16C]">
                Founder & Director, MindMappers® Career Counselling Centre
              </p>
              <p className="text-xs md:text-sm font-semibold text-slate-500">
                Career guidance, student interaction, personality development and meaningful counselling for students, parents and institutions.
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="relative p-6 md:p-7 bg-[#f8fafc] rounded-3xl border border-slate-200/80 mb-6 shadow-sm">
              <Quote className="absolute top-4 left-4 text-blue-200/60" size={24} />
              <p className="text-sm md:text-base font-bold text-[#1a235c] leading-relaxed italic relative z-10 pl-6">
                "फक्त पदवी मिळवणे म्हणजे करिअर नाही; स्वतःची बलस्थाने, भावनिक संतुलन आणि योग्य संधींचा मेळ घालणे म्हणजेच उज्ज्वल भविष्य."
              </p>
              <p className="text-xs text-slate-500 font-semibold mt-2 pl-6">
                — Prof. Dinesh Tathe
              </p>
            </div>

            {/* Core Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-left">
              {[
                'Holistic Student Career Guidance',
                'Psychometric & Emotional Intelligence Mapping',
                'Interactive Seminars for Schools & Colleges',
                'Corporate Workplace Wellbeing & Training'
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <EnquiryModal 
                initialVertical="student"
                trigger={
                  <Button size="lg" className="h-12 px-7 rounded-full bg-[#1a235c] text-white hover:bg-[#3D57C5] font-bold shadow-lg shadow-blue-900/15 text-xs uppercase tracking-widest">
                    Schedule Direct Consultation
                  </Button>
                }
              />
              <Button asChild variant="outline" size="lg" className="h-12 px-7 rounded-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-widest">
                <a href="https://wa.me/919822258300?text=Hello%20Prof.%20Dinesh%20Tathe,%20I%20would%20like%20to%20connect%20regarding%20career%20counselling." target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={15} className="mr-2 text-emerald-500" /> WhatsApp
                </a>
              </Button>
            </div>

            {/* Verified Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-slate-100 justify-center lg:justify-start">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Channels:</span>
               <div className="flex items-center gap-3">
                  <a href="https://youtube.com/watch?si=8v99XpF9rhYmIrs8&v=ynaKPOVexx8&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm" aria-label="YouTube">
                     <FaYoutube size={16} />
                  </a>
                  <a href="https://www.facebook.com/p/Mindmapper-Career-Counselling-61575185248722/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                     <FaFacebookF size={15} />
                  </a>
                  <a href="https://sajambitiondt.blogspot.com/2013/08/blog-post.html?m=1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm" aria-label="Blogspot">
                     <FaBloggerB size={15} />
                  </a>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
