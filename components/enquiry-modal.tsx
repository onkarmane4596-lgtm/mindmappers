'use client';

import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  GraduationCap, 
  School, 
  Building2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles,
  Send,
  MessageCircle,
  ExternalLink,
  Zap
} from 'lucide-react';

export type EnquiryVertical = 'student' | 'school' | 'corporate';

interface EnquiryModalProps {
  initialVertical?: EnquiryVertical;
  defaultPackage?: string;
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function EnquiryModal({ 
  initialVertical = 'student', 
  defaultPackage = '',
  trigger,
  isOpen,
  onOpenChange
}: EnquiryModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  const [vertical, setVertical] = useState<EnquiryVertical>(initialVertical);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Form states
  // Student
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [counsellingLocation, setCounsellingLocation] = useState('Pune');
  const [studentMessage, setStudentMessage] = useState('');

  // School
  const [institutionName, setInstitutionName] = useState('');
  const [schoolContactPerson, setSchoolContactPerson] = useState('');
  const [schoolDesignation, setSchoolDesignation] = useState('');
  const [schoolPhone, setSchoolPhone] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [institutionType, setInstitutionType] = useState('School (8th - 10th)');
  const [studentCount, setStudentCount] = useState('');
  const [interestedProgramme, setInterestedProgramme] = useState('Career Awareness Session');
  const [preferredDate, setPreferredDate] = useState('');
  const [schoolMessage, setSchoolMessage] = useState('');

  // Corporate
  const [companyName, setCompanyName] = useState('');
  const [corpContactPerson, setCorpContactPerson] = useState('');
  const [corpDesignation, setCorpDesignation] = useState('');
  const [corpPhone, setCorpPhone] = useState('');
  const [corpEmail, setCorpEmail] = useState('');
  const [corpIndustry, setCorpIndustry] = useState('IT & Software');
  const [employeeCount, setEmployeeCount] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage || 'PACKAGE 01 — ESSENTIAL (₹30,000)');
  const [corpLocation, setCorpLocation] = useState('Pune');
  const [corpMessage, setCorpMessage] = useState('');

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return /^[6-9]\d{9}$/.test(cleaned);
  };

  const constructWhatsAppMessage = (): string => {
    let msg = '';
    if (vertical === 'student') {
      msg = `🌟 *MINDMAPPERS® CAREER COUNSELLING ENQUIRY* 🌟\n` +
        `----------------------------------------\n` +
        `👤 *Student Name:* ${studentName.trim()}\n` +
        (parentName.trim() ? `👨‍👩‍👧 *Parent Name:* ${parentName.trim()}\n` : '') +
        `📱 *Mobile:* ${studentPhone.trim()}\n` +
        (studentEmail.trim() ? `📧 *Email:* ${studentEmail.trim()}\n` : '') +
        (educationLevel ? `🎓 *Current Class / Standard:* ${educationLevel}\n` : '') +
        (areaOfInterest ? `🎯 *Area of Interest:* ${areaOfInterest}\n` : '') +
        `📍 *Preferred Location:* ${counsellingLocation}\n` +
        (studentMessage.trim() ? `📝 *Message:* ${studentMessage.trim()}\n` : '') +
        `----------------------------------------\n` +
        `_Sent via MindMappers Website_`;
    } else if (vertical === 'school') {
      msg = `🏫 *MINDMAPPERS® INSTITUTIONAL PROGRAMME ENQUIRY* 🏫\n` +
        `----------------------------------------\n` +
        `🏛️ *Institution:* ${institutionName.trim()}\n` +
        `👤 *Contact Person:* ${schoolContactPerson.trim()} ${schoolDesignation.trim() ? `(${schoolDesignation.trim()})` : ''}\n` +
        `📱 *Mobile:* ${schoolPhone.trim()}\n` +
        (schoolEmail.trim() ? `📧 *Email:* ${schoolEmail.trim()}\n` : '') +
        `🎓 *Institution Type:* ${institutionType}\n` +
        (studentCount.trim() ? `👥 *Approx Students:* ${studentCount.trim()}\n` : '') +
        `🎯 *Programme:* ${interestedProgramme}\n` +
        (preferredDate.trim() ? `📅 *Preferred Date:* ${preferredDate.trim()}\n` : '') +
        (schoolMessage.trim() ? `📝 *Message:* ${schoolMessage.trim()}\n` : '') +
        `----------------------------------------\n` +
        `_Sent via MindMappers Website_`;
    } else {
      msg = `🏢 *MINDMAPPERS® CORPORATE TRAINING ENQUIRY* 🏢\n` +
        `----------------------------------------\n` +
        `🏢 *Company:* ${companyName.trim()}\n` +
        `👤 *Contact Person:* ${corpContactPerson.trim()} ${corpDesignation.trim() ? `(${corpDesignation.trim()})` : ''}\n` +
        `📱 *Mobile:* ${corpPhone.trim()}\n` +
        (corpEmail.trim() ? `📧 *Email:* ${corpEmail.trim()}\n` : '') +
        `🏭 *Industry:* ${corpIndustry}\n` +
        (employeeCount.trim() ? `👥 *Number of Employees:* ${employeeCount.trim()}\n` : '') +
        `📦 *Selected Package:* ${selectedPackage}\n` +
        `📍 *Location:* ${corpLocation}\n` +
        (corpMessage.trim() ? `📝 *Requirements:* ${corpMessage.trim()}\n` : '') +
        `----------------------------------------\n` +
        `_Sent via MindMappers Website_`;
    }

    return `https://wa.me/919822258300?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (vertical === 'student') {
      if (!studentName.trim() || !studentPhone.trim()) {
        setErrorMsg('Please enter student name and a valid 10-digit mobile number.');
        return;
      }
      if (!validatePhone(studentPhone)) {
        setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g. 9822258300).');
        return;
      }
    } else if (vertical === 'school') {
      if (!institutionName.trim() || !schoolContactPerson.trim() || !schoolPhone.trim()) {
        setErrorMsg('Please enter institution name, contact person, and a valid mobile number.');
        return;
      }
      if (!validatePhone(schoolPhone)) {
        setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
        return;
      }
    } else {
      if (!companyName.trim() || !corpContactPerson.trim() || !corpPhone.trim()) {
        setErrorMsg('Please enter company name, contact person, and a valid mobile number.');
        return;
      }
      if (!validatePhone(corpPhone)) {
        setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
        return;
      }
    }

    const waUrl = constructWhatsAppMessage();
    setGeneratedWhatsAppUrl(waUrl);
    setSubmitted(true);

    // Immediately trigger opening WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
  };

  const handleFastTrackWhatsApp = () => {
    let fastMsg = '';
    if (vertical === 'student') {
      fastMsg = 'Hello MindMappers Team! 🌟\n\nI would like to enquire about Student Career Counselling and Aptitude Assessment. Please share the details.';
    } else if (vertical === 'school') {
      fastMsg = 'Hello MindMappers Team! 🌟\n\nI would like to invite MindMappers for an institutional career seminar/workshop at our campus. Please share the details.';
    } else {
      fastMsg = 'Hello MindMappers Team! 🌟\n\nI would like to enquire about your Corporate Employee Training and Wellness Programmes. Please share the details.';
    }
    const url = `https://wa.me/919822258300?text=${encodeURIComponent(fastMsg)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg('');
    setGeneratedWhatsAppUrl('');
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) handleReset(); }}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
        <DialogHeader className="text-left mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#1a235c]">
              Direct WhatsApp Connected Enquiry
            </span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-black text-[#1a235c]">
            {vertical === 'student' && 'Book a Counselling Appointment'}
            {vertical === 'school' && 'Invite a Session to Your Institution'}
            {vertical === 'corporate' && 'Request a Corporate Training Plan'}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-slate-600 font-medium">
            Fill in your details below to directly connect with Prof. Dinesh Tathe & team on WhatsApp (+91 9822258300).
          </DialogDescription>
        </DialogHeader>

        {/* Quick Fast-Track WhatsApp Pill */}
        {!submitted && (
          <div className="mb-5 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 text-center sm:text-left">
              <Zap size={16} className="text-emerald-600 shrink-0" />
              <span>In a hurry? Skip the form and chat directly:</span>
            </div>
            <button
              type="button"
              onClick={handleFastTrackWhatsApp}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0"
            >
              <MessageCircle size={15} /> Quick WhatsApp Chat
            </button>
          </div>
        )}

        {/* Category Switcher */}
        {!submitted && (
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl mb-5">
            <button
              type="button"
              onClick={() => { setVertical('student'); setErrorMsg(''); }}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                vertical === 'student'
                  ? 'bg-white text-[#1a235c] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap size={15} />
              <span className="hidden sm:inline">Student & Parent</span>
              <span className="sm:hidden">Student</span>
            </button>
            <button
              type="button"
              onClick={() => { setVertical('school'); setErrorMsg(''); }}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                vertical === 'school'
                  ? 'bg-white text-[#1a235c] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <School size={15} />
              <span className="hidden sm:inline">Schools / Colleges</span>
              <span className="sm:hidden">Schools</span>
            </button>
            <button
              type="button"
              onClick={() => { setVertical('corporate'); setErrorMsg(''); }}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                vertical === 'corporate'
                  ? 'bg-white text-[#1a235c] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 size={15} />
              <span className="hidden sm:inline">Corporate Training</span>
              <span className="sm:hidden">Corporate</span>
            </button>
          </div>
        )}

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Opening WhatsApp with Your Details!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                Your enquiry has been formatted and directed to the official MindMappers WhatsApp line (+91 9822258300).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <p className="font-bold text-slate-800">If WhatsApp didn't open automatically, tap below:</p>
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white rounded-xl h-12 font-bold text-xs uppercase tracking-wider shadow-md">
                <a href={generatedWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" /> Continue on WhatsApp
                </a>
              </Button>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-xl h-11 text-xs font-bold">
                <a href="tel:+919822258300">
                  <Phone size={14} className="mr-2 text-[#F4A16C]" /> Call Director Directly
                </a>
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleReset} 
                className="w-full sm:w-auto rounded-xl h-11 text-xs font-semibold text-slate-600"
              >
                Submit Another Enquiry
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

            {/* VERTICAL 1: Student / Parent */}
            {vertical === 'student' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Student Full Name *</Label>
                    <Input 
                      placeholder="e.g., Rohan Patil" 
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Parent / Guardian Name</Label>
                    <Input 
                      placeholder="e.g., Suresh Patil" 
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Mobile Number (10 Digits) *</Label>
                    <Input 
                      type="tel"
                      placeholder="e.g., 9822258300" 
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      required
                      maxLength={10}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Email Address (Optional)</Label>
                    <Input 
                      type="email"
                      placeholder="e.g., rohan@gmail.com" 
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Current Standard / Class</Label>
                    <select
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a235c]"
                    >
                      <option value="">Select standard</option>
                      <option value="8th - 9th Standard">8th - 9th Standard</option>
                      <option value="10th Standard (Stream Selection)">10th Standard (Stream Selection)</option>
                      <option value="11th - 12th Science / Commerce / Arts">11th - 12th Standard</option>
                      <option value="Undergraduate / College">Undergraduate / College</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Area of Interest</Label>
                    <Input 
                      placeholder="e.g., Engineering, Medical, NDA" 
                      value={areaOfInterest}
                      onChange={(e) => setAreaOfInterest(e.target.value)}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Preferred Centre</Label>
                    <select
                      value={counsellingLocation}
                      onChange={(e) => setCounsellingLocation(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a235c]"
                    >
                      <option value="Pune">Pune Centre</option>
                      <option value="Satara">Satara Centre</option>
                      <option value="Chhatrapati Sambhajinagar">Chh. Sambhajinagar</option>
                      <option value="Nanded">Nanded Centre</option>
                      <option value="Online Counselling">Online Video Session</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700">Any Questions or Specific Requirements?</Label>
                  <Textarea 
                    placeholder="Tell us what you would like to understand through career counselling..."
                    value={studentMessage}
                    onChange={(e) => setStudentMessage(e.target.value)}
                    rows={2}
                    className="rounded-xl border-slate-200 text-sm bg-slate-50/50"
                  />
                </div>
              </>
            )}

            {/* VERTICAL 2: School / College */}
            {vertical === 'school' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Institution / School Name *</Label>
                    <Input 
                      placeholder="e.g., Rayat Shikshan Sanstha High School" 
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Institution Type</Label>
                    <select
                      value={institutionType}
                      onChange={(e) => setInstitutionType(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700"
                    >
                      <option value="School (8th - 10th)">School (8th - 10th)</option>
                      <option value="Junior College (11th - 12th)">Junior College (11th - 12th)</option>
                      <option value="Senior Degree College">Senior Degree College</option>
                      <option value="Engineering / Technical Institute">Engineering / Polytechnic</option>
                      <option value="Coaching Institute / Academy">Coaching Institute / Academy</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Contact Person *</Label>
                    <Input 
                      placeholder="e.g., Prof. Kulkarni" 
                      value={schoolContactPerson}
                      onChange={(e) => setSchoolContactPerson(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Designation</Label>
                    <Input 
                      placeholder="e.g., Principal / Trustee" 
                      value={schoolDesignation}
                      onChange={(e) => setSchoolDesignation(e.target.value)}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Mobile Number *</Label>
                    <Input 
                      type="tel"
                      placeholder="e.g., 9822258300" 
                      value={schoolPhone}
                      onChange={(e) => setSchoolPhone(e.target.value)}
                      required
                      maxLength={10}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Interested Programme</Label>
                    <select
                      value={interestedProgramme}
                      onChange={(e) => setInterestedProgramme(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700"
                    >
                      <option value="Career Awareness Sessions">Career Awareness Sessions</option>
                      <option value="Motivation & Study Skills">Motivation & Study Skills</option>
                      <option value="EQ and Personality Development">EQ and Personality Development</option>
                      <option value="Parent-Teacher Interaction">Parent-Teacher Interaction</option>
                      <option value="Exam Mindset & Confidence">Exam Mindset & Confidence</option>
                      <option value="Customised Age-Group Session">Customised Age-Group Session</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Approx Student Count</Label>
                    <Input 
                      placeholder="e.g., 250 Students" 
                      value={studentCount}
                      onChange={(e) => setStudentCount(e.target.value)}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700">Campus City / Location & Preferred Dates</Label>
                  <Textarea 
                    placeholder="Enter school location, expected dates, or any special theme..."
                    value={schoolMessage}
                    onChange={(e) => setSchoolMessage(e.target.value)}
                    rows={2}
                    className="rounded-xl border-slate-200 text-sm bg-slate-50/50"
                  />
                </div>
              </>
            )}

            {/* VERTICAL 3: Corporate Training */}
            {vertical === 'corporate' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Company / Organization *</Label>
                    <Input 
                      placeholder="e.g., Tech Solutions Ltd." 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Industry / Sector</Label>
                    <select
                      value={corpIndustry}
                      onChange={(e) => setCorpIndustry(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700"
                    >
                      <option value="IT & Software">IT & Software</option>
                      <option value="Manufacturing & Auto">Manufacturing & Auto</option>
                      <option value="BFSI & Finance">BFSI & Finance</option>
                      <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                      <option value="Education & EdTech">Education & EdTech</option>
                      <option value="Retail & Logistics">Retail & Logistics</option>
                      <option value="Other">Other Sector</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Contact Person *</Label>
                    <Input 
                      placeholder="e.g., Priya Sharma" 
                      value={corpContactPerson}
                      onChange={(e) => setCorpContactPerson(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Designation</Label>
                    <Input 
                      placeholder="e.g., HR Manager" 
                      value={corpDesignation}
                      onChange={(e) => setCorpDesignation(e.target.value)}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Mobile Number *</Label>
                    <Input 
                      type="tel"
                      placeholder="e.g., 9822258300" 
                      value={corpPhone}
                      onChange={(e) => setCorpPhone(e.target.value)}
                      required
                      maxLength={10}
                      className="rounded-xl border-slate-200 h-11 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Selected Package</Label>
                    <select
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700"
                    >
                      <option value="PACKAGE 01 — ESSENTIAL (₹30,000)">PACKAGE 01 — ESSENTIAL (₹30,000 • 4 Hours)</option>
                      <option value="PACKAGE 02 — GROWTH 360 (₹50,000)">PACKAGE 02 — GROWTH 360 (₹50,000 • 6 Hours)</option>
                      <option value="PACKAGE 03 — TRANSFORMATION (₹4,000/Emp)">PACKAGE 03 — TRANSFORMATION (₹4,000/Emp)</option>
                      <option value="Custom Corporate Plan">Custom Corporate Training Plan</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Workplace Location</Label>
                    <select
                      value={corpLocation}
                      onChange={(e) => setCorpLocation(e.target.value)}
                      className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs font-semibold text-slate-700"
                    >
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Satara">Satara</option>
                      <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar</option>
                      <option value="Other Location">Other City in Maharashtra</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700">Team Size & Focus Areas</Label>
                  <Textarea 
                    placeholder="Number of participants, main challenges (burnout, team friction, time management)..."
                    value={corpMessage}
                    onChange={(e) => setCorpMessage(e.target.value)}
                    rows={2}
                    className="rounded-xl border-slate-200 text-sm bg-slate-50/50"
                  />
                </div>
              </>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <Button 
                type="submit"
                className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-green-600/15 flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} /> Submit & Connect on WhatsApp
              </Button>
              <p className="text-[11px] text-slate-400 text-center font-medium mt-2">
                🔒 All enquiries connect directly to Director Prof. Dinesh Tathe (+91 9822258300)
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
