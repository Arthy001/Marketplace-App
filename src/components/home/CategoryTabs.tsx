import React from 'react';
import { TemplateCategory } from '@/types';

interface CategoryTabsProps {
  selectedCategory: TemplateCategory;
  onSelectCategory: (category: TemplateCategory) => void;
  counts: Record<TemplateCategory, number>;
}

export default function CategoryTabs({ selectedCategory, onSelectCategory, counts }: CategoryTabsProps) {
  const categories: { id: TemplateCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas-booking', label: 'Booking' },
  ];

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/[0.06]">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = counts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              isSelected
                ? 'bg-zinc-800 text-white font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <span>{cat.label}</span>
            <span className="text-[10px] font-mono opacity-60">
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
