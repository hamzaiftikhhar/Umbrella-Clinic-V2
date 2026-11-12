import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_INSOMNIA_URL = "https://www.nhlbi.nih.gov/health/insomnia";

export const insomniaTreatmentNycPost: BlogPost = {
  slug: BLOG_SLUGS.insomniaTreatmentNyc,
  title: "What Insomnia Treatment Works, and When Should You See a Specialist in NYC?",
  subtitle:
    "Learn what causes insomnia, how CBT-I and other insomnia treatment options work, and where to get help in NYC.",
  excerpt:
    "Can't fall asleep or stay asleep? Learn what causes insomnia, how CBT-I and other insomnia treatment options work, and where to get help in NYC.",
  seoTitle: "Which Insomnia Treatment Is Right for You in NYC?",
  metaDescription:
    "Can't fall asleep or stay asleep? Learn what causes insomnia, how CBT-I and other insomnia treatment options work, and where to get help in NYC.",
  focusKeyword: "insomnia treatment",
  category: "Sleep Medicine",
  readTime: "12 min read",
  publishedAt: "2026-11-12",
  image: BLOG_IMAGES.insomniaTreatmentNyc,
  imageAlt: "Adult lying awake at night looking for insomnia treatment in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Good insomnia treatment starts with finding the cause. For long-term insomnia, many experts recommend a talk therapy called CBT-I as the first step. It helps you change the habits and thoughts that keep you awake. Sleep medicines may help for a short time in some cases. See a doctor if poor sleep lasts more than a few weeks or affects your day. If you have thoughts of harming yourself, call or text 988. For a medical emergency, call 911.",
    },
    {
      type: "p",
      text: "It's 2 a.m. The radiator clanks. A siren goes by. You check the clock again and do the math on how many hours you have left. Everyone has nights like this. But when they become most nights, it wears you down. Insomnia is common, and it's treatable. This guide explains the causes, the treatments and when to get help.",
    },
    {
      type: "cta",
      prompt: "Ready to sleep through the night?",
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
      heading: "What Is Insomnia?",
    },
    {
      type: "p",
      text: "Insomnia means trouble falling asleep, staying asleep or getting good-quality sleep. It happens even when you have the time and a decent place to sleep.",
    },
    {
      type: "p",
      text: "The National Heart, Lung, and Blood Institute describes two main types:",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_INSOMNIA_URL,
        },
      ],
    },
    {
      type: "ul",
      items: [
        "Short-term insomnia. It lasts days or weeks. Stress or a schedule change often causes it.",
        "Chronic insomnia. It happens three or more nights a week and lasts more than three months.",
      ],
    },
    {
      type: "p",
      text: "The NHLBI also notes that chronic insomnia can affect memory and focus. It links chronic insomnia to higher risk of high blood pressure, heart disease and diabetes.",
    },

    {
      type: "h2",
      heading: "Common Causes of Insomnia",
    },
    {
      type: "p",
      text: "Insomnia often has more than one cause. Here are some common ones.",
    },
    {
      type: "ul",
      items: [
        "Stress. Work, money, family and the pace of city life can keep your mind racing.",
        "Anxiety and depression. These often go hand in hand with poor sleep.",
        "Schedule changes. Shift work, jet lag and late weekend nights can confuse your body clock.",
        "Habits. Late caffeine, alcohol, heavy meals and screens in bed can all play a part.",
        "Your sleep space. Noise, light and heat matter. So does a partner who snores.",
        "Medical problems. Pain, acid reflux, asthma, thyroid problems and hot flashes can wake you up.",
        "Medicines. Some decongestants, steroids and antidepressants can affect sleep.",
        "Other sleep disorders. Sleep apnea and restless legs can look like insomnia.",
      ],
    },
    {
      type: "p",
      text: "That last point matters. If you snore or gasp at night, ask your doctor about sleep apnea symptoms too.",
      links: [
        {
          label: "sleep apnea symptoms",
          href: BLOG_PATHS.sleepApneaSymptomsNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "Insomnia Treatment Options",
    },
    {
      type: "p",
      text: "There's no one-size-fits-all fix. Your doctor builds a plan around your cause, your health and your schedule.",
    },
    {
      type: "h3",
      heading: "CBT-I: Cognitive Behavioral Therapy for Insomnia",
    },
    {
      type: "p",
      text: "CBT-I is a short, structured talk therapy for sleep. It usually runs for several weekly sessions. Many people do it in person. Others do it by video or through an app.",
    },
    {
      type: "p",
      text: "CBT-I often includes:",
    },
    {
      type: "ul",
      items: [
        "Sleep restriction. You limit time in bed at first. That builds stronger sleep drive.",
        "Stimulus control. You use the bed only for sleep and sex. If you can't sleep, you get up for a while.",
        "A steady wake time. You get up at the same time every day, weekends too.",
        'Thought work. You learn to quiet worries like "I\'ll never sleep tonight."',
        "Relaxation skills. Breathing and muscle relaxation can help you wind down.",
      ],
    },
    {
      type: "diagram",
      variant: "process",
      alt: "Diagram of CBT-I steps used in insomnia treatment",
      steps: ["Steady wake time", "Bed for sleep only", "Thought work", "Relaxation"],
    },
    {
      type: "p",
      text: "It takes effort. Sleep can feel worse for the first week or two. Many people find it pays off.",
    },
    {
      type: "h3",
      heading: "Sleep Medicines",
    },
    {
      type: "p",
      text: "Your doctor may suggest medicine for short-term use. Some sleep medicines can cause next-day grogginess or other side effects. Never mix sleep aids with alcohol. Don't start or stop a sleep medicine without talking to your doctor.",
    },
    {
      type: "h3",
      heading: "Treating What's Behind It",
    },
    {
      type: "p",
      text: "Sometimes the fix lies elsewhere. Treating pain, reflux, anxiety or sleep apnea may improve sleep too. That's where a team approach helps.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.insomniaNightstand,
      alt: "Late-night bedside clock showing why many people seek insomnia treatment",
      caption: "Late nights add up. A clear plan starts with the cause.",
    },

    {
      type: "h2",
      heading: "Finding an Insomnia Therapist or Sleep Doctor",
    },
    {
      type: "p",
      text: 'Maybe you searched for an "insomnia therapist" or a "sleep therapist near me." Others try "insomnia therapy near me." They\'re often looking for the same help. Here\'s who does what.',
    },
    {
      type: "ul",
      items: [
        "Sleep medicine doctors diagnose sleep disorders and build a full plan. They also rule out sleep apnea and restless legs.",
        "CBT-I therapists are often psychologists or other clinicians with sleep training. They guide you through CBT-I.",
        "Primary care doctors check for medical causes and review your medicines.",
        "Sleep coaches may offer general habit tips. They can't diagnose or treat sleep disorders.",
      ],
    },
    {
      type: "p",
      text: "Your primary care doctor is a good first stop for many people. Some plans ask for a referral before a specialist visit. Find out whether you need a referral in NYC before you book.",
      links: [
        { label: "primary care doctor", href: ROUTES.primaryCare },
        {
          label: "whether you need a referral in NYC",
          href: BLOG_PATHS.referralNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "When to See a Doctor About Insomnia",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "Poor sleep lasts more than a few weeks",
        "It happens three or more nights a week",
        "You feel tired, cranky or unfocused most days",
        "You rely on sleep aids or alcohol to fall asleep",
        "You snore loudly or your legs won't stay still at night",
        "Your sleep problems started with a new medicine",
      ],
    },
    {
      type: "p",
      text: "Not sure you need a specialist? Certain signs show when to see a sleep specialist.",
      links: [
        {
          label: "when to see a sleep specialist",
          href: BLOG_PATHS.whenToSeeASleepSpecialistNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "When to Get Help Right Away",
    },
    {
      type: "p",
      text: "Insomnia and mental health often connect. If you have thoughts of harming yourself, call or text 988 to reach the Suicide and Crisis Lifeline. Call 911 for chest pain, trouble breathing or any medical emergency.",
    },

    {
      type: "h2",
      heading: "Getting Insomnia Treatment in NYC",
    },
    {
      type: "ul",
      items: [
        '"Can I just use an app?" Some CBT-I apps follow the same steps as a therapist. They work best with some guidance. Ask your doctor which option fits.',
        '"What about weed or CBD for sleep?" Research on these is still mixed. They can affect sleep quality and next-day focus. Talk to your doctor before you rely on them.',
        '"I work nights. Does this still apply?" Yes, with changes. A sleep doctor can help you plan around your shifts.',
        '"My partner snores. Is that my insomnia?" It might be part of it. Your partner may want a check for sleep apnea too.',
      ],
    },

    {
      type: "h2",
      heading: "What Happens at a Sleep Visit for Insomnia?",
    },
    {
      type: "p",
      text: "Your doctor starts with your story. Expect questions about:",
    },
    {
      type: "ul",
      items: [
        "When the problem started",
        "Your bedtime, wake time and naps",
        "How long it takes you to fall asleep",
        "How often you wake up",
        "Caffeine, alcohol and screen time",
        "Stress, mood and life changes",
        "Medicines and supplements",
      ],
    },
    {
      type: "p",
      text: "Your doctor may ask you to keep a sleep diary for one to two weeks. Most people with insomnia don't need a sleep study. Your doctor may order one if they suspect another sleep disorder. A home sleep study in NYC is one common option.",
      links: [
        {
          label: "home sleep study in NYC",
          href: BLOG_PATHS.homeSleepStudyNyc,
        },
      ],
    },
    {
      type: "process",
      alt: "Insomnia care path from visit to treatment plan",
      steps: ["Sleep history and exam", "Sleep diary when needed", "CBT-I or other treatment plan"],
    },

    {
      type: "h2",
      heading: "Sleep Habits That Support Treatment",
    },
    {
      type: "p",
      text: "Good habits alone rarely cure chronic insomnia. But they help other treatments work better.",
    },
    {
      type: "ul",
      items: [
        "Get up at the same time every day.",
        "Get morning daylight, even a walk to the subway counts.",
        "Stop caffeine by early afternoon.",
        "Keep the bedroom cool, dark and quiet. Earplugs and blackout shades help in the city.",
        "Put your phone across the room.",
        "Don't lie in bed awake for long. Get up and do something calm, then try again.",
        "Limit alcohol, especially close to bedtime.",
      ],
    },

    {
      type: "h2",
      heading: "Insomnia Treatment in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the East Village and all five boroughs. Sleep medicine, primary care and neurology share one location. That makes it easier to check the many causes of poor sleep.",
      links: [
        { label: "Sleep medicine", href: ROUTES.sleepMedicine },
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "neurology", href: ROUTES.neurology },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready for better nights?",
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
      text: "New to the practice? Umbrella Health brings primary care and specialists together under one roof.",
      links: [{ label: "Umbrella Health", href: ROUTES.home }],
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "What Insomnia Treatments Can I Try at Home?",
          a: "Insomnia treatment at home starts with steady habits. Keep the same wake time every day. Get out of bed if you can't sleep. Limit caffeine late in the day. If insomnia lasts weeks, see a doctor. Other insomnia treatments, like CBT-I, work best with a trained clinician.",
        },
        {
          q: "What Is the Best Treatment for Chronic Insomnia?",
          a: "Many experts recommend CBT-I as the first treatment for chronic insomnia in adults. Your doctor can tell you if it fits your situation.",
        },
        {
          q: "How Long Does CBT-I Take to Work?",
          a: "It often runs for several weekly sessions. Many people notice changes within a few weeks. Sleep may feel worse at first.",
        },
        {
          q: "Does Insomnia Go Away for Good?",
          a: "Many people sleep much better with treatment. Insomnia can come back during stressful times. The skills from CBT-I can help you handle it.",
        },
        {
          q: "Should I Take Melatonin for Insomnia?",
          a: "Melatonin may help with some body clock problems. It isn't right for everyone. Ask your doctor before you start any sleep aid.",
        },
        {
          q: "Do I Need a Sleep Study for Insomnia?",
          a: "Usually not. Doctors often diagnose insomnia from your history and a sleep diary. A sleep study helps when they suspect apnea or another disorder.",
        },
        {
          q: "Is a Sleep Therapist the Same as a Sleep Doctor?",
          a: "Not always. A sleep therapist often provides CBT-I. A sleep doctor diagnoses sleep disorders and may prescribe treatment.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Tired of lying awake?",
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
