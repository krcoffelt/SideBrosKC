import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `About ${companyInfo.name}`,
  description:
    "Learn about Side Bros KC LLC — licensed and insured exterior cleaning experts serving the Kansas City metro with power washing, concrete staining, and holiday lighting.",
};

const values = [
  {
    title: "Safety",
    description:
      "Certified technicians with OSHA-compliant practices and surface-specific cleaning methods.",
  },
  {
    title: "Quality",
    description:
      "Commercial-grade equipment, pro detergents, and meticulous prep ensure standout results.",
  },
  {
    title: "Customer Service",
    description:
      "Clear communication, punctual arrivals, and follow-up support tailored to every client.",
  },
  {
    title: "Community",
    description:
      "Proudly based in Olathe and focused on giving back to Kansas City neighborhoods.",
  },
];

const walkwaySequence = [
  {
    src: "/images/SideBrosWebPic7.webp",
    label: "Step 1",
    fileId: "SideBrosWebPic7",
    alt: "Walkway prep before cleaning",
  },
  {
    src: "/images/SideBrosWebPic4.webp",
    label: "Step 2",
    fileId: "SideBrosWebPic4",
    alt: "Walkway during power washing",
  },
  {
    src: "/images/SideBrosWebPic6.webp",
    label: "Step 3",
    fileId: "SideBrosWebPic6",
    alt: "Walkway rinse in progress",
  },
  {
    src: "/images/SideBrosWebPic8.webp",
    label: "Step 4",
    fileId: "SideBrosWebPic8",
    alt: "Walkway drying after wash",
  },
  {
    src: "/images/SideBrosWebPic3.webp",
    label: "Step 5",
    fileId: "SideBrosWebPic3",
    alt: "Clean walkway and steps",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/70 to-white py-24 text-slate-900">
        <div className="absolute inset-0">
          <div className="absolute left-12 top-10 h-72 w-72 rounded-full bg-purple-200/45 blur-3xl" />
        </div>
        <Container className="relative grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
              About Us
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Exterior cleaning pros rooted in Kansas City
            </h1>
            <p className="text-base text-slate-600">
              Established in 2022, Side Bros KC LLC is a licensed and insured exterior cleaning and
              property enhancement company serving the greater Kansas City metro. We combine small
              business care with professional-grade equipment to deliver outstanding results for
              homes and businesses.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-purple-400/30 bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Founded
                </h3>
                <p className="mt-1 text-lg font-semibold text-slate-900">{companyInfo.founded}</p>
              </div>
              <div className="rounded-3xl border border-purple-400/30 bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Licensed & Insured
                </h3>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {companyInfo.licensedInsured}
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 shadow-[0_30px_70px_rgba(111,58,255,0.18)]">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Side Bros KC team on-site"
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              Results
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Driveway revival</h2>
            <p className="text-base text-slate-600">
              A recent power-washing project transformed this driveway from grimy to clean, showing
              the kind of curb appeal boost we deliver.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl border border-purple-500/15 shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
              <div className="flex items-center justify-between bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                <span>Before</span>
                <span className="text-[10px] text-purple-500">SideBrosWebPic5</span>
              </div>
              <Image
                src="/images/SideBrosWebPic5.webp"
                alt="Driveway before cleaning"
                width={1000}
                height={1500}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-purple-500/15 shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
              <div className="flex items-center justify-between bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                <span>After</span>
                <span className="text-[10px] text-purple-500">SideBrosWebPic1</span>
              </div>
              <Image
                src="/images/SideBrosWebPic1.webp"
                alt="Driveway after cleaning"
                width={1000}
                height={1500}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-white via-purple-50/70 to-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              Commercial Clean
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Bank facade refresh</h2>
            <p className="text-base text-slate-600">
              Restored a stained commercial facade to a clean, uniform finish without disrupting business.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl border border-purple-500/15 shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
              <div className="flex items-center justify-between bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                <span>Before</span>
                <span className="text-[10px] text-purple-500">SideBrosWebPic11</span>
              </div>
              <Image
                src="/images/SideBrosWebPic11.jpg"
                alt="Commercial facade before cleaning"
                width={1200}
                height={800}
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-purple-500/15 shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
              <div className="flex items-center justify-between bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                <span>After</span>
                <span className="text-[10px] text-purple-500">SideBrosWebPic12</span>
              </div>
              <Image
                src="/images/SideBrosWebPic12.jpg"
                alt="Commercial facade after cleaning"
                width={1200}
                height={800}
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-white via-purple-50/60 to-white py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              Steps & Walkway
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Progress walkthrough</h2>
            <p className="text-base text-slate-600">
              A five-shot look at the steps and walkway cleanup — from prep to a bright, even finish.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {walkwaySequence.map((photo, index) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-3xl border border-purple-500/15 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                  <span>{photo.label}</span>
                  <span className="text-[10px] text-purple-500">{photo.fileId}</span>
                </div>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1000}
                  height={1400}
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our mission</h2>
            <p className="text-base text-slate-600">
              Deliver superior exterior cleaning, property enhancement, and holiday lighting
              solutions with a customer-first mindset. Every project is a chance to elevate curb
              appeal, protect investments, and bring more light to Kansas City neighborhoods.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass-panel rounded-3xl border border-purple-500/10 bg-white p-5 text-slate-700"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-purple-500/10 bg-white p-8 text-slate-700 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
            <h3 className="text-2xl font-bold text-slate-900">Service Area</h3>
            <p className="mt-3 text-sm text-slate-600">
              We proudly serve the Kansas City metro, Olathe, North Kansas, and surrounding
              communities.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {companyInfo.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 overflow-hidden rounded-2xl border border-purple-500/15">
              <iframe
                title="Service area map"
                src={companyInfo.googleMapsEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Meet the Bros and plan your next project"
        subtitle="Tell us about your property needs — from a single service to a seasonal maintenance plan, we’re ready to help."
      />
    </>
  );
}
