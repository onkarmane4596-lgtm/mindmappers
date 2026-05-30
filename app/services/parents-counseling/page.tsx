'use client';

import { ServiceTemplate, ServiceData } from '@/components/sections/service-template';
import { Users, Heart, ShieldAlert, BookOpen, MessageCircle } from 'lucide-react';

const serviceData: ServiceData = {
  slug: 'parents-counseling',
  title: 'Parents Counseling',
  marathiTitle: 'पालक समुपदेशन',
  description: 'Supportive sessions for parents to better understand and guide their children.',
  detailedIntro: 'Parenting in the modern era comes with unique psychological and social challenges. Parents Counseling at MindMappers offers an empathetic space for parents to share their anxieties, understand their teen\'s brain chemistry and digital lifestyles, and learn effective modern parenting methods. We help you transition from rigid authority to structured friendship, promoting a home environment of deep mutual trust.',
  icon: Users,
  colorGradient: 'from-[#F4A16C] to-[#FF6B00]',
  accentColor: '#1F2F78',
  secondaryAccent: 'bg-blue-50 text-[#1F2F78] border-blue-100',
  bannerImage: '/hero/slider/4.jpeg',
  benefits: [
    {
      title: 'Conflict Resolution',
      description: 'Systematically resolve parent-child friction and daily power-struggles.',
      icon: ShieldAlert
    },
    {
      title: 'Modern Parenting Skills',
      description: 'Master effective discipline and supportive parenting boundaries.',
      icon: BookOpen
    },
    {
      title: 'Brain Chemistry Insights',
      description: 'Understand adolescent brain development, mood swings, and stressors.',
      icon: Heart
    },
    {
      title: 'Empathetic Dialogues',
      description: 'Establish non-defensive channels of speaking and active listening.',
      icon: MessageCircle
    }
  ],
  processSteps: [
    {
      title: 'Exploratory Dialogue',
      description: 'Evaluating current family communication habits, triggers, and pressure points.'
    },
    {
      title: 'Style Evaluation',
      description: 'Identifying parenting archetypes (permissive, authoritative, etc.) and alignment needs.'
    },
    {
      title: 'Active Parenting Training',
      description: 'Special workshops on time restrictions, structured freedom, and emotional tuning.'
    },
    {
      title: 'Parent-Child Alliance',
      description: 'Facilitating collaborative, guided alignment sessions to establish mutual home parameters.'
    }
  ],
  targetAudience: [
    'Parents of adolescents facing academic pressure or social anxiety.',
    'Families experiencing high conflict, back-talk, or emotional distance.',
    'New parents seeking professional guidance on developmental milestones.',
    'Parents feeling stressed, isolated, or overwhelmed by modern parenting demands.',
    'Guardians aiming to coordinate parenting strategies across extended families.'
  ],
  faqs: [
    {
      q: 'Should my child attend parent counseling?',
      a: 'The initial sessions are exclusively for parents. Based on the insights, we may conduct joint parent-child bridging sessions.'
    },
    {
      q: 'How many sessions are recommended?',
      a: 'Most parents experience significant communication improvements within 3 to 5 targeted sessions.'
    },
    {
      q: 'Can parenting counseling resolve school-refusal?',
      a: 'Yes, parenting adjustments combined with counseling are highly effective in understanding and resolving academic stress and school refusal.'
    }
  ]
};

export default function ParentsCounselingPage() {
  return <ServiceTemplate service={serviceData} />;
}
