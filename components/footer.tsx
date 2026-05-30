'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1 pr-4">
            <h3 className="font-black text-2xl mb-6 flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0">
                <Image 
                  src="/logo/LOGO MINDMAPPERS.png" 
                  alt="MindMappers Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span><span className="text-[#1a235c]">Mind</span><span className="text-[#F4A16C]">Mappers</span></span>
            </h3>
            <p className="text-sm font-medium text-slate-500 mb-6 leading-relaxed">
              Guiding young minds towards their best career paths through personalized counseling and expert guidance.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#1a235c] mb-6 pb-2 border-b border-slate-100 inline-block">Quick Navigation</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-500 uppercase tracking-wider">
              <li><Link href="/" className="hover:text-[#1a235c] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#1a235c] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#1a235c] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#1a235c] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#1a235c] mb-6 pb-2 border-b border-slate-100 inline-block">Stay Connected</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-slate-400">Call Us</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1a235c] shrink-0"><Phone size={14} /></div>
                  <a href="tel:+919822258300" className="hover:text-[#1a235c] transition-colors">9822258300</a>
                </div>
              </li>
              <li className="flex flex-col gap-1 mt-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">Email</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1a235c] shrink-0"><Mail size={14} /></div>
                  <a href="mailto:Mindmapperscareer@gmail.com" className="hover:text-[#1a235c] transition-colors break-all">Mindmapperscareer@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#1a235c] mb-6 pb-2 border-b border-slate-100 inline-block">Visit Us</h4>
            <div className="flex items-start gap-3 text-sm font-bold text-slate-500">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1a235c] shrink-0"><MapPin size={14} /></div>
              <p className="pt-1 leading-relaxed">
                MindMappers career counselling centre, shop no. 13 , Rathi galaxy, Disha alankar society, Connought place, behind Quadrangle mall, cidco, chh. Sambhajinagar. 431001.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              &copy; {currentYear} MindMappers. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/Mindmapper-Career-Counselling/61575185248722/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/mindmapperscounselling?igsh=MXhsZ3B1cjlqbWp0" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@mindmapperscareercounseling" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
