import { Template } from '@/types';

export const TEMPLATES_DATA: Template[] = [
  {
    id: 'car4u',
    slug: 'car4u',
    title: 'Car4U - Used Car Marketplace & Automotive Sales Platform',
    tagline: 'ระบบซื้อ-ขายและเช่ารถยนต์มือสองระดับพรีเมียม สไตล์ modern luxury พร้อม Supabase & Next.js 15',
    description: 'เทมเพลตและซอร์สโค้ดระบบตลาดรถยนต์มือสองแบบครบวงจร มีระบบค้นหาและกรองละเอียด (EV, Sedan, SUV ฯลฯ), ระบบคำนวณสินเชื่อ/ค่างวดรถ, นัดหมายทดลองขับ, รองรับ 2 ภาษา TH/EN และแปลงสกุลเงินอัตโนมัติ',
    detailedDescription: `Car4U เป็นแอปพลิเคชันเว็บระดับโปรดักชันที่พัฒนาด้วย Next.js 15 (App Router), TypeScript, Tailwind CSS และระบบฐานข้อมูล Supabase PostgreSQL เหมาะอย่างยิ่งสำหรับเต็นท์รถยนต์, ธุรกิจเช่ารถ, หรือสตาร์ตอัปที่ต้องการเปิดแพลตฟอร์มตลาดรถยนต์มือสองออนไลน์ในทันที

โครงสร้างโค้ดถูกออกแบบตามหลัก Clean Architecture พร้อมระบบ Fallback เป็น Mock Data คุณภาพสูง 28 คัน ทำให้สามารถรันและพรีวิวได้ทันทีแม้ยังไม่ได้เชื่อมต่อฐานข้อมูล หรือเชื่อมต่อ Supabase ได้ในเวลาเพียง 2 นาทีด้วยไฟล์ SQL schema & seed ที่เตรียมไว้ให้อย่างครบถ้วน`,
    category: 'automotive',
    categoryLabel: 'Automotive & Rentals',
    priceStandardTHB: 4900,
    priceStandardUSD: 149,
    priceExtendedTHB: 12900,
    priceExtendedUSD: 389,
    status: 'available',
    isFeatured: true,
    isNew: true,
    version: '1.2.0',
    framework: 'Next.js 15 + React 19',
    rating: 4.98,
    reviewsCount: 38,
    salesCount: 42,
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: 'http://localhost:3001',
    githubUrl: 'https://github.com/Arthy001/car4you',
    keyFeatures: [
      '⚡ Next.js 15 App Router & Server Components ประสิทธิภาพสูง โหลดเร็วระดับเสี้ยววินาที',
      '🌐 Bilingual Support (TH / EN) สลับภาษาได้ทันที พร้อมคำนวณเรทแปลงสกุลเงิน THB ⇄ USD อัตโนมัติ',
      '🔋 Smart EV & Vehicle Filtering กรองรถยนต์ไฟฟ้า, Sedan, SUV, Luxury, Van และกรองตามช่วงราคา/ปี',
      '💰 Financing & Loan Calculator เครื่องคำนวณค่างวดต่อเดือน คำนวณดอกเบี้ยและเงินดาวน์แบบเรียลไทม์',
      '🚗 Test Drive & Booking Modal ระบบฟอร์มนัดหมายทดลองขับและส่งข้อมูลจอง',
      '📄 Dedicated Vehicle Detail Page หน้ารายละเอียดรถพร้อมแกลเลอรีภาพและสเปกเครื่องยนต์',
      '🗄️ Supabase PostgreSQL Ready พร้อมไฟล์ Schema และ Mock Data รถจริง 28 คัน',
      '📱 100% Mobile Responsive สวยงามและใช้งานลื่นไหลบนทุกหน้าจอทั้งมือถือและเดสก์ท็อป'
    ],
    techStack: [
      { name: 'Next.js 15', category: 'Frontend', badgeColor: 'bg-black text-white' },
      { name: 'React 19', category: 'Frontend', badgeColor: 'bg-cyan-900/60 text-cyan-300' },
      { name: 'TypeScript', category: 'Frontend', badgeColor: 'bg-blue-900/60 text-blue-300' },
      { name: 'Tailwind CSS v4', category: 'Styling', badgeColor: 'bg-teal-900/60 text-teal-300' },
      { name: 'Supabase', category: 'Database', badgeColor: 'bg-emerald-900/60 text-emerald-300' },
      { name: 'PostgreSQL', category: 'Database', badgeColor: 'bg-indigo-900/60 text-indigo-300' },
      { name: 'Lucide Icons', category: 'Styling', badgeColor: 'bg-purple-900/60 text-purple-300' },
      { name: 'Vercel Ready', category: 'Deployment', badgeColor: 'bg-zinc-800 text-zinc-200' },
    ],
    includedItems: [
      'Full Source Code (TypeScript, Clean Modular Architecture)',
      'Supabase Database Schema SQL & Seed Dataset (28 Realistic Cars)',
      'Complete Bilingual Translation Modules (Thai & English)',
      'Quick Setup & Deployment Guide (.md format)',
      'Lifetime Free Minor Updates & Bug Fixes',
      'Direct Support for Initial Deployment'
    ],
    databaseSchemaInfo: [
      'Table: cars (id, title, brand, model, year, price_thb, price_usd, mileage, fuel_type, transmission, body_type, is_ev, images, status, specs)',
      'Table: bookings / test_drives (id, car_id, customer_name, customer_phone, customer_email, preferred_date, status, created_at)',
      'Table: inquiries (id, car_id, name, contact, message, status, created_at)'
    ],
    requirements: [
      'Node.js 18.x or higher (Recommended Node 20+)',
      'npm, yarn, pnpm, or bun',
      'Free Supabase account (or run offline with zero setup using built-in mock data)'
    ],
    lastUpdated: 'กันยายน 2026'
  },
  {
    id: 'estatesphere',
    slug: 'estatesphere',
    title: 'EstateSphere - Luxury Real Estate & Villa Portal',
    tagline: 'แพลตฟอร์มซื้อขายและเช่าอสังหาริมทรัพย์ คอนโดหรู และพูลวิลล่า พร้อมระบบ Virtual Tour & Maps',
    description: 'เทมเพลตระบบจัดการและแสดงรายการอสังหาริมทรัพย์ระดับไฮเอนด์ รองรับระบบค้นหาตามทำเลและสถานีรถไฟฟ้า, ฟอร์มนัดหมายชมโครงการ, และระบบเปรียบเทียบคุณสมบัติบ้าน',
    detailedDescription: `EstateSphere พัฒนาขึ้นมาเพื่อเอเจนซี่อสังหาริมทรัพย์และผู้พัฒนาโครงการบ้าน/คอนโด ที่ต้องการหน้าเว็บระดับสากล ดูหรูหรา และมีฟังก์ชันค้นหาพิกัดแผนที่แบบ Interactive`,
    category: 'real-estate',
    categoryLabel: 'Real Estate & Properties',
    priceStandardTHB: 5900,
    priceStandardUSD: 179,
    priceExtendedTHB: 14900,
    priceExtendedUSD: 449,
    status: 'coming_soon',
    isFeatured: false,
    isNew: true,
    version: '1.0.0 (Coming Soon)',
    framework: 'Next.js 15 + MapLibre GL',
    rating: 5.0,
    reviewsCount: 12,
    salesCount: 0,
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      '🗺️ Interactive Property Map Integration ปักหมุดแผนที่และสิ่งอำนวยความสะดวกใกล้เคียง',
      '🏡 Floor Plan & 3D Virtual Tour Viewer ระบบแสดงแปลนห้องและภาพมุมกว้าง',
      '📊 Mortgage & Installment Estimation ระบบประมาณการสินเชื่อบ้านรายเดือน',
      '📅 Schedule a Visit ระบบจองคิวนัดหมายเข้าชมบ้านตัวอย่าง',
      '📱 Filter by BTS / MRT / Location กรองอสังหาฯ ตามแนวรถไฟฟ้าและโซนทำเลทอง'
    ],
    techStack: [
      { name: 'Next.js 15', category: 'Frontend', badgeColor: 'bg-black text-white' },
      { name: 'TypeScript', category: 'Frontend', badgeColor: 'bg-blue-900/60 text-blue-300' },
      { name: 'Tailwind CSS v4', category: 'Styling', badgeColor: 'bg-teal-900/60 text-teal-300' },
      { name: 'Supabase', category: 'Database', badgeColor: 'bg-emerald-900/60 text-emerald-300' },
      { name: 'MapLibre GL', category: 'Frontend', badgeColor: 'bg-amber-900/60 text-amber-300' }
    ],
    includedItems: [
      'Complete Next.js Source Code',
      'Supabase Database Schema for Properties & Agents',
      'Interactive Map Integration Components',
      'Documentation & Deployment Guide'
    ],
    lastUpdated: 'ตุลาคม 2026'
  },
  {
    id: 'novashop',
    slug: 'novashop',
    title: 'NovaShop - Headless E-Commerce & Brand Storefront',
    tagline: 'ร้านค้าออนไลน์ประสิทธิภาพสูง ดีไซน์มินิมอล พร้อมระบบตะกร้าสินค้าและ Checkout',
    description: 'เว็บร้านค้าออนไลน์สำหรับแบรนด์และสินค้าแฟชั่น/ไลฟ์สไตล์ ดีไซน์ทันสมัย โหลดเร็วระดับเสี้ยววินาที รองรับการเชื่อมต่อ Payment Gateway และระบบจัดการสต็อก',
    detailedDescription: `NovaShop ออกแบบมาเพื่อมอบประสบการณ์การช้อปปิ้งที่ลื่นไหลที่สุด อัตรา Bounce Rate ต่ำ เพิ่ม Conversion Rate สูงสุด ด้วยระบบ Server-Side Rendering และ Optimistic UI`,
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    priceStandardTHB: 5400,
    priceStandardUSD: 169,
    priceExtendedTHB: 13900,
    priceExtendedUSD: 419,
    status: 'coming_soon',
    isFeatured: false,
    isNew: false,
    version: '1.0.0 (Coming Soon)',
    framework: 'Next.js 15 + Stripe / PromptPay Ready',
    rating: 4.95,
    reviewsCount: 19,
    salesCount: 0,
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      '🛍️ Fast Slide-over Cart & Mini Cart Drawer ตะกร้าสินค้าแบบสไลด์พร้อมคำนวณส่วนลด',
      '💳 Multi-Payment Ready เตรียมพร้อมสำหรับ Stripe, PromptPay และโอนเงินผ่านสลิป',
      '🔍 Instant Live Search & Variant Selector ระบบเลือกสี/ไซส์แบบเรียลไทม์',
      '⚡ SEO & Core Web Vitals 100/100 เพื่อติดอันดับ Google ได้ง่ายขึ้น'
    ],
    techStack: [
      { name: 'Next.js 15', category: 'Frontend', badgeColor: 'bg-black text-white' },
      { name: 'Zustand', category: 'Frontend', badgeColor: 'bg-orange-900/60 text-orange-300' },
      { name: 'Tailwind CSS', category: 'Styling', badgeColor: 'bg-teal-900/60 text-teal-300' },
      { name: 'Stripe API', category: 'Backend', badgeColor: 'bg-indigo-900/60 text-indigo-300' }
    ],
    includedItems: [
      'Full Storefront Source Code',
      'Product Schema & Inventory Sample Data',
      'Cart & Checkout State Management Setup'
    ],
    lastUpdated: 'พฤศจิกายน 2026'
  },
  {
    id: 'luxestay',
    slug: 'luxestay',
    title: 'LuxeStay - Boutique Hotel & Resort Booking System',
    tagline: 'ระบบจองห้องพักโรงแรม รีสอร์ต และวิลล่า พร้อมปฏิทินเลือกวันเข้าพักแบบไดนามิก',
    description: 'เทมเพลตเว็บไซต์สำหรับธุรกิจโรงแรมและรีสอร์ต มีระบบเช็คห้องว่างตามช่วงวันเข้าพัก (Date Range Picker), ระบบคำนวณราคาตามฤดูกาล, และหน้าแสดงรายละเอียดสิ่งอำนวยความสะดวก',
    detailedDescription: `LuxeStay มอบภาพลักษณ์ระดับ 5 ดาวให้กับธุรกิจที่พัก รองรับการจองตรงโดยไม่ต้องเสียค่าคอมมิชชันให้แพลตฟอร์มอื่น`,
    category: 'saas-booking',
    categoryLabel: 'Hospitality & Booking',
    priceStandardTHB: 5900,
    priceStandardUSD: 179,
    priceExtendedTHB: 14900,
    priceExtendedUSD: 449,
    status: 'coming_soon',
    isFeatured: false,
    isNew: false,
    version: '1.0.0 (Coming Soon)',
    framework: 'Next.js 15 + Supabase',
    rating: 4.92,
    reviewsCount: 15,
    salesCount: 0,
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      '📅 Interactive Date Picker & Availability Calendar เช็คห้องว่างตามวันที่เลือก',
      '🏊 Amenities & Room Type Showcase นำเสนอรูปห้องพักและสิ่งอำนวยความสะดวก',
      '📑 Instant Booking Confirmation สรุปรายละเอียดและยืนยันการจองผ่านอีเมล'
    ],
    techStack: [
      { name: 'Next.js 15', category: 'Frontend', badgeColor: 'bg-black text-white' },
      { name: 'Supabase', category: 'Database', badgeColor: 'bg-emerald-900/60 text-emerald-300' },
      { name: 'Tailwind CSS', category: 'Styling', badgeColor: 'bg-teal-900/60 text-teal-300' }
    ],
    includedItems: [
      'Full Source Code & Booking Engine',
      'Supabase Database Schema for Rooms & Bookings',
      'Setup Guide'
    ],
    lastUpdated: 'ธันวาคม 2026'
  }
];

