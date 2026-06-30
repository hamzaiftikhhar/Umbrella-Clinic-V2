import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
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
            Comprehensive care, coordinated
          </p>
          <h2
            id="services-heading"
            className="font-display text-balance text-3xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
          >
            Everything Under One Roof,{" "}
            <span className="font-light italic text-primary">One Umbrella</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Built for busy New Yorkers who want primary care, specialists, diagnostics, and
            preventive health working together, not scattered across five different offices.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/specialties"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-primary/30"
          >
            See our clinical services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clinicalServices.map((service) => (
            <ClinicalServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
