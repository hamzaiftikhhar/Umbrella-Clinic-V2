import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NINDS_PAIN_URL = "https://www.ninds.nih.gov/health-information/disorders/pain";

export const whatDoPainManagementDoctorsDoPost: BlogPost = {
  slug: BLOG_SLUGS.whatDoPainManagementDoctorsDo,
  title: "What Do Pain Management Doctors Do, and When Should You See One in NYC?",
  subtitle:
    "Learn how pain doctors evaluate your pain, which treatments they use and how to find pain management care in Lower Manhattan.",
  excerpt:
    "What do pain management doctors do, and when should you see one? Learn about evaluations, treatments, injections and medicines, plus care in NYC.",
  seoTitle: "What Do Pain Management Doctors Do for NYC Patients?",
  metaDescription:
    "What do pain management doctors do, and when should you see one? Learn about evaluations, treatments, injections and medicines, plus care in NYC.",
  focusKeyword: "what do pain management doctors do",
  category: "Pain Management",
  readTime: "11 min read",
  publishedAt: "2026-11-23",
  image: BLOG_IMAGES.whatDoPainManagementDoctorsDo,
  imageAlt: "Adult with back pain wondering what pain management doctors do",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Quick answer: So, what do pain management doctors do? They find the source of ongoing pain and build a plan to ease it. That plan aims to help you move, sleep and work better. Treatment often mixes physical therapy, medicines, lifestyle changes and, for some people, targeted injections or nerve procedures. Pain specialists treat back and neck pain, sciatica, nerve pain, joint pain and more. Sudden severe pain, new weakness or loss of bladder or bowel control is an emergency. Call 911 or go to the ER.",
    },
    {
      type: "p",
      text: "Pain wears you down. It makes the walk to the subway harder. It wakes you at night. It makes you short with the people you love. Many people bounce between doctors and still don't have answers. A pain management doctor focuses on exactly that problem. This guide explains what they do, what a visit looks like and when it makes sense to book one. Our team offers pain management in NYC.",
      links: [{ label: "pain management in NYC", href: ROUTES.painManagement }],
    },
    {
      type: "cta",
      prompt: "Tired of living with pain?",
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
      heading: "What is a pain management doctor?",
    },
    {
      type: "p",
      text: "A pain management doctor, or pain specialist, is a physician with extra training in treating pain. Many trained first in anesthesiology, physical medicine and rehabilitation, neurology or family medicine. Then they completed a pain medicine fellowship.",
    },
    {
      type: "p",
      text: "Pain specialists focus on:",
    },
    {
      type: "ul",
      items: [
        "Finding where the pain comes from",
        "Measuring how much it affects your life",
        "Treating the pain with more than one tool",
        "Helping you return to the things you enjoy",
      ],
    },
    {
      type: "p",
      text: "The National Institute of Neurological Disorders and Stroke says pain management aims for better function and quality of life. It notes that pain lasting more than three months counts as chronic pain. It also says that not all pain is curable, but doctors can manage all pain.",
      links: [
        {
          label: "National Institute of Neurological Disorders and Stroke",
          href: NINDS_PAIN_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "What conditions do pain specialists treat?",
    },
    {
      type: "p",
      text: "Pain specialists see a wide range of problems. Pain management at Umbrella Health covers many of them, including:",
      links: [{ label: "Pain management at Umbrella Health", href: ROUTES.painManagement }],
    },
    {
      type: "ul",
      items: [
        "Chronic and acute back pain",
        "Neck pain",
        "Sciatica and pinched nerves",
        "Herniated disc pain and spinal stenosis",
        "Arthritis and joint pain in the knees, hips and shoulders",
        "Nerve pain and peripheral neuropathy",
        "Myofascial pain and fibromyalgia pain",
        "Complex regional pain syndrome",
        "Pain after surgery",
      ],
    },
    {
      type: "p",
      text: "Leg pain that shoots below the knee is a common reason for a visit. The right sciatica treatment in NYC depends on the cause.",
      links: [{ label: "sciatica treatment in NYC", href: BLOG_PATHS.sciaticaTreatmentNyc }],
    },

    {
      type: "h2",
      heading: "What happens at a pain management appointment?",
    },
    {
      type: "p",
      text: "Your first visit focuses on understanding your pain. Expect questions like these:",
    },
    {
      type: "ul",
      items: [
        "Where does it hurt?",
        "How long have you had it?",
        "What makes it better or worse?",
        "Does the pain travel to another area?",
        "Do you have numbness, tingling or weakness?",
        "What treatments have you tried, and did they help?",
        "How does pain affect your sleep, work and mood?",
      ],
    },
    {
      type: "p",
      text: "Next comes an exam. Your doctor checks how you move, your strength, your reflexes and where it hurts when they press.",
    },
    {
      type: "h3",
      heading: "Tests that may follow",
    },
    {
      type: "ul",
      items: [
        "X-rays, MRI or CT scans to look at bones, discs and nerves",
        "Blood tests to check for inflammation or other causes",
        "Nerve tests like EMG when nerve damage seems likely",
      ],
    },
    {
      type: "p",
      text: "Our diagnostic testing services offer a wide range of tests.",
      links: [{ label: "diagnostic testing services", href: ROUTES.diagnostics }],
    },
    {
      type: "h3",
      heading: "How to prepare",
    },
    {
      type: "ul",
      items: [
        "Make a pain diary for a week or two.",
        "List all medicines and supplements, with doses.",
        "Bring imaging reports and past treatment records.",
        'Write down your top goals. Think "walk to work" or "sleep through the night."',
      ],
    },

    {
      type: "image",
      src: BLOG_IMAGES.painManagementPlanDiagram,
      alt: "Diagram showing what pain management doctors do to build a treatment plan",
    },

    {
      type: "h2",
      heading: "What do pain management doctors do to treat pain?",
    },
    {
      type: "p",
      text: "Good pain care rarely relies on one thing. Your plan may mix several of these.",
    },
    {
      type: "h3",
      heading: "Physical therapy and movement",
    },
    {
      type: "p",
      text: "Exercise builds strength and flexibility. It also calms the nervous system over time. Your doctor may refer you to a physical therapist.",
    },
    {
      type: "h3",
      heading: "Medicines",
    },
    {
      type: "p",
      text: "Options include anti-inflammatory medicines, nerve pain medicines, muscle relaxants and creams or patches. Your doctor matches medicines to the type of pain you have.",
    },
    {
      type: "h3",
      heading: "Injections and procedures",
    },
    {
      type: "p",
      text: "Interventional pain specialists use targeted treatments for specific pain sources. Examples include:",
    },
    {
      type: "ul",
      items: [
        "Epidural steroid injections for pinched nerves",
        "Joint injections",
        "Trigger point injections for tight muscle knots",
        "Nerve blocks",
        "Radiofrequency ablation, which uses heat to quiet a pain-signaling nerve",
      ],
    },
    {
      type: "p",
      text: "An epidural shot for back pain is one common option.",
      links: [
        { label: "epidural shot for back pain", href: BLOG_PATHS.epiduralShotForBackPainNyc },
      ],
    },
    {
      type: "h3",
      heading: "Mind and body care",
    },
    {
      type: "p",
      text: "Pain affects mood, and mood affects pain. Talk therapy, relaxation skills and better sleep can all lower pain levels. Sleep problems often travel with chronic pain. Our sleep medicine team can help.",
      links: [{ label: "sleep medicine team", href: ROUTES.sleepMedicine }],
    },
    {
      type: "diagram",
      variant: "concept",
      alt: "Pain management treatment options: movement, medicines, procedures, sleep and mental health",
      steps: ["Movement", "Medicines", "Procedures", "Sleep", "Mental health"],
    },

    {
      type: "h2",
      heading: "Do pain management doctors prescribe narcotics?",
    },
    {
      type: "p",
      text: "This is one of the most common questions people ask. Some pain management doctors that prescribe narcotics do so in specific, carefully monitored cases. But opioids are rarely the first choice for long-term pain. They carry real risks, including dependence and overdose. Many chronic pain conditions respond better to other treatments.",
    },
    {
      type: "p",
      text: "If a doctor does prescribe opioids, expect close follow-up. That may include regular visits, a treatment agreement and urine tests. Never share pain medicine or take more than prescribed.",
    },

    {
      type: "h2",
      heading: "What chronic pain management looks like over time",
    },
    {
      type: "p",
      text: "Chronic pain management is a process, not a single visit. Your first plan is a starting point. Your doctor checks in, tracks your progress and adjusts.",
    },
    {
      type: "p",
      text: "A typical path looks like this:",
    },
    {
      type: "ul",
      items: [
        "First visit. History, exam and a clear plan.",
        "Early weeks. You start therapy, try a medicine or book a procedure.",
        "Follow-up. You compare your pain diary to your goals.",
        "Adjust. Your doctor adds, drops or changes treatments.",
        "Long term. Visits space out as you gain control.",
      ],
    },
    {
      type: "p",
      text: "Progress often comes in small steps. You walk one more block. You sleep an extra hour. You go back to the gym. Those wins count. Tell your doctor about them, and about setbacks too.",
    },

    {
      type: "h2",
      heading: "When should you see a pain specialist?",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "Pain lasts more than a few weeks",
        "It keeps you from work, exercise or sleep",
        "It doesn't improve with first-line care",
        "Pain spreads down an arm or leg",
        "You have numbness or tingling with your pain",
        "You want to avoid or delay surgery",
        "Your current pain plan isn't working",
      ],
    },
    {
      type: "p",
      text: "Long-term pain may need chronic back pain treatment. Some plans need a referral first. Find out whether you need a referral in NYC before you book.",
      links: [
        { label: "chronic back pain treatment", href: BLOG_PATHS.chronicBackPainTreatmentNyc },
        { label: "whether you need a referral in NYC", href: BLOG_PATHS.referralNyc },
      ],
    },

    {
      type: "h2",
      heading: "When pain is an emergency",
    },
    {
      type: "p",
      text: "Call 911 or go to the ER right away for:",
    },
    {
      type: "ul",
      items: [
        "New loss of bladder or bowel control",
        "Numbness in the groin or inner thighs",
        "Sudden weakness in a leg or arm",
        "Severe back pain after a fall or accident",
        "Back pain with fever and chills",
        "Chest pain, or pain with trouble breathing",
      ],
    },

    {
      type: "h2",
      heading: "Finding a pain management clinic near me in NYC",
    },
    {
      type: "p",
      text: 'Searching "pain management clinic near me" brings up a long list. Ask a few questions to narrow it down:',
    },
    {
      type: "ul",
      items: [
        "Does the doctor have pain medicine training?",
        "Does the clinic treat your type of pain?",
        "Does it offer more than one kind of treatment?",
        "Does the team work with primary care and other specialists?",
        "Is the office easy to reach by subway?",
        "Does it take your insurance?",
      ],
    },
    {
      type: "p",
      text: "Pick a clinic that explains your diagnosis clearly. The best pain management care in NYC puts your goals first.",
    },

    {
      type: "h2",
      heading: "Pain management in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, the East Village and all five boroughs. Pain management works alongside primary care, neurology and sleep medicine in one place. That helps when pain has more than one cause.",
      links: [{ label: "primary care", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: `Ready to talk about your pain? Book an appointment with our NYC pain management doctor. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
      links: [
        {
          label: "Book an appointment with our NYC pain management doctor",
          href: ROUTES.painManagement,
        },
        { label: "contact Umbrella Health to book a visit", href: ROUTES.contactUs },
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
          q: "What do pain management doctors do for you over time?",
          a: "They track how you feel and how well you move. They adjust the plan when something stops working. They also work with your other doctors, so your care stays connected.",
        },
        {
          q: "What do pain management doctors do for back pain?",
          a: "They look for the source first. That may mean an exam, a review of imaging and questions about your daily life. Then they may suggest physical therapy, medicines, injections or other options. The plan depends on the cause.",
        },
        {
          q: "What does a pain management doctor do on the first visit?",
          a: "They review your history, ask about your pain and examine you. They may order tests. Then they explain your options and build a plan.",
        },
        {
          q: "Is a pain management doctor the same as an anesthesiologist?",
          a: "Not always. Many pain doctors trained in anesthesiology first. Others trained in rehabilitation medicine, neurology or family medicine.",
        },
        {
          q: "Do I need a referral to see a pain specialist?",
          a: "It depends on your insurance plan. Some plans let you book directly. Others want a referral from primary care. Call your insurer to check.",
        },
        {
          q: "What is interventional pain management?",
          a: "It uses targeted procedures like injections and nerve treatments. They aim at the specific source of your pain.",
        },
        {
          q: "Will a pain doctor just give me pills?",
          a: "No. Most plans mix movement, therapy, lifestyle changes and sometimes procedures. Medicines are only one part.",
        },
        {
          q: "When should I see a pain doctor instead of primary care?",
          a: "See a pain doctor when pain lasts, limits your life or doesn't improve with first-line care. Primary care is often a good first stop.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to take the next step for your pain?",
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
