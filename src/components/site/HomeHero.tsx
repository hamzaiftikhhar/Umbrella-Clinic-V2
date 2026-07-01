import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";

const words = ["Modern", "medicine,"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_70%)]"
        aria-hidden
      />

      <Container size="md" className="text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Multispecialty · Diagnostics · Longevity
        </p>

        <h1
          id="hero-heading"
          className="font-display text-balance text-5xl font-normal leading-[1.0] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl"
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block pr-[0.25em] font-normal">
              {w}
            </span>
          ))}
          <span className="block font-display text-[1.05em] font-light italic leading-none text-primary">
            measured.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Primary care, specialty medicine, advanced diagnostics, and preventive health, all under
          one roof in Lower Manhattan. From cardiology and sleep medicine to GLP-1 weight loss and
          in-house testing, every decision is backed by your numbers, not guesswork.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <BookButton>Book Appointment</BookButton>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            How It Works
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>

      <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border/50 sm:rounded-[36px]">
          <Image
            src="/images/Dr-rajat-hero-section.png"
            alt="Dr. Rajat Lamington at Umbrella Health clinic in New York City"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
            <span className="rounded-full border border-white/25 bg-black/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Union Square · NYC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
