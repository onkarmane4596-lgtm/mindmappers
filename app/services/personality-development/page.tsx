'use client';

import { ServiceTemplate, ServiceData } from '@/components/sections/service-template';
import { Target, UserCheck, Star, Users, MessageSquare } from 'lucide-react';

const serviceData: ServiceData = {
  slug: 'personality-development',
  title: 'Personality Development',
  marathiTitle: 'व्यक्तिमत्त्व विकास',
  description: 'Holistic programs to enhance self-confidence and communication skills.',
  detailedIntro: 'Technical skills might get you an interview, but personality and character build careers and lasting relationships. Our Personality Development program is designed to shape you into the best version of yourself. Through specialized, interactive modules, we cultivate leadership traits, body language awareness, emotional maturity, effective public speaking, and professional social etiquette that make you stand out in any crowd.',
  icon: Target,
  colorGradient: 'from-[#1F2F78] to-[#3D57C5]',
  accentColor: '#F4A16C',
  secondaryAccent: 'bg-orange-50 text-[#F4A16C] border-orange-100',
  bannerImage: '/hero/slider/3.jpeg',
  benefits: [
    {
      title: 'Unshakeable Self-Confidence',
      description: 'Break through shyness, stage fright, and severe social hesitation.',
      icon: UserCheck
    },
    {
      title: 'Powerful Communication',
      description: 'Master public speaking, group debate, and impact verbal skills.',
      icon: MessageSquare
    },
    {
      title: 'Leadership Etiquette',
      description: 'Acquire body language principles, posture alignment, and goal settings.',
      icon: Star
    },
    {
      title: 'Positive Social Mindset',
      description: 'Cultivate strong mental attitudes, emotional resilience, and networking traits.',
      icon: Users
    }
  ],
  processSteps: [
    {
      title: 'Initial Self-Audit',
      description: 'Comprehensive diagnostic assessing fear areas, communication traits, and posture bounds.'
    },
    {
      title: 'Customized Curriculum',
      description: 'Aligning candidates into tailored sessions covering public speech, stress, or interview drills.'
    },
    {
      title: 'Simulations & Role Play',
      description: 'Participating in interactive presentation drills, mock boards, and voice modulation classes.'
    },
    {
      title: 'Continuous Coaching & Evaluation',
      description: 'Personalized oversight from expert coaches ensuring progress is deeply tracked and sustained.'
    }
  ],
  targetAudience: [
    'School/college students struggling with low self-esteem or stage anxiety.',
    'Candidates preparing for crucial job interviews or competitive exams.',
    'Young executives looking to polish public speaking and communication skills.',
    'Shy individuals wanting to improve general conversation capability.',
    'Aspiring student leaders seeking team handling qualities.'
  ],
  faqs: [
    {
      q: 'How long does the training run?',
      a: 'We offer intensive 4-week weekend workshops and comprehensive 3-month coaching programs.'
    },
    {
      q: 'Will this program help overcome stage fear?',
      a: 'Absolutely! Stage fear and public speaking anxiety are primary focuses of this program, resolved via gradual, supportive exposure exercises.'
    },
    {
      q: 'Do you offer individual training?',
      a: 'Yes, we provide highly personalized one-on-one executive and student mentoring packages.'
    }
  ]
};

export default function PersonalityDevelopmentPage() {
  return <ServiceTemplate service={serviceData} />;
}
