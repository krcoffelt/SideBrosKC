import Image from "next/image";
import { Metadata } from "next";
import { companyInfo, powerWashingServices, powerWashingFaqs } from "@/data/company";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { buildFAQSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

const pageDescription =
  "Residential and commercial power washing in Kansas City. Remove dirt, mildew, and buildup safely with Side Bros KC LLC.";

export const metadata: Metadata = buildPageMetadata({
  title: `Professional Power Washing | ${companyInfo.name}`,
  description: pageDescription,
  path: "/power-washing",
  image: "/images/SideBrosWebPic12.jpg",
});

const galleryImages = [
  {
    label: "Deck boards",
    before: "/images/DirtyDeck.jpg",
    after: "/images/CleanDeck.jpg",
  },
  {
    label: "Deck with grill area",
    before: "/images/DirtyDeckGrill.jpg",
    after: "/images/CleanDeckGrill.jpg",
  },
];

export default function PowerWashingPage() {
  return (
    <>
      <StructuredData
        id="power-washing-schema"
        data={[
          buildServiceSchema({
            name: "Power Washing",
            description: pageDescription,
            path: "/power-washing",
            image: "/images/SideBrosWebPic12.jpg",
          }),
          buildFAQSchema(powerWashingFaqs),
        ]}
      />
      <section className="bg-white py-24 text-slate-900">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Power Washing
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Professional Power Washing That Revives Your Property
            </h1>
            <p className="text-base text-slate-600">
              From storefronts and commercial campuses to residential driveways and decks, Side
              Bros KC LLC removes grime, mildew, and buildup with precision and care.
            </p>
            <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {powerWashingServices.map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-600" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/SideBrosWebPic12.jpg"
              alt="Commercial building exterior after Side Bros KC power washing"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Kansas City trusts Side Bros KC for spotless results
            </h2>
            <p className="text-base text-slate-600">
              Our OSHA-trained technicians leverage commercial-grade pressure and soft-wash systems
              tailored to each surface. We neutralize organic growth, rinse thoroughly, and protect
              landscaping to deliver impressive before-and-after results.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Soft-wash expertise",
                  description: "Ideal for roofs, siding, and delicate materials — no streaks, no damage.",
                },
                {
                  title: "Eco-friendly detergents",
                  description: "Biodegradable solutions keep your family, pets, and landscaping safe.",
                },
                {
                  title: "Flexible scheduling",
                  description:
                    "Early morning and off-hour appointments minimize disruption to your business.",
                },
                {
                  title: "Maintenance plans",
                  description:
                    "Keep entrances, sidewalks, and signage spotless with scheduled service.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-panel p-5 text-slate-700"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {galleryImages.map((item) => (
              <div key={item.label} className="glass-panel p-4">
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                  label={item.label}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-base text-slate-600">
            Get quick answers about pricing, safety, and scheduling for power washing projects around
            Kansas City.
          </p>
          <div className="mt-8">
            <FAQAccordion items={powerWashingFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready for spotless siding, sidewalks, and storefronts?"
        subtitle="Request your personalized power washing quote and hear back within one business day."
      />
    </>
  );
}
