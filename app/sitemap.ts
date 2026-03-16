import { MetadataRoute } from 'next';
import { seoContent } from '../lib/seo';
import { siteConfig } from '../lib/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const categoryPages = Object.keys(seoContent.categoryPages).map((slug) => ({
    url: `${siteConfig.siteUrl}/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categoryPages,
  ];
}
