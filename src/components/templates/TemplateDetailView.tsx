'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Template } from '@/types';
import { LICENSE_TIERS } from '@/lib/data/templates';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InquiryModal from '@/components/modal/InquiryModal';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight
} from 'lucide-react';

interface TemplateDetailViewProps {
  template: Template;
}

export default function TemplateDetailView({ template }: TemplateDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedLicense, setSelectedLicense] = useState<'standard' | 'extended'>('standard');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  if (!template) {
    return notFound();
  }

  const isAvailable = template.status === 'available';
  const price = selectedLicense === 'standard'
    ? `฿${template.priceStandardTHB.toLocaleString()}`
    : `฿${template.priceExtendedTHB.toLocaleString()}`;

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 font-sans transition-colors">
      <Navbar
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <main className="flex-1 pb-20">
        {/* Minimal Breadcrumb */}
        <div className="border-b border-zinc-200 dark:border-white/[0.06] bg-white dark:bg-[#0c0e15] transition-colors">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to catalog</span>
            </Link>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <span>{template.categoryLabel}</span>
              <ChevronRight className="w-3 h-3 text-zinc-400 dark:text-zinc-600" />
              <span className="text-zinc-800 dark:text-zinc-300 font-medium">{template.slug}</span>
            </div>
          </div>
        </div>

        {/* Product Header */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-8 border-b border-zinc-200 dark:border-white/[0.06] transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[10px] uppercase">
                  {template.categoryLabel}
                </span>
                {isAvailable ? (
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] uppercase">
                    Available Now
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] uppercase">
                    In Development
                  </span>
                )}
                <span className="text-[10px] font-mono text-zinc-500">v{template.version}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors">
                {template.title}
              </h1>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal transition-colors">
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
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-xs"
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
                <div className="minimal-card rounded-xl overflow-hidden aspect-[16/10] bg-zinc-100 dark:bg-zinc-900">
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
                        aria-label={`เลือกดูรูปภาพที่ ${idx + 1}`}
                        className={`aspect-[16/10] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          selectedImage === idx
                            ? 'border-zinc-950 dark:border-white shadow-xs'
                            : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
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
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-300 font-mono">
                  Overview & Architecture
                </h2>
                
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line font-normal">
                  {template.detailedDescription || template.description}
                </p>

                <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.06] space-y-3 transition-colors">
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">Features Included:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {template.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Specs */}
              <div className="minimal-card rounded-xl p-6 space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-300 font-mono">
                  Tech Stack Specifications
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {template.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center transition-colors"
                    >
                      <div className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{tech.name}</div>
                      <div className="text-[10px] font-mono text-zinc-500 mt-0.5">{tech.category}</div>
                    </div>
                  ))}
                </div>

                {template.databaseSchemaInfo && (
                  <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.06] space-y-2 transition-colors">
                    <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">Supabase Database Tables:</div>
                    <div className="bg-zinc-100 dark:bg-zinc-950 p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-1.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-400 transition-colors">
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
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-300 font-mono">
                  Package Deliverables
                </h2>
                
                <div className="space-y-2">
                  {template.includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quickstart Setup Snippet */}
              <div className="minimal-card rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-300 font-mono">
                    Quickstart Setup (Ready in 2 Mins)
                  </h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    Zero-Config Fallback
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  ไม่ต้องรอเชื่อมต่อฐานข้อมูลก็เปิดใช้งานได้ทันที ตัวระบบมี Mock Data ในตัว รันคำสั่ง 3 บรรทัดเริ่มงานได้เลย:
                </p>
                <div className="bg-zinc-950 text-zinc-200 p-4 rounded-lg font-mono text-xs overflow-x-auto space-y-1.5 border border-zinc-800">
                  <div className="text-zinc-500"># 1. Clone repository & install dependencies</div>
                  <div className="text-emerald-400">$ npm install</div>
                  <div className="text-zinc-500 pt-1"># 2. Run local development server</div>
                  <div className="text-emerald-400">$ npm run dev</div>
                  <div className="text-zinc-500 pt-1"># App will run at http://localhost:3000</div>
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
                          ? 'bg-zinc-100 border-zinc-400 dark:bg-zinc-800 dark:border-zinc-600 text-zinc-950 dark:text-white font-semibold shadow-2xs'
                          : 'bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="font-medium text-zinc-900 dark:text-white">Standard</div>
                      <div className="text-[10px] text-zinc-500 font-mono">1 Project</div>
                    </button>

                    <button
                      onClick={() => setSelectedLicense('extended')}
                      className={`p-2.5 rounded-lg text-left border text-xs transition-all cursor-pointer ${
                        selectedLicense === 'extended'
                          ? 'bg-zinc-100 border-zinc-400 dark:bg-zinc-800 dark:border-zinc-600 text-zinc-950 dark:text-white font-semibold shadow-2xs'
                          : 'bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="font-medium text-zinc-900 dark:text-white">Extended</div>
                      <div className="text-[10px] text-zinc-500 font-mono">Unlimited</div>
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="pt-3 border-t border-zinc-200 dark:border-white/[0.06] mb-5 transition-colors">
                  <div className="text-[11px] font-mono text-zinc-500">Perpetual License:</div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white font-mono mt-1">{price}</div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 text-xs text-zinc-600 dark:text-zinc-400">
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
                    className="w-full py-2.5 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all cursor-pointer shadow-xs"
                  >
                    Inquire / Order Source Code
                  </button>

                  {isAvailable && template.demoUrl && (
                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-zinc-800 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* ROI / Business Value Guarantee */}
                <div className="mt-5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2.5 text-xs transition-colors">
                  <div className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <span>⚡ ความคุ้มค่าทางธุรกิจ (Business Value)</span>
                  </div>
                  <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>ประหยัดเวลาพัฒนา 300+ ชั่วโมง</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>ประหยัดงบจ้างทีม Outsource หลักแสน</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>เปิดตัวธุรกิจได้ทันทีภายใน 48 ชั่วโมง</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>ซัพพอร์ตการติดตั้ง Deploy ครั้งแรกฟรี</span>
                    </li>
                  </ul>
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
      />
    </div>
  );
}
