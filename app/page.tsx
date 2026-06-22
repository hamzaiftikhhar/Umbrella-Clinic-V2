import type { Metadata } from "next";
import { HomeHero } from "@/components/site/HomeHero";
import { InsuranceLogoBar } from "@/components/site/InsuranceLogoBar";
import { LocationBanner } from "@/components/site/LocationBanner";
import { PillarsGrid } from "@/components/site/PillarsGrid";
import { CareDiagram } from "@/components/site/CareDiagram";
import { UmbrellaDifference } from "@/components/site/UmbrellaDifference";
import { StatCallout } from "@/components/site/primitives/StatCallout";
import { Testimonials } from "@/components/site/Testimonials";
import { FounderProfile } from "@/components/site/FounderProfile";
import { EmployersStrip } from "@/components/site/EmployersStrip";
import { HomeFAQ, homeFaqs } from "@/components/site/HomeFAQ";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { faqSchema } from "@/components/site/primitives/FAQList";
import { JsonLd } from "@/components/JsonLd";
import { IMG } from "@/data/images";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Umbrella Health — Modern Multispecialty Care in NYC";
const DESCRIPTION =
  "Primary care, specialists, in-house diagnostics, GLP-1 weight loss, and longevity programs under one roof in NYC. Insurance accepted. Book online.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NYC clinic",
    "primary care NYC",
    "specialty care NYC",
    "GLP-1 weight loss",
    "longevity medicine",
    "executive physical",
    "in-house diagnostics",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "New York City",
  },
};

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE_NAME,
  medicalSpecialty: [
    "PrimaryCare",
    "Cardiovascular",
    "Neurologic",
    "PulmonaryMedicine",
    "PainMedicine",
  ],
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "200 Lafayette Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10012",
    addressCountry: "US",
  },
  areaServed: "New York City",
  telephone: "+1-212-555-0188",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[medicalClinicSchema, faqSchema(homeFaqs)]} />
      <main>
        <HomeHero />
        <InsuranceLogoBar />
        <LocationBanner />
        <PillarsGrid />
        <CareDiagram />
        <UmbrellaDifference />
        <StatCallout
          stat="94%"
          title="of members rate their care 5 stars after their first visit."
          description="Multispecialty under one roof, data-driven care plans, and a team that actually picks up the phone."
          image={IMG.patientHappy}
          imageAlt="Smiling patient at Umbrella Health"
        />
        <Testimonials />
        <FounderProfile />
        <EmployersStrip />
        <HomeFAQ />
        <CTABanner />
      </main>
    </>
  );
}
