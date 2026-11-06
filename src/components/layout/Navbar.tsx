'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import InquiryModal from '@/components/modal/InquiryModal';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalInquiryOpen, setInternalInquiryOpen] = useState(false);

  const handleInquiryClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      setInternalInquiryOpen(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-[#090a0f]/90 border-b border-zinc-200 dark:border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Responsive Brand Logo */}
          <Link href="/" className="flex items-center group">
            {/* Mobile: Compact Square Logo */}
            <div className="block sm:hidden w-8 h-8">
              <img
                src="/logo-dark.png"
                alt="PRIME NEXT TECH & SOLUTIONS"
                width={32}
                height={32}
                className="w-8 h-8 object-contain hidden dark:block aspect-square"
              />
              <img
                src="/logo-light.png"
                alt="PRIME NEXT TECH & SOLUTIONS"
                width={32}
                height={32}
                className="w-8 h-8 object-contain block dark:hidden aspect-square"
              />
            </div>

            {/* Desktop / Tablet: Full Wide Logo */}
            <div className="hidden sm:block h-8 md:h-9 w-[150px] md:w-[168px]">
              <img
                src="/logo-wide-dark.png"
                alt="PRIME NEXT TECH & SOLUTIONS"
                width={168}
                height={36}
                className="h-8 md:h-9 w-[150px] md:w-[168px] object-contain hidden dark:block transition-all aspect-[2100/449]"
              />
              <img
                src="/logo-wide-light.png"
                alt="PRIME NEXT TECH & SOLUTIONS"
                width={168}
                height={36}
                className="h-8 md:h-9 w-[150px] md:w-[168px] object-contain block dark:hidden transition-all aspect-[2100/449]"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link href="/#templates" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              แอปพลิเคชัน
            </Link>
            <Link href="/#solutions" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              โซลูชันองค์กร
            </Link>
            <Link href="/#articles" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              บทความ
            </Link>
            <Link href="/#about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              เกี่ยวกับเรา
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Inquire CTA */}
            <button
              onClick={handleInquiryClick}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <span>ปรึกษาโปรเจกต์ / ติดต่อเรา</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'ปิดเมนูนำทาง' : 'เปิดเมนูนำทาง'}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#0c0e15] px-5 py-4 space-y-3.5 text-sm transition-colors">
          <Link
            href="/#templates"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
          >
            แอปพลิเคชัน
          </Link>
          <Link
            href="/#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
          >
            โซลูชันองค์กร
          </Link>
          <Link
            href="/#articles"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
          >
            บทความและสาระน่ารู้
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
          >
            เกี่ยวกับเรา
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleInquiryClick();
              }}
              className="w-full py-2.5 rounded-lg text-center text-sm font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
            >
              ปรึกษาโปรเจกต์ / ติดต่อเรา
            </button>
          </div>
        </div>
      )}

      {/* Internal Inquiry Modal */}
      <InquiryModal
        isOpen={internalInquiryOpen}
        onClose={() => setInternalInquiryOpen(false)}
      />
    </header>
  );
}
