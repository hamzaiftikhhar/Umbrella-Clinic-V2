import type { Metadata } from "next";
import type { Crumb } from "@/components/site/PageHero";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

interface HeadOpts {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  crumbs?: Crumb[];
  extraSchema?: object[];
}

export interface PageSeo {
  metadata: Metadata;
  jsonLd: object[];
}

export function buildPageSeo({
  title,
  description,
  path,
  type = "website",
  crumbs,
  extraSchema = [],
}: HeadOpts): PageSeo {
  const jsonLd: object[] = [];

  if (crumbs && crumbs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: c.to ? absoluteUrl(c.to) : absoluteUrl(path),
      })),
    });
  }

  jsonLd.push(...extraSchema);

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };

  return { metadata, jsonLd };
}

/** @deprecated TanStack Start helper  use buildPageSeo for Next.js pages. */
export function pageHead(opts: HeadOpts) {
  const { jsonLd } = buildPageSeo(opts);
  const scripts = jsonLd.map((s) => ({
    type: "application/ld+json",
    children: JSON.stringify(s),
  }));

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: opts.path }],
    scripts,
  };
}
