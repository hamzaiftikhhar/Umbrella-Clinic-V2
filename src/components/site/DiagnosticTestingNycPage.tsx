"use client";

import { Check, MapPin, Phone } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { FAQList } from "./primitives/FAQList";
import { GeoImage } from "./primitives/GeoImage";
import { getImageAlt } from "@/data/image-seo";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";
import {
  DIAGNOSTIC_TESTING_AREAS,
  DIAGNOSTIC_TESTING_CARDIO,
  DIAGNOSTIC_TESTING_EXPECT,
  DIAGNOSTIC_TESTING_FAQS,
  DIAGNOSTIC_TESTING_FINAL_CTA,
  DIAGNOSTIC_TESTING_HERO,
  DIAGNOSTIC_TESTING_LAB,
  DIAGNOSTIC_TESTING_NEURO,
  DIAGNOSTIC_TESTING_PAIN,
  DIAGNOSTIC_TESTING_PHONE,
  DIAGNOSTIC_TESTING_PREVENTIVE,
  DIAGNOSTIC_TESTING_SEO,
  DIAGNOSTIC_TESTING_SERVICES,
  DIAGNOSTIC_TESTING_SLEEP,
  DIAGNOSTIC_TESTING_WHY,
} from "@/data/diagnostic-testing-nyc-content";

const PHONE_TEL = DIAGNOSTIC_TESTING_PHONE.replace(/\D/g, "");
const FAQS = [...DIAGNOSTIC_TESTING_FAQS];

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[1.25rem] border border-border/50 bg-card px-4 py-3.5 shadow-[var(--shadow-soft)]"
        >
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success-surface text-success">
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCta({ label }: { label: string }) {
  return (
    <div className="mt-8">
      <BookButton>{label}</BookButton>
    </div>
  );
}

function RelatedLink({
  before,
  href,
  label,
  after,
}: {
  before: string;
  href: string;
  label: string;
  after: string;
}) {
  return (
    <p className="mt-6 text-base font-normal leading-[1.75] text-muted-foreground">
      {before}{" "}
      <Link href={href} className="font-semibold text-primary underline-offset-4 hover:underline">
        {label}
      </Link>{" "}
      {after}
    </p>
  );
}

