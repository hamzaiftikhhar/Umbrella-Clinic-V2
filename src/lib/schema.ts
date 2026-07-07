import type { Physician } from "@/data/physicians";
import { PHYSICIANS, physicianProfilePath } from "@/data/physicians";
import type { QA } from "@/components/site/primitives/FAQList";
import {
  absoluteUrl,
  CLINIC_COORDS,
  CLINIC_GOOGLE_MAPS_URL,
  SITE_ADDRESS,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/images/street-view.png";
export const SITE_LOGO = "/images/combination-mark.png";

export const CLINIC_OPENING_HOURS = [
  "Mo-Fr 08:00-19:00",
  "Sa 09:00-15:00",
] as const;

/** E.164 for schema.org telephone fields. */
export const SITE_PHONE_SCHEMA = "+1-212-555-0188";

export const CLINIC_MEDICAL_SPECIALTIES = [
  "PrimaryCare",
  "Cardiovascular",
  "Neurologic",
  "PulmonaryMedicine",
  "PainMedicine",
] as const;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const CLINIC_ID = `${SITE_URL}/#medical-clinic`;

export function postalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: "200 Lafayette Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10012",
    addressCountry: "US",
  };
}

export function geoCoordinatesSchema() {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: CLINIC_COORDS.lat,
    longitude: CLINIC_COORDS.lng,
  };
}

interface MedicalClinicOptions {
  /** Override areaServed for neighborhood GEO pages. */
  areaServed?: string | string[];
  /** Include opening hours (visit-us, homepage). */
  includeHours?: boolean;
  /** Include aggregate rating (homepage, reviews). */
  includeRating?: boolean;
}

export function medicalClinicSchema(options: MedicalClinicOptions = {}) {
  const {
    areaServed = [
      "New York City",
      "Lower Manhattan",
      "NoHo",
      "Union Square",
      "SoHo",
      "Tribeca",
      "Greenwich Village",
      "Flatiron District",
    ],
    includeHours = false,
    includeRating = false,
  } = options;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: absoluteUrl("/"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl(SITE_LOGO),
    telephone: SITE_PHONE_SCHEMA,
    address: postalAddressSchema(),
    geo: geoCoordinatesSchema(),
    hasMap: CLINIC_GOOGLE_MAPS_URL,
    medicalSpecialty: [...CLINIC_MEDICAL_SPECIALTIES],
    areaServed,
    parentOrganization: { "@id": ORGANIZATION_ID },
  };

  if (includeHours) {
    schema.openingHours = [...CLINIC_OPENING_HOURS];
  }

  if (includeRating) {
    schema.aggregateRating = aggregateRatingSchema();
  }

  return schema;
}

export function organizationSchema(sameAs: string[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl(SITE_LOGO),
    description: SITE_TAGLINE,
    telephone: SITE_PHONE_SCHEMA,
    address: postalAddressSchema(),
    sameAs,
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/specialties")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export const CLINIC_INTRO_VIDEO = {
  name: "Why Patients Choose Umbrella Health in New York",
  description:
    "Board-certified primary care and specialists in Lower Manhattan — one connected record, in-house diagnostics, and patient-centered care at Umbrella Health NYC.",
  thumbnailUrl: "/images/premium-doctor-portrait.png",
  uploadDate: "2025-06-01",
} as const;

/** GEO entity hierarchy for structured areaServed. */
export function lowerManhattanPlaceSchema() {
  return {
    "@type": "Place",
    name: "Lower Manhattan",
    containedInPlace: {
      "@type": "City",
      name: "New York City",
      containedInPlace: {
        "@type": "State",
        name: "New York",
        containedInPlace: { "@type": "Country", name: "United States" },
      },
    },
  };
}

export function insuranceOrganizationSchema(name: string) {
  return { "@type": "Organization", name };
}

export const MAJOR_INSURANCE_ENTITIES = [
  "Aetna",
  "BlueCross BlueShield",
  "Cigna",
  "Emblem Health",
  "Medicare",
  "UnitedHealthcare",
].map(insuranceOrganizationSchema);

export function imageObjectSchema(url: string, caption: string, id?: string) {
  return {
    "@type": "ImageObject",
    ...(id ? { "@id": id } : {}),
    url: absoluteUrl(url),
    caption,
    contentLocation: lowerManhattanPlaceSchema(),
  };
}

export function videoObjectSchema() {
  return {
    "@type": "VideoObject",
    name: CLINIC_INTRO_VIDEO.name,
    description: CLINIC_INTRO_VIDEO.description,
    thumbnailUrl: absoluteUrl(CLINIC_INTRO_VIDEO.thumbnailUrl),
    uploadDate: CLINIC_INTRO_VIDEO.uploadDate,
    contentUrl: absoluteUrl("/#difference"),
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function speakableSchema(path: string, cssSelectors: string[] = ["h1", "article p"]) {
  return {
    "@type": "WebPage",
    "@id": absoluteUrl(path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

interface MedicalServiceInput {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

export function medicalServiceSchema(service: MedicalServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: absoluteUrl(service.path),
    provider: { "@id": CLINIC_ID },
    areaServed: lowerManhattanPlaceSchema(),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(service.path),
      servicePhone: SITE_PHONE_SCHEMA,
    },
  };
}

export function physicianId(physicianId: string) {
  return `${absoluteUrl(physicianProfilePath(physicianId))}#physician`;
}

export function richPhysicianSchema(physician: Physician) {
  const profileUrl = absoluteUrl(physicianProfilePath(physician.id));
  const schema: Record<string, unknown> = {
    "@type": ["Physician", "Person"],
    "@id": physicianId(physician.id),
    name: physician.name,
    honorificPrefix: "Dr.",
    jobTitle: physician.title,
    medicalSpecialty: physician.specialty,
    description: physician.bio,
    image: imageObjectSchema(
      physician.image,
      physician.imageAlt ?? `${physician.name}, ${physician.specialty}`,
      `${profileUrl}#image`,
    ),
    url: profileUrl,
    worksFor: { "@id": CLINIC_ID },
    knowsLanguage: physician.languages,
    hasCredential: physician.boardCertifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Board Certification",
      name: cert,
    })),
    alumniOf: physician.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
    })),
  };

  if (physician.npi) {
    schema.identifier = { "@type": "PropertyValue", name: "NPI", value: physician.npi };
  }

  if (physician.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: physician.rating.value,
      reviewCount: physician.rating.reviewCount,
      bestRating: 5,
    };
  }

  return schema;
}

