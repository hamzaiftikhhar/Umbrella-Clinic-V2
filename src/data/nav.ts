import { SPECIALTIES_NAV } from "./clinical-services";

export type NavItem = { label: string; to: string };

export { SPECIALTIES_NAV };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Our Team", to: "/our-physicians" },
  { label: "Patient Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/visit-us" },
];

/** @deprecated Use PRIMARY_NAV + SPECIALTIES_NAV — kept for any legacy imports */
export const MORE_NAV: NavItem[] = [
  { label: "FAQ", to: "/faq" },
  { label: "Resources", to: "/resources" },
  { label: "Insurance", to: "/insurance" },
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
      { label: "Longevity Programs", to: "/longevity" },
      { label: "Insurance & Pricing", to: "/insurance" },
      { label: "For Employers", to: "/employers" },
      { label: "Patient Resources", to: "/resources" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Our Team", to: "/our-physicians" },
      { label: "Patient Reviews", to: "/reviews" },
      { label: "Visit Us", to: "/visit-us" },
      { label: "FAQ", to: "/faq" },
    ],
  },
] as const;
