import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryPageTemplate } from '../../components/CategoryPageTemplate';
import { seoContent, type CategoryPageKey } from '../../lib/seo';
import { siteConfig } from '../../lib/site.config';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

const categorySlugs = Object.keys(seoContent.categoryPages) as CategoryPageKey[];

function isCategorySlug(slug: string): slug is CategoryPageKey {
  return categorySlugs.includes(slug as CategoryPageKey);
}

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  if (!isCategorySlug(params.slug)) {
    return {};
  }

  const page = seoContent.categoryPages[params.slug];
  const canonicalPath = `/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalPath,
      type: 'website',
      locale: 'fr_FR',
      siteName: siteConfig.businessName,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  if (!isCategorySlug(params.slug)) {
    notFound();
  }

  return <CategoryPageTemplate slug={params.slug} />;
}
