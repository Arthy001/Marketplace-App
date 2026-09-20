import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-22 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="max-w-3xl">
          {/* Status tag */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-medium">Car4U v1.2 พร้อมส่งมอบ (Available Now)</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18]">
            ศูนย์รวมซอร์สโค้ดและเทมเพลตระดับโปรดักชัน
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            เทมเพลตเว็บแอปพลิเคชัน Full-Stack พร้อม Next.js 15, TypeScript และ Supabase โค้ดสะอาด ได้มาตรฐาน พร้อม Deploy เปิดตัวธุรกิจได้ทันที
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#templates"
              className="px-5 py-3 rounded-xl text-sm font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>เลือกชมเทมเพลตทั้งหมด</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
            >
              ติดต่อสั่งซื้อ / สอบถามบริการ
            </button>
          </div>
        </div>

        {/* Minimal Stack Checklist */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-xs text-zinc-500 font-medium mb-1">01 / FRAMEWORK</div>
            <div className="text-zinc-200 font-semibold">Next.js 15 & React 19</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-medium mb-1">02 / DATABASE</div>
            <div className="text-zinc-200 font-semibold">Supabase PostgreSQL</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-medium mb-1">03 / LOCALIZATION</div>
            <div className="text-zinc-200 font-semibold">2 ภาษา (TH / EN)</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-medium mb-1">04 / ARCHITECTURE</div>
            <div className="text-zinc-200 font-semibold">Strict TypeScript</div>
          </div>
        </div>

      </div>
    </section>
  );
}
