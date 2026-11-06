'use client';

import React from 'react';
import Link from 'next/link';
import { Template } from '@/types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onQuickInquire?: (template: Template) => void;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const isAvailable = template.status === 'available';
  const price = `฿${template.priceStandardTHB.toLocaleString()}`;

  return (
    <div className="minimal-card rounded-2xl overflow-hidden flex flex-col group transition-colors">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/[0.08] transition-colors">
        <img
          src={template.thumbnail}
          alt={template.title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-all duration-300"
        />

        {/* Minimal status tag */}
        <div className="absolute top-3.5 left-3.5">
          {isAvailable ? (
            <span className="px-2.5 py-1 rounded-md bg-white/95 dark:bg-zinc-950/90 backdrop-blur-sm border border-emerald-500/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs">
              พร้อมส่งมอบ (Available)
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md bg-white/95 dark:bg-zinc-950/90 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium shadow-xs">
              เร็วๆ นี้ (In Development)
            </span>
          )}
        </div>

        {/* Category tag */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-md bg-white/95 dark:bg-zinc-950/90 backdrop-blur-sm border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-xs font-medium shadow-xs">
            {template.categoryLabel}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-3">
          {/* Version & Metric */}
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">v{template.version}</span>
            <span>{template.framework}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
            {template.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed font-normal transition-colors">
            {template.tagline}
          </p>

          {/* Tech Stack List */}
          <div className="flex flex-wrap gap-2 pt-1">
            {template.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 transition-colors"
              >
                {tech.name}
              </span>
            ))}
            {template.techStack.length > 4 && (
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 text-zinc-500 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 transition-colors">
                +{template.techStack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar: Price & Actions */}
        <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.08] flex items-center justify-between gap-3 transition-colors">
          <div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Standard License</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-white font-mono mt-0.5">{price}</div>
          </div>

          <div className="flex items-center gap-2.5">
            {isAvailable && template.demoUrl && (
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 transition-all flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href={`/templates/${template.slug}`}
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>รายละเอียด</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
