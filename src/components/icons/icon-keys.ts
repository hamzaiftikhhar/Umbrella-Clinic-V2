/** Serializable icon keys  safe to pass from Server to Client Components. */
export const LUCIDE_ICON_KEYS = [
  "accessibility",
  "activity",
  "award",
  "badge-check",
  "brain",
  "briefcase",
  "building-2",
  "calendar",
  "clipboard-check",
  "clipboard-list",
  "clock",
  "flask-conical",
  "gift",
  "graduation-cap",
  "heart",
  "heart-handshake",
  "heart-pulse",
  "hospital",
  "languages",
  "line-chart",
  "map-pin",
  "medal",
  "microscope",
  "moon",
  "scale",
  "scan-line",
  "shield-check",
  "stethoscope",
  "syringe",
  "users",
  "video",
  "wind",
] as const;

export type LucideIconKey = (typeof LUCIDE_ICON_KEYS)[number];

export type HealthIconName =
  | "cardiology"
  | "neurology"
  | "sleep"
  | "diagnostics"
  | "primary-care"
  | "weight-loss"
  | "pain";
