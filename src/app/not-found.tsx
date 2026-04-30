import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function NotFound() {
  return (
    <main className="bg-white px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-10">
        <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
          Page Not Found
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          The link may be out of date, or the page may have moved. Use the homepage, contact page,
          or call the Bros directly and we&apos;ll point you to the right place.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            Contact Us
          </Link>
          <a
            href={companyInfo.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-purple-600 hover:text-purple-600"
          >
            Call {companyInfo.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
