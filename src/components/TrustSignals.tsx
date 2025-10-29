import { trustSignals } from "@/data/company";

export function TrustSignals() {
  return (
    <section className="bg-slate-900 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustSignals.map((signal) => (
          <div key={signal.label} className="rounded-2xl border border-slate-700/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              {signal.label}
            </p>
            <p className="mt-2 text-sm text-slate-200">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
