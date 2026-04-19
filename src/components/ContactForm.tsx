"use client";

import { type FormEvent, useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type ContactFormProps = {
  serviceOptions: string[];
};

type FormStatus = "idle" | "success" | "error";

const utmFieldNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const emptyUtmValues = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
};

export function ContactForm({ serviceOptions }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [utmValues, setUtmValues] = useState(emptyUtmValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);

    setUtmValues(
      utmFieldNames.reduce((values, fieldName) => {
        values[fieldName] = params.get(fieldName) ?? "";
        return values;
      }, { ...emptyUtmValues })
    );
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("idle");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.message ?? "We could not send your request right now.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        payload?.message ??
          "Thanks. Your request has been sent and the Bros will follow up soon."
      );

      trackEvent("generate_lead", {
        form_name: "contact_quote_request",
        lead_type: "quote_request",
      });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request right now. Please call or email us instead."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Company Website</label>
        <input
          id="company-website"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {utmFieldNames.map((fieldName) => (
        <input key={fieldName} type="hidden" name={fieldName} value={utmValues[fieldName]} readOnly />
      ))}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            placeholder="First and last name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-slate-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            placeholder="(913) 286-9119"
          />
        </div>
        <div>
          <label htmlFor="preferred-contact" className="text-sm font-semibold text-slate-900">
            Preferred Contact Method
          </label>
          <select
            id="preferred-contact"
            name="preferredContact"
            defaultValue="Call"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <option className="text-slate-900">Call</option>
            <option className="text-slate-900">Text</option>
            <option className="text-slate-900">Email</option>
          </select>
        </div>
      </div>
      <div>
        <span className="text-sm font-semibold text-slate-900">Services of Interest</span>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                name="services"
                value={service}
                className="h-4 w-4 rounded border border-slate-300 bg-white text-purple-600 focus:ring-purple-200"
              />
              {service}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-slate-900">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Tell us about the surfaces, timelines, or questions you have."
        />
      </div>
      <div>
        <label htmlFor="photos" className="text-sm font-semibold text-slate-900">
          Add Photos (optional)
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 file:mr-3 file:rounded-lg file:border-0 file:bg-purple-600 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white"
        />
        <p className="mt-1 text-xs text-slate-600">
          Accepted formats: JPG, PNG, or WebP. Up to 3 files, 5MB each.
        </p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending Request..." : "Submit Request"}
      </button>
      <p className="text-xs text-slate-600">
        By submitting this form you agree to be contacted about Side Bros KC LLC services.
      </p>
      <p
        className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}
        aria-live="polite"
      >
        {status === "idle" ? "" : message}
      </p>
    </form>
  );
}
