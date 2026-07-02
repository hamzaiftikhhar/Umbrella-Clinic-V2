import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { PremiumIcon } from "./primitives/IconBadge";
import { IMG } from "@/data/images";
import type { LucideIconKey } from "@/components/icons/icon-keys";

const points: { iconKey: LucideIconKey; title: string }[] = [
  {
    iconKey: "stethoscope",
    title: "Experienced Primary Care Physicians & Specialists",
  },
  {
    iconKey: "heart-handshake",
    title: "Built Around You",
  },
  {
    iconKey: "scan-line",
    title: "Advanced Diagnostics",
  },
  {
    iconKey: "hospital",
    title: "Multispeciality Healthcare",
  },
  {
    iconKey: "clock",
    title: "Same-Day Appointments & Coordinated Care",
  },
];

export function UmbrellaDifference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="bg-background py-16 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 xl:gap-20">
          <div>
            <h2
              id="difference-heading"
              className="font-display max-w-xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl"
            >
              Why Patients Choose Umbrella Health In{" "}
              <span className="font-light italic text-primary">New York?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experience patient-centered healthcare from trusted primary care doctors in NYC. At
              Umbrella Health, we combine clinical expertise, compassionate care, and personalized
              treatment to help you achieve better long-term health.
            </p>

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

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[1.75rem] bg-muted shadow-[var(--shadow-card)] lg:mx-0 lg:ml-auto lg:max-w-none">
            <Image
              src={IMG.premiumDoctorPortrait}
              alt="Board-certified physician at Umbrella Health"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 520px"
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

        {/* Uniform 5-point grid — equal columns, consistent card height */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="flex h-full min-h-[11.5rem] flex-col rounded-[1.25rem] border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] sm:p-6"
            >
              <PremiumIcon iconKey={p.iconKey} size="md" />
              <h3 className="mt-4 flex-1 text-sm font-semibold leading-snug text-foreground sm:text-base">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
