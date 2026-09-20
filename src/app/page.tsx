'use client';

import React, { useState, useMemo } from 'react';
import { TEMPLATES_DATA } from '@/lib/data/templates';
import { TemplateCategory, Template } from '@/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoryTabs from '@/components/home/CategoryTabs';
import TemplateCard from '@/components/home/TemplateCard';
import ValueProps from '@/components/home/ValueProps';
import PricingSection from '@/components/home/PricingSection';
import FaqSection from '@/components/home/FaqSection';
import InquiryModal from '@/components/modal/InquiryModal';
import { Search } from 'lucide-react';

export default function HomePage() {
  const [currency, setCurrency] = useState<'THB' | 'USD'>('THB');
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTemplate, setInquiryTemplate] = useState<Template | null>(null);
  const [inquiryLicense, setInquiryLicense] = useState<'standard' | 'extended'>('standard');

  const categoryCounts = useMemo(() => {
    const counts: Record<TemplateCategory, number> = {
      all: TEMPLATES_DATA.length,
      automotive: 0,
      'real-estate': 0,
      ecommerce: 0,
      'saas-booking': 0,
    };

    TEMPLATES_DATA.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    return counts;
  }, []);

  const filteredTemplates = useMemo(() => {
    return TEMPLATES_DATA.filter((template) => {
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.techStack.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenInquiry = (template?: Template, license: 'standard' | 'extended' = 'standard') => {
    setInquiryTemplate(template || null);
    setInquiryLicense(license);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-zinc-100 font-sans">
      
      {/* Top Minimal Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={() => setCurrency(currency === 'THB' ? 'USD' : 'THB')}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <main className="flex-1">
        {/* Minimal Hero Section */}
        <HeroSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* Catalog Section */}
        <section id="templates" className="py-16 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            
            {/* Header & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  Available Templates
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Production-grade templates with source code and documentation.
                </p>
              </div>

              {/* Minimal Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by name or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-all font-mono"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <CategoryTabs
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                counts={categoryCounts}
              />
            </div>

            {/* Grid */}
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    currency={currency}
                    onQuickInquire={(tpl) => handleOpenInquiry(tpl)}
                  />
                ))}
              </div>
            ) : (
              <div className="minimal-card rounded-xl p-10 text-center max-w-sm mx-auto my-6">
                <p className="text-xs text-zinc-400 font-mono">No templates matched your query.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-3 py-1.5 rounded text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
                >
                  Reset filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* Engineering Standards */}
        <ValueProps />

        {/* Licensing */}
        <PricingSection onOpenInquiry={(license) => handleOpenInquiry(undefined, license)} />

        {/* FAQ */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedTemplate={inquiryTemplate}
        selectedLicense={inquiryLicense}
        currency={currency}
      />

    </div>
  );
}
