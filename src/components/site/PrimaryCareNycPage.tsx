"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Calendar,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { FAQList } from "./primitives/FAQList";
import { PhysicianCard } from "./primitives/PhysicianCard";
import { PrimaryCareAudienceShowcase } from "./PrimaryCareAudienceShowcase";
import { PrimaryCareLocationSection } from "./PrimaryCareLocationSection";
import { IMG } from "@/data/images";
import { physiciansForSpecialty } from "@/data/physicians";
import { SITE_ADDRESS, SITE_PHONE } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHY_CHOOSE = [
  "Board-certified primary care physicians",
  "Personalized treatment plans",
  "Annual wellness exams & preventive care",
  "Same-day sick visits (when available)",
  "Chronic disease management",
  "Convenient Lower Manhattan location",
  "Accepting new patients",
  "Compassionate, patient-centered care",
];

const CORE_SERVICES = [
  "Annual physical exams",
  "Preventive health screenings",
  "Sick visits for common illnesses",
  "Diabetes, hypertension & cholesterol management",
  "Women's and men's primary care",
  "Vaccinations & immunizations",
  "Laboratory testing",
  "Medication management",
  "Weight management & nutrition counseling",
  "Specialist referrals and coordinated care",
];

const CONDITIONS = [
  "High Blood Pressure",
  "Diabetes",
  "High Cholesterol",
  "Thyroid Disorders",
  "Asthma",
  "Allergies",
  "Cold & Flu",
  "COVID-19",
  "Minor Infections",
  "Anxiety & Depression Screening",
  "Weight Management",
  "Digestive Conditions",
];

const FAQS = [
  {
    q: "Can I choose a primary care doctor if I'm new to New York City?",
    a: "Absolutely. If you've recently moved to New York City, establishing care with a primary care physician is one of the most important steps you can take to maintain your health. Our practice welcomes new patients from Lower Manhattan and surrounding neighborhoods.",
  },
  {
    q: "Is a primary care doctor the same as an internal medicine physician?",
    a: "Many primary care doctors specialize in Internal Medicine, focusing on the prevention, diagnosis, and treatment of adult health conditions. Depending on your healthcare needs, your primary care physician may also coordinate your care with other medical specialists.",
  },
  {
    q: "Can I see a primary care doctor for preventive healthcare even if I'm healthy?",
    a: "Yes. Preventive care is designed to keep you healthy before problems develop. Regular wellness visits help detect health concerns early, update vaccinations, monitor important health markers, and provide personalized recommendations for maintaining your long-term health.",
  },
  {
    q: "Do you provide primary care for busy professionals working in Manhattan?",
    a: "Yes. Our convenient Lower Manhattan location makes it easy for professionals living or working in Union Square, Chelsea, Greenwich Village, Flatiron District, SoHo, NoHo, and Midtown Manhattan to access high-quality primary care close to work or home.",
  },
];

