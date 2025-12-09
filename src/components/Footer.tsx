import Link from "next/link";
import { Container } from "./Container";
import { companyInfo, navigation } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-purple-500/10 bg-white/90 text-slate-700 backdrop-blur-lg">
      <Container className="grid gap-12 py-12 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{companyInfo.name}</h2>
            <p className="mt-1 text-sm text-purple-600">{companyInfo.tagline}</p>
          </div>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900">Contact</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href={companyInfo.phoneHref} className="text-purple-600 hover:text-purple-700">
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="text-purple-600 hover:text-purple-700">
                    {companyInfo.email}
                  </a>
                </li>
                <li>{companyInfo.address}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Service Area</h3>
              <ul className="mt-2 space-y-1">
                {companyInfo.serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-600 transition hover:text-purple-600">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="text-slate-600 transition hover:text-purple-600">
              Privacy & Terms
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Follow:</span>
            <a
              href="https://www.facebook.com/profile.php?id=61558598529435"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-purple-500/20 px-3 py-1 transition hover:border-purple-500/40 hover:text-purple-700"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sidebroskc/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-purple-500/20 px-3 py-1 transition hover:border-purple-500/40 hover:text-purple-700"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. {companyInfo.licensedInsured}.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-purple-500/15 shadow-lg">
          <iframe
            title="Side Bros KC LLC on Google Maps"
            src={companyInfo.googleMapsEmbedSrc}
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </footer>
  );
}
