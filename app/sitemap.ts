import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mindmapperscareer.in';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/corporate-training',
    '/institutions',
    '/brochures',
    '/contact',
    '/founder',
    '/iq-eq-test',
    '/student-report',
    '/services',
    '/services/student-career-counseling',
    '/services/iq-eq-testing',
    '/services/personality-development',
    '/services/parents-counseling',
    '/services/cyber-parenting',
    '/services/anger-management',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/corporate-training' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/corporate-training' ? 0.9 : 0.8,
  }));
}

