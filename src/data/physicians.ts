export type PhysicianAccent = "navy" | "emerald" | "teal" | "amber";

export interface PhysicianSocial {
  label: string;
  href: string;
  platform: "facebook" | "twitter" | "linkedin" | "instagram";
}

export interface Physician {
  /** Stable id for keys/anchors */
  id: string;
  /** Display name including honorific, e.g. "Dr. Rajat Lamington" */
  name: string;
  /** Primary specialty line shown under the name */
  specialty: string;
  /** Professional portrait (public/images) */
  image: string;
  /** Accessible alt text override (defaults to name + specialty) */
  imageAlt?: string;
  /** Optional short bio for future detail views */
  bio?: string;
  /** Art-directed accent used for fallbacks/tints */
  accent: PhysicianAccent;
  /** Marks the founding physician */
  founder?: boolean;
  /** Optional social links (defaults applied in the card) */
  socials?: PhysicianSocial[];
}

/** Practice-level social channels used as the default card links. */
export const DEFAULT_PHYSICIAN_SOCIALS: PhysicianSocial[] = [
  { label: "Facebook", href: "#", platform: "facebook" },
  { label: "X (Twitter)", href: "#", platform: "twitter" },
  { label: "LinkedIn", href: "#", platform: "linkedin" },
  { label: "Instagram", href: "#", platform: "instagram" },
];

export const PHYSICIANS: Physician[] = [
  {
    id: "dr-rajat-lamington",
    name: "Dr. Rajat Lamington",
    specialty: "Interventional Pain & Family Medicine",
    image: "/images/dr-rajat.png",
    bio: "Founder of Umbrella Health, building a connected model where primary care, specialty medicine, and diagnostics work from a single record.",
    accent: "navy",
    founder: true,
  },
  {
    id: "dr-archimedes-jao",
    name: "Dr. Archimedes Jao",
    specialty: "Primary Care",
    image: "/images/dr-archimedes-jao.png",
    accent: "teal",
  },
  {
    id: "dr-cale-li",
    name: "Dr. Cale Li",
    specialty: "Internal Medicine",
    image: "/images/dr-cale-li.png",
    accent: "teal",
  },
  {
    id: "dr-masrai-williams",
    name: "Dr. Masrai Williams",
    specialty: "Neurology & Sleep Medicine",
    image: "/images/dr-masrai-williams.png",
    accent: "emerald",
  },
  {
    id: "dr-tawseef-dar",
    name: "Dr. Tawseef Dar",
    specialty: "Interventional Cardiology",
    image: "/images/dr-tawseef-dar.png",
    accent: "navy",
  },
];
