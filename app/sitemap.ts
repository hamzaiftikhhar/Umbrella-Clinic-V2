import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/data/site-architecture";

/**
 * Sitemap = SEO architecture allowlist ONLY.
 * Everything else stays live with noindex (no 404s) so old links don't break SEO.
 */
interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
}

const entries: SitemapEntry[] = [
  { path: ROUTES.home, changefreq: "weekly", priority: 1.0 },

  // Our Specialties hub + children
  { path: ROUTES.specialtiesHub, changefreq: "monthly", priority: 0.9 },
  { path: ROUTES.primaryCare, changefreq: "monthly", priority: 0.9 },
  { path: ROUTES.cardiology, changefreq: "monthly", priority: 0.9 },
  { path: ROUTES.neurology, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.sleepMedicine, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.painManagement, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.medicalWeightLoss, changefreq: "weekly", priority: 0.9 },

  // Top-level hubs
  { path: ROUTES.diagnostics, changefreq: "monthly", priority: 0.9 },
  { path: ROUTES.medicalSpa, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.ourTeam, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.patientReviews, changefreq: "weekly", priority: 0.7 },
  { path: ROUTES.insurance, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.contactUs, changefreq: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
