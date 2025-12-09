import { Metadata } from "next";
import { Container } from "@/components/Container";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `Privacy Policy & Terms | ${companyInfo.name}`,
  description:
    "Understand how Side Bros KC LLC handles your information, website data, and service terms for exterior cleaning projects.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 text-slate-800">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
            Privacy & Terms
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our commitment to your privacy and fair service
          </h1>
          <p className="text-base text-slate-600">
            We protect your information and set clear expectations for every project. If you have
            questions, contact us anytime.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-purple-500/10 bg-purple-50/40 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Privacy Policy</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              <li>
                <strong className="text-slate-900">Information we collect:</strong> Contact details
                you submit (name, phone, email, address, photos) to provide quotes and services.
              </li>
              <li>
                <strong className="text-slate-900">How we use it:</strong> To respond to inquiries,
                schedule work, send estimates/invoices, and communicate project updates.
              </li>
              <li>
                <strong className="text-slate-900">Sharing:</strong> We do not sell your data. We
                only share with service tools needed to operate our business (e.g., scheduling,
                invoicing) under confidentiality.
              </li>
              <li>
                <strong className="text-slate-900">Cookies & analytics:</strong> Basic site
                analytics may use cookies to improve performance; you can disable cookies in your
                browser.
              </li>
              <li>
                <strong className="text-slate-900">Data security:</strong> We use reasonable
                safeguards to protect your information and limit access to authorized team members.
              </li>
              <li>
                <strong className="text-slate-900">Your choices:</strong> Request access, updates,
                or deletion of your info at any time by contacting us.
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-purple-500/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Terms of Service</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              <li>
                <strong className="text-slate-900">Estimates & scheduling:</strong> Quotes are based
                on provided details and subject to site conditions. Scheduling may adjust for
                weather or safety.
              </li>
              <li>
                <strong className="text-slate-900">Site readiness:</strong> Please clear vehicles,
                furniture, and personal items from work areas; we are not responsible for unremoved
                items.
              </li>
              <li>
                <strong className="text-slate-900">Payment:</strong> Due as stated on estimates or
                invoices. Late or unpaid balances may pause future work.
              </li>
              <li>
                <strong className="text-slate-900">Cancellations:</strong> Notify us 24 hours in
                advance to avoid fees for mobilization or rescheduling.
              </li>
              <li>
                <strong className="text-slate-900">Liability:</strong> We are licensed and insured,
                but not liable for pre-existing damage, hidden defects, or issues outside our
                control (e.g., failing substrates, loose wiring).
              </li>
              <li>
                <strong className="text-slate-900">Photos:</strong> We may document projects for
                quality and portfolio use; tell us if you prefer we do not share your project
                publicly.
              </li>
              <li>
                <strong className="text-slate-900">Updates:</strong> We may revise these terms and
                will post the latest version here with an updated effective date.
              </li>
            </ul>
          </article>
        </div>

        <div className="rounded-3xl border border-purple-500/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-3 text-sm text-slate-700">
            For privacy or terms questions, reach out to us:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <strong className="text-slate-900">Phone:</strong>{" "}
              <a href={companyInfo.phoneHref} className="text-purple-600 hover:text-purple-700">
                {companyInfo.phone}
              </a>
            </li>
            <li>
              <strong className="text-slate-900">Email:</strong>{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-purple-600 hover:text-purple-700">
                {companyInfo.email}
              </a>
            </li>
            <li>
              <strong className="text-slate-900">Address:</strong> {companyInfo.address}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
