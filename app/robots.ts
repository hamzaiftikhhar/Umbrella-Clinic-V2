import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Open crawl for SEO + AI discovery.
 * Only block paths that can harm the site: private/debug pages, redirect
 * aliases (duplicate crawl), and junk search-query URLs.
 * Real marketing and content pages stay crawlable.
 */
export default function robots(): MetadataRoute.Robots {
  const disallowJunk = [
    // Private / debug / thin lead-gen — should never appear in search
    "/portal",
    "/schema",
    "/longevity/waitlist",
    // Redirect aliases (canonicals live elsewhere — avoid duplicate crawl)
    "/visit-us",
    "/reviews",
    "/medical-spa",
    "/weight-loss-glp1",
    "/specialties/medical-weight-loss-nyc",
    "/specialties/sleep-medicine-nyc",
    // Fake search URLs from old SearchAction
    "/*?*s=",
    "/*?*q=",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowJunk,
      },
      // Explicit allow for major AI / answer crawlers (citations + AI Overviews adjacent bots)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: disallowJunk,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: disallowJunk,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
