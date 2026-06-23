export const BOOKING_URL =
  "https://www.zocdoc.com/practice/umbrella-health-109109?lock=true&isNewPatient=false&referrerType=widget";

export const SITE_NAME = "Umbrella Health";
export const SITE_TAGLINE = "Modern medicine, measured.";
export const SITE_PHONE = "(212) 555-0188";
export const SITE_ADDRESS = "32 W 14th St, New York, NY 10011";

/** Set via NEXT_PUBLIC_SITE_URL in production for absolute canonical/OG URLs. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://umbrellahealth.com";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
