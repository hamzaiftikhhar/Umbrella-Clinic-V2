import type { Metadata } from "next";
import { HomeHero } from "@/components/site/HomeHero";
import { InsuranceLogoBar } from "@/components/site/InsuranceLogoBar";
import { LocationBanner } from "@/components/site/LocationBanner";
import { ClinicalServicesGrid } from "@/components/site/ClinicalServicesGrid";
import { CareDiagram } from "@/components/site/CareDiagram";
import { UmbrellaDifference } from "@/components/site/UmbrellaDifference";
import { StatCallout } from "@/components/site/primitives/StatCallout";
import { Testimonials } from "@/components/site/Testimonials";
import { FounderProfile } from "@/components/site/FounderProfile";
import { EmployersStrip } from "@/components/site/EmployersStrip";
import { HomeFAQ, homeFaqs } from "@/components/site/HomeFAQ";
import { GalleryBanner } from "@/components/site/primitives/GalleryBanner";
import { BookButton } from "@/components/site/primitives/BookButton";
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
    streetAddress: "32 W 14th St",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10011",
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
        <ClinicalServicesGrid />
        <CareDiagram />
        <UmbrellaDifference />
        <StatCallout
          stat="92%"
          title="of members rate their care 5 stars after their first visit."
          description="Multispecialty care, advanced diagnostics, and a team that knows your history, not just your appointment slot."
          cta={<BookButton>Book Appointment</BookButton>}
          image="/images/APNQkAGh3YEm92Qa-kUP3rKYhHDg5OzGaYziM48tRLgdof1x00Y-d0vwEyzQbry2Kni-1HP7-tQc87_fmoHP9Pu6gMXqzJvCAqxysq6rXF-kA6F8QbNSvfnUSzoTbK1dwMauOVrQNo_w1600-h1200-k-no.jpg"
          imageAlt="Relaxing waiting area with green moss wall"
        />
        <Testimonials />
        <FounderProfile />
        <EmployersStrip />
        <HomeFAQ />
        <GalleryBanner />
      </main>
    </>
  );
}
