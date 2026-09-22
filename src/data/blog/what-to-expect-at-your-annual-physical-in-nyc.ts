import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const USPSTF_URL = "https://www.uspreventiveservicestaskforce.org/uspstf/";
const CDC_ADULT_SCHEDULE_URL = "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html";
const MEDICARE_AWV_URL = "https://www.medicare.gov/coverage/yearly-wellness-visits";

export const annualPhysicalPost: BlogPost = {
  slug: BLOG_SLUGS.annualPhysical,
  title: "What to Expect at Your Annual Physical in NYC",
  subtitle:
    "Learn what happens during an annual physical, which screenings and blood tests may be discussed, how to prepare, and what follow-up can look like.",
  excerpt:
    "Learn what to expect at an annual physical in NYC, including health checks, preventive screenings, blood tests, vaccines, and follow-up care.",
  seoTitle: "Annual Physical in NYC: What to Expect | Umbrella Health",
  metaDescription:
    "Learn what to expect at an annual physical in NYC, including health checks, preventive screenings, blood tests, vaccines, and follow-up care.",
  focusKeyword: "annual physical in NYC",
  category: "Preventive Care",
  readTime: "12 min read",
  publishedAt: "2026-05-28",
  image: BLOG_IMAGES.annualPhysical,
  imageAlt: "Doctor reviewing health results during an annual physical exam at Umbrella Health",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "An annual physical in NYC is an opportunity to review your overall health, discuss new concerns, update preventive care, and identify which screenings or tests may be appropriate for you.",
    },
    {
      type: "p",
      text: "An annual physical is not exactly the same for every patient. Your visit may look different depending on your age, medical history, family history, medications, risk factors, symptoms, and previous test results.",
    },
    {
      type: "p",
      text: "For many adults, a preventive visit can also be an important part of an ongoing relationship with a primary care doctor in NYC. Your physician can use information from your current visit together with your health history to determine what should be monitored, screened, or followed up.",
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "If you're new to primary care, start with our guide to what primary care is and what a primary care doctor does.",
      links: [
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },
    {
      type: "cta",
      prompt: "Looking for an annual physical in Lower Manhattan?",
      label: "Explore Primary Care NYC at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Happens During an Annual Physical in NYC?",
    },
    {
      type: "p",
      text: "An annual physical generally begins with a discussion of your health history and current concerns. Your physician may review medications, allergies, previous diagnoses, family history, lifestyle factors, and any symptoms you have noticed.",
    },
    {
      type: "p",
      text: "Depending on your individual needs, your visit may include:",
    },
    {
      type: "ul",
      items: [
        "Review of your medical history",
        "Medication and allergy review",
        "Blood pressure and other vital measurements",
        "Discussion of current symptoms or health concerns",
        "Preventive care assessment",
        "Recommended health screenings",
        "Vaccination review",
        "Laboratory testing when clinically appropriate",
        "Personalized follow-up recommendations",
      ],
    },
    {
      type: "p",
      text: "The exact components of an annual physical can vary. Not every adult needs the same laboratory tests, screenings, or examinations.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.physicianPatient,
      alt: "Primary care physician discussing preventive health during an annual physical in NYC",
    },

    {
      type: "h2",
      heading: "What Does a Primary Care Doctor Check During a Physical?",
    },
    {
      type: "p",
      text: "Your physician may use the visit to look at several areas of your health rather than focusing on a single symptom.",
    },
    {
      type: "p",
      text: "Depending on your circumstances, the discussion may include:",
    },
    {
      type: "ul",
      items: [
        "Blood pressure and cardiovascular risk factors",
        "Weight and metabolic health",
        "Diabetes risk",
        "Cholesterol",
        "Medication use",
        "Tobacco or alcohol use",
        "Nutrition and physical activity",
        "Sleep",
        "Mental health concerns",
        "Preventive screening needs",
        "Vaccination status",
      ],
    },
    {
      type: "p",
      text: "Your doctor may also recommend additional evaluation if something in your history, examination, or symptoms warrants follow-up.",
    },

    {
      type: "h2",
      heading: "What Blood Tests Are Done During an Annual Physical?",
    },
    {
      type: "p",
      text: "There is no universal blood-test panel that every adult should receive at every physical.",
    },
    {
      type: "p",
      text: "Your physician may order laboratory testing based on your age, medical history, symptoms, medications, risk factors, and preventive-care needs.",
    },
    {
      type: "p",
      text: "Depending on the situation, testing may include:",
    },
    {
      type: "ul",
      items: [
        "Complete blood count (CBC)",
        "Comprehensive metabolic panel (CMP)",
        "Lipid testing",
        "Blood glucose testing",
        "Hemoglobin A1C",
        "Thyroid function testing",
        "Kidney or liver function testing",
        "Other tests based on individual clinical needs",
      ],
    },
    {
      type: "p",
      text: "Umbrella Health provides diagnostic testing in NYC, including laboratory testing and blood work when medically appropriate.",
      links: [{ label: "diagnostic testing in NYC", href: ROUTES.diagnostics }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.diagnostics,
      alt: "Laboratory testing and blood work during preventive care at Umbrella Health NYC",
    },
    {
      type: "cta",
      prompt: "Need laboratory testing as part of your healthcare evaluation?",
      label: "Explore Diagnostic Testing at Umbrella Health →",
      href: ROUTES.diagnostics,
    },

    {
      type: "h2",
      heading: "What Preventive Screenings Are Discussed During an Annual Physical?",
    },
    {
      type: "p",
      text: "Preventive screenings are not one-size-fits-all. Recommendations can depend on factors such as age, sex, pregnancy status, family history, personal health history, and other risk factors.",
    },
    {
      type: "p",
      text: "The U.S. Preventive Services Task Force publishes recommendations for a range of preventive services, including screening for certain cancers, cardiovascular risk factors, infectious diseases, and mental health conditions. Your physician can determine which recommendations apply to your circumstances.",
      links: [{ label: "U.S. Preventive Services Task Force", href: USPSTF_URL }],
    },
    {
      type: "p",
      text: "Your annual physical may therefore include a discussion of:",
    },
    {
      type: "ul",
      items: [
        "Cancer screening",
        "Blood pressure",
        "Diabetes risk or screening",
        "Cholesterol and cardiovascular risk",
        "Mental health screening",
        "Infectious disease screening when appropriate",
        "Other age- and risk-appropriate preventive services",
      ],
    },
    {
      type: "cta",
      prompt: "Want to understand which preventive services may apply to you?",
      label: "Learn more about Primary Care NYC →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "Are Vaccinations Part of an Annual Physical?",
    },
    {
      type: "p",
      text: "Vaccination status is commonly reviewed as part of preventive healthcare.",
    },
    {
      type: "p",
      text: "Adults do not all follow the same vaccine schedule. Recommendations can depend on age, previous vaccination history, medical conditions, pregnancy, occupation, travel, and other factors. The CDC adult immunization schedule is organized by age and medical indication.",
      links: [{ label: "CDC adult immunization schedule", href: CDC_ADULT_SCHEDULE_URL }],
    },
    {
      type: "p",
      text: "During your visit, your physician may review your vaccination history and determine whether any vaccines or boosters are appropriate.",
    },

    {
      type: "h2",
      heading: "How Do Women's and Men's Physicals Differ?",
    },
    {
      type: "p",
      text: "The basic purpose of preventive primary care is the same: understand your health risks, address current concerns, and identify appropriate preventive services.",
    },
    {
      type: "p",
      text: "However, some screening and preventive recommendations differ according to biological factors, age, anatomy, personal history, and risk factors.",
    },

    {
      type: "h3",
      heading: "What May Be Discussed During a Women's Preventive Visit?",
    },
    {
      type: "p",
      text: "Depending on your circumstances, your physician may discuss:",
    },
    {
      type: "ul",
      items: [
        "Reproductive and sexual health",
        "Contraception",
        "Pregnancy planning",
        "Menopause-related concerns",
        "Cardiovascular and metabolic health",
        "Age-appropriate cancer screening",
        "Vaccinations",
        "Other preventive services",
      ],
    },

    {
      type: "h3",
      heading: "What May Be Discussed During a Men's Preventive Visit?",
    },
    {
      type: "p",
      text: "Depending on your circumstances, your physician may discuss:",
    },
    {
      type: "ul",
      items: [
        "Cardiovascular risk",
        "Blood pressure",
        "Cholesterol",
        "Diabetes risk",
        "Sexual health",
        "Prostate-related concerns",
        "Lifestyle factors",
        "Age- and risk-appropriate screening",
      ],
    },
    {
      type: "p",
      text: "Preventive recommendations should be individualized rather than based solely on gender.",
    },

    {
      type: "h2",
      heading: "What Should You Bring to Your Annual Physical?",
    },
    {
      type: "p",
      text: "Preparing before your appointment can make the visit more productive.",
    },
    {
      type: "p",
      text: "Bring or have available:",
    },
    {
      type: "ul",
      items: [
        "Current medication list",
        "Medication doses",
        "Allergy information",
        "Recent medical records",
        "Recent laboratory or imaging results when relevant",
        "Vaccination history",
        "Family medical history",
        "A list of symptoms or concerns",
        "Questions you want to discuss",
      ],
    },
    {
      type: "p",
      text: "If you take medications prescribed by multiple doctors, bringing an up-to-date medication list can help your primary care physician understand your overall treatment.",
    },

    {
      type: "h2",
      heading: "What Questions Should You Ask at an Annual Physical?",
    },
    {
      type: "p",
      text: "Your physical is also a chance to discuss the health issues you may not have time to address during an acute sick visit.",
    },
    {
      type: "p",
      text: "You may want to ask:",
    },

    {
      type: "h3",
      heading: "Which Preventive Screenings Do I Need?",
    },
    {
      type: "p",
      text: "Ask which screenings are appropriate based on your age, history, and risk factors.",
    },

    {
      type: "h3",
      heading: "Are My Medications Still Appropriate?",
    },
    {
      type: "p",
      text: "Review current prescriptions, over-the-counter medications, supplements, and possible side effects or monitoring needs.",
    },

    {
      type: "h3",
      heading: "Do I Need Any Blood Tests?",
    },
    {
      type: "p",
      text: "Ask whether laboratory testing would be appropriate based on your health history and current concerns.",
    },

    {
      type: "h3",
      heading: "When Should I Come Back?",
    },
    {
      type: "p",
      text: "Your follow-up schedule should depend on your healthcare needs rather than an automatic calendar rule.",
    },
    {
      type: "p",
      text: "For more detail, read How Often Should You See a Primary Care Doctor?.",
      links: [
        {
          label: "How Often Should You See a Primary Care Doctor?",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Happens After an Annual Physical?",
    },
    {
      type: "p",
      text: "An annual physical should not necessarily end when you leave the office.",
    },
    {
      type: "p",
      text: "Depending on the findings, your doctor may recommend:",
    },
    {
      type: "ul",
      items: [
        "Routine follow-up",
        "Additional laboratory testing",
        "Preventive screening",
        "Medication review",
        "Lifestyle changes",
        "Monitoring of an existing condition",
        "Diagnostic evaluation",
        "Specialist consultation",
      ],
    },
    {
      type: "p",
      text: "If testing produces an abnormal result, the next step depends on the specific result and your clinical circumstances. An abnormal laboratory result does not automatically mean that you have a serious medical condition.",
    },
    {
      type: "p",
      text: "A primary care physician can help interpret results in the context of your overall health and determine whether additional evaluation is appropriate.",
    },

    {
      type: "h2",
      heading: "What If Your Physical Identifies a Chronic Health Problem?",
    },
    {
      type: "p",
      text: "Preventive visits can also uncover health issues that require ongoing management.",
    },
    {
      type: "p",
      text: "Conditions such as high blood pressure, diabetes, high cholesterol, asthma, and thyroid disorders may require monitoring over time.",
    },
    {
      type: "p",
      text: "For patients managing an existing condition, primary care can provide continuity between routine preventive visits and follow-up care.",
    },
    {
      type: "p",
      text: "Read Managing Chronic Conditions Without the Runaround to learn more about coordinated chronic care.",
      links: [
        {
          label: "Managing Chronic Conditions Without the Runaround",
          href: BLOG_PATHS.chronicConditions,
        },
      ],
    },
    {
      type: "cta",
      prompt: "Already managing a chronic condition?",
      label: "Establish Ongoing Primary Care in NYC →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "Is an Annual Physical the Same as a Medicare Annual Wellness Visit?",
    },
    {
      type: "p",
      text: "No. These terms are sometimes used interchangeably in everyday conversation, but a Medicare Annual Wellness Visit (AWV) is a specific Medicare preventive benefit.",
    },
    {
      type: "p",
      text: "CMS describes the AWV as a visit that includes a health risk assessment and is used to develop or update a personalized prevention plan. It is different from a routine physical examination.",
      links: [{ label: "Medicare Annual Wellness Visit", href: MEDICARE_AWV_URL }],
    },
    {
      type: "p",
      text: "If you have Medicare, confirm which type of preventive visit you are scheduling and what your plan covers before your appointment.",
    },

    {
      type: "h2",
      heading: "Do You Need an Annual Physical Every Year?",
    },
    {
      type: "p",
      text: "Not every adult needs an identical physical examination on exactly the same schedule.",
    },
    {
      type: "p",
      text: "Preventive care should be individualized based on your age, health history, risk factors, medications, previous screening results, and other clinical considerations.",
    },
    {
      type: "p",
      text: "An ongoing relationship with a primary care physician can help you determine when preventive visits and follow-up care are appropriate.",
    },
    {
      type: "p",
      text: "Our related guide explains how often you should see a primary care doctor and what can affect visit frequency.",
      links: [
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h2",
      heading: "Annual Physical NYC Checklist",
    },
    {
      type: "p",
      text: "Before your appointment, use this simple checklist:",
    },
    {
      type: "h3",
      heading: "Before the Visit",
    },
    {
      type: "ul",
      items: ["Medication list", "Allergies", "Vaccination history", "Recent records", "Questions"],
    },
    {
      type: "h3",
      heading: "During the Visit",
    },
    {
      type: "ul",
      items: [
        "Review health history",
        "Discuss current concerns",
        "Check vital measurements",
        "Review preventive screenings",
        "Discuss lifestyle and risk factors",
      ],
    },
    {
      type: "h3",
      heading: "After the Visit",
    },
    {
      type: "ul",
      items: [
        "Complete recommended testing",
        "Review results",
        "Follow treatment or prevention plan",
        "Schedule follow-up when needed",
        "Coordinate specialist care if appropriate",
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for annual physical visits in Lower Manhattan NYC",
    },

    {
      type: "h2",
      heading: "Where Can You Get an Annual Physical in NYC?",
    },
    {
      type: "p",
      text: "For patients looking for an annual physical in NYC, location and continuity of care can both matter.",
    },
    {
      type: "p",
      text: "Umbrella Health is located at 32 West 14th Street, New York, NY 10011, in Lower Manhattan, near Union Square, Greenwich Village, and the Flatiron District. The practice also serves patients from nearby neighborhoods including Chelsea, SoHo, NoHo, Gramercy, the West Village, and the East Village.",
    },
    {
      type: "p",
      text: "The practice connects primary care with preventive care, diagnostic testing, and specialty services.",
    },
    {
      type: "p",
      text: "You can explore:",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Primary Care NYC →", href: ROUTES.primaryCare },
        { label: "Diagnostic Testing NYC →", href: ROUTES.diagnostics },
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management →", href: ROUTES.painManagement },
      ],
    },

    {
      type: "h2",
      heading: "Ready for Your Annual Physical in NYC?",
    },
    {
      type: "p",
      text: "An annual physical can give you dedicated time to review your health, discuss preventive needs, and plan appropriate follow-up with your primary care physician.",
    },
    {
      type: "p",
      text: "For patients in Lower Manhattan and surrounding NYC neighborhoods, Umbrella Health provides primary care at 32 West 14th Street with access to diagnostic and specialty services when appropriate.",
    },
    {
      type: "ctaBox",
      title: "Ready to establish or continue your primary care?",
      body: "Book an annual physical or primary care appointment with Umbrella Health in Lower Manhattan.",
      links: [
        { label: "Book an Annual Physical / Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet the Umbrella Health Physicians →", href: ROUTES.ourTeam },
      ],
    },
    { type: "clinicFooter" },
  ],
};
