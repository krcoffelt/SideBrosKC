import Link from "next/link";
import { serviceHighlights } from "@/data/company";
import { CheckIcon } from "./icons";

export function ServiceHighlights() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <article
              key={service.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/10 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 shadow-[0_10px_25px_rgba(111,58,255,0.2)]">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <div className="mt-auto pt-6">
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-purple-600 transition hover:text-purple-700"
                >
                  Explore Service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
