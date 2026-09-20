import React from 'react';

export default function ValueProps() {
  const standards = [
    {
      num: '01',
      title: 'สถาปัตยกรรม Type-Safe',
      description: 'เขียนด้วย TypeScript 100% แยก Layer โค้ดชัดเจน ง่ายต่อการแก้ไขและต่อยอดฟีเจอร์'
    },
    {
      num: '02',
      title: 'Supabase Schema & Mock Data',
      description: 'มาพร้อมไฟล์สร้าง Database SQL และชุดข้อมูลจำลอง เสียบใช้งานหรือทดสอบแบบออฟไลน์ได้ทันที'
    },
    {
      num: '03',
      title: 'โหลดเร็ว ไม่มีโค้ดส่วนเกิน',
      description: 'พัฒนาบน Next.js 15 App Router และ Tailwind CSS ประสิทธิภาพสูง โหลดเร็วระดับ Lighthouse 95+'
    },
    {
      num: '04',
      title: 'สิทธิ์ซอร์สโค้ดเต็มรูปแบบ',
      description: 'ส่งมอบ Uncompiled Source Code ทั้งหมด ปรับแต่งใส่แบรนด์ของคุณ หรือใช้ส่งมอบงานลูกค้าได้ทันที'
    }
  ];

  return (
    <section id="standards" className="py-20 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Engineering Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            ออกแบบโครงสร้างโค้ดอย่างมีมาตรฐาน สำหรับนักพัฒนาและเจ้าของธุรกิจ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="font-mono text-sm text-zinc-500 font-bold">{item.num}</div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
