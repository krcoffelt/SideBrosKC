import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { TrustSignals } from "@/components/TrustSignals";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `${companyInfo.name} | ${companyInfo.tagline}`,
  description:
    "Side Bros KC LLC delivers professional power washing, gutter cleaning, window cleaning, fleet washing, concrete staining, and Christmas lighting across the Kansas City metro. Get your free quote today.",
  path: "/",
  image: "/images/SideBrosWebPic12.jpg",
});

const heroImages = [
  {
    src: "/images/SideBrosWebPic1.webp",
    alt: "Driveway after cleaning",
  },
  {
    src: "/images/SideBrosWebPic12.jpg",
    alt: "Commercial facade after cleaning",
  },
  {
    src: "/images/2025-04-08.webp",
    alt: "Concrete staining project with a clean finish",
  },
];

const featuredTransformations = [
  {
    badge: "Power Washing",
    src: "/images/SideBrosWebPic1.webp",
    alt: "Driveway after cleaning",
  },
  {
    badge: "Entry Walk",
    src: "/images/SideBrosWebPic3.webp",
    alt: "Steps and walkway after cleaning",
  },
  {
    badge: "Commercial",
    src: "/images/SideBrosWebPic12.jpg",
    alt: "Commercial facade after cleaning",
  },
  {
    badge: "Staining",
    src: "/images/2025-04-08.webp",
    alt: "Concrete staining project with a clean finish",
  },
  {
    badge: "Patio",
    src: "/images/2025-04-08%20(3).webp",
    alt: "Backyard patio after cleaning",
  },
  {
    badge: "Concrete",
    src: "/images/2025-04-08%20(1).webp",
    alt: "Power washing a concrete retaining wall",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,12,28,0.86)_0%,rgba(7,12,28,0.74)_34%,rgba(7,12,28,0.46)_60%,rgba(7,12,28,0.28)_100%),radial-gradient(circle_at_top_right,rgba(111,58,255,0.3),transparent_34%),linear-gradient(180deg,rgba(11,16,33,0.18),rgba(11,16,33,0.34))]" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100svh-88px)] max-w-[1440px] items-end px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8 lg:pb-16">
          <div className="max-w-3xl space-y-7 text-white">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.42em] text-white/88">
              Side Bros KC LLC
            </p>
            <h1 className="reveal-up reveal-delay-2 max-w-[16ch] text-3xl font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              The clean finish
              <br />
              Kansas City notices.
            </h1>
            <p className="reveal-up reveal-delay-3 max-w-xl text-[15px] leading-7 text-white/90 sm:text-lg sm:leading-8">
              Fast quotes, sharp finishes, and crews that know how to make homes, storefronts, and
              service fleets look dialed in without the guesswork.
            </p>
            <div className="reveal-up reveal-delay-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="accent-button w-full text-white hover:opacity-90 sm:min-w-[220px] sm:w-auto"
                data-analytics-event="home_hero_quote_click"
                data-analytics-label="Home hero quote"
              >
                Get a Free Quote
              </Link>
              <a
                href={companyInfo.phoneHref}
                className="secondary-button w-full border-white/50 bg-slate-950/30 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-slate-950 sm:min-w-[220px] sm:w-auto"
              >
                Call {companyInfo.phone}
              </a>
            </div>
            <div className="reveal-up reveal-delay-5 grid max-w-2xl gap-4 border-t border-white/25 pt-6 text-white/86 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-white">120+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em]">Surfaces restored</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">80+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em]">KC clients served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em]">Licensed and insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-[28px] bg-purple-600 px-5 py-5 text-white shadow-[0_24px_60px_rgba(91,47,224,0.18)] sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/78">
                Seasonal Offer
              </p>
              <p className="max-w-2xl text-base font-semibold leading-7 text-white sm:text-lg">
                Book by October 15 and save 10% on Christmas lighting installation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-purple-600 transition hover:bg-slate-100 sm:w-auto"
              data-analytics-event="seasonal_offer_click"
              data-analytics-label="Seasonal offer claim"
            >
              Claim Offer
            </Link>
          </div>
        </div>
      </section>

      <ServiceHighlights />
      <TrustSignals />

      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr,1.18fr] lg:gap-12 lg:px-8">
          <div className="space-y-5 lg:pr-10">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A cleaner, quieter way to show the finished work.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              These are the kinds of results people remember: sharper curb appeal, cleaner
              storefront presence, and surfaces that feel maintained the moment you pull up.
            </p>
            <p className="text-sm font-medium text-slate-500">
              Residential and commercial projects across the Kansas City metro.
            </p>
          </div>
          <div className="grid auto-rows-[200px] gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:auto-rows-[240px]">
            {featuredTransformations.map((image, index) => (
              <figure
                key={image.src}
                className={
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : index === 3
                      ? "sm:row-span-2"
                      : ""
                }
              >
                <div className="group relative h-full overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={900}
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 46vw, 100vw"
                        : index === 3
                          ? "(min-width: 1024px) 22vw, 100vw"
                          : "(min-width: 640px) 26vw, 100vw"
                    }
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm">
                      {image.badge}
                    </span>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />

      <CTASection
        title="Ready to bring the shine back to your property?"
        subtitle="Request your free quote today and we’ll respond within one business day with tailored recommendations for your home or business."
      />
    </>
  );
}
