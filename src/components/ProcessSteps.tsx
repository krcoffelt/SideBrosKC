import { processSteps } from "@/data/company";

export function ProcessSteps() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-indigo-600">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A proven three-step process
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-base font-semibold text-white shadow-lg">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
