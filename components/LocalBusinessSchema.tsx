import { siteConfig } from '../lib/site.config';

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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.whatsappNumber,
    image: absoluteUrl(siteConfig.ogImage),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
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
    priceRange,
    geo,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}