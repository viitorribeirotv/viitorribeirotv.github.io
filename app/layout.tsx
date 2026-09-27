import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "./google-analytics";
import "./globals.css";

const googleAnalyticsMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleAnalyticsEnabled = /^G-[A-Z0-9]+$/.test(googleAnalyticsMeasurementId ?? "");

const googleAnalyticsSnippet = googleAnalyticsEnabled
  ? `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsMeasurementId}', { anonymize_ip: true });
    `
  : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "viitorribeirotv",
  description: "O universo gamer de Vitor Ribeiro: gameplays, reviews, lives e conteúdo com opinião de verdade.",
  metadataBase: new URL("https://viitorribeirotv.github.io"),
  icons: {
    icon: [
      { url: "/favicon-tv-v2.ico", sizes: "16x16 32x32 48x48 64x64 128x128 256x256" },
      { url: "/favicon-tv-v2.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon-tv-v2.ico",
    apple: [{ url: "/apple-touch-icon-tv-v2.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "viitorribeirotv | Gameplay, Reviews e Lives",
    description: "O universo gamer de Vitor Ribeiro: gameplays, reviews, lives e conteúdo com opinião de verdade.",
    url: "https://viitorribeirotv.github.io",
    siteName: "viitorribeirotv",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vitor Ribeiro — viitorribeirotv, Gameplay, Reviews e Lives" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "viitorribeirotv | Gameplay, Reviews e Lives",
    description: "Gameplay, reviews e lives com opinião de verdade.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {googleAnalyticsEnabled && (
        <head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`} />
          <script dangerouslySetInnerHTML={{ __html: googleAnalyticsSnippet }} />
        </head>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics measurementId={googleAnalyticsMeasurementId} />
      </body>
    </html>
  );
}
