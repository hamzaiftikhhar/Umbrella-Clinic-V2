export type PhysicianAccent = "navy" | "emerald" | "teal" | "amber";

export interface Physician {
  /** Stable id for keys/anchors */
  id: string;
  name: string;
  /** Role/title — kept neutral until verified credentials are supplied */
  title: string;
  /** Short, model-focused bio. Placeholder copy until real bios are provided. */
  bio: string;
  /** Areas of focus shown as tags */
  focus: string[];
  /** Art-directed placeholder accent (no stock photography) */
  accent: PhysicianAccent;
  /** Marks the featured founder block */
  founder?: boolean;
}

/**
 * Real physicians validated by patient reviews. Credentials and photography are
 * intentionally omitted until verified assets are supplied — the cards render an
 * art-directed monogram placeholder rather than stock faces or invented bios.
 */
export const PHYSICIANS: Physician[] = [
  {
    id: "dr-rajat",
    name: "Dr. Rajat",
    title: "Founding Physician",
    bio: "Founder of Umbrella Health, building a connected model where primary care, specialty medicine, and diagnostics work from a single record.",
    focus: ["Primary Care", "Pain Management", "Preventive Health"],
    accent: "navy",
    founder: true,
  },
  {
    id: "dr-cole-li",
    name: "Dr. Cole Li",
    title: "Physician",
    bio: "Sees patients across primary and specialty care with a calm, methodical, data-led approach the team is known for.",
    focus: ["Primary Care", "Diagnostics"],
    accent: "emerald",
  },
  {
    id: "dr-mccall",
    name: "Dr. McCall",
    title: "Physician",
    bio: "Focused on coordinated, evidence-based care that keeps every result connected to the bigger picture of your health.",
    focus: ["Internal Medicine", "Preventive Health"],
    accent: "teal",
  },
];
