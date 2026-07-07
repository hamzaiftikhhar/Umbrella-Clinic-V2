"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BookButton } from "./primitives/BookButton";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";
import { cn } from "@/lib/utils";

export interface AudienceSegment {
  id: string;
  label: string;
  title: string;
  body: string;
  items: string[];
  cta: string;
  image: string;
  imageAlt: string;
  accent: string;
  accentSurface: string;
}

export const PRIMARY_CARE_AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: "womens",
    label: "Women's health",
    title: "Women's Primary Care in New York City",
    body: "Women's health needs change throughout every stage of life. Our physicians provide personalized women's primary care in New York City, focusing on preventive care, wellness, chronic disease management, and coordinated specialty care when needed.",
    items: [
      "Annual Wellness Exams",
      "Preventive Screenings",
      "Birth Control Counseling",
      "Menopause Support",
      "Routine Lab Testing",
      "Chronic Disease Management",
    ],
    cta: "Book your appointment online",
    image: IMG.womensHealth,
    imageAlt: "Women's primary care physician consulting with patient in NYC",
    accent: "var(--accent-teal)",
    accentSurface: "var(--accent-teal-surface)",
  },
  {
    id: "mens",
    label: "Men's health",
    title: "Men's Primary Care in New York City",
    body: "Our physicians help men stay healthy through preventive medicine, early diagnosis, and long-term health management tailored to individual needs.",
    items: [
      "Annual Physicals",
      "Heart Health Screening",
      "Diabetes Management",
      "Cholesterol Monitoring",
      "Blood Pressure Checks",
      "Lifestyle Counseling",
    ],
    cta: "Schedule your visit today",
    image: IMG.mensHealth,
    imageAlt: "Men's primary care doctor at Umbrella Health Lower Manhattan",
    accent: "var(--navy-700)",
    accentSurface: "var(--sage)",
  },
  {
    id: "lgbtq",
    label: "Inclusive care",
    title: "Inclusive LGBTQ+ Primary Care in New York City",
    body: "Healthcare should be welcoming, respectful, and personalized. Our practice proudly provides LGBTQ+ primary care in New York City with confidential services tailored to each patient's unique healthcare needs.",
    items: [
      "Preventive Healthcare",
      "HIV/STI Screening",
      "Mental Health Support",
      "Routine Physicals",
      "Sexual Health Services",
      "Gender-Affirming Specialist Referrals",
    ],
    cta: "Schedule your visit today",
    image: IMG.inclusiveCare,
    imageAlt: "Inclusive primary care consultation at Umbrella Health NYC",
    accent: "var(--accent-emerald)",
    accentSurface: "var(--accent-emerald-surface)",
  },
  {
    id: "transgender",
    label: "Transgender care",
    title: "Compassionate Transgender Primary Care",
    body: "We are committed to providing respectful transgender primary care in New York City, supporting patients with preventive care, wellness visits, chronic disease management, and coordinated referrals in an inclusive clinical environment.",
    items: [
      "Preventive Wellness Visits",
      "Chronic Disease Management",
      "Coordinated Specialist Referrals",
      "Routine Lab Testing",
      "Mental Health Coordination",
      "Personalized Care Plans",
    ],
    cta: "Book your appointment online",
    image: IMG.transgenderCare,
    imageAlt: "Welcoming clinic environment for transgender primary care NYC",
    accent: "var(--accent-amber)",
    accentSurface: "var(--accent-amber-surface)",
  },
  {
    id: "concierge",
    label: "Concierge model",
    title: "Concierge Primary Care in New York City",
    body: "Our concierge primary care model offers enhanced access, personalized attention, and a stronger physician-patient relationship for individuals seeking a more customized healthcare experience.",
    items: [
      "Longer Appointments",
      "Direct Physician Access",
      "Preventive Health Planning",
      "Personalized Wellness Strategies",
      "Coordinated Care",
    ],
    cta: "Book online",
    image: IMG.conciergeCare,
    imageAlt: "Concierge primary care experience at Umbrella Health NYC",
    accent: "var(--primary)",
    accentSurface: "var(--mint)",
  },
];

const SEGMENTS = PRIMARY_CARE_AUDIENCE_SEGMENTS;
const COUNT = SEGMENTS.length;
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function ChapterCounter({ target }: { target: number }) {
  const [display, setDisplay] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    const from = prev.current;
    const to = target;
    prev.current = to;
    if (from === to) return;

    const duration = 500;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <span className="font-display text-7xl font-light tabular-nums tracking-[-0.04em] text-foreground/12 xl:text-8xl">
      {String(display).padStart(2, "0")}
    </span>
  );
}

