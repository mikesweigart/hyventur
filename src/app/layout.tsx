import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/site/chat-widget";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  title: {
    default: "Hyventur — Modern Payments for Collections & Receivables",
    template: "%s · Hyventur",
  },
  description:
    "Hyventur is the modern payment platform built for collections and accounts receivable. Consumer portal, IVR, Text2Pay, payment plans, settlements, and reporting — PCI Level 1 secure, FDCPA / Reg F-aware. Recover more, with less friction.",
  keywords: [
    "collections payment platform",
    "debt collection payment processing",
    "accounts receivable payments",
    "Text2Pay",
    "IVR payments",
    "consumer payment portal",
    "payment plans collections",
    "settlement negotiator",
    "PCI Level 1 payments",
    "FDCPA Reg F compliant payments",
    "ARM industry payments",
  ],
  openGraph: {
    title: "Hyventur — Modern Payments for Collections & Receivables",
    description:
      "Give consumers a clean, modern way to pay — by portal, text, phone, or plan. Recover more, stay compliant, and stop fighting your tools.",
    type: "website",
    url: `https://${brand.domain}`,
    siteName: "Hyventur",
    images: [
      {
        url: "/images/about/featured.png",
        width: 2000,
        height: 1333,
        alt: "Hyventur — Modern Payments for Collections & Receivables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyventur — Modern Payments for Collections & Receivables",
    description:
      "The modern payment platform built for collections and receivables.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "FinancialService"],
      "@id": `https://${brand.domain}/#organization`,
      name: "Hyventur",
      url: `https://${brand.domain}`,
      description:
        "Modern payment platform for collections, accounts receivable management, creditors, healthcare, government, and utilities — consumer portal, IVR, Text2Pay, payment plans, settlements, omnichannel campaigns, reporting, and integrations.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: brand.phone,
        email: brand.salesEmail,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English",
      },
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: [
        "Payment Processing",
        "Debt Collection Payments",
        "Accounts Receivable Management",
        "Text2Pay",
        "IVR Payments",
        "PCI DSS Compliance",
        "FDCPA",
        "Regulation F",
        "Payment Plans",
        "Settlement Negotiation",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("h-full antialiased", inter.variable)}>
      <body className="min-h-full bg-background font-sans">
        {children}
        <ChatWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
