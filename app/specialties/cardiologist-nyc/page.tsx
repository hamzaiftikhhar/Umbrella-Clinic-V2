import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";
import { SPECIALTY_AEO } from "@/data/specialty-content";
import { buildSpecialtyPageSeo } from "@/lib/specialty-seo";

const aeo = SPECIALTY_AEO["cardiology-vascular"];
const seo = buildSpecialtyPageSeo("/specialties/cardiologist-nyc", [
  { label: "Home", to: "/" },
  { label: "Specialties", to: "/specialties" },
  { label: "Cardiology & Vascular" },
], aeo);
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LeafPage
        config={{
          hero: {
            eyebrow: "Cardiology & Vascular",
            italic: "Your heart, ",
            title: "in real time.",
            description:
              "Board-certified cardiologists with owned diagnostics — so the answer arrives the same day, not the next week.",
            image: IMG.ekg,
            imageAlt: "Cardiac diagnostic equipment at Umbrella Health NYC",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Specialties", to: "/specialties" },
              { label: "Cardiology & Vascular" },
            ],
          },
          intro: {
            heading: "Faster results,",
            accent: "same team.",
            body: "Owning the diagnostics means your cardiologist reads your own data — not a referral packet from a stranger.",
            bullets: [
              {
                iconKey: "heart-pulse",
                title: "In-house EKG & telemetry",
                body: "Resting EKG and ambulatory monitoring done at the clinic.",
              },
              {
                iconKey: "scan-line",
                title: "Vascular ultrasound",
                body: "Carotid, abdominal, and peripheral vascular ultrasound on-site.",
              },
              {
                iconKey: "activity",
                title: "Risk stratification",
                body: "Advanced lipid panels and longitudinal tracking against your baseline.",
              },
            ],
          },
          pills: {
            label: "Conditions we treat",
            items: [
              "Hypertension",
              "Atrial fibrillation",
              "Coronary artery disease",
              "Lipid disorders",
              "Peripheral vascular disease",
              "Palpitations",
              "Syncope",
            ],
          },
          related: {
            heading: "Pair it with",
            accent: "diagnostics.",
            cards: [
              {
                title: "Imaging & Cardiac Testing",
                description: "EKG, telemetry, ultrasound.",
                to: "/diagnostics/imaging-cardiac",
                badge: "Owned",
              },
              {
                title: "Advanced Biomarkers",
                description: "ApoB, Lp(a), advanced lipid panels.",
                to: "/diagnostics/biomarkers",
              },
              {
                title: "Sleep Diagnostics",
                description: "Sleep apnea is a cardiac risk factor.",
                to: "/diagnostics/sleep-pulmonary",
              },
            ],
          },
          aeo,
        }}
      />
    </>
  );
}
