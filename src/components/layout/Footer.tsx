import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-100 dark:bg-[#07080c] text-zinc-500 text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="inline-block">
              <img
                src="/logo-wide-dark.png"
                alt="PRIME NEXT TECH & SOLUTIONS"
                className="h-6 sm:h-7 w-auto object-contain hidden dark:block"
              />
              <img
                src="/logo-wide-light.png"
                alt="PRIME NEXT TECH & SOLUTIONS"
                className="h-6 sm:h-7 w-auto object-contain block dark:hidden"
              />
            </Link>
            <p className="text-zinc-500 text-xs font-normal">
              Enterprise Web Applications, System Development & Commercial Templates.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-600 dark:text-zinc-400 font-sans text-xs">
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
            <Link href="/studio" className="hover:text-zinc-950 dark:hover:text-white transition-colors text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
              studio / cms
            </Link>
            <span className="text-zinc-300 dark:text-zinc-600">|</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-mono">Line: @artydev</span>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-600 font-mono gap-3 transition-colors">
          <div>© {new Date().getFullYear()} PRIME NEXT TECH & SOLUTIONS. All rights reserved.</div>
          <div>Strict TypeScript · Supabase · Next.js 15</div>
        </div>
      </div>
    </footer>
  );
}
