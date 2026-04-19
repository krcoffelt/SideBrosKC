import Image from "next/image";
import type { Metadata } from "next";
import {
  companyInfo,
  fleetWashingFaqs,
  fleetWashingHighlights,
} from "@/data/company";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { buildFAQSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

const pageDescription =
  "Fleet washing in Kansas City for service vehicles, vans, pickups, and trailers. Keep your fleet clean, branded, and customer-ready with scheduled wash service.";

export const metadata: Metadata = buildPageMetadata({
  title: `Fleet Washing | ${companyInfo.name}`,
  description: pageDescription,
  path: "/fleet-washing",
  image: "/images/SideBrosWebPic11.jpg",
});

export default function FleetWashingPage() {
  return (
    <>
      <StructuredData
        id="fleet-washing-schema"
        data={[
          buildServiceSchema({
            name: "Fleet Washing",
            description: pageDescription,
            path: "/fleet-washing",
            image: "/images/SideBrosWebPic11.jpg",
          }),
          buildFAQSchema(fleetWashingFaqs),
        ]}
      />
      <section className="bg-white py-24 text-slate-900">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Fleet Washing
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Fleet Washing That Keeps Your Vehicles Customer-Ready
            </h1>
            <p className="text-base text-slate-600">
              Clean service vehicles reinforce trust before your team ever steps out of the truck. We help
              Kansas City businesses keep vans, pickups, and trailers looking sharp on the road.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {fleetWashingHighlights.map((highlight) => (
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
              src="/images/SideBrosWebPic11.jpg"
              alt="Commercial exterior cleaning project by Side Bros KC"
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
              Build a repeatable wash schedule for the vehicles that represent your business
            </h2>
            <p className="text-base text-slate-600">
              Whether you operate a small service fleet or a larger vehicle mix, we can help keep grime,
              road film, and visual wear from dragging down your brand presentation.
            </p>
            <ol className="space-y-4 border-l-2 border-slate-300 pl-6 text-sm text-slate-600">
              <li>
                <strong className="block font-semibold text-slate-900">1. Fleet review</strong>
                We look at vehicle type, service frequency, and where on-site washing fits your operation.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">2. Exterior wash plan</strong>
                We tailor the approach to the dirt load, branding needs, and wash interval.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">3. Scheduling</strong>
                Early, off-hour, and recurring service windows keep wash work from interrupting routes.
              </li>
              <li>
                <strong className="block font-semibold text-slate-900">4. Ongoing upkeep</strong>
                Regular service helps maintain a cleaner, more consistent fleet appearance over time.
              </li>
            </ol>
          </div>
          <FAQAccordion items={fleetWashingFaqs} />
        </Container>
      </section>

      <CTASection
        title="Set up fleet washing that fits your schedule"
        subtitle="Request a quote for service vehicles, work trucks, trailers, or recurring wash plans across the Kansas City metro."
      />
    </>
  );
}
