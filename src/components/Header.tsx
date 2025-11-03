'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, companyInfo } from "@/data/company";
import clsx from "clsx";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-purple-500/10 bg-white/95 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-slate-900 whitespace-nowrap">
          Side Bros KC
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "whitespace-nowrap transition-colors hover:text-purple-600",
                  isActive ? "text-purple-600" : "text-slate-600"
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
        <summary className="flex cursor-pointer items-center rounded-full border border-purple-500/20 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-purple-50">
          Menu
        </summary>
        <div className="absolute right-0 mt-2 w-60 rounded-xl border border-purple-500/15 bg-white p-2 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-lg px-3 py-2 text-sm font-semibold transition whitespace-nowrap",
                    isActive
                      ? "bg-purple-50 text-purple-600"
                      : "text-slate-700 hover:bg-purple-50"
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
              className="rounded-lg border border-purple-400/60 px-3 py-2 text-center text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
            >
              Quote Request
            </Link>
          </div>
        </div>
      </details>
    </div>
  );
}
