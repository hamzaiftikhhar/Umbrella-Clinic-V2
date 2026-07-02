import { Container } from "./primitives/Container";
import {
  ClinicalServiceRows,
  type ClinicalServiceCardProps,
} from "./primitives/ClinicalServiceCard";
import { IMG } from "@/data/images";

const clinicalServices: ClinicalServiceCardProps[] = [
  {
    title: "Primary Care NYC",
    href: "/specialties/primary-care",
    description:
      "Build a healthier future with comprehensive primary care focused on preventive care, annual physicals, chronic disease management, and personalized treatment for every stage of life.",
    imageUrl: IMG.consult,
  },
  {
    title: "Cardiology & Vascular Medicine",
    href: "/specialties/cardiology-vascular",
    description:
      "Protect your heart with expert cardiovascular care, advanced diagnostic testing, and personalized treatment plans designed to support lifelong heart health.",
    imageUrl: IMG.ekg,
  },
  {
    title: "Medical Weight Loss NYC",
    href: "/weight-loss-glp1",
    description:
      "Achieve sustainable weight loss with physician-supervised programs, personalized nutrition guidance, and evidence-based medical treatments.",
    imageUrl: IMG.glp1Hero,
  },
  {
    title: "Diagnostics & Testing",
    href: "/diagnostics",
    description:
      "Get accurate answers faster with advanced diagnostic testing, laboratory services, and preventive health screenings that support timely diagnosis and treatment.",
    imageUrl: IMG.lab,
  },
  {
    title: "Sleep Medicine",
    href: "/specialties/sleep-medicine",
    description:
      "Improve your sleep and overall well-being with comprehensive sleep evaluations, advanced sleep studies, and personalized treatment for sleep disorders.",
    imageUrl: IMG.sleepStudy,
  },
  {
    title: "Neurology",
    href: "/specialties/neurology",
    description:
      "Receive expert diagnosis and treatment for neurological conditions with personalized care focused on improving brain, spine, and nervous system health.",
    imageUrl: IMG.doctorPatient,
  },
  {
    title: "Interventional Pain Management",
    href: "/specialties/pain-management",
    description:
      "Find lasting relief from chronic pain through personalized, minimally invasive treatments that improve mobility, function, and quality of life.",
    imageUrl: IMG.examRoom,
  },
  {
    title: "Medical Spa Services NYC",
    href: "/longevity/hormone-optimization",
    description:
      "Refresh your appearance with physician-guided aesthetic treatments, including skin rejuvenation, anti-aging solutions, and personalized wellness services.",
    imageUrl: IMG.ultrasound,
  },
];

export function ClinicalServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-py bg-background"
    >
      <Container size="lg">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
            Everything Under One Roof, One Umbrella
          </p>
          <h2
            id="services-heading"
            className="font-display text-balance text-3xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
          >
            NYC Primary Care Doctors{" "}
            <span className="font-light italic text-primary">& Board-Certified Specialists</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Umbrella Health brings together primary care doctors, internal medicine physicians, and
            board-certified specialists to deliver coordinated, patient-centered healthcare under one
            roof.
          </p>
        </div>

        <div className="mt-12 overflow-visible sm:mt-14">
          <ClinicalServiceRows services={clinicalServices} />
        </div>
      </Container>
    </section>
  );
}
