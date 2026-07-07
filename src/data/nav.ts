import { HEADER_NAV_ITEMS, ROUTES, SPECIALTY_NAV_ITEMS } from "./site-architecture";

export type NavItem = { label: string; to: string };

/** Our Specialties dropdown — hub children only */
export const SPECIALTIES_NAV: NavItem[] = SPECIALTY_NAV_ITEMS.map(({ label, to }) => ({
  label,
  to,
}));

/** Top-level header links (excluding Home and Specialties dropdown) */
export const PRIMARY_NAV: NavItem[] = HEADER_NAV_ITEMS.map(({ label, to }) => ({
  label,
  to,
}));

export const MORE_NAV: NavItem[] = [
  { label: "FAQ", to: "/faq" },
  { label: "Resources", to: "/resources" },
  { label: "For Employers", to: "/employers" },
  { label: "Patient Portal", to: "/portal" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Specialties",
    links: SPECIALTIES_NAV,
  },
  {
    title: "Services",
    links: [
      { label: "Diagnostics & Testing", to: ROUTES.diagnostics },
      { label: "Medical Spa Services", to: ROUTES.medicalSpa },
      { label: "Insurance & Pricing", to: ROUTES.insurance },
      { label: "For Employers", to: "/employers" },
      { label: "Patient Resources", to: "/resources" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Our Team", to: ROUTES.ourTeam },
      { label: "Patient Reviews", to: ROUTES.patientReviews },
      { label: "Contact Us", to: ROUTES.contactUs },
      { label: "Blog", to: ROUTES.blog },
      { label: "FAQ", to: "/faq" },
    ],
  },
] as const;
