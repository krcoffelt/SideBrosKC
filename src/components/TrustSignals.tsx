import { trustSignals } from "@/data/company";

export function TrustSignals() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustSignals.map((signal) => (
          <div
            key={signal.label}
            className="glass-panel flex h-full flex-col justify-between rounded-3xl bg-gradient-to-b from-white via-purple-50/60 to-white p-6 text-slate-700"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              {signal.label}
            </p>
            <p className="mt-4 text-sm text-slate-600">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
