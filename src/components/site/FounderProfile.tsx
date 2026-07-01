import Image from "next/image";
import { ArrowRight, Award, BadgeCheck, GraduationCap } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";

const credentials = [
  { icon: GraduationCap, label: "Columbia University Trained" },
  { icon: GraduationCap, label: "NewYork-Presbyterian Trained" },
  { icon: BadgeCheck, label: "Board-Certified Family Medicine" },
  { icon: Award, label: "Fellowship-Trained Interventional Pain Management" },
];

export function FounderProfile() {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="bg-background py-20 sm:py-28">
      <Container size="lg">
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,0.95fr)_1.05fr] md:gap-16 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[22rem] md:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-full border border-border/40 shadow-[var(--shadow-card)]">
              <Image
                src={IMG.premiumDoctorPortrait}
                alt="Dr. Rajat Lamington, founding physician at Umbrella Health"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 80vw, 352px"
              />
            </div>

            <div className="absolute bottom-6 left-0 max-w-[13.5rem] rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-md">
              <p className="flex items-center gap-2 text-sm font-semibold">
                Dr. Rajat Lamington
                <BadgeCheck className="h-4 w-4 shrink-0 text-primary-foreground/90" />
              </p>
              <p className="mt-0.5 text-xs text-primary-foreground/75">Founding physician</p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
              Founding Physicians
            </p>
            <h2
              id="founder-heading"
              className="font-display text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl"
            >
              Physician-led care that{" "}
              <span className="font-light italic text-primary">puts you first.</span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dr. Rajat Lamington founded Umbrella Health to create a more connected model of
              healthcare, one where primary care, specialty medicine, and diagnostics work together
              to deliver better outcomes.
            </p>

            <ul className="mt-8 space-y-3">
              {credentials.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm text-foreground/85">
                  <span className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-primary">
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>

            <Link
              to="/our-physicians"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
            >
              Meet The Whole Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-10 h-px w-full max-w-md bg-border/80" aria-hidden />
          </div>
        </div>
      </Container>
    </section>
  );
}
