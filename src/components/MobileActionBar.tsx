import Link from "next/link";
import { companyInfo } from "@/data/company";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-purple-500/20 bg-white/95 p-2 shadow-[0_14px_35px_rgba(111,58,255,0.25)] backdrop-blur md:hidden">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
        <a
          href={companyInfo.phoneHref}
          className="flex-1 rounded-full bg-purple-600 px-4 py-2 text-center text-white transition hover:bg-purple-700"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border border-purple-500/40 px-4 py-2 text-center text-purple-600 transition hover:bg-purple-50"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
