'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, companyInfo } from "@/data/company";
import clsx from "clsx";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold text-slate-900">Side Bros KC LLC</span>
          <span className="text-sm text-slate-500">{companyInfo.tagline}</span>
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
                  "transition-colors hover:text-indigo-600",
                  isActive ? "text-indigo-600" : "text-slate-700"
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
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Call {companyInfo.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
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
        <summary className="flex cursor-pointer items-center rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
          Menu
        </summary>
        <div className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
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
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-700 hover:bg-slate-100"
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
              className="rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Call {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Quote Request
            </Link>
          </div>
        </div>
      </details>
    </div>
  );
}
