import { ROUTES } from "@/data/site-architecture";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_NEUROLOGIC_DISEASES_URL = "https://medlineplus.gov/neurologicdiseases.html";

export const whenToSeeANeurologistNycPost: BlogPost = {
  slug: BLOG_SLUGS.whenToSeeANeurologistNyc,
  title: "Which Signs Tell You When to See a Neurologist in NYC?",
  subtitle:
    "Learn the warning signs, what happens at a first visit, and how to book a neurologist in Lower Manhattan.",
  excerpt:
    "Not sure when to see a neurologist? Learn the warning signs, what happens at a first visit and how to book a neurologist in Lower Manhattan, NYC.",
  seoTitle: "How Do You Know When to See a Neurologist in NYC?",
  metaDescription:
    "Not sure when to see a neurologist? Learn the warning signs, what happens at a first visit and how to book a neurologist in Lower Manhattan, NYC.",
  focusKeyword: "when to see a neurologist",
  category: "Neurology",
  readTime: "11 min read",
  publishedAt: "2026-10-21",
  image: BLOG_IMAGES.whenToSeeANeurologistNyc,
  imageAlt:
    "Patient asking a doctor when to see a neurologist at Umbrella Health in Lower Manhattan NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Knowing when to see a neurologist starts with one question. Is the symptom new, getting worse, or getting in the way of your life? Headaches that change pattern, numbness that lingers, shaking hands, memory changes and dizzy spells all fit. Your primary care doctor can start the workup. A neurologist then takes a closer look at your brain, spine, nerves and muscles. Sudden symptoms are a different story. Call 911 for those.",
      links: [{ label: "primary care doctor", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "Most people wait too long. They blame stress, age or a rough week. Sometimes that's right. But some signs deserve a closer look.",
    },
    {
      type: "p",
      text: "This guide walks you through them in plain words. It also covers your first visit and how to get care in Lower Manhattan.",
    },
    {
      type: "cta",
      prompt: "Already know you want a specialist?",
      label: "Explore Neurology at Umbrella Health →",
      href: ROUTES.neurology,
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
      heading: "What Does a Neurologist Do?",
      subtitle: "Brain, spine, nerves and muscles — evaluated without surgery in most cases.",
    },
    {
      type: "p",
      text: "A neurologist is a doctor who treats the nervous system. That means your brain, spinal cord, nerves and muscles. MedlinePlus notes there are more than 600 neurologic diseases. They range from migraine and epilepsy to stroke, Parkinson's disease and Alzheimer's disease.",
      links: [{ label: "MedlinePlus", href: MEDLINEPLUS_NEUROLOGIC_DISEASES_URL }],
    },
    {
      type: "p",
      text: "A neurologist doesn't usually operate. Instead, they listen to your story, examine you and order the right tests. Then they build a plan with you. They also keep your primary care doctor in the loop.",
    },
    {
      type: "diagram",
      variant: "care-path",
      alt: "Care path from patient concerns through primary care to neurology follow-up",
      steps: [
        "Notice a new or changing symptom",
        "Primary care evaluation",
        "Neurology visit when needed",
        "Testing and care plan",
        "Follow-up with your team",
      ],
    },

    {
      type: "h2",
      heading: "When to See a Neurologist: Signs It May Be Time",
      subtitle: "You don't need a perfect description — you need a pattern.",
    },
    {
      type: "p",
      text: "You don't need a perfect description of your symptom. You just need to notice a pattern. Here are the signs that most often send people to a neurologist.",
    },

    {
      type: "h3",
      heading: "Headaches That Change or Won't Let Up",
    },
    {
      type: "p",
      text: "Most headaches aren't dangerous. Still, a change matters. Think new headaches that feel different, headaches that wake you up, or pain that keeps getting worse. Daily painkiller use is another clue.",
    },
    {
      type: "p",
      text: "Certain warning signs show when a headache needs a doctor. If you live with migraine, a neurologist for migraines in NYC can help you build a plan.",
      links: [
        {
          label: "when a headache needs a doctor",
          href: BLOG_PATHS.headacheWhenToSeeDoctor,
        },
      ],
    },

    {
      type: "h3",
      heading: "Numbness, Tingling or Weakness",
    },
    {
      type: "p",
      text: "Pins and needles after sitting on your foot are normal. Numbness and tingling that last for weeks aren't. Tingling in your hands or feet can point to a nerve problem. A weak grip or a foot that drags also deserves a check.",
    },

    {
      type: "h3",
      heading: "Shaking or Tremors",
    },
    {
      type: "p",
      text: "A shaky hand can come from coffee, stress or a medicine. It can also come from essential tremor or Parkinson's disease. If the shaking sticks around or makes writing and eating hard, book a visit. A visit with a neurologist for tremors starts with a careful exam.",
    },

    {
      type: "h3",
      heading: "Memory Changes or Brain Fog",
    },
    {
      type: "p",
      text: "Everyone forgets a name now and then. It's different when you lose your way on a familiar route or repeat the same question. Family members often notice first.",
    },
    {
      type: "p",
      text: "Changes like these are a good reason to see a neurologist for memory loss. Trouble focusing can also be a reason to see a neurologist for brain fog.",
    },

    {
      type: "h3",
      heading: "Dizziness or Balance Problems",
    },
    {
      type: "p",
      text: "Feeling off balance on the subway stairs is scary. Many causes live in the inner ear. Others involve the brain or nerves. Repeated spells or falls are a good reason to book a check.",
    },

    {
      type: "h3",
      heading: "Seizures or Spells You Can't Explain",
    },
    {
      type: "p",
      text: "Staring spells, sudden jerks or lost time all need a medical review. A neurologist can look at your brain's electrical activity with an EEG.",
    },

    {
      type: "h3",
      heading: "Sleep Problems With a Neurological Link",
    },
    {
      type: "p",
      text: "Some sleep problems tie back to the nervous system. Restless legs and acting out dreams are two examples. Our sleep medicine team works with neurology on these cases.",
      links: [{ label: "sleep medicine team", href: ROUTES.sleepMedicine }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.neurologistSignsChecklist,
      alt: "Checklist of signs that show when to see a neurologist in NYC",
      caption: "Common signs that may mean it's time to see a neurologist.",
    },

    {
      type: "h2",
      heading: "When It's an Emergency, Not an Appointment",
      subtitle: "Some symptoms can't wait for a booking — call 911.",
    },
    {
      type: "p",
      text: "Some symptoms can't wait for a booking. Call 911 right away if you or someone near you has:",
    },
    {
      type: "ul",
      items: [
        "A drooping face or a lopsided smile",
        "Sudden weakness or numbness on one side of the body",
        "Slurred speech or sudden confusion",
        "Sudden vision loss in one or both eyes",
        "Sudden loss of balance",
        "The worst headache of your life",
        "A first seizure",
      ],
    },
    {
      type: "p",
      text: "Don't drive yourself. Note the time the symptoms started. That detail helps the ER team.",
    },

    {
      type: "h2",
      heading: "Do You Need a Referral to See a Neurologist in NYC?",
    },
    {
      type: "p",
      text: "It depends on your health plan. Some plans let you book a specialist directly. Others want a referral from your primary care doctor first. Call the number on your insurance card to check. You can also find out whether you need a referral in NYC before you book.",
      links: [
        {
          label: "whether you need a referral in NYC",
          href: BLOG_PATHS.referralNyc,
        },
      ],
    },
    {
      type: "diagram",
      variant: "process",
      alt: "How a neurology referral works from primary care to specialist visit",
      steps: [
        "Primary care visit",
        "Referral when your plan requires it",
        "Neurology evaluation and follow-up",
      ],
    },

    {
      type: "h2",
      heading: "What Happens at Your First Neurology Visit?",
      subtitle: "Mostly a conversation, a careful exam, and a clear next step.",
    },
    {
      type: "p",
      text: "Your first visit is mostly a conversation and an exam. The neurologist asks when the symptom started, how often it happens and what makes it better or worse. Then comes the neurological exam. Your doctor checks:",
    },
    {
      type: "ul",
      items: [
        "Reflexes and muscle strength",
        "Balance, walking and coordination",
        "Feeling in your hands and feet",
        "Eye movements and speech",
        "Memory and thinking",
      ],
    },
    {
      type: "process",
      alt: "First neurology visit path at Umbrella Health",
      steps: ["History and exam", "Targeted testing when needed", "Personalized care plan"],
    },
    {
      type: "p",
      text: "Tests may follow. Neurology care at Umbrella Health includes EEG testing and EMG with nerve conduction studies. It also includes memory and cognitive assessment. The team can help arrange MRI or CT scans too. Other tests can run through our diagnostic testing services.",
      links: [
        { label: "Neurology care at Umbrella Health", href: ROUTES.neurology },
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
      ],
    },

    {
      type: "h2",
      heading: "How to Prepare for a Neurology Appointment",
    },
    {
      type: "p",
      text: "A little prep makes the visit more useful.",
    },
    {
      type: "ul",
      items: [
        "Write down your symptoms and when they started.",
        "Keep a short diary of episodes for a week or two.",
        "Bring a list of every medicine and supplement you take.",
        "Bring past test results or scan reports.",
        "Bring a friend or family member if memory is part of the concern.",
        "Write your top three questions on your phone.",
      ],
    },

    {
      type: "h2",
      heading: "Primary Care or Neurologist: Who Should You Call First?",
    },
    {
      type: "p",
      text: "For many people, primary care is the best first stop. Your primary care doctor knows your history. They can run basic blood work and rule out common causes like thyroid problems or low vitamin B12. Then they can send you to neurology if you need it.",
      links: [{ label: "primary care doctor", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "Go straight to a neurologist when you already know the problem is neurological. Examples include a known migraine history that changed, or a tremor that keeps getting worse.",
    },
    {
      type: "table",
      headers: ["Situation", "Usually start here"],
      rows: [
        ["New mild symptoms, unclear cause", "Primary care — history, exam and basic labs first"],
        [
          "Known neurological issue that changed",
          "Neurology — or ask primary care for a same-practice referral",
        ],
        [
          "Sudden face droop, weakness, speech or vision loss",
          "Call 911 — emergency care, not a routine booking",
        ],
      ],
      note: "Your insurance plan may require a referral before a specialty visit.",
    },

    {
      type: "h2",
      heading: "Seeing a Neurologist in Lower Manhattan",
      subtitle: "Primary care and neurology under one roof near Union Square.",
    },
    {
      type: "p",
      text: "Umbrella Health sits at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, SoHo, the East Village and across all five boroughs. Neurology shares a roof with primary care, cardiology, sleep medicine and pain management. That makes it easier for your doctors to talk to each other.",
      links: [
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "cardiology", href: ROUTES.cardiology },
        { label: "sleep medicine", href: ROUTES.sleepMedicine },
        { label: "pain management", href: ROUTES.painManagement },
      ],
    },
    {
      type: "p",
      text: "The practice offers same-day appointments when possible for new neurological symptoms.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic interior for neurology and primary care in Lower Manhattan NYC",
      caption: "Umbrella Health at 32 West 14th Street, Lower Manhattan.",
    },
    {
      type: "ctaBox",
      title: "Ready to get answers?",
      body: `Book through our NYC neurologist page, contact Umbrella Health, or call ${SITE_PHONE}.`,
      links: [
        { label: "NYC Neurologist →", href: ROUTES.neurology },
        { label: "Contact Us →", href: ROUTES.contactUs },
      ],
    },
    {
      type: "p",
      text: "New to the practice? Umbrella Health brings primary care and specialists together under one roof.",
      links: [{ label: "Umbrella Health", href: ROUTES.home }],
    },

    {
      type: "h2",
      heading: "Signs You Need a Neurologist vs. Signs You Can Watch and Wait",
    },
    {
      type: "p",
      text: "Not every odd feeling needs a specialist. Here's a quick way to sort them.",
    },
    {
      type: "table",
      headers: ["Usually fine to watch a few days", "See a neurologist sooner"],
      rows: [
        ["Mild headache after a short night of sleep", "The same symptom keeps coming back"],
        ["Brief tingle after sitting in one position too long", "It gets a little worse each week"],
        ["Shaky hand after three cups of coffee", "It shows up on one side of your body"],
        [
          "Forgetting a name, then remembering it later",
          "Friends or family notice a change in you",
        ],
        [
          "Symptoms that clear quickly and don't return",
          "It stops you from working, driving or sleeping",
        ],
      ],
      note: "If something feels off for more than a couple of weeks, book a visit. Trust your gut — you know your body best.",
    },

    {
      type: "h2",
      heading: "Finding a Neurologist Near Me in NYC",
    },
    {
      type: "p",
      text: 'Searching "neurologist near me NYC" brings up a long list. Narrow it down with a few questions:',
    },
    {
      type: "ul",
      items: [
        "Does the practice treat your type of symptom?",
        "Can they run tests like EEG or EMG on site?",
        "Do they work with your primary care doctor?",
        "Is the office easy to reach by subway or bus?",
        "Can you get an appointment soon?",
      ],
    },
    {
      type: "p",
      text: "A practice with several specialties under one roof can save you trips across town. That matters when you juggle work, family and the commute. A good neurologist in NYC also explains things in plain words.",
      links: [{ label: "neurologist in NYC", href: ROUTES.neurology }],
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about when to see a neurologist, warning signs, referrals, and emergencies.",
      items: [
        {
          q: "When Should You See a Neurologist Instead of Waiting?",
          a: "See a neurologist when symptoms are new, keep coming back or get worse. Numbness, weakness, tremors, memory changes and frequent headaches are common reasons. Your primary care doctor can help you decide. Sudden symptoms need 911, not an appointment.",
        },
        {
          q: "What Are the Signs You Need to See a Neurologist?",
          a: "The most common reasons are new or worsening headaches and lasting numbness or tingling. Tremors, memory changes, balance problems and unexplained spells count too. If a symptom affects your work or daily life, that's another good reason.",
        },
        {
          q: "Is It Worth Seeing a Neurologist for Headaches?",
          a: "Yes, if your headaches change pattern, wake you up, need daily painkillers or come with vision changes or weakness. Many people start with primary care and move to neurology if needed.",
        },
        {
          q: "Can a Neurologist Help With Numbness in My Hands?",
          a: "Yes. A neurologist can examine your nerves and may order an EMG or nerve conduction study. These tests help show where a nerve problem sits.",
        },
        {
          q: "Do I Need a Referral for a Neurologist?",
          a: "It depends on your plan. Some plans let you book directly. Others ask for a referral from primary care first. Call your insurer to check.",
        },
        {
          q: "How Long Does a First Neurology Appointment Take?",
          a: "It varies. Plan for a longer visit than a routine checkup, since the exam has many parts. Ask the office when you book.",
        },
        {
          q: "When Should I Go to the ER Instead?",
          a: "Call 911 for sudden weakness on one side or slurred speech. The same goes for sudden vision loss, the worst headache of your life or a first seizure.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Get Your Symptoms Checked",
    },
    {
      type: "p",
      text: `Have a symptom that won't go away? Book an appointment with our NYC neurologist or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        {
          label: "Book an appointment with our NYC neurologist",
          href: ROUTES.neurology,
        },
      ],
    },
    {
      type: "p",
      text: `You can also email ${SITE_EMAIL} or use the contact page.`,
      links: [{ label: "contact page", href: ROUTES.contactUs }],
    },
    {
      type: "ctaBox",
      title: "Ready to see a neurologist in Lower Manhattan?",
      body: "Explore Neurology at Umbrella Health, or send a general enquiry through our contact page.",
      links: [
        { label: "Explore Neurology →", href: ROUTES.neurology },
        { label: "Contact Us →", href: ROUTES.contactUs },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
