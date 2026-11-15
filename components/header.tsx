'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  FileText, 
  Phone,
  MessageCircle,
  ArrowRight,
  User,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { EnquiryModal } from '@/components/enquiry-modal';

const careerDropdownLinks = [
  { href: '/services', label: 'All Counselling Services' },
  { href: '/iq-eq-test', label: 'IQ & EQ Assessment' },
  { href: '/student-report', label: 'Personalised Reports' },
  { href: '/services/student-career-counseling', label: 'Student Career Guidance' },
  { href: '/services/personality-development', label: 'Personality Development' },
  { href: '/services/parents-counseling', label: 'Parents Counseling' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  const handleWhatsAppChat = () => {
    const msg = 'Hello MindMappers Team! 🌟 I would like to enquire about your career counselling and corporate training services.';
    window.open(`https://wa.me/919822258300?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
        {/* Main Solid White Navigation Bar */}
        <div className="w-full bg-white border-b border-slate-200 border-t-[3px] border-t-[#F4A16C]">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex h-16 sm:h-20 items-center justify-between gap-2 sm:gap-4">
              
              {/* Logo (Responsive, Never forces overflow) */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink min-w-0 group py-1">
                <div className="relative w-8 h-8 sm:w-11 sm:h-11 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Image 
                    src="/logo/LOGO MINDMAPPERS.png" 
                    alt="MindMappers Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-black text-[15px] sm:text-xl md:text-2xl tracking-tight leading-none truncate flex items-center">
                    <span className="text-[#1a235c]">Mind</span>
                    <span className="text-[#F4A16C]">Mappers</span>
                    <span className="text-[9px] text-[#1a235c] align-super font-bold ml-0.5">®</span>
                  </span>
                  <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 sm:mt-1 truncate">
                    Career Counselling & Corporate
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center h-full gap-5 xl:gap-7">
                {/* Home */}
                <Link
                  href="/"
                  className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative py-2 ${
                    pathname === '/' ? 'text-[#1a235c]' : 'text-slate-600 hover:text-[#1a235c]'
                  }`}
                >
                  Home
                  <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#F4A16C] transition-all duration-200 ${
                    pathname === '/' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>

                {/* Career Counselling Dropdown */}
                <div className="relative group h-full flex items-center">
                  <Link
                    href="/services"
                    className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative flex items-center gap-1 py-2 ${
                      pathname.startsWith('/services') || pathname === '/iq-eq-test' || pathname === '/student-report'
                        ? 'text-[#1a235c]' 
                        : 'text-slate-600 hover:text-[#1a235c]'
                    }`}
                  >
                    Career Counselling
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#1a235c]" />
                    <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#F4A16C] transition-all duration-200 ${
                      pathname.startsWith('/services') || pathname === '/iq-eq-test' || pathname === '/student-report'
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {careerDropdownLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-l-2 ${
                          pathname === item.href
                            ? 'border-[#F4A16C] bg-slate-50 text-[#1a235c]'
                            : 'border-transparent text-slate-600 hover:text-[#1a235c] hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Corporate Training */}
                <Link
                  href="/corporate-training"
                  className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative py-2 flex items-center gap-1.5 ${
                    pathname === '/corporate-training' ? 'text-[#1a235c]' : 'text-slate-600 hover:text-[#1a235c]'
                  }`}
                >
                  <span>Corporate Training</span>
                  <span className="bg-[#1a235c]/10 text-[#1a235c] text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                    Vertical
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#1a235c] transition-all duration-200 ${
                    pathname === '/corporate-training' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>

                {/* Institutions */}
                <Link
                  href="/institutions"
                  className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative py-2 ${
                    pathname === '/institutions' ? 'text-[#1a235c]' : 'text-slate-600 hover:text-[#1a235c]'
                  }`}
                >
                  Institutions
                  <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#F4A16C] transition-all duration-200 ${
                    pathname === '/institutions' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>

                {/* Brochures View & Download */}
                <Link
                  href="/brochures"
                  className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative py-2 flex items-center gap-1 ${
                    pathname === '/brochures' ? 'text-[#1a235c]' : 'text-slate-600 hover:text-[#1a235c]'
                  }`}
                >
                  <FileText size={14} className="text-[#F4A16C]" />
                  Brochures
                  <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#F4A16C] transition-all duration-200 ${
                    pathname === '/brochures' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative py-2 ${
                    pathname === '/about' ? 'text-[#1a235c]' : 'text-slate-600 hover:text-[#1a235c]'
                  }`}
                >
                  About
                  <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#F4A16C] transition-all duration-200 ${
                    pathname === '/about' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 relative py-2 ${
                    pathname === '/contact' ? 'text-[#1a235c]' : 'text-slate-600 hover:text-[#1a235c]'
                  }`}
                >
                  Contact
                  <span className={`absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full bg-[#F4A16C] transition-all duration-200 ${
                    pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>
              </nav>

              {/* Desktop CTAs (WhatsApp Connected) */}
              <div className="hidden lg:flex items-center gap-3 shrink-0">
                <Button 
                  onClick={handleWhatsAppChat}
                  className="h-10 px-4 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5"
                >
                  <MessageCircle size={15} /> WhatsApp
                </Button>
                <Button 
                  onClick={() => setEnquiryModalOpen(true)}
                  className="h-10 px-5 rounded-full bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-sm"
                >
                  Book Session
                </Button>
              </div>

              {/* Mobile Header Actions (Clean, Thumb-Friendly, Never Forces Overflow) */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
                <Button 
                  onClick={handleWhatsAppChat}
                  size="sm"
                  className="h-8 px-2.5 sm:px-3 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white text-[10px] sm:text-[11px] font-black uppercase flex items-center gap-1 shadow-xs"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle size={13} className="shrink-0" />
                  <span>WhatsApp</span>
                </Button>
                <button
                  className="p-1.5 rounded-xl text-[#1a235c] hover:bg-slate-100 active:bg-slate-200 transition-colors flex items-center justify-center shrink-0 w-9 h-9 border border-slate-200"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Live Marquee Bar (Strictly Contained, CAN NEVER Blow Out Layout) */}
        <div 
          className="w-full bg-[#1a235c] text-white border-b border-white/10 select-none overflow-hidden"
          style={{ contain: 'paint' }}
        >
          <div className="flex animate-marquee whitespace-nowrap py-1 sm:py-1.5 text-[10px] sm:text-[12px] font-bold tracking-wider hover:[animation-play-state:paused] cursor-default uppercase">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 sm:gap-14 px-3 sm:px-8 items-center shrink-0">
                <span className="flex items-center gap-1.5"><Sparkles size={12} className="text-[#F4A16C] shrink-0"/> MindMappers®: Discover Potential. Design the Right Future.</span>
                <span className="flex items-center gap-1.5"><GraduationCap size={12} className="text-[#F4A16C] shrink-0"/> Career Guidance in Pune • Satara • Chh. Sambhajinagar • Nanded</span>
                <span className="flex items-center gap-1.5"><Building2 size={12} className="text-amber-400 shrink-0"/> Corporate Training: Build Better Minds. Transform Workplaces.</span>
                <span className="flex items-center gap-1.5"><FileText size={12} className="text-[#F4A16C] shrink-0"/> Official 2026 Brochures Available For Instant Download</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Dedicated Full-Screen Viewport Overlay, Outside of Sticky Header) */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-hidden animate-in fade-in duration-200"
          style={{ height: '100dvh', width: '100vw' }}
        >
          {/* Mobile Drawer Top Header Bar */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200 bg-white shrink-0">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <div className="relative w-8 h-8 shrink-0">
                <Image 
                  src="/logo/LOGO MINDMAPPERS.png" 
                  alt="MindMappers Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base text-[#1a235c] leading-none">
                  Mind<span className="text-[#F4A16C]">Mappers</span><span className="text-[9px] align-super">®</span>
                </span>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Career Counselling & Corporate
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <Button 
                onClick={handleWhatsAppChat}
                size="sm"
                className="h-8 px-2.5 rounded-full bg-[#25D366] text-white text-[10px] font-black uppercase flex items-center gap-1 shadow-xs"
              >
                <MessageCircle size={12} /> WhatsApp
              </Button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors border border-slate-200"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 divide-y divide-slate-100 overscroll-contain">
            
            {/* Primary Nav Links */}
            <div className="space-y-1 pb-3">
              <Link
                href="/"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/' ? 'bg-blue-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>Home</span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>

              {/* Career Services Accordion */}
              <div>
                <button
                  onClick={() => setIsCareerOpen(!isCareerOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl text-slate-800 hover:bg-slate-50 text-left"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-[#1a235c]" />
                    Career Counselling
                  </span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${isCareerOpen ? 'rotate-180 text-[#F4A16C]' : 'text-slate-400'}`} />
                </button>
                {isCareerOpen && (
                  <div className="pl-3 pr-1 py-1 space-y-0.5 bg-slate-50 rounded-xl my-1 border border-slate-100">
                    {careerDropdownLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block text-xs font-bold py-2 px-3 rounded-lg transition-colors ${
                          pathname === item.href
                            ? 'text-[#1a235c] bg-white shadow-xs'
                            : 'text-slate-600 hover:text-[#1a235c] hover:bg-white/60'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Corporate Training */}
              <Link
                href="/corporate-training"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/corporate-training' ? 'bg-blue-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Building2 size={16} className="text-[#1a235c]" />
                  Corporate Training Programme
                </span>
                <span className="text-[10px] font-black uppercase bg-[#1a235c]/10 text-[#1a235c] px-2 py-0.5 rounded-full">
                  10 Modules
                </span>
              </Link>

              {/* Institutions */}
              <Link
                href="/institutions"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/institutions' ? 'bg-blue-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>For Schools, Colleges & Institutes</span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>

              {/* Official Brochures */}
              <Link
                href="/brochures"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/brochures' ? 'bg-orange-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <FileText size={16} className="text-[#F4A16C]" />
                  Official Brochures (PDF)
                </span>
                <span className="text-[10px] font-black uppercase bg-[#F4A16C]/15 text-[#F4A16C] px-2.5 py-0.5 rounded-full">
                  Download
                </span>
              </Link>

              {/* Founder Profile */}
              <Link
                href="/founder"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/founder' ? 'bg-blue-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <User size={16} className="text-[#1a235c]" />
                  Founder: Prof. Dinesh Tathe
                </span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>

              {/* About MindMappers */}
              <Link
                href="/about"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/about' ? 'bg-blue-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>About MindMappers</span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>

              {/* Contact & Centres */}
              <Link
                href="/contact"
                className={`flex items-center justify-between text-sm font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                  pathname === '/contact' ? 'bg-blue-50 text-[#1a235c]' : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>Contact & Centres</span>
                <ArrowRight size={14} className="text-slate-400" />
              </Link>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-3.5 space-y-2 pb-6">
              <Button 
                onClick={handleWhatsAppChat}
                className="w-full h-11 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} /> Chat Directly on WhatsApp
              </Button>

              <Button 
                onClick={() => { setIsOpen(false); setEnquiryModalOpen(true); }}
                className="w-full h-11 rounded-xl bg-[#1a235c] hover:bg-[#3D57C5] text-white font-black text-xs uppercase tracking-wider shadow-md"
              >
                Book a Counselling Session
              </Button>

              <Button asChild variant="outline" className="w-full h-11 rounded-xl border-slate-200 text-slate-800 font-bold text-xs">
                <a href="tel:+919822258300">
                  <Phone size={14} className="mr-2 text-[#F4A16C]" /> Call Director: +91 9822258300
                </a>
              </Button>

              <p className="text-[10px] text-slate-400 text-center font-medium pt-1">
                Pune • Satara • Chhatrapati Sambhajinagar • Nanded
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Global WhatsApp Connected Enquiry Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen}
        onOpenChange={setEnquiryModalOpen}
      />
    </>
  );
}
