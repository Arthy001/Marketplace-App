'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
  currency: 'THB' | 'USD';
  onToggleCurrency: () => void;
}

export default function Navbar({ onOpenInquiry, currency, onToggleCurrency }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090a0f]/90 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Minimalist Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-bold text-sm">
              M
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                Marketplace Apps
              </span>
              <span className="text-xs text-zinc-400">/ hub</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link href="/#templates" className="hover:text-white transition-colors">
              Templates
            </Link>
            <Link href="/#standards" className="hover:text-white transition-colors">
              Engineering Standards
            </Link>
            <Link href="/#licensing" className="hover:text-white transition-colors">
              Licensing
            </Link>
            <Link href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
            >
              Currency: <span className="text-white font-bold">{currency}</span>
            </button>

            {/* Inquire CTA */}
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <span>Contact / Inquire</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleCurrency}
              className="px-2.5 py-1 rounded text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800"
            >
              {currency}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0e15] px-5 py-4 space-y-3.5 text-sm">
          <Link
            href="/#templates"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-300 hover:text-white"
          >
            Templates
          </Link>
          <Link
            href="/#standards"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-300 hover:text-white"
          >
            Engineering Standards
          </Link>
          <Link
            href="/#licensing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-300 hover:text-white"
          >
            Licensing
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-300 hover:text-white"
          >
            FAQ
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              className="w-full py-2.5 rounded-lg text-center text-sm font-semibold bg-white text-zinc-950"
            >
              Contact / Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
