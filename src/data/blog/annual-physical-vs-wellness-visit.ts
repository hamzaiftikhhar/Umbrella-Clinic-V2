import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const HEALTHCARE_GOV_PREVENTIVE_URL = "https://www.healthcare.gov/coverage/preventive-care-benefits/";
const MEDICARE_AWV_URL = "https://www.medicare.gov/coverage/yearly-wellness-visits";
const MEDICARE_WELCOME_URL = "https://www.medicare.gov/coverage/welcome-to-medicare-preventive-visit";

export const annualPhysicalVsWellnessPost: BlogPost = {
  slug: BLOG_SLUGS.annualPhysicalVsWellness,
  title: "Annual Physical vs. Wellness Visit: What's the Difference?",
  subtitle:
    "How an annual physical compares with a wellness visit, what Medicare's Annual Wellness Visit includes, and how coverage can differ.",
  excerpt:
    "Annual physical vs wellness visit: learn what each includes, how Medicare's Annual Wellness Visit differs and what insurance may cover. Book your NYC visit.",
  seoTitle: "Annual Physical vs Wellness visit: What's the Difference?",
  metaDescription:
    "Annual physical vs wellness visit: learn what each includes, how Medicare's Annual Wellness Visit differs and what insurance may cover. Book your NYC visit.",
  focusKeyword: "annual physical vs wellness visit",
  category: "Preventive Care",
  readTime: "11 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.annualPhysicalVsWellness,
  imageAlt:
    "Patient and primary care doctor discussing an annual physical versus a wellness visit",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: 'An annual physical usually means a yearly preventive visit with a hands-on physical exam, a review of your health and age-appropriate screenings or lab work. "Wellness visit" is often used to mean the same thing, but for people with Medicare, the Annual Wellness Visit is a specific benefit focused on a health risk assessment and a personalized prevention plan, and it is not a head-to-toe physical exam. Because insurers define these visits differently, check what your plan covers before you book.',
    },
    {
      type: "p",
      text: 'The words "physical," "checkup," "preventive visit" and "wellness visit" get used loosely, and that can lead to surprises at the front desk or on a bill. This guide explains the differences in plain language so you can book the right visit with your primary care doctor in NYC.',
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Not sure which visit to book?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Is an Annual Physical?",
    },
    {
      type: "p",
      text: "An annual physical (sometimes called a routine checkup or preventive visit) is a yearly visit focused on staying well rather than treating a specific problem. It often includes:",
    },
    {
      type: "ul",
      items: [
        "A review of your medical, family and medication history",
        "Vital signs, including blood pressure, and weight",
        "A physical exam",
        "Discussion of lifestyle, sleep, mood and risk factors",
        "Age- and risk-appropriate screenings and vaccinations",
        "Lab work, when appropriate",
      ],
    },
    {
      type: "p",
      text: "See blood tests included in a primary care checkup for common labs. Our detailed guide to what to expect at your annual physical in NYC walks through the visit step by step.",
      links: [
        {
          label: "blood tests included in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
        {
          label: "what to expect at your annual physical in NYC",
          href: BLOG_PATHS.annualPhysical,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Is a Wellness Visit?",
    },
    {
      type: "p",
      text: 'Outside of Medicare, "wellness visit" is usually just another name for a preventive visit, and many commercial plans use the terms interchangeably. The exact content can vary by practice and by what your plan counts as preventive.',
    },
    {
      type: "p",
      text: "HealthCare.gov explains that many health plans must cover a set of preventive services, such as certain screenings and vaccines, without charging a copay or coinsurance when you see an in-network provider. Which services are included depends on your age, sex and risk factors.",
      links: [{ label: "HealthCare.gov explains", href: HEALTHCARE_GOV_PREVENTIVE_URL }],
    },

    {
      type: "h2",
      heading: "What Is the Medicare Annual Wellness Visit?",
    },
    {
      type: "p",
      text: "For people with Medicare Part B, the Annual Wellness Visit (AWV) is a defined benefit. According to Medicare.gov, it is a visit to develop or update a personalized plan to help prevent disease and disability, based on your current health and risk factors. It typically includes a health risk assessment questionnaire and a review of your history, medicines and screening schedule.",
      links: [{ label: "Annual Wellness Visit (AWV)", href: MEDICARE_AWV_URL }],
    },
    {
      type: "p",
      text: 'Medicare.gov is clear that the Annual Wellness Visit is not a physical exam. Medicare also offers a one-time "Welcome to Medicare" preventive visit within the first 12 months of Part B coverage.',
      links: [
        { label: '"Welcome to Medicare" preventive visit', href: MEDICARE_WELCOME_URL },
      ],
    },

    {
      type: "h2",
      heading: "Annual Physical vs. Wellness Visit at a Glance",
    },
    {
      type: "table",
      headers: ["Feature", "Annual physical / preventive visit vs. Medicare AWV"],
      rows: [
        [
          "Hands-on physical exam",
          "Annual physical: usually yes. Medicare Annual Wellness Visit: not the focus; not a physical exam.",
        ],
        [
          "Health risk assessment",
          "Annual physical: often informal. Medicare Annual Wellness Visit: yes, structured.",
        ],
        [
          "Personalized prevention plan",
          "Annual physical: often discussed. Medicare Annual Wellness Visit: yes, a core part.",
        ],
        [
          "Screenings and vaccines",
          "Annual physical: discussed and ordered as appropriate. Medicare Annual Wellness Visit: screening schedule reviewed and planned.",
        ],
        [
          "Who uses the term",
          "Annual physical / wellness visit: most commercial plans and practices. Annual Wellness Visit: Medicare.",
        ],
      ],
      note: "Comparison chart of annual physical and Medicare Annual Wellness Visit.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.annualPhysicalVsWellnessChart,
      alt: "Comparison chart of annual physical and Medicare Annual Wellness Visit",
    },
    {
      type: "cta",
      prompt: "Not sure which visit to book?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `Call ${SITE_PHONE}. The team can help you understand what your plan calls a preventive visit.`,
    },

    {
      type: "h2",
      heading: "Why a Preventive Visit Can Turn Into a Separate Charge",
    },
    {
      type: "p",
      text: 'This is one of the most common surprises. A preventive visit is focused on prevention. If you also ask your doctor to evaluate a new or ongoing problem, such as knee pain, a rash or a change in blood sugar, that part of the visit may be billed as a separate "problem" visit, which can involve a copay or deductible depending on your plan.',
    },
    {
      type: "p",
      text: "That does not mean you shouldn't bring up concerns. It does mean it is worth asking the office and your insurer how your plan handles this. Umbrella Health's insurance page says the team verifies coverage before your visit.",
      links: [{ label: "insurance page", href: ROUTES.insurance }],
    },

    {
      type: "h2",
      heading: "Which Visit Is Right for You?",
    },
    {
      type: "ul",
      items: [
        "Most adults with commercial insurance: a yearly preventive visit, often called an annual physical or wellness visit, is typical.",
        'New to Medicare: consider the "Welcome to Medicare" visit in your first year, then the Annual Wellness Visit yearly after that.',
        "Managing a chronic condition: you may need regular follow-up visits in addition to your preventive visit.",
      ],
    },
    {
      type: "p",
      text: "How often you need a preventive visit depends on your age and health; see how often you should see a primary care doctor. Ongoing chronic care is covered in managing chronic conditions without the runaround. Whichever visit you book, your doctor will help decide which preventive health screenings adults need at your age.",
      links: [
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
        {
          label: "managing chronic conditions without the runaround",
          href: BLOG_PATHS.chronicConditions,
        },
        {
          label: "preventive health screenings adults need",
          href: BLOG_PATHS.preventiveScreenings,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Happens After Your Preventive Visit?",
    },
    {
      type: "p",
      text: "A preventive visit often leads to a short list of next steps. Depending on what you and your doctor discussed, that might include:",
    },
    {
      type: "ul",
      items: [
        "Completing lab work or screenings that were ordered",
        "Scheduling vaccines you are due for",
        "Booking a follow-up to review results or recheck blood pressure",
        "Starting lifestyle changes you agreed on, such as activity, nutrition or sleep goals",
        "Seeing a specialist, if something needs a closer look",
      ],
    },
    {
      type: "p",
      text: "If a result needs attention, your primary care doctor can explain what it means and what happens next. For example, a borderline blood sugar result might lead to repeat testing, as described in our guide to primary care for diabetes. If you are still deciding what kind of doctor to see for adult preventive care, read primary care vs. internal medicine.",
      links: [
        { label: "primary care for diabetes", href: BLOG_PATHS.primaryCareDiabetes },
        {
          label: "primary care vs. internal medicine",
          href: BLOG_PATHS.primaryCareVsInternalMedicine,
        },
      ],
    },

    {
      type: "h2",
      heading: "How to Prepare for Either Visit",
    },
    {
      type: "ul",
      items: [
        "Bring your insurance card and a list of medicines and supplements",
        "Know your family history, if possible",
        "Bring recent test results from other doctors",
        "Note any vaccines you've had recently",
        "Write down questions, and mention if you also want to discuss a specific problem",
      ],
    },

    {
      type: "h2",
      heading: "Preventive Visits in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, steps from Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. Its Primary Care NYC page lists annual physical visits, annual wellness visits and preventive care, and in-house diagnostic testing can support recommended lab work.",
      links: [
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "p",
      text: "The practice's insurance page also mentions longevity and executive physicals offered on a cash-pay basis. Ask the office what those visits include, and confirm whether Medicare Annual Wellness Visits and Welcome to Medicare visits are available if you have Medicare.",
      links: [{ label: "insurance page", href: ROUTES.insurance }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for annual physicals and wellness visits in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about annual physical vs wellness visit, Medicare coverage, and billing.",
      items: [
        {
          q: "Is a Wellness Visit the Same as a Physical?",
          a: "For many commercial insurance plans, the terms are used interchangeably. For Medicare, the Annual Wellness Visit is different and is not a physical exam.",
        },
        {
          q: "Does Insurance Cover an Annual Physical?",
          a: "Many plans cover preventive visits and certain preventive services without cost-sharing when you use an in-network provider. Check your plan's details, as coverage varies.",
        },
        {
          q: "Does Medicare Cover an Annual Physical?",
          a: 'Medicare covers the Annual Wellness Visit and the one-time "Welcome to Medicare" visit. Medicare.gov notes the Annual Wellness Visit is not a routine physical exam. Some Medicare Advantage plans may offer additional benefits.',
        },
        {
          q: "Can I Discuss a Health Problem During My Wellness Visit?",
          a: "Yes, but addressing a new or ongoing problem may be billed separately, depending on your plan. Ask the office when you book.",
        },
        {
          q: "How Long Does an Annual Physical Take?",
          a: "It varies by practice and by how much you need to discuss. Ask the office when you schedule so you can plan your day.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Book Your Preventive Visit",
    },
    {
      type: "p",
      text: "A yearly preventive visit is one of the simplest ways to stay on top of your health. Visit Umbrella Health's home page, explore Primary Care NYC, or book online.",
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
      title: "Ready to book an annual physical or wellness visit?",
      body: "Schedule a preventive visit at Umbrella Health in Lower Manhattan. The team can help match the visit type to your insurance plan.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Check Insurance →", href: ROUTES.insurance },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
