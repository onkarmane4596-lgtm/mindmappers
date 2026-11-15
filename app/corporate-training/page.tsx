'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Building2, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Brain, 
  ShieldCheck, 
  Heart, 
  TrendingUp, 
  DollarSign, 
  Award, 
  ArrowRight, 
  Download, 
  FileText, 
  Compass, 
  Activity, 
  Phone, 
  Mail, 
  Maximize2,
  Calendar,
  Check,
  Zap,
  Target,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { EnquiryModal } from '@/components/enquiry-modal';

// Core focus areas
const coreFocusAreas = [
  'Mental Wellbeing',
  'Work Efficiency',
  'Leadership & Ethics',
  'Family Welfare',
  'Financial Wellness',
  'Team Collaboration'
];

const targetIndustries = [
  'IT & Software',
  'Automobile & Manufacturing',
  'BFSI & Sales Teams',
  'Healthcare & Education',
  'Corporate HR & Leadership'
];

// 4.2 Six Key Areas of Employee Development (Bilingual)
const sixKeyAreas = [
  {
    num: '01',
    title: 'Mental Wellbeing & Stress Management',
    marathiTitle: 'मानसिक स्वास्थ्य आणि ताणतणाव व्यवस्थापन',
    desc: 'Manage workplace and personal stress, emotional responses, overthinking and digital overload. Build resilience and a healthier mindset.',
    marathiDesc: 'कार्यालयीन व वैयक्तिक ताणतणाव हाताळणे, भावनांचे नियमन करणे, अतिविचार कमी करणे आणि डिजिटल साधनांचा संतुलित वापर शिकणे. यामुळे मानसिक स्वास्थ्य आणि तणाव सहन करण्याची क्षमता वाढते.',
    icon: Brain,
    accent: 'bg-blue-50 text-[#1a235c] border-blue-100',
    tag: 'Stress Handling'
  },
  {
    num: '02',
    title: 'Work Efficiency & Problem Solving',
    marathiTitle: 'कार्यक्षमता आणि समस्या निराकरण',
    desc: 'Strengthen discipline, time management, decisions and creative problem-solving through case studies and interactive SWOT of self and colleagues.',
    marathiDesc: 'शिस्त, वेळेचे नियोजन, निर्णयक्षमता आणि सर्जनशील समस्या-निराकरण कौशल्ये विकसित करणे. प्रात्यक्षिके, केस स्टडी आणि स्वतःचे तसेच सहकाऱ्यांचे SWOT विश्लेषण या उपक्रमांचा समावेश.',
    icon: Target,
    accent: 'bg-amber-50 text-amber-800 border-amber-100',
    tag: 'Execution & Time'
  },
  {
    num: '03',
    title: 'Family Welfare & Work-Life Balance',
    marathiTitle: 'कौटुंबिक कल्याण आणि काम-जीवन संतुलन',
    desc: 'Support positive parenting, family time, relationships and social wellbeing, strengthening trust and employee belonging.',
    marathiDesc: 'सकारात्मक पालकत्व, कुटुंबासाठी गुणवत्तापूर्ण वेळ, नातेसंबंध आणि सामाजिक स्वास्थ्य यांना प्रोत्साहन देणे. यामुळे काम व वैयक्तिक आयुष्य यांचा समतोल साधण्यास आणि संस्थेबद्दल आपुलकी निर्माण होण्यास मदत होते.',
    icon: Heart,
    accent: 'bg-rose-50 text-rose-700 border-rose-100',
    tag: 'Life Balance'
  },
  {
    num: '04',
    title: 'Ethics & Positive Work Culture',
    marathiTitle: 'नैतिक मूल्ये आणि सकारात्मक कार्यसंस्कृती',
    desc: 'Practise honesty, integrity, accountability, respect and organisational values through engaging scenarios and activities.',
    marathiDesc: 'प्रामाणिकपणा, सचोटी, जबाबदारी, परस्पर आदर आणि संस्थेची मूलभूत मूल्ये रुजवणे. प्रसंगाधारित चर्चा व रंजक उपक्रमांमधून सकारात्मक कार्यसंस्कृती घडवणे.',
    icon: ShieldCheck,
    accent: 'bg-emerald-50 text-emerald-800 border-emerald-100',
    tag: 'Culture & Trust'
  },
  {
    num: '05',
    title: 'Personal Growth, Leadership & Sales Excellence',
    marathiTitle: 'वैयक्तिक विकास, नेतृत्व आणि विक्री कौशल्य',
    desc: 'Build leadership, motivation, customer relationships, rejection-handling and vertical or horizontal career growth.',
    marathiDesc: 'नेतृत्वगुण, आत्मप्रेरणा, ग्राहकांशी सकारात्मक संबंध आणि नकार पचवण्याची क्षमता विकसित करणे. करिअरमधील उभ्या तसेच आडव्या प्रगतीची संधी समजून घेणे.',
    icon: TrendingUp,
    accent: 'bg-purple-50 text-purple-800 border-purple-100',
    tag: 'Leadership & Sales'
  },
  {
    num: '06',
    title: 'Financial Wellness & Money Management',
    marathiTitle: 'आर्थिक स्वास्थ्य आणि पैशांचे व्यवस्थापन',
    desc: 'Explore budgeting, savings, EMIs, emergency funds, insurance, investments, retirement and fraud prevention with budget games.',
    marathiDesc: 'अर्थसंकल्प तयार करणे, बचत, कर्जाचे हप्ते, आपत्कालीन निधी, विमा, गुंतवणुकीची मूलतत्त्वे, निवृत्तीचे नियोजन आणि आर्थिक फसवणुकीपासून संरक्षण याविषयी मार्गदर्शन.',
    icon: DollarSign,
    accent: 'bg-teal-50 text-teal-800 border-teal-100',
    tag: 'Financial IQ'
  }
];

