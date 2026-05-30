'use client';

import { ServiceTemplate, ServiceData } from '@/components/sections/service-template';
import { Brain, BookOpen, Shield, Award, LineChart } from 'lucide-react';

const serviceData: ServiceData = {
  slug: 'iq-eq-testing',
  title: 'IQ & EQ Testing',
  marathiTitle: 'आयक्यू आणि इक्यू चाचणी',
  description: 'Scientific assessments to measure cognitive and emotional intelligence.',
  detailedIntro: 'MindMappers\' IQ (Intelligence Quotient) and EQ (Emotional Quotient) testing provides a profound understanding of an individual\'s cognitive bandwidth and emotional self-regulation. We evaluate logical reasoning, verbal comprehension, spatial visualization, memory capacities alongside empathy, stress tolerance, self-awareness, and relationship management. This twin-lens approach provides a comprehensive model of intellectual and emotional functioning.',
  icon: Brain,
  colorGradient: 'from-[#F4A16C] to-[#FF6B00]',
  accentColor: '#1F2F78',
  secondaryAccent: 'bg-blue-50 text-[#1F2F78] border-blue-100',
  bannerImage: '/hero/slider/2.jpeg',
  benefits: [
    {
      title: 'Cognitive Mapping',
      description: 'Discover your logical, visual, spatial, and analytical mental faculties.',
      icon: LineChart
    },
    {
      title: 'Emotional Resilience',
      description: 'Understand stress levels, emotional boundaries, and coping patterns.',
      icon: Shield
    },
    {
      title: 'Targeted Study Styles',
      description: 'Tailor your learning processes specifically to your unique cognitive style.',
      icon: BookOpen
    },
    {
      title: 'Balanced Leadership Development',
      description: 'Improve self-awareness and team leadership qualities to build professional paths.',
      icon: Award
    }
  ],
  processSteps: [
    {
      title: 'Diagnostic Assessment',
      description: 'Standardized, age-appropriate cognitive and emotional psychometric test.'
    },
    {
      title: 'Neuro-cognitive Profiling',
      description: 'Processing raw test data to map analytical reasoning, spatial vision, and memory indexes.'
    },
    {
      title: 'Integrative Psychology Analysis',
      description: 'Senior psychologist mapping the correlation between IQ score and practical EQ scores.'
    },
    {
      title: 'Actionable Strategic Counsel',
      description: 'Comprehensive debriefing with tools to leverage emotional intelligence in real life.'
    }
  ],
  targetAudience: [
    'Students wanting to optimize memory capacity and study styles.',
    'Young adults struggling with emotional regulation or mood swings.',
    'Aspiring leaders seeking to improve team dynamics and empathy.',
    'Individuals desiring a complete psychometric self-profile.',
    'Professionals looking to transition into roles demanding high social EQ.'
  ],
  faqs: [
    {
      q: 'What is the age limit for IQ & EQ tests?',
      a: 'We conduct specialized tests for age groups starting from 12 years up to 25 years.'
    },
    {
      q: 'Can IQ and EQ scores be improved?',
      a: 'While core IQ remains relatively stable, your practical cognitive skills and EQ (emotional intelligence) can be significantly improved with intentional coaching and practice.'
    },
    {
      q: 'How long does the assessment take?',
      a: 'The assessment takes approximately 60 to 90 minutes in a quiet, relaxed setting.'
    }
  ]
};

export default function IqEqTestingPage() {
  return <ServiceTemplate service={serviceData} />;
}
