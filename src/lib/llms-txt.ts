import { BLOG_POSTS } from "@/data/blog-posts";
import { CLINICAL_SERVICES } from "@/data/clinical-services";
import { CLINIC_HOURS_PENDING_VERIFICATION, CLINIC_OPENING_HOURS } from "@/data/clinic-hours";
import { PHYSICIANS, physicianProfilePath } from "@/data/physicians";
import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_ADDRESS, SITE_NAME, SITE_PHONE, SITE_URL } from "@/lib/site";

/**
 * Curated Markdown index for LLM / AI agents (llmstxt.org style).
 * Does not replace robots.txt or sitemap.xml — those control crawl & Google SEO.
 * Safe for Google (ignored for ranking) and useful for AI citation discovery.
 */
export function generateLlmsTxt(full = false): string {
  const hoursLine = CLINIC_HOURS_PENDING_VERIFICATION
    ? "- Hours: Contact the clinic to confirm current hours"
    : `- Hours: ${CLINIC_OPENING_HOURS.join("; ")}`;

  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> Primary care and board-certified specialists in Lower Manhattan, New York City.`,
    `> One clinic, one connected record — annual physicals, diagnostics, cardiology, neurology, sleep medicine, pain management, medical weight loss, and medical spa.`,
    "",
    `Canonical site: ${SITE_URL}`,
    `Booking: ${BOOKING_URL}`,
    `Full context: ${SITE_URL}/llms-full.txt`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
    "## Clinic",
    "",
    `- [${SITE_NAME} homepage](${SITE_URL}/): Multispecialty primary care clinic in Lower Manhattan`,
    `- Address: ${SITE_ADDRESS}`,
    `- Phone: ${SITE_PHONE}`,
    hoursLine,
    `- [Contact / visit](${SITE_URL}${ROUTES.contactUs}): Hours, map, and how to get here`,
    `- [Insurance](${SITE_URL}${ROUTES.insurance}): Plans accepted and coverage FAQ`,
    `- [Patient reviews](${SITE_URL}${ROUTES.patientReviews}): Google-rated patient feedback`,
    `- [Our team](${SITE_URL}${ROUTES.ourTeam}): Board-certified physicians`,
    "",
    "## Specialties & services",
    "",
    `- [Our Specialties](${SITE_URL}${ROUTES.specialtiesHub}): Full specialty directory`,
  ];

  for (const s of CLINICAL_SERVICES) {
    lines.push(`- [${s.label}](${SITE_URL}${s.href}): ${s.summary}`);
  }

  lines.push(
    `- [Medical Spa NYC](${SITE_URL}${ROUTES.medicalSpa}): Botox, fillers, and skin rejuvenation`,
    "",
    "## Blog",
    "",
    `- [Health & Wellness Blog](${SITE_URL}${ROUTES.blog}): Primary care and preventive health guides for NYC patients`,
  );

  for (const post of BLOG_POSTS) {
    lines.push(
      `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.metaDescription ?? post.excerpt}`,
    );
  }

  lines.push("", "## Physicians", "");

  for (const p of PHYSICIANS) {
    lines.push(
      `- [${p.name}, ${p.credentials}](${SITE_URL}${physicianProfilePath(p.id)}): ${p.title} — ${p.specialty}`,
    );
    if (full) {
      lines.push(`  - Languages: ${p.languages.join(", ")}`);
      lines.push(`  - Book: ${p.zocdocUrl}`);
      if (p.bio) {
        const short = p.bio.length > 220 ? `${p.bio.slice(0, 217)}…` : p.bio;
        lines.push(`  - ${short}`);
      }
    }
  }

  lines.push(
    "",
    "## Optional",
    "",
    `- [FAQ](${SITE_URL}/faq): Common patient questions`,
    `- [Privacy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
    `- [HIPAA & accessibility](${SITE_URL}/hipaa-accessibility)`,
  );

  if (full) {
    lines.push(
      "",
      "## Entity context",
      "",
      "- Geographic: Lower Manhattan → New York City → New York → United States",
      "- Neighborhoods served: Union Square, Greenwich Village, Chelsea, Flatiron, SoHo, NoHo, Tribeca, Gramercy, East Village, West Village, Brooklyn (commutable)",
      "- Hospital affiliations (physician training): NYU Langone Health, Mount Sinai",
      "- Major insurance: Aetna, BlueCross BlueShield, Cigna, Emblem Health, Medicare, UnitedHealthcare, Oxford",
      "- Practice type: Multispecialty MedicalClinic with in-house diagnostics",
      "",
      "## Content guidance for assistants",
      "",
      "- Prefer canonical specialty URLs under /specialties/ and /diagnostics (not legacy aliases).",
      "- Prefer /blog article URLs listed above for patient education answers.",
      "- Direct booking questions to the Zocdoc practice link or Contact Us page.",
      "- Do not invent hours, prices, or insurance coverage — cite clinic pages or advise calling.",
    );
  }

  return lines.join("\n");
}