// 4.3 Small Training Modules (All 10 modules, 12 hours)
const tenModules = [
  {
    num: '01',
    title: 'Stress Management',
    marathiTitle: 'ताणतणाव व्यवस्थापन',
    duration: '2 Hours',
    description: 'Work and personal stress, emotions and relaxation.',
    marathiDesc: 'कार्यालयीन व वैयक्तिक ताण, भावनांचे नियमन आणि मनःशांतीसाठी उपयुक्त उपाय.',
    activities: ['Stress Thermometer', 'Emotional Balance'],
    icon: Brain
  },
  {
    num: '02',
    title: 'Digital Wellbeing & Cybersecurity',
    marathiTitle: 'डिजिटल स्वास्थ्य व सायबर सुरक्षा',
    duration: '1.5 Hours',
    description: 'Screen habits, digital detox, phishing and scams.',
    marathiDesc: 'स्क्रीनचा संतुलित वापर, डिजिटल विश्रांती, फिशिंग आणि ऑनलाइन फसवणुकीपासून सावधगिरी.',
    activities: ['Digital Habit Audit', 'Spot the Fraud'],
    icon: ShieldCheck
  },
  {
    num: '03',
    title: 'Time Management',
    marathiTitle: 'वेळेचे नियोजन',
    duration: '1 Hour',
    description: 'Priorities, planning and overcoming procrastination.',
    marathiDesc: 'कामांचे प्राधान्यक्रम ठरवणे, योग्य नियोजन करणे आणि काम पुढे ढकलण्याची सवय कमी करणे.',
    activities: ['24-Hour Audit', 'Priority Matrix'],
    icon: Clock
  },
  {
    num: '04',
    title: 'Family & Work-Life Balance',
    marathiTitle: 'कुटुंब आणि काम-जीवन संतुलन',
    duration: '1 Hour',
    description: 'Positive parenting, quality time and life balance.',
    marathiDesc: 'सकारात्मक पालकत्व, कुटुंबासोबत गुणवत्तापूर्ण वेळ आणि काम-जीवन संतुलन साधणे.',
    activities: ['Life Balance Wheel', 'Family Time Plan'],
    icon: Heart
  },
  {
    num: '05',
    title: 'Ethics & Professional Conduct',
    marathiTitle: 'नैतिक मूल्ये व व्यावसायिक वर्तन',
    duration: '1 Hour',
    description: 'Integrity, discipline, accountability and respect.',
    marathiDesc: 'सचोटी, शिस्त, जबाबदारीची जाणीव आणि सहकाऱ्यांबद्दल आदर विकसित करणे.',
    activities: ['Ethical Dilemma Cards', 'Values Game'],
    icon: Award
  },
  {
    num: '06',
    title: 'Communication Skills',
    marathiTitle: 'प्रभावी संवाद कौशल्य',
    duration: '1 Hour',
    description: 'Speaking, listening, feedback and confidence.',
    marathiDesc: 'स्पष्टपणे बोलणे, लक्षपूर्वक ऐकणे, अभिप्राय देणे आणि आत्मविश्वास वाढवणे.',
    activities: ['Listening Challenge', 'Role Play'],
    icon: Users
  },
  {
    num: '07',
    title: 'Teamwork & Conflict Resolution',
    marathiTitle: 'संघभावना आणि संघर्ष निराकरण',
    duration: '1.5 Hours',
    description: 'Trust, differences and constructive disagreement.',
    marathiDesc: 'परस्पर विश्वास वाढवणे, मतभिन्नता स्वीकारणे आणि संघर्षाचे रचनात्मक निराकरण करणे.',
    activities: ['Team Tower', 'Role Play'],
    icon: Zap
  },
  {
    num: '08',
    title: 'Career Growth',
    marathiTitle: 'करिअरमधील प्रगती व उद्दिष्टे',
    duration: '1 Hour',
    description: 'Strengths, goals and career development paths.',
    marathiDesc: 'स्वतःची बलस्थाने ओळखणे, करिअरची उद्दिष्टे ठरवणे आणि प्रगतीचा मार्ग आखणे.',
    activities: ['Career Roadmap', 'SWOT'],
    icon: TrendingUp
  },
  {
    num: '09',
    title: 'Problem Solving & Decision Making',
    marathiTitle: 'समस्या निवारण आणि निर्णयक्षमता',
    duration: '1 Hour',
    description: 'Logical, creative and calm decision-making.',
    marathiDesc: 'तार्किक व सर्जनशील विचार करून शांतपणे आणि योग्य वेळी निर्णय घेणे.',
    activities: ['Case Study', 'Five Whys'],
    icon: Activity
  },
  {
    num: '10',
    title: 'Health & Daily Habits',
    marathiTitle: 'आरोग्य आणि दैनंदिन सवयी',
    duration: '1 Hour',
    description: 'Sleep, nutrition, movement and healthy routines.',
    marathiDesc: 'पुरेशी झोप, संतुलित आहार, शारीरिक हालचाल आणि आरोग्यदायी दैनंदिन सवयी जोपासणे.',
    activities: ['Habit Tracker', '21-Day Challenge'],
    icon: Sparkles
  }
];

