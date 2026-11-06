import React from 'react';
import type { Metadata } from 'next';
import { getTemplates } from '@/sanity/lib/fetch';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CatalogBrowser from '@/components/home/CatalogBrowser';
import EnterpriseSolutions from '@/components/home/EnterpriseSolutions';
import AboutSection from '@/components/home/AboutSection';
import ArticlesSection from '@/components/home/ArticlesSection';
import ValueProps from '@/components/home/ValueProps';
import PricingSection from '@/components/home/PricingSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata: Metadata = {
  title: 'PRIME NEXT TECH & SOLUTIONS | Enterprise Web Applications & Source Code',
  description: 'ศูนย์รวมซอร์สโค้ดและเว็บแอปพลิเคชันเทมเพลตระดับโปรดักชัน Next.js 15, TypeScript, Tailwind CSS และ Supabase พร้อมโซลูชันระบบบริหารจัดการองค์กร ERP',
  alternates: {
    canonical: 'https://primenexttech.solutions',
  },
};

export default async function HomePage() {
  const templates = await getTemplates();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 font-sans transition-colors">
      
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Minimal Hero Section */}
        <HeroSection />

        {/* Catalog Section with Client-Side Interactive Filtering */}
        <section id="templates" className="py-16 border-b border-zinc-200 dark:border-white/[0.06] transition-colors">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <CatalogBrowser initialTemplates={templates} />
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <EnterpriseSolutions />

        {/* Engineering Standards */}
        <ValueProps />

        {/* Licensing & Pricing */}
        <PricingSection />

        {/* Articles & Insights Section */}
        <ArticlesSection />

        {/* About Us Section */}
        <AboutSection />

        {/* FAQ */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
