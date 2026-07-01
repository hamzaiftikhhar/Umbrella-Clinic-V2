import Image from "next/image";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/primitives/Container";
import { PhysicianCard } from "@/components/site/primitives/PhysicianCard";
import { CareDiagram } from "@/components/site/CareDiagram";
import { CTABanner } from "@/components/site/primitives/CTABanner";
import { SectionHeading } from "@/components/site/primitives/SectionHeading";
import { Link } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { PHYSICIANS } from "@/data/physicians";
import { IMG } from "@/data/images";

const founder = PHYSICIANS.find((p) => p.founder);
const team = PHYSICIANS.filter((p) => !p.founder);

const seo = buildPageSeo({
  title: "Our Physicians — Umbrella Health NYC",
  description:
    "Meet the physicians behind Umbrella Health — a multispecialty team delivering coordinated, data-led care in Lower Manhattan.",
  path: "/our-physicians",
  crumbs: [{ label: "Home", to: "/" }, { label: "Our Physicians" }],
  extraSchema: PHYSICIANS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    name: p.name,
    worksFor: { "@type": "MedicalClinic", name: "Umbrella Health" },
  })),
});
export const metadata = seo.metadata;

function Page() {
  return (
    <main>
      <PageHero
        eyebrow="The care team"
        italic="The people behind"
        title="your numbers."
        description="A multispecialty team practicing from one connected record — so primary care, specialists, and diagnostics move together, not in silos."
        image={IMG.founderAlt}
        imageAlt="Umbrella Health care team"
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Physicians" }]}
      />

      {/* Featured founder — asymmetric editorial block */}
      {founder && (
        <section className="py-16 sm:py-24" aria-labelledby="founder-heading">
          <Container size="lg">
            <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              <div className="relative isolate aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
                <Image
                  src={IMG.drRajat}
                  alt={`${founder.name}, ${founder.title} at Umbrella Health`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-5 left-5 rounded-xl bg-primary/85 px-4 py-2.5 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-primary-foreground">{founder.name}</p>
                  <p className="text-xs text-primary-foreground/75">{founder.title}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" aria-hidden />
                  {founder.title}
                </p>
                <h2
                  id="founder-heading"
                  className="font-display text-balance text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl"
                >
                  {founder.name}
                </h2>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {founder.bio}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {founder.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs text-foreground/75"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Link
                    to="/visit-us"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-premium hover:text-primary"
                  >
                    Visit the practice
                    <ArrowRight className="h-4 w-4 transition-premium group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Wider team */}
      {team.length > 0 && (
        <section className="pb-16 sm:pb-24" aria-labelledby="team-heading">
          <Container size="lg">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
                Working alongside
              </p>
              <h2
                id="team-heading"
                className="font-display text-balance text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                The physicians you&apos;ll{" "}
                <span className="font-light italic text-primary">actually see.</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
              {team.map((p) => (
                <PhysicianCard
                  key={p.id}
                  name={p.name}
                  title={p.title}
                  focus={p.focus}
                  accent={p.accent}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

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
