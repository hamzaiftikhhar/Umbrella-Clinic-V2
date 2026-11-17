import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_HEART_TESTS_URL = "https://www.nhlbi.nih.gov/health/heart-tests";

export const cardiacDiagnosticTestingNycPost: BlogPost = {
  slug: BLOG_SLUGS.cardiacDiagnosticTestingNyc,
  title: "What Is Cardiac Diagnostic Testing, and Which Heart Tests Might You Need in NYC?",
  subtitle:
    "Learn what an EKG, Holter monitor, echo and stress test check, how to prepare and what to expect in Lower Manhattan.",
  excerpt:
    "EKG, Holter monitor, echo or stress test? Learn what each heart test checks, how to prepare and what to expect from cardiac diagnostic testing in NYC.",
  seoTitle: "What Does Cardiac Diagnostic Testing in NYC Involve?",
  metaDescription:
    "EKG, Holter monitor, echo or stress test? Learn what each heart test checks, how to prepare and what to expect from cardiac diagnostic testing in NYC.",
  focusKeyword: "cardiac diagnostic testing",
  category: "Cardiology",
  readTime: "12 min read",
  publishedAt: "2026-11-17",
  image: BLOG_IMAGES.cardiacDiagnosticTestingNyc,
  imageAlt: "Cardiac diagnostic testing with an EKG setup at a NYC cardiology clinic",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Cardiac diagnostic testing helps doctors see how your heart works. The most common tests are an EKG, a Holter monitor, an echocardiogram and a stress test. An EKG checks your heart's electrical activity in seconds. A Holter monitor records your rhythm for a day or more. An echo uses sound waves to show your heart's pumping and valves. A stress test shows how your heart handles effort. Your doctor picks tests based on your symptoms and risks. Call 911 for chest pain, fainting or severe shortness of breath.",
    },
    {
      type: "p",
      text: "The letters can feel like alphabet soup: EKG, echo, Holter. They all answer different questions about your heart. This guide explains what each test checks, how to prepare and what happens after. Our cardiology team in NYC can help you sort out which tests fit your symptoms.",
      links: [{ label: "cardiology team in NYC", href: ROUTES.cardiology }],
    },
    {
      type: "cta",
      prompt: "Need answers about your heart tests?",
      label: "Book an appointment with our NYC cardiology team →",
      href: ROUTES.cardiology,
    },
    {
      type: "ctaGroup",
      links: [
        {
          label: `Call ${SITE_PHONE} to schedule your visit`,
          href: `tel:${SITE_PHONE.replace(/\D/g, "")}`,
        },
      ],
    },

    {
      type: "h2",
      heading: "Why Doctors Order Heart Tests",
    },
    {
      type: "p",
      text: "Heart tests help answer questions like these:",
    },
    {
      type: "ul",
      items: [
        "Is your heart rhythm regular?",
        "Is your heart muscle pumping well?",
        "Are the valves opening and closing as they should?",
        "Does your heart get enough blood during effort?",
        "Do your risk factors need a closer look?",
      ],
    },
    {
      type: "p",
      text: "The National Heart, Lung, and Blood Institute explains that heart tests help find problems early and guide treatment. Your doctor chooses the test that matches your story.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_HEART_TESTS_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "EKG (Electrocardiogram)",
    },
    {
      type: "p",
      text: "An EKG, also called an ECG, records your heart's electrical activity. Stickers go on your chest, arms and legs. The test takes only a few minutes and doesn't hurt. It can show a fast, slow or irregular rhythm. It can also show signs of past or recent heart strain. An EKG is a snapshot. It may miss problems that come and go.",
    },

    {
      type: "h2",
      heading: "Holter Monitor",
    },
    {
      type: "p",
      text: "A Holter monitor is a portable EKG you wear for 24 to 48 hours, or sometimes longer. It tracks your rhythm while you work, sleep and walk around the city. Doctors often use it when you feel racing, pounding or skipping beats. If heart palpitations come and go, a Holter can catch what a short office EKG misses.",
      links: [
        {
          label: "heart palpitations",
          href: BLOG_PATHS.heartPalpitationsCardiologistNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Echocardiogram",
    },
    {
      type: "p",
      text: "An echocardiogram uses sound waves to make moving pictures of your heart. A technician places a probe on your chest with gel. The test shows how well your heart pumps and how your valves work. It can also look for fluid around the heart or thickening of the heart muscle. Most echoes take under an hour.",
    },

    {
      type: "h2",
      heading: "Stress Test",
    },
    {
      type: "p",
      text: "A stress test shows how your heart handles effort. You walk on a treadmill or ride a bike while staff watch your EKG, blood pressure and symptoms. Some stress tests use medicine instead of exercise if you can't walk safely. Imaging may be added with an echo or nuclear pictures.",
    },
    {
      type: "h3",
      heading: "How to Prepare for a Stress Test",
    },
    {
      type: "ul",
      items: [
        "Wear sneakers and comfortable clothes",
        "Ask which medicines to take or hold that morning",
        "Skip caffeine if your doctor says so",
        "Don't eat a heavy meal right before",
        "Tell the team if you feel chest pain, dizziness or unusual shortness of breath during the test",
      ],
    },

    {
      type: "h2",
      heading: "Other Heart and Vessel Tests",
    },
    {
      type: "ul",
      items: [
        "Coronary calcium scan. A CT that looks for calcium in the heart arteries.",
        "CT or MRI of the heart when doctors need detailed pictures.",
        "Vascular ultrasound for blood flow in the legs or neck, including checks related to peripheral artery disease.",
        "Blood tests for cholesterol, sugar and other heart risk markers.",
      ],
    },
    {
      type: "p",
      text: "Circulation questions often overlap with peripheral artery disease. Lab work for heart risk often starts with blood tests in a primary care checkup.",
      links: [
        {
          label: "peripheral artery disease",
          href: BLOG_PATHS.peripheralArteryDiseaseSymptomsNyc,
        },
        {
          label: "blood tests in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
      ],
    },
    {
      type: "diagram",
      variant: "concept",
      alt: "Chart matching common heart symptoms to cardiac diagnostic tests",
      steps: [
        "Chest pain → EKG, stress test, echo",
        "Palpitations → EKG, Holter monitor",
        "Shortness of breath → Echo, stress test",
        "Leg pain with walking → Vascular ultrasound, ABI",
      ],
    },

    {
      type: "h2",
      heading: "Which Cardiac Testing Do I Need?",
    },
    {
      type: "p",
      text: "There's no one test for everyone. A rough guide:",
    },
    {
      type: "ul",
      items: [
        "Chest pain or pressure may lead to an EKG, stress test or echo",
        "Racing or skipping beats may lead to an EKG and a Holter monitor",
        "Shortness of breath or swelling may lead to an echo",
        "Family history or high risk may lead to labs and, in some cases, a calcium scan",
      ],
    },
    {
      type: "p",
      text: "If you're unsure how urgent the symptom is, read about when to worry about chest pain. Broader questions about specialists are covered in when to see a cardiologist.",
      links: [
        {
          label: "when to worry about chest pain",
          href: BLOG_PATHS.whenToWorryAboutChestPainNyc,
        },
        {
          label: "when to see a cardiologist",
          href: BLOG_PATHS.whenToSeeACardiologistNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Cost and Insurance Coverage",
    },
    {
      type: "p",
      text: "Many plans cover cardiac diagnostic testing when a doctor orders it. Some tests need prior approval. Costs vary by plan and by which test you need. Call your insurer before the visit. Ask about your deductible and whether the test is in network. You can also verify your insurance coverage with our team.",
      links: [{ label: "verify your insurance coverage", href: ROUTES.insurance }],
    },

    {
      type: "h2",
      heading: "Getting Your Results",
    },
    {
      type: "p",
      text: "Ask these questions when you review results:",
    },
    {
      type: "ul",
      items: [
        "What did the test show in plain words?",
        "Do I need another test?",
        "Does this change my medicines or daily habits?",
        "When should I follow up?",
      ],
    },
    {
      type: "process",
      alt: "Path from cardiac visit to results review",
      steps: ["Cardiology visit", "Heart testing", "Results and next steps"],
    },

    {
      type: "h2",
      heading: "When to Skip the Test and Call 911",
    },
    {
      type: "p",
      text: "Don't wait for a scheduled test if you have chest pain, fainting or severe shortness of breath. Call 911. The same goes for sudden weakness on one side, trouble speaking or a cold, painful leg that starts suddenly.",
    },

    {
      type: "h2",
      heading: "Cardiac Testing in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, Tribeca and all five boroughs. Cardiology works with diagnostic testing services and primary care in one place, so your heart evaluation stays coordinated.",
      links: [
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "Cardiology", href: ROUTES.cardiology },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to schedule cardiac diagnostic testing?",
      body: `Book an appointment with our NYC cardiology team. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
      links: [
        {
          label: "Book an appointment with our NYC cardiology team →",
          href: ROUTES.cardiology,
        },
        { label: "Contact Umbrella Health to book a visit →", href: ROUTES.contactUs },
      ],
    },
    {
      type: "p",
      text: "New to the practice? Umbrella Health brings primary care and specialists together under one roof.",
      links: [{ label: "Umbrella Health", href: ROUTES.home }],
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "What Is Cardiac Diagnostic Testing?",
          a: "It is a group of heart tests that help doctors see how your heart's rhythm, pumping and blood flow work. Common tests include an EKG, Holter monitor, echocardiogram and stress test.",
        },
        {
          q: "Does an EKG Hurt?",
          a: "No. An EKG uses sticky sensors on your skin. It takes only a few minutes and doesn't use needles or radiation.",
        },
        {
          q: "How Long Do You Wear a Holter Monitor?",
          a: "Most people wear one for 24 to 48 hours. Some monitors record for longer. Your doctor chooses the length based on your symptoms.",
        },
        {
          q: "What Is the Difference Between an Echo and a Stress Test?",
          a: "An echo shows your heart's structure and pumping at rest. A stress test shows how your heart responds to effort. Some visits combine both.",
        },
        {
          q: "Can I Eat Before a Heart Test?",
          a: "It depends on the test. Many EKGs and echoes need little prep. Stress tests often ask you to avoid a heavy meal and sometimes caffeine. Your office will give clear instructions.",
        },
        {
          q: "Is Cardiac Testing Covered by Insurance?",
          a: "Many plans cover doctor-ordered heart tests. Coverage and prior approval rules vary. Call your insurer and verify your insurance coverage before the visit.",
        },
        {
          q: "When Should I Go to the ER Instead of Waiting for a Test?",
          a: "Call 911 for chest pain, fainting, severe shortness of breath, sudden weakness on one side or trouble speaking. Don't wait for an outpatient appointment.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to get clarity on your heart?",
      body: `Book an appointment with our NYC cardiology team or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        {
          label: "Book an appointment with our NYC cardiology team →",
          href: ROUTES.cardiology,
        },
      ],
    },
    {
      type: "p",
      text: "This article shares general information. It isn't medical advice, a diagnosis or treatment. Talk with a qualified clinician about your own symptoms. Please don't share personal health details in comments or on social media. If you think you have a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
