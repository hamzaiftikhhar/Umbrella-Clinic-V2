export type NavItem = { label: string; to: string };

export const SPECIALTIES_NAV: NavItem[] = [
  { label: "Primary Care", to: "/specialties/primary-care" },
  { label: "Internal Medicine", to: "/specialties/primary-care" },
  { label: "Cardiology", to: "/specialties/cardiology-vascular" },
  { label: "Vascular Medicine", to: "/specialties/cardiology-vascular" },
  { label: "Neurology", to: "/specialties/neurology" },
  { label: "Sleep Medicine", to: "/specialties/sleep-medicine" },
  { label: "Interventional Pain Management", to: "/specialties/pain-management" },
  { label: "Medical Weight Loss", to: "/weight-loss-glp1" },
];

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Diagnostics & Testing", to: "/diagnostics" },
  { label: "Medical Spa Services", to: "/longevity/hormone-optimization" },
  { label: "Our Team", to: "/our-physicians" },
  { label: "Patient Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/visit-us" },
];

/** @deprecated Use PRIMARY_NAV + SPECIALTIES_NAV  kept for any legacy imports */
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
    links: [
      { label: "Primary Care", to: "/specialties/primary-care" },
      { label: "Cardiology & Vascular", to: "/specialties/cardiology-vascular" },
      { label: "Neurology", to: "/specialties/neurology" },
      { label: "Sleep Medicine", to: "/specialties/sleep-medicine" },
      { label: "Pain Management", to: "/specialties/pain-management" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Diagnostics & Testing", to: "/diagnostics" },
      { label: "Medical Weight Loss", to: "/weight-loss-glp1" },
      { label: "Longevity Programs", to: "/longevity" },
      { label: "Medical Spa Services", to: "/longevity/hormone-optimization" },
      { label: "Insurance & Pricing", to: "/insurance" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Our Team", to: "/our-physicians" },
      { label: "Patient Reviews", to: "/reviews" },
      { label: "Visit Us", to: "/visit-us" },
      { label: "For Employers", to: "/employers" },
      { label: "FAQ", to: "/faq" },
    ],
  },
] as const;
