import Image from "next/image";
import { Metadata } from "next";
import { companyInfo, concreteHighlights, concreteFaqs } from "@/data/company";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { buildFAQSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

const pageDescription =
  "Transform driveways, patios, and walkways with custom concrete staining, sealing, and slip-resistant finishes from Side Bros KC LLC.";

export const metadata: Metadata = buildPageMetadata({
  title: `Concrete Staining & Sealing | ${companyInfo.name}`,
  description: pageDescription,
  path: "/concrete-staining",
  image: "/images/2025-04-08.webp",
});

export default function ConcreteStainingPage() {
  return (
    <>
      <StructuredData
        id="concrete-staining-schema"
        data={[
          buildServiceSchema({
            name: "Concrete Staining and Sealing",
            description: pageDescription,
            path: "/concrete-staining",
            image: "/images/2025-04-08.webp",
          }),
          buildFAQSchema(concreteFaqs),
        ]}
      />
      <section className="bg-white py-24 text-slate-900">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Concrete Staining
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Concrete Staining That Protects & Impresses
            </h1>
            <p className="text-base text-slate-600">
              We prep, stain, and seal concrete the right way — delivering long-lasting finishes
              that withstand Kansas City weather and heavy foot traffic.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {concreteHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="glass-panel p-5 text-slate-700"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/2025-04-08.webp"
              alt="Freshly stained concrete with crisp edging"
              width={1000}
              height={700}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
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
            <ol className="space-y-4 border-l-2 border-slate-300 pl-6 text-sm text-slate-600">
              <li>
                <strong className="block font-semibold text-slate-900">1. Surface preparation</strong>
                Removal of dirt, oil, and laitance plus optional crack repair for a flawless base.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">2. Color selection</strong>
                Sample swatches and custom mixing to align with your exterior palette.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">3. Professional application</strong>
                Even coverage with commercial-grade stains and dyes, tailored to desired depth.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">4. Protective sealing</strong>
                Clear coats in wet-look gloss or natural matte, plus slip-resistant options.
              </li>
            </ol>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/SideBrosWebPic8.webp"
              alt="Clean concrete patio after staining and washdown"
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
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
