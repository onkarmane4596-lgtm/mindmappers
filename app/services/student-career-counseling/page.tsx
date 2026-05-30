'use client';

import { ServiceTemplate, ServiceData } from '@/components/sections/service-template';
import { Users, BookOpen, Compass, Award, Star } from 'lucide-react';

const serviceData: ServiceData = {
  slug: 'student-career-counseling',
  title: 'Student Career Counseling',
  marathiTitle: 'विद्यार्थी करिअर मार्गदर्शन',
  description: 'Personalized guidance to help students discover their ideal career path.',
  detailedIntro: 'Making the right career choice is one of the most critical decisions in a student\'s life. Our Student Career Counseling program uses advanced scientific assessments and expert psychological insights to identify the student\'s natural cognitive strengths, intelligence distribution, personality traits, and deep-seated career interests. We help clear the confusion after 10th and 12th standards, charting a precise step-by-step roadmap to their dream career.',
  icon: Users,
  colorGradient: 'from-[#1F2F78] to-[#3D57C5]',
  accentColor: '#F4A16C',
  secondaryAccent: 'bg-orange-50 text-[#F4A16C] border-orange-100',
  bannerImage: '/hero/slider/1.jpeg',
  benefits: [
    {
      title: 'Clear Stream Selection',
      description: 'Choose between Science, Commerce, and Arts with complete statistical confidence.',
      icon: Compass
    },
    {
      title: 'Interests & Aptitude Mapping',
      description: 'Match your core inner passions with realistic, high-growth industrial jobs.',
      icon: Star
    },
    {
      title: 'Future-Proof Roadmap',
      description: 'Get a clear step-by-step career path spanning education, training, and jobs.',
      icon: Award
    },
    {
      title: 'Study & Goal Strategy',
      description: 'Establish actionable board-exam strategies and personalized milestone guides.',
      icon: BookOpen
    }
  ],
  processSteps: [
    {
      title: 'Scientific Assessment',
      description: 'Online/offline multi-dimensional test assessing aptitude, interests, personality, and intelligence.'
    },
    {
      title: 'Expert Evaluation',
      description: 'Detailed review by senior counseling psychologists to map results against industry trends.'
    },
    {
      title: 'Interactive Consultation',
      description: 'Deep interactive face-to-face or digital discussion with student and parents.'
    },
    {
      title: 'Custom Career Roadmap',
      description: 'Delivery of an exhaustive multi-page report and actionable career development plan.'
    }
  ],
  targetAudience: [
    'High school students (8th, 9th, 10th Stds) choosing subjects.',
    'Junior college students (11th, 12th Stds) deciding professional streams.',
    'Undergraduate students planning specialization paths.',
    'Confused candidates seeking stream-correction counseling.',
    'Students planning overseas undergraduate or postgraduate studies.'
  ],
  faqs: [
    {
      q: 'Which standard is best to start career counseling?',
      a: 'From 8th standard onwards is ideal, as it helps align the student\'s board preparations and subject selections early.'
    },
    {
      q: 'How long is the counseling process?',
      a: 'The entire process takes about 2 to 3 days, from taking the scientific test to receiving the final counseling roadmap.'
    },
    {
      q: 'Are parents required to join?',
      a: 'Yes, parents are an essential part of the interactive counseling session to align family goals and supportive expectations.'
    }
  ]
};

export default function StudentCareerCounselingPage() {
  return <ServiceTemplate service={serviceData} />;
}
