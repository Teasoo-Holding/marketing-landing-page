import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/index.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ESG Horizon — Africa's #1 IFRS-Ready ESG Reporting Platform",
    template: "%s | ESG Horizon",
  },
  description:
    "Cut ESG reporting time by up to 60%. Automate IFRS S1 & S2 disclosures, GHG calculations, and audit-ready reports — built for African regulatory realities.",
  keywords: [
    "ESG reporting",
    "IFRS S1",
    "IFRS S2",
    "GHG Protocol",
    "sustainability reporting",
    "ESG platform Africa",
    "ESG compliance",
    "carbon accounting",
    "ESG disclosure",
    "Nigeria ESG",
  ],
  authors: [{ name: "ESG Horizon" }],
  metadataBase: new URL("https://esghorizon.africa"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ESG Horizon",
    title: "ESG Horizon — Africa's #1 IFRS-Ready ESG Reporting Platform",
    description:
      "Automate disclosures, reduce compliance risk, and gain a single source of truth for ESG data. IFRS S1 & S2 aligned, GHG Protocol compliant, audit-ready.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ESG Horizon — Automated ESG Reporting for Africa",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@esghorizon",
    title: "ESG Horizon — Africa's #1 IFRS-Ready ESG Reporting Platform",
    description:
      "Cut ESG reporting time by up to 60%. Automate IFRS S1 & S2 disclosures, GHG calculations, and audit-ready reports.",
    images: [
      {
        url: "/og-image.png",
        alt: "ESG Horizon — Automated ESG Reporting for Africa",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#109b95",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ESG Horizon",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Africa's IFRS-ready ESG reporting platform. Automate disclosures, GHG calculations, and audit-ready reports.",
  url: "https://esghorizon.africa",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Custom pricing — book a demo for a personalised plan",
  },
  provider: {
    "@type": "Organization",
    name: "ESG Horizon",
    url: "https://esghorizon.africa",
    logo: "https://esghorizon.africa/logo.png",
    sameAs: [],
  },
  featureList: [
    "IFRS S1 & S2 Compliance Engine",
    "Automated GHG Scope 1, 2 & 3 Calculations",
    "Audit-Ready Report Generation",
    "Role-Based Team Collaboration",
    "Executive ESG Dashboards",
    "Multi-Entity & Subsidiary Support",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
