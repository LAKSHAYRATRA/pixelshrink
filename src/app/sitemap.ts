import { MetadataRoute } from 'next';
import { ALL_TOOLS, NAV_GUIDES, SITE_CONFIG } from '../lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Root Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // All 11 dedicated tool pages
  ALL_TOOLS.filter((t) => t.slug !== '').forEach((tool) => {
    routes.push({
      url: `${SITE_CONFIG.url}/${tool.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Guides
  NAV_GUIDES.forEach((guide) => {
    routes.push({
      url: `${SITE_CONFIG.url}${guide.href}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Trust & Compliance Pages
  ['/about', '/privacy-policy', '/terms', '/contact'].forEach((path) => {
    routes.push({
      url: `${SITE_CONFIG.url}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  return routes;
}
