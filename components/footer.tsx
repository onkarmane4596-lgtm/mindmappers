'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, FileText, Download, Building2, GraduationCap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden border-t border-slate-800 w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4A16C]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Column 1: Brand & Director */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 bg-white rounded-2xl p-1">
                <Image 
                  src="/logo/LOGO MINDMAPPERS.png" 
                  alt="MindMappers Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight flex items-center">
                  <span>Mind</span>
                  <span className="text-[#F4A16C]">Mappers</span>
                  <span className="text-[10px] text-cyan-400 align-super ml-0.5">®</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Career Counselling Centre
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              Shaping Your Best Version through scientific psychometric assessments, emotional intelligence mapping, and transformative corporate training.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <span className="text-[11px] font-bold text-[#F4A16C] uppercase tracking-wider block">
                Founder & Director
              </span>
              <p className="text-sm font-black text-white mt-0.5">
                Prof. Dinesh Tathe
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Career Guidance, Student Welfare & Corporate Training
              </p>
            </div>
          </div>

          {/* Column 2: Career Counselling Vertical */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-[#F4A16C] mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <GraduationCap size={16} /> Career Counselling
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <Link href="/services/student-career-counseling" className="hover:text-white transition-colors">
                  Student Career Guidance (10th & 12th)
                </Link>
              </li>
              <li>
                <Link href="/iq-eq-test" className="hover:text-white transition-colors">
                  IQ & EQ Psychometric Assessment
                </Link>
              </li>
              <li>
                <Link href="/student-report" className="hover:text-white transition-colors">
                  Personalised Diagnostic Reports
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="hover:text-white transition-colors">
                  School, College & Coaching Sessions
                </Link>
              </li>
              <li>
                <Link href="/services/personality-development" className="hover:text-white transition-colors">
                  Personality Development & Soft Skills
                </Link>
              </li>
              <li>
                <Link href="/services/parents-counseling" className="hover:text-white transition-colors">
                  Parenting & Cyber Awareness Guidance
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Counselling Locations:
              </span>
              <p className="text-xs text-slate-300 font-medium">
                Pune • Satara • Chh. Sambhajinagar • Nanded
              </p>
            </div>
          </div>

          {/* Column 3: Corporate Training Vertical */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-cyan-400 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Building2 size={16} /> Corporate Training
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <Link href="/corporate-training" className="hover:text-cyan-300 transition-colors">
                  Corporate Programme Overview
                </Link>
              </li>
              <li>
                <Link href="/corporate-training#packages" className="hover:text-cyan-300 transition-colors">
                  Essential Package (₹30,000)
                </Link>
              </li>
              <li>
                <Link href="/corporate-training#packages" className="hover:text-cyan-300 transition-colors">
                  Growth 360 Package (₹50,000)
                </Link>
              </li>
              <li>
                <Link href="/corporate-training#packages" className="hover:text-cyan-300 transition-colors">
                  Corporate Transformation (₹4,000/Emp)
                </Link>
              </li>
              <li>
                <Link href="/corporate-training" className="hover:text-cyan-300 transition-colors">
                  10 Small Training Modules (12 Hours)
                </Link>
              </li>
              <li>
                <Link href="/corporate-training" className="hover:text-cyan-300 transition-colors">
                  Interactive Activities & Team Tower
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Corporate Locations:
              </span>
              <p className="text-xs text-slate-300 font-medium">
                Pune • Mumbai • Nashik • Satara • Chh. Sambhajinagar
              </p>
            </div>
          </div>

          {/* Column 4: Official Contact & Brochures */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Phone size={16} className="text-[#F4A16C]" /> Contact & Downloads
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300 mb-6">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Official Phone:</span>
                <a href="tel:+919822258300" className="text-sm font-bold text-white hover:text-[#F4A16C] transition-colors">
                  9822258300
                </a>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email:</span>
                <a href="mailto:mindmapperscareer@gmail.com" className="font-semibold text-slate-300 hover:text-white transition-colors break-all">
                  mindmapperscareer@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Head Office:</span>
                <p className="text-slate-400 text-[11px] leading-relaxed pt-0.5">
                  MindMappers career counselling centre, shop no. 13 , Rathi galaxy, Disha alankar society, Connought place, behind Quadrangle mall, cidco, chh. Sambhajinagar. 431001.
                </p>
              </div>
            </div>

            {/* Quick PDF Downloads */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-[10px] font-bold text-[#F4A16C] uppercase tracking-wider block mb-1">
                Download Official PDFs:
              </span>
              <a 
                href="/asset/MindMappers-Career-Counselling-Brochure.pdf" 
                download="MindMappers_Career_Counselling_Brochure_Updated_Media_2026.pdf"
                className="flex items-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-colors"
              >
                <Download size={13} className="text-[#F4A16C]" /> Career Counselling PDF (8 Pgs)
              </a>
              <a 
                href="/asset/MindMappers-Corporate-Training-Brochure.pdf" 
                download="MindMappers_Corporate_Training_Brochure.pdf"
                className="flex items-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-colors"
              >
                <Download size={13} className="text-cyan-400" /> Corporate Training PDF (10 Pgs)
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Socials & Copyright Strip */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-xs font-semibold text-slate-400">
            &copy; {currentYear} MindMappers® Career Counselling Centre. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-slate-500">
              Shaping Your Best Version • www.mindmapperscareer.in
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.facebook.com/people/Mindmapper-Career-Counselling/61575185248722/?mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
            <a 
              href="https://www.instagram.com/mindmapperscounselling?igsh=MXhsZ3B1cjlqbWp0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a 
              href="https://www.youtube.com/@mindmapperscareercounseling" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="YouTube"
            >
              <Youtube size={15} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
