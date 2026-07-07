/** Canonical URL slugs aligned with site architecture spreadsheet. */
export const ROUTES = {
  home: "/",
  specialtiesHub: "/specialties",
  primaryCare: "/specialties/primary-care-nyc",
  cardiology: "/specialties/cardiologist-nyc",
  neurology: "/specialties/neurologist-nyc",
  sleepMedicine: "/specialties/sleep-medicine-nyc",
  painManagement: "/specialties/pain-management-nyc",
  medicalWeightLoss: "/specialties/medical-weight-loss-nyc",
  diagnostics: "/diagnostics",
  medicalSpa: "/medical-spa",
  ourTeam: "/our-team",
  patientReviews: "/patient-reviews",
  contactUs: "/contact-us",
  insurance: "/insurance",
  blog: "/blog",
} as const;

/** Specialty links for the Our Specialties dropdown (hub children only). */
export const SPECIALTY_NAV_ITEMS = [
  { label: "Primary Care NYC", to: ROUTES.primaryCare },
  { label: "Cardiology & Vascular Medicine", to: ROUTES.cardiology },
  { label: "Neurology", to: ROUTES.neurology },
  { label: "Sleep Medicine", to: ROUTES.sleepMedicine },
  { label: "Interventional Pain Management", to: ROUTES.painManagement },
  { label: "Medical Weight Loss NYC", to: ROUTES.medicalWeightLoss },
] as const;

/** Top-level header navigation (excluding specialties dropdown). Blog hidden until redesign. */
export const HEADER_NAV_ITEMS = [
  { label: "Diagnostics & Testing", to: ROUTES.diagnostics },
  { label: "Medical Spa Services", to: ROUTES.medicalSpa },
  { label: "Our Team", to: ROUTES.ourTeam },
  { label: "Patient Reviews", to: ROUTES.patientReviews },
  { label: "Contact Us", to: ROUTES.contactUs },
  { label: "Insurance", to: ROUTES.insurance },
] as const;
