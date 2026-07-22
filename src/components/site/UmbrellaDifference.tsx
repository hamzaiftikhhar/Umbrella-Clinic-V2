import { GeoImage } from "./primitives/GeoImage";
import { ArrowRight, Shield, Star } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { PremiumIcon } from "./primitives/IconBadge";
import { SiriSphereAccent } from "./SiriSphereAccent";
import { IMG } from "@/data/images";
import type { HealthIconName, LucideIconKey } from "@/components/icons/icon-keys";

const IMAGE_RADIUS = "1.75rem";
const FRAME_OFFSET = "14px";

const points: { healthIcon?: HealthIconName; iconKey?: LucideIconKey; title: string }[] = [
  {
    healthIcon: "stethoscope",
    title: "Experienced Primary Care Physicians & Specialists",
  },
  {
    healthIcon: "heart-rate",
    title: "Built Around You",
  },
  {
    healthIcon: "scanner",
    title: "Advanced Diagnostics",
  },
  {
    healthIcon: "hospital",
    title: "Multispeciality Healthcare",
  },
  {
    iconKey: "clock",
    title: "Same-Day Appointments & Coordinated Care",
  },
];

export function UmbrellaDifference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="section-py bg-background"
    >
      <Container>
        {/* Inspired hero panel — site palette, reference layout */}
        <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-card via-secondary/25 to-background p-8 shadow-[var(--shadow-card)] sm:p-10 lg:grid lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-12 lg:p-12 xl:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80 sm:text-xs">
              <Shield className="h-3.5 w-3.5" aria-hidden />
              Trusted NYC Healthcare
            </p>

            <h2
              id="difference-heading"
              className="font-display mt-6 max-w-xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl"
            >
              Why Patients Choose Umbrella Health In{" "}
              <span className="font-light italic text-primary">New York?</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experience patient-centered healthcare from trusted primary care doctors in NYC. At
              Umbrella Health, we combine clinical expertise, compassionate care, and personalized
              treatment to help you achieve better long-term health.
            </p>

            <div className="mt-10 flex flex-col gap-5 border-t border-border/50 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link
                to="/specialties"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                See How We&apos;re Different
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <div className="flex items-center gap-2.5 border-border/60 sm:border-l sm:pl-6">
                <div className="flex gap-0.5 text-rating-star" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Rated <span className="font-semibold text-foreground">4.6</span> by patients
                </p>
              </div>
            </div>
          </div>

          {/* Portrait — offset floating frame (flush top-left, extends top-right / right / bottom) */}
          <div
            className="relative mx-auto mt-10 w-full max-w-[480px] pr-[14px] pb-[14px] lg:mx-0 lg:mt-0 lg:ml-auto lg:max-w-none"
          >
            <div
              className="pointer-events-none absolute left-0 top-0 z-0 border-[1.5px] border-primary/20"
              style={{
                width: `calc(100% + ${FRAME_OFFSET})`,
                height: `calc(100% + ${FRAME_OFFSET})`,
                borderRadius: IMAGE_RADIUS,
              }}
              aria-hidden
            />

            <div
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-muted shadow-[var(--shadow-elegant)]"
            >
              <GeoImage
                src={IMG.premiumDoctorPortrait}
                alt="Dr. Rajat Lamington, board-certified physician at Umbrella Health NYC"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3 rounded-xl border border-border/40 bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:bottom-6 sm:right-6">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-icon-premium-surface text-icon-premium">
                  <Shield className="h-4 w-4" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-foreground">
                    Board-Certified Care
                  </p>
                  <p className="text-xs text-muted-foreground">Accredited NYC providers</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Premium feature panel — unified grid with dividers */}
        <div className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-border/50 bg-gradient-to-b from-secondary/35 via-card to-background shadow-[var(--shadow-card)] sm:mt-14">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
            aria-hidden
          />
          <div className="relative grid grid-cols-1 gap-px bg-border/35 sm:grid-cols-2 xl:grid-cols-5">
            {points.map((p, index) => (
              <div
                key={p.title}
                className="group relative flex min-h-[10.5rem] flex-col justify-between bg-card/95 p-6 transition-colors duration-300 hover:bg-secondary/25 sm:min-h-[11.5rem] sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <PremiumIcon
                    healthIcon={p.healthIcon}
                    iconKey={p.iconKey}
                    size="md"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    className="font-display text-2xl font-light leading-none tabular-nums text-primary/15 transition-colors duration-300 group-hover:text-primary/30"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem]">
                  {p.title}
                </h3>
                <div
                  className="absolute bottom-0 left-6 right-6 h-px scale-x-0 bg-primary/25 transition-transform duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
