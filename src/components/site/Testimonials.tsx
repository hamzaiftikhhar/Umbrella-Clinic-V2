import { Link } from "@tanstack/react-router";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { TestimonialCard } from "./primitives/TestimonialCard";
import { patientReviews } from "@/data/reviews";

export function Testimonials() {
  const displayReviews = patientReviews.slice(0, 8);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            as="h2"
            title="Real stories from"
            accent="real people."
            description="See why Umbrella Health is one of New York City's top primary care clinics."
          />
          <Link
            to="/reviews"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
          >
            More Reviews
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>
      
      {/* Horizontal scroll container with left and right fades */}
      <div className="relative mt-14 w-full">
        {/* Left edge fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]" />

        <div className="flex gap-5 overflow-x-auto px-5 pb-8 sm:px-8 xl:px-[calc((100vw-1216px)/2+2rem)] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {displayReviews.map((r) => (
            <div key={r.name} className="w-[85vw] max-w-[340px] shrink-0 snap-start">
              <TestimonialCard {...r} rating={5} />
            </div>
          ))}
          
          {/* View all card */}
          <div className="flex w-[200px] shrink-0 snap-start items-center justify-center p-6 pr-12 sm:pr-24">
            <Link
              to="/reviews"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl text-primary shadow-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              aria-label="View all reviews"
            >
              →
            </Link>
          </div>
        </div>
        
        {/* Right edge fade effect */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24 xl:w-[calc((100vw-1216px)/2+2rem)]" />
      </div>
    </section>
  );
}
