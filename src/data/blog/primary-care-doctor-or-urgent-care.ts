import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const HEALTHCARE_GOV_URGENT_CARE_URL = "https://www.healthcare.gov/glossary/urgent-care/";
const MEDLINEPLUS_ER_URL = "https://medlineplus.gov/ency/patientinstructions/000593.htm";
const CDC_STROKE_SIGNS_URL = "https://www.cdc.gov/stroke/signs-symptoms/index.html";

export const primaryCareOrUrgentCarePost: BlogPost = {
  slug: BLOG_SLUGS.primaryCareOrUrgentCare,
  title: "Should I See a Primary Care Doctor or Go to Urgent Care?",
  subtitle:
    "Compare primary care, urgent care and the ER for non-emergency problems, same-day visits, costs and continuity in NYC.",
  excerpt:
    "Not sure whether to see a primary care doctor or urgent care? Compare options, costs, continuity and ER warning signs in NYC. Book a same-day visit today.",
  seoTitle: "Primary Care Doctor or Urgent Care? How to Choose in NYC",
  metaDescription:
    "Not sure whether to see a primary care doctor or urgent care? Compare options, costs, continuity and ER warning signs in NYC. Book a same-day visit today.",
  focusKeyword: "primary care doctor or urgent care",
  category: "Primary Care",
  readTime: "12 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.primaryCareOrUrgentCare,
  imageAlt: "New Yorker deciding between a primary care doctor and urgent care for a minor illness",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "For a new but non-emergency problem, start with your primary care doctor if you can be seen soon, because they know your history and can follow up. Urgent care can be a practical option when your doctor's office is closed or can't see you in time for a minor illness or injury. For possible emergencies, such as chest pain, trouble breathing, stroke symptoms or severe bleeding, call 911 or go to the emergency room, not primary care or urgent care.",
    },
    {
      type: "p",
      text: "New Yorkers have more care options than ever: primary care offices, urgent care centers, telehealth and hospital emergency departments. Picking the right one can save time and money and, in real emergencies, protect your health. This guide explains how the options compare and how a primary care doctor in NYC fits in.",
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Feeling unwell but it's not an emergency?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "Primary Care, Urgent Care and the ER: What's the Difference?",
    },
    {
      type: "table",
      headers: ["Care setting", "Best for"],
      rows: [
        [
          "Primary care",
          "Ongoing care, prevention, chronic conditions and many new non-emergency problems",
        ],
        ["Urgent care", "Minor illnesses and injuries when your usual doctor isn't available"],
        ["Emergency room", "Serious or life-threatening conditions"],
      ],
    },
    {
      type: "table",
      headers: ["Question", "What to expect"],
      rows: [
        [
          "Knows your history?",
          "Primary care: yes, over time. Urgent care and the ER: usually not.",
        ],
        [
          "Follow-up?",
          "Primary care: built in. Urgent care: usually limited; you are often told to follow up with your PCP. ER: referral to follow-up care.",
        ],
        [
          "Typical cost?",
          "Primary care: often lowest, depending on your plan. Urgent care: often moderate. ER: often highest.",
        ],
      ],
      note: "Costs vary by plan, so check your insurance.",
    },
    {
      type: "p",
      text: "Costs vary by plan, so check your insurance. HealthCare.gov describes urgent care as care for an illness, injury or condition serious enough that a reasonable person would seek care right away, but not so severe that it requires emergency room care.",
      links: [{ label: "HealthCare.gov", href: HEALTHCARE_GOV_URGENT_CARE_URL }],
    },

    {
      type: "h2",
      heading: "When to See Your Primary Care Doctor",
    },
    {
      type: "p",
      text: "Your primary care doctor is usually the best first call for:",
    },
    {
      type: "ul",
      items: [
        "Cold, flu or COVID-19 symptoms that are not severe",
        "Sore throat, sinus symptoms or ear pain",
        "Urinary symptoms",
        "Mild rashes",
        "New symptoms linked to an existing condition, such as rising blood pressure readings or blood sugar changes",
        "Medication questions or refills",
        "Follow-up after an urgent care or ER visit",
      ],
    },
    {
      type: "p",
      text: "Many practices, including Umbrella Health, offer same-day sick visits when appointments are available. Our guide to same-day sick visits in Lower Manhattan explains what those visits can cover and how testing works.",
      links: [
        {
          label: "same-day sick visits in Lower Manhattan",
          href: BLOG_PATHS.sameDaySickVisits,
        },
      ],
    },

    {
      type: "h3",
      heading: "Why Continuity Matters",
    },
    {
      type: "p",
      text: "When the doctor who sees you for a sore throat is the same practice that manages your blood pressure or diabetes, they can check for medicine interactions, look at trends in your results and follow up afterward. That continuity is one of the core ideas in what primary care is and what a primary care doctor does.",
      links: [
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "When Urgent Care May Make Sense",
    },
    {
      type: "p",
      text: "Urgent care can be a reasonable choice when:",
    },
    {
      type: "ul",
      items: [
        "Your primary care office is closed or has no same-day availability",
        "You have a minor injury, such as a sprain or a small cut that may need stitches",
        "You are away from home and can't reach your usual doctor",
      ],
    },
    {
      type: "p",
      text: "If you use urgent care, share the visit summary with your primary care doctor so your record stays complete.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.careSettingComparison,
      alt: "Comparison of when to use primary care, urgent care or the emergency room",
    },
    {
      type: "cta",
      prompt: "Feeling unwell but it's not an emergency?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `Call ${SITE_PHONE} to ask about same-day availability.`,
    },

    {
      type: "h2",
      heading: "When to Go to the Emergency Room",
    },
    {
      type: "p",
      text: "MedlinePlus explains when to use the emergency room. Call 911 or go to the ER for symptoms such as:",
      links: [
        {
          label: "MedlinePlus explains when to use the emergency room",
          href: MEDLINEPLUS_ER_URL,
        },
      ],
    },
    {
      type: "ul",
      items: [
        "Chest pain or pressure",
        "Trouble breathing",
        "Signs of stroke: sudden numbness or weakness, confusion, trouble speaking or seeing, or a sudden severe headache",
        "Fainting, seizures or severe confusion",
        "Severe bleeding or a serious injury",
        "Severe allergic reaction",
        "Thoughts of harming yourself or others",
      ],
    },
    {
      type: "p",
      text: "See the CDC's stroke warning signs for more detail. This is not a complete list. If something feels seriously wrong, treat it as an emergency. In a mental health crisis, you can also call or text 988.",
      links: [{ label: "CDC's stroke warning signs", href: CDC_STROKE_SIGNS_URL }],
    },

    {
      type: "h2",
      heading: "Common Situations: Where Should You Go?",
    },
    {
      type: "p",
      text: "These examples are general guidance, not a diagnosis. When in doubt, call your doctor's office for advice.",
    },
    {
      type: "ul",
      items: [
        'A headache that feels like your usual pattern: your primary care doctor can help. A sudden, severe "worst ever" headache is an emergency.',
        "A high home blood pressure reading without symptoms: recheck it and contact your primary care office. A very high reading with chest pain, shortness of breath or neurological symptoms needs emergency care.",
        "A twisted ankle you can still walk on: urgent care or a same-day primary care visit may be reasonable.",
        "A flare of a long-term condition such as asthma: call your primary care team early. Severe breathing trouble is an emergency.",
        "Needing a prescription refill: contact your primary care office rather than urgent care, so your medicine list stays accurate.",
      ],
    },
    {
      type: "p",
      text: "Our guide on when a headache should be evaluated by a primary care doctor lists warning signs. See primary care for high blood pressure for home readings, and managing chronic conditions without the runaround for ongoing plans.",
      links: [
        {
          label: "when a headache should be evaluated by a primary care doctor",
          href: BLOG_PATHS.headacheWhenToSeeDoctor,
        },
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
        {
          label: "managing chronic conditions without the runaround",
          href: BLOG_PATHS.chronicConditions,
        },
      ],
    },

    {
      type: "h2",
      heading: "What About Telehealth?",
    },
    {
      type: "p",
      text: "A video visit can work for some follow-ups and minor concerns when a physical exam isn't needed. Umbrella Health's contact page says telehealth is available across New York State for follow-ups and acute concerns. Ask the office whether telehealth is open to new patients or established patients only. Read more in our guide to telehealth primary care in NYC.",
      links: [
        { label: "contact page", href: ROUTES.contactUs },
        {
          label: "telehealth primary care in NYC",
          href: BLOG_PATHS.telehealthPrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "How to Make the Right Choice Quickly",
    },
    {
      type: "p",
      text: "Ask yourself three questions:",
    },
    {
      type: "ul",
      items: [
        "Could this be life-threatening? If yes, call 911.",
        "Can my primary care office see me today or tomorrow? If yes, that is usually the best place.",
        "Is my office closed and the problem can't wait? Urgent care may be a reasonable option.",
      ],
    },
    {
      type: "p",
      text: "It helps to set up care before you get sick. If you don't have a regular doctor, see our guide on finding a primary care doctor in NYC who is accepting new patients.",
      links: [
        {
          label: "finding a primary care doctor in NYC who is accepting new patients",
          href: BLOG_PATHS.acceptingNewPatients,
        },
      ],
    },

    {
      type: "h2",
      heading: "Same-Day Primary Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near the Union Square station, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. The Primary Care NYC page lists same-day sick visits (when available) and sick visits for common illnesses, and in-house diagnostic testing can support evaluation when appropriate.",
      links: [
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "p",
      text: "Current opening hours are listed on the practice's contact page. Umbrella Health is a primary care and multispecialty practice, not an emergency department.",
      links: [{ label: "contact page", href: ROUTES.contactUs }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for same-day primary care sick visits in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle: "Common questions about choosing a primary care doctor or urgent care in NYC.",
      items: [
        {
          q: "Is Urgent Care More Expensive Than Primary Care?",
          a: "Often, though not always. Costs depend on your insurance plan, copays and deductible. Emergency room visits are usually the most expensive option.",
        },
        {
          q: "Can I Go to Urgent Care Instead of Having a Primary Care Doctor?",
          a: "Urgent care is designed for occasional, time-sensitive needs. It usually does not offer ongoing prevention, chronic condition management or long-term follow-up the way primary care does.",
        },
        {
          q: "Should I Go to Urgent Care for a Fever?",
          a: "Many fevers can be evaluated by your primary care doctor, often the same day. Seek emergency care for fever with a stiff neck, confusion, trouble breathing or other severe symptoms.",
        },
        {
          q: "Can Primary Care Doctors See Me the Same Day?",
          a: "Some practices, including Umbrella Health, offer same-day sick visits when appointments are available. Call or check online booking.",
        },
        {
          q: "What Should I Do After an Urgent Care Visit?",
          a: "Share the visit notes with your primary care doctor and schedule follow-up if you were advised to, especially if symptoms continue.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Build a Relationship Before You Need It",
    },
    {
      type: "p",
      text: "The easiest time to find a primary care doctor is before you are sick. Visit Umbrella Health's home page, explore Primary Care NYC, or book online.",
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
      title: "Need a same-day visit for a non-emergency problem?",
      body: "Book a primary care appointment at Umbrella Health in Lower Manhattan and ask about same-day sick visit availability.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Explore Primary Care NYC →", href: ROUTES.primaryCare },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
