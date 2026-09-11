import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";
import { INDEXABLE_ARCHITECTURE_PATHS, ROUTES } from "@/data/site-architecture";
import { SITE_URL } from "@/lib/site";

/**
 * Sitemap = indexable architecture pages + blog hub + all blog posts.
 */
interface SitemapMeta {
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
}

const sitemapMeta: Record<string, SitemapMeta> = {
  [ROUTES.home]: { changefreq: "weekly", priority: 1.0 },
  [ROUTES.specialtiesHub]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.primaryCare]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.cardiology]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.neurology]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.sleepMedicine]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.painManagement]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.medicalWeightLoss]: { changefreq: "weekly", priority: 0.9 },
  [ROUTES.diagnostics]: { changefreq: "monthly", priority: 0.9 },
  [ROUTES.medicalSpa]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.ourTeam]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.patientReviews]: { changefreq: "weekly", priority: 0.7 },
  [ROUTES.insurance]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.contactUs]: { changefreq: "monthly", priority: 0.8 },
  [ROUTES.blog]: { changefreq: "weekly", priority: 0.8 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const architectureEntries = INDEXABLE_ARCHITECTURE_PATHS.map((path) => {
    const meta = sitemapMeta[path] ?? { changefreq: "monthly" as const, priority: 0.8 };
    return {
      url: `${SITE_URL}${path}`,
      changeFrequency: meta.changefreq,
      priority: meta.priority,
    };
  });

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...architectureEntries, ...blogPosts];
}
