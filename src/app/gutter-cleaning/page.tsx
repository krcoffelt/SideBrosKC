import Image from "next/image";
import type { Metadata } from "next";
import {
  companyInfo,
  gutterCleaningFaqs,
  gutterCleaningHighlights,
} from "@/data/company";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { buildFAQSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

const pageDescription =
  "Professional gutter cleaning in Kansas City for homes, storefronts, and commercial buildings. Clear debris, flush downspouts, and protect your property from overflow.";

export const metadata: Metadata = buildPageMetadata({
  title: `Gutter Cleaning | ${companyInfo.name}`,
  description: pageDescription,
  path: "/gutter-cleaning",
  image: "/images/SideBrosWebPic3.webp",
});

export default function GutterCleaningPage() {
  return (
    <>
      <StructuredData
        id="gutter-cleaning-schema"
        data={[
          buildServiceSchema({
            name: "Gutter Cleaning",
            description: pageDescription,
            path: "/gutter-cleaning",
            image: "/images/SideBrosWebPic3.webp",
          }),
          buildFAQSchema(gutterCleaningFaqs),
        ]}
      />
      <section className="bg-white py-24 text-slate-900">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Gutter Cleaning
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Gutter Cleaning That Keeps Water Moving Away from Your Property
            </h1>
            <p className="text-base text-slate-600">
              Side Bros KC clears debris, restores drainage, and helps prevent overflow that can
              stain siding, damage fascia, and send water toward your foundation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {gutterCleaningHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="glass-panel p-5 text-slate-700"
                >
                  <h2 className="text-lg font-semibold text-slate-900">{highlight.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/SideBrosWebPic3.webp"
              alt="Exterior walkway and entry area cleaned by Side Bros KC"
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
              Prevent clogs before they turn into repair bills
            </h2>
            <p className="text-base text-slate-600">
              Clean gutters protect more than the roofline. They help control drainage, reduce
              staining, and keep water from spilling where it should not.
            </p>
            <ol className="space-y-4 border-l-2 border-slate-300 pl-6 text-sm text-slate-600">
              <li>
                <strong className="block font-semibold text-slate-900">1. Debris removal</strong>
                Leaves, roof grit, and built-up debris are cleared from the gutter channels.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">2. Downspout flush</strong>
                We confirm water can move through downspouts instead of backing up at the roofline.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">3. Visual check</strong>
                We flag visible overflow points and problem areas that need attention.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">4. Maintenance planning</strong>
                We can recommend a seasonal schedule based on tree cover and drainage issues.
              </li>
            </ol>
          </div>
          <FAQAccordion items={gutterCleaningFaqs} />
        </Container>
      </section>

      <CTASection
        title="Book gutter cleaning before the next heavy rain"
        subtitle="Request a quote for one-time service or recurring seasonal maintenance across the Kansas City metro."
      />
    </>
  );
}
