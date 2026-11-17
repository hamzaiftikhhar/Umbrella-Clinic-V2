import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_ARRHYTHMIAS_URL = "https://www.nhlbi.nih.gov/health/arrhythmias";

export const heartPalpitationsCardiologistNycPost: BlogPost = {
  slug: BLOG_SLUGS.heartPalpitationsCardiologistNyc,
  title: "What Causes Heart Palpitations, and When Should You See a Cardiologist in NYC?",
  subtitle:
    "Learn common causes of heart racing, pounding or skipping beats, when it's urgent, and how arrhythmia evaluation works in Lower Manhattan.",
  excerpt:
    "Heart racing, pounding or skipping beats? Learn common causes of heart palpitations, when to see a cardiologist and how testing works in NYC.",
  seoTitle: "When Do Heart Palpitations Need a Cardiologist in NYC?",
  metaDescription:
    "Heart racing, pounding or skipping beats? Learn common causes of heart palpitations, when to see a cardiologist and how testing works in NYC.",
  focusKeyword: "heart palpitations",
  category: "Cardiology",
  readTime: "12 min read",
  publishedAt: "2026-11-17",
  image: BLOG_IMAGES.heartPalpitationsCardiologistNyc,
  imageAlt:
    "Person checking a smartwatch during heart palpitations who may need a cardiologist in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Heart palpitations are feelings that your heart is racing, pounding, fluttering or skipping beats. Many are tied to stress, caffeine, dehydration or lack of sleep. Some come from anemia, thyroid problems or heart rhythm disorders. Short, mild episodes that pass can often start with primary care. See a cardiologist if palpitations come with chest pain, fainting, shortness of breath or last longer. Call 911 for fainting, severe chest pain or trouble breathing.",
    },
    {
      type: "p",
      text: "You're at your desk when your smartwatch buzzes. Your heart feels like it's flipping in your chest. A minute later, it settles. Was that nothing, or a warning? Palpitations are common, and most have an explanation. This guide covers everyday causes, warning signs and when to book arrhythmia evaluation in NYC.",
      links: [{ label: "arrhythmia evaluation in NYC", href: ROUTES.cardiology }],
    },
    {
      type: "cta",
      prompt: "Worried about racing or skipping beats?",
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
      heading: "What Are Heart Palpitations?",
    },
    {
      type: "p",
      text: "Palpitations are a sensation, not a diagnosis. You might feel a hard thump, a flutter, a skipped beat or a sudden race. The National Heart, Lung, and Blood Institute explains that arrhythmias are problems with the rate or rhythm of the heartbeat. Some arrhythmias are harmless. Others need treatment.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_ARRHYTHMIAS_URL,
        },
      ],
    },
    {
      type: "diagram",
      variant: "concept",
      alt: "Diagram comparing a regular heartbeat with an irregular heartbeat",
      steps: [
        "Regular steady beat",
        "Skipped or early beat",
        "Fast racing rhythm",
        "Irregular fluttering rhythm",
      ],
    },

    {
      type: "h2",
      heading: "Common Causes of Heart Palpitations",
    },
    {
      type: "h3",
      heading: "Everyday Triggers",
    },
    {
      type: "ul",
      items: [
        "Caffeine, energy drinks or alcohol",
        "Stress, anxiety or panic",
        "Dehydration",
        "Poor sleep",
        "Hard workouts",
        "Nicotine",
        "Some cold medicines or supplements",
      ],
    },
    {
      type: "h3",
      heading: "Medical Causes",
    },
    {
      type: "ul",
      items: [
        "Anemia",
        "Thyroid problems",
        "Fever or infection",
        "Low blood sugar",
        "Electrolyte imbalance",
        "Side effects from medicines",
      ],
    },
    {
      type: "h3",
      heading: "Heart Rhythm Problems",
    },
    {
      type: "p",
      text: "Some palpitations come from the heart's electrical system. Examples include:",
    },
    {
      type: "ul",
      items: [
        "Premature beats (extra early beats)",
        "Supraventricular tachycardia (SVT)",
        "Atrial fibrillation or atrial flutter",
        "Ventricular arrhythmias, which can be more serious",
      ],
    },

    {
      type: "h2",
      heading: "Palpitations and Anxiety",
    },
    {
      type: "p",
      text: "Anxiety can make your heart race. A racing heart can also make anxiety worse. It can be hard to tell which came first. A medical check helps rule out a rhythm problem so you're not left guessing.",
    },

    {
      type: "h2",
      heading: "Palpitations at Different Life Stages",
    },
    {
      type: "ul",
      items: [
        "Pregnancy. Hormone shifts and extra blood volume can bring flutters. Tell your doctor about new or lasting palpitations.",
        "Menopause. Hot flashes and hormone changes can feel like a racing heart.",
        "Older age. Atrial fibrillation becomes more common. Don't ignore new irregular beats.",
      ],
    },

    {
      type: "h2",
      heading: "When Palpitations Are an Emergency",
    },
    {
      type: "p",
      text: "Call 911 if palpitations come with:",
    },
    {
      type: "ul",
      items: [
        "Chest pain or pressure",
        "Fainting or nearly fainting",
        "Severe shortness of breath",
        "Sudden weakness, confusion or trouble speaking",
        "A racing heart that won't stop and makes you feel very unwell",
      ],
    },

    {
      type: "h2",
      heading: "When to See a Cardiologist for Heart Palpitations",
    },
    {
      type: "p",
      text: "Book cardiology care if:",
    },
    {
      type: "ul",
      items: [
        "Palpitations keep coming back",
        "Episodes last more than a few minutes",
        "You have heart disease, high blood pressure or a family history of sudden cardiac death",
        "Palpitations wake you from sleep",
        "Your smartwatch or monitor keeps flagging an irregular rhythm",
      ],
    },
    {
      type: "p",
      text: "A primary care doctor is often a good first stop for mild, occasional flutters. Blood tests in a primary care checkup can look for anemia and thyroid issues. Broader timing questions are covered in when to see a cardiologist.",
      links: [
        { label: "primary care doctor", href: ROUTES.primaryCare },
        {
          label: "Blood tests in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
        {
          label: "when to see a cardiologist",
          href: BLOG_PATHS.whenToSeeACardiologistNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "How Doctors Check Heart Palpitations",
    },
    {
      type: "p",
      text: "Evaluation usually starts with your story and a physical exam. Testing may include:",
    },
    {
      type: "ul",
      items: [
        "EKG in the office",
        "Holter monitor for one or more days",
        "Event monitors you wear longer and activate when symptoms hit",
        "Blood tests",
        "Echo or other imaging when needed",
      ],
    },
    {
      type: "process",
      alt: "Path from palpitations to a rhythm plan",
      steps: ["History and exam", "EKG or monitor testing", "Results and treatment plan"],
    },
    {
      type: "p",
      text: "Diagnostic testing services and cardiac diagnostic testing can capture rhythm problems that come and go.",
      links: [
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
        {
          label: "cardiac diagnostic testing",
          href: BLOG_PATHS.cardiacDiagnosticTestingNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "What About Smartwatch Alerts?",
    },
    {
      type: "p",
      text: "Wearables can hint at an irregular rhythm. They don't replace a medical EKG. Bring screenshots or reports to your visit. Your doctor decides which clinical test comes next.",
    },

    {
      type: "h2",
      heading: "Treatment Options",
    },
    {
      type: "p",
      text: "Treatment depends on the cause. Options may include:",
    },
    {
      type: "ul",
      items: [
        "Cutting back on caffeine, alcohol or stimulants",
        "Treating anxiety, anemia or thyroid disease",
        "Medicines to steady the rhythm or rate",
        "Procedures for some arrhythmias when medicines aren't enough",
      ],
    },
    {
      type: "p",
      text: "Never start or stop a heart medicine on your own.",
    },

    {
      type: "h2",
      heading: "Tips to Track Your Symptoms",
    },
    {
      type: "ul",
      items: [
        "Note the time, how long it lasted and what you were doing",
        "List drinks, medicines and stress that day",
        "Write down related symptoms like dizziness or chest pressure",
        "Save wearable alerts to show your doctor",
      ],
    },
    {
      type: "p",
      text: "Poor sleep and untreated sleep apnea can also strain the heart rhythm. Knowing the common sleep apnea symptoms helps you spot that link. Circulation symptoms may instead point to peripheral artery disease, and chest pressure deserves its own look at when to worry about chest pain.",
      links: [
        {
          label: "sleep apnea symptoms",
          href: BLOG_PATHS.sleepApneaSymptomsNyc,
        },
        {
          label: "peripheral artery disease",
          href: BLOG_PATHS.peripheralArteryDiseaseSymptomsNyc,
        },
        {
          label: "when to worry about chest pain",
          href: BLOG_PATHS.whenToWorryAboutChestPainNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Arrhythmia Evaluation in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the East Village and all five boroughs. Cardiology, primary care and diagnostic testing share one location for rhythm checks and follow-up.",
      links: [
        { label: "Cardiology", href: ROUTES.cardiology },
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to get answers about your heart rhythm?",
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
          q: "Are Heart Palpitations Dangerous?",
          a: "Many are not. Danger rises when palpitations come with chest pain, fainting, severe shortness of breath or a known heart condition. Get checked if you're unsure.",
        },
        {
          q: "Can Anxiety Cause Heart Palpitations?",
          a: "Yes. Anxiety is a common trigger. A medical evaluation still helps rule out a rhythm problem.",
        },
        {
          q: "Should I Go to the ER for Palpitations?",
          a: "Go to the ER or call 911 if you have chest pain, fainting, severe trouble breathing or feel like you might pass out. Mild short flutters can often wait for an office visit.",
        },
        {
          q: "What Doctor Should I See for Heart Palpitations?",
          a: "Start with primary care for mild, occasional symptoms. See a cardiologist for lasting, frequent or worrying episodes, or when testing points to a rhythm disorder.",
        },
        {
          q: "Can Dehydration Cause Palpitations?",
          a: "Yes. Dehydration, caffeine and poor sleep are common everyday triggers. Fixing those habits often helps, but lasting symptoms still deserve a check.",
        },
        {
          q: "Do Smartwatches Diagnose Arrhythmias?",
          a: "No. They can raise a flag, but a clinical EKG or monitor confirms the diagnosis.",
        },
        {
          q: "Can Sleep Apnea Cause Heart Palpitations?",
          a: "Yes. Untreated sleep apnea can strain the heart and is linked with irregular rhythms, including atrial fibrillation.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to check your heart rhythm?",
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
