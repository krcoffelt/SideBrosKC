import Image from "next/image";
import type { Metadata } from "next";
import {
  companyInfo,
  windowCleaningFaqs,
  windowCleaningHighlights,
} from "@/data/company";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { buildFAQSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

const pageDescription =
  "Window cleaning in Kansas City for homes, storefronts, and commercial buildings. Brighten your property with streak-free glass, cleaner frames, and recurring service options.";

export const metadata: Metadata = buildPageMetadata({
  title: `Window Cleaning | ${companyInfo.name}`,
  description: pageDescription,
  path: "/window-cleaning",
  image: "/images/SideBrosWebPic12.jpg",
});

export default function WindowCleaningPage() {
  return (
    <>
      <StructuredData
        id="window-cleaning-schema"
        data={[
          buildServiceSchema({
            name: "Window Cleaning",
            description: pageDescription,
            path: "/window-cleaning",
            image: "/images/SideBrosWebPic12.jpg",
          }),
          buildFAQSchema(windowCleaningFaqs),
        ]}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/60 to-white py-24 text-slate-900">
        <div className="absolute inset-0">
          <div className="absolute left-12 top-10 h-60 w-60 rounded-full bg-purple-200/40 blur-3xl" />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
              Window Cleaning
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Window Cleaning That Brightens Homes, Offices, and Storefronts
            </h1>
            <p className="text-base text-slate-600">
              Clean glass changes how a property feels. We deliver streak-free window cleaning that
              sharpens curb appeal, improves visibility, and leaves the full window area looking finished.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {windowCleaningHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="glass-panel rounded-3xl border border-purple-500/10 bg-white p-5 text-slate-700"
                >
                  <h2 className="text-lg font-semibold text-slate-900">{highlight.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-purple-400/25 shadow-[0_30px_70px_rgba(111,58,255,0.18)]">
            <Image
              src="/images/SideBrosWebPic12.jpg"
              alt="Commercial storefront exterior cleaned by Side Bros KC"
              width={1200}
              height={800}
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
              Cleaner glass without the rushed, unfinished look
            </h2>
            <p className="text-base text-slate-600">
              We focus on consistency, detail work, and service intervals that make sense for how visible
              your property is day to day.
            </p>
            <ol className="space-y-4 border-l-2 border-purple-300 pl-6 text-sm text-slate-600">
              <li>
                <strong className="block font-semibold text-slate-900">1. Scope review</strong>
                We identify access points, window count, and whether you need exterior only or full service.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">2. Glass cleaning</strong>
                We remove dirt, fingerprints, and light mineral spotting for a clearer finish.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">3. Edge detail</strong>
                Frames, sills, and tracks can be cleaned so the whole opening looks maintained.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">4. Recurring care</strong>
                We can recommend monthly, quarterly, or seasonal service based on traffic and visibility.
              </li>
            </ol>
          </div>
          <FAQAccordion items={windowCleaningFaqs} />
        </Container>
      </section>

      <CTASection
        title="Schedule window cleaning that keeps your property looking sharp"
        subtitle="Tell us if you need residential glass, storefront windows, or recurring maintenance service."
      />
    </>
  );
}
