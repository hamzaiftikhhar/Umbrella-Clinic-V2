import { DM_Sans, Fraunces, Instrument_Serif } from "next/font/google";

/** Primary — Haffer SQ (web stand-in: DM Sans until brand WOFF files are added) */
export const haffer = DM_Sans({
  subsets: ["latin"],
  variable: "--font-haffer-fallback",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Secondary — GT Alpina (web stand-in: Instrument Serif) for italic accent words */
export const gtAlpina = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-gt-alpina-fallback",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

/** Editorial Display Serif — high-contrast, optical-sizing, for core strategic headlines */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});