// 4.4 Interactive Learning Activities
const interactiveActivities = [
  {
    title: 'Team Tower Challenge',
    marathiTitle: 'टीम टॉवर ग्रुप चॅलेंज',
    desc: 'Hands-on group construction exercise testing communication under time pressure, role allocation, and collective trust.',
    marathiDesc: 'गटाने एक रचना तयार करताना सहकार्य आणि संघभावनेचे महत्त्व अनुभवणे.',
    tag: 'Collaboration',
    icon: Zap,
    accent: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    title: 'Salary Survival Game',
    marathiTitle: 'सॅलरी सर्व्हायव्हल बजेट गेम',
    desc: 'Plan a realistic monthly budget, allocate emergency savings, tackle surprise financial shock scenarios, and cultivate fiscal discipline.',
    marathiDesc: 'उत्पन्नानुसार खर्चाचे नियोजन करून अनपेक्षित खर्चाचा सामना करण्याचा सराव.',
    tag: 'Financial IQ',
    icon: DollarSign,
    accent: 'bg-teal-50 text-teal-800 border-teal-200'
  },
  {
    title: 'Stress Bucket & Thermometer',
    marathiTitle: 'ताण व्यवस्थापन बादली',
    desc: 'Identify unique workplace stress triggers and learn tangible emotional decompression techniques before burnout overflow happens.',
    marathiDesc: 'तणाव निर्माण होण्याची कारणे शोधणे आणि त्यावर उपाय ठरवणे.',
    tag: 'Mental Health',
    icon: Brain,
    accent: 'bg-blue-50 text-[#1a235c] border-blue-200'
  },
  {
    title: 'Walk in My Shoes',
    marathiTitle: 'दुसऱ्याच्या दृष्टिकोनातून पाहणे',
    desc: 'Perspective-taking roleplay to understand colleagues, cross-department dependencies, and customer frustrations to de-escalate friction.',
    marathiDesc: 'भूमिकानाट्याच्या माध्यमातून दुसऱ्याचा दृष्टिकोन समजून घेणे.',
    tag: 'Empathy Building',
    icon: Heart,
    accent: 'bg-rose-50 text-rose-800 border-rose-200'
  },
  {
    title: 'Ethics Courtroom',
    marathiTitle: 'एथिक्स कोर्टरूम गटचर्चा',
    desc: 'Engaging group debate exploring real-world corporate dilemmas, accountability, conflict-of-interest, and organizational integrity.',
    marathiDesc: 'कामाच्या ठिकाणच्या अवघड नैतिक निर्णयांवर गटचर्चा करणे.',
    tag: 'Workplace Ethics',
    icon: ShieldCheck,
    accent: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  },
  {
    title: 'Active Listening Challenge',
    marathiTitle: 'अवधानपूर्वक श्रवण आव्हान',
    desc: 'Practical exercises to eliminate non-attentive interruptions, synthesize core messages, and deliver constructive supportive feedback.',
    marathiDesc: 'लक्षपूर्वक ऐकणे आणि योग्य, स्पष्ट प्रतिसाद देण्याचा सराव.',
    tag: 'Communication',
    icon: Users,
    accent: 'bg-indigo-50 text-indigo-800 border-indigo-200'
  }
];

