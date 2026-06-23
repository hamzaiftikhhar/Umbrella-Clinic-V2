import Image from "next/image";
import { ArrowRight, Database, Layers, Play, ShieldCheck } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { IconBadge } from "./primitives/IconBadge";
import { IMG } from "@/data/images";
import { cn } from "@/lib/utils";

const points = [
  {
    icon: Database,
    title: "Data-driven",
    body: "We own our diagnostics — imaging, labs, sleep, autonomic — so your numbers come back faster and stay in one place.",
  },
  {
    icon: Layers,
    title: "Multispecialty",
    body: "Primary care, cardiology, neurology, sleep, and pain in one clinic. Fewer referrals, less context-switching.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance-accepted",
    body: "We work with most major plans and offer transparent cash-pay for longevity and self-pay options.",
  },
];

export function UmbrellaDifference() {
  return (
    <section id="difference" aria-labelledby="difference-heading" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-start gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <SectionHeading
              as="h2"
              eyebrow="Why Umbrella"
              title="The Umbrella"
              accent="difference."
            />
            <div className="mt-10 grid gap-4">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="flex gap-4 rounded-[1.5rem] border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                    <IconBadge icon={p.icon} />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <Link
                to="/our-physicians"
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-glow",
                )}
              >
                Meet our team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
              <Image
                src={IMG.founder}
                alt="Umbrella Health founding physician"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <button
                type="button"
                aria-label="Play story"
                className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-background/90 text-primary shadow-lg backdrop-blur transition-transform hover:scale-105"
              >
                <Play className="h-5 w-5 fill-current" />
              </button>
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                  Founding physician
                </p>
                <p className="mt-1 font-display text-2xl italic text-white">Dr. Anjali Rao</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
