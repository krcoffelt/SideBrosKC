import Link from "next/link";
import { companyInfo } from "@/data/company";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-white/20 bg-black/70 p-2 shadow-[0_18px_45px_rgba(124,58,237,0.35)] backdrop-blur md:hidden">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
        <a
          href={companyInfo.phoneHref}
          className="flex-1 rounded-full bg-purple-600 px-4 py-2 text-center text-white transition hover:bg-purple-700"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border border-purple-400/70 px-4 py-2 text-center text-purple-200 transition hover:bg-purple-500/20"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
