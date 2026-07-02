import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Sleep Medicine & Home Sleep Study NYC  Umbrella Health",
  description:
    "Home sleep studies and apnea care designed for busy professionals. Diagnose, treat, and track  without an overnight lab.",
  path: "/specialties/sleep-medicine",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Specialties", to: "/specialties" },
    { label: "Sleep Medicine" },
  ],
});
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LeafPage
        config={{
          hero: {
            eyebrow: "Sleep Medicine",
            italic: "Better sleep,",
            title: "measured at home.",
            description:
              "Home sleep studies, apnea care, and treatment plans tuned for the way New Yorkers actually live and travel.",
            image: IMG.sleepStudy,
            imageAlt: "Patient using a home sleep study device",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Specialties", to: "/specialties" },
              { label: "Sleep Medicine" },
            ],
          },
          intro: {
            heading: "Designed for",
            accent: "real lives.",
            body: "A traditional sleep lab is a hassle. We start at home  with calibrated devices and full clinical interpretation.",
            bullets: [
              {
                iconKey: "moon",
                title: "Home sleep study",
                body: "Diagnostic-grade at-home apnea testing with same-week results.",
              },
              {
                iconKey: "activity",
                title: "CPAP, oral appliance, lifestyle",
                body: "Treatment options matched to your sleep pattern and travel schedule.",
              },
              {
                iconKey: "clipboard-list",
                title: "Cardio-coordinated",
                body: "We loop in cardiology when apnea is a heart risk factor.",
              },
            ],
          },
          pills: {
            label: "What we treat",
            items: [
              "Obstructive sleep apnea",
              "Snoring",
              "Insomnia",
              "Restless legs",
              "Shift-work sleep disorder",
              "Travel & jet lag",
            ],
          },
        }}
      />
    </>
  );
}
