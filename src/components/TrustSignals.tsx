import { trustSignals } from "@/data/company";

export function TrustSignals() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustSignals.map((signal) => (
          <div
            key={signal.label}
            className="glass-panel flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-6 text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200/80">
              {signal.label}
            </p>
            <p className="mt-4 text-sm text-slate-200/80">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
