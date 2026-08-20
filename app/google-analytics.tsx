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
 * Loads GA4 only when a measurement ID is configured and records meaningful
 * outbound clicks without changing the public interface.
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!measurementId || !measurementId.startsWith("G-")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });

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
      script.remove();
    };
  }, [measurementId]);

  return null;
}
