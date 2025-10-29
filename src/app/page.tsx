import Link from "next/link";
import { companyInfo } from "@/data/company";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { TrustSignals } from "@/components/TrustSignals";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

const heroBefore =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80";
const heroAfter =
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80";

const projectGallery = [
  {
    label: "Commercial storefront pressure washing",
    before:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Residential driveway restoration",
    before:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-xl space-y-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Exterior Cleaning Pros
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              The Bros Who Bring the Shine to KC.
            </h1>
            <p className="text-base text-indigo-100">
              Restore curb appeal, protect your investment, and light up every season with Side
              Bros KC LLC’s professional power washing, concrete staining, and Christmas lighting
              services.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Get a Free Quote
              </Link>
              <a
                href={companyInfo.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call {companyInfo.phone}
              </a>
            </div>
            <dl className="grid grid-cols-2 gap-4 text-sm text-indigo-100 sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-white">Founded</dt>
                <dd>{companyInfo.founded}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Service Area</dt>
                <dd>{companyInfo.serviceAreas.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Credentials</dt>
                <dd>{companyInfo.licensedInsured}</dd>
              </div>
            </dl>
          </div>
          <div className="w-full max-w-xl">
            <BeforeAfterSlider beforeSrc={heroBefore} afterSrc={heroAfter} label="Siding cleaning" />
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 px-4 py-4 text-center text-sm text-white sm:text-base">
        <p>
          Winter Special: Book Christmas lighting by October 15 and save 10% on installation.
          <Link href="/contact" className="ml-2 font-semibold underline">
            Claim Offer →
          </Link>
        </p>
      </section>

      <ServiceHighlights />
      <TrustSignals />

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr,1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Featured Results</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Before & after transformations that speak for themselves
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From commercial storefronts to suburban driveways, our crew leverages professional
              equipment, eco-friendly detergents, and meticulous prep to deliver spotless results
              every time.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Soft-wash systems to protect siding, roofing, and delicate surfaces.</li>
              <li>• Industrial-grade sealers and stains engineered for Midwest weather.</li>
              <li>• Custom holiday lighting designs with lifetime warranty components.</li>
            </ul>
          </div>
          <div className="space-y-8">
            {projectGallery.map((project) => (
              <BeforeAfterSlider
                key={project.label}
                beforeSrc={project.before}
                afterSrc={project.after}
                label={project.label}
              />
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
