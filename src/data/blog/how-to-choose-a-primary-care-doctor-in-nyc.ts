import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

export const howToChoosePrimaryCarePost: BlogPost = {
  slug: BLOG_SLUGS.choosePrimaryCare,
  title: "How to Choose a Primary Care Doctor in NYC",
  subtitle:
    "Compare credentials, location, insurance, same-day access, diagnostics, specialists, and continuity of care when choosing a primary care physician in New York City.",
  excerpt:
    "Learn how to choose a primary care doctor in NYC based on credentials, location, insurance, same-day access, diagnostics, specialists, and continuity of care.",
  seoTitle: "How to Choose a Primary Care Doctor in NYC | Umbrella Health",
  metaDescription:
    "Learn how to choose a primary care doctor in NYC based on credentials, location, insurance, same-day access, diagnostics, specialists, and continuity of care.",
  focusKeyword: "how to choose a primary care doctor in NYC",
  category: "Primary Care",
  readTime: "11 min read",
  publishedAt: "2026-06-12",
  image: BLOG_IMAGES.chooseDoctor,
  imageAlt: "Primary care physician consulting with a patient at Umbrella Health in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Choosing a primary care doctor in NYC is about more than finding the closest medical office. The right primary care physician should fit your healthcare needs, be accessible when you need care, understand your medical history, and provide a reliable point of contact for preventive care and ongoing health concerns.",
    },
    {
      type: "p",
      text: "For patients living or working in Manhattan, factors such as location, physician credentials, insurance participation, appointment availability, communication, diagnostic services, and access to specialists can all influence your decision.",
    },
    {
      type: "p",
      text: "If you are still learning what primary care is and what a primary care doctor does, understanding the role of a PCP is a useful first step. From there, use the following criteria to compare primary care doctors in NYC.",
      links: [
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },
    {
      type: "cta",
      prompt: "Looking for primary care in Lower Manhattan?",
      label: "Explore Umbrella Health's Primary Care NYC Services →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Should You Look for in a Primary Care Doctor in NYC?",
      subtitle:
        "A good primary care practice should make it easier to manage both routine and unexpected healthcare needs.",
    },
    {
      type: "p",
      text: "When comparing physicians, consider their qualifications, medical specialty, location, access, services, and approach to ongoing care.",
    },

    {
      type: "h2",
      heading: "1. Choose a Convenient NYC Location",
    },
    {
      type: "p",
      text: "Location matters because primary care is not usually a one-time visit. You may need annual physicals, preventive screenings, follow-up appointments, medication management, or evaluation of new symptoms throughout the year.",
      links: [{ label: "annual physicals", href: BLOG_PATHS.annualPhysical }],
    },
    {
      type: "p",
      text: "A practice that is convenient from your home or workplace may make it easier to maintain regular care.",
    },
    {
      type: "p",
      text: "For patients in or around Lower Manhattan, Union Square, Greenwich Village, Chelsea, and the Flatiron District, Umbrella Health is located at:",
    },
    {
      type: "ul",
      items: ["32 West 14th Street", "New York, NY 10011"],
    },
    {
      type: "p",
      text: "Its location also provides convenient access for patients coming from nearby areas including SoHo, NoHo, Gramercy, the West Village, and the East Village.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.acceptingNewPatients,
      alt: "Umbrella Health location on West 14th Street for primary care in Lower Manhattan NYC",
    },
    {
      type: "cta",
      prompt: "Prefer a primary care practice close to where you live or work?",
      label: "See Primary Care at Umbrella Health in Lower Manhattan →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "2. Check the Physician's Credentials and Specialty",
    },
    {
      type: "p",
      text: "When choosing a primary care physician, review the doctor's education, training, credentials, and area of practice.",
    },
    {
      type: "p",
      text: "For adult primary care, Internal Medicine is one of the common physician specialties to consider. Family Medicine physicians may also provide primary care across a broader range of healthcare needs.",
    },
    {
      type: "p",
      text: "It is also useful to understand the distinction between the two concepts:",
    },
    {
      type: "ul",
      items: [
        "Primary care describes the role a physician plays in coordinating and providing ongoing healthcare.",
        "Internal Medicine is a medical specialty focused on the prevention, diagnosis, and treatment of diseases in adults.",
      ],
    },
    {
      type: "p",
      text: "At Umbrella Health, you can meet primary care doctors in NYC and learn more about the physicians who provide care.",
      links: [{ label: "primary care doctors in NYC", href: ROUTES.primaryCare }],
    },

    {
      type: "h3",
      heading: "Why Board Certification Matters",
    },
    {
      type: "p",
      text: "You can also check whether a physician is board certified in their specialty. Board certification reflects additional professional assessment beyond medical school and residency training.",
    },
    {
      type: "p",
      text: "Rather than choosing a doctor based on credentials alone, consider credentials alongside experience, communication, accessibility, and whether the physician's services match your healthcare needs.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.newPatientsTeam,
      alt: "Patients comparing primary care physicians at Umbrella Health NYC",
    },
    {
      type: "cta",
      prompt: "Want to compare the physicians providing primary care at Umbrella Health?",
      label: "Meet Our Physicians →",
      href: ROUTES.ourTeam,
    },

    {
      type: "h2",
      heading: "3. Make Sure the Practice Accepts Your Insurance",
    },
    {
      type: "p",
      text: "Before scheduling an appointment, confirm that the practice participates with your health insurance plan.",
    },
    {
      type: "p",
      text: "Insurance participation can change, so it is worth verifying the current information directly with the practice or your insurance provider.",
    },
    {
      type: "p",
      text: "You can also ask about:",
    },
    {
      type: "ul",
      items: [
        "Whether your specific insurance plan is accepted",
        "Copays or other potential out-of-pocket costs",
        "Whether a referral is required for certain services",
        "How specialist visits are handled",
        "Whether diagnostic services are available through the practice",
      ],
    },
    {
      type: "p",
      text: "Understanding these details before your first visit can help avoid unexpected administrative issues later.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.insurancePrimaryCare,
      alt: "Insurance accepted for primary care at Umbrella Health NYC",
    },
    {
      type: "ctaBox",
      title: "Before booking, need to confirm coverage or appointment details?",
      links: [
        { label: "Contact Umbrella Health →", href: ROUTES.contactUs },
        { label: "View Insurance Information →", href: ROUTES.insurance },
      ],
    },

    {
      type: "h2",
      heading: "4. Look at Appointment Availability and Same-Day Access",
    },
    {
      type: "p",
      text: "Primary care is important for both routine healthcare and problems that cannot always wait for a future appointment.",
    },
    {
      type: "p",
      text: "Ask whether the practice offers same-day sick visits, timely follow-up appointments, or telehealth when clinically appropriate.",
    },
    {
      type: "p",
      text: "For patients with demanding work schedules, accessibility can be just as important as credentials.",
    },
    {
      type: "p",
      text: "Umbrella Health also provides same-day sick visits in Lower Manhattan, giving patients an option for addressing certain acute health concerns without waiting for a routine appointment.",
      links: [
        {
          label: "same-day sick visits in Lower Manhattan",
          href: BLOG_PATHS.sameDaySickVisits,
        },
      ],
    },
    {
      type: "p",
      text: "If you are specifically searching for a primary care doctor NYC accepting new patients, confirm current openings with the practice before scheduling.",
      links: [
        {
          label: "primary care doctor NYC accepting new patients",
          href: BLOG_PATHS.acceptingNewPatients,
        },
      ],
    },

    {
      type: "h2",
      heading: "5. Consider Continuity of Care",
    },
    {
      type: "p",
      text: "One of the central benefits of having a primary care physician is having a consistent medical point of contact.",
    },
    {
      type: "p",
      text: "A primary care doctor may help with:",
    },
    {
      type: "ul",
      items: [
        "Preventive health visits",
        "Annual physical exams",
        "Routine health screenings",
        "Medication management",
        "Chronic condition monitoring",
        "Evaluation of new symptoms",
        "Follow-up care",
        "Coordination with specialists",
      ],
    },
    {
      type: "p",
      text: "Instead of treating every appointment as a separate event, ongoing primary care can provide continuity as your healthcare needs change over time.",
    },
    {
      type: "p",
      text: "When comparing practices, ask how your medical information, test results, medications, and previous visits are documented and communicated across your care.",
    },
    {
      type: "p",
      text: "You may also want to understand how often you should see a primary care doctor for preventive visits and chronic condition follow-up.",
      links: [
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
      ],
    },
    {
      type: "cta",
      prompt: "Looking for a long-term primary care relationship rather than one-time visits?",
      label: "Explore Umbrella Health Primary Care →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "6. Ask About Diagnostic Testing",
    },
    {
      type: "p",
      text: "Access to appropriate diagnostic services can be another important consideration when choosing a primary care practice.",
    },
    {
      type: "p",
      text: "Depending on your symptoms, medical history, and preventive care needs, your physician may recommend laboratory testing or other diagnostic evaluations.",
    },
    {
      type: "p",
      text: "Umbrella Health provides access to diagnostic testing in NYC, supporting the connection between primary care evaluation and diagnostic care.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },
    {
      type: "p",
      text: "For example, a primary care visit may identify the need for blood testing, cardiovascular evaluation, or another diagnostic assessment.",
    },
    {
      type: "p",
      text: "The goal is not simply to have tests available, but to have those results interpreted within the context of your overall health.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.diagnostics,
      alt: "Diagnostic testing supporting primary care evaluation at Umbrella Health NYC",
    },
    {
      type: "cta",
      prompt: "Need laboratory or diagnostic evaluation as part of your care?",
      label: "Explore Diagnostic Testing at Umbrella Health →",
      href: ROUTES.diagnostics,
    },

    {
      type: "h2",
      heading: "7. Consider Access to Specialists",
    },
    {
      type: "p",
      text: "Your primary care doctor may also be the starting point when you need evaluation or ongoing care from a specialist.",
    },
    {
      type: "p",
      text: "A multispecialty practice can make it easier to understand how different areas of care relate to one another.",
    },
    {
      type: "p",
      text: "Umbrella Health offers access to services including:",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management →", href: ROUTES.painManagement },
      ],
    },
    {
      type: "p",
      text: "This can be particularly relevant when a primary care evaluation leads to the need for additional testing or specialty care.",
    },
    {
      type: "cta",
      prompt: "Need care that may involve both primary care and a specialist?",
      label: "Explore Umbrella Health's Specialties →",
      href: ROUTES.specialtiesHub,
    },

    {
      type: "h2",
      heading: "8. Think Beyond Routine Checkups",
    },
    {
      type: "p",
      text: "The right primary care doctor should be able to support more than an annual physical.",
    },
    {
      type: "p",
      text: "Ask whether the practice provides care for the health concerns you are most likely to need help managing, such as preventive health, chronic conditions, medication management, or new symptoms.",
      links: [{ label: "chronic conditions", href: BLOG_PATHS.chronicConditions }],
    },
    {
      type: "p",
      text: "A strong primary care relationship can give you a consistent place to return when your healthcare needs change.",
    },

    {
      type: "h2",
      heading: "9. Pay Attention to Communication and Patient Experience",
    },
    {
      type: "p",
      text: "A practical question to ask is whether you feel comfortable communicating with the physician and office team.",
    },
    {
      type: "p",
      text: "Consider:",
    },
    {
      type: "ul",
      items: [
        "Does the physician explain your options clearly?",
        "Do you have an opportunity to ask questions?",
        "Is it easy to contact the practice?",
        "Does the office explain next steps after an appointment?",
        "Can follow-up care be scheduled conveniently?",
      ],
    },
    {
      type: "p",
      text: "These factors can have a meaningful impact on your experience of ongoing primary care.",
    },

    {
      type: "h2",
      heading: "Primary Care Doctor NYC Checklist",
    },
    {
      type: "p",
      text: "Before choosing a primary care doctor in NYC, compare the practice using this checklist:",
    },
    {
      type: "table",
      headers: ["Factor", "What to Consider"],
      rows: [
        ["Location", "Is the office convenient from home or work?"],
        ["Credentials", "What are the physician's education, training, and certifications?"],
        ["Specialty", "Does the physician's specialty fit your healthcare needs?"],
        ["Insurance", "Is your current insurance plan accepted?"],
        ["Availability", "Are routine and timely appointments available?"],
        ["Same-day care", "Can you be seen for certain urgent or acute concerns?"],
        ["Continuity", "Will your physician provide ongoing care and follow-up?"],
        ["Diagnostics", "Are appropriate laboratory and diagnostic services accessible?"],
        ["Specialists", "Can your primary care physician coordinate specialty care when needed?"],
        ["Communication", "Are questions and follow-up needs handled clearly?"],
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic interior in Lower Manhattan NYC",
    },

    {
      type: "h2",
      heading: "How Do You Choose the Right Primary Care Doctor in NYC?",
    },
    {
      type: "p",
      text: "There is no single factor that determines which primary care physician is right for everyone. The most useful approach is to look at the complete picture: physician qualifications, location, insurance, appointment access, continuity of care, diagnostic capabilities, specialist access, and communication.",
    },
    {
      type: "p",
      text: "For patients looking for coordinated primary care in Manhattan, Umbrella Health brings primary care and multiple specialty services together at its Lower Manhattan location.",
    },
    {
      type: "cta",
      label: "Explore Primary Care NYC →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "Ready to Establish Primary Care in NYC?",
    },
    {
      type: "p",
      text: "Starting with a consistent primary care physician can make it easier to manage preventive care, routine visits, ongoing health concerns, and referrals when additional medical expertise is needed.",
    },
    {
      type: "ctaBox",
      title: "Ready to Establish Primary Care in NYC?",
      body: "Book a visit with Umbrella Health in Lower Manhattan and meet the physicians who provide ongoing primary care.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
        { label: "Learn What Primary Care Includes →", href: BLOG_PATHS.whatIsPrimaryCare },
      ],
    },
    { type: "clinicFooter" },
  ],
};
