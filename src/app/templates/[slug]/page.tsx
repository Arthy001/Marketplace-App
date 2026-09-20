'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TEMPLATES_DATA, LICENSE_TIERS } from '@/lib/data/templates';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InquiryModal from '@/components/modal/InquiryModal';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function TemplateDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const template = TEMPLATES_DATA.find((t) => t.slug === resolvedParams.slug);

  const [currency, setCurrency] = useState<'THB' | 'USD'>('THB');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedLicense, setSelectedLicense] = useState<'standard' | 'extended'>('standard');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  if (!template) {
    return notFound();
  }

  const isAvailable = template.status === 'available';
  const price = selectedLicense === 'standard'
    ? (currency === 'THB' ? `฿${template.priceStandardTHB.toLocaleString()}` : `$${template.priceStandardUSD}`)
    : (currency === 'THB' ? `฿${template.priceExtendedTHB.toLocaleString()}` : `$${template.priceExtendedUSD}`);

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-zinc-100 font-sans">
      <Navbar
        currency={currency}
        onToggleCurrency={() => setCurrency(currency === 'THB' ? 'USD' : 'THB')}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <main className="flex-1 pb-20">
        {/* Minimal Breadcrumb */}
        <div className="border-b border-white/[0.06] bg-[#0c0e15]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to catalog</span>
            </Link>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <span>{template.categoryLabel}</span>
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              <span className="text-zinc-300 font-medium">{template.slug}</span>
            </div>
          </div>
        </div>

        {/* Product Header */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-8 border-b border-white/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[10px] uppercase">
                  {template.categoryLabel}
                </span>
                {isAvailable ? (
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] uppercase">
                    Available Now
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-400 font-mono text-[10px] uppercase">
                    In Development
                  </span>
                )}
                <span className="text-[10px] font-mono text-zinc-500">v{template.version}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                {template.title}
              </h1>

              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {template.tagline}
              </p>
            </div>

            {/* Actions */}
            {isAvailable && template.demoUrl && (
              <div className="flex items-center gap-3">
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-all flex items-center gap-1.5"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Column (2 Cols): Visuals & Tech Specs */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Media Gallery */}
              <div className="space-y-3">
                <div className="minimal-card rounded-xl overflow-hidden aspect-[16/10] bg-zinc-900">
                  <img
                    src={template.gallery[selectedImage] || template.thumbnail}
                    alt={template.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {template.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-2.5">
                    {template.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-[16/10] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          selectedImage === idx ? 'border-white' : 'border-zinc-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Overview */}
              <div className="minimal-card rounded-xl p-6 space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono">
                  Overview & Architecture
                </h2>
                
                <p className="text-xs text-zinc-400 leading-relaxed whitespace-pre-line font-normal">
                  {template.detailedDescription || template.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="text-xs font-semibold text-zinc-300">Features Included:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {template.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Specs */}
              <div className="minimal-card rounded-xl p-6 space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono">
                  Tech Stack Specifications
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {template.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-center"
                    >
                      <div className="text-xs font-medium text-zinc-200">{tech.name}</div>
                      <div className="text-[10px] font-mono text-zinc-500 mt-0.5">{tech.category}</div>
                    </div>
                  ))}
                </div>

                {template.databaseSchemaInfo && (
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="text-xs font-semibold text-zinc-300">Supabase Database Tables:</div>
                    <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 space-y-1.5 font-mono text-[11px] text-zinc-400">
                      {template.databaseSchemaInfo.map((table, idx) => (
                        <div key={idx}>
                          {table}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* What You Receive */}
              <div className="minimal-card rounded-xl p-6 space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono">
                  Package Deliverables
                </h2>
                
                <div className="space-y-2">
                  {template.includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Pricing & Purchase Box */}
            <div className="space-y-6">
              
              <div className="minimal-card rounded-xl p-6 sticky top-20">
                
                <div className="font-mono text-[11px] text-zinc-500 uppercase mb-4">
                  Licensing & Checkout
                </div>

                {/* License Selector */}
                <div className="space-y-2 mb-5">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedLicense('standard')}
                      className={`p-2.5 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                        selectedLicense === 'standard'
                          ? 'bg-zinc-800 border-zinc-600 text-white font-semibold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="font-medium">Standard</div>
                      <div className="text-[10px] text-zinc-500 font-mono">1 Project</div>
                    </button>

                    <button
                      onClick={() => setSelectedLicense('extended')}
                      className={`p-2.5 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                        selectedLicense === 'extended'
                          ? 'bg-zinc-800 border-zinc-600 text-white font-semibold'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="font-medium">Extended</div>
                      <div className="text-[10px] text-zinc-500 font-mono">Unlimited</div>
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="pt-3 border-t border-white/[0.06] mb-5">
                  <div className="text-[11px] font-mono text-zinc-500">Perpetual License:</div>
                  <div className="text-3xl font-bold text-white font-mono mt-1">{price}</div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 text-xs text-zinc-400">
                  {LICENSE_TIERS[selectedLicense].features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => setIsInquiryOpen(true)}
                    className="w-full py-2.5 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer"
                  >
                    Inquire / Order Source Code
                  </button>

                  {isAvailable && template.demoUrl && (
                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>

      </main>

      <Footer />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedTemplate={template}
        selectedLicense={selectedLicense}
        currency={currency}
      />
    </div>
  );
}
