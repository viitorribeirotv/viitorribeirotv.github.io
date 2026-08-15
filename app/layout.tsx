import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "viitorribeirotv | Gameplay, Reviews e Lives",
  description: "O universo gamer de Vitor Ribeiro: gameplays, reviews, lives e conteúdo com opinião de verdade.",
  metadataBase: new URL("https://viitorribeirotv.github.io"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "viitorribeirotv | Gameplay, Reviews e Lives",
    description: "O universo gamer de Vitor Ribeiro: gameplays, reviews, lives e conteúdo com opinião de verdade.",
    url: "https://viitorribeirotv.github.io",
    siteName: "viitorribeirotv",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "viitorribeirotv — Gameplay, Reviews e Lives" }],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
