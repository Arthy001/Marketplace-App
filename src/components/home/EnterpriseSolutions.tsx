import React from 'react';
import { ArrowUpRight, CheckCircle2, Database, Layers, Server, ShieldCheck, Zap } from 'lucide-react';

export default function EnterpriseSolutions() {
  return (
    <section id="solutions" className="py-20 border-b border-zinc-200 dark:border-white/[0.08] bg-zinc-100/50 dark:bg-[#0c0e15]/50 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium mb-3">
            <span>ENTERPRISE & B2B SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white transition-colors">
            โซลูชันองค์กรและการพัฒนาระบบเฉพาะทาง
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            นอกจากซอร์สโค้ดสำเร็จรูป PRIME NEXT TECH & SOLUTIONS ยังมีบริการวางระบบ ERP บริหารองค์กร และรับพัฒนาซอฟต์แวร์ตามสั่งสำหรับธุรกิจที่ต้องการขยายสเกลอย่างมั่นคง
          </p>
        </div>

        {/* Featured Solution: PrimeERP */}
        <div className="mb-12 rounded-2xl border border-zinc-300 dark:border-white/[0.1] bg-white dark:bg-[#0f111a] p-6 sm:p-10 shadow-xs relative overflow-hidden transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>FLAGSHIP SOLUTION · LIVE DEMO READY</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                PrimeERP Suite — ระบบบริหารจัดการองค์กรแบบครบวงจร
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                โซลูชัน ERP ยุคใหม่ที่ออกแบบมาเพื่อเชื่อมโยงกระบวนการทำงานของทั้งองค์กรเข้าด้วยกัน ทั้งระบบคลังสินค้า (Inventory), บัญชีและการเงิน (Accounting), การจัดซื้อ (Purchasing), และการบริหารงานบุคคล (HR) ประมวลผลแบบ Real-time รวดเร็ว ปลอดภัย และขยายขนาดได้ไม่จำกัด
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>รองรับหลายสาขาและหลายคลังสินค้า</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>แดชบอร์ดสรุปยอดขายและกำไรแบบเรียลไทม์</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>กำหนดสิทธิ์เข้าถึงข้อมูลตามตำแหน่งพนักงาน (RBAC)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>เชื่อมต่อ API ระบบภายนอกและ Payment Gateway</span>
                </div>
              </div>
            </div>

            {/* CTA Button Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="https://erp.primenexttech.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer text-center"
              >
                <span>เปิดทดลองเล่น PrimeERP Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://line.me/ti/p/~@artydev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer text-center"
              >
                ขอใบเสนอราคา / ติดต่อ LINE @artydev
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-white/[0.06] bg-white dark:bg-[#0c0e15] space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-zinc-900 dark:text-white">
              Custom Web Application Development
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              รับออกแบบและพัฒนาเว็บแอปพลิเคชันเฉพาะทางตามความต้องการของธุรกิจคุณ ด้วย Next.js 15, React 19 และ TypeScript สะอาด ปลอดภัย ใช้งานได้จริง
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 dark:border-white/[0.06] bg-white dark:bg-[#0c0e15] space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-zinc-900 dark:text-white">
              Cloudflare & Cloud Architecture
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              วางระบบคลาวด์บน Cloudflare Workers/Pages และ Supabase ให้ระบบขององค์กรรองรับทราฟฟิกมหาศาล โหลดเร็วระดับเสี้ยววินาทีทั่วโลก พร้อมระบบความปลอดภัยระดับสากล
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 dark:border-white/[0.06] bg-white dark:bg-[#0c0e15] space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-zinc-900 dark:text-white">
              Implementation & Deployment Support
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              บริการติดตั้ง ปรับแต่ง และฝึกอบรมทีมงานในการใช้งานระบบ ดูแลหลังการส่งมอบงานด้วยทีมวิศวกรผู้เชี่ยวชาญ พร้อมแก้ปัญหาแบบตรงจุด
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