// 4.5 Industry-Specific Solutions
const industrySolutions = [
  {
    name: 'IT & Software Companies',
    marathiName: 'माहिती तंत्रज्ञान व सॉफ्टवेअर',
    challenges: 'Long screen hours, tight sprint deadlines, cognitive overload, remote isolation, and rapid tech fatigue.',
    solution: 'Focuses on stress regulation, digital wellbeing habits, focus endurance, team synergy, and creative problem-solving.',
    marathiText: 'सतत स्क्रीनसमोर काम, कठोर वेळापत्रक आणि तंत्रज्ञानातील वेगवान बदल यामुळे तणाव व्यवस्थापन, डिजिटल स्वास्थ्य, एकाग्रता आणि एकत्रित समस्या-निराकरण महत्त्वाचे ठरते.',
    icon: Brain
  },
  {
    name: 'Automobile & Manufacturing Plants',
    marathiName: 'ऑटोमोबाईल व मॅन्युफॅक्चरिंग',
    challenges: 'Shift rotations, stringent daily shop-floor production targets, plant safety, and physical endurance demands.',
    solution: 'Cultivates unambiguous communication, emotional stability, stress coping, peer safety vigilance, and disciplined execution.',
    marathiText: 'पाळीपद्धतीतील काम, उत्पादनाचे उद्दिष्ट आणि थकवा यांचा विचार करता शिस्त, स्पष्ट संवाद, भावनिक स्थैर्य आणि सुरक्षित निर्णयक्षमता यांची गरज असते.',
    icon: ShieldCheck
  },
  {
    name: 'Banking, Finance & Sales Teams',
    marathiName: 'बँकिंग, वित्त आणि विक्री',
    challenges: 'Quarterly sales targets, demanding clients, repeated customer rejections, and monetary pressure.',
    solution: 'Builds rejection resilience, uncompromised ethical conduct, persuasive client rapport, and sustainable self-motivation.',
    marathiText: 'विक्रीची उद्दिष्टे, ग्राहकांच्या अपेक्षा आणि नकारात्मक प्रतिसाद यांना सामोरे जाण्यासाठी आत्मविश्वास, नैतिक व्यवहार, प्रभावी संवाद आणि प्रेरणा आवश्यक असते.',
    icon: TrendingUp
  },
  {
    name: 'Healthcare & Educational Organisations',
    marathiName: 'आरोग्यसेवा आणि शिक्षण',
    challenges: 'High emotional stakes, non-stop public interaction, caregiving exhaustion, and delicate human dynamics.',
    solution: 'Prioritizes deep interpersonal empathy, conflict de-escalation, patient communication, and healthy work-life boundaries.',
    marathiText: 'मोठी जबाबदारी आणि भावनिकदृष्ट्या आव्हानात्मक संवाद यामुळे सहानुभूती, संघर्ष निराकरण, प्रभावी संवाद आणि काम-जीवन संतुलन या कौशल्यांना विशेष महत्त्व आहे.',
    icon: Heart
  }
];

