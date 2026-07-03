import { IMG } from "./images";

export type ClinicalService = {
  /** Label used in nav, footer, and cards */
  label: string;
  href: string;
  description: string;
  /** Short blurb for the /specialties index grid */
  summary: string;
  imageUrl: string;
};

/** Homepage grid + Our Specialties nav — keep in sync */
export const CLINICAL_SERVICES: ClinicalService[] = [
  {
    label: "Primary Care NYC",
    href: "/specialties/primary-care",
    summary: "Annual physicals, chronic disease management, and preventive care for every stage of life.",
    description:
      "Build a healthier future with comprehensive primary care focused on preventive care, annual physicals, chronic disease management, and personalized treatment for every stage of life.",
    imageUrl: IMG.primaryCareHero,
  },
  {
    label: "Cardiology & Vascular Medicine",
    href: "/specialties/cardiology-vascular",
    summary: "In-house EKG, telemetry, and vascular ultrasound with same-day results.",
    description:
      "Protect your heart with expert cardiovascular care, advanced diagnostic testing, and personalized treatment plans designed to support lifelong heart health.",
    imageUrl: IMG.ekg,
  },
  {
    label: "Medical Weight Loss NYC",
    href: "/weight-loss-glp1",
    summary: "Physician-supervised GLP-1 programs and evidence-based weight management.",
    description:
      "Achieve sustainable weight loss with physician-supervised programs, personalized nutrition guidance, and evidence-based medical treatments.",
    imageUrl: IMG.glp1Hero,
  },
  {
    label: "Diagnostics & Testing",
    href: "/diagnostics",
    summary: "Advanced lab work, imaging, and screenings under one roof.",
    description:
      "Get accurate answers faster with advanced diagnostic testing, laboratory services, and preventive health screenings that support timely diagnosis and treatment.",
    imageUrl: IMG.lab,
  },
  {
    label: "Sleep Medicine",
    href: "/specialties/sleep-medicine",
    summary: "Home sleep studies and apnea care designed for busy professionals.",
    description:
      "Improve your sleep and overall well-being with comprehensive sleep evaluations, advanced sleep studies, and personalized treatment for sleep disorders.",
    imageUrl: IMG.sleepStudy,
  },
  {
    label: "Neurology",
    href: "/specialties/neurology",
    summary: "Headache, neuropathy, and cognitive concerns with integrated diagnostic workup.",
    description:
      "Receive expert diagnosis and treatment for neurological conditions with personalized care focused on improving brain, spine, and nervous system health.",
    imageUrl: IMG.neurologyHero,
  },
  {
    label: "Interventional Pain Management",
    href: "/specialties/pain-management",
    summary: "Fellowship-trained procedures for chronic and complex pain.",
    description:
      "Find lasting relief from chronic pain through personalized, minimally invasive treatments that improve mobility, function, and quality of life.",
    imageUrl: IMG.painManagementHero,
  },
  {
    label: "Medical Spa Services NYC",
    href: "/longevity/hormone-optimization",
    summary: "Physician-guided aesthetic treatments and skin rejuvenation.",
    description:
      "Refresh your appearance with physician-guided aesthetic treatments, including skin rejuvenation, anti-aging solutions, and personalized wellness services.",
    imageUrl: IMG.medicalSpaHero,
  },
];

export const SPECIALTIES_NAV = CLINICAL_SERVICES.map(({ label, href }) => ({
  label,
  to: href,
}));
