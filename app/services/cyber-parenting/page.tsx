'use client';

import { ServiceTemplate, ServiceData } from '@/components/sections/service-template';
import { ShieldCheck, Monitor, Users, Eye, HelpCircle } from 'lucide-react';

const serviceData: ServiceData = {
  slug: 'cyber-parenting',
  title: 'Cyber Parenting',
  marathiTitle: 'सायबर पालकत्व',
  description: 'Equipping parents with tools to navigate the digital world safely.',
  detailedIntro: 'The internet, gaming, and social networks have created a new virtual landscape that children navigate daily. Cyber Parenting equips you with the tools, technological understanding, and emotional strategies to guide your child safely in this digital age. We help manage screen dependency, establish healthy boundaries, prevent cyberbullying, and protect them from online predatory behaviors without destroying your relationship.',
  icon: ShieldCheck,
  colorGradient: 'from-[#1F2F78] to-[#3D57C5]',
  accentColor: '#F4A16C',
  secondaryAccent: 'bg-orange-50 text-[#F4A16C] border-orange-100',
  bannerImage: '/hero/slider/5.jpeg',
  benefits: [
    {
      title: 'Digital Safety Toolkit',
      description: 'Acquire practical strategies and safety filters to guard online content.',
      icon: Eye
    },
    {
      title: 'Manage Screen Addictions',
      description: 'Systematically reduce digital dependency and compulsive gaming habits.',
      icon: Monitor
    },
    {
      title: 'Cyber Threat Prevention',
      description: 'Detect early warning signs of cyberbullying, online grooming, or identity leakage.',
      icon: ShieldCheck
    },
    {
      title: 'Real-World Balance',
      description: 'Restore physical play, face-to-face family conversations, and academic focuses.',
      icon: Users
    }
  ],
  processSteps: [
    {
      title: 'Screen Footprint Audit',
      description: 'Analyzing the child\'s current daily device usage patterns, gaming preferences, and social applications.'
    },
    {
      title: 'Technology Empowerment',
      description: 'Training parents on age-appropriate parental controls, safe search setups, and account tracking.'
    },
    {
      title: 'Dynamic Time Compacts',
      description: 'Coaching parents in establishing collaborative, non-punitive "Family Digital Rules".'
    },
    {
      title: 'Re-engagement Counseling',
      description: 'Interactive therapy to help the child transition dopamine dependency from screens back to physical achievements.'
    }
  ],
  targetAudience: [
    'Parents of children exhibiting signs of severe gaming dependency or social withdrawal.',
    'Families looking to regulate uncontrolled scrolling or bedtime screen usage.',
    'Parents concerned about high online exposure, digital footprints, or online safety.',
    'Guardians trying to understand tech trends, social media slang, and app risks.',
    'Educators seeking parent-aligned guidance to curb phone overuse in academic settings.'
  ],
  faqs: [
    {
      q: 'Will my child get defensive if I install parental controls?',
      a: 'We teach parents how to present safety tools as collaborative care rather than policing, preventing resentment.'
    },
    {
      q: 'How much screen time is healthy for a teenager?',
      a: 'We help you build customized timeframes based on educational utility vs passive scrolling, aligning to global pediatric guidelines.'
    },
    {
      q: 'What do I do if my child is already addicted to a game?',
      a: 'Our psychologists use targeted cognitive methods to systematically reduce gaming cravings and replace them with real-world stimuli.'
    }
  ]
};

export default function CyberParentingPage() {
  return <ServiceTemplate service={serviceData} />;
}
