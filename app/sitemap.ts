import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/?lang=fr`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/?lang=ar`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}