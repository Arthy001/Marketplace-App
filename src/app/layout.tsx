import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://primenexttech.solutions';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'PRIME NEXT TECH & SOLUTIONS | Enterprise Web Applications & Source Code',
    template: '%s | PRIME NEXT TECH & SOLUTIONS',
  },
  description: 'ศูนย์รวมซอร์สโค้ดและเว็บแอปพลิเคชันเทมเพลตระดับโปรดักชัน พัฒนาด้วย Next.js 15, TypeScript, Tailwind CSS และ Supabase พร้อมส่งมอบและเปิดตัวธุรกิจได้ทันที โดย PRIME NEXT TECH & SOLUTIONS',
  keywords: [
    'PRIME NEXT TECH & SOLUTIONS',
    'Next.js 15 template',
    'Supabase source code',
    'Car marketplace template',
    'Web app source code for sale',
    'TypeScript templates',
    'ระบบตลาดรถยนต์มือสอง Next.js',
    'ซื้อขายซอร์สโค้ดเว็บแอป'
  ],
  authors: [{ name: 'PRIME NEXT TECH & SOLUTIONS' }],
  creator: 'PRIME NEXT TECH & SOLUTIONS',
  publisher: 'PRIME NEXT TECH & SOLUTIONS',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PRIME NEXT TECH & SOLUTIONS | Production-Ready Web Applications',
    description: 'ศูนย์รวมซอร์สโค้ดและเว็บแอปพลิเคชันเทมเพลตระดับโปรดักชัน พร้อมส่งมอบและเปิดตัวธุรกิจได้ทันที โดย PRIME NEXT TECH & SOLUTIONS',
    url: BASE_URL,
    siteName: 'PRIME NEXT TECH & SOLUTIONS',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIME NEXT TECH & SOLUTIONS | Production-Ready Web Templates',
    description: 'ศูนย์รวมซอร์สโค้ดและเว็บแอปพลิเคชันเทมเพลตระดับโปรดักชัน Next.js 15 & Supabase',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${notoSansThai.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
