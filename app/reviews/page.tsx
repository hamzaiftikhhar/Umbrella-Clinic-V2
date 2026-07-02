import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsPageClient } from "./reviews-page-client";

const seo = buildPageSeo({
  title: "Patient Reviews  Umbrella Health NYC",
  description: "Real reviews from real Umbrella Health patients across NYC.",
  path: "/reviews",
  crumbs: [{ label: "Home", to: "/" }, { label: "Patient Reviews" }],
});
export const metadata = seo.metadata;

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ReviewsPageClient />
    </>
  );
}