export const LICENSE_TIERS: { [key: string]: { name: string; description: string; features: string[] } } = {
  standard: {
    name: 'Standard License',
    description: 'เหมาะสำหรับธุรกิจเดี่ยว หรือใช้สร้าง 1 เว็บไซต์โปรเจกต์',
    features: [
      'Full Source Code (Clean TypeScript & Next.js 15)',
      'ใช้งานได้สำหรับ 1 โดเมนโปรดักชัน (Single End Product)',
      'รวมไฟล์ Database Schema และ Mock Data ทั้งหมด',
      'คู่มือติดตั้งและเชื่อมต่อ Supabase อย่างละเอียด',
      'รับสิทธิ์อัปเดตฟรีตลอดชีพสำหรับเวอร์ชันย่อย (Minor Updates)',
      'การซัพพอร์ตช่วยเหลือตอบคำถามด้านเทคนิคเบื้องต้น'
    ]
  },
  extended: {
    name: 'Extended / Unlimited License',
    description: 'สำหรับฟรีแลนซ์ เอเจนซี่ หรือผู้พัฒนาที่ต้องการนำไปสร้างหลายโปรเจกต์',
    features: [
      'Full Source Code (Clean TypeScript & Next.js 15)',
      'สิทธิ์ใช้งานแบบไม่จำกัดโดเมน (Unlimited Projects / Multi-Client)',
      'สามารถนำไปปรับแต่งและขายต่อเป็นบริการสำเร็จรูปให้ลูกค้าได้',
      'รวมไฟล์ Figma Design System (ถ้ามี) & Assets คุณภาพสูง',
      'รวมไฟล์ Database Schema และระบบ Seed ข้อมูลอัตโนมัติ',
      'การซัพพอร์ตแบบสิทธิ์พิเศษลำดับแรก (Priority Technical Support)',
      'คู่มือแนะนำสถาปัตยกรรมและการขยายฟีเจอร์เพิ่มเติม (Architecture Guide)'
    ]
  }
};