export function physicianSchema(physician: Physician) {
  return {
    "@context": "https://schema.org",
    ...richPhysicianSchema(physician),
  };
}

export function physiciansSchema(physicians: Physician[]) {
  return physicians.map(physicianSchema);
}

export function physicianProfilePageSchema(physician: Physician, path: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": absoluteUrl(path),
        name: `${physician.name} — ${physician.specialty} | ${SITE_NAME}`,
        description: physician.bio,
        url: absoluteUrl(path),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": physicianId(physician.id) },
        mainEntity: { "@id": physicianId(physician.id) },
      },
      richPhysicianSchema(physician),
      faqPageSchema(physician.faqs),
    ],
  };
}

export function specialtyPageSchemaGraph(
  path: string,
  service: MedicalServiceInput,
  faqs: QA[],
  physicianIds: string[],
) {
  const graph: object[] = [
    {
      "@type": "MedicalWebPage",
      "@id": absoluteUrl(path),
      name: service.name,
      description: service.description,
      url: absoluteUrl(path),
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${absoluteUrl(path)}#service` },
    },
    {
      ...medicalServiceSchema(service),
      "@id": `${absoluteUrl(path)}#service`,
    },
    faqPageSchema(faqs),
  ];

  for (const id of physicianIds) {
    graph.push({
      "@type": "Physician",
      "@id": physicianId(id),
      url: absoluteUrl(physicianProfilePath(id)),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function faqPageSchema(items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const GOOGLE_RATING_VALUE = 4.6;
export const GOOGLE_REVIEW_COUNT = 120;

export function aggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING_VALUE,
    bestRating: 5,
    worstRating: 1,
    reviewCount: GOOGLE_REVIEW_COUNT,
  };
}

interface ReviewInput {
  name: string;
  quote: string;
  time?: string;
}

export function reviewSchemas(reviews: ReviewInput[]) {
  return reviews.slice(0, 10).map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewBody: review.quote,
    datePublished: review.time,
    itemReviewed: { "@id": CLINIC_ID },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
  }));
}

export function localClinicSchema(neighborhood: string, servedAreas: string[]) {
  return medicalClinicSchema({
    areaServed: servedAreas,
    includeHours: true,
  });
}

interface ArticleSchemaInput {
  title: string;
  excerpt: string;
  path: string;
  image?: string;
}

export function articleSchema(article: ArticleSchemaInput) {
  const pageUrl = absoluteUrl(article.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: article.image ? absoluteUrl(article.image) : absoluteUrl(DEFAULT_OG_IMAGE),
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: absoluteUrl("/"),
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl(SITE_LOGO),
          },
        },
      },
      speakableSchema(article.path),
    ],
  };
}

const PHYSICIAN_IMAGE_OBJECTS = PHYSICIANS.map((p) =>
  imageObjectSchema(
    p.image,
    p.imageAlt ?? `${p.name}, board-certified ${p.specialty} at Umbrella Health NYC`,
    `${absoluteUrl(physicianProfilePath(p.id))}#image`,
  ),
);

/** Combined entity graph for homepage — no duplicate FAQ (canonical FAQ lives on /faq). */
export function homePageSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      webSiteSchema(),
      medicalClinicSchema({ includeHours: true, includeRating: true }),
      videoObjectSchema(),
      ...PHYSICIAN_IMAGE_OBJECTS,
    ],
  };
}

/** Preview bundle for /schema debug page. */
export function schemaDebugBundle() {
  const sample = PHYSICIANS[0];
  return {
    organization: organizationSchema(),
    website: webSiteSchema(),
    medicalClinic: medicalClinicSchema({ includeHours: true, includeRating: true }),
    samplePhysician: physicianSchema(sample),
    videoObject: videoObjectSchema(),
    service: medicalServiceSchema({
      name: "Primary Care in Lower Manhattan",
      description: "Comprehensive primary care at Umbrella Health NYC.",
      path: "/specialties/primary-care",
      serviceType: "Primary Care",
    }),
    aggregateRating: aggregateRatingSchema(),
    address: SITE_ADDRESS,
    phone: SITE_PHONE,
  };
}
