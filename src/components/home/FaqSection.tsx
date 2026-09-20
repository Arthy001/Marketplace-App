'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'เมื่อซื้อแล้ว จะได้รับไฟล์อะไรบ้าง?',
      a: 'คุณจะได้รับ Uncompiled TypeScript Source Code ทั้งหมด, ไฟล์ Database Schema (.sql) และชุดข้อมูลจำลองสำหรับ Supabase, ระบบสลับภาษา (TH/EN), และเอกสารคู่มือการติดตั้ง (README & Setup Guide) แบบละเอียด'
    },
    {
      q: 'Car4U สามารถรันแบบ Offline โดยไม่เชื่อมต่อ Supabase ได้ไหม?',
      a: 'ได้แน่นอนครับ ตัวแอปมีระบบ Fallback ในตัวที่จำลองข้อมูลรถยนต์จริง 28 คัน ทำให้สามารถเปิดทดลองรัน, ค้นหา, กรองรถ EV, คำนวณสินเชื่อ, และทดลองจองได้ทันทีโดยไม่ต้องตั้งค่าฐานข้อมูลในครั้งแรก'
    },
    {
      q: 'สามารถนำไปรับงานทำให้ลูกค้า หรือปรับแต่งขายต่อได้หรือไม่?',
      a: 'ได้ 100% ครับ ทั้ง Standard License (1 ลูกค้า/1 เว็บไซต์) และ Extended License (ไม่จำกัดโปรเจกต์) อนุญาตให้นำไปพัฒนาต่อยอดและส่งมอบงานให้ลูกค้าได้อย่างถูกต้องตามกฎหมาย'
    },
    {
      q: 'วิธีการส่งมอบซอร์สโค้ดและการชำระเงินเป็นอย่างไร?',
      a: 'รองรับการโอนผ่านบัญชีธนาคาร / พร้อมเพย์ (PromptPay) หลังจากยืนยัน ทีมงานจะส่งมอบ GitHub Access หรือส่งไฟล์ ZIP ให้ดาวน์โหลดทันทีภายใน 15-30 นาทีครับ'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        <div className="mb-12">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            คำถามที่พบบ่อย (FAQ)
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-zinc-400 group-hover:text-zinc-200">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 pr-8 text-sm text-zinc-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