// 4.6 Packages & Pricing
const corporatePackages = [
  {
    id: 'package-01',
    name: '01. Essential Package',
    marathiName: 'एसेंशिअल पॅकेज',
    duration: '4 Hours',
    workshops: '2 Workshops',
    price: '₹30,000',
    priceNote: 'Fixed Investment for Entire Batch',
    workshopsList: [
      {
        title: 'Workshop 1: Mental Wellbeing & Stress Management',
        topics: 'Workplace stress, emotional balance, overthinking and healthy digital habits.'
      },
      {
        title: 'Workshop 2: Work Efficiency & Problem Solving',
        topics: 'Time management, calm decisions, case studies and interactive SWOT of self & peers.'
      }
    ],
    highlight: false,
    badge: 'Core Foundation'
  },
  {
    id: 'package-02',
    name: '02. Growth 360',
    marathiName: 'ग्रोथ ३६० पॅकेज',
    duration: '6 Hours',
    workshops: '3 Workshops + Appreciation',
    price: '₹50,000',
    priceNote: 'Comprehensive Team Alignment',
    workshopsList: [
      {
        title: 'Includes both Essential Workshops',
        topics: 'Mental Wellbeing + Work Efficiency & Problem Solving modules.'
      },
      {
        title: 'Workshop 3: Ethics, Teamwork & Employee Appreciation',
        topics: 'Team activities, short employee speeches, values reinforcement and recognition by management.'
      }
    ],
    highlight: true,
    badge: 'Most Recommended'
  },
  {
    id: 'package-03',
    name: '03. Corporate Transformation',
    marathiName: 'कॉर्पोरेट ट्रान्सफॉर्मेशन पॅकेज',
    duration: 'Customised Schedule',
    workshops: '1-on-1 Counselling + 2-Hour Finale',
    price: '₹4,000',
    priceNote: 'per Employee (Min. 15 Participants)',
    workshopsList: [
      {
        title: 'Personal One-to-One Confidential Counselling',
        topics: 'Supportive, confidential setting to explore professional and personal concerns, questionnaires, puzzles & psychological assessments.'
      },
      {
        title: 'Holistic Intelligence & Development Mapping',
        topics: 'Emotional intelligence exploration, social skills, creativity, resilience and individual career growth guidance.'
      },
      {
        title: 'Gifts / Trophies & Concluding 2-Hour Motivational Workshop',
        topics: 'Recognition for achievements followed by a high-energy workshop covering wellbeing, efficiency, values & teamwork.'
      }
    ],
    calculationNote: 'Example: 30 Employees × ₹4,000 = ₹1,20,000',
    confidentiality: 'Individual information remains 100% confidential; assessments are purely for development.',
    highlight: false,
    badge: 'Deep Individual Impact'
  }
];

// 4.8 Corporate Gallery Photos
const galleryGlimpses = [
  {
    title: 'Corporate Training Session',
    marathi: 'कॉर्पोरेट प्रशिक्षण सत्र',
    src: '/corporate/corporate-training-session.jpg',
    category: 'Workshop in Progress'
  },
  {
    title: 'Interactive Group Activity',
    marathi: 'संवादात्मक गट उपक्रम',
    src: '/corporate/interactive-group-activity.jpg',
    category: 'Team Exercise'
  },
  {
    title: 'Expert Lecture Session',
    marathi: 'तज्ज्ञ व्याख्यान सत्र',
    src: '/corporate/expert-lecture-session.jpg',
    category: 'Executive Guidance'
  },
  {
    title: 'Speaker Session',
    marathi: 'प्रमुख वक्ता व्याख्यान',
    src: '/corporate/speaker-session.jpg',
    category: 'Corporate Keynote'
  },
  {
    title: 'Large-Scale Awareness Programme',
    marathi: 'मोठ्या प्रमाणावरील जनजागृती कार्यक्रम',
    src: '/corporate/large-scale-awareness.jpg',
    category: 'Mass Employee Engagement'
  },
  {
    title: 'Recognition & Appreciation',
    marathi: 'गुणगौरव व सत्कार सोहळा',
    src: '/corporate/recognition-appreciation.jpg',
    category: 'Management Felicitation'
  }
];

