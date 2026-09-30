import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_HBP_URL = "https://medlineplus.gov/highbloodpressure.html";
const AHA_BP_CATEGORIES_URL =
  "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings";
const USPSTF_HYPERTENSION_URL =
  "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening";
const NHLBI_HBP_URL = "https://www.nhlbi.nih.gov/health/high-blood-pressure";
const CDC_STROKE_SIGNS_URL = "https://www.cdc.gov/stroke/signs-symptoms/index.html";

export const highBloodPressurePost: BlogPost = {
  slug: BLOG_SLUGS.highBloodPressure,
  title: "Primary Care for High Blood Pressure: Screening, Diagnosis and Management",
  subtitle:
    "How primary care screens for hypertension, confirms a diagnosis, and builds a plan with lifestyle changes, medication, home monitoring, and follow-up.",
  excerpt:
    "Learn how primary care for high blood pressure works in NYC: screening, confirming a diagnosis, treatment and follow-up. Book a visit at Umbrella Health today.",
  seoTitle: "Primary Care for High Blood Pressure | Umbrella Health NYC",
  metaDescription:
    "Learn how primary care for high blood pressure works in NYC: screening, confirming a diagnosis, treatment and follow-up. Book a visit at Umbrella Health today.",
  focusKeyword: "primary care for high blood pressure",
  category: "Chronic Care",
  readTime: "14 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.highBloodPressure,
  imageAlt: "Primary care doctor checking a patient's blood pressure during a routine visit in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "A primary care doctor is usually the first clinician to screen for high blood pressure (hypertension), confirm the diagnosis with repeat or out-of-office readings, and build a management plan. That plan may include lifestyle changes, medication when appropriate, home monitoring and regular follow-up, with referral to a cardiologist if your situation calls for it.",
    },
    {
      type: "p",
      text: "High blood pressure often causes no symptoms at all, which is why many people only learn about it at a routine checkup. According to MedlinePlus from the U.S. National Library of Medicine, untreated high blood pressure can raise the risk of serious problems such as heart disease, stroke and kidney disease. Regular care with a primary care doctor in NYC can help you catch it early and keep it under control over time.",
      links: [
        {
          label: "MedlinePlus from the U.S. National Library of Medicine",
          href: MEDLINEPLUS_HBP_URL,
        },
        { label: "primary care doctor in NYC", href: ROUTES.primaryCare },
      ],
    },
    {
      type: "cta",
      prompt: "Looking for primary care for high blood pressure in Lower Manhattan?",
      label: "Explore Primary Care NYC at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Is High Blood Pressure?",
    },
    {
      type: "p",
      text: "Blood pressure is the force of blood pushing against the walls of your arteries. A reading has two numbers:",
    },
    {
      type: "ul",
      items: [
        "Systolic pressure (top number): the pressure when your heart beats.",
        "Diastolic pressure (bottom number): the pressure when your heart rests between beats.",
      ],
    },
    {
      type: "p",
      text: "Hypertension means that pressure stays higher than it should over time. The American Heart Association's blood pressure categories describe a normal reading as less than 120/80 mm Hg, with higher ranges labeled elevated, stage 1 or stage 2 hypertension. Your doctor will interpret your numbers in the context of your age, health history and other risk factors, not from a single reading alone.",
      links: [
        {
          label: "American Heart Association's blood pressure categories",
          href: AHA_BP_CATEGORIES_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "How Does Primary Care Screen for High Blood Pressure?",
    },
    {
      type: "p",
      text: "Screening is simple, but doing it well takes care. The U.S. Preventive Services Task Force recommends screening adults 18 and older for hypertension, and it recommends confirming a high office reading with measurements taken outside the clinic before starting treatment.",
      links: [{ label: "U.S. Preventive Services Task Force", href: USPSTF_HYPERTENSION_URL }],
    },
    {
      type: "p",
      text: "At a primary care visit, a blood pressure check may involve:",
    },
    {
      type: "ul",
      items: [
        "Sitting quietly for a few minutes before the reading",
        "Using a correctly sized cuff on a bare upper arm",
        "Keeping your feet flat and your arm supported at heart level",
        "Repeating the reading if the first number is high",
      ],
    },
    {
      type: "p",
      text: "Blood pressure is usually checked at an annual physical, at sick visits and at follow-ups, so a regular primary care relationship naturally builds a record of readings over time.",
      links: [{ label: "annual physical", href: BLOG_PATHS.annualPhysical }],
    },

    {
      type: "h3",
      heading: "Why One High Reading Is Not a Diagnosis",
    },
    {
      type: "p",
      text: 'Stress, caffeine, a rushed walk to the office or simply being in a medical setting (sometimes called "white coat" hypertension) can push a reading up. The opposite can also happen: some people have normal readings in the office but higher readings at home ("masked" hypertension). That is why your doctor may ask for more readings before making a diagnosis.',
    },

    {
      type: "h2",
      heading: "How Is High Blood Pressure Diagnosed?",
    },
    {
      type: "p",
      text: "Your primary care doctor may confirm hypertension using a combination of:",
    },
    {
      type: "ul",
      items: [
        "Repeat office readings over more than one visit",
        "Home blood pressure monitoring with a validated upper-arm device",
        "Ambulatory blood pressure monitoring, a wearable device that records readings over 24 hours, when appropriate",
      ],
    },
    {
      type: "p",
      text: "Once high blood pressure is confirmed, your doctor may also look for related health issues. This can include a physical exam and lab work — see our guide to blood tests included in a primary care checkup — such as a metabolic panel, cholesterol testing and a urine test, and sometimes an electrocardiogram (ECG/EKG). Umbrella Health's diagnostic testing services list blood work, cholesterol testing, ECG/EKG, Holter monitoring and blood pressure evaluation, which your physician can order when clinically appropriate.",
      links: [
        {
          label: "blood tests included in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.homeBloodPressure,
      alt: "Home blood pressure monitor and log used to track readings between primary care visits",
    },
    {
      type: "cta",
      prompt: "Worried about your blood pressure readings?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE} to talk about screening and next steps.`,
    },

    {
      type: "h2",
      heading: "How Does Primary Care Manage High Blood Pressure?",
    },
    {
      type: "p",
      text: "Management is personal. Your plan depends on your readings, your overall cardiovascular risk and any other conditions you have. According to the National Heart, Lung, and Blood Institute, treatment often starts with heart-healthy lifestyle changes and may include medicine.",
      links: [{ label: "National Heart, Lung, and Blood Institute", href: NHLBI_HBP_URL }],
    },

    {
      type: "h3",
      heading: "Lifestyle Changes",
    },
    {
      type: "p",
      text: "Your doctor may talk with you about:",
    },
    {
      type: "ul",
      items: [
        "Eating patterns lower in sodium and richer in vegetables, fruit and whole grains",
        "Regular physical activity that is safe for you",
        "Limiting alcohol",
        "Quitting tobacco or vaping",
        "Sleep and stress management",
        "Weight management, if relevant to your health goals",
      ],
    },
    {
      type: "p",
      text: "If weight is part of the picture, physician-guided support through Medical Weight Loss NYC may be one option to discuss with your doctor.",
      links: [{ label: "Medical Weight Loss NYC", href: ROUTES.medicalWeightLoss }],
    },

    {
      type: "h3",
      heading: "Medication, When Appropriate",
    },
    {
      type: "p",
      text: "Many people need medicine to reach a healthy blood pressure, and some need more than one. There are several classes of blood pressure medication, and your doctor will consider your health history, other medications and possible side effects when recommending one. Do not stop or change a prescribed blood pressure medicine without talking with your clinician first.",
    },

    {
      type: "h3",
      heading: "Home Monitoring and Follow-Up",
    },
    {
      type: "p",
      text: "Follow-up visits help your doctor see whether the plan is working. You may be asked to:",
    },
    {
      type: "ul",
      items: [
        "Take home readings at set times and keep a log",
        "Bring your home monitor to a visit so it can be checked against the office device",
        "Repeat lab tests to monitor kidney function or potassium levels if you start certain medicines",
      ],
    },
    {
      type: "p",
      text: "How often you are seen depends on how well controlled your blood pressure is. Our guide on how often you should see a primary care doctor explains the factors that affect visit frequency.",
      links: [
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h2",
      heading: "High Blood Pressure and Other Chronic Conditions",
    },
    {
      type: "p",
      text: "High blood pressure often travels with other conditions, such as high cholesterol, type 2 diabetes, kidney disease and sleep apnea. Managing them together, rather than one at a time, is one of the main benefits of an ongoing primary care relationship. Our article on managing chronic conditions without the runaround explains how coordinated care works, and our guide to primary care for diabetes covers A1C testing and ongoing care.",
      links: [
        {
          label: "managing chronic conditions without the runaround",
          href: BLOG_PATHS.chronicConditions,
        },
        { label: "primary care for diabetes", href: BLOG_PATHS.primaryCareDiabetes },
      ],
    },

    {
      type: "h2",
      heading: "When Might You Need a Cardiologist?",
    },
    {
      type: "p",
      text: "Primary care can manage many cases of hypertension. Your doctor may suggest a specialist if, for example, your blood pressure stays high despite treatment, you have signs of heart disease, or tests show changes that need a closer look. Umbrella Health offers Cardiology & Vascular Medicine in the same practice, which can make coordination simpler. If snoring or daytime sleepiness suggests a sleep disorder, your doctor may also discuss Sleep Medicine. Not sure how referrals work with your plan? Read do you need a referral to see a specialist in NYC.",
      links: [
        { label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology },
        { label: "Sleep Medicine", href: ROUTES.sleepMedicine },
        {
          label: "do you need a referral to see a specialist in NYC",
          href: BLOG_PATHS.referralNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "When Is High Blood Pressure an Emergency?",
    },
    {
      type: "p",
      text: "Very high blood pressure with symptoms needs emergency care. Call 911 right away if a high reading comes with chest pain, shortness of breath, severe headache, confusion, vision changes, weakness or numbness, or trouble speaking. The CDC lists sudden numbness, confusion, trouble seeing and severe headache as warning signs of stroke. Do not wait for a primary care appointment in these situations.",
      links: [
        {
          label:
            "CDC lists sudden numbness, confusion, trouble seeing and severe headache as warning signs of stroke",
          href: CDC_STROKE_SIGNS_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "Blood Pressure Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. The practice's Primary Care NYC page lists diabetes, hypertension and cholesterol management among its primary care services, with laboratory testing and cardiology available in the same practice.",
      links: [{ label: "Primary Care NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "The practice's insurance page says the team verifies coverage before your visit. Ask the office whether home blood pressure monitor checks or ambulatory (24-hour) blood pressure monitoring are offered in-house or arranged by referral.",
      links: [{ label: "insurance page", href: ROUTES.insurance }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for primary care and hypertension management in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about primary care for high blood pressure, home monitoring, and follow-up in NYC.",
      items: [
        {
          q: "Can a Primary Care Doctor Treat High Blood Pressure?",
          a: "Yes. Primary care doctors commonly screen for, diagnose and manage high blood pressure, including lifestyle guidance, medication when appropriate and follow-up. They may refer you to a cardiologist if your case needs specialist input.",
        },
        {
          q: "How Often Should I Get My Blood Pressure Checked?",
          a: "It depends on your age, past readings and risk factors. Many adults have it checked at least at their yearly visit, and more often if readings are high or they are on treatment. Your doctor can tell you what schedule makes sense for you.",
        },
        {
          q: "Is a Home Blood Pressure Monitor Accurate?",
          a: "A validated upper-arm monitor used correctly can give useful readings. Bring it to a visit so your clinician can compare it with the office device and check your technique.",
        },
        {
          q: "Can High Blood Pressure Go Away?",
          a: "For some people, lifestyle changes can lower blood pressure a great deal. Others need long-term treatment. Your doctor can explain what is realistic for you. Do not stop medication on your own, even if your readings improve.",
        },
        {
          q: "What Blood Tests Are Done for High Blood Pressure?",
          a: "Your doctor may order tests such as a metabolic panel (kidney function and electrolytes), cholesterol, blood glucose or A1C, and a urine test. The exact tests depend on your history.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Take the Next Step for Your Blood Pressure",
    },
    {
      type: "p",
      text: "If you have had a high reading, have a family history of hypertension, or simply haven't had your blood pressure checked in a while, a primary care visit is a practical place to start. Explore Umbrella Health's home page, learn more about Primary Care NYC, or book an appointment online.",
      links: [
        { label: "Umbrella Health's home page", href: ROUTES.home },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "book an appointment online", href: BOOKING_URL },
      ],
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    },
    {
      type: "ctaBox",
      title: "Ready to talk about your blood pressure readings?",
      body: "Book a primary care appointment at Umbrella Health in Lower Manhattan for screening, diagnosis, and hypertension management.",
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
