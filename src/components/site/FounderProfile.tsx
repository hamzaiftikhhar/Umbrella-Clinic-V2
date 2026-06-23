import Image from "next/image";
import { ArrowRight, GraduationCap, Award, BadgeCheck } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { IMG } from "@/data/images";

const creds = [
  { icon: GraduationCap, label: "Columbia / NewYork-Presbyterian" },
  { icon: BadgeCheck, label: "Board-certified, Internal Medicine" },
  { icon: Award, label: "Fellowship, Interventional Pain" },
];

export function FounderProfile() {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="py-24 sm:py-32">
      <Container size="lg">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.9fr)_1.1fr] md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div
                className="absolute inset-0 -z-10 rounded-full bg-[color:var(--mint)] opacity-60 blur-3xl"
                aria-hidden
              />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border/40 shadow-[var(--shadow-elegant)]">
                <Image
                  src={IMG.founder}
                  alt="Dr. Anjali Rao, founding physician at Umbrella Health"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 384px"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground shadow-lg">
                Meet Dr. Rao
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              as="h2"
              eyebrow="Our founding physician"
              title="Pedigreed care that"
              accent="treats you like a person."
            />
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dr. Rajat founded Umbrella Health to create a more connected model of healthcare, one where primary care, specialty medicine, and diagnostics work together to deliver better outcomes.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-1">
              {creds.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3.5 text-sm text-foreground/85 shadow-[var(--shadow-card)]"
                >
                  <span className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--mint)] text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  {c.label}
                </li>
              ))}
            </ul>
            <Link
              to="/our-physicians"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Meet the whole team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="mt-8 font-display text-3xl italic text-foreground/80">Anjali Rao, MD</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
