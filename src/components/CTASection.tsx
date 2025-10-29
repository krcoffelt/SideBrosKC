import Link from "next/link";
import { companyInfo } from "@/data/company";
import { Container } from "./Container";
import { PhoneIcon } from "./icons";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  subtitle,
  primaryLabel = "Call Now",
  secondaryLabel = "Request a Quote",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-slate-900 to-slate-950 p-10 text-white shadow-xl">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="text-base text-indigo-100">{subtitle}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={companyInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
              >
                <PhoneIcon className="h-4 w-4" />
                {primaryLabel}: {companyInfo.phone}
              </a>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}
