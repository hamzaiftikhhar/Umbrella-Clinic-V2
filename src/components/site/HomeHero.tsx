import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import { Reveal } from "./primitives/Reveal";
import { IMG } from "@/data/images";

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
            <Sparkles className="h-3 w-3" />
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
            <span className="block font-display italic font-medium text-primary">measured.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Primary care, specialty medicine, advanced diagnostics, and preventive health, all under one roof in Lower Manhattan.{" "}
            <span className="text-foreground/80 font-medium">Care guided by data, not guesswork.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookButton>Book appointment</BookButton>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              Explore services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={0.2} className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
        <div className="group relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border/60 shadow-[var(--shadow-elegant)] sm:rounded-[36px]">
          <Image
            src="/images/Dr-rajat-hero-section.png"
            alt="Dr. Rajat at Umbrella Health clinic in New York City"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/5 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <p className="max-w-sm font-display text-2xl italic text-white sm:text-3xl">
              Care that keeps up with you.
            </p>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
              NoHo · NYC
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
