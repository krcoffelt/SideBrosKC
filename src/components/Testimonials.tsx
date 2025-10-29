import { testimonials } from "@/data/company";
import { StarIcon } from "./icons";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-indigo-600">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            KC neighbors trust the Bros
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real feedback from homeowners and businesses across the Kansas City metro.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-0.5 text-indigo-500">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-auto pt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {testimonial.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
