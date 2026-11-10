import { ROUTES } from "@/data/site-architecture";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const NHLBI_SLEEP_DEPRIVATION_URL = "https://www.nhlbi.nih.gov/health/sleep-deprivation";

export const whenToSeeASleepSpecialistNycPost: BlogPost = {
  slug: BLOG_SLUGS.whenToSeeASleepSpecialistNyc,
  title: "Which Signs Tell You When to See a Sleep Specialist in NYC?",
  subtitle:
    "Learn when to see a sleep specialist, what a first visit involves, and how to find sleep medicine in Lower Manhattan.",
  excerpt:
    "Tired all the time or up all night? Learn when to see a sleep specialist, what a first visit involves and how to find sleep medicine in Lower Manhattan.",
  seoTitle: "How Do You Know When to See a Sleep Specialist in NYC?",
  metaDescription:
    "Tired all the time or up all night? Learn when to see a sleep specialist, what a first visit involves and how to find sleep medicine in Lower Manhattan.",
  focusKeyword: "when to see a sleep specialist",
  category: "Sleep Medicine",
  readTime: "11 min read",
  publishedAt: "2026-11-10",
  image: BLOG_IMAGES.whenToSeeASleepSpecialistNyc,
  imageAlt:
    "Tired adult wondering when to see a sleep specialist at Umbrella Health in Lower Manhattan NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Knowing when to see a sleep specialist comes down to three things. The problem lasts for weeks, it keeps coming back, or it affects your day. Loud snoring, gasping at night, trouble falling asleep and heavy daytime sleepiness all count. So do restless legs and acting out dreams. Your primary care doctor can start the conversation. A sleep specialist can run tests and build a plan. If you nod off while driving, stop driving and get help soon.",
      links: [{ label: "primary care doctor", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "Bad nights happen. A deadline, a noisy neighbor or a sick kid can wreck your sleep. Usually you bounce back. But sometimes the bad nights keep stacking up. Coffee stops working. Your partner moves to the couch because of your snoring. That's when it makes sense to look deeper. This guide explains the signs, the visit and how to get care nearby.",
    },
    {
      type: "cta",
      prompt: "Already know you need help?",
      label: "Explore Sleep Medicine at Umbrella Health →",
      href: ROUTES.sleepMedicine,
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
      heading: "What Does a Sleep Specialist Do?",
      subtitle:
        "Extra training in sleep medicine — often after neurology, lung care, psychiatry or internal medicine.",
    },
    {
      type: "p",
      text: "A sleep specialist is a doctor with extra training in sleep medicine. Some people call this doctor a somnologist. Looking for a sleep specialist in NYC? You'll also see titles like sleep physician. Many sleep doctors first trained in neurology, lung care, psychiatry or internal medicine.",
    },
    {
      type: "p",
      text: "A sleep specialist looks at the whole picture. That includes your habits, your health, your medicines and your schedule. Then they test for sleep disorders when needed. Common ones include:",
    },
    {
      type: "ul",
      items: [
        "Sleep apnea",
        "Chronic insomnia",
        "Restless legs syndrome",
        "Narcolepsy",
        "Circadian rhythm disorders, like shift work problems",
        "Parasomnias, such as sleepwalking",
      ],
    },
    {
      type: "p",
      text: "Sleep matters more than many people think. The National Heart, Lung, and Blood Institute links poor sleep to heart disease, high blood pressure, diabetes, stroke and depression. It also links sleepiness to injuries, including car crashes.",
      links: [
        {
          label: "National Heart, Lung, and Blood Institute",
          href: NHLBI_SLEEP_DEPRIVATION_URL,
        },
      ],
    },
    {
      type: "diagram",
      variant: "care-path",
      alt: "Care path from sleep symptoms through primary care to sleep medicine follow-up",
      steps: [
        "Notice lasting sleep problems",
        "Primary care check-in",
        "Sleep medicine visit",
        "Home or lab testing when needed",
        "Treatment and follow-up",
      ],
    },

    {
      type: "h2",
      heading: "When to See a Sleep Specialist: Signs It's Time",
      subtitle: "You don't need a diagnosis before you book — you need a pattern.",
    },
    {
      type: "p",
      text: "You don't need a diagnosis before you book. You just need a pattern. Here are the signs that most often lead people to a sleep clinic.",
    },

    {
      type: "h3",
      heading: "You Snore Loudly or Gasp at Night",
    },
    {
      type: "p",
      text: "Snoring alone isn't always a problem. Loud snoring with pauses, choking or gasping is different. Those are common signs of sleep apnea. Knowing the common sleep apnea symptoms helps you spot the problem early.",
    },

    {
      type: "h3",
      heading: "You Can't Fall Asleep or Stay Asleep",
    },
    {
      type: "p",
      text: "Maybe you lie awake for an hour. Or you wake at 3 a.m. and can't drift off again. If this happens most nights for weeks, it's worth a visit. Insomnia treatment in NYC can help you sleep through the night again.",
    },

    {
      type: "h3",
      heading: "You Feel Sleepy All Day, Even After a Full Night",
    },
    {
      type: "p",
      text: "Feeling tired after a short night is normal. Feeling wiped out after eight hours isn't. Nodding off in meetings or on the train can point to a sleep disorder.",
    },

    {
      type: "h3",
      heading: "Your Legs Won't Stay Still at Night",
    },
    {
      type: "p",
      text: "An urge to move your legs at rest can keep you up. It often feels worse in the evening. That pattern fits restless legs syndrome.",
    },

    {
      type: "h3",
      heading: "You Act Out Dreams or Do Odd Things in Your Sleep",
    },
    {
      type: "p",
      text: "Shouting, kicking or punching during dreams needs a check. So does sleepwalking. These can have a neurological link. A neurologist for sleep disorders can help with these cases.",
      links: [
        {
          label: "neurologist for sleep disorders",
          href: BLOG_PATHS.whenToSeeANeurologistNyc,
        },
      ],
    },

    {
      type: "h3",
      heading: "Your Schedule Fights Your Body Clock",
    },
    {
      type: "p",
      text: "Night shifts, rotating shifts and frequent travel can throw off your body clock. If you can't sleep when you need to, a specialist can help you reset.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.sleepSpecialistSignsChecklist,
      alt: "Checklist of signs that show when to see a sleep specialist in NYC",
      caption: "Common signs that may mean it's time to see a sleep specialist.",
    },

    {
      type: "h2",
      heading: "Common Sleep Myths That Keep People From Getting Help",
      subtitle: "A few myths keep New Yorkers from booking a sleep visit.",
    },
    {
      type: "p",
      text: "A lot of New Yorkers put off a sleep visit because of a few common myths. Here's the plain truth.",
    },
    {
      type: "table",
      headers: ["Myth", "Reality"],
      rows: [
        [
          '"I\'m just a bad sleeper."',
          "Some people sleep lightly. Years of bad nights often have a cause a doctor can find.",
        ],
        [
          '"Snoring is harmless."',
          "Sometimes it is. Loud snoring with pauses can point to sleep apnea.",
        ],
        [
          '"I\'ll catch up on the weekend."',
          "Sleeping in helps a little. It doesn't undo a week of short nights.",
        ],
        [
          '"I need a sleeping pill."',
          "Pills can help some people for a short time. Many sleep problems respond better to other treatments.",
        ],
        [
          '"Sleep doctors only do overnight lab tests."',
          "Many tests now happen at home. Plenty of visits involve no test at all.",
        ],
      ],
    },

    {
      type: "h2",
      heading: "When Sleepiness Is an Emergency",
      subtitle: "Most sleep problems aren't emergencies — a few situations are.",
    },
    {
      type: "p",
      text: "Call 911 or go to the ER right away if you or someone you're with has:",
    },
    {
      type: "ul",
      items: [
        "Chest pain or trouble breathing",
        "Sudden weakness or numbness on one side",
        "Slurred speech or sudden confusion",
        "Breathing that stops and doesn't restart",
        "An injury after falling asleep while driving or working",
      ],
    },
    {
      type: "p",
      text: "If you feel drowsy behind the wheel, pull over. Don't drive until a doctor checks your sleepiness.",
    },

    {
      type: "h2",
      heading: "Primary Care or Sleep Specialist: Where to Start?",
    },
    {
      type: "p",
      text: "Your primary care doctor is often a good first stop. They can review your medicines, check your blood pressure and order basic labs. Thyroid problems, low iron and some medicines can all affect sleep.",
      links: [{ label: "primary care doctor", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "A sleep specialist makes sense when:",
    },
    {
      type: "ul",
      items: [
        "Your symptoms point to a sleep disorder like apnea or narcolepsy",
        "Basic changes haven't helped after a few weeks",
        "Your doctor suspects you need a sleep study",
        "Sleep problems affect your work, mood or safety",
      ],
    },
    {
      type: "p",
      text: "Some insurance plans ask for a referral first. Find out whether you need a referral in NYC before you book.",
      links: [
        {
          label: "whether you need a referral in NYC",
          href: BLOG_PATHS.referralNyc,
        },
      ],
    },
    {
      type: "table",
      headers: ["Situation", "Usually start here"],
      rows: [
        [
          "A few rough nights after stress or travel",
          "Self-care and primary care if it keeps going",
        ],
        [
          "Loud snoring with daytime sleepiness or gasping",
          "Sleep medicine — or primary care for a same-practice referral",
        ],
        [
          "Nodding off while driving or at work",
          "Stop driving and get evaluated soon — don't wait it out",
        ],
      ],
      note: "Your insurance plan may require a referral before a specialty visit.",
    },

    {
      type: "h2",
      heading: "What Happens at a First Sleep Medicine Visit?",
      subtitle: "Mostly a conversation, a short exam, and a clear next step.",
    },
    {
      type: "p",
      text: "Your first visit is mostly a conversation. Expect questions like these:",
    },
    {
      type: "ul",
      items: [
        "What time do you go to bed and wake up?",
        "How long does it take you to fall asleep?",
        "Do you wake up during the night?",
        "Does anyone hear you snore or stop breathing?",
        "How sleepy do you feel during the day?",
        "How much caffeine and alcohol do you have?",
        "What medicines and supplements do you take?",
      ],
    },
    {
      type: "p",
      text: "Your doctor may also do a short physical exam. They often look at your throat, nose and neck. They may ask you to fill out a sleepiness questionnaire.",
    },
    {
      type: "process",
      alt: "First sleep medicine visit path at Umbrella Health",
      steps: ["History and exam", "Home or lab testing when needed", "Personalized care plan"],
    },

    {
      type: "h3",
      heading: "Tests That May Follow",
    },
    {
      type: "p",
      text: "Some people need a sleep study. Sleep medicine at Umbrella Health includes comprehensive sleep evaluations, home sleep studies and sleep apnea testing. A home sleep study in NYC lets you do the test in your own bed.",
      links: [{ label: "Sleep medicine at Umbrella Health", href: ROUTES.sleepMedicine }],
    },

    {
      type: "h3",
      heading: "How to Prepare",
    },
    {
      type: "ul",
      items: [
        "Keep a sleep diary for one to two weeks.",
        "Note bedtimes, wake times and naps.",
        "Track caffeine, alcohol and screen time at night.",
        "Ask your partner what they notice while you sleep.",
        "Bring a list of medicines and supplements.",
      ],
    },
    {
      type: "diagram",
      variant: "process",
      alt: "How a sleep evaluation works from visit to treatment plan",
      steps: [
        "Sleep medicine visit",
        "Home sleep study when indicated",
        "Results review and treatment plan",
      ],
    },

    {
      type: "h2",
      heading: "Finding the Best Sleep Clinic Near Me in NYC",
    },
    {
      type: "p",
      text: 'Searching "best sleep clinic near me" brings up a long list. Ask a few questions to narrow it down:',
    },
    {
      type: "ul",
      items: [
        "Does the clinic treat your type of problem?",
        "Does it offer home sleep studies?",
        "Do the sleep doctors work with primary care and other specialists?",
        "Can you reach the office easily by subway?",
        "Does it take your insurance?",
      ],
    },
    {
      type: "p",
      text: "A full sleep disorder center often handles complex cases. Many smaller sleep clinics handle the most common problems well. What matters most is a clear diagnosis and a plan you can follow.",
    },

    {
      type: "h2",
      heading: "Sleep Medicine Near Me in Lower Manhattan",
      subtitle: "Sleep care alongside primary care, neurology and cardiology near Union Square.",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square. Patients come from Greenwich Village, Chelsea, the Flatiron District, the East Village and all five boroughs. Sleep medicine works alongside primary care, neurology and cardiology in one place. That helps when sleep ties into other health issues.",
      links: [
        { label: "primary care", href: ROUTES.primaryCare },
        { label: "neurology", href: ROUTES.neurology },
        { label: "cardiology", href: ROUTES.cardiology },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic interior for sleep medicine in Lower Manhattan NYC",
      caption: "Umbrella Health at 32 West 14th Street, Lower Manhattan.",
    },
    {
      type: "ctaBox",
      title: "Ready to sleep better?",
      body: `Book through our NYC sleep specialist page, contact Umbrella Health, or call ${SITE_PHONE}.`,
      links: [
        { label: "NYC Sleep Specialist →", href: ROUTES.sleepMedicine },
        { label: "Contact Us →", href: ROUTES.contactUs },
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
      subtitle:
        "Common questions about when to see a sleep specialist, referrals, snoring and first visits.",
      items: [
        {
          q: "What Is a Sleep Specialist Called?",
          a: "Some people use the word somnologist. Most people just say sleep doctor or sleep medicine specialist.",
        },
        {
          q: "Do I Need a Referral to See a Sleep Specialist in NYC?",
          a: "It depends on your insurance plan. Some plans let you book directly. Others want a referral from primary care. Call your insurer to check.",
        },
        {
          q: "How Do I Know When to See a Sleep Doctor?",
          a: "Book a visit if sleep problems last more than a few weeks or affect your day. Don't wait if you snore loudly and feel very sleepy.",
        },
        {
          q: "Can a Sleep Specialist Help With Snoring?",
          a: "Yes. A sleep specialist can check whether snoring points to sleep apnea. Then they can suggest treatment options.",
        },
        {
          q: "Is a Sleep Clinic the Same as a Sleep Disorder Center?",
          a: "The terms overlap. Both diagnose and treat sleep problems. A sleep disorder center may offer more in-lab testing.",
        },
        {
          q: "What Should I Bring to My First Sleep Visit?",
          a: "Bring a sleep diary, a medicine list and notes from your bed partner. Past test results help too.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Get Help for Better Sleep",
    },
    {
      type: "p",
      text: `Tired of bad nights? Book an appointment with our NYC sleep specialist or call ${SITE_PHONE} to schedule your visit.`,
      links: [
        {
          label: "Book an appointment with our NYC sleep specialist",
          href: ROUTES.sleepMedicine,
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
      title: "Ready to see a sleep specialist in Lower Manhattan?",
      body: "Explore Sleep Medicine at Umbrella Health, or send a general enquiry through our contact page.",
      links: [
        { label: "Explore Sleep Medicine →", href: ROUTES.sleepMedicine },
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
