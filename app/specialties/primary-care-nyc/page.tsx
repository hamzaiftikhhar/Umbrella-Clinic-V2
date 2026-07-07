import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PrimaryCareNycPage } from "@/components/site/PrimaryCareNycPage";
import { primaryCareNycPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";

const seo = buildPageSeo({
  title: "Primary Care Doctor in New York City | Personalized Healthcare in Lower Manhattan",
  description:
    "Looking for a trusted primary care doctor in New York City? Board-certified physicians at 32 W 14th Street, Lower Manhattan. Annual physicals, preventive care, same-day sick visits. Accepting new patients.",
  path: ROUTES.primaryCare,
  geo: true,
  keywords: [
    "primary care doctor NYC",
    "primary care physician New York City",
    "primary care doctor Lower Manhattan",
    "internal medicine NYC",
    "annual physical NYC",
    "same day doctor NYC",
  ],
  ogImage: "/images/dr-archimedes-jao.png",
  extraSchema: [primaryCareNycPageSchemaGraph()],
});
export const metadata = seo.metadata;

export default function PrimaryCareNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <PrimaryCareNycPage />
    </>
  );
}
