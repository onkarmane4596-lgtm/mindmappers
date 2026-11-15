'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  GraduationCap, 
  School, 
  Building2, 
  Download, 
  CheckCircle2, 
  Sparkles,
  Send
} from 'lucide-react';
import { EnquiryModal } from '@/components/enquiry-modal';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'student' | 'school' | 'corporate'>('student');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [location, setLocation] = useState('Pune');
  const [serviceOfInterest, setServiceOfInterest] = useState('Student Career Counselling');
  const [message, setMessage] = useState('');

  const validatePhone = (num: string) => /^[6-9]\d{9}$/.test(num.replace(/\D/g, ''));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and 10-digit mobile number.');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g. 9822258300).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    const waUrl = getWhatsAppLink();
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
  };

  const getWhatsAppLink = () => {
    const text = `Hello MindMappers Team! 🌟%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Type:* ${encodeURIComponent(activeTab.toUpperCase())}%0A*Organization:* ${encodeURIComponent(organization)}%0A*Location:* ${encodeURIComponent(location)}%0A*Query:* ${encodeURIComponent(message)}`;
    return `https://wa.me/919822258300?text=${text}`;
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Banner */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-[#1a235c] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a235c] via-[#24164b] to-[#1a235c]/95" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F4A16C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F4A16C] font-bold text-xs tracking-widest uppercase mb-4">
            <Sparkles size={14} /> Direct Connect & Enquiries
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A16C] to-[#FF6B00]">MindMappers®</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
            Whether booking student counselling, arranging school seminars, or tailoring a corporate employee training plan, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Comprehensive Enquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <Card className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
                
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-[#1a235c] mb-1">
                    Send an Official Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Select your category below and fill out the form. We respond within 24 hours.
                  </p>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl mb-8">
                  <button
                    type="button"
                    onClick={() => { setActiveTab('student'); setServiceOfInterest('Student Career Counselling'); setSubmitted(false); }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'student'
                        ? 'bg-white text-[#1a235c] shadow-md'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <GraduationCap size={15} />
                    <span>Student / Parent</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveTab('school'); setServiceOfInterest('School / College Session'); setSubmitted(false); }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'school'
                        ? 'bg-white text-[#1a235c] shadow-md'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <School size={15} />
                    <span>School / College</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveTab('corporate'); setServiceOfInterest('Corporate Employee Training'); setSubmitted(false); }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'corporate'
                        ? 'bg-white text-[#1a235c] shadow-md'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Building2 size={15} />
                    <span>Corporate</span>
                  </button>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800">Thank You, {name}!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your enquiry has been successfully logged. Our senior counselor will connect with you on {phone}.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button asChild className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl py-6 px-6 font-bold text-sm">
                        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                          <MessageCircle size={18} className="mr-2" /> Connect Immediately on WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-xl py-6 px-6 text-xs font-bold">
                        Submit Another Query
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 rounded-xl">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">
                          {activeTab === 'corporate' ? 'Contact Person Name *' : 'Your Full Name *'}
                        </Label>
                        <Input 
                          placeholder="e.g. Ramesh Kulkarni"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="rounded-xl h-11 text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">Mobile Number (10 Digits) *</Label>
                        <Input 
                          type="tel"
                          placeholder="e.g. 9822258300"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          maxLength={10}
                          required
                          className="rounded-xl h-11 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">Email Address</Label>
                        <Input 
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="rounded-xl h-11 text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">
                          {activeTab === 'student' ? 'School / College Name' : 'Company / Institution Name'}
                        </Label>
                        <Input 
                          placeholder={activeTab === 'corporate' ? 'e.g. Cognizant / Tata Motors' : 'e.g. Ferguson College / DPS'}
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className="rounded-xl h-11 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">Preferred Location</Label>
                        <select 
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full h-11 px-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 font-medium outline-none"
                        >
                          <option value="Pune">Pune</option>
                          <option value="Satara">Satara</option>
                          <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar</option>
                          <option value="Nanded">Nanded</option>
                          <option value="Mumbai (Corporate)">Mumbai (Corporate)</option>
                          <option value="Nashik (Corporate)">Nashik (Corporate)</option>
                          <option value="Online / Video Consultation">Online / Video Consultation</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-700">Programme of Interest</Label>
                        <Input 
                          value={serviceOfInterest}
                          onChange={(e) => setServiceOfInterest(e.target.value)}
                          className="rounded-xl h-11 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-slate-700">Detailed Message / Question</Label>
                      <Textarea 
                        placeholder="Please describe your specific requirements or queries..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="rounded-xl text-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <Button 
                        type="submit"
                        className="w-full h-12 rounded-xl bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
                      >
                        Submit Enquiry
                      </Button>
                    </div>
                  </form>
                )}

              </Card>
            </div>

            {/* Right Column: Contact Cards, Brochures & Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Instant Booking Card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <MessageCircle size={26} />
                </div>
                <h3 className="text-xl font-black mb-1">Direct WhatsApp Booking</h3>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium mb-6 leading-relaxed">
                  Prefer instant communication? Message Prof. Dinesh Tathe directly on WhatsApp for session availability and rapid response.
                </p>
                <Button asChild className="w-full h-11 rounded-xl bg-white text-emerald-800 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider shadow-md">
                  <a href="https://wa.me/919822258300?text=Hello%20MindMappers%20Team!%20%F0%9F%8C%9F%0A%0AI%20would%20like%20to%20enquire%20about%20a%20counselling%20or%20training%20session." target="_blank" rel="noopener noreferrer">
                    Open WhatsApp Chat
                  </a>
                </Button>
              </div>

              {/* Official Office Details Card */}
              <Card className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#1a235c] pb-2 border-b border-slate-100">
                  MindMappers® Head Office
                </h4>
                
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <MapPin size={16} className="text-[#F4A16C] mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    Shop no. 13, Rathi galaxy, Disha alankar society, Connought place, behind Quadrangle mall, cidco, Chhatrapati Sambhajinagar - 431001, Maharashtra.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <Phone size={16} className="text-[#F4A16C] shrink-0" />
                  <a href="tel:+919822258300" className="font-bold text-slate-800 hover:text-[#1a235c]">
                    +91 9822258300 (Direct Director Line)
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <Mail size={16} className="text-[#F4A16C] shrink-0" />
                  <a href="mailto:mindmapperscareer@gmail.com" className="font-semibold hover:text-[#1a235c]">
                    mindmapperscareer@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <Clock size={16} className="text-[#F4A16C] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800">Monday – Saturday: 10:00 AM – 6:00 PM</p>
                    <p className="text-[11px] text-slate-400">Sunday: By prior confirmed appointment only</p>
                  </div>
                </div>
              </Card>

              {/* Regional Presence Strip */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                  Multi-City Centers & Coverage
                </span>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#1a235c]">Student Counselling: </span>
                    <span className="text-slate-600 font-medium">Pune, Satara, Chh. Sambhajinagar, Nanded</span>
                  </div>
                  <div>
                    <span className="font-bold text-cyan-700">Corporate Training: </span>
                    <span className="text-slate-600 font-medium">Pune, Mumbai, Nashik, Satara, Chh. Sambhajinagar</span>
                  </div>
                </div>
              </div>

              {/* Download Brochures Card */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-xs font-bold text-[#1a235c] block mb-2">
                  Need Document Reference First?
                </span>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Download our official reference brochures with full curriculum, pricing, and newspaper coverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button asChild size="sm" variant="outline" className="text-[11px] font-bold h-9 bg-white">
                    <a href="/asset/MindMappers-Career-Counselling-Brochure.pdf" download="MindMappers_Career_Counselling_Brochure_Updated_Media_2026.pdf">
                      <Download size={13} className="mr-1 text-[#F4A16C]" /> Career PDF (8 Pgs)
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="text-[11px] font-bold h-9 bg-white">
                    <a href="/asset/MindMappers-Corporate-Training-Brochure.pdf" download="MindMappers_Corporate_Training_Brochure.pdf">
                      <Download size={13} className="mr-1 text-cyan-600" /> Corporate PDF (10 Pgs)
                    </a>
                  </Button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
