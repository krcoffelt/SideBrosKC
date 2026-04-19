import Link from "next/link";
import { companyInfo } from "@/data/company";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-full border border-slate-200 bg-white/95 p-2 shadow-[0_14px_35px_rgba(15,23,42,0.18)] backdrop-blur md:hidden">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
        <a
          href={companyInfo.phoneHref}
          className="flex-1 rounded-full bg-purple-600 px-4 py-2.5 text-center text-white transition hover:bg-purple-700"
          data-analytics-event="mobile_bar_phone_click"
          data-analytics-label="Mobile action bar call"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border border-purple-500 px-4 py-2.5 text-center text-purple-600 transition hover:bg-purple-600 hover:text-white"
          data-analytics-event="mobile_bar_quote_click"
          data-analytics-label="Mobile action bar quote"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
