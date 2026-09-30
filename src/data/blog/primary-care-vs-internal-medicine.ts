import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const AAFP_PRIMARY_CARE_URL = "https://www.aafp.org/about/policies/all/primary-care.html";
const ACP_INTERNAL_MEDICINE_URL = "https://www.acponline.org/about-acp/about-internal-medicine";

export const primaryCareVsInternalMedicinePost: BlogPost = {
  slug: BLOG_SLUGS.primaryCareVsInternalMedicine,
  title: "Primary Care vs. Internal Medicine: What's the Difference?",
  subtitle:
    "How internists, family doctors and PCPs overlap — and how to choose the right adult primary care fit in NYC.",
  excerpt:
    "Primary care vs internal medicine: learn how internists, family doctors and PCPs differ and which fits your needs. Book adult primary care in NYC today.",
  seoTitle: "Primary Care vs Internal Medicine: What's the Difference?",
  metaDescription:
    "Primary care vs internal medicine: learn how internists, family doctors and PCPs differ and which fits your needs. Book adult primary care in NYC today.",
  focusKeyword: "primary care vs internal medicine",
  category: "Primary Care",
  readTime: "11 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.primaryCareVsInternalMedicine,
  imageAlt: "Internal medicine physician providing adult primary care in Manhattan",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Primary care is a role: the clinician you see first for prevention, everyday health problems and ongoing coordination. Internal medicine is a medical specialty focused on adults. Many internists (internal medicine physicians) work as primary care doctors for adults, but primary care can also be provided by family medicine physicians, and some internists work in hospitals or train further in subspecialties such as cardiology.",
    },
    {
      type: "p",
      text: 'If you are comparing doctors in New York, you have probably seen "PCP," "internist," "internal medicine" and "family medicine" used almost interchangeably. They overlap, but they are not identical. Understanding the difference can help you choose a primary care doctor in NYC who fits your needs.',
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Looking for an adult primary care doctor in Lower Manhattan?",
      label: "Book an Appointment at Umbrella Health →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Is Primary Care?",
    },
    {
      type: "p",
      text: "Primary care is your ongoing home base for health. The American Academy of Family Physicians describes primary care as care provided by physicians trained for first contact and continuous, comprehensive care, not limited to one organ system or diagnosis. In practice, a primary care doctor may:",
      links: [
        {
          label: "American Academy of Family Physicians describes primary care",
          href: AAFP_PRIMARY_CARE_URL,
        },
      ],
    },
    {
      type: "ul",
      items: [
        "Provide preventive care and screenings",
        "Evaluate new symptoms",
        "Manage chronic conditions like high blood pressure and diabetes",
        "Review medicines",
        "Coordinate referrals to specialists",
      ],
    },
    {
      type: "p",
      text: "For a fuller explanation, read what primary care is and what a primary care doctor does.",
      links: [
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Is Internal Medicine?",
    },
    {
      type: "p",
      text: "According to the American College of Physicians, internal medicine physicians (internists) are specialists who apply scientific knowledge and clinical expertise to the diagnosis, treatment and care of adults, from health to complex illness.",
      links: [{ label: "American College of Physicians", href: ACP_INTERNAL_MEDICINE_URL }],
    },
    {
      type: "p",
      text: "After medical school, internists complete residency training focused on adult medicine. From there, an internist may:",
    },
    {
      type: "ul",
      items: [
        "Practice general internal medicine, often as an adult primary care doctor",
        "Work as a hospitalist, caring for patients admitted to the hospital",
        "Train further in a subspecialty, such as cardiology, endocrinology or gastroenterology",
      ],
    },
    {
      type: "p",
      text: "That is why you may see a cardiologist described as having trained in internal medicine first.",
    },

    {
      type: "h2",
      heading: "Internal Medicine vs. Family Medicine",
    },
    {
      type: "p",
      text: "Both are common paths to primary care. The main difference is the patient population:",
    },
    {
      type: "table",
      headers: ["Factor", "Internal medicine vs. family medicine"],
      rows: [
        [
          "Patients",
          "Internal medicine: adults. Family medicine: people of all ages, often including children.",
        ],
        [
          "Focus",
          "Internal medicine: adult health, prevention and complex adult conditions. Family medicine: whole-person and family-based care across the lifespan.",
        ],
        [
          "Common roles",
          "Internal medicine: adult primary care, hospital medicine, subspecialties. Family medicine: primary care across ages, community care.",
        ],
      ],
    },
    {
      type: "p",
      text: "Both internists and family physicians can provide high-quality adult primary care. The right choice often depends on your age, household and health needs.",
    },

    {
      type: "h3",
      heading: "Where Do Nurse Practitioners and Physician Assistants Fit?",
    },
    {
      type: "p",
      text: "Many primary care practices also include nurse practitioners (NPs) and physician assistants (PAs), who can provide a wide range of primary care services within their scope of practice. Ask the office how the care team is structured when you book.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.primaryCareVsInternalDiagram,
      alt: "Diagram comparing primary care, internal medicine and family medicine",
    },
    {
      type: "cta",
      prompt: "Looking for an adult primary care doctor in Lower Manhattan?",
      label: "Book an Appointment →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE}.`,
    },

    {
      type: "h2",
      heading: "Does the Difference Matter for You?",
    },
    {
      type: "p",
      text: "For most healthy adults, what matters more than the title is whether the doctor:",
    },
    {
      type: "ul",
      items: [
        "Is accepting new patients and takes your insurance",
        "Is convenient to reach and offers timely appointments",
        "Communicates clearly and follows up",
        "Can coordinate testing and specialist care",
      ],
    },
    {
      type: "p",
      text: "It may matter more if you:",
    },
    {
      type: "ul",
      items: [
        "Have several chronic conditions. Internists' training focuses on adult illness, which some patients with complex needs find helpful.",
        "Want one doctor for the whole family. A family medicine physician may be a better fit.",
        "Need a specific subspecialist. Your primary care doctor can help you figure out which one.",
      ],
    },
    {
      type: "p",
      text: "Our article on managing chronic conditions without the runaround explains coordinated care. See do you need a referral to see a specialist in NYC for referral rules. Our guides on how to choose a primary care doctor in NYC and how often you should see a primary care doctor cover the other practical factors.",
      links: [
        {
          label: "managing chronic conditions without the runaround",
          href: BLOG_PATHS.chronicConditions,
        },
        {
          label: "do you need a referral to see a specialist in NYC",
          href: BLOG_PATHS.referralNyc,
        },
        {
          label: "how to choose a primary care doctor in NYC",
          href: BLOG_PATHS.choosePrimaryCare,
        },
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h2",
      heading: "What an Adult Primary Care Visit May Include",
    },
    {
      type: "p",
      text: "Whether your doctor trained in internal or family medicine, adult primary care often covers:",
    },
    {
      type: "ul",
      items: [
        "Annual physicals and preventive screenings",
        "Routine lab work",
        "Blood pressure, diabetes and cholesterol management",
        "Vaccinations",
        "Sick visits and same-day concerns",
        "Referrals and follow-up after specialist care",
      ],
    },
    {
      type: "p",
      text: "See annual physical vs. wellness exam and blood tests included in a primary care checkup for more detail. Umbrella Health's Primary Care NYC page lists these types of services, including annual physical exams, preventive health screenings, laboratory testing, medication management and specialist referrals.",
      links: [
        {
          label: "annual physical vs. wellness exam",
          href: BLOG_PATHS.annualPhysicalVsWellness,
        },
        {
          label: "blood tests included in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
      ],
    },

    {
      type: "h2",
      heading: "Common Myths About Internists and Primary Care",
    },
    {
      type: "p",
      text: 'Myth: "Internal medicine" means a doctor who only treats internal organs. The name refers to the specialty\'s roots in adult medicine, not a single organ system. General internists care for the whole adult patient.',
    },
    {
      type: "p",
      text: "Myth: You need a specialist for every chronic condition. Many common conditions, such as high blood pressure, type 2 diabetes and high cholesterol, are often managed in primary care, with specialists involved when needed. Our guide to primary care for high blood pressure explains how this works for hypertension.",
      links: [
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
      ],
    },
    {
      type: "p",
      text: "Myth: A primary care doctor is only for when you are sick. Prevention is a core part of primary care, including screenings and vaccinations recommended for your age and risk.",
    },

    {
      type: "h2",
      heading: "Questions to Ask When Choosing a Doctor",
    },
    {
      type: "p",
      text: "When you call a practice or read a doctor's profile, it can help to ask:",
    },
    {
      type: "ul",
      items: [
        "Is the doctor trained in internal medicine or family medicine?",
        "Does the doctor see adults only, or all ages?",
        "How does the practice handle same-day concerns and follow-up questions?",
        "Which tests can be done on-site?",
        "How are referrals and specialist results coordinated?",
        "Is the doctor accepting new patients, and do they take my plan?",
      ],
    },
    {
      type: "p",
      text: "If you are starting your search, our article on finding a primary care doctor in NYC who is accepting new patients offers a step-by-step approach.",
      links: [
        {
          label: "finding a primary care doctor in NYC who is accepting new patients",
          href: BLOG_PATHS.acceptingNewPatients,
        },
      ],
    },

    {
      type: "h2",
      heading: "Internal Medicine and Primary Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. The practice's Our Team page lists physicians in internal medicine and in family medicine, along with specialists in Cardiology & Vascular Medicine, Neurology and Sleep Medicine.",
      links: [
        { label: "Our Team page", href: ROUTES.ourTeam },
        { label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology },
        { label: "Neurology", href: ROUTES.neurology },
        { label: "Sleep Medicine", href: ROUTES.sleepMedicine },
      ],
    },
    {
      type: "p",
      text: "The Primary Care NYC page describes care for adults. Confirm with the office whether pediatric visits are offered and how nurse practitioners or physician assistants participate in the primary care team.",
      links: [{ label: "Primary Care NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for adult primary care and internal medicine in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about primary care vs internal medicine, internists and PCPs.",
      items: [
        {
          q: "Is an Internist the Same as a Primary Care Doctor?",
          a: 'Many internists work as primary care doctors for adults, but not all. Some work in hospitals or practice a subspecialty. "Primary care doctor" describes the role; "internist" describes the training.',
        },
        {
          q: "Can an Internal Medicine Doctor Be My PCP?",
          a: "Yes. General internists are one of the most common types of adult primary care physicians. Check that the doctor is listed as a PCP option on your insurance plan if your plan requires one.",
        },
        {
          q: "Do Internists See Children?",
          a: "Generally no. Internal medicine focuses on adults. Family medicine physicians and pediatricians care for children.",
        },
        {
          q: "Is Internal Medicine Better Than Family Medicine for Adults?",
          a: "Neither is better overall. Both can provide high-quality adult primary care. The best fit depends on your needs, preferences and the individual doctor.",
        },
        {
          q: "Is Internal Medicine a Specialty?",
          a: "Yes. Internal medicine is a medical specialty focused on adults, and it is also the base training for subspecialties like cardiology.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Find the Right Primary Care Fit",
    },
    {
      type: "p",
      text: "Whatever the title on the door, look for a doctor you can build a long-term relationship with. Visit Umbrella Health's home page, explore Primary Care NYC, or book online.",
      links: [
        { label: "Umbrella Health's home page", href: ROUTES.home },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "book online", href: BOOKING_URL },
      ],
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    },
    {
      type: "ctaBox",
      title: "Ready to choose an adult primary care doctor?",
      body: "Book a visit at Umbrella Health in Lower Manhattan and meet physicians trained in internal medicine and family medicine.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet the Physicians →", href: ROUTES.ourTeam },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
