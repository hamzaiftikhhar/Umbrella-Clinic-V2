import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { SectionHeading } from "./primitives/SectionHeading";
import { Reveal } from "./primitives/Reveal";
import {
  ClinicalServiceCard,
  type ClinicalServiceCardProps,
} from "./primitives/ClinicalServiceCard";
import { IMG } from "@/data/images";
import { cn } from "@/lib/utils";

const clinicalServices: ClinicalServiceCardProps[] = [
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
        <SectionHeading
          as="h2"
          align="center"
          eyebrow="Clinical services"
          title="Comprehensive,"
          accent="specialized care."
          description="Built for busy New Yorkers who want primary care, specialists, diagnostics, and preventive health working together, not scattered across five different offices."
        />

        <Reveal>
          <div className="mt-8 flex justify-center">
            <Link
              to="/specialties"
              className="group inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white/60 px-6 py-3 text-sm font-medium text-primary shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_25%,transparent)] backdrop-blur-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:border-primary/30 hover:bg-white/80 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--primary)_30%,transparent)]"
            >
              See our clinical services
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {clinicalServices.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.06}
              className={cn("lg:col-span-2", i >= 3 && "lg:col-span-3")}
            >
              <ClinicalServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
