import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TEMPLATES_DATA } from '@/lib/data/templates';
import { getTemplateBySlug } from '@/sanity/lib/fetch';
import TemplateDetailView from '@/components/templates/TemplateDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TEMPLATES_DATA.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const template = await getTemplateBySlug(resolvedParams.slug);

  if (!template) {
    return {
      title: 'Template Not Found | Marketplace-Apps Hub',
    };
  }

  const title = `${template.title} | Source Code & Web App Template`;
  const description = template.description || template.tagline;

  return {
    title,
    description,
    keywords: [
      template.title,
      template.categoryLabel,
      'Next.js 15 template',
      'TypeScript source code',
      'Supabase app',
      ...(template.techStack?.map((t) => t.name) || []),
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: template.thumbnail,
          width: 1200,
          height: 630,
          alt: template.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [template.thumbnail],
    },
  };
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const template = await getTemplateBySlug(resolvedParams.slug);

  if (!template) {
    return notFound();
  }

  // AEO / SEO: JSON-LD Structured Data (SoftwareApplication + Product)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: template.title,
    headline: template.tagline,
    description: template.description,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Cross-platform (Node.js)',
    offers: {
      '@type': 'Offer',
      price: template.priceStandardTHB,
      priceCurrency: 'THB',
      availability:
        template.status === 'available'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
      validFrom: '2026-01-01',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: template.rating.toString(),
      reviewCount: (template.reviewsCount || 10).toString(),
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Marketplace-Apps Hub',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateDetailView template={template} />
    </>
  );
}
