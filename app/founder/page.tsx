'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { 
  Quote, 
  MapPin, 
  Phone, 
  ArrowLeft, 
  ExternalLink, 
  Youtube, 
  Globe, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Heart, 
  ShieldCheck, 
  Briefcase, 
  Presentation,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FounderPage() {
  const targetGroups = [
    {
      id: 1,
      title: "Students (शालेय तसेच महाविद्यालयीन)",
      icon: GraduationCap,
      color: "blue",
      items: [
        "अभ्यास कौशल्ये",
        "व्यक्तिमत्व विकास",
        "परीक्षा तंत्रे, सवयी",
        "करिअर ची निवड, स्पर्धा परीक्षा",
        "करिअर ची पायाभरणी",
        "DMIT टेस्ट , सायकोमेट्रिक टेस्ट",
        "इमोशनल इंटेलिजन्स टेस्ट, स्ट्रेस मॅनेजमेंट",
        "भविष्यातील संधी आणि आवश्यक कौशल्ये"
      ]
    },
    {
      id: 2,
      title: "Youth (युवक)",
      icon: Users,
      color: "orange",
      items: [
        "करिअर निवड",
        "मुलाखत तंत्रे",
        "नोकरी",
        "व्यवसाय मार्गदर्शन",
        "संवाद कौशल्य",
        "व्यक्तिमत्व विकास",
        "सुजाण नागरिक बनुया कार्यक्रम"
      ]
    },
    {
      id: 3,
      title: "Women (महिला)",
      icon: Heart,
      color: "blue",
      items: [
        "तणाव व्यवस्थापन",
        "पालकत्व",
        "आर्थिक नियोजन",
        "व्यक्तिमत्व विकास"
      ]
    },
    {
      id: 4,
      title: "Parents (पालक)",
      icon: ShieldCheck,
      color: "orange",
      items: [
        "आधुनिक पालकत्व",
        "मुलांच्या समस्या",
        "मुलांचे वर्तन",
        "सायबर parenting",
        "नो मोबाईल campaign",
        "ऑनलाईन गेम्स बद्दल जागरूकता",
        "वेळेचे व्यवस्थापन, इत्यादी"
      ]
    },
    {
      id: 5,
      title: "Social / Political (सामाजिक / राजकीय)",
      icon: Globe,
      color: "blue",
      items: [
        "संवाद कौशल्ये",
        "सोशल मीडिया चा प्रभावी वापर",
        "नेतृत्वगुण",
        "कार्यकर्ता प्रशिक्षण शिबिर"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-10 bg-[#1F2F78] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4A16C]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-[#F4A16C] mb-6 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-2/5">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-3xl shadow-black/50 border-8 border-white/5 group">
                <Image
                  src="/founder/founder.jpg"
                  alt="Mr. Dinesh D. Tathe"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2F78]/40 to-transparent" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                Mr. Dinesh D. <span className="text-[#F4A16C]">Tathe</span>
              </h1>
              <div className="space-y-4 mb-10">
                <p className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
                  Director, Mindmappers career counseling center.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/80 font-medium">
                    <GraduationCap size={18} className="text-[#F4A16C]" /> Senior Lecturer at The unique academy, Pune.
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/80 font-medium">
                    <Calendar size={18} className="text-[#F4A16C]" /> 15+ Years Experience
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-[#F4A16C] hover:bg-[#FF6B00] text-white font-black shadow-xl shadow-[#F4A16C]/20 transform hover:-translate-y-1 transition-all">
                  <a href="tel:9822258300" className="flex items-center gap-3">
                    <Phone size={20} /> 9822258300
                  </a>
                </Button>
                <div className="flex items-center gap-3">
                  <Link href="https://youtu.be/ynaKPOVexx8?si=8v99XpF9rhYmIrs8" target="_blank" className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:-translate-y-1">
                    <Youtube className="text-white" size={24} />
                  </Link>
                  <Link href="https://sajambitiondt.blogspot.com/2013/08/blog-post.html?m=1" target="_blank" className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:-translate-y-1">
                    <BookOpen className="text-white" size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 -mt-10 lg:-mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Lectures & Training", count: "500+", icon: Presentation, color: "#1F2F78" },
              { label: "Personal Counseling", count: "5000+", icon: Users, color: "#F4A16C" },
              { label: "Relevant Experience", count: "15+ Yrs", icon: Calendar, color: "#1F2F78" }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-2xl shadow-[#1F2F78]/10 border border-gray-100 flex flex-col items-center text-center group hover:border-[#F4A16C]/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon size={32} style={{ color: stat.color }} />
                </div>
                <div className="text-4xl font-black mb-2 tracking-tight" style={{ color: stat.color }}>{stat.count}</div>
                <div className="text-gray-500 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2F78] mb-6 tracking-tight">
              Expertise & <span className="text-[#F4A16C]">Guidance Areas</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
              Empowering different sections of society through specialized training and personal guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.id} className="bg-[#F8F9FB] rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full group hover:shadow-2xl hover:shadow-[#1F2F78]/10 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-lg group-hover:rotate-6 transition-transform ${group.color === 'orange' ? 'text-[#F4A16C]' : 'text-[#1F2F78]'}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-[#1F2F78] mb-6 leading-tight">
                    {group.title}
                  </h3>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#F4A16C] mt-1 shrink-0" />
                        <span className="text-gray-700 font-medium leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            
            {/* General Guidance Topics Card */}
            <div className="bg-[#1F2F78] rounded-[2rem] p-8 border border-white/10 flex flex-col h-full shadow-2xl shadow-[#1F2F78]/40">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/10 shadow-lg text-[#F4A16C]">
                <Presentation size={28} />
              </div>
              <h3 className="text-xl font-black text-white mb-6 leading-tight">
                मार्गदर्शनाचे विषय (General Topics)
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "करिअर ची निवड", "सॉफ्ट स्किल्स", "मुलाखत तंत्रे", 
                  "आधुनिक पालकत्व", "अभ्यासकौशल्य", "उद्योजकता विकसन", 
                  "स्पर्धापरीक्षा", "महापुरुषांची चरित्रे"
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-xl text-white/90 font-bold text-sm tracking-tight border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm font-medium">
                  वरील विषयांवर समुपदेशन/काऊन्सेलिंग तसेच प्रशिक्षण शिबिर.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1F2F78 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Quote className="mx-auto text-[#F4A16C]/20 mb-8" size={80} />
          <h2 className="text-3xl md:text-5xl font-black text-[#1F2F78] mb-12 leading-[1.2] italic">
            "संबंधित विषयांमध्ये १५ वर्षे समुपदेशन, व्याख्यान, प्रशिक्षण, यांचा अनुभव."
          </h2>
          <Button asChild size="lg" className="h-16 px-12 rounded-2xl bg-[#1F2F78] hover:bg-[#15235a] text-white font-black shadow-2xl transition-all hover:scale-105">
            <Link href="/" className="flex items-center gap-3">
              Book a Consultation with Mr. Tathe
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
