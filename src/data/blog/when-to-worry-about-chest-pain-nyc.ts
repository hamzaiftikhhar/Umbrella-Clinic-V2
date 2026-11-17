import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_HEART_ATTACK_SYMPTOMS_URL = "https://www.nhlbi.nih.gov/health/heart-attack/symptoms";

export const whenToWorryAboutChestPainNycPost: BlogPost = {
  slug: BLOG_SLUGS.whenToWorryAboutChestPainNyc,
  title: "How Do You Know When to Worry About Chest Pain and See a Doctor in NYC?",
  subtitle:
    "Learn when chest pain is an emergency, which symptoms people miss, and how doctors evaluate chest pain in Lower Manhattan.",
  excerpt:
    "When to worry about chest pain? Learn emergency warning signs, common non-heart causes and when to see a doctor in NYC.",
  seoTitle: "How Do You Know When to Worry About Chest Pain in NYC?",
  metaDescription:
    "When to worry about chest pain? Learn emergency warning signs, common non-heart causes and when to see a doctor in NYC.",
  focusKeyword: "when to worry about chest pain",
  category: "Cardiology",
  readTime: "12 min read",
  publishedAt: "2026-11-17",
  image: BLOG_IMAGES.whenToWorryAboutChestPainNyc,
  imageAlt: "Adult with chest discomfort deciding when to worry about chest pain in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "If you have chest pain right now and it feels serious, stop reading and call 911.",
    },
    {
      type: "p",
      text: "Knowing when to worry about chest pain starts with how the pain feels and what comes with it. Pressure, squeezing or pain that spreads to the arm, jaw or back can signal a heart problem. So can shortness of breath, sweating, nausea or fainting. Not all chest pain is a heart attack. Muscles, lungs, stomach and anxiety can hurt too. When in doubt, get checked. Call 911 for severe or sudden symptoms.",
    },
    {
      type: "p",
      text: "Chest pain is one of the most frightening feelings you can have on a subway platform or at your desk. Sometimes it's a pulled muscle. Sometimes it's acid reflux. Sometimes it's the heart. This guide helps you sort emergency signs from less urgent ones. Our cardiology team in NYC can evaluate chest pain that comes and goes or needs a closer look.",
      links: [{ label: "cardiology team in NYC", href: ROUTES.cardiology }],
    },
    {
      type: "cta",
      prompt: "Need a chest pain evaluation?",
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
      heading: "When Chest Pain Is an Emergency",
    },
    {
      type: "p",
      text: "Call 911 right away if you have:",
    },
    {
      type: "ul",
      items: [
        "Pressure, squeezing, fullness or pain in the center of the chest",
        "Pain that spreads to the arm, neck, jaw, back or stomach",
        "Shortness of breath",
        "Cold sweat, nausea or lightheadedness",
        "Sudden severe chest pain with a tearing feeling in the back",
        "Chest pain after a major injury",
        "Trouble speaking, sudden weakness or facial droop",
      ],
    },
    {
      type: "p",
      text: "The National Heart, Lung, and Blood Institute lists chest discomfort, upper body discomfort, shortness of breath and cold sweat among heart attack symptoms. Don't drive yourself. Call 911 so care can start on the way.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_HEART_ATTACK_SYMPTOMS_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "Heart Attack Symptoms People Often Miss",
    },
    {
      type: "p",
      text: "Not everyone feels classic crushing pain. Watch for:",
    },
    {
      type: "ul",
      items: [
        "Unusual fatigue",
        "Indigestion-like discomfort",
        "Pain mainly in the jaw, neck or back",
        "Shortness of breath without much chest pain",
        "Symptoms that come and go",
      ],
    },
    {
      type: "p",
      text: "Women, older adults and people with diabetes may have less typical symptoms. Trust a sudden change that feels wrong.",
    },

    {
      type: "h2",
      heading: "Common Causes of Chest Pain That Aren't Heart Attacks",
    },
    {
      type: "p",
      text: "Many problems can hurt in the chest:",
    },
    {
      type: "ul",
      items: [
        "Heart-related: angina, heart attack, inflammation around the heart",
        "Lungs: infection, asthma flare, blood clot in the lung, collapsed lung",
        "Muscles and joints: strain, costochondritis, rib injury",
        "Stomach and esophagus: reflux, spasm, ulcer",
        "Anxiety: panic attack with chest tightness and a racing heart",
      ],
    },
    {
      type: "diagram",
      variant: "concept",
      alt: "Chart of common chest pain causes from heart, lungs, muscles, stomach and anxiety",
      steps: ["Heart", "Lungs", "Muscles and ribs", "Stomach and esophagus", "Anxiety"],
    },
    {
      type: "table",
      headers: ["Angina", "Heart attack"],
      rows: [
        [
          "Chest discomfort often with effort or stress",
          "Chest discomfort that can start at rest and feel more severe",
        ],
        [
          "Usually eases with rest or medicine your doctor prescribed",
          "Often lasts longer and may come with sweat, nausea or breathlessness",
        ],
        [
          "Means the heart may not be getting enough blood for a time",
          "Means heart muscle may be damaged and needs emergency care",
        ],
      ],
      note: "Only a medical evaluation can tell these apart. When unsure, call 911.",
    },

    {
      type: "h2",
      heading: "When Chest Pain Comes and Goes",
    },
    {
      type: "p",
      text: "Mild chest pain that lasts seconds and clearly ties to a pulled muscle is different from pressure that returns with stairs or stress. For symptoms that aren't an emergency but still worry you, decide whether to see primary care or go to urgent care. Recurring pressure with exertion often needs a cardiologist. Knowing when to see a cardiologist helps you choose the right visit.",
      links: [
        {
          label: "whether to see primary care or go to urgent care",
          href: BLOG_PATHS.primaryCareOrUrgentCare,
        },
        {
          label: "when to see a cardiologist",
          href: BLOG_PATHS.whenToSeeACardiologistNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Happens at a Chest Pain Evaluation",
    },
    {
      type: "p",
      text: "Your doctor asks about the pain, your risks and your medicines. An exam comes next. Testing may include an EKG, blood work, a chest X-ray, an echo or a stress test. Cardiac diagnostic testing and broader diagnostic testing services help find the cause.",
      links: [
        {
          label: "cardiac diagnostic testing",
          href: BLOG_PATHS.cardiacDiagnosticTestingNyc,
        },
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "process",
      alt: "Care path for non-emergency chest pain evaluation",
      steps: ["History and exam", "EKG and needed tests", "Plan and follow-up"],
    },

    {
      type: "h2",
      heading: "How to Prepare for Your Visit",
    },
    {
      type: "ul",
      items: [
        "Write down when the pain started and what makes it better or worse",
        "List medicines, supplements and caffeine or nicotine use",
        "Note related symptoms like shortness of breath or dizziness",
        "Bring prior heart test results if you have them",
      ],
    },

    {
      type: "h2",
      heading: "Lowering Your Risk After Chest Pain",
    },
    {
      type: "p",
      text: "If tests point to heart risk, your plan may include blood pressure control, cholesterol care, not smoking, activity as advised and follow-up with cardiology and your primary care doctor. Racing or skipping beats are covered in heart palpitations, and walking leg pain may relate to peripheral artery disease.",
      links: [
        { label: "primary care doctor", href: ROUTES.primaryCare },
        {
          label: "heart palpitations",
          href: BLOG_PATHS.heartPalpitationsCardiologistNyc,
        },
        {
          label: "peripheral artery disease",
          href: BLOG_PATHS.peripheralArteryDiseaseSymptomsNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Chest Pain Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, Tribeca and all five boroughs. Cardiology and primary care work together so emergency signs get urgent action and ongoing risks get steady follow-up.",
      links: [
        { label: "Cardiology", href: ROUTES.cardiology },
        { label: "primary care", href: ROUTES.primaryCare },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to talk about your chest symptoms?",
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
          q: "How Do I Know if Chest Pain Is Serious?",
          a: "Pressure, squeezing, pain that spreads, shortness of breath, sweating, nausea or fainting are warning signs. Call 911 for those. Mild pain tied to a clear muscle strain is less urgent but still worth a doctor visit if it persists.",
        },
        {
          q: "Can Anxiety Cause Chest Pain?",
          a: "Yes. Panic and anxiety can cause tightness, a racing heart and shortness of breath. A medical check helps make sure the heart isn't the cause.",
        },
        {
          q: "Is Heartburn the Same as a Heart Attack?",
          a: "No, but they can feel alike. Don't assume burning chest discomfort is only reflux when it feels new, severe or comes with other warning signs.",
        },
        {
          q: "Should I Go to Urgent Care or the ER for Chest Pain?",
          a: "Go to the ER or call 911 for severe, sudden or classic heart-attack symptoms. Urgent care or primary care may fit milder, non-emergency symptoms after you've ruled out red flags.",
        },
        {
          q: "What Is Angina?",
          a: "Angina is chest discomfort from the heart not getting enough blood for a time, often with effort or stress. It needs medical evaluation and is different from a heart attack, which can damage heart muscle.",
        },
        {
          q: "Can Muscle Strain Cause Chest Pain?",
          a: "Yes. Chest wall muscles and joints can hurt with movement or pressing on the area. New pressure with exertion still deserves a heart check.",
        },
        {
          q: "What Tests Check Chest Pain?",
          a: "An EKG is common. Blood tests, chest imaging, an echocardiogram or a stress test may follow, based on your symptoms and risk.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to get clarity on chest pain?",
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
