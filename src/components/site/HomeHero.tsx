
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
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
        <p
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary/80 backdrop-blur"
        >
          <Sparkles className="h-3 w-3" />
          Multispecialty · Diagnostics · Longevity
        </p>

        <h1
          id="hero-heading"
          className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {words.map((w, i) => (
            <span
              key={i}
              className="inline-block pr-[0.25em]"
            >
              {w}
            </span>
          ))}
          <span
            className="block font-display italic font-medium text-primary"
          >
            measured.
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A new kind of NYC clinic — board-certified primary care and specialists,
          in-house diagnostics, and longevity programs that actually track your numbers.
          Insurance accepted.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <BookButton>Book appointment</BookButton>
          <a
            href="#how"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/30"
          >
            How it works
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>

      <div
        className="mx-auto mt-14 max-w-6xl px-5 sm:px-8"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border/70 shadow-[var(--shadow-elegant)] sm:rounded-[36px]">
          <img
            src={IMG.consult}
            alt="Umbrella Health physician reviewing diagnostic results with a patient in a modern NYC clinic"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
