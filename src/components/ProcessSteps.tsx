import { processSteps } from "@/data/company";

export function ProcessSteps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A proven three-step process
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="glass-panel relative overflow-hidden rounded-3xl border border-purple-500/10 bg-white p-6 text-slate-700"
            >
              <span className="absolute -top-4 left-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-base font-semibold text-purple-600 shadow-[0_12px_30px_rgba(111,58,255,0.25)]">
                {index + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
