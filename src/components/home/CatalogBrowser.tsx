'use client';

import React, { useState, useMemo } from 'react';
import { TemplateCategory, Template } from '@/types';
import CategoryTabs from '@/components/home/CategoryTabs';
import TemplateCard from '@/components/home/TemplateCard';
import InquiryModal from '@/components/modal/InquiryModal';
import { Search } from 'lucide-react';

interface CatalogBrowserProps {
  initialTemplates: Template[];
}

export default function CatalogBrowser({ initialTemplates }: CatalogBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTemplate, setInquiryTemplate] = useState<Template | null>(null);
  const [inquiryLicense, setInquiryLicense] = useState<'standard' | 'extended'>('standard');

  const categoryCounts = useMemo(() => {
    const counts: Record<TemplateCategory, number> = {
      all: initialTemplates.length,
      automotive: 0,
      'real-estate': 0,
      ecommerce: 0,
      'saas-booking': 0,
    };

    initialTemplates.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    return counts;
  }, [initialTemplates]);

  const filteredTemplates = useMemo(() => {
    return initialTemplates.filter((template) => {
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.techStack.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialTemplates, selectedCategory, searchQuery]);

  const handleOpenInquiry = (template?: Template, license: 'standard' | 'extended' = 'standard') => {
    setInquiryTemplate(template || null);
    setInquiryLicense(license);
    setIsInquiryOpen(true);
  };

  return (
    <>
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors">
            แอปพลิเคชันและซอร์สโค้ดพร้อมใช้งาน (Ready Applications)
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 transition-colors">
            ซอร์สโค้ดระดับโปรดักชัน สถาปัตยกรรม Clean Code พร้อมส่งมอบและเปิดตัวธุรกิจได้ทันที
          </p>
        </div>

        {/* Minimal Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ค้นหาชื่อแอป หรือ เทคโนโลยี..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-600 transition-all font-sans shadow-2xs"
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
              onQuickInquire={(tpl) => handleOpenInquiry(tpl)}
            />
          ))}
        </div>
      ) : (
        <div className="minimal-card rounded-xl p-10 text-center max-w-sm mx-auto my-6">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">ไม่พบแอปพลิเคชันที่ตรงกับคำค้นหาของคุณ</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 px-3 py-1.5 rounded text-xs font-sans text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer"
          >
            ล้างตัวกรองทั้งหมด
          </button>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedTemplate={inquiryTemplate}
        selectedLicense={inquiryLicense}
      />
    </>
  );
}
