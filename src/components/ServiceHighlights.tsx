import Link from "next/link";
import { serviceHighlights } from "@/data/company";

export function ServiceHighlights() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-18 md:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.84fr,1.16fr] lg:gap-16">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Services
            </p>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Exterior cleaning built for busy homes and visible businesses.
            </h2>
            <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              We keep the offer clear: high-visibility cleaning, dependable scheduling, and work
              that makes the property look sharper when people pull up.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-0 border-t border-slate-200 md:grid-cols-2">
            {serviceHighlights.map((service) => (
              <article
                key={service.name}
                className="group border-b border-slate-200 py-5 transition-colors hover:border-purple-300"
              >
                <div className="mb-2 flex items-center justify-end gap-4">
                  <Link
                    href={service.href}
                    className="rounded-full bg-purple-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    View Service
                  </Link>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
