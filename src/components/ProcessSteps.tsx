import { processSteps } from "@/data/company";

export function ProcessSteps() {
  return (
    <section className="border-t border-slate-200 bg-white py-18 md:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            How It Works
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A clean three-step process that keeps projects moving.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.title} className="relative text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
