"use client";

import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { TestimonialCard } from "@/components/site/primitives/TestimonialCard";
import { Reveal } from "@/components/site/primitives/Reveal";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { IMG } from "@/data/images";
import { patientReviews } from "@/data/reviews";

export function ReviewsPageClient() {
  const [showAll, setShowAll] = useState(false);
  const displayReviews = showAll ? patientReviews : patientReviews.slice(0, 8);

  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        italic="Real stories from"
        title="real patients."
        description="What it actually feels like to be a patient at Umbrella. Help others find data-driven care  leave a review after your visit."
        image={IMG.patientHappy}
        imageAlt="Smiling Umbrella Health patient"
        crumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
        tone="mint"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {displayReviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.04}>
                <TestimonialCard {...r} rating={5} />
              </Reveal>
            ))}
          </div>

          {!showAll && patientReviews.length > 8 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-glow hover:shadow-md active:scale-95"
              >
                See More
              </button>
            </div>
          )}
        </Container>
      </section>
      <CTABanner />
    </main>
  );
}
