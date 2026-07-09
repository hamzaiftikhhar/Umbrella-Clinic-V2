import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ROUTES } from "@/data/site-architecture";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: ROUTES.specialtiesHub, changefreq: "monthly", priority: 0.9 },
  { path: ROUTES.primaryCare, changefreq: "monthly", priority: 0.9 },
  { path: ROUTES.cardiology, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.neurology, changefreq: "monthly", priority: 0.7 },
  { path: ROUTES.sleepMedicine, changefreq: "monthly", priority: 0.7 },
  { path: ROUTES.painManagement, changefreq: "monthly", priority: 0.7 },
  { path: ROUTES.medicalWeightLoss, changefreq: "weekly", priority: 0.9 },
  { path: ROUTES.diagnostics, changefreq: "monthly", priority: 0.9 },
  { path: "/diagnostics/imaging-cardiac", changefreq: "monthly", priority: 0.7 },
  { path: "/diagnostics/sleep-pulmonary", changefreq: "monthly", priority: 0.7 },
  { path: "/diagnostics/biomarkers", changefreq: "monthly", priority: 0.7 },
  { path: "/diagnostics/autonomic-testing", changefreq: "monthly", priority: 0.6 },
  { path: "/diagnostics/cancer-screening", changefreq: "monthly", priority: 0.7 },
  { path: "/diagnostics/allergy-testing", changefreq: "monthly", priority: 0.6 },
  { path: "/diagnostics/sample-report", changefreq: "monthly", priority: 0.7 },
  { path: ROUTES.medicalSpa, changefreq: "monthly", priority: 0.9 },
  { path: "/longevity/executive-physicals", changefreq: "monthly", priority: 0.7 },
  { path: "/longevity/healthspan-programs", changefreq: "monthly", priority: 0.7 },
  { path: "/longevity/hormone-optimization", changefreq: "monthly", priority: 0.7 },
  { path: "/longevity/waitlist", changefreq: "monthly", priority: 0.6 },
  { path: ROUTES.ourTeam, changefreq: "monthly", priority: 0.8 },
  { path: "/our-physicians/dr-rajat-lamington", changefreq: "monthly", priority: 0.75 },
  { path: "/our-physicians/dr-cale-li", changefreq: "monthly", priority: 0.75 },
  { path: "/our-physicians/dr-masrai-williams", changefreq: "monthly", priority: 0.75 },
  { path: "/our-physicians/dr-tawseef-dar", changefreq: "monthly", priority: 0.75 },
  { path: "/employers", changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.insurance, changefreq: "monthly", priority: 0.8 },
  { path: ROUTES.patientReviews, changefreq: "weekly", priority: 0.6 },
  { path: ROUTES.blog, changefreq: "weekly", priority: 0.7 },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    changefreq: "monthly" as const,
    priority: 0.6,
  })),
  { path: "/resources", changefreq: "weekly", priority: 0.7 },
  { path: "/resources/decoding-your-diagnostics", changefreq: "weekly", priority: 0.6 },
  {
    path: "/resources/decoding-your-diagnostics/cholesterol-panel-explained",
    changefreq: "yearly",
    priority: 0.5,
  },
  { path: "/resources/longevity-prevention", changefreq: "weekly", priority: 0.6 },
  { path: "/resources/busy-professionals", changefreq: "weekly", priority: 0.6 },
  {
    path: "/resources/busy-professionals/glp1-what-to-expect",
    changefreq: "yearly",
    priority: 0.5,
  },
  {
    path: "/resources/busy-professionals/sleep-debt-guide",
    changefreq: "yearly",
    priority: 0.5,
  },
  { path: "/refer-a-friend", changefreq: "monthly", priority: 0.5 },
  { path: "/faq", changefreq: "monthly", priority: 0.6 },
  { path: ROUTES.contactUs, changefreq: "monthly", priority: 0.7 },
  { path: "/portal", changefreq: "yearly", priority: 0.3 },
  { path: "/locations", changefreq: "monthly", priority: 0.7 },
  { path: "/locations/union-square", changefreq: "monthly", priority: 0.6 },
  { path: "/locations/tribeca-fidi", changefreq: "monthly", priority: 0.6 },
  { path: "/locations/soho", changefreq: "monthly", priority: 0.6 },
  { path: "/locations/brooklyn", changefreq: "monthly", priority: 0.6 },
  { path: "/careers", changefreq: "monthly", priority: 0.4 },
  { path: "/privacy", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", changefreq: "yearly", priority: 0.3 },
  { path: "/hipaa-accessibility", changefreq: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
