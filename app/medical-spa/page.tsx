import { Link } from "@/components/AppLink";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/site/primitives/Container";
import { ServiceCard } from "@/components/site/primitives/ServiceCard";
import { Reveal } from "@/components/site/primitives/Reveal";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { BookButton } from "@/components/site/primitives/BookButton";
import { GeoImage } from "@/components/site/primitives/GeoImage";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";

const programs = [
  {
    title: "Executive Physicals",
    description: "A half-day deep workup for principals and partners.",
    to: "/longevity/executive-physicals",
  },
  {
    title: "Healthspan & Biomarker Programs",
    description: "Track your numbers, longitudinally, against your baseline.",
    to: "/longevity/healthspan-programs",
  },
  {
    title: "Hormone & Metabolic Optimization",
    description: "Physician-guided aesthetic and metabolic treatments.",
    to: "/longevity/hormone-optimization",
  },
];

const treatments = [
  {
    title: "Facial rejuvenation",
    description:
      "Physician-guided facial treatments designed to refresh skin texture, tone, and radiance.",
    image: IMG.medicalSpaFacialMask,
    alt: "Medical spa facial mask treatment NYC at Umbrella Health",
  },
  {
    title: "Microneedling & skin renewal",
    description:
      "Advanced aesthetic procedures performed in a clinical setting with careful aftercare guidance.",
    image: IMG.medicalSpaMicroneedling,
    alt: "Medical spa microneedling treatment NYC at Umbrella Health",
  },
];

const seo = buildPageSeo({
  title: "Medical Spa Services NYC — Umbrella Health",
  description:
    "Physician-guided medical spa services, hormone optimization, and aesthetic treatments in Lower Manhattan. Clinical rigor meets personalized wellness.",
  path: ROUTES.medicalSpa,
  crumbs: [{ label: "Home", to: "/" }, { label: "Medical Spa Services" }],
  ogImage: IMG.medicalSpaFacialMask,
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_90%_0%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]"
          aria-hidden
        />
        <Container size="lg" className="relative pb-16 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Medical Spa Services</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Medical Spa
              </p>
              <h1 className="font-display mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]">
                Physician-guided aesthetics & wellness
              </h1>
              <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
                Medical spa services backed by board-certified physicians — skin rejuvenation,
                hormone optimization, and evidence-based anti-aging care.
              </p>
              <div className="mt-8">
                <BookButton>Book appointment</BookButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
                <GeoImage
                  src={IMG.medicalSpaFacialMask}
                  alt="Medical spa facial mask treatment NYC at Umbrella Health"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-py bg-background">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="Signature treatments"
            title="Clinical care,"
            accent="premium results."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <article className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[16/10]">
                    <GeoImage
                      src={t.image}
                      alt={t.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py bg-[color:var(--cream)]/40">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="Programs"
            title="Clinical care,"
            accent="not a wellness fad."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.to} delay={i * 0.05}>
                <ServiceCard {...p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 rounded-[1.5rem] border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-card)] sm:p-12">
            <p className="font-display text-2xl font-medium text-foreground">
              Full healthspan dashboard launches 2026.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Join the waitlist to be first — and to lock in founding-member pricing.
            </p>
            <Link
              href="/longevity/waitlist"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Join the waitlist
            </Link>
          </div>
        </Container>
      </section>

      <CTABanner title="Start your" italic="wellness journey." />
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
