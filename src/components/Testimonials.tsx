import { testimonials } from "@/data/company";
import { StarIcon } from "./icons";

export function Testimonials() {
  return (
    <section className="bg-[linear-gradient(180deg,#f9f8ff_0%,#ffffff_100%)] py-18 md:py-22">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            KC neighbors trust the Bros
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Real feedback from homeowners and businesses across the Kansas City metro.
          </p>
        </div>
        <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex h-full flex-col border-l border-purple-200 pl-5">
              <div className="flex items-center gap-0.5 text-purple-500">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-auto pt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-xs uppercase tracking-wide text-purple-500/70">
                {testimonial.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
