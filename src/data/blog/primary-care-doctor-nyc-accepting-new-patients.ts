import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NYS_PHYSICIAN_PROFILE_URL =
  "https://www.health.ny.gov/professionals/doctors/conduct/license_lookup.htm";

export const acceptingNewPatientsPost: BlogPost = {
  slug: BLOG_SLUGS.acceptingNewPatients,
  title: "How to Find a Primary Care Doctor in NYC Who Is Accepting New Patients?",
  subtitle:
    "Compare availability, insurance, location, credentials, and services — then confirm new-patient openings directly with the practice.",
  excerpt:
    "Looking for a primary care doctor in NYC accepting new patients? Learn how to compare doctors, insurance, availability, location, and services.",
  seoTitle: "Primary Care Doctor NYC Accepting New Patients | My Umbrella Health",
  metaDescription:
    "Looking for a primary care doctor in NYC accepting new patients? Learn how to compare doctors, insurance, availability, location, and services.",
  focusKeyword: "primary care doctor NYC accepting new patients",
  category: "Primary Care",
  readTime: "12 min read",
  publishedAt: "2026-09-11",
  image: BLOG_IMAGES.acceptingNewPatients,
  imageAlt:
    "Umbrella Health clinic on West 14th Street — primary care doctor in NYC accepting new patients",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Finding a primary care doctor in NYC who is accepting new patients can be challenging. You may need to compare doctors, insurance plans, appointment availability, location, and the services offered by each practice.",
    },
    {
      type: "p",
      text: "The right primary care doctor should be convenient to reach, qualified to provide the care you need, and available for ongoing healthcare.",
    },
    {
      type: "p",
      text: "For patients in Lower Manhattan, Umbrella Health provides adult primary care with access to preventive care, annual physicals, sick visits, chronic condition management, diagnostic testing, and specialist care.",
      links: [
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "cta",
      prompt: "Looking for a primary care doctor accepting new patients in NYC?",
      label: "Contact Umbrella Health to Check Availability →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Is the Best Way to Find a Primary Care Doctor in NYC Accepting New Patients?",
      subtitle:
        "Compare practices on availability, insurance, location, qualifications, and services — then confirm openings with the office.",
    },
    {
      type: "p",
      text: "The best way to find a primary care doctor accepting new patients is to compare practices based on availability, insurance, location, physician qualifications, and services.",
    },
    {
      type: "p",
      text: "Start by checking:",
    },
    {
      type: "ul",
      items: [
        "Whether the practice accepts new patients",
        "How soon you can get an appointment",
        "Whether your insurance plan is accepted",
        "Where the office is located",
        "What primary care services are available",
        "Whether the doctor treats your specific healthcare needs",
        "Whether the practice offers follow-up and ongoing care",
      ],
    },
    {
      type: "p",
      text: "Searching online can give you a list of options, but contacting the practice directly is the best way to confirm current availability.",
    },
    {
      type: "p",
      text: "If you are still clarifying what is primary care, or how to choose a primary care doctor in NYC, those guides can help you narrow your criteria before you call.",
      links: [
        { label: "what is primary care", href: BLOG_PATHS.whatIsPrimaryCare },
        {
          label: "how to choose a primary care doctor in NYC",
          href: BLOG_PATHS.choosePrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Should You Check Before Choosing a Primary Care Doctor?",
    },
    {
      type: "p",
      text: "Before scheduling your first appointment, consider:",
    },
    {
      type: "ul",
      items: [
        "New-patient availability",
        "Insurance participation",
        "Office location",
        "Physician credentials",
        "Services provided",
        "Appointment options",
        "Specialist coordination",
        "Diagnostic services",
      ],
    },
    {
      type: "p",
      text: "For patients searching in Lower Manhattan, Umbrella Health offers adult primary care and is currently accepting new patients.",
      links: [{ label: "adult primary care", href: ROUTES.primaryCare }],
    },
    {
      type: "ctaBox",
      title: "Ready to Find a Primary Care Doctor?",
      body: "Contact Umbrella Health to check new-patient availability and find an appointment that fits your needs.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
      ],
    },

    {
      type: "h2",
      heading: "How Can You Search for a Primary Care Doctor Near You in NYC?",
      subtitle:
        "Neighborhood search matters because primary care is usually an ongoing relationship.",
    },
    {
      type: "p",
      text: "Location is one of the most important factors when choosing a primary care doctor.",
    },
    {
      type: "p",
      text: "Primary care is usually ongoing rather than limited to one appointment. You may return for annual physicals, preventive screenings, medication management, follow-ups, or new health concerns.",
      links: [{ label: "annual physicals", href: BLOG_PATHS.annualPhysical }],
    },
    {
      type: "p",
      text: "Searching by neighborhood can make it easier to find a convenient practice. Patients searching for primary care in Manhattan may consider areas such as:",
    },
    {
      type: "ul",
      items: [
        "Union Square",
        "Greenwich Village",
        "Chelsea",
        "Flatiron District",
        "SoHo",
        "NoHo",
        "Gramercy",
        "West Village",
        "East Village",
        "Lower Manhattan",
      ],
    },
    {
      type: "p",
      text: "Umbrella Health is located at 32 West 14th Street, New York, NY 10011, providing primary care in Lower Manhattan.",
      links: [{ label: "Contact Us", href: ROUTES.contactUs }],
    },

    {
      type: "h2",
      heading: "How Can You Tell If a Primary Care Doctor Is Accepting New Patients?",
    },
    {
      type: "p",
      text: "The most reliable way is to check the practice's current website information and contact the office directly.",
    },
    {
      type: "p",
      text: "A practice may accept new patients while individual physicians have different appointment availability. Availability can also change depending on the type of appointment you need.",
    },
    {
      type: "p",
      text: "Ask:",
    },
    {
      type: "ul",
      items: [
        "Are you accepting new adult patients?",
        "What is the earliest available appointment?",
        "Can I choose my primary care doctor?",
        "Are same-day sick visits available?",
        "Do you offer telehealth?",
        "What should I bring to my first appointment?",
        "Can I schedule an annual physical?",
      ],
    },
    {
      type: "p",
      text: "Umbrella Health currently states that it is accepting new primary care patients in Lower Manhattan. You can also read about same-day sick visits in Lower Manhattan if you need care soon for an acute concern.",
      links: [
        {
          label: "same-day sick visits in Lower Manhattan",
          href: BLOG_PATHS.sameDaySickVisits,
        },
      ],
    },
    {
      type: "cta",
      prompt: "Check new-patient availability",
      label: "Schedule Your Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "How Does Insurance Affect Your Choice of Primary Care Doctor in NYC?",
    },
    {
      type: "p",
      text: "Insurance can significantly affect which primary care doctors you can choose.",
    },
    {
      type: "p",
      text: "Before booking an appointment, confirm that the specific insurance plan you have is accepted. A medical practice may participate with an insurance company but not every plan offered by that company.",
    },
    {
      type: "p",
      text: "Check:",
    },
    {
      type: "ul",
      items: [
        "Insurance company",
        "Exact plan name",
        "In-network status",
        "Primary care benefits",
        "Referral requirements",
        "Copay or deductible",
        "Coverage for laboratory and diagnostic services",
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.insurancePrimaryCare,
      alt: "Insurance accepted for primary care at Umbrella Health NYC",
      caption: "Confirm your exact plan before your first primary care visit.",
    },
    {
      type: "p",
      text: "Umbrella Health works with many major insurance plans and verifies insurance benefits before visits. Patients should still confirm their individual benefits and coverage before receiving care.",
      links: [{ label: "insurance plans", href: ROUTES.insurance }],
    },
    {
      type: "ctaBox",
      title: "Have Questions About Insurance?",
      body: "Contact Umbrella Health before your appointment to confirm insurance information and discuss available primary care options.",
      links: [
        { label: "View Insurance Information →", href: ROUTES.insurance },
        { label: "Book an Appointment →", href: BOOKING_URL },
      ],
    },

    {
      type: "h2",
      heading: "What Should You Look for in a Primary Care Doctor?",
    },
    {
      type: "p",
      text: "Choosing a primary care doctor is about more than finding the first available appointment.",
    },
    {
      type: "p",
      text: "Consider whether the doctor:",
    },
    {
      type: "ul",
      items: [
        "Has appropriate medical qualifications",
        "Treats adults and your specific healthcare needs",
        "Provides preventive care",
        "Manages common chronic conditions",
        "Offers convenient appointment options",
        "Communicates clearly",
        "Is located conveniently",
        "Accepts your insurance",
        "Can coordinate specialty care when necessary",
      ],
    },
    {
      type: "p",
      text: "You should also consider whether the practice can support your healthcare needs as they change over time — including how often you should see a primary care doctor for preventive and chronic care follow-up.",
      links: [
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h2",
      heading: "Should You Check a Primary Care Doctor's Credentials?",
    },
    {
      type: "p",
      text: "Yes. Physician credentials can help you evaluate a doctor's qualifications and professional background.",
    },
    {
      type: "p",
      text: "Look for:",
    },
    {
      type: "ul",
      items: [
        "Medical education",
        "Specialty",
        "Board certification",
        "Professional experience",
        "New York medical licensure",
      ],
    },
    {
      type: "p",
      text: "Patients can also use New York State resources to research physician information.",
      links: [{ label: "New York State resources", href: NYS_PHYSICIAN_PROFILE_URL }],
    },
    {
      type: "p",
      text: "At Umbrella Health, patients can review the physician team before choosing a primary care doctor.",
      links: [{ label: "physician team", href: ROUTES.ourTeam }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.newPatientsTeam,
      alt: "Patients reviewing primary care options at Umbrella Health NYC",
    },

    {
      type: "h2",
      heading: "What Primary Care Services Should a NYC Doctor Provide?",
    },
    {
      type: "p",
      text: "Primary care should address routine healthcare needs while helping patients manage their health over time.",
    },
    {
      type: "p",
      text: "Common primary care services include:",
    },
    {
      type: "ul",
      items: [
        "Annual physical exams",
        "Preventive health screenings",
        "Vaccinations",
        "Sick visits",
        "Blood pressure management",
        "Diabetes management",
        "Cholesterol management",
        "Thyroid care",
        "Medication management",
        "Weight management",
        "Laboratory testing",
        "Specialist referrals",
      ],
    },
    {
      type: "p",
      text: "Umbrella Health provides adult primary care with access to preventive services, chronic condition management, diagnostic testing, and specialty care. This can be especially useful for patients who want different aspects of their healthcare coordinated through one practice.",
      links: [
        {
          label: "chronic condition management",
          href: BLOG_PATHS.chronicConditions,
        },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },

    {
      type: "h2",
      heading: "Why Does Location Matter When Choosing Primary Care in NYC?",
    },
    {
      type: "p",
      text: "Location matters because primary care is often an ongoing relationship.",
    },
    {
      type: "p",
      text: "You may need to visit your doctor for:",
    },
    {
      type: "ul",
      items: [
        "Annual physicals",
        "Preventive screenings",
        "Medication reviews",
        "Chronic condition follow-ups",
        "New health concerns",
        "Referrals",
        "Diagnostic testing",
      ],
    },
    {
      type: "p",
      text: "Choosing a practice close to your home or workplace can make regular appointments easier to maintain.",
    },
    {
      type: "p",
      text: "For patients living or working around Union Square, Chelsea, Greenwich Village, Flatiron, and other Lower Manhattan neighborhoods, Umbrella Health's West 14th Street location can provide a convenient option for primary care.",
    },
    {
      type: "cta",
      prompt: "Looking for primary care in Lower Manhattan?",
      label: "Learn About Primary Care Services →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Questions Should You Ask Before Booking a New-Patient Appointment?",
    },
    {
      type: "h3",
      heading: "What Should You Ask the Doctor's Office?",
    },
    {
      type: "p",
      text: "Asking a few questions before scheduling can help you determine whether a primary care practice is right for you.",
    },
    {
      type: "ul",
      items: [
        "Are you accepting new patients?",
        "How soon can I get an appointment?",
        "Do you accept my exact insurance plan?",
        "Can I choose my physician?",
        "Do you offer annual physicals?",
        "Are same-day sick visits available?",
        "Do you offer telehealth?",
        "Can you order laboratory testing?",
        "How are specialist referrals handled?",
        "What should I bring to my first appointment?",
      ],
    },
    {
      type: "p",
      text: "These questions can help you compare practices before committing to a new primary care doctor.",
    },

    {
      type: "h2",
      heading: "How Can You Check a Primary Care Doctor's Availability?",
    },
    {
      type: "p",
      text: "Availability can vary by physician and appointment type.",
    },
    {
      type: "p",
      text: "One doctor may have limited availability while another physician at the same practice may have an earlier opening.",
    },
    {
      type: "p",
      text: "If you need an appointment soon, explain what type of care you need when contacting the practice.",
    },
    {
      type: "p",
      text: "Ask about:",
    },
    {
      type: "ul",
      items: [
        "New-patient appointments",
        "Annual physicals",
        "Same-day sick visits",
        "Follow-up appointments",
        "Telehealth visits",
        "Preventive care appointments",
      ],
    },
    {
      type: "p",
      text: "For Umbrella Health patients, appointment availability can be confirmed directly with the practice when scheduling.",
    },

    {
      type: "h2",
      heading: "Can a Primary Care Doctor Coordinate Specialist Care?",
    },
    {
      type: "p",
      text: "Yes. Primary care doctors can help coordinate care when a patient needs additional evaluation or treatment.",
    },
    {
      type: "p",
      text: "Depending on the patient's needs, a primary care doctor may recommend specialist evaluation, diagnostic testing, or additional treatment.",
    },
    {
      type: "p",
      text: "Specialty care may include:",
    },
    {
      type: "ul",
      items: [
        "Cardiology",
        "Neurology",
        "Sleep medicine",
        "Pain management",
        "Medical weight management",
        "Diagnostic testing",
      ],
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management →", href: ROUTES.painManagement },
        { label: "Medical Weight Loss NYC →", href: ROUTES.medicalWeightLoss },
        { label: "Diagnostic Testing NYC →", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "p",
      text: "Umbrella Health connects primary care with specialty and diagnostic services, giving patients access to multiple areas of healthcare within the same organization.",
    },
    {
      type: "ctaBox",
      title: "Want More Connected Care?",
      body: "Explore primary care at Umbrella Health and learn how primary care, diagnostics, and specialty services can work together.",
      links: [
        { label: "Explore Primary Care →", href: ROUTES.primaryCare },
        { label: "Book an Appointment →", href: BOOKING_URL },
      ],
    },

    {
      type: "h2",
      heading: "What Should You Bring to Your First Primary Care Appointment?",
    },
    {
      type: "p",
      text: "Preparing your health information before your appointment can help your doctor understand your medical history.",
    },
    {
      type: "p",
      text: "Bring:",
    },
    {
      type: "ul",
      items: [
        "Photo identification",
        "Insurance information",
        "Current medication list",
        "Medication doses",
        "Allergy information",
        "Previous medical records",
        "Recent laboratory results",
        "Imaging reports",
        "Vaccination history",
        "List of current health concerns",
      ],
    },
    {
      type: "p",
      text: "It is also helpful to write down questions or symptoms you want to discuss.",
    },
    {
      type: "p",
      text: "If you are transferring from another primary care doctor, ask whether your previous medical records can be sent to the new practice.",
    },

    {
      type: "h2",
      heading: "Can You Find a Primary Care Doctor in Lower Manhattan Accepting New Patients?",
    },
    {
      type: "p",
      text: "Yes. Patients searching for a primary care doctor in Lower Manhattan accepting new patients can compare practices based on location, insurance, availability, and services.",
    },
    {
      type: "p",
      text: "Umbrella Health is located at 32 West 14th Street, New York, NY 10011, and provides adult primary care in Lower Manhattan.",
    },
    {
      type: "p",
      text: "Primary care services include:",
    },
    {
      type: "ul",
      items: [
        "Annual physicals",
        "Preventive care",
        "Sick visits",
        "Chronic condition management",
        "Medication management",
        "Weight management",
        "Laboratory testing",
        "Specialist referrals",
      ],
    },
    {
      type: "p",
      text: "The practice also provides access to specialty and diagnostic services.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic interior for primary care visits in Lower Manhattan",
    },
    {
      type: "cta",
      prompt: "Find primary care in Lower Manhattan",
      label: "Contact Umbrella Health About New-Patient Appointments →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "How Can You Compare Primary Care Doctors in NYC?",
    },
    {
      type: "p",
      text: "A simple comparison can help you narrow down your options.",
    },
    {
      type: "table",
      headers: ["Factor", "What to Check"],
      rows: [
        ["New patients", "Is the practice accepting new patients?"],
        ["Availability", "How soon is an appointment available?"],
        ["Insurance", "Is your exact plan accepted?"],
        ["Location", "Is the office convenient?"],
        ["Credentials", "Is the physician appropriately qualified?"],
        ["Services", "Does the practice provide the care you need?"],
        ["Diagnostics", "Are testing services available?"],
        ["Specialists", "Can care be coordinated when needed?"],
        ["Communication", "Can you easily contact the office?"],
        ["Follow-up", "Is ongoing care easy to schedule?"],
      ],
      note: "The goal is to find a doctor who fits both your immediate needs and your long-term healthcare needs.",
    },

    {
      type: "h2",
      heading: "Can You Find a Primary Care Doctor in NYC Online?",
    },
    {
      type: "p",
      text: "Yes. Online searches can help you compare primary care doctors, practices, locations, services, insurance information, and appointment options.",
    },
    {
      type: "p",
      text: "However, online information should be confirmed directly with the medical practice, especially for:",
    },
    {
      type: "ul",
      items: [
        "New-patient availability",
        "Insurance participation",
        "Appointment times",
        "Referral requirements",
        "Services currently offered",
      ],
    },
    {
      type: "p",
      text: "If you are considering Umbrella Health, you can review the practice's primary care services, physician team, and insurance information before scheduling.",
      links: [
        { label: "primary care services", href: ROUTES.primaryCare },
        { label: "physician team", href: ROUTES.ourTeam },
        { label: "insurance information", href: ROUTES.insurance },
      ],
    },

    {
      type: "faq",
      heading: "What Are the Most Common Questions About Finding a Primary Care Doctor in NYC?",
      subtitle:
        "Direct answers to questions patients ask when searching for a primary care doctor NYC accepting new patients.",
      items: [
        {
          q: "How Do I Find a Primary Care Doctor Accepting New Patients in NYC?",
          a: "Search for local primary care practices, check whether they are accepting new patients, verify your insurance, and contact the office to confirm appointment availability.",
        },
        {
          q: "How Do I Find a Primary Care Doctor Near Me in NYC?",
          a: "Search by neighborhood, ZIP code, or proximity to your home or workplace. Patients in Lower Manhattan can consider practices around Union Square, Chelsea, Greenwich Village, Flatiron, and surrounding neighborhoods.",
        },
        {
          q: "Can I Choose My Own Primary Care Doctor?",
          a: "Often, yes. Your ability to choose a specific physician may depend on the practice, physician availability, and your insurance plan.",
        },
        {
          q: "How Do I Know If a Primary Care Doctor Accepts My Insurance?",
          a: "Check your insurance company's provider directory and confirm directly with the medical practice. Your exact insurance plan matters because participation can vary between plans.",
        },
        {
          q: "Should I Choose an Internal Medicine or Family Medicine Doctor?",
          a: "Both can provide primary care. Internal medicine physicians primarily focus on adult healthcare, while family medicine physicians provide broader care across different age groups. Your age, healthcare needs, and personal preferences can help determine which type of physician is right for you.",
        },
        {
          q: "Can I See a Primary Care Doctor for a Same-Day Health Concern?",
          a: "Some primary care practices offer same-day sick visits when appointments are available. Contact the practice to ask about current availability.",
        },
        {
          q: "Is Umbrella Health Accepting New Primary Care Patients?",
          a: "Yes. Umbrella Health currently states that it is accepting new patients for primary care in Lower Manhattan. Patients can contact the practice to confirm current availability, insurance information, and appointment options.",
        },
      ],
    },

    {
      type: "h2",
      heading: "How Can You Find the Right Primary Care Doctor in NYC?",
      subtitle: "Look beyond the first open slot — compare fit for long-term care.",
    },
    {
      type: "p",
      text: "Finding the right primary care doctor starts with more than searching for the first available appointment.",
    },
    {
      type: "p",
      text: "Compare location, insurance, credentials, availability, services, and long-term care options before making your decision.",
    },
    {
      type: "p",
      text: "For patients looking for primary care in Lower Manhattan, Umbrella Health offers adult primary care with access to preventive care, sick visits, chronic condition management, diagnostic testing, and specialty care.",
    },
    {
      type: "p",
      text: "The right primary care doctor should be someone you can access conveniently and continue seeing as your healthcare needs change.",
    },

    {
      type: "h2",
      heading: "Ready to Find a Primary Care Doctor in NYC?",
    },
    {
      type: "p",
      text: "If you are looking for a primary care doctor in NYC accepting new patients, Umbrella Health can help you get started.",
    },
    {
      type: "p",
      text: "You can review the physician team, confirm your insurance, discuss your healthcare needs, and check current appointment availability.",
    },
    {
      type: "ctaBox",
      title: "Schedule Your Primary Care Appointment",
      body: "Contact Umbrella Health today to check new-patient availability and schedule your primary care appointment in Lower Manhattan.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet Our Physicians →", href: ROUTES.ourTeam },
        { label: "Primary Care NYC →", href: ROUTES.primaryCare },
      ],
    },
    { type: "clinicFooter" },
  ],
};
