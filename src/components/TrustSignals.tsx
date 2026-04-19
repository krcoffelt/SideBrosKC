import { trustSignals } from "@/data/company";

export function TrustSignals() {
  return (
    <section className="bg-purple-600 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustSignals.map((signal) => (
          <div key={signal.label} className="border-l border-white/25 pl-4 sm:pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              {signal.label}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/90">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
