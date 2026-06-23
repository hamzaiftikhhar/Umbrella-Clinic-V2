import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import { FAQList, faqSchema, type QA } from "./primitives/FAQList";

export const homeFaqs: QA[] = [
  {
    q: "Do you accept insurance?",
    a: "Yes. Umbrella Health works with most major insurance plans for medical services and offers transparent self-pay options for preventive and specialized programs.",
  },
  {
    q: "What services do you provide?",
    a: "We offer primary care, cardiology, neurology, sleep medicine, interventional pain management, medical weight loss, advanced diagnostics, and preventive health services.",
  },
  {
    q: "Do I need referrals for specialists?",
    a: "Many specialty services are available directly through Umbrella Health, reducing the need for outside referrals and multiple appointments.",
  },
  {
    q: "What makes Umbrella Health different?",
    a: "Unlike traditional practices, Umbrella combines primary care, specialists, diagnostics, and preventive medicine under one roof with a data-driven approach to healthcare.",
  },
  {
    q: "Do you offer sleep studies?",
    a: "Yes. We provide convenient home sleep studies and comprehensive sleep evaluations.",
  },
  {
    q: "Do you offer medical weight loss programs?",
    a: "Yes. Our physician-supervised weight loss programs include GLP-1 medications when appropriate, along with metabolic assessments and ongoing monitoring.",
  },
  {
    q: "Where are you located?",
    a: "Umbrella Health is located in Union Square, serving patients throughout Lower Manhattan, Downtown NYC, and surrounding neighborhoods.",
  },
  {
    q: "How do I book an appointment?",
    a: "Appointments can be scheduled online or by contacting our office directly.",
  },
];

export function HomeFAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-secondary/30 py-24 sm:py-32">
      <Container size="lg">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start md:gap-16">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Why Umbrella"
              title="Frequently Asked Questions"
            />
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
