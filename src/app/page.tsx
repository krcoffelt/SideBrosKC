import Link from "next/link";
import { companyInfo } from "@/data/company";
import { Container } from "@/components/Container";
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
      "https://images.unsplash.com/photo-1505692794403-55b39ed0b28f?auto=format&fit=crop&w=1400&q=80",
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
      <section className="relative py-20">
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr,1fr]">
          <div className="glass-panel card-gradient relative overflow-hidden p-10">
            <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
            <div className="absolute -bottom-36 right-0 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <span className="stat-chip">Trusted KC Pros</span>
                <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-white px-4 py-2 text-xs font-semibold text-purple-600 shadow-sm">
                  ★★★★★ <span className="text-slate-500">5.0 Google Rating</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                The Bros Who Bring the Shine to KC.
              </h1>
              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                Your go-to crew for professional power washing, concrete staining, gutter cleaning,
                and custom Christmas lighting. Licensed, insured, and obsessed with dialed-in
                details that make your property stand out.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="accent-button text-white hover:opacity-90">
                  Get a Free Quote
                </Link>
                <a href={companyInfo.phoneHref} className="secondary-button">
                  Call {companyInfo.phone}
                </a>
              </div>
              <div className="grid gap-4 border-t border-purple-500/10 pt-6 text-sm text-slate-600 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-bold text-slate-900">4500+</p>
                  <p className="text-xs uppercase tracking-widest text-purple-600/80">
                    Surfaces Restored
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">2500+</p>
                  <p className="text-xs uppercase tracking-widest text-purple-600/80">
                    Kansas City Clients
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="text-xs uppercase tracking-widest text-purple-600/80">
                    Licensed & Insured
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden p-4">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-100/50 via-transparent to-white" />
            <BeforeAfterSlider beforeSrc={heroBefore} afterSrc={heroAfter} label="Siding cleaning" />
          </div>
        </Container>
      </section>

      <section className="px-4 pb-12">
        <Container>
          <div className="glass-panel flex flex-col items-center justify-between gap-4 rounded-3xl border border-purple-500/15 bg-purple-50 px-6 py-5 text-sm text-slate-700 shadow-[0_25px_60px_rgba(111,58,255,0.18)] md:flex-row md:text-base">
            <div className="font-semibold uppercase tracking-[0.3em] text-purple-600">
              Seasonal Offer
            </div>
            <p className="text-center text-slate-600 md:text-left">
              Save 10% on Christmas lighting installations when you reserve by October 15.
            </p>
            <Link
              href="/contact"
              className="rounded-2xl border border-purple-400/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-purple-600 transition hover:bg-purple-100"
            >
              Claim Offer →
            </Link>
          </div>
        </Container>
      </section>

      <ServiceHighlights />
      <TrustSignals />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr,1fr]">
          <div className="space-y-5">
            <span className="stat-chip">Featured Results</span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Before & after transformations that speak for themselves
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              From commercial storefronts to suburban driveways, our crew leverages professional
              equipment, eco-friendly detergents, and meticulous prep to deliver spotless results
              every time.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Soft-wash systems to protect siding, roofing, and delicate surfaces.</li>
              <li>• Industrial-grade sealers and stains engineered for Midwest weather.</li>
              <li>• Custom holiday lighting designs with lifetime warranty components.</li>
            </ul>
          </div>
          <div className="space-y-6">
            {projectGallery.map((project) => (
              <div key={project.label} className="glass-panel p-4">
                <BeforeAfterSlider
                  beforeSrc={project.before}
                  afterSrc={project.after}
                  label={project.label}
                />
              </div>
            ))}
          </div>
        </Container>
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
