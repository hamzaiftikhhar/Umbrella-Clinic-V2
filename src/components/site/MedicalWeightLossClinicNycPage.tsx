"use client";

import { Check, MapPin, Phone } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { FAQList } from "./primitives/FAQList";
import { GeoImage } from "./primitives/GeoImage";
import { PremiumIcon } from "./primitives/IconBadge";
import { getImageAlt } from "@/data/image-seo";
import { IMG } from "@/data/images";
import { ROUTES } from "@/data/site-architecture";
import {
  WEIGHT_LOSS_CLINIC_AREAS,
  WEIGHT_LOSS_CLINIC_FAQ_CLOSING,
  WEIGHT_LOSS_CLINIC_FAQS,
  WEIGHT_LOSS_CLINIC_FINAL_CTA,
  WEIGHT_LOSS_CLINIC_FIRST_VISIT,
  WEIGHT_LOSS_CLINIC_HELP,
  WEIGHT_LOSS_CLINIC_HERO,
  WEIGHT_LOSS_CLINIC_HOW,
  WEIGHT_LOSS_CLINIC_LONG_TERM,
  WEIGHT_LOSS_CLINIC_PHONE,
  WEIGHT_LOSS_CLINIC_PROGRAMS,
  WEIGHT_LOSS_CLINIC_SEO,
  WEIGHT_LOSS_CLINIC_SERVICES,
  WEIGHT_LOSS_CLINIC_VS_DIETING,
  WEIGHT_LOSS_CLINIC_WHY,
} from "@/data/medical-weight-loss-clinic-nyc-content";

const PHONE_TEL = WEIGHT_LOSS_CLINIC_PHONE.replace(/\D/g, "");
const FAQS = [...WEIGHT_LOSS_CLINIC_FAQS];

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