export default function CorporateTrainingPage() {
  const [selectedPackageForEnquiry, setSelectedPackageForEnquiry] = useState('PACKAGE 02 — GROWTH 360 (₹50,000)');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const handlePackageClick = (packageName: string) => {
    setSelectedPackageForEnquiry(packageName);
    setEnquiryModalOpen(true);
  };

  const handleWhatsAppBooking = (pkgName?: string) => {
    const text = pkgName 
      ? `Hello Prof. Dinesh Tathe & MindMappers Team! 🌟\n\nI am interested in booking the corporate training package: "${pkgName}". Please share the workshop schedule and booking details.`
      : 'Hello Prof. Dinesh Tathe & MindMappers Team! 🌟\n\nI would like to enquire about your Corporate Employee Training Workshops for our organization. Please share your corporate proposal.';
    window.open(`https://wa.me/919822258300?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 w-full max-w-full overflow-x-hidden selection:bg-[#F4A16C]/30">
      <Header />

      {/* 1. CORPORATE HERO SECTION (MindMappers Brand Styling, NO Neon Cyan, NO Glassmorphism) */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#1a235c] via-[#212b6b] to-[#1a235c] text-white overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        
        {/* Subtle Brand Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4A16C]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Brand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F4A16C] text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
            <Building2 size={14} className="text-[#F4A16C]" />
            MINDMAPPERS® CORPORATE EMPLOYEE TRAINING VERTICAL
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-5 text-white max-w-5xl mx-auto">
            Build Better Minds. <br />
            <span className="text-white">Strengthen Teams. </span>
            <span className="text-[#F4A16C]">Transform Workplaces.</span>
          </h1>

          {/* Marathi Subtitle */}
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#F4A16C] mb-4 max-w-3xl mx-auto">
            कर्मचाऱ्यांचे मानसिक स्वास्थ्य, कार्यक्षमता, नेतृत्व आणि सकारात्मक कार्यसंस्कृती घडवण्यासाठी प्रभावी प्रशिक्षण.
          </p>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            A structured bilingual training programme focused on employee mental wellbeing, work efficiency, ethics, 10 small training modules (12 hours), and personal one-on-one transformation.
          </p>

          {/* Action CTAs (WhatsApp Connected) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Button 
              onClick={() => handleWhatsAppBooking()}
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Chat with Director on WhatsApp
            </Button>

            <Button 
              onClick={() => { setSelectedPackageForEnquiry('Corporate Training Consultation'); setEnquiryModalOpen(true); }}
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#F4A16C] hover:bg-[#FF6B00] text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl"
            >
              Request Corporate Proposal
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-13 px-7 rounded-full border-white/20 bg-white/10 hover:bg-white hover:text-[#1a235c] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <a href="/asset/MindMappers-Corporate-Training-Brochure.pdf" download="MindMappers_Corporate_Training_Brochure.pdf">
                <Download size={15} className="mr-2 text-[#F4A16C]" /> Download Corporate Brochure (PDF)
              </a>
            </Button>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-[#F4A16C]">10 Modules</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">12-Hour Curriculum</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-white">6 Activities</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Interactive Team Games</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-[#F4A16C]">100% Bilingual</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Marathi & English</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl font-black text-white">5 Cities</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">Pune • Mumbai • Satara</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SIX KEY AREAS OF EMPLOYEE DEVELOPMENT */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <Briefcase size={13} className="text-[#F4A16C]" />
              Holistic Organisational Impact
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Six Key Areas of <span className="text-[#1a235c]">Employee Development</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              कर्मचाऱ्यांच्या सर्वांगीण प्रगतीसाठी ६ प्रमुख विषय
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Designed to create immediate, observable improvements in mindset, team synergy, work efficiency, and company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sixKeyAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card 
                  key={area.num}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-xl bg-[#1a235c] text-white font-black text-xs flex items-center justify-center shadow-xs">
                        {area.num}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${area.accent}`}>
                        <Icon size={12} /> {area.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#1a235c] transition-colors mb-1 leading-snug">
                      {area.title}
                    </h3>

                    <p className="text-xs font-bold text-[#F4A16C] mb-3">
                      {area.marathiTitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                      {area.desc}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-2">
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        {area.marathiDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>MindMappers Core Vertical</span>
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. TEN SMALL TRAINING MODULES (12 HOURS) — SWIPER CAROUSEL ON MOBILE */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden w-full max-w-full border-y border-slate-200/80" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
                <Clock size={13} className="text-[#F4A16C]" />
                12-Hour Modular Curriculum
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                10 Small Training Modules
              </h2>
              <p className="text-sm font-bold text-[#F4A16C] mt-1">
                १० छोटे प्रशिक्षण मॉड्यूल्स (एकूण १२ तास)
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-xl">
                Structured in compact, high-impact units with real-world case studies and interactive team exercises.
              </p>
            </div>

            <Button 
              onClick={() => handleWhatsAppBooking('10 Modules Corporate Training')}
              className="self-start md:self-end h-11 px-6 rounded-full bg-[#1a235c] hover:bg-[#3D57C5] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2 shrink-0"
            >
              <MessageCircle size={15} /> Book Training Modules
            </Button>
          </div>

          {/* Modules Horizontal Scrollable Carousel on Mobile, Grid on Tablet/Desktop */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
            {tenModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={mod.num}
                  className="w-[260px] sm:w-[280px] md:w-auto shrink-0 snap-start bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#1a235c]/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 font-black text-xs flex items-center justify-center">
                        {mod.num}
                      </span>
                      <span className="text-[10px] font-black uppercase text-[#1a235c] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Clock size={11} /> {mod.duration}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-slate-900 mb-0.5 group-hover:text-[#1a235c] transition-colors leading-snug">
                      {mod.title}
                    </h4>

                    <p className="text-[11px] font-bold text-[#F4A16C] mb-2">
                      {mod.marathiTitle}
                    </p>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
                      {mod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
                      Included Activities:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {mod.activities.map((act, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="md:hidden text-xs text-slate-400 text-center mt-3">
            &larr; Swipe horizontally to view all 10 training modules &rarr;
          </p>

        </div>
      </section>

      {/* 4. SIX HANDS-ON INTERACTIVE LEARNING ACTIVITIES */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <Zap size={13} className="text-[#F4A16C]" />
              Activity-Based Learning
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Interactive Team Activities & <span className="text-[#F4A16C]">Games</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              प्रत्यक्ष कृती, खेळ आणि प्रात्यक्षिकांवर आधारित रंजक उपक्रम
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              No boring one-way lectures. Every participant actively engages in simulations, teamwork building, and self-reflection exercises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interactiveActivities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <Card 
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${act.accent}`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#1a235c] bg-slate-100 px-2.5 py-1 rounded-full">
                        {act.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#1a235c] transition-colors mb-1">
                      {act.title}
                    </h3>

                    <p className="text-xs font-bold text-[#F4A16C] mb-3">
                      {act.marathiTitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                      {act.desc}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-500 font-medium">
                    {act.marathiDesc}
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INDUSTRY-SPECIFIC CUSTOMISED SOLUTIONS */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#1a235c] text-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F4A16C] font-bold text-xs uppercase tracking-wider mb-3">
              <Compass size={13} />
              Sector-Specific Customisation
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
              Tailored for <span className="text-[#F4A16C]">Your Industry</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              प्रत्येक क्षेत्राच्या विशिष्ट आव्हानांनुसार तयार केलेले प्रशिक्षण
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              Every industry has distinct stressors and teamwork dynamics. We tailor our modules to directly address your operational realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {industrySolutions.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg sm:text-xl font-black text-white">
                        {ind.name}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F4A16C]">
                        <Icon size={20} />
                      </div>
                    </div>

                    <p className="text-xs font-bold text-[#F4A16C] mb-4">
                      {ind.marathiName}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="p-3.5 bg-black/20 rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 block mb-1">
                          Industry Challenges:
                        </span>
                        <p className="text-xs text-slate-300 font-medium">
                          {ind.challenges}
                        </p>
                      </div>

                      <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#F4A16C] block mb-1">
                          MindMappers Targeted Solution:
                        </span>
                        <p className="text-xs text-slate-200 font-medium">
                          {ind.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed pt-3 border-t border-white/10">
                    {ind.marathiText}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. TRANSPARENT CORPORATE PACKAGES & PRICING */}
      <section id="packages" className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <DollarSign size={13} className="text-[#F4A16C]" />
              Transparent Corporate Investment
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Corporate Training <span className="text-[#1a235c]">Packages</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              संस्था आणि कंपन्यांसाठी ३ लवचिक प्रशिक्षण पॅकेजेस
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Transparent, competitive corporate investments with zero hidden surprises. Tailored for small teams, departments, or company-wide transformation.
            </p>
          </div>

          {/* 3 Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {corporatePackages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight 
                    ? 'border-2 border-[#1a235c] shadow-2xl shadow-blue-900/10 bg-white relative lg:-translate-y-2' 
                    : 'border border-slate-200/90 shadow-sm bg-white hover:shadow-xl hover:shadow-blue-900/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      pkg.highlight 
                        ? 'bg-[#1a235c] text-white' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-0.5">
                    {pkg.name}
                  </h3>

                  <p className="text-xs font-bold text-[#F4A16C] mb-4">
                    {pkg.marathiName}
                  </p>

                  {/* Price */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-[#1a235c]">
                      {pkg.price}
                    </span>
                    <span className="block text-xs font-bold text-slate-500 mt-1">
                      {pkg.priceNote}
                    </span>
                    {pkg.calculationNote && (
                      <span className="block text-[11px] font-medium text-emerald-700 mt-1">
                        {pkg.calculationNote}
                      </span>
                    )}
                  </div>

                  {/* Workshops List */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                      Curriculum Breakdown:
                    </span>
                    {pkg.workshopsList.map((ws, wIdx) => (
                      <div key={wIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <strong className="font-bold text-slate-900 block">{ws.title}</strong>
                          <span className="text-slate-500 text-[11px] leading-relaxed">{ws.topics}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {pkg.confidentiality && (
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[10px] text-[#1a235c] font-bold mb-6">
                      {pkg.confidentiality}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <Button 
                    onClick={() => handleWhatsAppBooking(pkg.name)}
                    className="w-full h-11 rounded-xl bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> Book via WhatsApp
                  </Button>

                  <Button 
                    onClick={() => handlePackageClick(pkg.name)}
                    variant="outline"
                    className="w-full h-11 rounded-xl border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Enquiry Form
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-xs text-slate-400 text-center mt-8">
            * Travel & stay arrangements outside Pune/Chh. Sambhajinagar to be discussed mutually based on corporate location.
          </p>

        </div>
      </section>

      {/* 7. AUTHENTIC CORPORATE PHOTO GALLERY */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#f8fafc] relative overflow-hidden w-full max-w-full border-t border-slate-200/80" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#1a235c] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles size={13} className="text-[#F4A16C]" />
              Proven On-Ground Engagement
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
              Past Workshop <span className="text-[#1a235c]">Glimpses</span>
            </h2>
            
            <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-3">
              विविध संस्था आणि कंपन्यांमधील कार्यशाळांची छायाचित्रे
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Photographs captured during interactive corporate training sessions, team tower exercises, executive seminars, and employee recognition events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryGlimpses.map((photo, pIdx) => (
              <div 
                key={pIdx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={() => setLightboxImg({ src: photo.src, title: photo.title })}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase text-white bg-slate-900/80 px-2.5 py-1 rounded-full">
                      {photo.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-black text-slate-900 mb-0.5">
                    {photo.title}
                  </h4>
                  <p className="text-xs font-bold text-[#F4A16C]">
                    {photo.marathi}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. DIRECTOR CREDENTIALS STRIP */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden w-full max-w-full border-t border-slate-100" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-4 border-white shrink-0">
              <Image 
                src="/founder/founder.jpg"
                alt="Prof. Dinesh Tathe"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F4A16C] bg-white px-3 py-1 rounded-full border border-slate-200 inline-block mb-2">
                Lead Corporate Trainer & Founder
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
                Prof. Dinesh Tathe
              </h3>
              <p className="text-xs font-bold text-[#1a235c] mb-3">
                Career Guidance, Student Welfare & Corporate Employee Transformation
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl">
                With extensive experience conducting auditorium sessions, youth mindset orientations, and corporate employee transformation workshops, Prof. Dinesh Tathe brings a relatable, empathetic, and activity-driven pedagogy that connects with frontline employees as well as executive leadership.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button 
                  onClick={() => handleWhatsAppBooking('Consultation with Prof. Dinesh Tathe')}
                  className="h-10 px-5 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5"
                >
                  <MessageCircle size={15} /> WhatsApp Director Directly
                </Button>

                <Button asChild variant="outline" className="h-10 px-5 rounded-full border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider">
                  <a href="tel:+919822258300">
                    <Phone size={14} className="mr-1.5 text-[#F4A16C]" /> +91 9822258300
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FINAL CORPORATE BOOKING CALLOUT */}
      <section className="py-16 md:py-24 bg-[#1a235c] text-white relative overflow-hidden w-full max-w-full" style={{ contain: 'paint' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">
            Ready to Transform Your <span className="text-[#F4A16C]">Workplace?</span>
          </h2>
          
          <p className="text-sm sm:text-base font-bold text-[#F4A16C] mb-4">
            तुमच्या संस्थेसाठी प्रभावी प्रशिक्षण कार्यशाळेचे आयोजन करा.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Contact us today to schedule a preliminary discussion or request a customized proposal for your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button 
              onClick={() => handleWhatsAppBooking()}
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} /> Chat with Director on WhatsApp
            </Button>

            <Button 
              onClick={() => { setSelectedPackageForEnquiry('Corporate Proposal Enquiry'); setEnquiryModalOpen(true); }}
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#F4A16C] hover:bg-[#FF6B00] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg"
            >
              Book Corporate Consultation
            </Button>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Serving Pune • Mumbai • Nashik • Satara • Chhatrapati Sambhajinagar
          </p>

        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!lightboxImg} onOpenChange={(open) => !open && setLightboxImg(null)}>
        <DialogContent className="max-w-3xl p-2 bg-slate-950 border-slate-800 text-white">
          {lightboxImg && (
            <div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image 
                  src={lightboxImg.src}
                  alt={lightboxImg.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm font-bold text-slate-200 mt-2 pb-1">
                {lightboxImg.title}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Global WhatsApp Connected Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen}
        onOpenChange={setEnquiryModalOpen}
        initialVertical="corporate"
      />

      <Footer />
    </main>
  );
}
