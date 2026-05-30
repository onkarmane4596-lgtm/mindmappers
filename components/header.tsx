'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles, GraduationCap, Target, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/iq-eq-test', label: 'IQ and EQ Test' },
  { href: '/student-report', label: 'Student Report' },
  { href: '/contact', label: 'Contact US' },
];

const servicesList = [
  { href: '/services/student-career-counseling', label: 'Student Career Counseling' },
  { href: '/services/iq-eq-testing', label: 'IQ & EQ Testing' },
  { href: '/services/personality-development', label: 'Personality Development' },
  { href: '/services/parents-counseling', label: 'Parents Counseling' },
  { href: '/services/cyber-parenting', label: 'Cyber Parenting' },
  { href: '/services/anger-management', label: 'Anger Management' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-sm shadow-[#1a235c]/5 flex flex-col">
      <div className="relative z-50 w-full bg-white/80 backdrop-blur-lg border-b border-[#1a235c]/5 border-t-4 border-t-[#F4A16C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 shrink-0 group">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo/LOGO MINDMAPPERS.png" 
                alt="MindMappers Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-xl sm:text-2xl tracking-tight flex items-center">
              <span className="text-[#1a235c]">Mind</span>
              <span className="text-[#F4A16C]">Mappers</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full gap-6 lg:gap-8">
            {navigationLinks.map((link) => {
              if (link.href === '/services') {
                return (
                  <div key={link.href} className="relative group h-full flex items-center">
                    <Link
                      href="/services"
                      className={`text-[13px] lg:text-[14px] font-bold uppercase tracking-widest transition-all duration-300 relative flex items-center gap-1 ${
                        pathname.startsWith('/services') ? 'text-[#1a235c]' : 'text-slate-500 hover:text-[#1a235c]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-[#1a235c]" />
                      <span className={`absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[#F4A16C] transition-all duration-300 origin-left ${
                        pathname.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-900/10 border border-slate-100/50 py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {servicesList.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block px-5 py-2.5 text-xs lg:text-[13px] font-bold uppercase tracking-wider transition-colors duration-200 border-l-2 ${
                            pathname === service.href
                              ? 'border-[#F4A16C] bg-slate-50 text-[#1a235c]'
                              : 'border-transparent text-slate-600 hover:text-[#1a235c] hover:bg-slate-50/50 hover:border-slate-200'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] lg:text-[14px] font-bold uppercase tracking-widest transition-all duration-300 relative group flex-shrink-0 ${
                    pathname === link.href ? 'text-[#1a235c]' : 'text-slate-500 hover:text-[#1a235c]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[#F4A16C] transition-all duration-300 origin-left ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden shadow-xl shadow-[#1a235c]/10 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#F4A16C,transparent,#F4A16C)] animate-[spin_6s_linear_infinite]" />
              <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20session." target="_blank" rel="noopener noreferrer" className="relative flex items-center bg-[#1a235c] rounded-full px-5 py-2 border border-[#1a235c]/50 hover:bg-[#3D57C5] transition-colors">
                <span className="text-white font-black tracking-widest uppercase text-xs">
                  Book Session
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-[#1F2F78] hover:bg-[#1F2F78]/5 transition-colors border border-transparent hover:border-[#1F2F78]/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-100 py-6 animate-in slide-in-from-top-4 duration-300 absolute left-0 w-full bg-white/95 backdrop-blur-xl px-4 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navigationLinks.map((link) => {
                if (link.href === '/services') {
                  return (
                    <div key={link.href} className="flex flex-col gap-1">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between text-[15px] font-bold py-3 px-4 rounded-xl transition-all text-left ${
                          pathname.startsWith('/services')
                            ? 'bg-gradient-to-br from-[#F4A16C]/10 to-[#FF6B00]/10 text-[#FF6B00] border border-[#F4A16C]/20'
                            : 'text-foreground/80 hover:bg-[#F8F9FB] hover:text-[#1F2F78]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-[#FF6B00]' : 'text-slate-400'}`} />
                      </button>
                      
                      {/* Expanded Mobile Sub-Menu */}
                      <div className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[350px] py-1 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
                        <Link
                          href="/services"
                          className="text-[13px] font-bold py-2.5 px-4 rounded-xl text-[#1a235c] hover:bg-[#F8F9FB]"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Services
                        </Link>
                        {servicesList.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`text-[13px] font-semibold py-2.5 px-4 rounded-xl transition-all border-l-2 ${
                              pathname === service.href
                                ? 'border-[#F4A16C] bg-slate-50 text-[#1a235c]'
                                : 'border-transparent text-slate-500 hover:text-[#1a235c] hover:bg-[#F8F9FB]'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[15px] font-bold py-3 px-4 rounded-xl transition-all ${
                      pathname === link.href
                        ? 'bg-gradient-to-br from-[#F4A16C]/10 to-[#FF6B00]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] border border-[#F4A16C]/20'
                        : 'text-foreground/80 hover:bg-[#F8F9FB] hover:text-[#1F2F78]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild className="w-full h-14 rounded-xl text-[16px] font-bold bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] hover:from-[#e38d58] hover:to-[#e66000] text-white mt-4 shadow-xl shadow-[#F4A16C]/30 border-0">
                <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20book%20a%20session." target="_blank" rel="noopener noreferrer">
                  Book Session
                </a>
              </Button>
            </div>
          </nav>
        )}
        </div>
      </div>

      {/* Live Highlights Marquee Bar */}
      <div className="relative z-40 w-full bg-gradient-to-r from-[#1a235c]/95 to-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden flex">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 sm:py-2 text-white/90 text-[11px] sm:text-[13px] font-bold tracking-widest hover:[animation-play-state:paused] cursor-default uppercase">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 sm:gap-16 px-4 sm:px-8 items-center min-w-max">
              <span className="flex items-center gap-2"><Target size={14} className="text-[#F4A16C]"/> Book Your Career Assessment Today!</span>
              <span className="flex items-center gap-2"><GraduationCap size={14} className="text-[#F4A16C]"/> Expert Counseling For Students & Parents</span>
              <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#F4A16C]"/> Discover Your True Potential</span>
              <span className="flex items-center gap-2"><Lightbulb size={14} className="text-[#F4A16C]"/> Transform Confusion Into Clarity</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
