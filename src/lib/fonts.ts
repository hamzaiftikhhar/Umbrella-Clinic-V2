import { DM_Sans } from "next/font/google";

/** Primary — one sans family across the entire site.
 *  DM Sans is a variable font — no `weight` array or `axes` needed.
 *  All weights (100–900) are included in the single variable font file.
 *  Using a static weight array caused a TypeError crash in the Next.js
 *  font loader on Vercel (null regex match in loader.js:122).
 */
export const haffer = DM_Sans({
  subsets: ["latin"],
  variable: "--font-haffer-fallback",
  display: "swap",
});
