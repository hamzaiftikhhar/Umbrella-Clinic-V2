import Image from "next/image";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";
import { PHYSICIANS } from "@/data/physicians";
import { SITE_FAQS } from "@/data/site-content";

export const homeFaqs: QA[] = [...SITE_FAQS];

const HELP_AVATARS = PHYSICIANS.slice(0, 4);

export function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-background py-10 sm:py-14">
      <Container size="lg">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] md:items-start md:gap-10 lg:gap-12">
          <div className="md:sticky md:top-24 md:self-start">
            <SectionHeading
              as="h2"
              id="faq-heading"
              title="Frequently Asked"
              accent="Questions"
              description="Insurance, services, referrals, and how to book — the essentials before your first visit."
            />

            <div className="mt-8 max-w-sm border-t border-border/60 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
                One connected record
              </p>
              <p className="mt-3 font-display text-balance text-2xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[1.65rem]">
                One Team. One Record.{" "}
                <span className="font-light italic text-primary">One Umbrella.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Primary care, specialists, and diagnostics on one team — so answers stay clear and
                care stays coordinated.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-[1.75rem] border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] sm:p-7">
              <FAQList items={homeFaqs} />
            </div>

            <div className="mt-8 flex flex-col items-center sm:mt-10">
              <div className="flex items-center justify-center pl-3">
                {HELP_AVATARS.map((physician, index) => (
                  <div
                    key={physician.id}
                    className="relative -ml-3 h-11 w-11 overflow-hidden rounded-full border-2 border-background bg-muted shadow-[var(--shadow-soft)] first:ml-0 sm:h-12 sm:w-12"
                    style={{ zIndex: HELP_AVATARS.length - index }}
                  >
                    <Image
                      src={physician.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-base text-foreground">
                Need more help?{" "}
                <Link
                  href="/visit-us"
                  className="font-medium text-accent-emerald underline decoration-accent-emerald/50 underline-offset-[6px] transition-colors hover:text-accent-emerald/80 hover:decoration-accent-emerald"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { faqSchema };
