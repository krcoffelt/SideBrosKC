import Link from "next/link";
import { Container } from "./Container";
import { companyInfo, navigation } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/70 text-slate-200 backdrop-blur-xl">
      <Container className="grid gap-12 py-12 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">{companyInfo.name}</h2>
            <p className="mt-1 text-sm text-purple-200">{companyInfo.tagline}</p>
          </div>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-white">Contact</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href={companyInfo.phoneHref} className="hover:text-purple-200">
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-purple-200">
                    {companyInfo.email}
                  </a>
                </li>
                <li>{companyInfo.address}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Service Area</h3>
              <ul className="mt-2 space-y-1">
                {companyInfo.serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-indigo-300">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. {companyInfo.licensedInsured}.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
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
