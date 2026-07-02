import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { LeafPage } from "@/components/site/LeafPage";
import { IMG } from "@/data/images";

const seo = buildPageSeo({
  title: "Interventional Pain Management NYC  Umbrella Health",
  description:
    "Fellowship-trained interventional pain procedures and integrated care for chronic and complex pain. NYC clinic.",
  path: "/specialties/pain-management",
  crumbs: [
    { label: "Home", to: "/" },
    { label: "Specialties", to: "/specialties" },
    { label: "Pain Management" },
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
            eyebrow: "Interventional Pain",
            italic: "Pain treated,",
            title: "not just managed.",
            description:
              "Fellowship-trained interventional procedures combined with primary care continuity  so chronic pain isn't a parallel medical life.",
            image: IMG.examRoom,
            imageAlt: "Pain management procedure room at Umbrella Health",
            crumbs: [
              { label: "Home", to: "/" },
              { label: "Specialties", to: "/specialties" },
              { label: "Pain Management" },
            ],
          },
          intro: {
            heading: "Founder-led,",
            accent: "fellowship-trained.",
            body: "Our founding physician completed an interventional pain fellowship  this is the specialty Umbrella was built around.",
            bullets: [
              {
                iconKey: "award",
                title: "Fellowship credentials",
                body: "Interventional pain trained at an academic medical center.",
              },
              {
                iconKey: "activity",
                title: "Procedures we offer",
                body: "Epidural steroid injections, facet joint blocks, radiofrequency ablation, trigger point therapy.",
              },
              {
                iconKey: "stethoscope",
                title: "Integrated medical care",
                body: "Pain plans coordinated with primary care, neurology, and PT recommendations.",
              },
            ],
          },
          pills: {
            label: "Conditions we treat",
            items: [
              "Low back pain",
              "Sciatica",
              "Cervical radiculopathy",
              "Facet joint pain",
              "Migraine procedures",
              "Post-surgical pain",
              "Myofascial pain",
            ],
          },
        }}
      />
    </>
  );
}
