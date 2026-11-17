import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_PAD_URL = "https://www.nhlbi.nih.gov/health/peripheral-artery-disease";

export const peripheralArteryDiseaseSymptomsNycPost: BlogPost = {
  slug: BLOG_SLUGS.peripheralArteryDiseaseSymptomsNyc,
  title: "What Are Peripheral Artery Disease Symptoms, and When Should You Get Help in NYC?",
  subtitle:
    "Learn the peripheral artery disease symptoms to watch for, like calf pain when you walk, who's at risk, and how doctors test in Lower Manhattan.",
  excerpt:
    "Learn the peripheral artery disease symptoms to watch for, like calf pain when you walk. See who's at risk, how doctors test and where to go in NYC.",
  seoTitle: "Which Peripheral Artery Disease Symptoms Need Care in NYC?",
  metaDescription:
    "Learn the peripheral artery disease symptoms to watch for, like calf pain when you walk. See who's at risk, how doctors test and where to go in NYC.",
  focusKeyword: "peripheral artery disease symptoms",
  category: "Cardiology",
  readTime: "12 min read",
  publishedAt: "2026-11-17",
  image: BLOG_IMAGES.peripheralArteryDiseaseSymptomsNyc,
  imageAlt:
    "Adult with calf pain while walking who may have peripheral artery disease symptoms in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Peripheral artery disease symptoms often start in the legs. Peripheral artery disease (PAD) happens when plaque narrows the arteries to your legs. The classic sign is calf, thigh or hip pain when you walk that eases with rest. Other signs include cold feet, slow-healing sores and weak leg pulses. Many people have no symptoms at all. Smoking, diabetes, high blood pressure and high cholesterol raise your risk. A simple ankle blood pressure test can check for it. A cold, pale, painful leg that comes on suddenly is an emergency. Call 911.",
    },
    {
      type: "p",
      text: "You walk from Union Square to the West Village, and your calves start to cramp. You stop to look in a shop window. The pain fades. You start walking again, and it comes back. Many people blame age or sore muscles. Sometimes that's right. But that stop-and-go pattern can point to poor circulation in your legs. This guide explains the signs, the risks and how doctors check your blood flow. Our team offers vascular medicine care in NYC.",
      links: [{ label: "vascular medicine care in NYC", href: ROUTES.cardiology }],
    },
    {
      type: "cta",
      prompt: "Leg pain when you walk?",
      label: "Book an appointment with our NYC cardiology and vascular team →",
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
      heading: "What Is Peripheral Artery Disease?",
    },
    {
      type: "p",
      text: "Arteries carry blood from your heart to the rest of your body. With PAD, plaque builds up in the arteries that feed your legs. Less blood gets through, especially when your muscles need more during activity.",
    },
    {
      type: "p",
      text: "The National Heart, Lung, and Blood Institute notes that PAD affects more than 8 million Americans ages 40 and older. It explains that only about 1 in 4 people with PAD have the classic leg pain. It also notes that people with PAD often have plaque in heart and brain arteries too. That raises their risk of heart attack and stroke.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_PAD_URL,
        },
      ],
    },
    {
      type: "p",
      text: "So PAD isn't just a leg problem. It's a sign to look at your whole heart and vascular health.",
    },
    {
      type: "diagram",
      variant: "concept",
      alt: "Infographic of narrowed leg arteries in peripheral artery disease",
      steps: [
        "Healthy open artery",
        "Plaque builds up",
        "Narrowed artery to the legs",
        "Less blood flow with walking",
      ],
    },

    {
      type: "h2",
      heading: "Peripheral Artery Disease Symptoms to Watch For",
    },
    {
      type: "h3",
      heading: "Leg Pain When Walking",
    },
    {
      type: "p",
      text: "The classic peripheral artery disease symptom is called claudication. You feel pain, cramping, aching or heaviness in the calf, thigh or hip when you walk. The discomfort eases when you rest. It often comes back at about the same distance. Hills and stairs can bring it on sooner.",
    },
    {
      type: "h3",
      heading: "Other Signs of Poor Circulation in the Legs",
    },
    {
      type: "p",
      text: "PAD can show up in other ways too:",
    },
    {
      type: "ul",
      items: [
        "Cold feet or one foot cooler than the other",
        "Numbness or tingling in the legs or feet",
        "Shiny skin or hair loss on the lower legs",
        "Slow toenail growth",
        "Sores on the toes, feet or legs that heal slowly",
        "A weak or missing pulse in the feet or legs",
        "Night pain in the feet or toes that eases when you hang your leg over the side of the bed",
      ],
    },
    {
      type: "h3",
      heading: "No Symptoms at All",
    },
    {
      type: "p",
      text: "Many people with PAD feel fine. That doesn't mean the disease isn't there. Screening still matters if you have risk factors.",
    },

    {
      type: "h2",
      heading: "Who Is at Risk for Peripheral Artery Disease?",
    },
    {
      type: "p",
      text: "These factors raise your chance of PAD:",
    },
    {
      type: "ul",
      items: [
        "Smoking",
        "Diabetes",
        "High blood pressure",
        "High cholesterol",
        "Age over 50",
        "Kidney disease",
        "A personal or family history of heart disease, stroke or PAD",
      ],
    },
    {
      type: "p",
      text: "Diabetes and smoking matter most. If you have diabetes, steady primary care for diabetes helps protect your blood vessels too.",
      links: [
        {
          label: "primary care for diabetes",
          href: BLOG_PATHS.primaryCareDiabetes,
        },
      ],
    },

    {
      type: "h2",
      heading: "Leg Pain That May Not Be PAD",
    },
    {
      type: "p",
      text: "Not every leg ache is circulation trouble. Muscle strain, pinched nerves, arthritis, vein problems and blood clots can also hurt. Nerve or joint pain may need a different path. Our pain management team can help when the problem looks more like nerves or joints than arteries.",
      links: [{ label: "pain management team", href: ROUTES.painManagement }],
    },

    {
      type: "h2",
      heading: "When Leg Pain Is an Emergency",
    },
    {
      type: "p",
      text: "Call 911 right away if you have:",
    },
    {
      type: "ul",
      items: [
        "A cold, pale or blue leg that comes on suddenly",
        "Sudden severe leg pain with numbness or weakness",
        "A swollen, red, warm calf plus chest pain or shortness of breath",
        "Chest pain, or sudden weakness on one side of the body",
      ],
    },

    {
      type: "h2",
      heading: "How a Vascular Doctor Tests for PAD",
    },
    {
      type: "p",
      text: "Your visit starts with your story and a pulse check in the legs and feet. Tests may include:",
    },
    {
      type: "ul",
      items: [
        "Ankle-brachial index (ABI). This compares blood pressure in your ankle and arm.",
        "Doppler ultrasound. This looks at blood flow in the leg arteries.",
        "Exercise testing. Walking on a treadmill can bring out symptoms and show how far you can go.",
        "Imaging such as CT or MRI when doctors need a clearer map of the arteries.",
        "Blood tests for cholesterol, sugar and other risk factors.",
      ],
    },
    {
      type: "process",
      alt: "Care path from PAD symptoms to a treatment plan",
      steps: ["Vascular visit and exam", "ABI or ultrasound testing", "Results and treatment plan"],
    },
    {
      type: "p",
      text: "Some of these studies overlap with cardiac diagnostic testing when your heart and vessels need a closer look together.",
      links: [
        {
          label: "cardiac diagnostic testing",
          href: BLOG_PATHS.cardiacDiagnosticTestingNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Treatments for Peripheral Artery Disease",
    },
    {
      type: "p",
      text: "Treatment aims to ease symptoms, protect your legs and lower heart attack and stroke risk. Plans often include:",
    },
    {
      type: "ul",
      items: [
        "Stopping smoking",
        "Supervised walking programs",
        "Control of blood pressure, cholesterol and diabetes",
        "Medicines your doctor recommends",
        "Careful foot care",
        "Procedures to open or bypass narrowed arteries when needed",
      ],
    },
    {
      type: "p",
      text: "If weight is part of your risk picture, a medical weight loss clinic can support that piece of the plan.",
      links: [{ label: "medical weight loss clinic", href: ROUTES.medicalWeightLoss }],
    },

    {
      type: "h2",
      heading: "Living With PAD in a Walking City",
    },
    {
      type: "p",
      text: "New York asks a lot of your legs. A few habits can help:",
    },
    {
      type: "ul",
      items: [
        "Build walking into your day as your doctor advises",
        "Wear shoes that fit and check your feet each day",
        "Plan rest spots on longer walks",
        "Take the subway for longer stretches when pain limits you",
        "Keep follow-up visits so your plan can change with you",
      ],
    },

    {
      type: "h2",
      heading: "When to See a Vascular Doctor",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "You have leg pain when you walk that eases with rest",
        "Your feet stay cold, numb or pale",
        "You have sores on your feet or legs that heal slowly",
        "You smoke or have diabetes and want a circulation check",
        "A doctor found a weak pulse or a low ABI",
      ],
    },
    {
      type: "p",
      text: "Not sure if the issue is legs, heart or both? Knowing when to see a cardiologist can help you pick the right next step. Related reading also covers heart palpitations and when to worry about chest pain.",
      links: [
        {
          label: "when to see a cardiologist",
          href: BLOG_PATHS.whenToSeeACardiologistNyc,
        },
        {
          label: "heart palpitations",
          href: BLOG_PATHS.heartPalpitationsCardiologistNyc,
        },
        {
          label: "when to worry about chest pain",
          href: BLOG_PATHS.whenToWorryAboutChestPainNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Vascular Medicine Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the East Village and all five boroughs. Cardiology, primary care and diagnostic testing share one location, so circulation and heart risk can be managed in one place.",
      links: [
        { label: "Cardiology", href: ROUTES.cardiology },
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "diagnostic testing", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to check your leg circulation?",
      body: `Book an appointment with our NYC cardiology and vascular team. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
      links: [
        {
          label: "Book an appointment with our NYC cardiology and vascular team →",
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
          q: "What Are the First Signs of Peripheral Artery Disease?",
          a: "The classic first sign is calf, thigh or hip pain when you walk that eases with rest. Cold feet, slow-healing sores and weak pulses can also appear. Many people have no symptoms at first.",
        },
        {
          q: "Can You Have PAD Without Leg Pain?",
          a: "Yes. Only about 1 in 4 people with PAD have classic walking pain. Risk factors like smoking and diabetes still make screening important.",
        },
        {
          q: "What Is an Ankle-Brachial Index Test?",
          a: "An ABI compares blood pressure at your ankle with blood pressure at your arm. It is a simple way to check for narrowed leg arteries.",
        },
        {
          q: "Is Peripheral Artery Disease Dangerous?",
          a: "PAD raises the risk of heart attack and stroke because the same plaque process can affect arteries in the heart and brain. Early care lowers that risk.",
        },
        {
          q: "Does Walking Help or Hurt PAD?",
          a: "Supervised walking programs often help symptoms. Your doctor will tell you how far and how often to walk safely.",
        },
        {
          q: "When Is Leg Pain an Emergency?",
          a: "Call 911 for a cold, pale or blue leg that starts suddenly, sudden severe pain with numbness, or leg swelling with chest pain or trouble breathing.",
        },
        {
          q: "Who Treats Peripheral Artery Disease in NYC?",
          a: "A cardiology and vascular medicine team can evaluate PAD, order testing and build a treatment plan. Primary care helps manage diabetes, blood pressure and cholesterol alongside that care.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to get answers about your leg pain?",
      body: `Book an appointment with our NYC cardiology and vascular team or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        {
          label: "Book an appointment with our NYC cardiology and vascular team →",
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
