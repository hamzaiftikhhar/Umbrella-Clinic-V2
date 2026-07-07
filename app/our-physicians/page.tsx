import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { PhysicianCard } from "@/components/site/primitives/PhysicianCard";
import { CareDiagram } from "@/components/site/CareDiagram";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { PHYSICIANS } from "@/data/physicians";
import { IMG } from "@/data/images";
import { physiciansSchema } from "@/lib/schema";

const seo = buildPageSeo({
  title: "Our Physicians — Umbrella Health NYC",
  description:
    "Meet the board-certified physicians at Umbrella Health — a multispecialty team delivering coordinated primary care and specialty medicine in Lower Manhattan, NYC.",
  path: "/our-physicians",
  crumbs: [{ label: "Home", to: "/" }, { label: "Our Physicians" }],
  geo: true,
  ogImage: "/images/dr-rajat.png",
  extraSchema: physiciansSchema(PHYSICIANS),
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="The care team"
        italic="The people behind"
        title="your numbers."
        description="A multispecialty team practicing from one connected record  so primary care, specialists, and diagnostics move together, not in silos."
        image={IMG.drRajat}
        imageAlt="Umbrella Health founding physician Dr. Rajat Lamington"
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Physicians" }]}
      />

      <section className="py-16 sm:py-24" aria-labelledby="providers-heading">
        <Container size="lg">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
              All providers
            </p>
            <h2
              id="providers-heading"
              className="font-display text-balance text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
            >
              The physicians you&apos;ll{" "}
              <span className="font-light italic text-primary">actually see.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PHYSICIANS.map((p, i) => (
              <PhysicianCard
                key={p.id}
                id={p.id}
                name={p.name}
                specialty={p.specialty}
                image={p.image}
                imageAlt={p.imageAlt}
                priority={i < 3}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container size="lg">
          <SectionHeading
            as="h2"
            eyebrow="The method"
            title="One connected"
            accent="standard of care."
            description="Four moves we make for every patient: deep diagnostics, a comprehensive plan, personalized treatment, and ongoing measurement."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>
      <CareDiagram />
      <CTABanner eyebrow="Get started" title="Meet your" italic="care team." />
    </main>
  );
}

export default function RoutePage() {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <Page />
    </>
  );
}
