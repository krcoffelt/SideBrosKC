import Link from "next/link";
import { companyInfo } from "@/data/company";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-indigo-200 bg-white/95 p-2 shadow-xl shadow-indigo-200/60 backdrop-blur md:hidden">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <a
          href={companyInfo.phoneHref}
          className="flex-1 rounded-full bg-indigo-600 px-4 py-2 text-center text-white transition hover:bg-indigo-700"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border border-indigo-600 px-4 py-2 text-center text-indigo-600 transition hover:bg-indigo-50"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
