import React from 'react';
import { LICENSE_TIERS } from '@/lib/data/templates';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onOpenInquiry?: (licenseType: 'standard' | 'extended') => void;
}

export default function PricingSection({ onOpenInquiry }: PricingSectionProps) {
  return (
    <section id="licensing" className="py-20 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="mb-14">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Licensing Options
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            ประเภทใบอนุญาต (Perpetual License จ่ายครั้งเดียว ไม่ผูกมัดรายเดือน)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          
          {/* Standard License */}
          <div className="minimal-card rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-zinc-300 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                  สำหรับ 1 โครงการ / 1 ลูกค้า
                </span>
                <h3 className="text-xl font-bold text-white mt-4">
                  {LICENSE_TIERS.standard.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {LICENSE_TIERS.standard.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                {LICENSE_TIERS.standard.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('standard')}
                className="w-full py-3 rounded-xl text-sm font-bold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
              >
                สั่งซื้อ / สอบถาม Standard License
              </button>
            </div>
          </div>

          {/* Extended License */}
          <div className="minimal-card rounded-2xl p-8 flex flex-col justify-between border-zinc-700">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-zinc-100 bg-zinc-800 px-3 py-1 rounded-md border border-zinc-700">
                  สร้างได้ไม่จำกัดโปรเจกต์ (Unlimited)
                </span>
                <h3 className="text-xl font-bold text-white mt-4">
                  {LICENSE_TIERS.extended.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {LICENSE_TIERS.extended.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                {LICENSE_TIERS.extended.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-200">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('extended')}
                className="w-full py-3 rounded-xl text-sm font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer shadow-md"
              >
                สั่งซื้อ / สอบถาม Extended License
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
