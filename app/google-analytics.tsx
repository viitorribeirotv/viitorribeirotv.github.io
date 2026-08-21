"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId?: string;
};

/**
 * Records meaningful outbound clicks after the official GA4 snippet has been
 * loaded by the root layout.
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!measurementId || !measurementId.startsWith("G-")) return;

    const trackOutboundClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-analytics-link]") : null;
      if (!target || !target.href) return;

      const url = new URL(target.href);
      window.gtag?.("event", "outbound_link_click", {
        link_name: target.dataset.analyticsLink,
        link_url: target.href,
        link_domain: url.hostname,
        link_text: target.textContent?.replace(/\s+/g, " ").trim(),
        link_location: target.dataset.analyticsLocation ?? "site",
      });
    };

    document.addEventListener("click", trackOutboundClick);
    return () => {
      document.removeEventListener("click", trackOutboundClick);
    };
  }, [measurementId]);

  return null;
}
