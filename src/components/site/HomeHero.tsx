import { ArrowRight } from "lucide-react";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { Reveal } from "./primitives/Reveal";
import { HeroParallaxImage } from "./HeroParallaxImage";

const words = ["Modern", "medicine,"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <Container size="md" className="text-center">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary/80 backdrop-blur">
            Multispecialty · Diagnostics · Longevity
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            id="hero-heading"
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block pr-[0.25em]">
                {w}
              </span>
            ))}
            <span className="block font-display text-[1.05em] font-light italic text-primary">
              measured.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Primary care, specialty medicine, advanced diagnostics, and preventive health, all under
            one roof in Lower Manhattan. From cardiology and sleep medicine to GLP-1 weight loss and
            in-house testing, every decision is backed by your numbers, not guesswork.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <BookButton className="shadow-[0_12px_40px_-16px_color-mix(in_oklab,var(--primary)_55%,transparent)]">
              Book Appointment
            </BookButton>
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/50 px-7 py-3.5 text-sm font-medium text-foreground shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-background hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)]"
            >
              How It Works
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={0.2} className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
        <HeroParallaxImage />
      </Reveal>
    </section>
  );
}
