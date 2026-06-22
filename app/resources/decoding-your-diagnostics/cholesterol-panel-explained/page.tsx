import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { ArticlePage } from "@/components/site/ArticlePage";
import { articles } from "@/data/articles";

const article = articles.find((a) => a.slug === "cholesterol-panel-explained")!;

const seo = buildPageSeo({
  title: `${article.title} — Umbrella Health`,
  description: article.excerpt,
  path: `/resources/decoding-your-diagnostics/${article.slug}`,
  type: "article",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Resources", to: "/resources" },
    { label: "Decoding Your Diagnostics", to: "/resources/decoding-your-diagnostics" },
    { label: article.title },
  ],
  extraSchema: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
    },
  ],
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ArticlePage article={article} />
    </>
  );
}
