import { ArrowUpRight, Building2 } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";

export function EmployersStrip() {
  return (
    <section aria-labelledby="employers-heading" className="px-5 pb-12 sm:px-8 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-primary p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-foreground/5"
              aria-hidden
            />
            <div className="relative grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/20">
                <Building2 className="h-6 w-6" />
              </span>
              <div>
                <h2 id="employers-heading" className="text-xl font-semibold sm:text-2xl">
                  Executive physicals & longevity for your team
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                  Concierge-quality care for downtown firms. Built for partners, principals, and the
                  people who keep them running.
                </p>
              </div>
              <Link
                to="/employers"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90 sm:self-center"
              >
                Employer programs
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
