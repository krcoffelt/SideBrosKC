declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackPageView(url: string) {
  if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", measurementId, {
    page_path: url,
  });
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}
