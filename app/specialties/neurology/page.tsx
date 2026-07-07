import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";
import { SPECIALTY_AEO } from "@/data/specialty-content";
import { buildSpecialtyPageSeo } from "@/lib/specialty-seo";

const aeo = SPECIALTY_AEO.neurology;
const seo = buildSpecialtyPageSeo("/specialties/neurology", [
  { label: "Home", to: "/" },
  { label: "Specialties", to: "/specialties" },
  { label: "Neurology" },
], aeo);
export const metadata = seo.metadata;

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <LeafPage
        config={{
          hero: {
            eyebrow: "Neurology",
            italic: "Clarity for",
            title: "complex symptoms.",
            description:
              "Diagnostic workups that pull together imaging, autonomic testing, and your primary care record — so the answer lands faster.",
            image: IMG.doctorWoman2,
            imageAlt: "Neurologist consulting with patient at Umbrella Health NYC",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Specialties", to: "/specialties" },
              { label: "Neurology" },
            ],
          },
          intro: {
            heading: "Coordinated workups,",
            accent: "calmer answers.",
            body: "When symptoms span multiple specialties, the worst experience is being sent in circles. We pull the team to the patient.",
            bullets: [
              {
                iconKey: "brain",
                title: "Comprehensive workup",
                body: "History, exam, imaging, and labs coordinated in one visit cycle.",
              },
              {
                iconKey: "activity",
                title: "Autonomic testing in-house",
                body: "Sudomotor and autonomic studies for unexplained fatigue, dizziness, and neuropathy.",
              },
              {
                iconKey: "clipboard-list",
                title: "Plan you can follow",
                body: "Clear next steps written for you, not for the chart.",
              },
            ],
          },
          pills: {
            label: "Conditions we treat",
            items: [
              "Headache & migraine",
              "Peripheral neuropathy",
              "Dizziness & syncope",
              "Cognitive concerns",
              "Sleep-related neurology",
              "Tremor",
              "Numbness & tingling",
            ],
          },
          related: {
            heading: "Diagnostics",
            accent: "we own.",
            cards: [
              {
                title: "Autonomic & Sudomotor",
                description: "Specialized testing rarely in-house.",
                to: "/diagnostics/autonomic-testing",
                badge: "Owned",
              },
              {
                title: "Imaging & Cardiac",
                description: "Imaging coordinated with workup.",
                to: "/diagnostics/imaging-cardiac",
              },
              {
                title: "Sleep & Pulmonary",
                description: "Home sleep studies and PFT.",
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
