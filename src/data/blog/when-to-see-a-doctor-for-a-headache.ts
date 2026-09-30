import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_HEADACHE_URL = "https://medlineplus.gov/headache.html";
const MEDLINEPLUS_MIGRAINE_URL = "https://medlineplus.gov/migraine.html";
const NINDS_HEADACHE_URL = "https://www.ninds.nih.gov/health-information/disorders/headache";
const CDC_STROKE_SIGNS_URL = "https://www.cdc.gov/stroke/signs-symptoms/index.html";

export const headacheWhenToSeeDoctorPost: BlogPost = {
  slug: BLOG_SLUGS.headacheWhenToSeeDoctor,
  title: "When Should a Headache Be Evaluated by a Primary Care Doctor?",
  subtitle:
    "Learn headache warning signs, what a primary care evaluation includes, when neurology helps, and when to go to the ER.",
  excerpt:
    "When to see a doctor for a headache: learn warning signs, what a primary care doctor checks and when neurology helps. Book a visit at Umbrella Health in NYC.",
  seoTitle: "When to See a Doctor for a Headache | Umbrella Health NYC",
  metaDescription:
    "When to see a doctor for a headache: learn warning signs, what a primary care doctor checks and when neurology helps. Book a visit at Umbrella Health in NYC.",
  focusKeyword: "when to see a doctor for a headache",
  category: "Primary Care",
  readTime: "12 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.headacheWhenToSeeDoctor,
  imageAlt: "Person with a tension headache at work considering a primary care visit",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: 'See a primary care doctor if your headaches are new, happening more often, changing in pattern, getting in the way of daily life, or need pain relievers frequently. Your doctor can review your history, check your blood pressure and do an exam, and refer you to a neurologist if needed. Call 911 or go to the ER for a sudden, severe "worst ever" headache, or a headache with confusion, weakness, numbness, trouble speaking or seeing, fever with a stiff neck, or after a head injury.',
    },
    {
      type: "p",
      text: "Most headaches are not dangerous, but they can still take a real toll on work, sleep and mood. Knowing when to get help, and where, makes a difference. A primary care doctor in NYC is often the right first step.",
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Headaches getting in the way of daily life?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "Common Types of Headache",
    },
    {
      type: "p",
      text: "According to MedlinePlus and the National Institute of Neurological Disorders and Stroke (NINDS), headaches are broadly grouped as primary (the headache itself is the condition) or secondary (caused by another problem).",
      links: [
        { label: "MedlinePlus", href: MEDLINEPLUS_HEADACHE_URL },
        {
          label: "National Institute of Neurological Disorders and Stroke (NINDS)",
          href: NINDS_HEADACHE_URL,
        },
      ],
    },
    {
      type: "p",
      text: "Common primary headaches include:",
    },
    {
      type: "ul",
      items: [
        "Tension-type headache: often a band-like pressure around the head, sometimes linked to stress, posture or poor sleep.",
        'Migraine: often a throbbing headache, sometimes with nausea or sensitivity to light and sound, and sometimes with an "aura" such as visual changes.',
        "Cluster headache: severe pain around one eye that comes in cycles.",
      ],
    },
    {
      type: "p",
      text: "MedlinePlus has more on migraine. Secondary headaches can be linked to things like sinus infections, high blood pressure in some situations, medication overuse, sleep problems, dehydration or, rarely, serious conditions that need urgent care.",
      links: [{ label: "MedlinePlus has more on migraine", href: MEDLINEPLUS_MIGRAINE_URL }],
    },

    {
      type: "h2",
      heading: "When Should You See a Primary Care Doctor About a Headache?",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "You have a new type of headache, especially if you are over 50",
        "Your headaches are becoming more frequent or more severe",
        "The pattern has changed from what is usual for you",
        "Headaches wake you up or are worse in the morning",
        "You are taking over-the-counter pain relievers often to get through the week",
        "Headaches are affecting work, sleep or mood",
        "You have other conditions, such as high blood pressure, or take medicines that could play a role",
      ],
    },
    {
      type: "p",
      text: 'Frequent use of pain relievers can sometimes contribute to more headaches (often called medication-overuse or "rebound" headache), so it is worth talking with a doctor rather than just taking more.',
    },

    {
      type: "h2",
      heading: "Headache Warning Signs That Need Emergency Care",
    },
    {
      type: "p",
      text: "Call 911 or go to the nearest emergency department if a headache:",
    },
    {
      type: "ul",
      items: [
        'Comes on suddenly and severely, like a "thunderclap" or the worst headache of your life',
        "Comes with weakness, numbness, face drooping, confusion, trouble speaking or vision loss",
        "Comes with fever and a stiff neck, a rash, or feeling very unwell",
        "Follows a head injury or fall",
        "Comes with fainting or a seizure",
        "Is new and severe during pregnancy or after giving birth",
      ],
    },
    {
      type: "p",
      text: "The CDC lists a sudden severe headache with no known cause as one sign of stroke. Do not wait for a routine appointment. For help deciding between settings, see should I see a primary care doctor or go to urgent care.",
      links: [
        {
          label: "CDC lists a sudden severe headache with no known cause as one sign of stroke",
          href: CDC_STROKE_SIGNS_URL,
        },
        {
          label: "should I see a primary care doctor or go to urgent care",
          href: BLOG_PATHS.primaryCareOrUrgentCare,
        },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.headacheDiary,
      alt: "Headache diary used to track patterns before a primary care or neurology visit",
    },
    {
      type: "cta",
      prompt: "Headaches getting in the way of daily life?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `Call ${SITE_PHONE}. Same-day sick visits may be available; see same-day sick visits in Lower Manhattan.`,
      links: [
        {
          label: "same-day sick visits in Lower Manhattan",
          href: BLOG_PATHS.sameDaySickVisits,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Happens at a Headache Evaluation?",
    },
    {
      type: "p",
      text: "A primary care doctor usually starts with a careful conversation. Expect questions about:",
    },
    {
      type: "ul",
      items: [
        "When the headaches started and how often they happen",
        "Where the pain is and what it feels like",
        "Triggers such as sleep, food, alcohol, caffeine, screens or stress",
        "Other symptoms, like nausea, visual changes or numbness",
        "Medicines and supplements, including how often you take pain relievers",
        "Family history of migraine or other conditions",
      ],
    },
    {
      type: "p",
      text: "Your doctor may check your blood pressure and do a physical and basic neurological exam. Many headaches can be diagnosed from the history and exam alone. Tests such as blood work or imaging are not needed for every headache, but your doctor may order them if something in your history or exam calls for it. If blood pressure is a concern, see our guide to primary care for high blood pressure.",
      links: [
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
      ],
    },

    {
      type: "h3",
      heading: "Keep a Headache Diary",
    },
    {
      type: "p",
      text: "Before your visit, try tracking your headaches for a couple of weeks: date, time, how long they lasted, severity, possible triggers, what you took and whether it helped. It can make the visit much more productive.",
    },

    {
      type: "h2",
      heading: "Everyday Habits That May Help",
    },
    {
      type: "p",
      text: "Your doctor can tailor advice to you, but general steps that may help some people with common headaches include:",
    },
    {
      type: "ul",
      items: [
        "Keeping regular sleep and meal times",
        "Drinking enough water through the day",
        "Being consistent with caffeine rather than having large swings",
        "Taking breaks from screens and checking your workstation posture",
        "Regular physical activity, as your health allows",
        "Noticing and reducing personal triggers you spot in your diary",
      ],
    },
    {
      type: "p",
      text: "These habits are not a substitute for an evaluation if your headaches are new, changing or severe.",
    },

    {
      type: "h2",
      heading: "When a Neurologist May Help",
    },
    {
      type: "p",
      text: "Your primary care doctor may refer you to a neurologist if headaches are frequent or hard to control, if the diagnosis is unclear, or if the exam or history suggests something that needs specialist input. Umbrella Health offers Neurology in the same practice, and its diagnostic testing page lists headache evaluation and migraine assessment among its neurological evaluations. Our guide to whether you need a referral to see a specialist in NYC explains how referrals work with different plans.",
      links: [
        { label: "Neurology", href: ROUTES.neurology },
        { label: "diagnostic testing page", href: ROUTES.diagnostics },
        {
          label: "whether you need a referral to see a specialist in NYC",
          href: BLOG_PATHS.referralNyc,
        },
      ],
    },
    {
      type: "p",
      text: "Headaches can also be linked to other issues. Morning headaches with loud snoring or daytime sleepiness may be worth discussing in relation to Sleep Medicine, and headaches connected to neck pain may sometimes lead to evaluation by Interventional Pain Management. Ask the office which related services are available if specialty care is recommended.",
      links: [
        { label: "Sleep Medicine", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management", href: ROUTES.painManagement },
      ],
    },

    {
      type: "h2",
      heading: "Headache Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. Primary care and neurology in one practice can make it easier to move from first evaluation to specialist care when needed.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for primary care headache evaluation in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about when to see a doctor for a headache, neurology referrals, and emergency warning signs.",
      items: [
        {
          q: "Should I See a Primary Care Doctor or a Neurologist for Headaches?",
          a: "Many people start with primary care, which can diagnose and manage common headaches and refer to a neurologist if needed. Check whether your plan needs a referral.",
        },
        {
          q: "How Do I Know If My Headache Is Serious?",
          a: "A sudden severe headache, or one with neurological symptoms, fever and stiff neck, or after a head injury, needs emergency care. Headaches that are new, worsening or changing should be checked by a doctor soon.",
        },
        {
          q: "Can High Blood Pressure Cause Headaches?",
          a: "High blood pressure usually causes no symptoms. Very high blood pressure can occasionally cause headaches and may be an emergency if other symptoms are present. Have your blood pressure checked regularly.",
        },
        {
          q: "Will I Need a Brain Scan for My Headache?",
          a: "Not usually. Most headaches can be diagnosed from your history and exam. Your doctor will recommend imaging only if there are specific reasons.",
        },
        {
          q: "What Can I Track Before My Appointment?",
          a: "Keep a simple diary of when headaches happen, how long they last, what you were doing, possible triggers and what medicine you took.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Get Your Headaches Checked",
    },
    {
      type: "p",
      text: "If headaches are affecting your life, you don't have to just push through. Visit Umbrella Health's home page, learn about Primary Care NYC, or book online. New to primary care? Start with what primary care is and what a primary care doctor does.",
      links: [
        { label: "Umbrella Health's home page", href: ROUTES.home },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "book online", href: BOOKING_URL },
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    },
    {
      type: "ctaBox",
      title: "Ready to have your headaches evaluated?",
      body: "Book a primary care appointment at Umbrella Health in Lower Manhattan. Neurology is available in the same practice when a specialist referral is appropriate.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Explore Neurology →", href: ROUTES.neurology },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
