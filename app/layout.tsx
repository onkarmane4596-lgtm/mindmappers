import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingSocials } from '@/components/floating-socials'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mindmapperscareer.in'),
  title: 'MindMappers® Career Counselling & Psychometric Assessment',
  description: 'MindMappers helps students discover the right career path through psychometric assessments, aptitude testing, personality analysis, brain mapping, and expert career counselling across Maharashtra and India.',
  keywords: ['MindMappers', 'MindMappers Career Counselling', 'Psychometric Assessment', 'Aptitude Test', 'Brain Mapping', 'Student Assessment', 'Career Guidance'],
  openGraph: {
    title: 'MindMappers® Career Counselling & Psychometric Assessment',
    description: 'MindMappers helps students discover the right career path through scientific assessments and expert guidance.',
    url: 'https://www.mindmapperscareer.in',
    siteName: 'MindMappers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindMappers® Career Counselling & Psychometric Assessment',
    description: 'MindMappers helps students discover the right career path through scientific assessments and expert guidance.',
  },
  alternates: {
    canonical: '/',
  },
  generator: 'v0.app',
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
    "name": "MindMappers",
    "alternateName": "MindMappers Career Counselling",
    "url": "https://www.mindmapperscareer.in/",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9822174300",
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
