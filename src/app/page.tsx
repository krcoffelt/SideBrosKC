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
    badge: "Before",
    src: "/images/SideBrosWebPic5.webp",
    alt: "Driveway before cleaning",
    caption: "Driveway prep with detergents activating on the surface.",
  },
  {
    badge: "After",
    src: "/images/SideBrosWebPic1.webp",
    alt: "Driveway after cleaning",
    caption: "Clean, even finish after a full power wash and rinse.",
  },
  {
    badge: "Walkway",
    src: "/images/SideBrosWebPic3.webp",
    alt: "Steps and walkway after cleaning",
    caption: "Steps and walkway brightened with a safe wash sequence.",
  },
  {
    badge: "Commercial Before",
    src: "/images/SideBrosWebPic11.jpg",
    alt: "Commercial facade before cleaning",
    caption: "Stained bank exterior prior to soft washing.",
  },
  {
    badge: "Commercial After",
    src: "/images/SideBrosWebPic12.jpg",
    alt: "Commercial facade after cleaning",
    caption: "Facade restored to a uniform, clean finish post-wash.",
  },
  {
    badge: "Staining",
    src: "/images/2025-04-08.webp",
    alt: "Concrete staining project with a clean finish",
    caption: "Concrete staining with crisp lines and uniform color.",
  },
  {
    badge: "Patio Before",
    src: "/images/2025-04-08%20(2).webp",
    alt: "Backyard patio before cleaning",
    caption: "Backyard patio prior to wash and refresh.",
  },
  {
    badge: "Patio After",
    src: "/images/2025-04-08%20(3).webp",
    alt: "Backyard patio after cleaning",
    caption: "Same patio after a thorough cleaning and rinse.",
  },
  {
    badge: "Wall Wash",
    src: "/images/2025-04-08%20(1).webp",
    alt: "Power washing a concrete retaining wall",
    caption: "Retaining wall cleaned with controlled pressure for even results.",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,58,255,0.28),transparent_32%),linear-gradient(180deg,rgba(11,16,33,0.08),rgba(11,16,33,0.24))]" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100svh-88px)] max-w-[1440px] items-end gap-10 px-4 pb-10 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-16">
          <div className="max-w-2xl space-y-7 text-white">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.42em] text-purple-200">
              Side Bros KC LLC
            </p>
            <div className="space-y-4">
              <p className="reveal-up reveal-delay-1 max-w-sm text-sm font-medium uppercase tracking-[0.24em] text-white/70">
                Power washing, gutter cleaning, window cleaning, fleet washing, concrete staining,
                and holiday lighting.
              </p>
              <h1 className="reveal-up reveal-delay-2 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                The clean look Kansas City notices from the curb.
              </h1>
            </div>
            <p className="reveal-up reveal-delay-3 max-w-lg text-base leading-8 text-white/78 sm:text-lg">
              Fast quotes, sharp finishes, and crews that know how to make homes, storefronts, and
              service fleets look dialed in without the guesswork.
            </p>
            <div className="reveal-up reveal-delay-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="accent-button min-w-[220px] text-white hover:opacity-90"
                data-analytics-event="home_hero_quote_click"
                data-analytics-label="Home hero quote"
              >
                Get a Free Quote
              </Link>
              <a
                href={companyInfo.phoneHref}
                className="secondary-button min-w-[220px] border-white/30 bg-white/10 text-white backdrop-blur-sm"
              >
                Call {companyInfo.phone}
              </a>
            </div>
            <div className="reveal-up reveal-delay-5 grid max-w-xl gap-4 border-t border-white/15 pt-6 text-white/74 sm:grid-cols-3">
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
          <div className="hero-image-shell reveal-up reveal-delay-4 grid gap-4 self-end lg:justify-self-end">
            <div className="overflow-hidden rounded-[30px] border border-white/15 bg-white/8 p-3 shadow-[0_40px_90px_rgba(5,10,25,0.32)] backdrop-blur-sm">
              <Image
                src="/images/SideBrosWebPic5.webp"
                alt="Driveway before cleaning"
                width={700}
                height={880}
                sizes="(min-width: 1024px) 28vw, 86vw"
                className="h-[340px] w-full rounded-[22px] object-cover sm:h-[460px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {heroImages.slice(1).map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-[24px] border border-white/15 bg-white/10 p-2 shadow-[0_26px_60px_rgba(5,10,25,0.24)] backdrop-blur-sm"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={420}
                    height={420}
                    sizes="(min-width: 1024px) 14vw, 42vw"
                    className="h-32 w-full rounded-[18px] object-cover sm:h-40"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-[auto,1fr,auto] sm:items-center sm:px-6 lg:px-8">
          <div className="rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-white">
            Seasonal Offer
          </div>
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            Save 10% on Christmas lighting installations when you reserve by October 15.
          </p>
          <div>
            <Link
              href="/contact"
              className="rounded-full bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              data-analytics-event="seasonal_offer_click"
              data-analytics-label="Seasonal offer claim"
            >
              Claim Offer →
            </Link>
          </div>
        </div>
      </section>

      <ServiceHighlights />
      <TrustSignals />

      <section className="bg-white py-18 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              Featured Results
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Before, after, and everything people notice in between.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              From commercial storefronts to patios and entry walks, the work is built around clean
              edges, balanced finish, and surfaces that read better from the street.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>Soft-wash methods that protect siding, roofing, and painted finishes.</li>
              <li>Concrete staining and sealing built for Midwest weather and heavy use.</li>
              <li>
                Recurring window, gutter, and fleet washing support for high-visibility properties.
              </li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredTransformations.map((image, index) => (
              <figure key={image.src} className={index === 0 ? "sm:col-span-2" : ""}>
                <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <div className="mb-3 flex items-center justify-between gap-3 px-2">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                      {image.badge}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      KC Project
                    </span>
                  </div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={index === 0 ? 620 : 600}
                    sizes={
                      index === 0 ? "(min-width: 640px) 52vw, 100vw" : "(min-width: 640px) 26vw, 100vw"
                    }
                    className={`w-full rounded-[22px] object-cover transition duration-700 group-hover:scale-[1.02] ${
                      index === 0 ? "h-80 sm:h-[26rem]" : "h-60"
                    }`}
                  />
                  <figcaption className="px-2 pb-2 pt-4 text-sm leading-7 text-slate-600">
                    {image.caption}
                  </figcaption>
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
