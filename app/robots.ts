import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Prefer crawl of indexable content. Only block utility/legacy/junk paths.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/portal",
          "/schema",
          "/careers",
          "/refer-a-friend",
          "/employers",
          // Alias / legacy paths (canonicals live elsewhere)
          "/visit-us",
          "/reviews",
          "/medical-spa",
          "/weight-loss-glp1",
          "/specialties/diagnostic-testing-nyc",
          "/specialties/medical-weight-loss-nyc",
          "/specialties/sleep-medicine-nyc",
          // Fake search URLs from old SearchAction
          "/*?*s=",
          "/*?*q=",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
