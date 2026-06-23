import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { TestimonialCard } from "./primitives/TestimonialCard";
import { patientReviews } from "@/data/reviews";

export function Testimonials() {
  const displayReviews = patientReviews.slice(0, 8);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-secondary/30 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              as="h2"
              eyebrow="Patient stories"
              title="Real stories from"
              accent="real people."
              description="See why Umbrella Health is one of New York City's top primary care clinics."
            />
            <Link
              to="/reviews"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              More reviews
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>

      <div className="relative mt-14 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]" />

        <div className="flex gap-5 overflow-x-auto px-5 pb-8 sm:px-8 xl:px-[calc((100vw-1216px)/2+2rem)] snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {displayReviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.04}
              className="w-[85vw] max-w-[340px] shrink-0 snap-start"
            >
              <TestimonialCard {...r} rating={5} />
            </Reveal>
          ))}

          <div className="flex w-[200px] shrink-0 snap-start items-center justify-center p-6 pr-12 sm:pr-24">
            <Link
              to="/reviews"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:scale-110 hover:bg-primary-glow hover:shadow-[var(--shadow-elegant)]"
              aria-label="View all reviews"
            >
              →
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]" />
      </div>
    </section>
  );
}