function StickyTimeline({ activeIndex }: { activeIndex: number }) {
  const progress = COUNT > 1 ? (activeIndex / (COUNT - 1)) * 100 : 100;

  return (
    <nav aria-label="Care pathway chapters" className="relative">
      <div className="absolute bottom-2 left-[11px] top-2 w-px bg-border/60" aria-hidden />
      <motion.div
        className="absolute left-[11px] top-2 w-px origin-top bg-primary"
        animate={{ height: `${progress}%` }}
        transition={{ duration: 0.35, ease: EASE }}
        aria-hidden
      />
      <ol className="relative space-y-7">
        {SEGMENTS.map((segment, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          return (
            <li key={segment.id} className="flex items-center gap-3">
              <motion.div
                className="relative z-10 h-[22px] w-[22px] shrink-0 rounded-full border-2 bg-[color:var(--cream)]"
                animate={{
                  borderColor: isActive || isPast ? segment.accent : "var(--border)",
                  scale: isActive ? 1.12 : 1,
                }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {isActive && (
                  <motion.div
                    layoutId="pathway-active-dot"
                    className="absolute inset-[3px] rounded-full"
                    style={{ backgroundColor: segment.accent }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                )}
              </motion.div>
              <span
                className={cn(
                  "text-[10px] font-medium uppercase leading-snug tracking-[0.14em] transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground/50",
                )}
                style={isActive ? { color: segment.accent } : undefined}
              >
                {segment.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function PathwayChapter({
  segment,
  index,
  chapterRef,
}: {
  segment: AudienceSegment;
  index: number;
  chapterRef: (el: HTMLElement | null) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <article
      ref={chapterRef}
      data-chapter-index={index}
      id={`pathway-${segment.id}`}
      className="scroll-mt-28 border-t border-border/40 py-16 first:border-t-0 sm:py-20 lg:py-24"
      aria-labelledby={`pathway-title-${segment.id}`}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.32, ease: EASE }}
        className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-14"
      >
        <div className="min-w-0">
          <div className="mb-6 flex items-center gap-4 lg:hidden">
            <span className="font-display text-4xl font-light tabular-nums text-foreground/15" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ backgroundColor: segment.accentSurface, color: segment.accent }}
            >
              {segment.label}
            </span>
          </div>

          <span
            className="hidden rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] lg:inline-flex"
            style={{
              borderColor: `color-mix(in oklab, ${segment.accent} 22%, transparent)`,
              backgroundColor: segment.accentSurface,
              color: segment.accent,
            }}
          >
            {segment.label}
          </span>

          <h3
            id={`pathway-title-${segment.id}`}
            className="font-display mt-5 text-balance text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-4xl lg:mt-6"
          >
            {segment.title}
          </h3>

          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-lg sm:leading-[1.75]">
            {segment.body}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-x-6">
            {segment.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/88">
                <span
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                  style={{ backgroundColor: segment.accentSurface }}
                >
                  <Check className="h-3 w-3" style={{ color: segment.accent }} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <BookButton>{segment.cta}</BookButton>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              Same physicians, tailored approach
            </span>
          </div>
        </div>

        <div className="lg:sticky lg:top-32">
          <div className="relative mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-none">
            <div
              className="absolute -right-3 -top-3 h-20 w-20 rounded-full opacity-40 blur-2xl"
              style={{ backgroundColor: segment.accent }}
              aria-hidden
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-card)] ring-1 ring-border/40">
              <Image
                src={segment.image}
                alt={segment.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 260px, 280px"
                priority={index === 0}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

export function PrimaryCareAudienceShowcase() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const liveRef = useRef<HTMLDivElement>(null);
  const chapterEls = useRef<(HTMLElement | null)[]>([]);
  const ratios = useRef<number[]>(Array(COUNT).fill(0));

  const setChapterRef = useCallback((index: number) => {
    return (el: HTMLElement | null) => {
      chapterEls.current[index] = el;
    };
  }, []);

  useEffect(() => {
    const elements = chapterEls.current.filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const pickActive = () => {
      let bestIndex = 0;
      let bestRatio = 0;
      ratios.current.forEach((ratio, i) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = i;
        }
      });
      if (bestRatio > 0.05) {
        setActiveIndex(bestIndex);
        if (liveRef.current) {
          const s = SEGMENTS[bestIndex];
          liveRef.current.textContent = `${s.label}: ${s.title}`;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number((entry.target as HTMLElement).dataset.chapterIndex);
          if (!Number.isNaN(i)) ratios.current[i] = entry.intersectionRatio;
        });
        pickActive();
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
        rootMargin: "-15% 0px -15% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (reduceMotion) {
    return (
      <section className="section-py bg-[color:var(--cream)]" aria-labelledby="audience-showcase-heading">
        <Container size="lg">
          <h2 id="audience-showcase-heading" className="font-display text-center text-4xl font-medium text-foreground">
            Care designed for <span className="italic text-primary">who you are</span>
          </h2>
          <div className="mt-16 space-y-20">
            {SEGMENTS.map((segment, index) => (
              <PathwayChapter
                key={segment.id}
                segment={segment}
                index={index}
                chapterRef={setChapterRef(index)}
              />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section aria-labelledby="audience-showcase-heading" className="bg-[color:var(--cream)]">
      <div className="px-5 py-20 sm:px-8 sm:py-28">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
              Personalized pathways
            </p>
            <h2
              id="audience-showcase-heading"
              className="font-display mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl"
            >
              Care designed for{" "}
              <span className="font-light italic text-primary">who you are</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Five physician-led pathways — scroll naturally through each chapter.
            </p>
          </div>
        </Container>
      </div>

      {/* Mobile progress */}
      <Container size="lg" className="mb-2 px-5 sm:px-8 lg:hidden">
        <div className="flex gap-1.5" aria-hidden>
          {SEGMENTS.map((s, i) => (
            <div key={s.id} className="h-0.5 flex-1 overflow-hidden rounded-full bg-border/50">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: s.accent }}
                animate={{ width: i <= activeIndex ? "100%" : "18%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
      </Container>

      <Container size="lg" className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="lg:grid lg:grid-cols-[130px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[150px_minmax(0,1fr)] xl:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <ChapterCounter target={activeIndex + 1} />
                <p
                  className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: SEGMENTS[activeIndex].accent }}
                >
                  Chapter {activeIndex + 1} of {COUNT}
                </p>
              </div>
              <StickyTimeline activeIndex={activeIndex} />
            </div>
          </aside>

          <div className="min-w-0">
            {SEGMENTS.map((segment, index) => (
              <PathwayChapter
                key={segment.id}
                segment={segment}
                index={index}
                chapterRef={setChapterRef(index)}
              />
            ))}
          </div>
        </div>
      </Container>

      <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />
    </section>
  );
}
