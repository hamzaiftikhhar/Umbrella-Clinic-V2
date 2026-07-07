import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";
import { SPECIALTY_AEO } from "@/data/specialty-content";
import { buildSpecialtyPageSeo } from "@/lib/specialty-seo";

const aeo = SPECIALTY_AEO["primary-care"];
const seo = buildSpecialtyPageSeo("/specialties/primary-care", [
  { label: "Home", to: "/" },
  { label: "Specialties", to: "/specialties" },
  { label: "Primary Care" },
], aeo);
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LeafPage
        config={{
          hero: {
            eyebrow: "Primary Care",
            italic: "One doctor.",
            title: "One coordinated relationship.",
            description:
              "Annual physicals, chronic disease management, urgent concerns, and the calm of a doctor who actually knows you.",
            image: IMG.doctorPatient,
            imageAlt: "Primary care physician with patient at Umbrella Health NYC",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Specialties", to: "/specialties" },
              { label: "Primary Care" },
            ],
          },
          intro: {
            heading: "Care that ages",
            accent: "with you.",
            body: "Most NYC clinics treat you like a 15-minute slot. We treat you like someone with a 30-year health story we're trying to make better.",
            bullets: [
              {
                iconKey: "stethoscope",
                title: "Annual physicals + same-day diagnostics",
                body: "Labs, EKG, and ultrasound on the same visit when needed.",
              },
              {
                iconKey: "heart",
                title: "Chronic disease management",
                body: "Hypertension, diabetes, cholesterol, thyroid — measured and tracked over time.",
              },
              {
                iconKey: "clipboard-list",
                title: "Coordinated specialists",
                body: "Cardiology, neuro, sleep, pain — all in the same record, all in the same building.",
              },
            ],
          },
          pills: {
            label: "Conditions we manage",
            items: [
              "Hypertension",
              "Diabetes",
              "Cholesterol",
              "Thyroid",
              "Anxiety & depression",
              "GI concerns",
              "Preventive screening",
              "Vaccinations",
            ],
          },
          related: {
            heading: "Pair it with",
            accent: "diagnostics.",
            cards: [
              {
                title: "Advanced Biomarker Panels",
                description: "Full lipid, metabolic, hormonal — explained.",
                to: "/diagnostics/biomarkers",
                badge: "Owned",
              },
              {
                title: "Imaging & Cardiac Testing",
                description: "EKG, telemetry, ultrasound in-house.",
                to: "/diagnostics/imaging-cardiac",
              },
              {
                title: "Cancer Screening & Radiology",
                description: "Coordinated preventive screening.",
                to: "/diagnostics/cancer-screening",
              },
            ],
          },
          aeo,
        }}
      />
    </>
  );
}
