import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NINDS_NEUROPATHY_URL =
  "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy";

export const nervePainTreatmentNycPost: BlogPost = {
  slug: BLOG_SLUGS.nervePainTreatmentNyc,
  title: "What Nerve Pain Treatment Helps Peripheral Neuropathy in NYC?",
  subtitle:
    "Learn what causes nerve pain, how doctors test for it and which treatments help in Lower Manhattan.",
  excerpt:
    "Burning, tingling or numb feet? Learn what causes nerve pain and peripheral neuropathy, how nerve pain treatment works and when to get help in NYC.",
  seoTitle: "What Nerve Pain Treatment Helps Neuropathy in NYC?",
  metaDescription:
    "Burning, tingling or numb feet? Learn what causes nerve pain and peripheral neuropathy, how nerve pain treatment works and when to get help in NYC.",
  focusKeyword: "nerve pain treatment",
  category: "Pain Management",
  readTime: "12 min read",
  publishedAt: "2026-11-23",
  image: BLOG_IMAGES.nervePainTreatmentNyc,
  imageAlt: "Adult with burning feet at night looking for nerve pain treatment",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Quick answer: Nerve pain often feels like burning, tingling, stabbing or electric shocks. Peripheral neuropathy is a common cause, and diabetes is the leading cause of neuropathy in the U.S. Nerve pain treatment starts with finding and treating the cause. Doctors may add nerve pain medicines, skin patches, physical therapy and foot care. Some people also benefit from nerve procedures. Sudden numbness or weakness on one side of the body, or trouble speaking, may be a stroke. Call 911.",
    },
    {
      type: "p",
      text: "Your feet burn at night. Your toes feel like they're asleep. Socks feel strange. Or a sharp, zapping pain runs down your arm. Nerve pain feels different from a sore muscle. It can be hard to describe, and it often gets worse at night. This guide explains what causes it, how doctors test for it and which treatments help. Our team offers nerve pain treatment in NYC.",
      links: [{ label: "nerve pain treatment in NYC", href: ROUTES.painManagement }],
    },
    {
      type: "cta",
      prompt: "Burning, tingling or numb feet?",
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
      heading: "What is nerve pain?",
    },
    {
      type: "p",
      text: "Nerve pain, or neuropathic pain, comes from damage or irritation to the nerves themselves. Muscle and joint pain come from tissue injury. Nerve pain comes from nerves that send faulty pain signals.",
    },
    {
      type: "p",
      text: "Common words people use for nerve pain:",
    },
    {
      type: "ul",
      items: [
        "Burning",
        "Tingling or pins and needles",
        "Stabbing or shooting",
        "Electric shocks",
        "Numbness",
        "Pain from light touch, like bedsheets",
      ],
    },

    {
      type: "h2",
      heading: "What is peripheral neuropathy?",
    },
    {
      type: "p",
      text: "Peripheral neuropathy means damage to the nerves outside the brain and spinal cord. It often starts in the feet and moves up. It can later affect the hands. Many people first notice tingling in hands and feet, or numb toes.",
    },
    {
      type: "p",
      text: "The National Institute of Neurological Disorders and Stroke names diabetes as the leading U.S. cause of peripheral neuropathy. It notes that neuropathic pain is often worse at night. It also states that opioids are not recommended for neuropathy pain.",
      links: [
        {
          label: "National Institute of Neurological Disorders and Stroke",
          href: NINDS_NEUROPATHY_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "Common causes of nerve pain",
    },
    {
      type: "ul",
      items: [
        "Diabetes. High blood sugar over time can damage nerves. This is diabetic neuropathy.",
        "Pinched nerves in the spine. A disc or bone spur can press on a nerve root. Sciatica is one example.",
        "Shingles. Pain can last after the rash heals.",
        "Vitamin deficiencies. Low vitamin B12 is a known cause.",
        "Alcohol use. Heavy drinking over time can damage nerves.",
        "Certain medicines. Some chemotherapy drugs can cause neuropathy.",
        "Thyroid and kidney problems.",
        "Autoimmune conditions.",
        "Injury or surgery.",
        "Carpal tunnel syndrome. Pressure on a nerve in the wrist.",
      ],
    },
    {
      type: "p",
      text: "Sometimes doctors can't find a cause. That's called idiopathic neuropathy.",
    },
    {
      type: "p",
      text: "Leg nerve pain from the lower back is common. Sciatica treatment in NYC focuses on this type of pain.",
      links: [{ label: "Sciatica treatment in NYC", href: BLOG_PATHS.sciaticaTreatmentNyc }],
    },

    {
      type: "h2",
      heading: "How doctors test for nerve pain",
    },
    {
      type: "p",
      text: "Your doctor asks about your symptoms, health history and medicines. Then they check strength, reflexes and feeling in your hands and feet.",
    },
    {
      type: "h3",
      heading: "Common tests",
    },
    {
      type: "ul",
      items: [
        "Blood tests for blood sugar, B12, thyroid and kidney function",
        "EMG and nerve conduction studies to measure how well nerves and muscles work",
        "MRI if a pinched nerve in the spine seems likely",
      ],
    },
    {
      type: "p",
      text: "Our neurology team offers EMG and nerve conduction studies. Our diagnostic testing services offer a wide range of tests.",
      links: [
        { label: "neurology team", href: ROUTES.neurology },
        { label: "diagnostic testing services", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.neuropathyFootExam,
      alt: "Clinician testing foot sensation for peripheral neuropathy before nerve pain treatment",
    },

    {
      type: "h2",
      heading: "Nerve pain treatment options",
    },
    {
      type: "h3",
      heading: "Treat the cause",
    },
    {
      type: "p",
      text: "This step matters most. Better blood sugar control can slow diabetic nerve damage. B12 supplements help if levels run low. Treating a pinched nerve can ease leg or arm pain. Regular checkups through primary care for diabetes support that control.",
      links: [{ label: "primary care for diabetes", href: BLOG_PATHS.primaryCareDiabetes }],
    },
    {
      type: "h3",
      heading: "Nerve pain medicines",
    },
    {
      type: "p",
      text: "Regular pain relievers often don't help nerve pain much. Doctors often use other medicine types instead:",
    },
    {
      type: "ul",
      items: [
        "Certain antidepressants that also calm nerve pain",
        "Certain anti-seizure medicines that quiet overactive nerves",
        "Lidocaine patches or creams on the skin",
        "Capsaicin cream or patches",
      ],
    },
    {
      type: "p",
      text: "These medicines can take weeks to work. Your doctor may adjust the dose slowly. Ask about side effects like drowsiness or dizziness.",
    },
    {
      type: "h3",
      heading: "Physical therapy and exercise",
    },
    {
      type: "p",
      text: "Exercise can improve strength and balance. That matters when numb feet raise your fall risk. A physical therapist can help.",
    },
    {
      type: "h3",
      heading: "Nerve procedures",
    },
    {
      type: "p",
      text: "For some people, procedures may help:",
    },
    {
      type: "ul",
      items: [
        "Nerve blocks",
        "Epidural injections for pinched nerve roots",
        "Spinal cord stimulation for some severe, lasting nerve pain",
      ],
    },
    {
      type: "h3",
      heading: "Sleep and mood support",
    },
    {
      type: "p",
      text: "Nerve pain often gets worse at night. Poor sleep makes pain feel stronger. Our sleep medicine team can help if pain keeps you up.",
      links: [{ label: "sleep medicine team", href: ROUTES.sleepMedicine }],
    },

    {
      type: "h2",
      heading: "Living with nerve pain in NYC",
    },
    {
      type: "p",
      text: "City life puts a lot of miles on your feet. A few changes can make each day easier:",
    },
    {
      type: "ul",
      items: [
        "Choose cushioned, roomy shoes for long walks and subway stairs.",
        "Hold the railing on stairs and escalators if your feet feel numb.",
        "Use a night light so you don't trip on the way to the bathroom.",
        "Keep a cool, quiet bedroom to help with night pain.",
        "Track blood sugar closely if you have diabetes.",
        "Limit alcohol, since it can harm nerves.",
        "Ask about a referral to physical therapy for balance training.",
      ],
    },
    {
      type: "p",
      text: "Pain diaries help here too. Write down when pain spikes, what you did that day and how you slept. Patterns often show up within a couple of weeks. Bring the diary to your visit.",
    },

    {
      type: "h2",
      heading: "Foot care tips for neuropathy",
    },
    {
      type: "p",
      text: "Numb feet can hide injuries. Protect them every day.",
    },
    {
      type: "ul",
      items: [
        "Check your feet daily for cuts, blisters or redness.",
        "Wear well-fitting shoes, even at home.",
        "Test bath water with your elbow, not your feet.",
        "Keep your feet clean and dry.",
        "Don't walk barefoot on city sidewalks or beaches.",
        "Tell your doctor about any sore that won't heal.",
      ],
    },

    {
      type: "h2",
      heading: "When to see a doctor for nerve pain",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "Tingling or numbness lasts more than a few days",
        "Burning feet keep you up at night",
        "Numbness spreads up your legs or into your hands",
        "You have diabetes and new foot symptoms",
        "You trip or drop things more often",
        "A foot sore won't heal",
      ],
    },
    {
      type: "p",
      text: "Not sure who to see? Knowing what pain management doctors do can help you decide. A neuropathy doctor, often a neurologist, may also help. Certain signs show when to see a neurologist.",
      links: [
        {
          label: "what pain management doctors do",
          href: BLOG_PATHS.whatDoPainManagementDoctorsDo,
        },
        {
          label: "when to see a neurologist",
          href: BLOG_PATHS.whenToSeeANeurologistNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "When nerve symptoms are an emergency",
    },
    {
      type: "p",
      text: "Call 911 right away for:",
    },
    {
      type: "ul",
      items: [
        "Sudden numbness or weakness on one side of the body",
        "Sudden trouble speaking or understanding speech",
        "Sudden face drooping",
        "Weakness that spreads quickly up both legs",
        "Loss of bladder or bowel control",
        "A foot wound with fever, spreading redness or a bad smell",
      ],
    },

    {
      type: "h2",
      heading: "Nerve pain treatment in NYC, near Union Square",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the West Village and all five boroughs. Pain management, neurology and primary care share one location. That helps when nerve pain has more than one cause.",
    },
    {
      type: "ctaBox",
      title: "Ready for help with nerve pain?",
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
          q: "What nerve pain treatment medicine do doctors use?",
          a: "Doctors may suggest certain medicines that calm nerve signals. Some started as seizure or depression medicines. Regular pain relievers often help less with nerve pain. Your doctor will weigh benefits and side effects with you.",
        },
        {
          q: "What nerve pain treatment at home is safe to try?",
          a: "Check your feet every day. Wear soft, well-fitting shoes. Keep moving with gentle activity. If you have diabetes, follow your blood sugar plan. Tell your doctor about any new numbness or sores.",
        },
        {
          q: "What does nerve pain feel like?",
          a: "It often feels like burning, tingling, stabbing or electric shocks. Some people also feel numb.",
        },
        {
          q: "Can nerve damage heal?",
          a: "Sometimes. Nerves can recover slowly when doctors treat the cause early. Some damage is lasting. Treatment can still ease pain.",
        },
        {
          q: "Why does neuropathy hurt more at night?",
          a: "There are fewer distractions at night, and cool temperatures can play a role. Talk with your doctor if pain keeps you awake.",
        },
        {
          q: "Is peripheral neuropathy always caused by diabetes?",
          a: "No. Diabetes is the most common cause in the U.S. Vitamin deficiencies, alcohol, medicines and other conditions can also cause it.",
        },
        {
          q: "Who treats nerve pain, a neurologist or a pain doctor?",
          a: "Both can help. A neurologist often finds the cause. A pain specialist often helps manage pain that lasts.",
        },
        {
          q: "Do opioids help nerve pain?",
          a: "Opioids are generally not recommended for neuropathy pain. Other medicines and treatments usually work better.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready for relief from nerve pain?",
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
