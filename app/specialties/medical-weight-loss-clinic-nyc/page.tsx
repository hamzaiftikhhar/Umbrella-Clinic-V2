import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { MedicalWeightLossClinicNycPage } from "@/components/site/MedicalWeightLossClinicNycPage";
import { faqPageSchema, specialtyPageSchemaGraph } from "@/lib/schema";
import { ROUTES } from "@/data/site-architecture";
import {
  WEIGHT_LOSS_CLINIC_FAQS,
  WEIGHT_LOSS_CLINIC_SEO,
} from "@/data/medical-weight-loss-clinic-nyc-content";
import { IMG } from "@/data/images";

const faqs = WEIGHT_LOSS_CLINIC_FAQS.map((f) => ({ q: f.q, a: f.a }));

const seo = buildPageSeo({
  title: WEIGHT_LOSS_CLINIC_SEO.title,
  description: WEIGHT_LOSS_CLINIC_SEO.description,
  path: ROUTES.medicalWeightLoss,
  geo: true,
  keywords: [...WEIGHT_LOSS_CLINIC_SEO.keywords],
  ogImage: IMG.medicalWeightLossClinicHero,
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Specialties", to: ROUTES.specialtiesHub },
    { label: "Medical Weight Loss Clinic NYC" },
  ],
  extraSchema: [
    specialtyPageSchemaGraph(
      ROUTES.medicalWeightLoss,
      {
        name: "Medical Weight Loss Clinic NYC",
        description: WEIGHT_LOSS_CLINIC_SEO.description,
        path: ROUTES.medicalWeightLoss,
        serviceType: "Medical Weight Loss",
      },
      faqs,
      [],
    ),
    faqPageSchema(faqs),
  ],
});
export const metadata = seo.metadata;

export default function MedicalWeightLossClinicNycRoute() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <MedicalWeightLossClinicNycPage />
    </>
  );
}
