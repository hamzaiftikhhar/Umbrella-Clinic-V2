import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_SCIATICA_URL = "https://medlineplus.gov/sciatica.html";

export const sciaticaTreatmentNycPost: BlogPost = {
  slug: BLOG_SLUGS.sciaticaTreatmentNyc,
  title: "What Sciatica Treatment Helps, and When Should You See a Specialist in NYC?",
  subtitle:
    "Learn what causes sciatica, which treatments help and when to see a pain specialist in Lower Manhattan.",
  excerpt:
    "Pain shooting from your lower back down your leg? Learn what causes sciatica, what sciatica treatment involves and when to see a pain specialist in NYC.",
  seoTitle: "Which Sciatica Treatment Is Right for You in NYC?",
  metaDescription:
    "Pain shooting from your lower back down your leg? Learn what causes sciatica, what sciatica treatment involves and when to see a pain specialist in NYC.",
  focusKeyword: "sciatica treatment",
  category: "Pain Management",
  readTime: "8 min read",
  publishedAt: "2026-11-23",
  image: BLOG_IMAGES.sciaticaTreatmentNyc,
  imageAlt: "Commuter with sciatic nerve pain looking for sciatica treatment in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Quick answer: Sciatica causes pain, tingling or numbness that runs from the lower back down one leg. A bulging disc or a narrow spinal canal often presses on the nerve. Many cases ease within weeks with gentle movement, short-term pain relief and physical therapy. Sciatica treatment may also include medicines or an epidural steroid injection when pain lasts. Surgery helps a small group of people. Loss of bladder or bowel control, numbness in the groin or new leg weakness is an emergency. Go to the ER.",
    },
    {
      type: "p",
      text: "It starts as a twinge in your lower back. Then a hot, electric pain shoots down the back of your leg. Sitting on the train makes it worse. So does bending to tie your shoes. Sciatica is common, and it can be miserable. The good news is that most people improve. This guide explains the causes, the treatments and when to get help. Our team offers sciatica care in NYC.",
      links: [{ label: "sciatica care in NYC", href: ROUTES.painManagement }],
    },
    {
      type: "cta",
      prompt: "Need relief from sciatica?",
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
      heading: "What is sciatica?",
    },
    {
      type: "p",
      text: "Sciatica isn't a diagnosis on its own. It's a symptom. It means something irritates the sciatic nerve or the nerve roots that form it.",
    },
    {
      type: "p",
      text: "MedlinePlus explains that the sciatic nerve is the largest nerve in the body. It notes that sciatica can cause pain, weakness, numbness or tingling. These symptoms run from the lower back down to the calf, foot or toes. It adds that sciatica usually affects one side, and sometimes goes away on its own.",
      links: [{ label: "MedlinePlus", href: MEDLINEPLUS_SCIATICA_URL }],
    },
    {
      type: "p",
      text: "Doctors often use the word radiculopathy. That means a pinched or irritated nerve root in the spine. Many people simply call it a pinched nerve in lower back.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.sciaticNerveDiagram,
      alt: "Diagram of the sciatic nerve path used to explain sciatica treatment",
    },

    {
      type: "h2",
      heading: "Common causes of sciatica",
    },
    {
      type: "ul",
      items: [
        "Herniated disc. A spinal disc bulges and presses on a nerve root. This is the most common cause.",
        "Spinal stenosis. The spinal canal narrows with age and squeezes the nerves.",
        "Arthritis and bone spurs. Wear and tear can crowd the nerve.",
        "A slipped vertebra. One bone shifts forward over another.",
        "Piriformis syndrome. A tight buttock muscle irritates the nerve.",
        "Injury. A fall or accident can damage the spine or pelvis.",
      ],
    },
    {
      type: "p",
      text: "In some cases, doctors can't find a clear cause.",
    },

    {
      type: "h2",
      heading: "Sciatica symptoms",
    },
    {
      type: "ul",
      items: [
        "Pain that runs from the buttock down the back of the leg",
        "Burning, electric or shooting pain",
        "Numbness or tingling in the leg or foot",
        "Weakness in the leg or foot",
        "Pain that gets worse when you sit, cough or sneeze",
        "Pain on one side only",
      ],
    },

    {
      type: "h2",
      heading: "When sciatica is an emergency",
    },
    {
      type: "p",
      text: "Go to the ER or call 911 right away if you have:",
    },
    {
      type: "ul",
      items: [
        "New loss of bladder or bowel control",
        "Numbness in the groin, buttocks or inner thighs",
        "Sudden or worsening weakness in a leg",
        "Sciatica in both legs at once",
        "Severe pain after a fall or accident",
        "Back pain with fever",
      ],
    },
    {
      type: "p",
      text: "These signs can point to severe nerve pressure. Fast treatment matters.",
    },

    {
      type: "h2",
      heading: "Sciatica treatment options",
    },
    {
      type: "p",
      text: "Most sciatica treatment starts simple. Your plan may build from there.",
    },
    {
      type: "h3",
      heading: "Early self-care",
    },
    {
      type: "ul",
      items: [
        "Keep moving. Gentle walking often helps more than bed rest.",
        "Use heat or ice. Try either for short periods.",
        "Change positions often. Sitting for long stretches can make it worse.",
        "Try over-the-counter pain relief. Ask your doctor or pharmacist which one is safe for you.",
      ],
    },
    {
      type: "h3",
      heading: "Physical therapy",
    },
    {
      type: "p",
      text: "A physical therapist teaches stretches and exercises that ease nerve pressure. They also build core and hip strength. Many people improve within weeks.",
    },
    {
      type: "h3",
      heading: "Medicines",
    },
    {
      type: "p",
      text: "Your doctor may suggest anti-inflammatory medicines, nerve pain medicines or a short course of muscle relaxants. Don't mix medicines without asking first.",
    },
    {
      type: "h3",
      heading: "Epidural steroid injections",
    },
    {
      type: "p",
      text: "An epidural injection places anti-inflammatory medicine near the irritated nerve. It may ease pain enough to help you do physical therapy. An epidural shot for back pain is one option to ask about.",
      links: [
        { label: "epidural shot for back pain", href: BLOG_PATHS.epiduralShotForBackPainNyc },
      ],
    },
    {
      type: "h3",
      heading: "Surgery",
    },
    {
      type: "p",
      text: "Surgery may help if pain stays severe for months, or if weakness gets worse. A spine surgeon can explain the options.",
    },

    {
      type: "h2",
      heading: "Sciatica or something else?",
    },
    {
      type: "p",
      text: "Not all leg pain is sciatica. A few other problems can feel similar:",
    },
    {
      type: "ul",
      items: [
        "Hip arthritis. Pain often sits in the groin or the front of the thigh.",
        "Muscle strain. Pain stays in one spot and doesn't shoot down the leg.",
        "Poor circulation. Leg pain while walking that eases with rest can point to blocked arteries.",
        "Nerve damage from diabetes. This often causes burning in both feet, not one leg.",
      ],
    },
    {
      type: "p",
      text: "That's why an exam matters. Your doctor sorts out the cause before choosing treatment. Burning or tingling in both feet may point to neuropathy. In that case, nerve pain treatment may be the focus.",
      links: [{ label: "nerve pain treatment", href: BLOG_PATHS.nervePainTreatmentNyc }],
    },

    {
      type: "h2",
      heading: "How long does sciatica last?",
    },
    {
      type: "p",
      text: "Many people feel better within a few weeks. Some take a few months. Pain that lasts longer than three months counts as chronic. Long-term pain may need chronic back pain treatment.",
      links: [
        { label: "chronic back pain treatment", href: BLOG_PATHS.chronicBackPainTreatmentNyc },
      ],
    },

    {
      type: "h2",
      heading: "When to see a doctor for sciatica",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "Pain lasts more than a week or two",
        "Pain keeps getting worse",
        "Over-the-counter medicine doesn't help",
        "Pain wakes you at night",
        "You have numbness or tingling that lasts",
        "Sciatica keeps coming back",
      ],
    },
    {
      type: "p",
      text: "Your primary care doctor can start the workup. A pain specialist steps in when pain lasts or needs targeted care. Not sure what a pain specialist does? Knowing what pain management doctors do can help you decide.",
      links: [
        { label: "primary care doctor", href: ROUTES.primaryCare },
        {
          label: "what pain management doctors do",
          href: BLOG_PATHS.whatDoPainManagementDoctorsDo,
        },
      ],
    },

    {
      type: "h2",
      heading: "What happens at a sciatica visit?",
    },
    {
      type: "p",
      text: "Your doctor asks about your pain and checks your back and legs. A common test is the straight leg raise. You lie flat while the doctor lifts your leg. Pain down the leg can point to a pinched nerve.",
    },
    {
      type: "p",
      text: "Your doctor also checks strength, reflexes and feeling in your legs.",
    },

    {
      type: "h2",
      heading: "Do you need an MRI for sciatica?",
    },
    {
      type: "p",
      text: "Not always. Many people improve without imaging. Doctors often order an MRI when pain lasts, symptoms get worse or surgery might come up. They also order one fast if emergency signs show up.",
    },
    {
      type: "p",
      text: "If nerve damage seems possible, a nerve test like EMG may help. Our neurology team offers EMG and nerve conduction studies.",
      links: [{ label: "neurology team", href: ROUTES.neurology }],
    },

    {
      type: "h2",
      heading: "Tips for living with sciatica in the city",
    },
    {
      type: "ul",
      items: [
        "Stand up on the train if sitting hurts.",
        "Use a small pillow behind your lower back at your desk.",
        "Take short walking breaks every hour.",
        "Carry bags in a backpack instead of on one shoulder.",
        "Sleep on your side with a pillow between your knees.",
        "Skip heavy lifting until your doctor says it's OK.",
      ],
    },

    {
      type: "h2",
      heading: "Sciatica treatment in NYC, near Union Square",
    },
    {
      type: "p",
      text: "Looking for sciatica treatment near me in Manhattan? Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the West Village and all five boroughs. Pain management, primary care and neurology share one location.",
    },
    {
      type: "p",
      text: `Ready for relief from sciatic nerve pain? Book an appointment with our NYC pain management doctor. You can also contact Umbrella Health to book a visit or call ${SITE_PHONE} to schedule.`,
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
          q: "What sciatica treatment medicine might a doctor suggest?",
          a: "Doctors often start with over-the-counter pain relievers. Some people need a short course of other medicines. Your doctor will check your health and other medicines first. Don't start a new medicine without asking.",
        },
        {
          q: "What does sciatica treatment at home look like?",
          a: "Gentle walking, short breaks from sitting and heat or ice can help many people. Avoid long bed rest. Call a doctor if pain gets worse, lasts weeks or causes weakness. Loss of bladder or bowel control needs the ER.",
        },
        {
          q: "What is the fastest way to relieve sciatica?",
          a: "There's no instant fix. Gentle movement, heat or ice and short-term pain relief help many people. A doctor can add other options if pain lasts.",
        },
        {
          q: "Should I rest or walk with sciatica?",
          a: "Gentle walking usually helps more than bed rest. Stop if a movement makes pain shoot further down your leg.",
        },
        {
          q: "Can sciatica go away on its own?",
          a: "Yes. Many cases improve within weeks. See a doctor if it lasts, gets worse or comes with weakness.",
        },
        {
          q: "What kind of doctor treats sciatica?",
          a: "Primary care doctors, pain specialists, physical medicine doctors and spine surgeons all treat sciatica. Most people start with primary care.",
        },
        {
          q: "Is a pinched nerve in the lower back the same as sciatica?",
          a: "Often, yes. A pinched nerve root in the lower back is a common cause of sciatica.",
        },
        {
          q: "Does sitting make sciatica worse?",
          a: "For many people, yes. Long periods of sitting can add pressure on the discs. Take breaks to stand and walk.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to move without sciatic pain?",
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
