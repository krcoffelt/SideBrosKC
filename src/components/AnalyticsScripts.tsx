"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { companyInfo } from "@/data/company";
import { measurementId, trackEvent, trackPageView } from "@/lib/analytics";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

function ClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) {
        return;
      }

      const trackedTarget = target.closest<HTMLElement>("[data-analytics-event]");
      if (trackedTarget?.dataset.analyticsEvent) {
        trackEvent(trackedTarget.dataset.analyticsEvent, {
          link_text:
            trackedTarget.dataset.analyticsLabel ?? trackedTarget.textContent?.trim() ?? "unknown",
          link_url:
            trackedTarget instanceof HTMLAnchorElement
              ? trackedTarget.href
              : trackedTarget.getAttribute("href") ?? "",
        });
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) {
        return;
      }

      if (anchor.href.startsWith("tel:")) {
        trackEvent("phone_click", {
          link_text: anchor.textContent?.trim() ?? companyInfo.phone,
          link_url: anchor.href,
        });
      }

      if (anchor.href.startsWith("mailto:")) {
        trackEvent("email_click", {
          link_text: anchor.textContent?.trim() ?? companyInfo.email,
          link_url: anchor.href,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export function AnalyticsScripts() {
  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <PageViewTracker />
      <ClickTracker />
    </>
  );
}
