'use client';

import { Calendar, School, Sparkles, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EnquiryModal } from '@/components/enquiry-modal';

const ctaCards = [
  {
    vertical: 'student' as const,
    title: 'Book a Counselling Appointment',
    marathi: 'वैयक्तिक समुपदेशन वेळ निश्चित करा',
    desc: 'One-on-one session with students & parents to analyze IQ, EQ, aptitude, study habits, and personalized career directions.',
    icon: Calendar,
    btnText: 'Book Appointment',
    gradient: 'from-[#1a235c] to-[#3D57C5]',
    bgLight: 'bg-purple-50 text-purple-700'
  },
  {
    vertical: 'school' as const,
    title: 'Invite a School or College Session',
    marathi: 'शाळा / महाविद्यालयामध्ये सत्र आयोजित करा',
    desc: 'Bring transformative career awareness, study motivation, exam confidence, and EQ seminars directly to your campus auditorium.',
    icon: School,
    btnText: 'Invite Session',
    gradient: 'from-[#F4A16C] to-[#FF6B00]',
    bgLight: 'bg-orange-50 text-orange-600'
  },
  {
    vertical: 'student' as const,
    title: 'Discuss Customised Development Plan',
    marathi: 'विशेष विद्यार्थी विकास आराखडा चर्चा',
    desc: 'Structured long-term mentoring covering personality development, communication skills, anger management, and parent alignment.',
    icon: Sparkles,
    btnText: 'Discuss Programme',
    gradient: 'from-[#0284c7] to-[#0f172a]',
    bgLight: 'bg-blue-50 text-blue-700'
  }
];

export function CounsellingCTASection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4A16C]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles size={14} className="text-[#F4A16C]" />
            Your Future Starts Today
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-3 tracking-tight">
            Let's Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">Next Step Together.</span>
          </h2>
          
          <p className="text-base sm:text-lg font-bold text-[#F4A16C] mb-4">
            योग्य दिशेने पुढचे पाऊल टाकूया.
          </p>

          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Choose the pathway that best meets your needs. Whether you are an individual student, a parent seeking guidance, or an educational institution, we are here to support your journey.
          </p>
        </div>

        {/* 3 Major CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Card 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black mb-6 ${card.bgLight}`}>
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black text-slate-800 group-hover:text-[#1a235c] transition-colors leading-snug mb-1">
                    {card.title}
                  </h3>

                  <p className="text-xs font-bold text-[#F4A16C] mb-4">
                    {card.marathi}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div>
                  <EnquiryModal 
                    initialVertical={card.vertical}
                    trigger={
                      <Button className={`w-full h-12 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r ${card.gradient} text-white shadow-md hover:shadow-lg transition-all`}>
                        {card.btnText} <ArrowRight size={15} className="ml-1.5" />
                      </Button>
                    }
                  />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Contact Bar */}
        <div className="rounded-3xl bg-[#1a235c] text-white p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-black">Need Direct Assistance?</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Call our official director line or chat directly on WhatsApp:
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="rounded-xl h-11 px-6 bg-white hover:bg-slate-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider">
              <a href="tel:+919822258300">
                <Phone size={15} className="mr-2 text-[#F4A16C]" /> 9822258300
              </a>
            </Button>
            <Button asChild className="rounded-xl h-11 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider">
              <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20career%20counselling%20sessions." target="_blank" rel="noopener noreferrer">
                <MessageCircle size={15} className="mr-2" /> WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

