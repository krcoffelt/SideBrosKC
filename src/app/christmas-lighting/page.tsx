import Image from "next/image";
import { Metadata } from "next";
import { companyInfo, lightingFeatures, lightingFaqs } from "@/data/company";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `Custom Christmas Lighting | ${companyInfo.name}`,
  description:
    "Design, installation, maintenance, and takedown of custom Christmas lighting across the Kansas City metro with lifetime warranty materials.",
};

const packageOptions = [
  {
    name: "Residential",
    details: [
      "Roofline design with custom-cut C9 bulbs",
      "Optional ground & landscape lighting",
      "Timers and remote control included",
      "Installation, maintenance, and takedown",
    ],
  },
  {
    name: "Commercial",
    details: [
      "Brand-aligned color palettes & animations",
      "Large-scale tree and facade wraps",
      "Ongoing maintenance throughout the season",
      "Priority scheduling and custom storage",
    ],
  },
];

export default function ChristmasLightingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/60 to-white py-24 text-slate-900">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-200/45 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />
        </div>
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
              Christmas Lighting
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Make Your Property Shine All Season Long
            </h1>
            <p className="text-base text-slate-600">
              From rooftop outlines to commercial campus displays, we design, install, maintain, and
              remove custom lighting that keeps your property glowing all season.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {lightingFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-3xl border border-purple-400/25 bg-white p-4 shadow-[0_18px_45px_rgba(111,58,255,0.18)]"
                >
                  <CheckIcon className="h-5 w-5 text-purple-600" />
                  <p className="text-sm text-slate-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 shadow-[0_30px_70px_rgba(111,58,255,0.18)]">
            <Image
              src="https://images.unsplash.com/photo-1573575159775-0c5f4e2ce32f?auto=format&fit=crop&w=1200&q=80"
              alt="Custom holiday lighting on a home"
              width={1000}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr]">
            {packageOptions.map((pkg) => (
              <div
                key={pkg.name}
                className="glass-panel rounded-3xl border border-purple-500/10 bg-white p-8 text-slate-700"
              >
                <h2 className="text-2xl font-bold text-slate-900">{pkg.name} Packages</h2>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {pkg.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              A full-service lighting experience
            </h2>
            <ol className="space-y-4 border-l-2 border-purple-300 pl-6 text-sm text-slate-600">
              <li>
                <strong className="block font-semibold text-slate-900">Consultation</strong>
                Walk the property, align on vision, and capture measurements for a perfect fit.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">Design</strong>
                Custom-cut C9 LEDs, ground lighting, and accent elements tailored to your space.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">Installation</strong>
                Safe, efficient setup with weatherproof hardware and timers configured for you.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">Maintenance</strong>
                Burned-out bulb? Loose strand? We’re on call all season to keep things shining.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">Takedown & Storage</strong>
                Hassle-free removal and organized storage until next season.
              </li>
            </ol>
          </div>
          <FAQAccordion items={lightingFaqs} />
        </Container>
      </section>

      <CTASection
        title="Lock in your lighting installation window"
        subtitle="Reserve your installation date early and choose from custom colors, animations, and designs tailored to your home or business."
        primaryLabel="Call to Schedule"
        secondaryLabel="Book a Lighting Consult"
      />
    </>
  );
}
