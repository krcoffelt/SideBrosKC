'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, companyInfo } from "@/data/company";
import clsx from "clsx";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold text-white">Side Bros KC LLC</span>
          <span className="text-sm text-purple-200/80">{companyInfo.tagline}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "transition-colors hover:text-purple-200",
                  isActive ? "text-purple-200" : "text-slate-300"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={companyInfo.phoneHref}
            className="accent-button hover:-translate-y-0.5"
          >
            Call {companyInfo.phone}
          </a>
          <Link
            href="/contact"
            className="secondary-button"
          >
            Get a Free Quote
          </Link>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}

function MobileMenu() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="flex cursor-pointer items-center rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm transition hover:bg-white/10">
          Menu
        </summary>
        <div className="absolute right-0 mt-2 w-60 rounded-xl border border-white/10 bg-black/80 p-2 shadow-xl backdrop-blur">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-lg px-3 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-purple-500/20 text-purple-200"
                      : "text-slate-200 hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={companyInfo.phoneHref}
              className="rounded-lg bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Call {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-purple-400/60 px-3 py-2 text-center text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20"
            >
              Quote Request
            </Link>
          </div>
        </div>
      </details>
    </div>
  );
}
