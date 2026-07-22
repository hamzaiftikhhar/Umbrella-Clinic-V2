import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { PremiumIcon } from "@/components/site/primitives/IconBadge";
import { BookButton } from "@/components/site/primitives/BookButton";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone } from "lucide-react";
import { IMG } from "@/data/images";
import type { LucideIconKey } from "@/components/icons/icon-keys";
import { CLINIC_MAP_EMBED_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { medicalClinicSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Contact Us — Umbrella Health NYC | 200 Lafayette St",
  description:
    "Visit Umbrella Health in NoHo, Lower Manhattan. Hours, directions, accessibility, languages spoken, and how to get here by subway.",
  path: "/contact-us",
  crumbs: [{ label: "Home", to: "/" }, { label: "Contact Us" }],
  geo: true,
  ogImage: "/images/street-view.webp",
  extraSchema: [medicalClinicSchema({ includeHours: true })],
});
export const metadata = seo.metadata;

const facts: { iconKey: LucideIconKey; title: string; body: string }[] = [
  {
    iconKey: "map-pin",
    title: "Address",
    body: "200 Lafayette Street\nNew York, NY 10012\nNoHo · 6 train at Spring St",
  },
  {
    iconKey: "clock",
    title: "Hours",
    body: "Mon–Fri · 8am – 7pm\nSaturday · 9am – 3pm\nSunday · Closed",
  },
  {
    iconKey: "accessibility",
    title: "Accessibility",
    body: "Step-free entrance, ADA-compliant exam rooms, accessible restrooms.",
  },
  { iconKey: "languages", title: "Languages", body: "English, Spanish, Mandarin, Hindi, Russian." },
  {
    iconKey: "video",
    title: "Telehealth",
    body: "Available across New York State for follow-ups and acute concerns.",
  },
];

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        italic="The Umbrella clinic,"
        title="in NoHo."
        description="Designed to feel calm. Built to deliver clinically. Around the corner from the 6 at Spring Street."
        image={IMG.reception}
        imageAlt="Umbrella Health reception in NoHo"
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <SectionHeading as="h2" eyebrow="Location" title="200 Lafayette," accent="NoHo." />
              <ul className="mt-8 space-y-6">
                {facts.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <PremiumIcon iconKey={f.iconKey} size="md" className="mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                        {f.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BookButton>Book appointment</BookButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-border/60 bg-[color:var(--mint)] shadow-[var(--shadow-card)]">
                <iframe
                  title="Map showing Umbrella Health at 200 Lafayette Street, New York"
                  src={CLINIC_MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0 transition-[filter] duration-500 ease-[var(--ease-premium)] [filter:grayscale(0.35)_contrast(1.02)] group-hover:[filter:grayscale(0)]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-5 pt-12">
                  <p className="font-display text-lg italic text-white">200 Lafayette Street</p>
                  <p className="mt-0.5 text-sm text-white/85">NoHo · New York, NY 10012</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/50 bg-[color:var(--cream)]/50 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:items-start">
            <Reveal>
              <SectionHeading
                as="h2"
                eyebrow="Get in touch"
                title="Send us"
                accent="a message."
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Questions about appointments, insurance, or a new patient visit? Send a note and our
                team will reply within one business day.
              </p>
              <dl className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-foreground">Email</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary">
                        {SITE_EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-foreground">Phone</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      <a href={`tel:${SITE_PHONE.replace(/\D/g, "")}`} className="hover:text-primary">
                        {SITE_PHONE}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <Page />
    </>
  );
}
