import { client } from './client';
import { TEMPLATES_QUERY, TEMPLATE_BY_SLUG_QUERY, FAQS_QUERY } from './queries';
import { TEMPLATES_DATA } from '@/lib/data/templates';
import { Template } from '@/types';

export async function getTemplates(): Promise<Template[]> {
  try {
    const sanityTemplates = await client.fetch<Template[]>(
      TEMPLATES_QUERY,
      {},
      { next: { revalidate: 60 } } // Revalidate cache every 60 seconds
    );

    if (sanityTemplates && sanityTemplates.length > 0) {
      return sanityTemplates;
    }
  } catch (error) {
    console.warn('Sanity fetch failed or not configured, using local fallback data:', error);
  }

  return TEMPLATES_DATA;
}

export async function getTemplateBySlug(slug: string): Promise<Template | undefined> {
  try {
    const sanityTemplate = await client.fetch<Template | null>(
      TEMPLATE_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );

    if (sanityTemplate && sanityTemplate.slug) {
      return sanityTemplate;
    }
  } catch (error) {
    console.warn(`Sanity fetch for slug "${slug}" failed, using local fallback data:`, error);
  }

  return TEMPLATES_DATA.find((t) => t.slug === slug);
}

export async function getFaqs() {
  const defaultFaqs = [
    {
      q: 'เมื่อซื้อแล้ว จะได้รับไฟล์อะไรบ้าง?',
      a: 'คุณจะได้รับ Uncompiled TypeScript Source Code ทั้งหมด, ไฟล์ Database Schema (.sql) และชุดข้อมูลจำลองสำหรับ Supabase, ระบบสลับภาษา (TH/EN), และเอกสารคู่มือการติดตั้ง (README & Setup Guide) แบบละเอียด'
    },
    {
      q: 'Car2Hand สามารถรันแบบ Offline โดยไม่เชื่อมต่อ Supabase ได้ไหม?',
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

  try {
    const sanityFaqs = await client.fetch<{ _id: string; question: string; answer: string }[]>(
      FAQS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );

    if (sanityFaqs && sanityFaqs.length > 0) {
      return sanityFaqs.map((f) => ({ q: f.question, a: f.answer }));
    }
  } catch {
    // fallback
  }

  return defaultFaqs;
}
