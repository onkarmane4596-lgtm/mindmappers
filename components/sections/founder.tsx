'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';
import { FaYoutube, FaFacebookF, FaBloggerB } from 'react-icons/fa';

export function FounderSection() {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-white">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          
          {/* Image Container */}
          <div className="w-full max-w-[280px] lg:max-w-none lg:w-5/12 relative group">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200 border-4 border-white mx-auto transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10">
              <Image
                src="/founder/founder.jpg"
                alt="Mr. Dinesh D. Tathe"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/40 via-transparent to-transparent opacity-40" />
            </div>
            
            {/* Visual Accents */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#F4A16C] rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-500 hidden md:flex">
                <Quote size={28} className="text-white" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              <span>Founder's Desk</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-2 tracking-tight pb-1">
              Mr. Dinesh D. Tathe
            </h2>
            
            <div className="space-y-1 mb-6">
              <p className="text-base md:text-xl font-bold text-[#F4A16C]">
                Director, Mindmappers Center
              </p>
              <p className="text-xs md:text-base font-semibold text-slate-500">
                Senior Lecturer at The Unique Academy, Pune.
              </p>
            </div>

            <div className="relative p-5 md:p-8 bg-[#f8fafc] rounded-2xl md:rounded-[2rem] border border-slate-100 mb-6 md:mb-8 shadow-sm">
              <Quote className="absolute top-4 left-4 text-blue-100" size={24} />
              <p className="text-base md:text-2xl font-bold text-[#1a235c] leading-relaxed italic relative z-10 pl-4 md:pl-6">
                "संबंधित विषयांमध्ये १५ वर्षे समुपदेशन, व्याख्यान, प्रशिक्षण, यांचा अनुभव."
              </p>
            </div>

            <Button asChild size="lg" className="h-12 px-8 rounded-full bg-[#1a235c] text-white hover:bg-blue-900 transition-all duration-300 font-bold shadow-lg shadow-blue-900/10 text-sm uppercase tracking-widest">
              <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20connect%20with%20Mr.%20Dinesh%20Tathe%20for%20counseling." target="_blank" rel="noopener noreferrer">
                Connect with Director
              </a>
            </Button>
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 pt-8 border-t border-slate-100">
               <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Explore More:</span>
               <div className="flex items-center gap-4">
                  <a href="https://youtube.com/watch?si=8v99XpF9rhYmIrs8&v=ynaKPOVexx8&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1" aria-label="YouTube">
                     <FaYoutube size={18} />
                  </a>
                  <a href="https://www.facebook.com/p/Mindmapper-Career-Counselling-61575185248722/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1" aria-label="Facebook">
                     <FaFacebookF size={18} />
                  </a>
                  <a href="https://sajambitiondt.blogspot.com/2013/08/blog-post.html?m=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1" aria-label="Blogspot">
                     <FaBloggerB size={18} />
                  </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
