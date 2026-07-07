import type { Metadata, Viewport } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { DEFAULT_OG_IMAGE, organizationSchema, webSiteSchema } from "@/lib/schema";
import { fraunces, gtAlpina, haffer } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://umbrellahealth.com"),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Primary care, specialists, in-house diagnostics, GLP-1 weight loss, and longevity programs under one roof in Lower Manhattan, NYC.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
};

export const viewport: Viewport = {
  themeColor: "#122b4e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${haffer.variable} ${gtAlpina.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <JsonLd data={[organizationSchema(), webSiteSchema()]} />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
