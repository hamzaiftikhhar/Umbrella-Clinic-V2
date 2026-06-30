import Image from "next/image";
import { ArrowRight, Database, Layers, Play, User } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";

const points = [
  {
    icon: Database,
    title: "Data-Driven",
    body: "Advanced diagnostics, biomarker testing, imaging, sleep studies, and objective measurements that help guide every decision.",
  },
  {
    icon: Layers,
    title: "Multispecialty",
    body: "Primary care, cardiology, neurology, sleep medicine, pain management, and more—all working together in one practice.",
  },
  {
    icon: User,
    title: "Built Around You",
    body: "Longer-term relationships, coordinated care, and a team that understands your history—not just today's appointment.",
  },
];

export function UmbrellaDifference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="bg-background py-20 sm:py-24"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
              Why Umbrella Health
            </p>
            <h2
              id="difference-heading"
              className="font-display max-w-xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl"
            >
              A Better Way To{" "}
              <span className="font-light italic text-primary">Navigate Healthcare</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most healthcare systems are fragmented. Umbrella brings primary care, specialists,
              diagnostics, and preventive medicine together so you spend less time coordinating your
              care and more time improving your health.
            </p>

            <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-8">
              {points.map((p) => (
                <div key={p.title} className="flex flex-col">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-mint text-primary">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/specialties"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-glow"
              >
                See How We&apos;re Different
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[1.75rem] bg-muted shadow-[var(--shadow-card)] lg:mx-0 lg:ml-auto">
            <Image
              src={IMG.premiumDoctorPortrait}
              alt="Board-certified physician at Umbrella Health"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            <button
              type="button"
              aria-label="Play physician introduction"
              className="absolute inset-0 m-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-white/90 text-primary shadow-md"
            >
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
