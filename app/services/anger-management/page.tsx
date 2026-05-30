'use client';

import { ServiceTemplate, ServiceData } from '@/components/sections/service-template';
import { HeartPulse, Activity, Flame, ShieldAlert, Heart } from 'lucide-react';

const serviceData: ServiceData = {
  slug: 'anger-management',
  title: 'Anger Management',
  marathiTitle: 'राग व्यवस्थापन',
  description: 'Effective strategies for emotional regulation and conflict resolution.',
  detailedIntro: 'Anger is a natural, healthy human emotion—but when it becomes explosive or chronic, it can devastate academic performance, family relationships, and personal health. MindMappers\' Anger Management program provides kids, teens, and adults with evidence-based cognitive strategies (CBT) and deep relaxation methods to identify anger triggers, slow down reaction loops, and channel intense energy into productive communication.',
  icon: HeartPulse,
  colorGradient: 'from-[#F4A16C] to-[#FF6B00]',
  accentColor: '#1F2F78',
  secondaryAccent: 'bg-blue-50 text-[#1F2F78] border-blue-100',
  bannerImage: '/hero/slider/1.jpeg',
  benefits: [
    {
      title: 'Somatic Stress Relief',
      description: 'Acquire grounding physical exercises to control sudden anger spikes.',
      icon: Heart
    },
    {
      title: 'Cognitive CBT Tuning',
      description: 'Remodel the internal dialogue that escalates mild irritation into rage.',
      icon: Activity
    },
    {
      title: 'Assertive Communications',
      description: 'Learn to express boundaries and needs clearly and calmly without shouting.',
      icon: Flame
    },
    {
      title: 'Deep Relationship Repair',
      description: 'Mend parent-teen communication gaps and restore trust inside your home.',
      icon: ShieldAlert
    }
  ],
  processSteps: [
    {
      title: 'Trigger Mapping',
      description: 'Identifying specific environments, thoughts, and physical cues that spark explosive moods.'
    },
    {
      title: 'Reaction Interrupts',
      description: 'Constructing cognitive-behavioral tools to slow down and disrupt the anger cycle.'
    },
    {
      title: 'Physiological Grounding',
      description: 'Mastering somatic breathing techniques, progressive relaxation, and immediate time-out strategies.'
    },
    {
      title: 'Constructive Assertiveness',
      description: 'Simulating active role plays to communicate boundaries clearly and constructively without hostility.'
    }
  ],
  targetAudience: [
    'Teenagers exhibiting extreme irritability, outbursts, or slamming doors.',
    'Children undergoing temper tantrums or violent emotional episodes.',
    'Individuals experiencing chronic irritation, anxiety, or relationship friction.',
    'Professionals seeking high emotional self-regulation to handle workplace stress.',
    'Young adults struggling to express frustrations constructively without aggression.'
  ],
  faqs: [
    {
      q: 'Is anger management a form of therapy?',
      a: 'Yes, it incorporates cognitive-behavioral therapy (CBT) and emotional intelligence training to remodel responses.'
    },
    {
      q: 'Can child temper tantrums be resolved here?',
      a: 'Yes! We run specialized emotional-regulation coaching for children paired with parents counseling for consistent environments.'
    },
    {
      q: 'Are these sessions confidential?',
      a: '100%. Every counseling session at MindMappers strictly adheres to ethical confidentiality codes.'
    }
  ]
};

export default function AngerManagementPage() {
  return <ServiceTemplate service={serviceData} />;
}
