import { ROUTES } from "@/data/site-architecture";
import { SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NINDS_NARCOLEPSY_URL = "https://www.ninds.nih.gov/health-information/disorders/narcolepsy";

export const neurologistForSleepDisordersNycPost: BlogPost = {
  slug: BLOG_SLUGS.neurologistForSleepDisordersNyc,
  title: "Can a Neurologist for Sleep Disorders in NYC Help With Narcolepsy or Restless Legs?",
  subtitle:
    "Learn when to see a neurologist for sleep disorders like narcolepsy and RLS in Lower Manhattan.",
  excerpt:
    "Very sleepy by day, restless legs or acting out dreams? Learn when to see a neurologist for sleep disorders like narcolepsy and RLS in Lower Manhattan.",
  seoTitle: "When Do You Need a Neurologist for Sleep Disorders in NYC?",
  metaDescription:
    "Very sleepy by day, restless legs or acting out dreams? Learn when to see a neurologist for sleep disorders like narcolepsy and RLS in Lower Manhattan.",
  focusKeyword: "neurologist for sleep disorders",
  category: "Sleep Medicine",
  readTime: "12 min read",
  publishedAt: "2026-11-12",
  image: BLOG_IMAGES.neurologistForSleepDisordersNyc,
  imageAlt:
    "Adult with excessive daytime sleepiness who may need a neurologist for sleep disorders",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "See a neurologist for sleep disorders when your sleep problem may come from the brain or nerves. Common examples include narcolepsy, restless legs syndrome and acting out dreams. Heavy daytime sleepiness that doesn't improve with good sleep also fits. Many sleep doctors trained in neurology first. A sleep and neurology team can run tests like an overnight sleep study and a daytime nap test. If you fall asleep while driving, stop driving and see a doctor soon. Call 911 for sudden weakness, confusion or a seizure.",
    },
    {
      type: "p",
      text: "Most sleep problems start with habits, stress or breathing. Some don't. Your brain controls when you fall asleep, when you dream and when you wake. When that system misfires, sleep goes off track in strange ways. You might fall asleep mid-conversation. Your legs might buzz every night. Or your partner says you punched the pillow during a dream. These problems often need a doctor who knows both sleep and the nervous system. Our sleep medicine specialists work closely with neurology for exactly these cases.",
      links: [
        { label: "sleep medicine specialists", href: ROUTES.sleepMedicine },
        { label: "neurology", href: ROUTES.neurology },
      ],
    },
    {
      type: "cta",
      prompt: "Think your sleep problem might be neurological?",
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
      heading: "Why See a Neurologist for Sleep Disorders?",
    },
    {
      type: "p",
      text: "Sleep is a brain function. Some sleep disorders are neurological disorders at their core. Others often show up alongside conditions like Parkinson's disease, epilepsy or migraine.",
    },
    {
      type: "p",
      text: "A sleep disorders neurologist in NYC can:",
    },
    {
      type: "ul",
      items: [
        "Sort out whether a problem starts in the brain, the nerves or the airway",
        "Order the right sleep tests",
        "Look for links to other neurological conditions",
        "Manage medicines that affect both sleep and the nervous system",
      ],
    },
    {
      type: "p",
      text: "Many sleep medicine doctors have neurology training. Some practices also have neurologists and sleep doctors on one team.",
    },

    {
      type: "h2",
      heading: "Sleep Disorders With a Neurological Link",
    },
    {
      type: "h3",
      heading: "Narcolepsy",
    },
    {
      type: "p",
      text: "Narcolepsy affects how your brain controls sleep and wake cycles. The National Institute of Neurological Disorders and Stroke describes it as a chronic neurological disorder. It notes that symptoms often start between ages 7 and 25. It also notes that it can take years to get the right diagnosis.",
      links: [
        {
          label: "National Institute of Neurological Disorders and Stroke",
          href: NINDS_NARCOLEPSY_URL,
        },
      ],
    },
    {
      type: "p",
      text: "Common signs include:",
    },
    {
      type: "ul",
      items: [
        "Excessive daytime sleepiness. You feel very sleepy even after enough sleep at night.",
        "Sleep attacks. Sleepiness hits fast and hard.",
        "Cataplexy. Sudden muscle weakness after laughing, surprise or anger. Your knees might buckle or your face might droop.",
        "Sleep paralysis. You can't move or speak for a short time as you fall asleep or wake up.",
        "Vivid dreams or hallucinations near sleep.",
        "Broken sleep at night.",
      ],
    },
    {
      type: "h3",
      heading: "Restless Legs Syndrome",
    },
    {
      type: "p",
      text: "Restless legs syndrome, or RLS, causes an urge to move your legs. It often comes with crawling, tugging or itchy feelings. It tends to get worse in the evening and at rest. Moving brings short relief. Low iron and some medicines can make it worse. Your doctor may check your iron levels.",
    },
    {
      type: "h3",
      heading: "REM Sleep Behavior Disorder",
    },
    {
      type: "p",
      text: "During dreams, your muscles usually stay still. With REM sleep behavior disorder, they don't. People may talk, shout, kick or punch while dreaming. This can lead to injuries. It sometimes links to other neurological conditions. That's why it needs a careful check.",
    },
    {
      type: "h3",
      heading: "Other Conditions",
    },
    {
      type: "ul",
      items: [
        "Sleepwalking and night terrors. These are types of parasomnias.",
        "Circadian rhythm disorders. Your body clock runs too early, too late or out of sync with your schedule.",
        "Seizures at night. Some seizures happen mostly during sleep. An EEG can help.",
      ],
    },
    {
      type: "diagram",
      variant: "concept",
      alt: "Infographic of conditions a neurologist for sleep disorders treats",
      steps: [
        "Narcolepsy",
        "Restless legs syndrome",
        "REM sleep behavior disorder",
        "Night-time seizures",
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.neurologistForSleepConsult,
      alt: "Sleep and neurology consult for narcolepsy, RLS and related sleep disorders",
      caption: "A detailed sleep history and exam guide the next tests.",
    },

    {
      type: "h2",
      heading: "Excessive Daytime Sleepiness: When Tired Isn't Normal",
    },
    {
      type: "p",
      text: "Most tiredness comes from short sleep. New York doesn't make sleep easy. But excessive daytime sleepiness is different. You get enough hours and still fight to stay awake.",
    },
    {
      type: "p",
      text: "Watch for these signs:",
    },
    {
      type: "ul",
      items: [
        "Falling asleep in meetings, class or movies",
        "Dozing on the subway every day",
        "Needing naps that don't refresh you",
        "Drowsy driving",
        "Feeling foggy most of the day",
      ],
    },
    {
      type: "p",
      text: "Many things can cause it. Sleep apnea is a common one. Knowing the common sleep apnea symptoms helps you spot it. Brain fog can also overlap with sleepiness, and a neurologist for brain fog can help find the cause.",
      links: [
        {
          label: "sleep apnea symptoms",
          href: BLOG_PATHS.sleepApneaSymptomsNyc,
        },
        {
          label: "neurologist for brain fog",
          href: BLOG_PATHS.neurologistForBrainFogNyc,
        },
      ],
    },

    {
      type: "h2",
      heading: "How Doctors Test for Neurological Sleep Disorders",
    },
    {
      type: "p",
      text: "Your visit starts with a detailed talk about your sleep. Your doctor may ask you to keep a sleep diary for one to two weeks. They also do a neurological exam.",
    },
    {
      type: "p",
      text: "Tests may include:",
    },
    {
      type: "ul",
      items: [
        "Overnight sleep study. This tracks brain waves, breathing, eye movements and muscle activity.",
        "Multiple sleep latency test. This daytime test measures how fast you fall asleep across several naps. It also shows whether you enter dream sleep quickly.",
        "EEG. This checks brain electrical activity, often for seizures.",
        "Blood tests. These can check iron and other causes.",
      ],
    },
    {
      type: "process",
      alt: "Testing path for neurological sleep disorders",
      steps: [
        "Sleep and neurology visit",
        "Overnight study or nap test",
        "Results and treatment plan",
      ],
    },
    {
      type: "p",
      text: "A home sleep study mostly checks breathing. It can't confirm narcolepsy. A home sleep study in NYC is mainly a breathing test. Neurology care at Umbrella Health includes EEG testing.",
      links: [
        {
          label: "home sleep study in NYC",
          href: BLOG_PATHS.homeSleepStudyNyc,
        },
        {
          label: "Neurology care at Umbrella Health",
          href: ROUTES.neurology,
        },
      ],
    },

    {
      type: "h2",
      heading: "Living With a Neurological Sleep Disorder in NYC",
    },
    {
      type: "p",
      text: "A diagnosis can bring relief. It also brings questions about daily life. A few tips can help.",
    },
    {
      type: "ul",
      items: [
        "Plan naps. A short nap at lunch can help with narcolepsy. Talk to your employer about flexible breaks.",
        "Commute safely. Take the subway or a bus instead of driving when you feel drowsy.",
        "Keep a steady schedule. Go to bed and wake up at the same times, weekends too.",
        "Make the bedroom safe. Move sharp furniture away from the bed if you act out dreams.",
        "Get support. Support groups and online communities can help you feel less alone.",
      ],
    },
    {
      type: "p",
      text: "Looking for a neurologist for sleep disorders in NYC who is easy to reach? Union Square connects to many subway lines.",
    },

    {
      type: "h2",
      heading: "Treatment Options",
    },
    {
      type: "p",
      text: "Treatment depends on your diagnosis. Your doctor explains the choices and side effects. Plans often mix medicine and daily habits.",
    },
    {
      type: "ul",
      items: [
        "Narcolepsy. There's no cure. Wake-promoting medicines and other prescriptions can ease symptoms. Planned short naps and a steady sleep schedule help too.",
        "Restless legs syndrome. Treatment may include iron if levels run low. Medicines and habit changes can also help.",
        "REM sleep behavior disorder. Making the bedroom safe comes first. Medicine may help reduce dream enactment.",
        "Circadian rhythm disorders. Light timing, sleep timing and sometimes melatonin can shift your body clock.",
      ],
    },
    {
      type: "p",
      text: "Never start or stop a medicine on your own. Ask your doctor first.",
    },

    {
      type: "h2",
      heading: "When to See a Neurologist for Sleep Disorders",
    },
    {
      type: "p",
      text: "Book a visit if:",
    },
    {
      type: "ul",
      items: [
        "You feel very sleepy during the day despite enough sleep",
        "You have sudden muscle weakness when you laugh or feel strong emotion",
        "You often can't move when you wake up",
        "Your legs keep you awake most nights",
        "You act out dreams or hurt yourself or your partner in your sleep",
        "You have a neurological condition and new sleep problems",
      ],
    },
    {
      type: "p",
      text: "Not sure where to start? Certain signs show when to see a sleep specialist. Broader nervous system symptoms can also show when to see a neurologist.",
      links: [
        {
          label: "when to see a sleep specialist",
          href: BLOG_PATHS.whenToSeeASleepSpecialistNyc,
        },
        {
          label: "when to see a neurologist",
          href: BLOG_PATHS.whenToSeeANeurologistNyc,
        },
      ],
    },
    {
      type: "h3",
      heading: "When It's an Emergency",
    },
    {
      type: "p",
      text: "Call 911 right away for a first seizure or sudden weakness on one side. The same goes for slurred speech or sudden confusion. Call too after any injury from falling asleep at the wheel.",
    },

    {
      type: "h2",
      heading: "Sleep and Neurology Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the East Village and all five boroughs. Sleep medicine, neurology and primary care share one location. That keeps care in one place when sleep and the nervous system overlap.",
      links: [
        { label: "Sleep medicine", href: ROUTES.sleepMedicine },
        { label: "neurology", href: ROUTES.neurology },
        { label: "primary care", href: ROUTES.primaryCare },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready to get answers about your sleep?",
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
          q: "What Is a Neurology Center for Sleep Disorders?",
          a: "It's a clinic where neurologists and sleep teams work together. They look at sleep problems with a brain or nerve link, like narcolepsy or restless legs. Ask your doctor if you need one.",
        },
        {
          q: "Does a Neurologist Treat Sleep Disorders?",
          a: "Yes. Many neurologists treat sleep disorders, and many sleep doctors trained in neurology. They often treat narcolepsy, restless legs and dream enactment.",
        },
        {
          q: "Should I See a Neurologist or a Sleep Specialist?",
          a: "Either can be a good start. A sleep specialist handles most sleep problems. A neurologist helps most when a brain or nerve condition may play a part.",
        },
        {
          q: "What Are the First Signs of Narcolepsy?",
          a: "Heavy daytime sleepiness is often the first sign. Cataplexy, sleep paralysis and vivid dreams near sleep may follow.",
        },
        {
          q: "Is Restless Legs Syndrome a Neurological Disorder?",
          a: "Yes. Doctors consider restless legs syndrome a nervous system condition that affects sleep.",
        },
        {
          q: "What Is a Multiple Sleep Latency Test?",
          a: "It's a daytime nap test. It measures how fast you fall asleep and whether you enter dream sleep early. Doctors use it to help diagnose narcolepsy.",
        },
        {
          q: "Can Stress Cause Excessive Daytime Sleepiness?",
          a: "Stress can hurt your sleep and leave you tired. Heavy sleepiness that lasts despite good sleep needs a medical check.",
        },
      ],
    },

    {
      type: "ctaBox",
      title: "Ready to sleep and feel rested again?",
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
