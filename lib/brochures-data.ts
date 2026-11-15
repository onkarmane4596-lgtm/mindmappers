import { GraduationCap, Building2 } from 'lucide-react';

export interface BrochureItem {
  id: string;
  title: string;
  subtitle: string;
  marathiTitle: string;
  description: string;
  pages: string;
  vertical: string;
  icon: typeof GraduationCap;
  badgeColor: string;
  themeColor: string;
  accentColor: string;
  highlights: string[];
  pdfUrl: string;
  fileName: string;
  size: string;
}

export const brochuresData: BrochureItem[] = [
  {
    id: 'career-counselling',
    title: 'MindMappers® Career Counselling Brochure',
    subtitle: 'Shaping Your Best Version • Updated Media 2026',
    marathiTitle: 'करिअर समुपदेशन व बुद्धिमत्ता चाचणी माहितीपत्रक',
    description: 'Comprehensive 8-page official brochure detailing our scientific IQ & EQ mapping, 4-step guidance process, institutional school sessions, recent media coverage (Lokmat & Janpravas 2026), and founder profile.',
    pages: '8 Pages',
    vertical: 'Student & School Guidance',
    icon: GraduationCap,
    badgeColor: 'bg-purple-100 text-[#1a235c] border-purple-200',
    themeColor: 'from-[#1a235c] to-[#3D57C5]',
    accentColor: '#F4A16C',
    highlights: [
      'IQ, EQ & Aptitude Assessment Frameworks',
      '4-Step Guidance Process (Beyond Marks)',
      'School & College Interactive Workshops',
      'Recent Media Coverage (24 Oct 2026)',
      'Prof. Dinesh Tathe Profile & Philosophy'
    ],
    pdfUrl: '/asset/MindMappers-Career-Counselling-Brochure.pdf',
    fileName: 'MindMappers_Career_Counselling_Brochure_Updated_Media_2026.pdf',
    size: '1.2 MB'
  },
  {
    id: 'corporate-training',
    title: 'MindMappers® Corporate Training Brochure',
    subtitle: 'Build Better Minds. Strengthen Teams. Transform Workplaces.',
    marathiTitle: 'संस्थात्मक कर्मचारी कल्याण व कॉर्पोरेट प्रशिक्षण माहितीपत्रक',
    description: 'Structured 10-page bilingual training brochure focused on employee mental wellbeing, work efficiency, 10 small training modules (12 hours), 6 interactive learning games, industry-tailored solutions, and flexible corporate packages.',
    pages: '10 Pages',
    vertical: 'Corporate & HR Solutions',
    icon: Building2,
    badgeColor: 'bg-blue-100 text-[#0f172a] border-blue-200',
    themeColor: 'from-[#0f172a] to-[#1e3a8a]',
    accentColor: '#38bdf8',
    highlights: [
      '6 Key Areas of Employee Development',
      '10 Small Training Modules (12-hour curriculum)',
      '6 Interactive Activities (Team Tower, Stress Bucket, etc.)',
      'Industry Solutions (IT, Auto, BFSI, Healthcare)',
      'Flexible Pricing Packages: Essential, Growth 360 & Transformation'
    ],
    pdfUrl: '/asset/MindMappers-Corporate-Training-Brochure.pdf',
    fileName: 'MindMappers_Corporate_Training_Brochure.pdf',
    size: '2.1 MB'
  }
];

