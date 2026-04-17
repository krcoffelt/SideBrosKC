import Link from "next/link";
import { Container } from "./Container";
import { companyInfo, getLocationPath, locationPages, navigation } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">{companyInfo.name}</h2>
            <p className="mt-2 text-sm text-white/78">{companyInfo.tagline}</p>
          </div>
          <div className="grid gap-8 text-sm sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-white">Contact</h3>
              <ul className="mt-3 space-y-2 text-white/78">
                <li>
                  <a href={companyInfo.phoneHref} className="text-white transition hover:text-white/70">
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="text-white transition hover:text-white/70">
                    {companyInfo.email}
                  </a>
                </li>
                <li className="text-white/70">{companyInfo.address}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Service Area</h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-white/78">
                {locationPages.map((area) => (
                  <li key={area.slug}>
                    <Link href={getLocationPath(area.slug)} className="transition hover:text-white">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/76">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="transition hover:text-white">
              Privacy & Terms
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/78">
            <span className="font-semibold text-white">Follow:</span>
            <a
              href="https://www.facebook.com/profile.php?id=61558598529435"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-500"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sidebroskc/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-500"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. {companyInfo.licensedInsured}.
          </p>
          <p className="text-xs text-white/60">
            Website by{" "}
            <a
              href="https://hometownkc.agency"
              target="_blank"
              rel="noreferrer"
              className="text-white transition hover:text-white/70"
            >
              Hometown Marketing Agency
            </a>
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
          <iframe
            title="Side Bros KC LLC on Google Maps"
            src={companyInfo.googleMapsEmbedSrc}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </footer>
  );
}
