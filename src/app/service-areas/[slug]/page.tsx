import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import {
  companyInfo,
  getLocationBySlug,
  getLocationPath,
  locationPages,
  serviceHighlights,
} from "@/data/company";
import { buildFAQSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  return buildPageMetadata({
    title: `${location.heading} | ${companyInfo.name}`,
    description: location.metaDescription,
    path: getLocationPath(location.slug),
    image: location.image,
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const nearbyLocations = location.nearby
    .map((nearbyName) => locationPages.find((entry) => entry.name === nearbyName))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const faqItems = [
    {
      question: `What exterior cleaning services do you offer in ${location.name}?`,
      answer: `We provide power washing, gutter cleaning, window cleaning, fleet washing, concrete staining, and Christmas lighting in ${location.name}. We tailor the service mix around the property type, the buildup on site, and how visible the exterior is to customers, neighbors, or tenants.`,
    },
    {
      question: `How quickly can I get a quote in ${location.name}?`,
      answer: `Most quote requests for ${location.name} receive a response within one business day. If the property needs special access planning or a larger commercial scope, we can schedule a walkthrough and tighten up the estimate from there.`,
    },
    {
      question: `Do you also serve areas near ${location.name}?`,
      answer: `Yes. In addition to ${location.name}, we regularly work in ${location.nearby.join(", ")} and elsewhere across the Kansas City metro.`,
    },
  ];

  return (
    <>
      <StructuredData
        id={`location-${location.slug}-schema`}
        data={[
          buildServiceSchema({
            name: `Exterior Cleaning in ${location.name}`,
            description: location.metaDescription,
            path: getLocationPath(location.slug),
            image: location.image,
          }),
          buildFAQSchema(faqItems),
        ]}
      />

      <section className="bg-white py-24 text-slate-900">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Service Area
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              {location.heading}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Side Bros KC works on {location.propertyMix} in {location.name}. We build service
              plans around {location.commonNeeds}, with clean execution, fast communication, and
              work that improves how the property reads from the street.
            </p>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Whether you need a one-time cleanup or a recurring schedule, we keep the scope clear
              and the result sharp. That includes residential wash work, storefront maintenance,
              gutter service, window cleaning, fleet washing, decorative concrete upgrades, and
              seasonal lighting support.
            </p>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image
              src={location.image}
              alt={`${location.name} exterior cleaning by Side Bros KC`}
              width={1200}
              height={900}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Services available in {location.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These are the services most often requested in {location.name}. Each page covers the
              process, scope, and project fit in more detail.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why property owners in {location.name} call Side Bros KC
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>We adapt the cleaning method to the material instead of forcing one approach on every surface.</li>
              <li>We know how Midwest weather affects siding, concrete, glass, gutters, and painted finishes.</li>
              <li>We keep quotes, scheduling, and scope straightforward so projects move without guesswork.</li>
              <li>We also cover nearby areas like {location.nearby.join(", ")}, so recurring service is easy to manage.</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-purple-600 p-8 text-white shadow-[0_24px_60px_rgba(111,58,255,0.18)]">
            <h2 className="text-3xl font-bold sm:text-4xl">Nearby areas we cover</h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              If your property is near {location.name}, there is a good chance we already service
              your area. Use these local pages to find the closest fit.
            </p>
            <div className="mt-8 grid gap-3">
              {nearbyLocations.map((nearby) => (
                <a
                  key={nearby.slug}
                  href={getLocationPath(nearby.slug)}
                  className="rounded-2xl border border-white/20 px-5 py-4 text-sm font-semibold transition hover:bg-white hover:text-purple-600"
                >
                  {nearby.heading}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently asked questions about service in {location.name}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            These answers cover the most common questions we hear from customers in {location.name}
            and surrounding parts of the Kansas City metro.
          </p>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Need exterior cleaning in ${location.name}?`}
        subtitle={`Request a quote for ${location.name} and Side Bros KC will follow up with scheduling options, service recommendations, and next steps.`}
      />
    </>
  );
}
