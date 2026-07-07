"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin, Train } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";
import { CLINIC_GOOGLE_MAPS_URL, SITE_ADDRESS } from "@/lib/site";
import { cn } from "@/lib/utils";

const NEIGHBORHOODS = [
  "Lower Manhattan",
  "Union Square",
  "Greenwich Village",
  "Chelsea",
  "Flatiron District",
  "SoHo",
  "NoHo",
  "Gramercy",
  "East Village",
  "West Village",
  "Midtown Manhattan",
  "Throughout New York City",
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function LocationImageCard() {
  return (
    <a
      href={CLINIC_GOOGLE_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[1.75rem] border border-border/50 bg-background shadow-[var(--shadow-elegant)] ring-1 ring-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Open Umbrella Health location in Google Maps"
    >
      <div className="relative aspect-[5/4] sm:aspect-[4/3] lg:aspect-[5/4] lg:min-h-[440px]">
        <Image
          src={IMG.clinicExterior}
          alt="Umbrella Health clinic at 200 Lafayette Street, NoHo, New York City"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 560px"
        />

        {/* Default caption — fades on hover */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-7 transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0 sm:p-8">
          <p className="font-display text-2xl italic text-white">NoHo, NYC</p>
          <p className="mt-1 text-sm text-white/85">200 Lafayette Street</p>
        </div>

        {/* Hover overlay + single CTA */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-primary/55 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden
        >
          <span className="inline-flex translate-y-3 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Mobile — always show button hint */}
      <p className="border-t border-border/50 bg-background px-5 py-3 text-center text-xs text-muted-foreground sm:hidden">
        Tap to open in Google Maps
      </p>
    </a>
  );
}

export function PrimaryCareLocationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
      aria-labelledby="location-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_oklab,var(--sage)_14%,transparent)_0%,transparent_50%)]"
        aria-hidden
      />

      <Container size="lg" className="relative">
        {/* Header + image */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-teal)]">
              Our location
            </p>

            <h2
              id="location-heading"
              className="font-display mt-6 max-w-lg text-balance text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-foreground sm:text-5xl"
            >
              Conveniently located in{" "}
              <span className="font-light italic text-primary">Lower Manhattan</span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-[1.8] text-muted-foreground">
              {SITE_ADDRESS}. A calm, modern clinic in NoHo — steps from Spring Street and
              accessible from across Manhattan.
            </p>

            <ul className="mt-10 space-y-5 border-t border-border/50 pt-10">
              <li className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--accent-teal-surface)]">
                  <MapPin className="h-4 w-4 text-[color:var(--accent-teal)]" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Clinic address</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{SITE_ADDRESS}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--mint)]">
                  <Train className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Getting here</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    6 train at Spring Street · walkable from SoHo, Chelsea & Union Square
                  </p>
                </div>
              </li>
            </ul>

            <Link
              href="/contact-us"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Full directions & hours
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
          >
            <LocationImageCard />
            <p className="mt-4 hidden text-center text-xs text-muted-foreground sm:block">
              Hover the image to open Google Maps
            </p>
          </motion.div>
        </div>

        {/* Neighborhoods — full-width panel */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="mt-20 lg:mt-28"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-[color:var(--cream)] shadow-[var(--shadow-soft)]">
            <div className="flex flex-col gap-4 border-b border-border/50 px-6 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:py-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                  Service area
                </p>
                <h3 className="font-display mt-3 text-2xl font-medium text-foreground sm:text-3xl">
                  Neighborhoods we serve
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
                Primary care for adults across Lower Manhattan and nearby communities.
              </p>
            </div>

            <ul className="grid gap-px bg-border/45 sm:grid-cols-2 lg:grid-cols-3">
              {NEIGHBORHOODS.map((name, i) => (
                <li
                  key={name}
                  className={cn(
                    "flex items-center justify-between gap-4 bg-background px-6 py-4 sm:px-8 sm:py-5",
                    i === 0 && "bg-primary/[0.05]",
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-medium",
                      i === 0 ? "text-primary" : "text-foreground",
                    )}
                  >
                    {name}
                  </span>
                  <span className="font-display text-xs tabular-nums text-muted-foreground/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