function Fade({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function PrimaryCareNycPage() {
  const physicians = physiciansForSpecialty("primary-care");
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-x-clip">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-28 sm:pt-36">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,color-mix(in_oklab,var(--sage)_70%,transparent),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[color:var(--accent-teal-surface)] opacity-60 blur-3xl"
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
                <Link href="/specialties" className="hover:underline">
                  Our Specialties
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span aria-current="page">Primary Care NYC</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Fade>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary shadow-[var(--shadow-soft)]">
                <Stethoscope className="h-3.5 w-3.5" aria-hidden />
                Primary Care · Lower Manhattan
              </p>

              <h1 className="font-display mt-7 text-balance text-[2.35rem] font-medium leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                Primary Care Doctor in New York City
              </h1>
              <p className="font-display mt-3 text-xl font-light italic text-primary sm:text-2xl">
                Personalized healthcare in Lower Manhattan
              </p>

              <p className="mt-7 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
                Board-certified physicians providing comprehensive primary care for adults from{" "}
                {SITE_ADDRESS}. We serve Union Square, Greenwich Village, Chelsea, Flatiron,
                SoHo, NoHo, Gramercy, and all of NYC.
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">
                Routine checkups, annual physicals, preventive care, and chronic condition
                management — delivered with evidence-based medicine and a calm, premium clinical
                experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <BookButton>Schedule your appointment</BookButton>
                <a
                  href={`tel:${SITE_PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/25"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  Call {SITE_PHONE}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3 border-t border-border/50 pt-8 sm:max-w-lg">
                {[
                  { value: "5", label: "Board-certified physicians" },
                  { value: "4.6★", label: "Patient-rated care" },
                  { value: "Same-day", label: "Sick visits available" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-xl font-medium text-foreground sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>

            <Fade delay={0.08}>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <motion.div
                  className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] bg-[color:var(--accent-teal)]/15 lg:block"
                  animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-[var(--shadow-elegant)]">
                  <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                    <Image
                      src={IMG.primaryCareHero}
                      alt="Board-certified primary care doctor with patient at Umbrella Health NYC"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                      <div className="flex items-end justify-between gap-4">
                        <div className="text-primary-foreground">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
                            Umbrella Health
                          </p>
                          <p className="font-display mt-1 text-2xl font-medium italic">
                            Accepting new patients
                          </p>
                        </div>
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-foreground/15 backdrop-blur-sm">
                          <Shield className="h-6 w-6 text-primary-foreground" aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      {/* ── Why choose ── */}
      <section className="section-py bg-background" aria-labelledby="why-heading">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-start">
            <Fade>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-teal)]">
                The Umbrella standard
              </p>
              <h2
                id="why-heading"
                className="font-display mt-4 text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                Why patients choose our{" "}
                <span className="font-light italic text-primary">primary care</span> in NYC
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                Choosing the right primary care doctor means a partner focused on long-term
                wellness — preventing illness, managing chronic conditions, and keeping you
                healthy with personalized, evidence-based care.
              </p>
            </Fade>

            <div className="grid gap-3 sm:grid-cols-2">
              {WHY_CHOOSE.map((item, i) => (
                <Fade key={item} delay={i * 0.04}>
                  <div className="group flex h-full items-start gap-3 rounded-2xl border border-border/50 bg-[color:var(--cream)]/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[var(--shadow-card)]">
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-emerald)]"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services ── */}
      <section
        className="section-py border-y border-border/50 bg-[color:var(--mint)]/40"
        aria-labelledby="services-heading"
      >
        <Container size="lg">
          <Fade>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                  Comprehensive care
                </p>
                <h2
                  id="services-heading"
                  className="font-display mt-4 text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                >
                  What our primary care clinic provides
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-right">
                Preventive medicine, early diagnosis, and personalized treatment — all coordinated
                under one roof in Lower Manhattan.
              </p>
            </div>
          </Fade>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service, i) => (
              <Fade key={service} delay={i * 0.03}>
                <li className="group relative overflow-hidden rounded-2xl border border-border/45 bg-background p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                  <span
                    className="font-display text-3xl font-light text-primary/15 transition-colors group-hover:text-primary/25"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                    {service}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-[color:var(--accent-teal)] transition-all duration-500 group-hover:w-full"
                    aria-hidden
                  />
                </li>
              </Fade>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Audience showcase (animated tabs) ── */}
      <PrimaryCareAudienceShowcase />

      {/* ── Conditions ── */}
      <section className="section-py bg-background" aria-labelledby="conditions-heading">
        <Container size="lg">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-[color:var(--sage)]/35 via-background to-[color:var(--cream)] p-8 sm:p-12 lg:p-14">
            <Fade>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-amber)]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Individualized plans
                  </p>
                  <h2
                    id="conditions-heading"
                    className="font-display mt-4 text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                  >
                    Personalized primary care{" "}
                    <span className="font-light italic text-primary">focused on you</span>
                  </h2>
                  <p className="mt-5 text-base leading-[1.75] text-muted-foreground">
                    Every patient has unique health goals. Our physicians develop individualized
                    treatment plans based on your medical history, lifestyle, risk factors, and
                    long-term wellness objectives.
                  </p>
                  <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Conditions we commonly treat
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {CONDITIONS.map((condition, i) => (
                    <motion.li
                      key={condition}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.4, ease: EASE }}
                    >
                      <span className="inline-flex rounded-full border border-border/60 bg-background/90 px-4 py-2 text-sm text-foreground/90 shadow-[var(--shadow-soft)] transition-colors hover:border-primary/25 hover:bg-[color:var(--mint)]">
                        {condition}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      {/* ── Physicians ── */}
      {physicians.length > 0 && (
        <section
          className="section-py border-t border-border/50 bg-[color:var(--mist)]/50"
          aria-labelledby="pcp-physicians-heading"
        >
          <Container size="lg">
            <Fade>
              <div className="mb-12 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                  Your care team
                </p>
                <h2
                  id="pcp-physicians-heading"
                  className="font-display mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
                >
                  Meet your primary care physicians
                </h2>
              </div>
            </Fade>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {physicians.map((p, i) => (
                <Fade key={p.id} delay={i * 0.06}>
                  <PhysicianCard
                    id={p.id}
                    name={p.name}
                    specialty={p.specialty}
                    image={p.image}
                    imageAlt={p.imageAlt}
                  />
                </Fade>
              ))}
            </div>
          </Container>
        </section>
      )}

      <PrimaryCareLocationSection />

      {/* ── FAQ ── */}
      <section className="section-py bg-background" aria-labelledby="pcp-faq-heading">
        <Container size="lg">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <Fade>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                Questions
              </p>
              <h2
                id="pcp-faq-heading"
                className="font-display mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Common questions about primary care at Umbrella Health in NYC.
              </p>
            </Fade>
            <Fade delay={0.06}>
              <FAQList items={FAQS} />
            </Fade>
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-py border-t border-border/50 bg-[color:var(--cream)]">
        <Container size="lg">
          <Fade>
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-background via-[color:var(--mint)]/30 to-[color:var(--sage)]/25 px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-14 sm:py-16">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent-amber-surface)] opacity-70 blur-2xl"
                aria-hidden
              />
              <Calendar className="mx-auto h-10 w-10 text-primary" aria-hidden />
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-3xl font-medium leading-[1.06] text-foreground sm:text-4xl">
                Schedule an appointment with a primary care doctor in NYC
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                Take the next step toward better health. Conveniently located in Lower Manhattan —
                call now or book online.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <BookButton>Book an appointment online</BookButton>
                <a
                  href={`tel:${SITE_PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call now
                </a>
              </div>
            </div>
          </Fade>
        </Container>
      </section>
    </main>
  );
}
