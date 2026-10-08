import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteLayout } from "@/components/SiteLayout";
import { SynapseChatWidget } from "@/components/SynapseChatWidget";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { DEFAULT_OG_IMAGE, organizationSchema, webSiteSchema } from "@/lib/schema";
import { haffer } from "@/lib/fonts";
import "./globals.css";

const CLARITY_PROJECT_ID = "y4quth2g2h";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.myumbrellahealth.com"),
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
  verification: {
    google: "9U7vikQAJ2yCFlbS18UpLzDc1y-rwyQ3UOGOh2OgaN4",
  },
};

export const viewport: Viewport = {
  themeColor: "#3B82F6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={haffer.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to image CDN origins to reduce DNS + TLS time */}
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/*
          Preload the LCP hero image so the browser fetches it immediately
          from the initial HTML — fixes the "LCP request discovery" audit.
          The srcset mirrors what Next.js image optimization serves at 640w (mobile)
          and 1920w (desktop). The `as` + `type` pair enables browser preload.
        */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Fdr-rajat-lamington-hero-section-nyc.webp&w=828&q=90"
          imageSrcSet="/_next/image?url=%2Fimages%2Fdr-rajat-lamington-hero-section-nyc.webp&w=640&q=90 640w, /_next/image?url=%2Fimages%2Fdr-rajat-lamington-hero-section-nyc.webp&w=828&q=90 828w, /_next/image?url=%2Fimages%2Fdr-rajat-lamington-hero-section-nyc.webp&w=1080&q=90 1080w, /_next/image?url=%2Fimages%2Fdr-rajat-lamington-hero-section-nyc.webp&w=1200&q=90 1200w"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px"
          // @ts-expect-error — fetchpriority is a valid HTML attribute not yet in TS types
          fetchpriority="high"
        />
      </head>
      <body suppressHydrationWarning>
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`,
          }}
        />
        <JsonLd data={[organizationSchema(), webSiteSchema()]} />
        <SiteLayout>{children}</SiteLayout>
        <SynapseChatWidget />
      </body>
    </html>
  );
}
