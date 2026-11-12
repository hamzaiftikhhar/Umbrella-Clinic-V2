import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_SLEEP_STUDIES_URL = "https://www.nhlbi.nih.gov/health/sleep-studies";

export const homeSleepStudyNycPost: BlogPost = {
  slug: BLOG_SLUGS.homeSleepStudyNyc,
  title: "How Does a Home Sleep Study Work in NYC, and What Should You Expect?",
  subtitle:
    "Learn how a home sleep study works, how it compares to an in-lab test, how to prepare and how to get one in Lower Manhattan.",
  excerpt:
    "Need a sleep study? Learn how a home sleep study works, how it compares to an in-lab test, how to prepare and how to get one in Lower Manhattan, NYC.",
  seoTitle: "How Does a Home Sleep Study Work in NYC?",
  metaDescription:
    "Need a sleep study? Learn how a home sleep study works, how it compares to an in-lab test, how to prepare and how to get one in Lower Manhattan, NYC.",
  focusKeyword: "home sleep study",
  category: "Sleep Medicine",
  readTime: "11 min read",
  publishedAt: "2026-11-12",
  image: BLOG_IMAGES.homeSleepStudyNyc,
  imageAlt: "Home sleep study device ready for an overnight test in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "A home sleep study is a simple overnight test you do in your own bed. You wear a small device that tracks your breathing, oxygen level and heart rate. Doctors mostly use it to check for obstructive sleep apnea. You need a doctor's visit first, and your doctor reviews the results. Some people need an in-lab sleep study instead. That's common when doctors suspect other sleep disorders. Call 911 for chest pain or severe trouble breathing.",
    },
    {
      type: "p",
      text: "The words \"sleep study\" make many people picture a hospital bed covered in wires. For a lot of people, that's not how it goes anymore. Many sleep tests now happen at home. You sleep in your own bed, with your own pillow. Then you return the device. If you're looking for a home sleep study NYC patients can do without a lab night, this is it. This guide explains how a home sleep study works and how to prepare. It also covers what happens after.",
    },
    {
      type: "cta",
      prompt: "Ready to schedule your sleep study?",
      label: "Book an appointment with our NYC sleep specialist →",
      href: ROUTES.sleepMedicine,
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
      heading: "What Is a Home Sleep Study?",
    },
    {
      type: "p",
      text: "Doctors also call it a home sleep apnea test. Some people say at-home sleep test. It's a portable test. You set it up yourself at bedtime.",
    },
    {
      type: "p",
      text: "Most devices track:",
    },
    {
      type: "ul",
      items: [
        "Your breathing and airflow",
        "Your breathing effort, through a chest strap",
        "Your blood oxygen level, through a finger clip",
        "Your heart rate",
        "Your body position and snoring, on some models",
      ],
    },
    {
      type: "p",
      text: "The device doesn't watch you or record video. It just collects data while you sleep.",
    },

    {
      type: "h2",
      heading: "Home Sleep Study vs. In-Lab Sleep Study",
    },
    {
      type: "p",
      text: "Both tests help doctors diagnose sleep disorders. They work a little differently.",
    },
    {
      type: "p",
      text: "The National Heart, Lung, and Blood Institute says your doctor picks the setting. That means a sleep center or your home. It also notes that in-lab studies use sensors on your scalp, face, chest, limbs and finger. These record brain waves, breathing, oxygen and muscle movements. Doctors call that full test polysomnography.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_SLEEP_STUDIES_URL,
        },
      ],
    },
    {
      type: "table",
      headers: ["At-home test", "In-lab sleep study"],
      rows: [
        ["Happens in your own bed", "Happens overnight at a sleep center"],
        ["Uses fewer sensors", "Records brain waves, so it shows sleep stages"],
        [
          "Mainly checks for obstructive sleep apnea",
          "Can check for many sleep disorders, not just apnea",
        ],
        ["Is often easier to schedule", "A sleep tech watches through the night"],
      ],
      note: "Your doctor picks the setting that fits your symptoms and health history.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.homeSleepStudyVsLab,
      alt: "Chart comparing a home sleep study with an in-lab sleep study",
      caption: "Home tests use fewer sensors. In-lab studies record a fuller night of data.",
    },

    {
      type: "h2",
      heading: "Who Is a Good Fit for a Home Test?",
    },
    {
      type: "p",
      text: "This test often works well for adults with likely obstructive sleep apnea. Think loud snoring, pauses in breathing and daytime sleepiness. Knowing the common sleep apnea symptoms helps you tell if this test fits.",
      links: [
        {
          label: "sleep apnea symptoms",
          href: BLOG_PATHS.sleepApneaSymptomsNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "When an In-Lab Study May Make More Sense",
    },
    {
      type: "p",
      text: "Your doctor may suggest an in-lab test if you:",
    },
    {
      type: "ul",
      items: [
        "Have heart failure or serious lung disease",
        "May have central sleep apnea",
        "May have narcolepsy or another cause of heavy daytime sleepiness",
        "Act out dreams or move a lot in your sleep",
        "Had a normal home test but still have strong symptoms",
      ],
    },
    {
      type: "p",
      text: "Could it be narcolepsy or a parasomnia? A neurologist for sleep disorders can help sort that out.",
      links: [
        {
          label: "neurologist for sleep disorders",
          href: BLOG_PATHS.neurologistForSleepDisordersNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "How to Get a Home Sleep Study, Step by Step",
    },
    {
      type: "p",
      text: "Here's how a home sleep study from an NYC clinic usually works:",
    },
    {
      type: "ul",
      items: [
        "Book a sleep visit. Your doctor asks about your sleep and checks your airway.",
        "Get the device. The office explains how you'll receive it.",
        "Learn the setup. Staff show you how to put it on.",
        "Sleep with it. Most tests run for one night. Some run for two or three nights.",
        "Return it. You bring it back or mail it.",
        "Review results. Your doctor goes over the findings and next steps.",
      ],
    },
    {
      type: "process",
      alt: "Home sleep study path from visit to results review",
      steps: ["Sleep medicine visit", "Overnight home test", "Results and next steps"],
    },
    {
      type: "p",
      text: "Sleep medicine at Umbrella Health includes home sleep studies and sleep apnea testing.",
      links: [{ label: "Sleep medicine at Umbrella Health", href: ROUTES.sleepMedicine }],
    },

    {
      type: "h2",
      heading: "How to Prepare for Your Test Night",
    },
    {
      type: "p",
      text: "A little planning helps you get a clear result.",
    },
    {
      type: "ul",
      items: [
        "Follow your normal bedtime routine.",
        "Skip naps on the test day if you can.",
        "Avoid caffeine in the afternoon and evening.",
        "Skip alcohol that night unless your doctor says otherwise.",
        "Take your usual medicines, unless your doctor tells you to stop one.",
        "Remove nail polish from the finger that gets the sensor.",
        "Charge the device if it needs it.",
        "Keep your phone nearby in case a sensor slips.",
      ],
    },
    {
      type: "h3",
      heading: "What If I Can't Sleep With It On?",
    },
    {
      type: "p",
      text: "That worry is common. Most people sleep enough for the test to work. If a sensor falls off, just put it back on. Tell your doctor if you had a rough night. They can decide whether you need a repeat test.",
    },

    {
      type: "h2",
      heading: "Common Worries About Home Testing",
    },
    {
      type: "p",
      text: "People ask the same few things before test night.",
    },
    {
      type: "ul",
      items: [
        '"What if I set it up wrong?" Staff walk you through it first. Many devices also show a light or message when a sensor slips.',
        '"Will I sleep at all?" Most people sleep less deeply than usual. That\'s fine. The test still works if you get a few hours.',
        '"Can my partner stay in bed?" Yes, usually. Ask them not to move the sensors.',
        '"What about my pets?" Keep them out of the bed that night if you can. A cat on your chest can pull a strap loose.',
      ],
    },

    {
      type: "h2",
      heading: "Understanding Your Sleep Test Results",
    },
    {
      type: "p",
      text: "Your doctor explains your report in plain words. The main number for sleep apnea is often the AHI. That stands for apnea-hypopnea index. It counts how many times per hour your breathing stops or gets shallow.",
    },
    {
      type: "p",
      text: "Your report may also show:",
    },
    {
      type: "ul",
      items: [
        "Your lowest oxygen level",
        "How long you snored",
        "Whether breathing got worse on your back",
      ],
    },
    {
      type: "p",
      text: "Your doctor uses these to rate sleep apnea as mild, moderate or severe. Then you talk about treatment. CPAP, oral appliances and lifestyle changes are common next steps.",
    },

    {
      type: "h2",
      heading: "What If My Home Test Is Normal but I Still Feel Tired?",
    },
    {
      type: "p",
      text: "A normal at-home result doesn't rule out every sleep problem. It checks breathing, not sleep stages. If you still feel exhausted, ask your doctor about an in-lab study. Other causes of tiredness may need a look too. Your primary care doctor can check thyroid levels, iron and other labs.",
      links: [{ label: "primary care doctor", href: ROUTES.primaryCare }],
    },

    {
      type: "h2",
      heading: "Is a Sleep Study Covered by Insurance?",
    },
    {
      type: "p",
      text: "Many health plans cover a sleep study when a doctor orders it. Some plans require a home test first. Others need prior approval. Costs vary a lot from plan to plan. Call your insurer before your test. Ask about your deductible and whether the test is in network. The Umbrella Health team can help you verify your insurance coverage.",
      links: [{ label: "verify your insurance coverage", href: ROUTES.insurance }],
    },

    {
      type: "h2",
      heading: "Sleep Studies in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, Tribeca and all five boroughs. Sleep medicine works with primary care, cardiology and neurology in one place. That helps if your results point to a wider health issue.",
      links: [
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "cardiology", href: ROUTES.cardiology },
        { label: "neurology", href: ROUTES.neurology },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to find out what's behind your sleep problems?",
      body: `Book an appointment with our NYC sleep specialist. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
      links: [
        {
          label: "Book an appointment with our NYC sleep specialist →",
          href: ROUTES.sleepMedicine,
        },
        { label: "Contact Umbrella Health to book a visit →", href: ROUTES.contactUs },
      ],
    },
    {
      type: "p",
      text: "Not sure you need a test yet? Certain signs show when to see a sleep specialist. New to the practice? Umbrella Health brings primary care and specialists together under one roof.",
      links: [
        {
          label: "when to see a sleep specialist",
          href: BLOG_PATHS.whenToSeeASleepSpecialistNyc,
        },
        { label: "Umbrella Health", href: ROUTES.home },
      ],
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "Should I Buy a Home Sleep Study Test From One of the Online Home Sleep Study Companies?",
          a: "Talk to a doctor first. A home sleep study test works best when a clinician orders it and reviews the results. A doctor can also tell you if an in-lab test suits you better. Ask your plan about coverage before you buy anything.",
        },
        {
          q: "How Accurate Is a Home Sleep Study?",
          a: "A home test works well for finding moderate to severe obstructive sleep apnea. It can miss milder cases. Your doctor may order an in-lab test if results don't match your symptoms.",
        },
        {
          q: "How Long Does the Test Take?",
          a: "Most tests take one night. Some devices record two or three nights. Your doctor tells you how many nights you need.",
        },
        {
          q: "Can I Sleep on My Side During a Home Sleep Test?",
          a: "Yes. Sleep in your usual positions. The test works best when your night looks like a normal night.",
        },
        {
          q: "Do I Need a Doctor's Order for an At-Home Test?",
          a: "Yes, in most cases. A doctor orders the test and reviews the results. That review leads to a diagnosis and a treatment plan.",
        },
        {
          q: "What Happens If My Results Show Sleep Apnea?",
          a: "Your doctor explains how severe it is. Then you go over treatment choices, like CPAP or an oral appliance.",
        },
        {
          q: "Can a Home Test Check for Insomnia?",
          a: "Not really. Doctors usually diagnose insomnia from your history and a sleep diary. The right insomnia treatment in NYC starts with that history.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to test your sleep at home?",
      body: `Book an appointment with our NYC sleep specialist or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        {
          label: "Book an appointment with our NYC sleep specialist →",
          href: ROUTES.sleepMedicine,
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
