import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { LocalBusinessSchema } from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Tankless Water Heater Repair in Colorado Springs",
    template: "%s",
  },
  description:
    "Expert tankless water heater repair, installation, and descaling in Colorado Springs, CO. Navien, Rinnai, Noritz certified specialists. Call (719) 602-1977 for immediate dispatch.",
  keywords: [
    "tankless water heater repair colorado springs",
    "emergency tankless water heater repair colorado springs",
    "navien tankless repair colorado springs",
    "rinnai tankless repair colorado springs",
    "tankless water heater installation colorado springs",
    "tankless descaling colorado springs",
    "tankless repair monument co",
    "tankless repair fountain co",
  ],
  authors: [{ name: "Colorado Springs Tankless Technical Specialists" }],
  creator: "Tankless Water Heater Repair in Colorado Springs",
  publisher: "Tankless Water Heater Repair in Colorado Springs",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.siteUrl,
    title: "Tankless Water Heater Repair in Colorado Springs, CO",
    description:
      "Fast, local tankless water heater diagnostics and repair across Colorado Springs, Monument, Fountain, Manitou Springs, Woodland Park, and Falcon.",
    siteName: SITE_CONFIG.brandName,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "vgAI8qUWXDKPRMUykke8idiUWf4ybdLA5l-Qz80QvpM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="vgAI8qUWXDKPRMUykke8idiUWf4ybdLA5l-Qz80QvpM" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
