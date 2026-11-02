import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NINDS_TREMOR_URL = "https://www.ninds.nih.gov/health-information/disorders/tremor";

export const neurologistForTremorsNycPost: BlogPost = {
  slug: BLOG_SLUGS.neurologistForTremorsNyc,
  title: "Why Do Your Hands Shake, and Do You Need a Neurologist for Tremors in NYC?",
  subtitle:
    "Learn when to see a neurologist for tremors, how essential tremor and Parkinson's differ, and what the exam involves.",
  excerpt:
    "Shaky hands? Learn when to see a neurologist for tremors, how essential tremor and Parkinson's differ, and what the exam involves. Care in Lower Manhattan.",
  seoTitle: "Do You Need a Neurologist for Tremors in NYC?",
  metaDescription:
    "Shaky hands? Learn when to see a neurologist for tremors, how essential tremor and Parkinson's differ, and what the exam involves. Care in Lower Manhattan.",
  focusKeyword: "neurologist for tremors",
  category: "Neurology",
  readTime: "8 min read",
  publishedAt: "2026-11-02",
  image: BLOG_IMAGES.physicianPatient,
  imageAlt: "Adult with a hand tremor thinking about seeing a neurologist for tremors",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "See a neurologist for tremors when shaking lasts, gets worse or makes daily tasks hard. Writing, typing, eating and holding a coffee cup are common trouble spots. Many tremors come from caffeine, stress, a medicine or an overactive thyroid. Others come from essential tremor or Parkinson's disease. A neurologist can tell the types apart with a careful exam. Shaking with sudden weakness, confusion or trouble speaking is an emergency. Call 911.",
    },
    {
      type: "p",
      text: "You notice it when you sign a receipt. Or when you hold your phone on a crowded train. Your hand won't stay still. It's easy to worry about the worst. The good news is that most tremors aren't dangerous. Still, the right diagnosis matters, because each type has a different plan. If you want an expert look, our Lower Manhattan neurology team evaluates tremors and other movement disorders.",
      links: [{ label: "Lower Manhattan neurology team", href: ROUTES.neurology }],
    },
    {
      type: "p",
      text: `Want answers about the shaking? Book an appointment with our NYC neurologist or call ${SITE_PHONE} to schedule your visit.`,
      links: [{ label: "Book an appointment with our NYC neurologist", href: ROUTES.neurology }],
    },

    { type: "h2", heading: "What Is a Tremor?" },
    {
      type: "p",
      text: "A tremor is shaking you can't control. It most often affects the hands. It can also affect the arms, head, voice, legs or torso. The National Institute of Neurological Disorders and Stroke notes that tremor isn't life threatening. But it can make tasks like writing, eating and dressing harder.",
      links: [
        {
          label: "National Institute of Neurological Disorders and Stroke",
          href: NINDS_TREMOR_URL,
        },
      ],
    },
    { type: "p", text: "Doctors sort tremors by when they happen:" },
    {
      type: "ul",
      items: [
        "Rest tremor shows up when your hand sits still, like in your lap.",
        "Action tremor shows up when you move or hold a position, like reaching for a glass.",
      ],
    },
    { type: "p", text: "That one detail tells your neurologist a lot." },

    { type: "h2", heading: "Common Causes of Shaky Hands" },
    {
      type: "p",
      text: "Not every tremor points to a brain problem. Common causes include:",
    },
    {
      type: "ul",
      items: [
        "Too much caffeine. Extra cold brew can do it.",
        "Stress, anxiety or fatigue. These can make any tremor worse.",
        "Medicines. Some asthma inhalers, steroids and psychiatric medicines can cause shaking.",
        "An overactive thyroid. Your doctor can check this with a blood test.",
        "Low or high blood sugar. This matters if you have diabetes.",
        "Alcohol withdrawal.",
        "Essential tremor. A common movement disorder that often runs in families.",
        "Parkinson's disease. Tremor is one possible sign, but not everyone with Parkinson's has it.",
        "Dystonia. This causes muscles to tighten or twist on their own, sometimes with a tremor.",
        "Stroke, multiple sclerosis or injury to parts of the brain that control movement.",
      ],
    },
    {
      type: "p",
      text: "Your primary care doctor can check for thyroid and blood sugar problems first. Those labs are often part of the blood tests in a primary care checkup.",
      links: [
        { label: "primary care doctor", href: ROUTES.primaryCare },
        { label: "blood tests in a primary care checkup", href: BLOG_PATHS.bloodTestsCheckup },
      ],
    },

    {
      type: "h2",
      heading: "Essential Tremor vs. Parkinson's Tremor",
      subtitle: "Two causes that people often confuse.",
    },
    {
      type: "p",
      text: "The question of essential tremor vs Parkinson's comes up at almost every first visit. Here's how they often differ.",
    },
    {
      type: "table",
      headers: ["Essential tremor", "Parkinson's tremor"],
      rows: [
        ["Shows up during action, like writing or drinking", "Shows up mostly at rest"],
        ["Usually affects both hands", "Often starts on one side of the body"],
        [
          "May also affect the head or voice",
          "Can look like rolling a pill between thumb and finger",
        ],
        ["Often runs in families", "May come with stiffness, slow movement or a shuffling walk"],
        ["Handwriting tends to look large and shaky", "Handwriting may get very small"],
      ],
      note: "Only a doctor can sort this out. Some people have features of both. That's one reason a neurologist's exam matters.",
    },

    { type: "h2", heading: "When to See a Neurologist for Tremors" },
    { type: "p", text: "Book a visit if:" },
    {
      type: "ul",
      items: [
        "The shaking lasts more than a few weeks",
        "It keeps getting worse",
        "It makes writing, eating, typing or dressing hard",
        "It affects one side more than the other",
        "It comes with stiffness, slowness or balance problems",
        "Your voice or head shakes",
        "It runs in your family and now affects you",
      ],
    },
    {
      type: "p",
      text: "Not sure if your symptom fits? Other common signs also show when to see a neurologist.",
      links: [{ label: "when to see a neurologist", href: BLOG_PATHS.whenToSeeANeurologistNyc }],
    },

    {
      type: "h2",
      heading: "When Shaking Is an Emergency",
      subtitle: "Some symptoms can't wait for a booking — call 911.",
    },
    { type: "p", text: "Call 911 right away if shaking comes with:" },
    {
      type: "ul",
      items: [
        "Sudden weakness or numbness on one side",
        "Slurred speech or trouble understanding words",
        "Sudden confusion",
        "A drooping face",
        "Loss of consciousness or a seizure",
        "Shaking, sweating and confusion in someone with diabetes, which can signal very low blood sugar",
      ],
    },

    { type: "h2", heading: "What Happens at a Tremor Evaluation?" },
    {
      type: "p",
      text: "Most tremor diagnoses come from a careful history and exam. Your neurologist asks:",
    },
    {
      type: "ul",
      items: [
        "When did the shaking start?",
        "Which body parts shake?",
        "Does it happen at rest, during movement or both?",
        "Does anything make it better or worse, like coffee or alcohol?",
        "Does anyone in your family have a tremor?",
        "What medicines do you take?",
      ],
    },
    {
      type: "p",
      text: "Then your doctor watches the tremor. You might hold your arms out, touch your nose, write a sentence or draw a spiral. Your neurologist also checks muscle tone, reflexes, balance and walking.",
    },
    { type: "h3", heading: "Tests Your Neurologist May Order" },
    { type: "p", text: "You may not need tests at all. If you do, they could include:" },
    {
      type: "ul",
      items: [
        "Blood work to check thyroid levels and other causes",
        "An MRI or CT scan if your doctor wants to rule out a structural cause",
        "An EMG to look at muscle and nerve activity",
      ],
    },
    {
      type: "p",
      text: "Neurology care at Umbrella Health includes EMG and nerve conduction studies and coordinated brain imaging. Other tests can run through our diagnostic testing services.",
      links: [
        { label: "Neurology care at Umbrella Health", href: ROUTES.neurology },
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
      ],
    },

    { type: "h2", heading: "How to Prepare" },
    {
      type: "ul",
      items: [
        "Take a short phone video of the tremor when it's at its worst.",
        "List every medicine and supplement.",
        "Track how much coffee and alcohol you drink for a week.",
        "Bring a handwriting sample from before the tremor started, if you have one.",
        "Ask a relative about family history.",
      ],
    },

    { type: "h2", heading: "How a Neurologist Treats Tremors" },
    {
      type: "p",
      text: "Treatment depends on the type and how much it affects your life. Mild tremors may need no treatment at all. Options can include:",
    },
    {
      type: "ul",
      items: [
        "Treating the cause, like adjusting a medicine or treating a thyroid problem",
        "Cutting back on caffeine",
        "Getting enough sleep",
        "Stress management",
        "Prescription medicines for essential tremor or Parkinson's",
        "Occupational therapy and tools like weighted utensils",
        "Referral for advanced options when medicines don't help enough",
      ],
    },

    {
      type: "h2",
      heading: "Living With a Tremor in a Busy City",
      subtitle: "Small tips while you wait for your visit.",
    },
    {
      type: "p",
      text: "A tremor can make small city moments harder. Tapping your card at the turnstile. Holding a pole on a moving train. Signing for a package. These tips may help while you wait for your visit.",
    },
    {
      type: "ul",
      items: [
        "Use both hands to hold a cup or phone.",
        "Rest your elbows on a table when you write or eat.",
        "Choose mugs with lids and big handles.",
        "Try a heavier pen or a phone stand.",
        "Plan tricky tasks for times of day when the tremor feels lighter.",
        "Cut back on coffee and energy drinks.",
      ],
    },
    {
      type: "p",
      text: "Small changes add up. Still, they don't replace a proper diagnosis. A neurologist for tremors can tell you what's behind the shaking and what will help most.",
    },

    { type: "h3", heading: "Seeing a Neurologist for Dystonia in NYC" },
    {
      type: "p",
      text: "Dystonia causes muscles to pull or twist on their own. It can affect the neck, eyelids, voice or a hand. Some people also have a tremor with it. If you need a neurologist for dystonia in NYC, ask whether the practice evaluates movement disorders. Umbrella Health's neurology team evaluates dystonia and other movement disorders.",
    },

    {
      type: "h2",
      heading: "Tremor Care in Lower Manhattan",
      subtitle: "Neurology, primary care and pain management in one location.",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo and across New York City. Neurology works alongside primary care and pain management in one location.",
      links: [{ label: "Umbrella Health", href: ROUTES.home }],
    },
    {
      type: "p",
      text: `Ready to stop guessing about the shaking? Book an appointment with our NYC neurologist. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
      links: [
        { label: "Book an appointment with our NYC neurologist", href: ROUTES.neurology },
        { label: "contact Umbrella Health to book a visit", href: ROUTES.contactUs },
      ],
    },
    {
      type: "p",
      text: "New to the practice? Umbrella Health brings primary care and specialists together under one roof.",
    },

    { type: "h2", heading: "More Neurology Guides" },
    {
      type: "p",
      text: "Memory changes too? A neurologist for memory loss can check what's normal and what isn't.",
      links: [
        { label: "neurologist for memory loss", href: BLOG_PATHS.neurologistForMemoryLossNyc },
      ],
    },
    {
      type: "p",
      text: "Living with headaches? Frequent attacks are a reason to see a neurologist for migraines.",
      links: [{ label: "neurologist for migraines", href: BLOG_PATHS.neurologistForMigrainesNyc }],
    },
    {
      type: "p",
      text: "Feeling foggy or slow? A neurologist for brain fog can look for the cause.",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about tremors, essential tremor, Parkinson's and when to see a neurologist.",
      items: [
        {
          q: "How do I find an essential tremor specialist in NYC?",
          a: "Ask your primary care doctor for a neurology referral. In NYC, an essential tremor specialist is often a movement disorder neurologist. Your insurance directory can help you check who is in network.",
        },
        {
          q: "What neurological tests for tremors might I have?",
          a: "Most tremor workups start with a careful exam. The neurologist watches your hands at rest and in motion. You may draw a spiral or hold a cup. Blood tests can check thyroid levels. Imaging is not always needed.",
        },
        {
          q: "What doctor treats tremors?",
          a: "A neurologist diagnoses and treats tremors. Looking for a neurologist for tremors in NYC? Start with a practice that evaluates movement disorders. Some neurologists focus on movement disorders. Your primary care doctor can start with basic blood tests.",
        },
        {
          q: "Are hand tremors a sign of Parkinson's?",
          a: "Not always. Essential tremor is a common cause of shaky hands, and so are caffeine, stress and some medicines. A neurologist can look for the other signs of Parkinson's.",
        },
        {
          q: "Can anxiety cause tremors?",
          a: "Yes. Stress and anxiety can cause shaking or make an existing tremor worse. A doctor can check for other causes too.",
        },
        {
          q: "Is essential tremor dangerous?",
          a: "Essential tremor isn't life threatening. It can still make daily tasks hard. Treatment can help many people.",
        },
        {
          q: "Do I need an MRI for a tremor?",
          a: "Most people don't. Your neurologist may order one if the exam suggests a structural cause.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to get your tremor checked?",
      body: `Book an appointment with our NYC neurologist or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        { label: "NYC Neurologist →", href: ROUTES.neurology },
        { label: "Contact Us →", href: ROUTES.contactUs },
      ],
    },
    {
      type: "p",
      text: "This article shares general information. It isn't medical advice, a diagnosis or treatment. Talk with a qualified clinician about your own symptoms. Please don't share personal health details in comments or on social media. If you think you have a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