export function MedicalWeightLossClinicNycPage() {
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
                <span aria-current="page">Medical Weight Loss Clinic NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Physician-supervised · Manhattan
              </p>
              <h1 className="font-display mt-5 text-balance text-[2.1rem] font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.15rem]">
                {WEIGHT_LOSS_CLINIC_HERO.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {WEIGHT_LOSS_CLINIC_HERO.paragraph1}
              </p>
              <p className="mt-4 max-w-xl text-base font-normal leading-[1.75] text-muted-foreground">
                {WEIGHT_LOSS_CLINIC_HERO.paragraph2}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BookButton>{WEIGHT_LOSS_CLINIC_HERO.bookCta}</BookButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/25"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  {WEIGHT_LOSS_CLINIC_HERO.callCta}
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
                <GeoImage
                  src={IMG.medicalWeightLossClinicHero}
                  alt={WEIGHT_LOSS_CLINIC_SEO.heroImageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-[1.25rem] border border-border/50 bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-[260px]">
                <p className="text-sm font-semibold text-foreground">Personalized programs</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Metabolic evaluation · nutrition guidance · progress monitoring
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h2
                id="why-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {WEIGHT_LOSS_CLINIC_WHY.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {WEIGHT_LOSS_CLINIC_WHY.intro}
              </p>
              <h3 className="mt-8 font-display text-xl font-medium text-foreground sm:text-2xl">
                {WEIGHT_LOSS_CLINIC_WHY.listLabel}
              </h3>
              <CheckList items={WEIGHT_LOSS_CLINIC_WHY.items} />
              <SectionCta label={WEIGHT_LOSS_CLINIC_WHY.cta} />
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <GeoImage
                  src={IMG.medicalWeightLossHydration}
                  alt={getImageAlt("medicalWeightLossHydration")}
                  fill
                  className="object-cover object-[40%_center]"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="services-heading">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <h2
                id="services-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {WEIGHT_LOSS_CLINIC_SERVICES.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground">
                {WEIGHT_LOSS_CLINIC_SERVICES.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {WEIGHT_LOSS_CLINIC_SERVICES.listLabel}
              </h3>
              <CheckList items={WEIGHT_LOSS_CLINIC_SERVICES.items} />
              <SectionCta label={WEIGHT_LOSS_CLINIC_SERVICES.cta} />
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[4/5]">
                <GeoImage
                  src={IMG.medicalWeightLossNutrition}
                  alt={getImageAlt("medicalWeightLossNutrition")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="section-py bg-background" aria-labelledby="how-heading">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative order-2 overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)] lg:order-1 lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] lg:aspect-[5/6]">
                <GeoImage
                  src={IMG.medicalWeightLossNutritionConsult}
                  alt={getImageAlt("medicalWeightLossNutritionConsult")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                id="how-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                {WEIGHT_LOSS_CLINIC_HOW.heading}
              </h2>
              <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
                {WEIGHT_LOSS_CLINIC_HOW.intro}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                {WEIGHT_LOSS_CLINIC_HOW.listLabel}
              </h3>
              <ol className="mt-6 space-y-3">
                {WEIGHT_LOSS_CLINIC_HOW.items.map((item, i) => (
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
              <SectionCta label={WEIGHT_LOSS_CLINIC_HOW.cta} />
            </div>
          </div>
        </Container>
      </section>

      {/* Personalized programs */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="programs-heading">
        <Container size="lg">
          <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-card p-8 shadow-[var(--shadow-card)] sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
              <div>
                <h2
                  id="programs-heading"
                  className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                >
                  {WEIGHT_LOSS_CLINIC_PROGRAMS.heading}
                </h2>
                <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground">
                  {WEIGHT_LOSS_CLINIC_PROGRAMS.intro}
                </p>
                <h3 className="mt-8 text-lg font-semibold text-foreground">
                  {WEIGHT_LOSS_CLINIC_PROGRAMS.listLabel}
                </h3>
                <CheckList items={WEIGHT_LOSS_CLINIC_PROGRAMS.items} />
                <p className="mt-6 text-base font-normal leading-[1.75] text-muted-foreground">
                  {WEIGHT_LOSS_CLINIC_PROGRAMS.closing}
                </p>
                <SectionCta label={WEIGHT_LOSS_CLINIC_PROGRAMS.cta} />
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                  <div className="relative aspect-[4/5]">
                    <GeoImage
                      src={IMG.medicalWeightLossHealthyEating}
                      alt={getImageAlt("medicalWeightLossHealthyEating")}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    { icon: "stethoscope" as const, title: "Physician-supervised" },
                    { icon: "heart-rate" as const, title: "Metabolic evaluation" },
                    { icon: "pill" as const, title: "Personalized plans" },
                    { icon: "hospital" as const, title: "Long-term support" },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="flex items-center gap-4 rounded-[1.25rem] border border-border/50 bg-[color:var(--cream)]/60 px-5 py-4"
                    >
                      <PremiumIcon healthIcon={card.icon} size="md" />
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What doctor can help with */}
      <section className="section-py bg-background" aria-labelledby="help-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="help-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {WEIGHT_LOSS_CLINIC_HELP.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {WEIGHT_LOSS_CLINIC_HELP.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {WEIGHT_LOSS_CLINIC_HELP.listLabel}
            </h3>
          </div>
          <CheckList items={WEIGHT_LOSS_CLINIC_HELP.items} />
          <div className="mt-10 text-center">
            <BookButton>{WEIGHT_LOSS_CLINIC_HELP.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* Long-term health */}
      <section className="section-py bg-[color:var(--cream)]/50" aria-labelledby="longterm-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="longterm-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {WEIGHT_LOSS_CLINIC_LONG_TERM.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {WEIGHT_LOSS_CLINIC_LONG_TERM.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {WEIGHT_LOSS_CLINIC_LONG_TERM.listLabel}
            </h3>
            <CheckList items={WEIGHT_LOSS_CLINIC_LONG_TERM.items} />
            <SectionCta label={WEIGHT_LOSS_CLINIC_LONG_TERM.cta} />
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
              {WEIGHT_LOSS_CLINIC_AREAS.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {WEIGHT_LOSS_CLINIC_AREAS.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {WEIGHT_LOSS_CLINIC_AREAS.listLabel}
            </h3>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {WEIGHT_LOSS_CLINIC_AREAS.items.map((area) => (
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
            <BookButton>{WEIGHT_LOSS_CLINIC_AREAS.cta}</BookButton>
          </div>
        </Container>
      </section>

      {/* First visit */}
      <section className="section-py bg-[color:var(--cream)]/40" aria-labelledby="first-visit-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <h2
              id="first-visit-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {WEIGHT_LOSS_CLINIC_FIRST_VISIT.heading}
            </h2>
            <p className="mt-5 text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {WEIGHT_LOSS_CLINIC_FIRST_VISIT.intro}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {WEIGHT_LOSS_CLINIC_FIRST_VISIT.listLabel}
            </h3>
            <ol className="mt-6 space-y-3">
              {WEIGHT_LOSS_CLINIC_FIRST_VISIT.items.map((item, i) => (
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
            <p className="mt-6 text-base font-normal leading-[1.75] text-muted-foreground">
              {WEIGHT_LOSS_CLINIC_FIRST_VISIT.closing}
            </p>
            <SectionCta label={WEIGHT_LOSS_CLINIC_FIRST_VISIT.cta} />
          </div>
        </Container>
      </section>

      {/* vs dieting */}
      <section className="section-py bg-background" aria-labelledby="vs-diet-heading">
        <Container size="lg">
          <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-card via-secondary/30 to-background p-8 text-center shadow-[var(--shadow-card)] sm:p-12">
            <h2
              id="vs-diet-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              {WEIGHT_LOSS_CLINIC_VS_DIETING.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {WEIGHT_LOSS_CLINIC_VS_DIETING.paragraph1}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground">
              {WEIGHT_LOSS_CLINIC_VS_DIETING.paragraph2}
            </p>
            <div className="mt-8 flex justify-center">
              <BookButton>{WEIGHT_LOSS_CLINIC_VS_DIETING.cta}</BookButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-background via-secondary/40 to-accent/30 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
            <h2 className="font-display mx-auto max-w-3xl text-balance text-3xl font-medium leading-[1.06] text-foreground sm:text-4xl">
              {WEIGHT_LOSS_CLINIC_FINAL_CTA.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-[1.75] text-muted-foreground sm:text-lg">
              {WEIGHT_LOSS_CLINIC_FINAL_CTA.paragraph1}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base font-normal text-muted-foreground">
              {WEIGHT_LOSS_CLINIC_FINAL_CTA.paragraph2}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {WEIGHT_LOSS_CLINIC_FINAL_CTA.callCta}
              </a>
              <BookButton>{WEIGHT_LOSS_CLINIC_FINAL_CTA.bookCta}</BookButton>
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
              className="font-display text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              <FAQList items={FAQS} />
            </div>
            <p className="mt-10 text-center text-base font-semibold text-foreground">
              {WEIGHT_LOSS_CLINIC_FAQ_CLOSING}
            </p>
            <div className="mt-6 flex justify-center">
              <BookButton>Book an Appointment</BookButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
