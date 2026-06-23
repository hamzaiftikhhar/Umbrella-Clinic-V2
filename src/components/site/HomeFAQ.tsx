import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";
import { SITE_FAQS } from "@/data/site-content";

export const homeFaqs: QA[] = [...SITE_FAQS];

export function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-secondary/30 py-20 sm:py-28">
      <Container size="lg">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start md:gap-16">
          <Reveal>
            <SectionHeading as="h2" title="Frequently Asked Questions" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <FAQList items={homeFaqs} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { faqSchema };
