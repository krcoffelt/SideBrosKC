import Image from "next/image";
import { Metadata } from "next";
import { companyInfo, concreteHighlights, concreteFaqs } from "@/data/company";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Concrete Staining & Sealing | ${companyInfo.name}`,
  description:
    "Transform driveways, patios, and walkways with custom concrete staining, sealing, and slip-resistant finishes from Side Bros KC LLC.",
};

export default function ConcreteStainingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-slate-900 to-slate-950 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">
              Concrete Staining
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Concrete Staining That Protects & Impresses
            </h1>
            <p className="text-base text-indigo-100">
              We prep, stain, and seal concrete the right way — delivering long-lasting finishes
              that withstand Kansas City weather and heavy foot traffic.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {concreteHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-indigo-500/30 p-5">
                  <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-indigo-100">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1400&q=80"
              alt="Freshly stained concrete patio with seating area"
              width={1000}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              A guided process from prep to protective sealing
            </h2>
            <p className="text-base text-slate-600">
              Every project starts with deep cleaning and minor repairs so your stain bonds
              beautifully. Choose from customizable colors, finishes, and slip-resistant additives
              for a surface that stays stunning year after year.
            </p>
            <ol className="space-y-4 border-l-2 border-indigo-200 pl-6 text-sm text-slate-600">
              <li>
                <strong className="block font-semibold text-slate-900">
                  1. Surface preparation
                </strong>
                Removal of dirt, oil, and laitance plus optional crack repair for a flawless base.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">2. Color selection</strong>
                Sample swatches and custom mixing to align with your exterior palette.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">
                  3. Professional application
                </strong>
                Even coverage with commercial-grade stains and dyes, tailored to desired depth.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">
                  4. Protective sealing
                </strong>
                Clear coats in wet-look gloss or natural matte, plus slip-resistant options.
              </li>
            </ol>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1616628188505-4044404f2849?auto=format&fit=crop&w=1000&q=80"
              alt="Stained concrete walkway leading to a home entrance"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                FAQs about staining, sealing, and maintenance
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Learn how long projects take, how to care for your new finish, and what to expect on
                installation day.
              </p>
            </div>
            <FAQAccordion items={concreteFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Give your concrete a showroom finish"
        subtitle="Share your project goals, and the Bros will deliver a detailed staining and sealing plan tailored to your property."
      />
    </>
  );
}
