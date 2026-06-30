import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg shadow-brand-500/25">
            TF
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight text-white">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-slate-400 sm:block">
              IT Outsourcing & Staffing
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 sm:inline-block"
          >
            Get Started
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="cursor-pointer list-none rounded-lg border border-white/10 p-2.5 text-slate-300">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>
      <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-xl">
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-1 block rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
        >
          Get Started
        </Link>
      </div>
    </details>
  );
}
