import { HomeHero } from "@/components/site/HomeHero";
import { InsuranceLogoBar } from "@/components/site/InsuranceLogoBar";
import { LocationBanner } from "@/components/site/LocationBanner";
import dynamic from "next/dynamic";
import { JsonLd } from "@/components/JsonLd";
import { IMG } from "@/data/images";
import { buildPageSeo } from "@/lib/page-head";
import { homePageSchemaGraph } from "@/lib/schema";
import { PENDING_VERIFICATION } from "@/data/pending-verification";

// Below-the-fold sections — deferred to reduce initial bundle parsed on mobile
const ClinicalServicesGrid = dynamic(() =>
  import("@/components/site/ClinicalServicesGrid").then((m) => ({
    default: m.ClinicalServicesGrid,
  })),
);
const CareDiagram = dynamic(() =>
  import("@/components/site/CareDiagram").then((m) => ({ default: m.CareDiagram })),
);
const UmbrellaDifference = dynamic(() =>
  import("@/components/site/UmbrellaDifference").then((m) => ({ default: m.UmbrellaDifference })),
);
const StatCallout = dynamic(() =>
  import("@/components/site/primitives/StatCallout").then((m) => ({ default: m.StatCallout })),
);
const Testimonials = dynamic(() =>
  import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const FounderProfile = dynamic(() =>
  import("@/components/site/FounderProfile").then((m) => ({ default: m.FounderProfile })),
);
const EmployersStrip = dynamic(() =>
  import("@/components/site/EmployersStrip").then((m) => ({ default: m.EmployersStrip })),
);
const ClinicMap = dynamic(() =>
  import("@/components/site/ClinicMap").then((m) => ({ default: m.ClinicMap })),
);
const HomeFAQ = dynamic(() =>
  import("@/components/site/HomeFAQ").then((m) => ({ default: m.HomeFAQ })),
);
const GalleryBanner = dynamic(() =>
  import("@/components/site/primitives/GalleryBanner").then((m) => ({ default: m.GalleryBanner })),
);
const BookButton = dynamic(() =>
  import("@/components/site/primitives/BookButton").then((m) => ({ default: m.BookButton })),
);

const TITLE = "Primary Care & Specialists NYC | Umbrella Health";
const DESCRIPTION =
  "Find primary care doctors and board-certified specialists in NYC at Umbrella Health. Get personalized care, advanced diagnostics, and same-day visits.";

const seo = buildPageSeo({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  keywords: [
    "primary care NYC",
    "primary care doctors Lower Manhattan",
    "multispecialty clinic NYC",
    "board certified physicians NYC",
    "GLP-1 weight loss NYC",
    "longevity medicine NYC",
    "in-house diagnostics NYC",
  ],
  geo: true,
  ogImage: IMG.homepageHero,
});

export const metadata = seo.metadata;

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemaGraph()} />
      <main>
        <HomeHero />
        <InsuranceLogoBar />
        <LocationBanner />
        <ClinicalServicesGrid />
        <CareDiagram />
        <UmbrellaDifference />
        <StatCallout
          stat={PENDING_VERIFICATION.firstVisitFiveStarPercent}
          title="of members rate their care 5 stars after their first visit."
          description="Multispecialty care, advanced diagnostics, and a team that knows your history, not just your appointment slot."
          cta={<BookButton>Book Appointment</BookButton>}
          image={IMG.patientReviewsHero}
          imageAlt="Patient rating care 5 stars after visit at Umbrella Health NYC"
        />
        <Testimonials />
        <FounderProfile />
        <EmployersStrip />
        <ClinicMap />
        <HomeFAQ />
        <GalleryBanner />
      </main>
    </>
  );
}
