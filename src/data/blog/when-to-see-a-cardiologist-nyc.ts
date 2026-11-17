import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const CDC_HEART_DISEASE_URL = "https://www.cdc.gov/heart-disease/about/index.html";

export const whenToSeeACardiologistNycPost: BlogPost = {
  slug: BLOG_SLUGS.whenToSeeACardiologistNyc,
  title: "Which Signs and Risks Tell You When to See a Cardiologist in NYC?",
  subtitle:
    "Learn the warning signs, risk factors, what a first visit involves and how to find cardiology care in Lower Manhattan.",
  excerpt:
    "Chest pain, palpitations or family history? Learn when to see a cardiologist, what happens at a first visit and how to book care in NYC.",
  seoTitle: "How Do You Know When to See a Cardiologist in NYC?",
  metaDescription:
    "Chest pain, palpitations or family history? Learn when to see a cardiologist, what happens at a first visit and how to book care in NYC.",
  focusKeyword: "when to see a cardiologist",
  category: "Cardiology",
  readTime: "12 min read",
  publishedAt: "2026-11-17",
  image: BLOG_IMAGES.whenToSeeACardiologistNyc,
  imageAlt: "Adult pausing on subway stairs while deciding when to see a cardiologist in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Knowing when to see a cardiologist starts with symptoms and risk. Chest pain, shortness of breath, heart palpitations, swelling in the legs and fainting all fit. So do high blood pressure, high cholesterol, diabetes and a strong family history of heart disease. Your primary care doctor can start the workup. A cardiologist takes a closer look at the heart and blood vessels. Call 911 for sudden severe chest pain, fainting or severe trouble breathing.",
    },
    {
      type: "p",
      text: "You climb the subway stairs and feel winded halfway up. Maybe it's just a busy week. Maybe your heart needs a closer look. Most people wait too long and blame stress or age. This guide covers the signs, the risks and what a first cardiology visit involves.",
    },
    {
      type: "cta",
      prompt: "Already know you want a heart specialist?",
      label: "Explore Cardiology at Umbrella Health →",
      href: ROUTES.cardiology,
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Contact Us to book a visit →", href: ROUTES.contactUs },
        { label: `Call ${SITE_PHONE}`, href: `tel:${SITE_PHONE.replace(/\D/g, "")}` },
      ],
    },

    {
      type: "h2",
      heading: "What Does a Cardiologist Do?",
    },
    {
      type: "p",
      text: "A cardiologist is a doctor who treats the heart and blood vessels. They diagnose problems, run heart tests and manage long-term conditions. They also help people lower their risk before problems start.",
    },
    {
      type: "p",
      text: 'Heart disease is common. The CDC notes that about 1 in 5 deaths in the United States comes from heart disease. It also lists high blood pressure, high cholesterol and smoking as key risk factors. And it notes that heart disease can stay "silent" until a heart attack or another event.',
      links: [{ label: "CDC", href: CDC_HEART_DISEASE_URL }],
    },
    {
      type: "p",
      text: "That's why timing matters. Seeing a specialist early can help you catch problems sooner.",
    },
    {
      type: "p",
      text: "Your primary care doctor can start the workup. A cardiologist takes a closer look.",
      links: [{ label: "primary care doctor", href: ROUTES.primaryCare }],
    },
    {
      type: "diagram",
      variant: "preventive",
      alt: "Checklist of heart warning signs that mean it may be time to see a cardiologist",
      steps: [
        "Chest pain or pressure",
        "Shortness of breath",
        "Palpitations or irregular heartbeat",
        "Leg pain with walking",
        "High risk factors or family history",
      ],
    },

    {
      type: "h2",
      heading: "Symptoms That Mean It May Be Time",
    },
    {
      type: "h3",
      heading: "Chest Pain or Pressure",
    },
    {
      type: "p",
      text: "Pressure, squeezing or pain in the chest deserves attention, especially with exertion. Learn when chest pain needs a doctor and when to worry about emergency signs.",
      links: [
        {
          label: "when chest pain needs a doctor",
          href: BLOG_PATHS.whenToWorryAboutChestPainNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "Heart Palpitations",
    },
    {
      type: "p",
      text: "Racing, pounding or skipping beats that keep returning may need a rhythm check. Read more about heart palpitations and when they need a cardiologist.",
      links: [
        {
          label: "heart palpitations",
          href: BLOG_PATHS.heartPalpitationsCardiologistNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "Shortness of Breath and Swelling",
    },
    {
      type: "p",
      text: "Getting winded on stairs you used to climb easily matters. So does swelling in the ankles or legs, especially with fatigue.",
    },
    {
      type: "h3",
      heading: "Leg Pain With Walking",
    },
    {
      type: "p",
      text: "Calf or thigh pain that eases with rest can point to peripheral artery disease. Circulation problems and heart risk often travel together.",
      links: [
        {
          label: "peripheral artery disease",
          href: BLOG_PATHS.peripheralArteryDiseaseSymptomsNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "Fainting or Near Fainting",
    },
    {
      type: "p",
      text: "Passing out, or feeling like you might, needs a prompt medical evaluation. Call 911 if it happens with chest pain or a racing heart.",
    },

    {
      type: "h2",
      heading: "Risk Factors That Call for a Closer Look",
    },
    {
      type: "ul",
      items: [
        "High blood pressure",
        "High cholesterol",
        "Diabetes",
        "Smoking",
        "Obesity",
        "Family history of early heart disease",
        "Chronic kidney disease",
        "Prior heart attack, stent or bypass",
      ],
    },
    {
      type: "p",
      text: "Primary care anchors day-to-day risk care. Primary care for high blood pressure is often where heart prevention starts.",
      links: [
        { label: "Primary care", href: ROUTES.primaryCare },
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
      ],
    },

    {
      type: "h2",
      heading: "Preventive Cardiology",
    },
    {
      type: "p",
      text: "You don't need a crisis to see a cardiologist. Preventive visits make sense with a strong family history, multiple risk factors or abnormal tests. The goal is to lower risk before damage starts.",
    },

    {
      type: "h2",
      heading: "Sleep Apnea and Your Heart",
    },
    {
      type: "p",
      text: "Untreated sleep apnea strains the heart and links to high blood pressure and irregular rhythms. Knowing the common sleep apnea symptoms helps you connect the dots.",
      links: [
        {
          label: "sleep apnea symptoms",
          href: BLOG_PATHS.sleepApneaSymptomsNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Sports and Active Adults",
    },
    {
      type: "p",
      text: "A sports cardiologist focus helps active adults with exercise symptoms, return-to-play questions or family history of sudden cardiac events. Tell your doctor if workouts bring chest pain, dizziness or unusual breathlessness.",
    },

    {
      type: "h2",
      heading: "When It's an Emergency",
    },
    {
      type: "p",
      text: "Call 911 for sudden severe chest pain, fainting, severe shortness of breath, sudden weakness on one side or trouble speaking. Don't wait for an office slot.",
    },

    {
      type: "h2",
      heading: "What Happens at Your First Cardiology Appointment",
    },
    {
      type: "p",
      text: "Expect a detailed history, a heart and vessel exam and a review of your medicines. Your doctor explains next steps in plain words.",
    },
    {
      type: "process",
      alt: "First cardiology visit path",
      steps: ["History and exam", "Testing when needed", "Plan and follow-up"],
    },
    {
      type: "p",
      text: "Tests may include an EKG, echo, monitor or stress testing through cardiac diagnostic testing and diagnostic testing services.",
      links: [
        {
          label: "cardiac diagnostic testing",
          href: BLOG_PATHS.cardiacDiagnosticTestingNyc,
        },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },

    {
      type: "h2",
      heading: "How to Prepare",
    },
    {
      type: "ul",
      items: [
        "Bring a medicine list and prior test results",
        "Write down your symptoms and when they happen",
        "Note your family history of heart disease",
        "List questions you want answered",
      ],
    },

    {
      type: "h2",
      heading: "Do You Need a Referral?",
    },
    {
      type: "p",
      text: "Some insurance plans require a referral from primary care. Others let you book a specialist directly. Learn whether you need a referral before you schedule.",
      links: [
        {
          label: "whether you need a referral in NYC",
          href: BLOG_PATHS.referralNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Finding the Right Cardiologist in NYC",
    },
    {
      type: "p",
      text: "Look for a board-certified cardiologist, clear communication and a clinic that can coordinate testing and primary care. Location matters in New York. A downtown office near transit makes follow-up easier.",
    },

    {
      type: "h2",
      heading: "Cardiology Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the East Village and all five boroughs. Cardiology at Umbrella Health works beside primary care and diagnostics under one roof.",
      links: [
        { label: "Cardiology at Umbrella Health", href: ROUTES.cardiology },
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "diagnostics", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to talk with a cardiologist?",
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
          q: "When Should I See a Cardiologist?",
          a: "See a cardiologist for chest pain, lasting palpitations, unexplained shortness of breath, fainting, leg pain with walking, or strong heart risk factors. Call 911 for sudden severe symptoms.",
        },
        {
          q: "Can I See a Cardiologist Without a Referral?",
          a: "Sometimes yes. It depends on your insurance plan. Check whether you need a referral before you book.",
        },
        {
          q: "What Does a Cardiologist Check at the First Visit?",
          a: "Your history, medicines, family risk, a heart exam and often an EKG. More testing follows if needed.",
        },
        {
          q: "Is Shortness of Breath a Reason to See a Cardiologist?",
          a: "Yes, especially if it is new, getting worse or limits stairs and daily activity. Other causes exist too, so a full evaluation matters.",
        },
        {
          q: "Should I See a Cardiologist for High Blood Pressure?",
          a: "Primary care manages many cases. Cardiology helps when pressure is hard to control, very high or paired with other heart concerns.",
        },
        {
          q: "What Is Preventive Cardiology?",
          a: "It focuses on lowering heart risk before a crisis, using lifestyle plans, medicines when needed and targeted testing.",
        },
        {
          q: "How Do I Find a Top Cardiologist Near Me in NYC?",
          a: "Look for board certification, clear communication, coordinated testing and a convenient location. Ask your primary care doctor for a trusted local option.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to take the next step for your heart?",
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
