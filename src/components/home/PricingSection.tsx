import React from 'react';
import { LICENSE_TIERS } from '@/lib/data/templates';
import { Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="licensing" className="py-20 border-b border-zinc-200 dark:border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="mb-14">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            Licensing Options
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white transition-colors">
            ประเภทใบอนุญาต (Perpetual License จ่ายครั้งเดียว ไม่ผูกมัดรายเดือน)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          
          {/* Standard License */}
          <div className="minimal-card rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 transition-colors">
                  สำหรับ 1 โครงการ / 1 ลูกค้า
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-4 transition-colors">
                  {LICENSE_TIERS.standard.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed transition-colors">
                  {LICENSE_TIERS.standard.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-white/[0.08] transition-colors">
                {LICENSE_TIERS.standard.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-zinc-200 dark:border-white/[0.08] transition-colors">
              <a
                href="#templates"
                className="w-full py-3 rounded-xl text-sm font-bold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all cursor-pointer block text-center"
              >
                เลือกแอปพลิเคชันเพื่อสั่งซื้อ (Standard)
              </a>
            </div>
          </div>

          {/* Extended License */}
          <div className="minimal-card rounded-2xl p-8 flex flex-col justify-between border-zinc-300 dark:border-zinc-700">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-200/80 dark:bg-zinc-800 px-3 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 transition-colors">
                  สร้างได้ไม่จำกัดโปรเจกต์ (Unlimited)
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-4 transition-colors">
                  {LICENSE_TIERS.extended.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed transition-colors">
                  {LICENSE_TIERS.extended.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-white/[0.08] transition-colors">
                {LICENSE_TIERS.extended.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-800 dark:text-zinc-200">
                    <Check className="w-4 h-4 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-zinc-200 dark:border-white/[0.08] transition-colors">
              <a
                href="#templates"
                className="w-full py-3 rounded-xl text-sm font-bold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all cursor-pointer shadow-md block text-center"
              >
                เลือกแอปพลิเคชันเพื่อสั่งซื้อ (Extended)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
