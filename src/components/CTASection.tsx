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
        <div className="relative overflow-hidden rounded-[32px] bg-purple-600 p-8 text-white shadow-[0_35px_120px_rgba(111,58,255,0.22)] sm:p-10 lg:p-12">
          <div className="max-w-4xl space-y-4">
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="max-w-3xl text-base text-white/90">{subtitle}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={companyInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-600 transition hover:bg-slate-100"
                data-analytics-event="cta_phone_click"
                data-analytics-label={primaryLabel}
              >
                <PhoneIcon className="h-4 w-4" />
                {primaryLabel}: {companyInfo.phone}
              </a>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-purple-600"
                data-analytics-event="cta_quote_click"
                data-analytics-label={secondaryLabel}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
