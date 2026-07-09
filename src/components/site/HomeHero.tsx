import Image from "next/image";
import { MapPin, Search } from "lucide-react";
import { Container } from "./primitives/Container";
import { HomeHeroBookingCard } from "./HomeHeroBookingCard";
import { HomeHeroSatisfactionBadge } from "./HomeHeroSatisfactionBadge";
import { HomeHeroSpecialtySelect } from "./HomeHeroSpecialtySelect";
import { IMG } from "@/data/images";
import { BOOKING_URL } from "@/lib/site";

const HERO_STATS = [
  { value: "12k+", label: "Patients served" },
  { value: "4", label: "Specialists on staff" },
  { value: "4.6/5", label: "Patient rating", star: true },
] as const;

export function HomeHero() {
  return (
    <section
      className="relative min-h-[min(92vh,880px)] overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src={IMG.clinicInterior}
        alt=""
        fill
        priority
        className="object-cover object-[72%_42%]"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/96 via-[42%] to-background/10 to-100%"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[min(92vh,880px)] flex-col justify-center py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-12">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/90 px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              Verified multispecialty care · NYC
            </p>

            <h1
              id="hero-heading"
              className="font-display mt-6 text-balance text-[2.2rem] font-normal leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem]"
            >
              Primary Care & Specialists in{" "}
              <span className="block font-display text-[1.05em] font-light italic leading-none text-primary">
                NYC
              </span>
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.02rem]">
              Your health deserves expert care at every stage. Umbrella Health brings together
              experienced primary care doctors in NYC, board-certified specialists, advanced
              diagnostics, and personalized treatment plans all under one roof. Conveniently located
              in Lower Manhattan, just minutes from Union Square, Greenwich Village, and the
              Flatiron District, we make high-quality, patient-centered healthcare easily accessible
              for individuals, families, and professionals across New York City.
            </p>

            <form
              action={BOOKING_URL}
              method="get"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 sm:mt-9"
            >
              <div className="relative flex flex-col overflow-visible rounded-[1.25rem] border border-border/50 bg-card shadow-[var(--shadow-card)] sm:flex-row sm:items-stretch sm:rounded-full sm:p-1.5">
                <div className="min-w-0 flex-1 sm:border-r sm:border-border/40">
                  <HomeHeroSpecialtySelect />
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-3 border-t border-border/40 px-4 py-3.5 sm:border-t-0 sm:py-2.5 sm:pr-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Location
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
                      New York, NY
                    </span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="mx-1.5 mb-1.5 flex items-center justify-center gap-2 rounded-[1rem] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow sm:mx-0 sm:mb-0 sm:rounded-full sm:px-7 sm:py-3"
                >
                  <Search className="h-4 w-4" aria-hidden />
                  Find doctor
                </button>
              </div>
            </form>

            <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-border/45 pt-7 sm:mt-9 sm:gap-5 sm:pt-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 flex items-baseline gap-1 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                    {stat.value}
                    {"star" in stat && stat.star && (
                      <span className="text-base text-primary" aria-hidden>
                        ★
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden flex-col items-end justify-center gap-5 lg:flex">
            <HomeHeroBookingCard />
            <HomeHeroSatisfactionBadge />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 lg:hidden">
          <HomeHeroBookingCard />
          <HomeHeroSatisfactionBadge />
        </div>
      </Container>
    </section>
  );
}
