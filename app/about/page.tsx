'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  GraduationCap, 
  Users, 
  Target, 
  Mic, 
  Heart, 
  CheckCircle2, 
  Calendar,
  MoveRight
} from 'lucide-react';
import { useState } from 'react';
import { FaYoutube, FaFacebookF, FaBloggerB } from 'react-icons/fa';

// Data based on the scraped content (Translated to Marathi)
const stats = [
  { icon: Calendar, value: '१५+', label: 'वर्षांचा अनुभव' },
  { icon: Mic, value: '५००+', label: 'व्याख्याने व शिबिरे' },
  { icon: Users, value: '५०००+', label: 'विद्यार्थी-पालक मार्गदर्शन' },
];

const topics = [
  'करिअरची निवड', 'सॉफ्ट स्किल्स', 'मुलाखत तंत्रे', 
  'आधुनिक पालकत्व', 'अभ्यासकौशल्य', 'उद्योजकता विकसन', 'स्पर्धापरीक्षा मार्गदर्शन'
];

const audiences = [
  {
    id: 'students',
    title: 'विद्यार्थी (शालेय व महाविद्यालयीन)',
    icon: GraduationCap,
    points: ['अभ्यास कौशल्ये', 'व्यक्तिमत्व विकास', 'परीक्षा तंत्रे व सवयी', 'करिअरची पायाभरणी व स्पर्धा परीक्षा', 'DMIT आणि सायकोमेट्रिक टेस्ट', 'इमोशनल इंटेलिजन्स आणि स्ट्रेस मॅनेजमेंट', 'भविष्यातील संधी आणि आवश्यक कौशल्ये']
  },
  {
    id: 'youth',
    title: 'युवक',
    icon: Target,
    points: ['करिअर निवड', 'मुलाखत तंत्रे', 'नोकरी मार्गदर्शन', 'व्यवसाय मार्गदर्शन', 'संवाद कौशल्य', 'सुजाण नागरिक बनूया कार्यक्रम']
  },
  {
    id: 'parents',
    title: 'पालक',
    icon: Heart,
    points: ['आधुनिक पालकत्व', 'मुलांच्या समस्या व वर्तन', 'सायबर Parenting', 'नो मोबाईल Campaign', 'ऑनलाईन गेम्सबद्दल जागरूकता', 'वेळेचे व्यवस्थापन']
  },
  {
    id: 'women',
    title: 'महिला',
    icon: Users,
    points: ['तणाव व्यवस्थापन', 'पालकत्व', 'आर्थिक नियोजन', 'व्यक्तिमत्व विकास']
  },
  {
    id: 'social',
    title: 'सामाजिक / राजकीय',
    icon: Mic,
    points: ['संवाद कौशल्ये', 'सोशल मीडियाचा प्रभावी वापर', 'नेतृत्वगुण', 'कार्यकर्ता प्रशिक्षण शिबिर']
  }
];

