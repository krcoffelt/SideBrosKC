import { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { companyInfo } from "@/data/company";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Contact ${companyInfo.name}`,
  description:
    "Request a free quote from Side Bros KC LLC for power washing, concrete staining, or custom Christmas lighting across the Kansas City metro.",
  path: "/contact",
  image: "/images/SideBrosWebPic12.jpg",
});

const serviceOptions = [
  "Power Washing",
  "Gutter Cleaning",
  "Window Cleaning",
  "Fleet Washing",
  "Concrete Staining",
  "Christmas Lighting",
  "Other / Not Sure",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-24 text-slate-900">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Contact
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Get a free quote today</h1>
            <p className="text-base text-slate-600">
              Share a few details below and the Bros will reach out within one business day. Need
              faster support? Call or text us anytime.
            </p>
            <div className="grid gap-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <a href={companyInfo.phoneHref} className="mt-1 inline-flex text-purple-600">
                  {companyInfo.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="mt-1 inline-flex text-purple-600">
                  {companyInfo.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Address</p>
                <p className="mt-1 text-slate-600">{companyInfo.address}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Service Area</p>
                <p className="mt-1 text-slate-600">
                  {companyInfo.serviceAreas.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <ContactForm serviceOptions={serviceOptions} />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-700 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
            <h2 className="text-2xl font-bold text-slate-900">Visit or mail us</h2>
            <p className="mt-3 text-sm text-slate-600">
              {companyInfo.address}. We’re available for on-site consultations across the Kansas City
              metro.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Side Bros KC LLC location"
                src={companyInfo.googleMapsEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-700 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
            <h2 className="text-2xl font-bold text-slate-900">Hours & Response Times</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Monday–Saturday: 8:00 AM – 6:00 PM</li>
              <li>• Sunday: By appointment for holiday lighting installs</li>
              <li>• Emergency services available for commercial clients</li>
              <li>• Quotes delivered within one business day</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-purple-600 p-5 text-sm text-white">
              <p className="font-semibold text-white">Need immediate assistance?</p>
              <p className="mt-1 text-white/90">
                Call or text <a href={companyInfo.phoneHref} className="font-semibold underline decoration-white/40 underline-offset-2">{companyInfo.phone}</a> and we’ll
                respond as quickly as possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let’s get your project on the calendar"
        subtitle="Share your details and the Bros will prepare a tailored quote with scheduling options."
      />
    </>
  );
}
