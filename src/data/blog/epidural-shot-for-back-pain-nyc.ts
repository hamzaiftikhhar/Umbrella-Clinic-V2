import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_EPIDURAL_URL = "https://medlineplus.gov/ency/article/007485.htm";

export const epiduralShotForBackPainNycPost: BlogPost = {
  slug: BLOG_SLUGS.epiduralShotForBackPainNyc,
  title: "How Does an Epidural Shot for Back Pain Work, and What Should You Expect in NYC?",
  subtitle:
    "Learn how epidural steroid injections work, who they help, risks, recovery and where to ask in Lower Manhattan.",
  excerpt:
    "Thinking about an epidural shot for back pain? Learn how epidural steroid injections work, who they help, risks, recovery and where to ask in NYC.",
  seoTitle: "Is an Epidural Shot for Back Pain Right for You in NYC?",
  metaDescription:
    "Thinking about an epidural shot for back pain? Learn how epidural steroid injections work, who they help, risks, recovery and where to ask in NYC.",
  focusKeyword: "epidural shot for back pain",
  category: "Pain Management",
  readTime: "12 min read",
  publishedAt: "2026-11-23",
  image: BLOG_IMAGES.epiduralShotForBackPainNyc,
  imageAlt: "Doctor explaining how an epidural shot for back pain works using a spine model",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Quick answer: An epidural shot for back pain places anti-inflammatory steroid medicine near an irritated spinal nerve. Doctors mostly use it when pain spreads from the back into the hip or leg, like sciatica. It's usually an option after medicines and physical therapy haven't helped enough. Relief often starts within days and may last weeks to months. It doesn't cure the cause, so exercise and other care still matter. After any injection, go to the ER for fever, severe headache, new weakness or loss of bladder control.",
    },
    {
      type: "p",
      text: "Your doctor mentions an epidural injection. Maybe you picture the shot people get during childbirth. Maybe you worry about a needle near your spine. Those reactions are normal. An epidural steroid injection is a common outpatient procedure. It can help some people get back to moving. This guide explains how it works, who it helps and what the day looks like. Our team offers interventional pain management in NYC.",
      links: [{ label: "interventional pain management in NYC", href: ROUTES.painManagement }],
    },
    {
      type: "cta",
      prompt: "Wondering if an epidural could help?",
      label: "Book an appointment with our NYC pain management doctor",
      href: ROUTES.painManagement,
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
      heading: "What is an epidural steroid injection?",
    },
    {
      type: "p",
      text: "Your spinal cord and nerve roots sit inside a protective sac. The space just outside that sac is the epidural space. An epidural steroid injection delivers medicine into that space, close to the irritated nerve.",
    },
    {
      type: "p",
      text: "MedlinePlus explains when doctors use this injection. It's for pain that spreads from the lower spine to the hips or down the leg. It notes that the injection is for pain that hasn't improved with medicines, physical therapy or other nonsurgical care. It also says relief may last weeks to months, and that the shot doesn't cure the cause.",
      links: [{ label: "MedlinePlus", href: MEDLINEPLUS_EPIDURAL_URL }],
    },
    {
      type: "p",
      text: "The shot usually contains:",
    },
    {
      type: "ul",
      items: ["A steroid to calm inflammation", "Often a numbing medicine for quick, short relief"],
    },

    {
      type: "h2",
      heading: "Who may benefit from an epidural injection?",
    },
    {
      type: "p",
      text: "Your doctor may suggest one for:",
    },
    {
      type: "ul",
      items: [
        "Sciatica from a herniated or bulging disc",
        "Nerve root pain in the lower back, also called radiculopathy",
        "Spinal stenosis",
        "Neck pain that runs down the arm from a pinched nerve",
      ],
    },
    {
      type: "p",
      text: "Many people know it as an injection for sciatica. It tends to help most with pain that travels into an arm or leg. It helps less with back pain that stays in the back. If leg pain is your main problem, ask about sciatica treatment in NYC.",
      links: [{ label: "sciatica treatment in NYC", href: BLOG_PATHS.sciaticaTreatmentNyc }],
    },

    {
      type: "h2",
      heading: "Who should avoid it or wait?",
    },
    {
      type: "p",
      text: "Tell your doctor if you:",
    },
    {
      type: "ul",
      items: [
        "Have an infection, especially near the injection site",
        "Take blood thinners",
        "Have a bleeding problem",
        "Have diabetes that's hard to control, since steroids raise blood sugar",
        "Are or could be pregnant",
        "Had a reaction to contrast dye or numbing medicine",
      ],
    },

    {
      type: "h2",
      heading: "What happens during the procedure?",
    },
    {
      type: "p",
      text: "Every clinic has its own steps. Here's how it usually goes.",
    },
    {
      type: "ul",
      items: [
        "Before. Your doctor reviews your imaging and medicines. You may need to pause blood thinners. Ask before you stop anything.",
        "Positioning. You lie face down or on your side. The team cleans your skin.",
        "Numbing. The doctor numbs a small area of skin.",
        "Guidance. The doctor uses live X-ray imaging to guide the needle. A small amount of dye confirms the spot.",
        "Injection. The medicine goes in. You may feel pressure or a brief flare of your usual pain.",
        "After. You rest for a short time before you go home.",
      ],
    },
    {
      type: "p",
      text: "The injection itself often takes only minutes. Plan for a longer visit overall. Bring someone to take you home, especially if you get a sedative.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.epiduralSpaceDiagram,
      alt: "Diagram of the epidural space where an epidural shot for back pain delivers medicine",
    },
    {
      type: "process",
      alt: "Care path for an epidural steroid injection visit",
      steps: ["Review imaging and medicines", "Image-guided injection", "Rest and follow-up plan"],
    },

    {
      type: "h2",
      heading: "Recovery: what to expect after the shot",
    },
    {
      type: "ul",
      items: [
        "Your back may feel sore where the needle went in.",
        "Your usual pain may flare for a day or two.",
        "The steroid often takes a few days to start working.",
        "You can usually return to light activity the next day.",
        "Physical therapy often works better once pain eases.",
      ],
    },
    {
      type: "p",
      text: "Keep a pain diary for the next few weeks. It helps your doctor judge how well the shot worked.",
    },

    {
      type: "h2",
      heading: "Epidural shot for back pain side effects and risks",
    },
    {
      type: "p",
      text: "Most people have mild side effects or none. Possible effects include:",
    },
    {
      type: "ul",
      items: [
        "Soreness at the injection site",
        "A temporary pain flare",
        "Flushing of the face or a warm feeling",
        "Trouble sleeping for a night or two",
        "A short rise in blood sugar",
        "Headache",
      ],
    },
    {
      type: "p",
      text: "Serious problems are uncommon. They can include infection, bleeding, nerve injury or an allergic reaction.",
    },

    {
      type: "h2",
      heading: "When to get help after an injection",
    },
    {
      type: "p",
      text: "Go to the ER or call 911 if you have:",
    },
    {
      type: "ul",
      items: [
        "Fever or chills",
        "A severe headache that gets worse when you sit or stand",
        "New numbness or weakness in your legs",
        "Loss of bladder or bowel control",
        "Redness, swelling or drainage at the injection site",
        "Trouble breathing after a neck injection",
      ],
    },

    {
      type: "h2",
      heading: "Does an epidural shot for back pain work?",
    },
    {
      type: "p",
      text: "Results vary. People often ask about an epidural shot for back pain success percentage. There isn't one number that fits everyone. Ask your doctor what to expect in your case. Some people get strong relief for months. Others notice a small change, or none. The shot tends to work best when:",
    },
    {
      type: "ul",
      items: [
        "Pain travels down an arm or leg",
        "Imaging shows a nerve under pressure that matches your symptoms",
        "The pain started fairly recently",
        "You pair the shot with exercise and physical therapy",
      ],
    },
    {
      type: "p",
      text: "Think of the injection as a window. Lower pain gives you a chance to move, build strength and get back to daily life. That work helps relief last after the steroid wears off.",
    },
    {
      type: "p",
      text: 'Set clear expectations with your doctor. Agree on what "worked" means for you. Maybe it means half the pain, or walking to work again. Then check in a few weeks later.',
    },

    {
      type: "h2",
      heading: "How many epidural injections can you have?",
    },
    {
      type: "p",
      text: "There's no single number for everyone. Doctors usually limit how many steroid shots you get in a year. Repeated steroid doses can affect bones, blood sugar and other systems. If the first shot doesn't help, your doctor may rethink the plan. Ask what success looks like before your first injection.",
    },

    {
      type: "h2",
      heading: "Other back pain injection options",
    },
    {
      type: "p",
      text: "Epidurals aren't the only option. Interventional pain management also includes:",
    },
    {
      type: "ul",
      items: [
        "Facet joint injections for pain from small spine joints",
        "Medial branch blocks to test whether a facet joint causes pain",
        "Radiofrequency ablation to quiet a pain-signaling nerve for longer relief",
        "Sacroiliac joint injections for pain low in the back near the hips",
        "Trigger point injections for tight muscle knots",
      ],
    },
    {
      type: "p",
      text: "Knowing what pain management doctors do shows how a specialist chooses.",
      links: [
        {
          label: "what pain management doctors do",
          href: BLOG_PATHS.whatDoPainManagementDoctorsDo,
        },
      ],
    },

    {
      type: "h2",
      heading: "Questions to ask your doctor",
    },
    {
      type: "ul",
      items: [
        "What's causing my pain, and why do you think an epidural will help?",
        "What do you expect the shot to do for me?",
        "How will we measure whether it worked?",
        "What happens if it doesn't help?",
        "Do I need to stop any medicines before the shot?",
        "Does my insurance need prior approval?",
      ],
    },
    {
      type: "p",
      text: "Coverage varies, and many plans need prior approval for spine injections. The Umbrella Health team can help you verify your insurance coverage.",
      links: [{ label: "verify your insurance coverage", href: ROUTES.insurance }],
    },

    {
      type: "h2",
      heading: "Epidural injections in NYC: care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, SoHo and all five boroughs. Pain management works with primary care and neurology in one place. That helps when back pain ties into other health issues. Long-term back pain may need chronic back pain treatment.",
      links: [
        { label: "primary care", href: ROUTES.primaryCare },
        {
          label: "chronic back pain treatment",
          href: BLOG_PATHS.chronicBackPainTreatmentNyc,
        },
      ],
    },
    {
      type: "ctaBox",
      title: "Still deciding about an injection?",
      body: `Book an appointment with our NYC pain management doctor. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
      links: [
        {
          label: "Book an appointment with our NYC pain management doctor →",
          href: ROUTES.painManagement,
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
      heading: "Frequently asked questions",
      items: [
        {
          q: "What does an epidural shot for back pain cost?",
          a: "The cost of an epidural shot for back pain depends on your plan, the setting and the type of injection. Some plans need prior approval. Call your insurer and ask the clinic before you book.",
        },
        {
          q: "Does an epidural shot for back pain hurt?",
          a: "Most people feel a pinch from the numbing medicine and some pressure. Your usual pain may flare briefly.",
        },
        {
          q: "How long does an epidural steroid injection last?",
          a: "Relief often lasts weeks to months. It varies from person to person. Some people get little relief.",
        },
        {
          q: "How soon does an epidural injection work?",
          a: "The numbing medicine may help right away. The steroid often takes a few days to work.",
        },
        {
          q: "Can I drive after an epidural injection?",
          a: "Many clinics ask you to bring a driver, especially if you get a sedative. Follow your clinic's instructions.",
        },
        {
          q: "Is an epidural for back pain the same as one for childbirth?",
          a: "No. Both use the epidural space. A labor epidural numbs pain during delivery. A back pain epidural mainly delivers a steroid to calm nerve inflammation.",
        },
        {
          q: "What if the epidural doesn't work?",
          a: "Your doctor may look again at the cause. Other options include physical therapy, medicines, other injections or a surgery consult.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to talk through your options?",
      body: `Book an appointment with our NYC pain management doctor or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        {
          label: "Book an appointment with our NYC pain management doctor →",
          href: ROUTES.painManagement,
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
