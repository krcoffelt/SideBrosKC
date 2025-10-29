import Link from "next/link";
import { serviceHighlights } from "@/data/company";
import { CheckIcon } from "./icons";

export function ServiceHighlights() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <article
              key={service.name}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                <CheckIcon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <div className="mt-auto pt-4">
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
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
