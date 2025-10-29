import { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `Contact ${companyInfo.name}`,
  description:
    "Request a free quote from Side Bros KC LLC for power washing, concrete staining, or custom Christmas lighting across the Kansas City metro.",
};

const serviceOptions = [
  "Power Washing",
  "Concrete Staining",
  "Christmas Lighting",
  "Window Cleaning",
  "Gutter Cleaning",
  "Other / Not Sure",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0a20] via-[#090515] to-black py-24 text-white">
        <Container className="grid gap-12 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
              Contact
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Get a free quote today</h1>
            <p className="text-base text-purple-100/85">
              Share a few details below and the Bros will reach out within one business day. Need
              faster support? Call or text us anytime.
            </p>
            <div className="grid gap-4 text-sm text-purple-100/80">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href={companyInfo.phoneHref} className="mt-1 inline-flex text-purple-200">
                  {companyInfo.phone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="mt-1 inline-flex text-purple-200">
                  {companyInfo.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="mt-1 text-purple-200">{companyInfo.address}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Service Area</p>
                <p className="mt-1 text-purple-200">
                  {companyInfo.serviceAreas.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <form
            className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur"
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-white">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-purple-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="First and last name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-purple-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-purple-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="(913) 286-9119"
                />
              </div>
              <div>
                <label htmlFor="preferred-contact" className="text-sm font-semibold text-white">
                  Preferred Contact Method
                </label>
                <select
                  id="preferred-contact"
                  name="preferredContact"
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <option className="text-slate-900">Call</option>
                  <option className="text-slate-900">Text</option>
                  <option className="text-slate-900">Email</option>
                </select>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-white">Services of Interest</span>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center gap-2 text-sm text-purple-100">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      className="h-4 w-4 rounded border border-white/30 bg-white/10 text-purple-400 focus:ring-white"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-white">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-purple-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Tell us about the surfaces, timelines, or questions you have."
              />
            </div>
            <div>
              <label htmlFor="photos" className="text-sm font-semibold text-white">
                Add Photos (optional)
              </label>
              <input
                id="photos"
                name="photos"
                type="file"
                multiple
                className="mt-2 w-full rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60 file:mr-3 file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-2 file:text-sm file:font-semibold file:text-purple-700"
              />
              <p className="mt-1 text-xs text-purple-200">Accepted formats: JPG, PNG. Max 10MB.</p>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-100"
            >
              Submit Request
            </button>
            <p className="text-xs text-purple-200">
              By submitting this form you agree to be contacted about Side Bros KC LLC services.
            </p>
          </form>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <h2 className="text-2xl font-bold">Visit or mail us</h2>
            <p className="mt-3 text-sm text-slate-200/80">
              {companyInfo.address}. We’re available for on-site consultations across the Kansas City
              metro.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Side Bros KC LLC location"
                src={companyInfo.googleMapsEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <h2 className="text-2xl font-bold">Hours & Response Times</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200/80">
              <li>• Monday–Saturday: 8:00 AM – 6:00 PM</li>
              <li>• Sunday: By appointment for holiday lighting installs</li>
              <li>• Emergency services available for commercial clients</li>
              <li>• Quotes delivered within one business day</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-purple-500/10 p-5 text-sm text-slate-100">
              <p className="font-semibold text-purple-200">Need immediate assistance?</p>
              <p className="mt-1">
                Call or text <a href={companyInfo.phoneHref}>{companyInfo.phone}</a> and we’ll
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
