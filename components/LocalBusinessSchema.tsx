import { siteConfig } from '../lib/site.config';
import { seoContent } from '../lib/seo';

function hasValue(value: string | null | undefined) {
  return Boolean(value && !value.startsWith('TODO_'));
}

function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${siteConfig.siteUrl}${path.startsWith('/') ? '' : '/'}${path}`;
}

export function LocalBusinessSchema() {
  const sameAs = [siteConfig.googleMapsUrl, siteConfig.instagramUrl, siteConfig.tiktokUrl]
    .filter(hasValue)
    .filter((url) => url.startsWith('http'));

  const priceRange = hasValue(siteConfig.priceRange) ? siteConfig.priceRange : undefined;
  const geo =
    siteConfig.latitude !== null && siteConfig.longitude !== null
      ? {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.latitude,
          longitude: siteConfig.longitude,
        }
      : undefined;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Store'],
      '@id': `${siteConfig.siteUrl}/#store`,
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.whatsappNumber,
      image: absoluteUrl(siteConfig.ogImage),
      priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.streetAddress,
        addressLocality: siteConfig.addressLocality,
        postalCode: siteConfig.postalCode,
        addressCountry: siteConfig.addressCountry,
      },
      geo,
      areaServed: seoContent.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area.name,
      })),
      hasMap: siteConfig.googleMapsUrl,
      sameAs,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '18:00',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seoContent.homepageFaq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
