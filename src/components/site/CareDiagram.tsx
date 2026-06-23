import Image from "next/image";
import { ArrowRight, ClipboardList, FlaskConical, Users } from "lucide-react";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { BookButton } from "./primitives/BookButton";
import { Reveal } from "./primitives/Reveal";
import { IMG } from "@/data/images";

const journeySteps = [
  {
    icon: Users,
    title: "Your primary care home",
    body: "One physician who knows your history, goals, and the full picture — not a rotating cast.",
  },
  {
    icon: FlaskConical,
    title: "Diagnostics, same week",
    body: "Labs, imaging, sleep studies, and biomarkers run in-house — results in context, not in a portal black hole.",
  },
  {
    icon: ClipboardList,
    title: "Specialists, one chart",
    body: "Cardiology, neurology, sleep, and pain under the same roof, reading the same record.",
  },
];

export function CareDiagram() {
  return (
    <section
      id="how"
      aria-labelledby="diagram-heading"
      className="overflow-hidden bg-secondary/30 py-24 sm:py-32"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4 lg:pt-4">
            <SectionHeading
              as="h2"
              eyebrow="How it works"
              title="One team. One record."
              accent="One Umbrella."
              description="Your primary doctor, your specialists, your labs, your imaging, and your longevity plan — all looking at the same data, in the same place."
            />
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              See our clinical services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] sm:col-span-2 sm:min-h-[380px]">
                <Image
                  src={IMG.reception}
                  alt="Umbrella Health modern clinic reception"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    Unified care
                  </p>
                  <p className="mt-2 font-display text-3xl italic text-white sm:text-4xl">
                    One chart. Every specialty.
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-200">
                    No faxing records between offices. No starting over with each referral.
                  </p>
                </div>
              </div>

              {journeySteps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
                >
                  <div>
                    <span className="inline-grid h-11 w-11 place-items-center rounded-full bg-[color:var(--mint)] text-primary">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/60">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center">
          <BookButton>Book your first visit</BookButton>
        </div>
      </Container>
    </section>
  );
}
