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
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-purple-500/15 bg-gradient-to-br from-white via-purple-50/70 to-white p-12 text-slate-800 shadow-[0_35px_120px_rgba(111,58,255,0.18)]">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
            <p className="text-base text-slate-600">{subtitle}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={companyInfo.phoneHref}
                className="accent-button hover:opacity-90"
              >
                <PhoneIcon className="h-4 w-4" />
                {primaryLabel}: {companyInfo.phone}
              </a>
              <Link
                href={secondaryHref}
                className="secondary-button"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-purple-100/70 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}
