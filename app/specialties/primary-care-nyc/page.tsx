import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PrimaryCareNycPage } from "@/components/site/PrimaryCareNycPage";
import { faqPageSchema, medicalServiceSchema } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";

const FAQS = [
  {
    q: "Can I choose a primary care doctor if I'm new to New York City?",
    a: "Absolutely. Our practice welcomes new patients from Lower Manhattan and surrounding neighborhoods.",
  },
  {
    q: "Is a primary care doctor the same as an internal medicine physician?",
    a: "Many primary care doctors specialize in Internal Medicine, focusing on prevention, diagnosis, and treatment of adult health conditions.",
  },
  {
    q: "Can I see a primary care doctor for preventive healthcare even if I'm healthy?",
    a: "Yes. Preventive care helps detect health concerns early and maintain your long-term health.",
  },
  {
    q: "Do you provide primary care for busy professionals working in Manhattan?",
    a: "Yes. Our Lower Manhattan location serves professionals across Union Square, Chelsea, SoHo, NoHo, and Midtown.",
  },
];

const seo = buildPageSeo({
  title: "Primary Care Doctor in NYC | Umbrella Health Lower Manhattan",
  description:
    "Board-certified primary care physicians in Lower Manhattan, NYC. Annual physicals, preventive care, same-day sick visits, and chronic disease management. Accepting new patients at 200 Lafayette St.",
  path: ROUTES.primaryCare,
  geo: true,
  keywords: [
    "primary care doctor NYC",
    "primary care physician Lower Manhattan",
    "internal medicine NYC",
    "annual physical NYC",
    "same day doctor NYC",
  ],
  ogImage: "/images/dr-archimedes-jao.png",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Our Specialties", to: "/specialties" },
    { label: "Primary Care NYC" },
  ],
  extraSchema: [
    medicalServiceSchema({
      name: "Primary Care in Lower Manhattan",
      description:
        "Comprehensive primary care and internal medicine for adults in NYC — annual physicals, preventive care, and chronic disease management.",
      path: ROUTES.primaryCare,
      serviceType: "Primary Care",
    }),
    faqPageSchema(FAQS),
  ],
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
