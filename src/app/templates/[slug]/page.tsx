import React from 'react';
import { notFound } from 'next/navigation';
import { TEMPLATES_DATA } from '@/lib/data/templates';
import TemplateDetailView from '@/components/templates/TemplateDetailView';

export function generateStaticParams() {
  return TEMPLATES_DATA.map((t) => ({
    slug: t.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const template = TEMPLATES_DATA.find((t) => t.slug === resolvedParams.slug);

  if (!template) {
    return notFound();
  }

  return <TemplateDetailView template={template} />;
}
