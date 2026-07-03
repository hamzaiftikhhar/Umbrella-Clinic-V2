export const BOOKING_URL =
  "https://www.zocdoc.com/practice/umbrella-health-109109?lock=true&isNewPatient=false&referrerType=widget";

export const SITE_NAME = "Umbrella Health";
export const SITE_TAGLINE = "Modern medicine, measured.";
export const SITE_PHONE = "(212) 555-0188";
export const SITE_ADDRESS = "200 Lafayette Street, New York, NY 10012";

/** Google Maps place listing — Umbrella Health, 200 Lafayette St, NoHo. */
export const CLINIC_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Umbrella+Health/@40.7363784,-73.9952539,20.37z/data=!4m10!1m2!2m1!1sUmbrella+Health,+200+Lafayette+Street,+New+York,+NY+10012!3m6!1s0x89c259dd725169a1:0xe7be074e390093f4!8m2!3d40.7363331!4d-73.9952765!15sCjlVbWJyZWxsYSBIZWFsdGgsIDIwMCBMYWZheWV0dGUgU3RyZWV0LCBOZXcgWW9yaywgTlkgMTAwMTJaOCI2dW1icmVsbGEgaGVhbHRoIDIwMCBsYWZheWV0dGUgc3RyZWV0IG5ldyB5b3JrIG55IDEwMDEykgEObWVkaWNhbF9jZW50ZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVrTW1WSVdsaE5SbEkyWTNrd05WVnRkRzVWTWs1SFkwVTBNVTFWUlJBQuABAPoBBAgAED8!16s%2Fg%2F11v5wmp9bk?hl=en-US&entry=ttu";

export const CLINIC_COORDS = { lat: 40.7363331, lng: -73.9952765 } as const;

export const CLINIC_MAP_EMBED_URL =
  "https://www.google.com/maps?q=Umbrella+Health,+200+Lafayette+Street,+New+York,+NY+10012&ll=40.7363331,-73.9952765&z=17&hl=en&output=embed";

/** Set via NEXT_PUBLIC_SITE_URL in production for absolute canonical/OG URLs. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://umbrellahealth.com";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
