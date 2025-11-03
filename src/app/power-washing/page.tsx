import Image from "next/image";
import { Metadata } from "next";
import { companyInfo, powerWashingServices, powerWashingFaqs } from "@/data/company";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: `Professional Power Washing | ${companyInfo.name}`,
  description:
    "Residential and commercial power washing in Kansas City. Remove dirt, mildew, and buildup safely with Side Bros KC LLC.",
};

const galleryImages = [
  {
    label: "Restaurant patio refresh",
    before:
      "https://images.unsplash.com/photo-1505692794403-55b39ed0b28f?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1529429617124-aee305f0c42f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Roof soft wash",
    before:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1505691723518-a56c1f71a1f7?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function PowerWashingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/60 to-white py-24 text-slate-900">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
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
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-purple-400/25 shadow-[0_30px_70px_rgba(111,58,255,0.18)]">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Side Bros KC performing power washing on a building facade"
              width={900}
              height={600}
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
                  className="glass-panel rounded-3xl border border-purple-500/10 bg-white p-5 text-slate-700"
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
