import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";
import {
  ClinicalServiceCard,
  type ClinicalServiceCardProps,
} from "./primitives/ClinicalServiceCard";
import { IMG } from "@/data/images";

const clinicalServices: ClinicalServiceCardProps[] = [
  {
    title: "Primary Care",
    description:
      "Your first call for annual physicals, preventive care, chronic disease management, and everyday health concerns.",
    imageUrl: IMG.consult,
    href: "/specialties/primary-care",
  },
  {
    title: "Cardiology",
    description:
      "Heart health evaluations, EKGs, telemetry monitoring, echocardiograms, and expert cardiovascular care, all in-house.",
    imageUrl: IMG.ekg,
    href: "/specialties/cardiology-vascular",
  },
  {
    title: "Medical Weight Loss",
    description:
      "Physician-guided GLP-1 weight loss programs supported by labs, metabolic insights, and long-term planning.",
    imageUrl: IMG.glp1Hero,
    href: "/weight-loss-glp1",
  },
  {
    title: "Diagnostics & Biomarkers",
    description:
      "Advanced testing, imaging, metabolic assessments, and biomarker tracking that turn data into action.",
    imageUrl: IMG.lab,
    href: "/diagnostics",
  },
  {
    title: "Sleep Medicine",
    description:
      "Convenient home sleep studies and comprehensive sleep evaluations designed for busy professionals.",
    imageUrl: IMG.sleepStudy,
    href: "/specialties/sleep-medicine",
  },
  {
    title: "Neurology & Pain",
    description:
      "Integrated care for headaches, nerve conditions, chronic pain, and musculoskeletal concerns.",
    imageUrl: IMG.doctorPatient,
    href: "/specialties/neurology",
  },
];

export function ClinicalServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-balance text-3xl font-semibold leading-[1.05] text-foreground sm:text-4xl md:text-5xl"
          >
            Everything Under One Roof, One Umbrella
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Built for busy New Yorkers who want primary care, specialists, diagnostics, and
            preventive health working together, not scattered across five different offices.
          </p>
        </div>

        <Reveal>
          <div className="mt-8 flex justify-center">
            <Link
              to="/specialties"
              className="group inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white/60 px-6 py-3 text-sm font-medium text-primary shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_25%,transparent)] backdrop-blur-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:border-primary/30 hover:bg-white/80"
            >
              See our clinical services
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clinicalServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <ClinicalServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