export function DiagnosticTestingNycPage() {
  return (
    <main className="overflow-x-clip">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-24 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_-10%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]"
          aria-hidden
        />
        <Container size="lg" className="relative pb-16 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={ROUTES.specialtiesHub} className="hover:underline">
                  Our Specialties
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Diagnostic Testing NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                In-house diagnostics · Manhattan
              </p>
              <h1 className="font-display mt-5 text-balance text-[2.1rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.15rem]">
                {DIAGNOSTIC_TESTING_HERO.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_HERO.paragraph1}
              </p>
              <p className="mt-4 max-w-xl text-base font-normal leading-[1.75] text-muted-foreground">
                {DIAGNOSTIC_TESTING_HERO.paragraph2}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BookButton>{DIAGNOSTIC_TESTING_HERO.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/25"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  {DIAGNOSTIC_TESTING_HERO.callCta}
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
                <GeoImage
                  src={IMG.diagnosticTestingHero}
                  alt={DIAGNOSTIC_TESTING_SEO.heroImageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-[1.25rem] border border-border/50 bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-[280px]">
                <p className="text-sm font-semibold text-foreground">Comprehensive testing</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Laboratory · cardiovascular · neurological · preventive
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comprehensive services */}
      <section className="section-py bg-background" aria-labelledby="services-heading">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h2
                id="services-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_SERVICES.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_SERVICES.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_SERVICES.listLabel}
              </h3>
              <CheckList items={DIAGNOSTIC_TESTING_SERVICES.items} />
              <SectionCta label={DIAGNOSTIC_TESTING_SERVICES.cta} />
            </div>
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                <div className="relative aspect-[4/3]">
                  <GeoImage
                    src={IMG.diagnosticTestingGeneticLab}
                    alt={getImageAlt("diagnosticTestingGeneticLab")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                <div className="relative aspect-[16/10]">
                  <GeoImage
                    src={IMG.diagnosticTestingLabAnalysis}
                    alt={getImageAlt("diagnosticTestingLabAnalysis")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Laboratory */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="lab-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative order-2 overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] lg:order-1">
              <div className="relative aspect-[4/5]">
                <GeoImage
                  src={IMG.diagnosticTestingLabBlood}
                  alt={getImageAlt("diagnosticTestingLabBlood")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                id="lab-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_LAB.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_LAB.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_LAB.listLabel}
              </h3>
              <CheckList items={DIAGNOSTIC_TESTING_LAB.items} />
              <SectionCta label={DIAGNOSTIC_TESTING_LAB.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Cardiovascular */}
      <section className="section-py bg-background" aria-labelledby="cardio-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h2
                id="cardio-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_CARDIO.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_CARDIO.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_CARDIO.listLabel}
              </h3>
              <CheckList items={DIAGNOSTIC_TESTING_CARDIO.items} />
              <RelatedLink
                before="For advanced cardiovascular care, explore our"
                href={ROUTES.cardiology}
                label="Cardiology & Vascular Medicine"
                after="services."
              />
              <SectionCta label={DIAGNOSTIC_TESTING_CARDIO.cta} />
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[4/5]">
                <GeoImage
                  src={IMG.diagnosticTestingCardiovascular}
                  alt={getImageAlt("diagnosticTestingCardiovascular")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Neurological */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="neuro-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="neuro-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_NEURO.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_NEURO.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_NEURO.listLabel}
            </h3>
            <CheckList items={DIAGNOSTIC_TESTING_NEURO.items} />
            <RelatedLink
              before="Learn more about our"
              href={ROUTES.neurology}
              label="Neurology"
              after="services."
            />
            <SectionCta label={DIAGNOSTIC_TESTING_NEURO.cta} />
          </div>
        </Container>
      </section>

      {/* Sleep */}
      <section className="section-py bg-background" aria-labelledby="sleep-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative order-2 overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] lg:order-1">
              <div className="relative aspect-[4/3]">
                <GeoImage
                  src={IMG.diagnosticTestingSpecimenScan}
                  alt={getImageAlt("diagnosticTestingSpecimenScan")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                id="sleep-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_SLEEP.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_SLEEP.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_SLEEP.listLabel}
              </h3>
              <CheckList items={DIAGNOSTIC_TESTING_SLEEP.items} />
              <RelatedLink
                before="Learn more about our"
                href={ROUTES.sleepMedicine}
                label="Sleep Medicine"
                after="services."
              />
              <SectionCta label={DIAGNOSTIC_TESTING_SLEEP.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Pain */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="pain-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h2
                id="pain-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_PAIN.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_PAIN.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_PAIN.listLabel}
              </h3>
              <CheckList items={DIAGNOSTIC_TESTING_PAIN.items} />
              <RelatedLink
                before="Explore our"
                href={ROUTES.painManagement}
                label="Pain Management"
                after="services for comprehensive treatment."
              />
              <SectionCta label={DIAGNOSTIC_TESTING_PAIN.cta} />
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[4/5]">
                <GeoImage
                  src={IMG.diagnosticTestingPainEval}
                  alt={getImageAlt("diagnosticTestingPainEval")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Preventive */}
      <section className="section-py bg-background" aria-labelledby="preventive-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative order-2 overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] lg:order-1">
              <div className="relative aspect-[4/5]">
                <GeoImage
                  src={IMG.diagnosticTestingPreventive}
                  alt={getImageAlt("diagnosticTestingPreventive")}
                  fill
                  className="object-cover object-[40%_center]"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                id="preventive-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_PREVENTIVE.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_PREVENTIVE.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_PREVENTIVE.listLabel}
              </h3>
              <CheckList items={DIAGNOSTIC_TESTING_PREVENTIVE.items} />
              <SectionCta label={DIAGNOSTIC_TESTING_PREVENTIVE.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="why-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_WHY.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_WHY.intro}
            </p>
            <h3 className="mt-8 font-display text-xl font-medium text-foreground sm:text-2xl">
              {DIAGNOSTIC_TESTING_WHY.listLabel}
            </h3>
          </div>
          <CheckList items={DIAGNOSTIC_TESTING_WHY.items} />
          <div className="mt-10 text-center">
            <BookButton>{DIAGNOSTIC_TESTING_WHY.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* Areas served */}
      <section className="section-py bg-background" aria-labelledby="areas-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="areas-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {DIAGNOSTIC_TESTING_AREAS.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_AREAS.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {DIAGNOSTIC_TESTING_AREAS.listLabel}
            </h3>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {DIAGNOSTIC_TESTING_AREAS.items.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <BookButton>{DIAGNOSTIC_TESTING_AREAS.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* What to expect */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="expect-heading">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h2
                id="expect-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {DIAGNOSTIC_TESTING_EXPECT.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {DIAGNOSTIC_TESTING_EXPECT.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {DIAGNOSTIC_TESTING_EXPECT.listLabel}
              </h3>
              <ol className="mt-6 space-y-3">
                {DIAGNOSTIC_TESTING_EXPECT.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 rounded-[1.25rem] border border-border/50 bg-card px-5 py-4 shadow-[var(--shadow-soft)]"
                  >
                    <span className="font-display text-lg font-semibold tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
                  </li>
                ))}
              </ol>
              <SectionCta label={DIAGNOSTIC_TESTING_EXPECT.cta} />
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[4/5]">
                <GeoImage
                  src={IMG.diagnosticTestingPainEval}
                  alt={getImageAlt("diagnosticTestingPainEval")}
                  fill
                  className="object-cover object-[30%_center]"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-background via-secondary/40 to-accent/30 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-balance text-3xl font-medium leading-[1.06] text-foreground sm:text-4xl">
              {DIAGNOSTIC_TESTING_FINAL_CTA.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {DIAGNOSTIC_TESTING_FINAL_CTA.paragraph1}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base font-normal text-muted-foreground">
              {DIAGNOSTIC_TESTING_FINAL_CTA.paragraph2}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {DIAGNOSTIC_TESTING_FINAL_CTA.callCta}
              </a>
              <BookButton>{DIAGNOSTIC_TESTING_FINAL_CTA.bookCta}</BookButton>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-py bg-background" aria-labelledby="faq-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="font-display text-balance text-center text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-10">
              <FAQList items={FAQS} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
