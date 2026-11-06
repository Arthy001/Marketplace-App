import React from 'react';
import { Award, Code2, Globe2, HeartHandshake, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-zinc-200 dark:border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Story & Mission */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium">
              <span>ABOUT PRIME NEXT TECH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              เราสร้างสรรค์ซอฟต์แวร์และแอปพลิเคชัน เพื่อขับเคลื่อนธุรกิจยุคใหม่
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              <strong className="text-zinc-900 dark:text-white font-semibold">PRIME NEXT TECH & SOLUTIONS</strong> ก่อตั้งขึ้นด้วยความตั้งใจที่จะยกระดับการพัฒนาซอฟต์แวร์ในประเทศไทย เราเชื่อว่าเทคโนโลยีที่ดีไม่ควรซับซ้อนเกินไป และต้องพร้อมใช้งานเพื่อสร้างคุณค่าทางธุรกิจได้ทันทีตั้งแต่วันแรก
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              เราผสมผสานสองบริการหลักไว้ในที่เดียว: คือการเป็น <span className="text-zinc-900 dark:text-white font-medium">แหล่งรวมเว็บแอปพลิเคชันและซอร์สโค้ดระดับโปรดักชัน</span> สำหรับนักพัฒนาและผู้ประกอบการรุ่นใหม่ ควบคู่กับ <span className="text-zinc-900 dark:text-white font-medium">การเป็นพาร์ตเนอร์พัฒนาระบบ ERP และโซลูชันองค์กร</span> ที่มั่นคง รวดเร็ว และรองรับการเติบโตระยะยาว
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-white/[0.08] font-mono text-xs">
              <div>
                <div className="text-zinc-500 mb-1">01 / PHILOSOPHY</div>
                <div className="font-semibold text-zinc-900 dark:text-white">Clean Architecture</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">02 / STANDARD</div>
                <div className="font-semibold text-zinc-900 dark:text-white">Strict TypeScript</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">03 / PERFORMANCE</div>
                <div className="font-semibold text-zinc-900 dark:text-white">Sub-second Latency</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">04 / PARTNERSHIP</div>
                <div className="font-semibold text-zinc-900 dark:text-white">Direct Dev Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Values Cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-[#0c0e15] space-y-2.5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  โค้ดจริง ไม่มีล็อกอิน ไม่มีโค้ดแฝง
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ทุกซอร์สโค้ดที่ส่งมอบคือ Pure TypeScript 100% ปราศจาก Obfuscated Code คุณสามารถนำไปปรับแต่ง แก้ไข ต่อยอด หรือส่งต่อให้ทีมงานของคุณได้อย่างอิสระเต็มที่
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-[#0c0e15] space-y-2.5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  เทคโนโลยีสแต็กระดับแถวหน้าของโลก
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                เราเลือกใช้สแต็กที่ทันสมัยที่สุดของยุคอย่าง Next.js 15, React 19, Supabase และ Cloudflare Edge เพื่อให้เว็บไซต์ของคุณมีคะแนน SEO ระดับสูงสุดและโหลดเร็วทันใจ
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-[#0c0e15] space-y-2.5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  การสนับสนุนโดยทีมวิศวกรตัวจริง
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ไม่ทอดทิ้งหลังการขายหรือส่งมอบงาน เราพร้อมให้คำปรึกษา แนะนำการตั้งค่าเซิร์ฟเวอร์ และช่วยตรวจเช็กการ Deploy ครั้งแรกให้ดำเนินไปอย่างราบรื่น
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
