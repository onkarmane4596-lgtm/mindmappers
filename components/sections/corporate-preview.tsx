'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { EnquiryModal } from '@/components/enquiry-modal';

const previewPackages = [
  {
    id: 'pkg-1',
    name: '01. Essential Package',
    marathi: 'एसेंशिअल पॅकेज',
    duration: '4 Hours',
    workshops: '2 Workshops',
    price: '₹30,000',
    priceNote: 'Fixed Investment',
    badge: 'Core Foundation',
    popular: false,
    topics: [
      'Mental Wellbeing & Stress Management',
      'Work Efficiency & Creative Problem Solving',
      'Time Management & Interactive SWOT Analysis'
    ]
  },
  {
    id: 'pkg-2',
    name: '02. Growth 360',
    marathi: 'ग्रोथ ३६० पॅकेज',
    duration: '6 Hours',
    workshops: '3 Workshops',
    price: '₹50,000',
    priceNote: 'Team & Leadership Alignment',
    badge: 'Most Popular',
    popular: true,
    topics: [
      'Both Essential Workshops Included',
      'Ethics & Organizational Values Scenarios',
      'Team Tower Activity & Management Recognition'
    ]
  },
  {
    id: 'pkg-3',
    name: '03. Corporate Transformation',
    marathi: 'कॉर्पोरेट ट्रान्सफॉर्मेशन',
    duration: 'Custom Schedule',
    workshops: '1-on-1 Mentorship + 2-Hr Finale',
    price: '₹4,000',
    priceNote: 'per Employee (Min. 15)',
    badge: 'Deep Transformation',
    popular: false,
    topics: [
      'Confidential One-to-One Employee Counselling',
      'Emotional Intelligence, Social Skills & Puzzles',
      'Gifts/Trophies + High-Energy Motivational Finale'
    ]
  }
];

