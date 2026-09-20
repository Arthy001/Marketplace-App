import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080c] text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
              <span className="w-5 h-5 rounded bg-zinc-200 text-zinc-950 flex items-center justify-center font-mono text-[11px] font-bold">
                M
              </span>
              <span>Marketplace Apps Hub</span>
            </div>
            <p className="text-zinc-500 text-xs font-normal">
              Commercial-grade Next.js & Supabase application templates.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400 font-mono text-xs">
            <Link href="/templates/car4u" className="hover:text-white transition-colors">
              car4u
            </Link>
            <Link href="/#standards" className="hover:text-white transition-colors">
              standards
            </Link>
            <Link href="/#licensing" className="hover:text-white transition-colors">
              licensing
            </Link>
            <Link href="/#faq" className="hover:text-white transition-colors">
              faq
            </Link>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Line: @artydev</span>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 font-mono gap-3">
          <div>© {new Date().getFullYear()} Marketplace-Apps. All rights reserved.</div>
          <div>Strict TypeScript · Supabase · Next.js 15</div>
        </div>
      </div>
    </footer>
  );
}
