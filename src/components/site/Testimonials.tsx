import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { TestimonialCard } from "./primitives/TestimonialCard";
import { patientReviews } from "@/data/reviews";

export function Testimonials() {
  const displayReviews = patientReviews.slice(0, 8);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-background py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Verified patient reviews"
          title="Real stories from"
          accent="real people."
          description="See why patients across New York trust Umbrella Health for primary care, specialty medicine, diagnostics, and preventive health."
        />
      </Container>

      <div className="relative mt-12 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]" />

        <div className="flex gap-5 overflow-x-auto px-5 pb-8 sm:px-8 xl:px-[calc((100vw-1216px)/2+2rem)] snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {displayReviews.map((r) => (
            <div key={r.name} className="w-[85vw] max-w-[340px] shrink-0 snap-start">
              <TestimonialCard {...r} rating={5} />
            </div>
          ))}

          <div className="flex w-[200px] shrink-0 snap-start items-center justify-center p-6 pr-12 sm:pr-24">
            <Link
              to="/reviews"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-primary-glow"
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