export function CorporatePreviewSection() {
  const [selectedPackage, setSelectedPackage] = useState('PACKAGE 01 — ESSENTIAL (₹30,000)');
  const [modalOpen, setModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleEnquirePackage = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setModalOpen(true);
  };

  const handleDirectWhatsApp = () => {
    const msg = 'Hello Prof. Dinesh Tathe & MindMappers Team! 🌟\n\nI am interested in corporate employee training workshops for our organization. Please share your corporate package details.';
    window.open(`https://wa.me/919822258300?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-slate-50/60 relative overflow-hidden border-y border-slate-200 w-full max-w-full" style={{ contain: 'paint' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Clean Header (MindMappers Brand Styling, NO Cyan Color, NO Glassmorphism) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Clean Brand Pill without harsh cyan */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a235c] text-white font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
              <Building2 size={13} className="text-[#F4A16C]" />
              Corporate Employee Training Vertical
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-3">
              Build Better Minds. <br />
              <span className="text-[#1a235c]">Strengthen Teams. </span>
              <span className="text-[#F4A16C]">Transform Workplaces.</span>
            </h2>

            <p className="text-xs sm:text-sm font-bold text-[#F4A16C] mb-2">
              कर्मचाऱ्यांचे मानसिक स्वास्थ्य, कार्यक्षमता, नेतृत्व आणि सकारात्मक कार्यसंस्कृती घडवण्यासाठी प्रभावी प्रशिक्षण.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Activity-based corporate workshops designed to reduce employee stress, overcome digital burnout, cultivate ethics, and enhance workplace productivity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button 
              onClick={handleDirectWhatsApp}
              className="rounded-full px-5 h-12 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2"
            >
              <MessageCircle size={16} /> WhatsApp Enquiry
            </Button>
            <Button asChild size="lg" className="rounded-full px-6 h-12 bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-sm">
              <Link href="/corporate-training">
                Explore All 10 Modules <ArrowRight size={15} className="ml-1.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-5 h-12 border-slate-300 bg-white text-slate-700 hover:bg-slate-100 font-bold text-xs">
              <a href="/asset/MindMappers-Corporate-Training-Brochure.pdf" download="MindMappers_Corporate_Training_Brochure.pdf">
                <Download size={14} className="mr-2 text-[#F4A16C]" /> Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Feature Split Showcase: Real Visual Anchor + Modern Feature Cards (NO Glassmorphism) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Authentic Session Photograph Card */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
              <Image 
                src="/corporate/corporate-training-session.jpg"
                alt="MindMappers Corporate Training Session in Progress"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              
              {/* Solid Caption on Image (NO Glassmorphism) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#1a235c] px-3 py-1 rounded-full border border-white/20 inline-block mb-1.5">
                    Live Workshop Glimpse
                  </span>
                  <h4 className="text-base sm:text-xl font-bold">
                    Interactive Activity-Based Training
                  </h4>
                  <p className="text-xs text-slate-200 font-medium">
                    Conducted by Prof. Dinesh Tathe across IT, Manufacturing, BFSI & Healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Solid Floating Modern Metric Badge (NO Glassmorphism) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a235c] flex items-center justify-center font-black">
                <Clock size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Curriculum</span>
                <span className="text-xs font-black text-slate-800">12 Hours • 10 Modules</span>
              </div>
            </div>
          </div>

          {/* Key Differentiators Modern Card List */}
          <div className="lg:col-span-5 space-y-3">
            {[
              {
                title: 'Stress Management & Emotional Balance',
                desc: 'Practical tools like the Stress Thermometer and daily habit regulation to combat work burnout.',
                icon: ShieldCheck
              },
              {
                title: 'Team Tower & Conflict Resolution',
                desc: 'Experiential construction games that dismantle departmental silos and build lasting mutual trust.',
                icon: Users
              },
              {
                title: 'Financial Wellness & Budget Games',
                desc: 'Salary Survival activities helping employees plan EMIs, emergency reserves, and financial security.',
                icon: Zap
              },
              {
                title: 'Customised Industry-Specific Focus',
                desc: 'Calibrated specifically for shift workers, software developers, sales executives, and corporate teams.',
                icon: Sparkles
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1a235c]/30 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1a235c] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modern Horizontal Scrolling Carousel for Packages */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C]">
                Commercials & Packages
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                Featured Corporate Training Packages
              </h3>
            </div>

            {/* Desktop Carousel Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-sm transition-all"
                aria-label="Scroll packages left"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-sm transition-all"
                aria-label="Scroll packages right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Swipeable Container */}
          <div 
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {previewPackages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`w-[290px] sm:w-[340px] shrink-0 snap-start rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative group bg-white ${
                  pkg.popular 
                    ? 'border-2 border-[#1a235c] shadow-xl' 
                    : 'border border-slate-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 bg-[#1a235c] text-white font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                    <span>{pkg.duration}</span>
                    <span>{pkg.workshops}</span>
                  </div>

                  <h4 className="text-lg font-black text-slate-800 group-hover:text-[#1a235c] transition-colors mb-0.5">
                    {pkg.name}
                  </h4>
                  <p className="text-xs font-bold text-[#F4A16C] mb-4">
                    {pkg.marathi}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                    <div className="text-2xl sm:text-3xl font-black text-[#1a235c]">
                      {pkg.price}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {pkg.priceNote}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.topics.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    onClick={() => handleEnquirePackage(pkg.name)}
                    className={`w-full h-11 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      pkg.popular
                        ? 'bg-[#25D366] hover:bg-[#1fb855] text-white shadow-md'
                        : 'bg-slate-100 hover:bg-[#1a235c] text-slate-800 hover:text-white'
                    }`}
                  >
                    <MessageCircle size={14} /> Enquire on WhatsApp
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 mt-3 px-2 gap-2">
            <span>&larr; Swipe horizontally on mobile to view all packages &rarr;</span>
            <Link href="/corporate-training#packages" className="font-bold text-[#1a235c] hover:underline">
              View Complete Package Specifications &rarr;
            </Link>
          </div>
        </div>

      </div>

      {/* Package Enquiry Modal (WhatsApp Attached) */}
      <EnquiryModal 
        initialVertical="corporate"
        defaultPackage={selectedPackage}
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
