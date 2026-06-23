"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { Wordmark } from "./primitives/Wordmark";
import { IMG } from "@/data/images";

/** Two-ring orbital layout constants */
const INNER_RING_RADIUS = 200;
const OUTER_RING_RADIUS = 325;
const RING_STEP_DEG = 72;
const OUTER_RING_OFFSET_DEG = 36;

const INNER_ANGLES = Array.from({ length: 5 }, (_, i) => i * RING_STEP_DEG);
const OUTER_ANGLES = Array.from({ length: 5 }, (_, i) => i * RING_STEP_DEG + OUTER_RING_OFFSET_DEG);

interface ServiceSeed {
  name: string;
  image: string;
  href: string;
}

interface OrbitService extends ServiceSeed {
  angle: number;
  radius: number;
  speed: number;
}

const innerRingSeeds: ServiceSeed[] = [
  { name: "Primary Care", image: IMG.consult, href: "/specialties/primary-care" },
  { name: "Cardiology", image: IMG.ekg, href: "/specialties/cardiology-vascular" },
  { name: "Neurology", image: IMG.doctorPatient, href: "/specialties/neurology" },
  { name: "Sleep Medicine", image: IMG.sleepStudy, href: "/specialties/sleep-medicine" },
  { name: "Pain Management", image: IMG.examRoom, href: "/specialties/pain-management" },
];

const outerRingSeeds: ServiceSeed[] = [
  { name: "GLP-1 Weight Loss", image: IMG.glp1Hero, href: "/weight-loss-glp1" },
  { name: "Diagnostics", image: IMG.microscope, href: "/diagnostics" },
  { name: "Biomarkers", image: IMG.lab, href: "/diagnostics/biomarkers" },
  { name: "Imaging", image: IMG.ultrasound, href: "/diagnostics/imaging-cardiac" },
  {
    name: "Preventive Health",
    image: IMG.longevityHero,
    href: "/longevity/healthspan-programs",
  },
];

const services: OrbitService[] = [
  ...innerRingSeeds.map((seed, i) => ({
    ...seed,
    angle: INNER_ANGLES[i],
    radius: INNER_RING_RADIUS,
    speed: 46,
  })),
  ...outerRingSeeds.map((seed, i) => ({
    ...seed,
    angle: OUTER_ANGLES[i],
    radius: OUTER_RING_RADIUS,
    speed: 64,
  })),
];

const CANVAS_SIZE = (OUTER_RING_RADIUS + 96) * 2;
const CANVAS_CENTER = CANVAS_SIZE / 2;

function OrbitArcs() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-primary/12"
      viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <circle
        cx={CANVAS_CENTER}
        cy={CANVAS_CENTER}
        r={INNER_RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx={CANVAS_CENTER}
        cy={CANVAS_CENTER}
        r={OUTER_RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="7 11"
      />
      <path
        d={`M ${CANVAS_CENTER} ${CANVAS_CENTER - INNER_RING_RADIUS} A ${INNER_RING_RADIUS} ${INNER_RING_RADIUS} 0 0 1 ${CANVAS_CENTER + INNER_RING_RADIUS} ${CANVAS_CENTER}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d={`M ${CANVAS_CENTER + OUTER_RING_RADIUS} ${CANVAS_CENTER} A ${OUTER_RING_RADIUS} ${OUTER_RING_RADIUS} 0 0 1 ${CANVAS_CENTER} ${CANVAS_CENTER + OUTER_RING_RADIUS}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

function OrbitItem({ service }: { service: OrbitService }) {
  return (
    <div
      className="orbit-item absolute top-1/2 left-1/2 z-30 -mt-[2.4rem] -ml-[2.375rem] w-[4.75rem]"
      style={
        {
          "--angle": `${service.angle}deg`,
          "--radius": `${service.radius}px`,
          "--speed": `${service.speed}s`,
        } as CSSProperties
      }
    >
      <Link
        href={service.href}
        className="group flex w-[4.75rem] flex-col items-center outline-none"
      >
        <div className="orbit-sphere relative h-[3.25rem] w-[3.25rem] shrink-0 overflow-hidden rounded-full ring-2 ring-white transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:ring-primary/30 sm:h-[3.75rem] sm:w-[3.75rem]">
          <Image src={service.image} alt="" fill className="object-cover" sizes="64px" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-black/35" />
          <div className="pointer-events-none absolute inset-x-1.5 top-1 h-2 rounded-full bg-white/40 blur-[2px]" />
        </div>
        <span className="orbit-label mt-1.5 w-full text-center text-[8px] font-semibold uppercase leading-[1.25] tracking-[0.1em] text-muted-foreground transition-colors duration-500 group-hover:text-primary sm:text-[9px] sm:tracking-[0.12em]">
          {service.name}
        </span>
      </Link>
    </div>
  );
}

export function CareDiagram() {
  return (
    <section
      id="how"
      aria-labelledby="diagram-heading"
      className="relative overflow-hidden bg-background py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-[38%] h-[min(640px,55vw)] w-[min(640px,55vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--mint)]/30 blur-[100px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 lg:pl-10 xl:gap-16 xl:pl-16 2xl:pl-24">
          {/* Orbital graphic — wider column, shifted right for visual centering */}
          <div className="lg:col-span-7 lg:pr-4 xl:pr-8">
            <div
              className="orbit-system orbit-system--split relative mx-auto aspect-square w-full max-w-[min(720px,100%)] lg:ml-auto lg:max-w-none"
              style={{ maxHeight: `${CANVAS_SIZE}px` }}
            >
              <OrbitArcs />

              <div className="absolute top-1/2 left-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white shadow-[0_0_80px_-16px_color-mix(in_oklab,var(--primary)_35%,transparent),inset_0_1px_0_rgba(255,255,255,1)] sm:h-40 sm:w-40">
                <Wordmark imageClassName="h-28 w-auto sm:h-32" />
              </div>

              {services.map((service) => (
                <OrbitItem key={service.name} service={service} />
              ))}
            </div>
          </div>

          {/* Copy — narrower column */}
          <div className="lg:col-span-5 lg:pl-2 xl:pl-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
              How It Works
            </p>
            <h2
              id="diagram-heading"
              className="max-w-lg text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[2.75rem]"
            >
              One Team. One Record.{" "}
              <span className="font-display font-light text-primary">One Umbrella.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your primary care physician, specialists, diagnostics, and preventive health strategy
              all work from the same information. Every test, every result, and every decision stays
              connected, so your care moves faster and makes more sense.
            </p>
            <div className="mt-10">
              <BookButton>Book Your First Visit with Us</BookButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
