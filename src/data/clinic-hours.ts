/**
 * Clinic hours currently shown on the Visit Us / Contact Us page.
 * Official hours are PENDING clinic verification — do not emit these in
 * JSON-LD until the clinic confirms. Update this one file when they do.
 */
export const CLINIC_HOURS_PENDING_VERIFICATION = true;

export const CLINIC_HOURS_DISPLAY = {
  weekday: "Mon–Fri · 8am – 7pm",
  saturday: "Saturday · 9am – 3pm",
  sunday: "Sunday · Closed",
  compact: "Mon–Fri · 8am – 7pm\nSaturday · 9am – 3pm\nSunday · Closed",
} as const;

/** Schema.org openingHours strings — only use in JSON-LD after clinic verification. */
export const CLINIC_OPENING_HOURS = ["Mo-Fr 08:00-19:00", "Sa 09:00-15:00"] as const;
