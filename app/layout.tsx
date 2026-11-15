import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { FloatingSocials } from '@/components/floating-socials'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mindmapperscareer.in'),
  title: 'MindMappers® Career Counselling Centre & Corporate Training | Shaping Your Best Version',
  description: 'MindMappers® provides scientific career guidance, IQ & EQ psychometric assessments, personality development, school workshops, and structured bilingual corporate training across Pune, Mumbai, Satara, Chh. Sambhajinagar and Maharashtra.',
  keywords: [
    'MindMappers',
    'MindMappers Career Counselling',
    'Prof. Dinesh Tathe',
    'Career Counselling Centre',
    'Career Counselling in Pune',
    'Career Counselling in Satara',
    'Career Guidance for Students',
    'Student Career Assessment',
    'IQ and EQ Assessment',
    'Psychometric Assessment',
    'Aptitude Testing',
    'Personality Development',
    'Career Guidance for Parents',
    'School Career Guidance Programmes',
    'Corporate Training in Pune',
    'Corporate Training Programmes',
    'Employee Development Programmes',
    'Employee Wellbeing Training',
    'Stress Management Workshops',
    'Leadership Training',
    'Workplace Communication Training',
    'Team Building Workshops',
    'Work-Life Balance Training',
    'Financial Wellness Training'
  ],
  openGraph: {
    title: 'MindMappers® Career Counselling Centre & Corporate Training',
    description: 'Discover Potential. Design the Right Future. Build Better Minds. Strengthen Teams. Transform Workplaces.',
    url: 'https://www.mindmapperscareer.in',
    siteName: 'MindMappers®',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindMappers® Career Counselling Centre & Corporate Training',
    description: 'Discover Potential. Design the Right Future. Build Better Minds. Strengthen Teams. Transform Workplaces.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo/LOGO MINDMAPPERS.png',
    apple: '/logo/LOGO MINDMAPPERS.png',
    shortcut: '/logo/LOGO MINDMAPPERS.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MindMappers® Career Counselling Centre",
    "alternateName": "MindMappers Corporate Training Programme",
    "url": "https://www.mindmapperscareer.in/",
    "telephone": "+91-9822258300",
    "email": "mindmapperscareer@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Prof. Dinesh Tathe",
      "jobTitle": "Founder & Director"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9822258300",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "mr", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/people/Mindmapper-Career-Counselling/61575185248722/",
      "https://www.instagram.com/mindmapperscounselling",
      "https://www.youtube.com/@mindmapperscareercounseling"
    ]
  };

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MindMappers Career Counselling Centre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no. 13, Rathi galaxy, Disha alankar society, Connought place, cidco",
      "addressLocality": "Chhatrapati Sambhajinagar",
      "addressRegion": "Maharashtra",
      "postalCode": "431001",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" 
          rel="stylesheet" 
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }} />
      </head>
      <body className="font-sans antialiased relative">
        {children}
        <FloatingSocials />
        <Analytics />
      </body>
    </html>
  )
}
