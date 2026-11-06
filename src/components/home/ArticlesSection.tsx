import React from 'react';
import { ArrowUpRight, BookOpen, Calendar, Clock } from 'lucide-react';

export default function ArticlesSection() {
  const articles = [
    {
      id: '1',
      title: 'เจาะลึกการเลือกระบบ ERP สำหรับธุรกิจ SME: ซื้อสำเร็จรูป VS พัฒนาเอง แบบไหนคุ้มค่ากว่า?',
      excerpt: 'เปรียบเทียบข้อดี-ข้อจำกัด ค่าใช้จ่ายแฝง และระยะเวลาคืนทุน (ROI) ระหว่างการใช้ระบบ ERP สำเร็จรูปกับการพัฒนา Custom ERP ให้ตรงใจองค์กร',
      category: 'Enterprise & ERP',
      date: '5 พฤศจิกายน 2026',
      readTime: '6 นาที',
      slug: 'how-to-choose-erp-for-sme',
    },
    {
      id: '2',
      title: 'ทำไม Next.js 15 App Router และ Supabase ถึงเป็นสแต็กทองคำของเว็บแอปพลิเคชันยุคนี้?',
      excerpt: 'วิเคราะห์สถาปัตยกรรม Server Components, การจัดการ State แบบ Real-time, และประสิทธิภาพการทำ SEO ที่โหลดไวกว่าเว็บทั่วไป 3 เท่า',
      category: 'Tech Architecture',
      date: '28 ตุลาคม 2026',
      readTime: '5 นาที',
      slug: 'why-nextjs-15-and-supabase',
    },
    {
      id: '3',
      title: 'สถาปัตยกรรมระบบตลาดรถยนต์มือสอง (Car Marketplace Architecture) ที่รองรับการสเกลระดับล้านวิว',
      excerpt: 'เบื้องหลังการออกแบบดาต้าเบส PostgreSQL, ระบบฟิลเตอร์รถยนต์ไฟฟ้า (EV Filtering), และเครื่องคำนวณค่างวดสินเชื่อแบบ Real-time',
      category: 'Case Study',
      date: '15 ตุลาคม 2026',
      readTime: '7 นาที',
      slug: 'car-marketplace-architecture-deep-dive',
    },
  ];

  return (
    <section id="articles" className="py-20 border-b border-zinc-200 dark:border-white/[0.08] bg-zinc-100/40 dark:bg-[#090b10] transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>KNOWLEDGE & TECH INSIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white transition-colors">
              บทความและสาระน่ารู้ด้านเทคโนโลยี
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-normal">
              อัปเดตองค์ความรู้ สถาปัตยกรรมซอฟต์แวร์ และกลยุทธ์การนำเทคโนโลยีมาขับเคลื่อนธุรกิจจริง
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#0f111a] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-100 dark:border-white/[0.04] flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>

                <span className="text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold text-xs">
                  <span>อ่านต่อ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
