"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";
import { CLINIC_MAP_EMBED_URL, SITE_ADDRESS } from "@/lib/site";

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

export function PrimaryCareLocationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-[color:var(--cream)] py-24 sm:py-32 lg:py-36"
      aria-labelledby="location-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,color-mix(in_oklab,var(--sage)_55%,transparent),transparent)]"
        aria-hidden
      />

      <Container size="lg" className="relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20 xl:gap-24">
          {/* Copy */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-teal)]">
              Our location
            </p>

            <h2
              id="location-heading"
              className="font-display mt-6 max-w-lg text-balance text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.25rem]"
            >
              Conveniently located in{" "}
              <span className="font-light italic text-primary">Lower Manhattan</span>
            </h2>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4 rounded-2xl border border-border/50 bg-background/80 p-6 shadow-[var(--shadow-soft)]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--accent-teal-surface)]">
                  <MapPin className="h-5 w-5 text-[color:var(--accent-teal)]" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Visit us at</p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{SITE_ADDRESS}</p>
                  <p className="mt-2 text-sm text-muted-foreground">NoHo · Spring Street · 6 train</p>
                </div>
              </div>

              <p className="max-w-md text-lg leading-[1.8] text-muted-foreground">
                Our practice proudly serves patients throughout New York City and the neighborhoods
                below — whether you live nearby or commute into Manhattan for care.
              </p>

              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Get directions & hours
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </motion.div>

          {/* Map + neighborhoods */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="space-y-10"
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-border/50 shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[16/11] sm:aspect-[16/10]">
                <Image
                  src={IMG.clinicExterior}
                  alt="Umbrella Health clinic exterior on Lafayette Street, NoHo NYC"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <p className="font-display text-2xl italic text-primary-foreground">NoHo, NYC</p>
                  <p className="mt-1 text-sm text-primary-foreground/85">200 Lafayette Street</p>
                </div>
              </div>
              <iframe
                title="Map showing Umbrella Health at 200 Lafayette Street"
                src={CLINIC_MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-44 w-full border-0 border-t border-border/50 sm:h-52"
              />
            </div>

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Neighborhoods we serve
              </p>
              <ul className="flex flex-wrap gap-3">
                {NEIGHBORHOODS.map((n, i) => (
                  <li
                    key={n}
                    className={
                      i === 0
                        ? "rounded-full border border-primary/20 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "rounded-full border border-border/60 bg-background px-5 py-2.5 text-sm text-foreground/85 shadow-[var(--shadow-soft)]"
                    }
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
