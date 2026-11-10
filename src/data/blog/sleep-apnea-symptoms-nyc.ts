import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_SLEEP_APNEA_URL = "https://www.nhlbi.nih.gov/health/sleep-apnea";

export const sleepApneaSymptomsNycPost: BlogPost = {
  slug: BLOG_SLUGS.sleepApneaSymptomsNyc,
  title: "What Are the Common Sleep Apnea Symptoms, and When Should You Book a Test in NYC?",
  subtitle:
    "Learn the common sleep apnea symptoms, who's at risk, and how to find testing and treatment in Lower Manhattan.",
  excerpt:
    "Loud snoring, gasping or waking up tired? Learn the common sleep apnea symptoms, who's at risk and how to find testing and treatment in Lower Manhattan.",
  seoTitle: "Which Sleep Apnea Symptoms Mean You Need a Test in NYC?",
  metaDescription:
    "Loud snoring, gasping or waking up tired? Learn the common sleep apnea symptoms, who's at risk and how to find testing and treatment in Lower Manhattan.",
  focusKeyword: "sleep apnea symptoms",
  category: "Sleep Medicine",
  readTime: "12 min read",
  publishedAt: "2026-11-10",
  image: BLOG_IMAGES.sleepApneaSymptomsNyc,
  imageAlt: "Partner noticing sleep apnea symptoms like loud snoring at night",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "The most common sleep apnea symptoms are loud snoring, pauses in breathing, and choking or gasping at night. Many people also wake up tired, with a dry mouth or a headache. Daytime sleepiness, poor focus and mood changes are common too. Often a bed partner notices first. A sleep study can confirm it. Treatment often starts with a breathing device like CPAP. Call 911 for chest pain, severe trouble breathing or sudden confusion.",
    },
    {
      type: "p",
      text: "Your partner says you stop breathing at night. You laugh it off. Then you notice you're tired every afternoon, even with eight hours of sleep. Sound familiar? Sleep apnea is common, and many people don't know they have it. The good news is that testing is simple and treatment can help. This guide covers the signs, the risks and how to book a test.",
    },
    {
      type: "cta",
      prompt: "Worried about your snoring?",
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
      heading: "What Is Sleep Apnea?",
    },
    {
      type: "p",
      text: "Sleep apnea makes your breathing stop and start many times during sleep. The National Heart, Lung, and Blood Institute explains that this can keep your body from getting enough oxygen. It also notes that untreated sleep apnea raises the risk of stroke and heart attack.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_SLEEP_APNEA_URL,
        },
      ],
    },
    {
      type: "p",
      text: "There are two main types:",
    },
    {
      type: "ul",
      items: [
        "Obstructive sleep apnea. Something blocks your upper airway again and again. This is the most common type.",
        "Central sleep apnea. Your brain doesn't send the right signals to breathe. This type is less common.",
      ],
    },
    {
      type: "p",
      text: "When people talk about sleep apnea, they usually mean obstructive sleep apnea.",
    },

    {
      type: "h2",
      heading: "Common Sleep Apnea Symptoms",
    },
    {
      type: "p",
      text: "Some signs show up at night. Others show up during the day. You may notice only a few of them.",
    },
    {
      type: "h3",
      heading: "Night-Time Signs",
    },
    {
      type: "ul",
      items: [
        "Loud, frequent snoring",
        "Pauses in breathing that someone else sees",
        "Choking, gasping or snorting awake",
        "Restless sleep",
        "Waking up often to pee",
        "Night sweats",
      ],
    },
    {
      type: "h3",
      heading: "Morning and Daytime Signs",
    },
    {
      type: "ul",
      items: [
        "Waking up tired after a full night",
        "Morning headaches",
        "Dry mouth or sore throat when you wake",
        "Feeling sleepy during the day",
        "Trouble focusing or remembering things",
        "Feeling cranky, low or anxious",
        "Nodding off while reading, watching TV or riding the subway",
      ],
    },
    {
      type: "p",
      text: "If your thinking feels slow and cloudy, poor sleep may play a part. Other causes are worth a look too, and a neurologist for brain fog can help find them.",
      links: [
        {
          label: "neurologist for brain fog",
          href: BLOG_PATHS.neurologistForBrainFogNyc,
        },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.sleepApneaDayNight,
      alt: "Chart of night and daytime sleep apnea symptoms",
      caption: "Night and daytime sleep apnea symptoms often show up together.",
    },

    {
      type: "h2",
      heading: "Snoring and Sleep Apnea: What's the Link?",
    },
    {
      type: "p",
      text: "Not everyone who snores has sleep apnea. And not everyone with sleep apnea snores loudly. Still, snoring and sleep apnea often go together.",
    },
    {
      type: "p",
      text: "Snoring may point to apnea when it:",
    },
    {
      type: "ul",
      items: [
        "Sounds very loud, most nights",
        "Comes with pauses, then a gasp or snort",
        "Comes with daytime sleepiness",
        "Gets worse when you sleep on your back",
      ],
    },
    {
      type: "p",
      text: "If your partner hears pauses, ask them to time one. Or record a few minutes of audio on your phone. Bring that to your visit.",
    },

    {
      type: "h2",
      heading: "Who Is More Likely to Have Sleep Apnea?",
    },
    {
      type: "p",
      text: "Anyone can have sleep apnea, including people who look fit. Some things raise the risk:",
    },
    {
      type: "ul",
      items: [
        "Extra weight, especially around the neck",
        "Large tonsils or a small jaw",
        "A family history of sleep apnea",
        "Older age",
        "Smoking",
        "Alcohol or sedatives at night",
        "Nasal congestion",
        "Hormone changes, such as during menopause",
        "High blood pressure",
      ],
    },
    {
      type: "p",
      text: "Sleep apnea and heart health connect closely. If you have high blood pressure, primary care for high blood pressure is an important part of your plan. Our cardiology team also works with sleep medicine on these cases.",
      links: [
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
        { label: "cardiology team", href: ROUTES.cardiology },
      ],
    },

    {
      type: "h2",
      heading: "How Sleep Apnea Affects Daily Life in the City",
    },
    {
      type: "p",
      text: "Sleep apnea doesn't stay in the bedroom. It follows you through the day.",
    },
    {
      type: "ul",
      items: [
        "At work. You reread emails and lose focus in meetings.",
        "On your commute. You nod off on the train and miss your stop.",
        "Behind the wheel. Drowsy driving puts you and others at risk.",
        "At home. Your partner sleeps badly too. Tempers run short.",
        "Your health. Poor sleep can make blood pressure and blood sugar harder to manage.",
      ],
    },
    {
      type: "p",
      text: "Many people only realize how tired they were after treatment starts. That's a good reason not to wait.",
    },

    {
      type: "h2",
      heading: "When to See a Sleep Apnea Doctor",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "Someone sees you stop breathing in your sleep",
        "You snore loudly and feel sleepy during the day",
        "You wake up gasping or choking",
        "You feel drowsy while driving",
        "You have high blood pressure that's hard to control",
      ],
    },
    {
      type: "p",
      text: "Not sure if your sleep problem needs a specialist? Certain signs show when to see a sleep specialist.",
      links: [
        {
          label: "when to see a sleep specialist",
          href: BLOG_PATHS.whenToSeeASleepSpecialistNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "When It's an Emergency",
    },
    {
      type: "p",
      text: "Call 911 right away for chest pain, severe trouble breathing or blue lips. The same goes for sudden weakness or confusion. Don't wait for a sleep visit.",
    },

    {
      type: "h2",
      heading: "How Does Sleep Apnea Testing Work?",
    },
    {
      type: "p",
      text: "Sleep apnea testing usually starts with a visit. Your doctor asks about your sleep, snoring and daytime energy. They also look at your nose, mouth and throat.",
    },
    {
      type: "p",
      text: "Next comes a sleep study. There are two main types:",
    },
    {
      type: "ul",
      items: [
        "Home sleep study. You wear a small device in your own bed. It tracks your breathing and oxygen overnight.",
        "In-lab sleep study. You sleep at a sleep center while sensors track your brain waves, breathing and heart.",
      ],
    },
    {
      type: "p",
      text: "Your doctor picks the right test for you. Sleep medicine at Umbrella Health includes home sleep studies and sleep apnea testing. A home sleep study in NYC lets you do the test in your own bed.",
      links: [{ label: "Sleep medicine at Umbrella Health", href: ROUTES.sleepMedicine }],
    },

    {
      type: "h2",
      heading: "Sleep Apnea Treatment Options",
    },
    {
      type: "p",
      text: "Treatment depends on the type of sleep apnea and how severe it is. Your doctor walks you through the choices. Common options include:",
    },
    {
      type: "ul",
      items: [
        "CPAP. A machine that keeps your airway open with gentle air pressure through a mask. Many people adjust within a few weeks.",
        "Oral appliances. A custom mouthpiece moves your jaw forward. It may help in some cases.",
        "Positional therapy. Some people breathe better on their side.",
        "Weight management. Losing extra weight can ease symptoms for some people.",
        "Lifestyle changes. Less alcohol at night, no smoking and treating nasal congestion can help.",
        "Surgery or implants. These may come up when other options don't work.",
      ],
    },
    {
      type: "p",
      text: "Our medical weight loss clinic can help.",
      links: [{ label: "medical weight loss clinic", href: ROUTES.medicalWeightLoss }],
    },
    {
      type: "h3",
      heading: "Tips for Adjusting to CPAP",
    },
    {
      type: "ul",
      items: [
        "Try a few mask styles until one feels right.",
        "Wear it while you watch TV so it feels familiar.",
        "Use the humidifier if your nose feels dry.",
        "Clean the mask and tubing on a schedule.",
        "Tell your doctor if it still feels hard after a few weeks.",
      ],
    },

    {
      type: "h2",
      heading: "Sleep Apnea Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, SoHo, the East Village and all five boroughs. Sleep medicine, cardiology, primary care and weight loss care share one location. That makes it easier to treat sleep apnea and the problems linked to it.",
    },
    {
      type: "ctaBox",
      title: "Think you might have sleep apnea?",
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
          q: "What Do Sleep Apnea Symptoms in Kids Look Like?",
          a: "Children may snore, breathe through the mouth or sleep restlessly. Some have trouble focusing at school. Talk to your child's pediatrician. Children's sleep care may differ from adult care.",
        },
        {
          q: "What Are Common Sleep Apnea Symptoms in Men?",
          a: "Sleep apnea symptoms in men often include loud snoring, gasping at night and daytime sleepiness. A partner may notice pauses in breathing first.",
        },
        {
          q: "Do Sleep Apnea Symptoms in Women Look Different?",
          a: "They can. Sleep apnea symptoms in women may show up as tiredness, headaches, low mood or poor sleep. Loud snoring is less common. That can delay the diagnosis. Mention any of these to your doctor.",
        },
        {
          q: "What Are the First Signs of Sleep Apnea?",
          a: "Loud snoring, pauses in breathing and waking up tired are often the first signs. A bed partner often notices them before you do.",
        },
        {
          q: "Can You Have Sleep Apnea Without Snoring?",
          a: "Yes. Some people with sleep apnea snore softly or not at all. Daytime sleepiness and morning headaches can still point to it.",
        },
        {
          q: "Is Sleep Apnea Dangerous?",
          a: "Untreated sleep apnea can raise the risk of high blood pressure, heart attack and stroke. It also raises the risk of drowsy driving.",
        },
        {
          q: "Can Sleep Apnea Go Away on Its Own?",
          a: "It usually doesn't go away without treatment. Weight loss or other changes may help some people. Talk to your doctor about your options.",
        },
        {
          q: "Do I Need a Sleep Study to Diagnose Sleep Apnea?",
          a: "Yes. A doctor needs a sleep study to confirm sleep apnea and see how severe it is. Many people can do it at home.",
        },
        {
          q: "Does Insurance Cover Sleep Apnea Testing?",
          a: "Many plans cover testing when a doctor orders it. Coverage varies, so check with your plan first.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to book a sleep apnea test?",
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