export default function AboutPage() {
  const [activeAudience, setActiveAudience] = useState(audiences[0].id);

  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      
      {/* Page Header Banner */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10 bg-[#1a235c] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/about-bg.png" 
            alt="About MindMappers - Students Graduating" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#1a235c]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c] via-[#1a235c]/60 to-[#1a235c]/30" />
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F4A16C]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-[#F4A16C] font-bold text-xs tracking-widest uppercase mb-4 opacity-90">
             <span>Home</span> <span className="text-white/30">•</span> <span>About Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 leading-tight">
            About Us
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-black text-[#F4A16C] uppercase tracking-widest bg-white/5 py-1.5 px-5 rounded-full inline-block border border-white/10 shadow-inner">
            आमच्याबद्दल माहिती
          </p>
        </div>
      </section>
      
      {/* Hero Profile Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a235c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4A16C]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Image */}
            <div className="w-full max-w-[280px] lg:max-w-none lg:w-5/12 relative group shrink-0 mx-auto">
              <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white transition-all duration-700 group-hover:shadow-blue-900/20 group-hover:-translate-y-2">
                <Image
                  src="/founder/founder.jpg"
                  alt="Prof. Dinesh Tathe"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a235c]/90 via-[#1a235c]/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                   <p className="font-black text-xl md:text-3xl tracking-tight leading-tight mb-1">प्रा. दिनेश ताठे</p>
                   <p className="text-[#F4A16C] font-bold text-[10px] md:text-xs tracking-widest uppercase">संचालक व संस्थापक</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
                <span>संस्थापकांचा परिचय</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-normal pt-2 pb-2">
                उज्ज्वल भविष्याला <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] py-2">आकार देण्यासाठी कटिबद्ध</span>
              </h1>
              
              <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                फार्मास्युटिकल्स आणि इंटेलिजन्स सर्व्हिसेसच्या पार्श्वभूमीसह, प्रा. दिनेश ताठे यांना करिअर मार्गदर्शनाचा १५ वर्षांहून अधिक अनुभव आहे. पुण्यातील द युनिक अकॅडमीचे वरिष्ठ व्याख्याते म्हणून त्यांनी UPSC, MPSC आणि करिअर प्लॅनिंगमध्ये हजारो विद्यार्थ्यांना योग्य मार्गदर्शन करून त्यांचे भविष्य सुरक्षित करण्यास मदत केली आहे.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10">
                {stats.map((stat, idx) => (
                   <div key={idx} className="bg-white rounded-[1.5rem] p-4 md:p-5 border border-slate-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left group hover:shadow-xl hover:shadow-[#1a235c]/5 transition-all hover:-translate-y-1">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1a235c] mb-3 md:mb-4 group-hover:bg-[#1a235c] group-hover:text-white transition-colors">
                        <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-[#1a235c] leading-none mb-1">{stat.value}</h4>
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                   </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 mt-8 pt-8 border-t border-slate-100 w-full max-w-2xl mx-auto lg:mx-0">
                 <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest sm:mt-2.5">अधिक माहितीसाठी:</span>
                 <div className="flex items-center gap-4">
                    <a href="https://youtube.com/watch?si=8v99XpF9rhYmIrs8&v=ynaKPOVexx8&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1" aria-label="YouTube">
                       <FaYoutube size={20} />
                    </a>
                    <a href="https://www.facebook.com/p/Mindmapper-Career-Counselling-61575185248722/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1" aria-label="Facebook">
                       <FaFacebookF size={18} />
                    </a>
                    <a href="https://sajambitiondt.blogspot.com/2013/08/blog-post.html?m=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1" aria-label="Blogspot">
                       <FaBloggerB size={18} />
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics of Guidance */}
      <section className="py-12 md:py-20 bg-[#1a235c] relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-8 md:mb-10 tracking-tight">मार्गदर्शनाचे मुख्य विषय</h2>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 max-w-4xl mx-auto">
            {topics.map((topic, idx) => (
              <span key={idx} className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:text-[#1a235c] transition-colors cursor-default shadow-lg">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences (Bento/Tabs Layout) */}
      <section className="py-16 md:py-24 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-4 tracking-tight leading-normal pt-2 pb-2">
              कुणासाठी <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] py-2">कोणते मार्गदर्शन?</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto">
              विद्यार्थी, युवक, महिला आणि पालकांच्या विशिष्ट गरजांनुसार आमचे खास मार्गदर्शन सत्रे.
            </p>

            {/* Mobile Horizontal Scroll Indicator */}
            <div className="flex items-center justify-center gap-2 text-[#F4A16C] text-[11px] font-bold tracking-widest mt-6 lg:hidden animate-pulse border border-[#F4A16C]/20 bg-[#F4A16C]/5 py-1.5 px-4 rounded-full w-fit mx-auto">
              <MoveRight size={14} /> पुढे पाहण्यासाठी स्वाइप करा (SWIPE)
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-6 lg:mt-0">
             {/* Audience Tabs */}
             <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
                <div className="w-2 shrink-0 lg:hidden" />
                {audiences.map((aud) => (
                  <button
                    key={aud.id}
                    onClick={() => setActiveAudience(aud.id)}
                    className={`flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-300 text-left shrink-0 min-w-[240px] md:min-w-0 snap-center border ${
                      activeAudience === aud.id 
                        ? 'bg-[#1a235c] text-white shadow-xl shadow-blue-900/20 scale-[1.02] border-[#1a235c]' 
                        : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-50 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 ${activeAudience === aud.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#1a235c] shadow-sm'}`}>
                      <aud.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="font-black text-sm md:text-base uppercase tracking-widest">{aud.title}</span>
                  </button>
                ))}
                <div className="w-2 shrink-0 lg:hidden" />
             </div>

             {/* Audience Content */}
             <div className="w-full lg:w-2/3">
                {audiences.map((aud) => (
                  <div 
                    key={aud.id}
                    className={`transition-all duration-500 ease-out ${activeAudience === aud.id ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'}`}
                  >
                    <Card className="p-6 md:p-10 border-0 bg-white shadow-xl shadow-blue-900/5 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#1a235c]">
                         <aud.icon size={120} />
                       </div>
                       <h3 className="text-xl md:text-3xl font-black text-[#1a235c] mb-6 md:mb-8 relative z-10">{aud.title} मार्गदर्शन</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                         {aud.points.map((point, pIdx) => (
                           <div key={pIdx} className="flex items-start gap-3 group">
                              <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#F4A16C] transition-colors shadow-sm">
                                <CheckCircle2 size={14} className="text-[#F4A16C] group-hover:text-white" />
                              </div>
                              <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">{point}</p>
                           </div>
                         ))}
                       </div>
                    </Card>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a235c] to-[#3D57C5] mb-6 tracking-tight leading-normal pt-2 pb-2">
              तुमच्या उज्ज्वल भविष्याची <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00] py-2">सुरुवात आजच करा!</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium mb-10 max-w-xl mx-auto">
              प्रा. दिनेश ताठे यांच्याशी वैयक्तिक समुपदेशनासाठी आजच संपर्क साधा आणि यशस्वी करिअरकडे पहिले पाऊल टाका.
            </p>
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-[#1a235c] text-white hover:bg-blue-900 transition-all duration-300 font-black shadow-xl shadow-blue-900/20 text-sm uppercase tracking-widest hover:-translate-y-1">
              <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer">
                आत्ताच अपॉइंटमेंट बुक करा
              </a>
            </Button>
         </div>
      </section>

      <Footer />
    </main>
  );
}
