import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['thai'],
  variable: '--font-noto-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marketplace-Apps Hub | Production-Ready Web Application Templates & Source Code',
  description: 'ศูนย์รวมซอร์สโค้ดและเว็บแอปพลิเคชันเทมเพลตระดับโปรดักชัน พัฒนาด้วย Next.js 15, TypeScript, Tailwind CSS และ Supabase พร้อมส่งมอบและเปิดตัวธุรกิจได้ทันที',
  keywords: ['Next.js 15 template', 'Supabase source code', 'Car marketplace template', 'Web app source code for sale', 'TypeScript templates']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${plusJakartaSans.variable} ${notoSansThai.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-zinc-100 font-sans selection:bg-zinc-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
