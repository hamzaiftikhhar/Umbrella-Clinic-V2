import { DM_Sans, Instrument_Serif } from "next/font/google";

/** Haffer SQ stand-in until brand WOFF files are added to public/fonts/ */
export const haffer = DM_Sans({
  subsets: ["latin"],
  variable: "--font-haffer-fallback",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** GT Alpina stand-in until brand WOFF files are added to public/fonts/ */
export const gtAlpina = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-gt-alpina-fallback",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});
