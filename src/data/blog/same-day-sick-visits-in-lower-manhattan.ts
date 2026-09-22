import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const CDC_EMERGENCY_CARE_URL =
  "https://www.cdc.gov/respiratory-viruses/prevention/when-to-seek-emergency-care.html";

export const sameDaySickVisitsPost: BlogPost = {
  slug: BLOG_SLUGS.sameDaySickVisits,
  title: "Same-Day Sick Visits in Lower Manhattan",
  subtitle:
    "Learn when same-day primary care is appropriate, what doctors can evaluate, testing options, and when to seek emergency care.",
  excerpt:
    "Need same-day medical care in Lower Manhattan? Learn when same-day primary care is appropriate, what doctors can evaluate, testing options, and when to seek emergency care.",
  seoTitle: "Same-Day Sick Visits in Lower Manhattan | Umbrella Health",
  metaDescription:
    "Need same-day medical care in Lower Manhattan? Learn when same-day primary care is appropriate, what doctors can evaluate, testing options, and when to seek emergency care",
  focusKeyword: "same-day sick visits in Lower Manhattan",
  category: "Patient Guide",
  readTime: "10 min read",
  publishedAt: "2026-04-22",
  image: BLOG_IMAGES.sameDay,
  imageAlt: "Umbrella Health clinic for same-day sick visits in Lower Manhattan NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "When you wake up with a new cough, sore throat, fever, urinary symptoms, rash, or another unexpected health concern, waiting several days for an appointment may not be practical.",
    },
    {
      type: "p",
      text: "Same-day sick visits in Lower Manhattan can provide a convenient option for evaluating non-emergency illnesses and new symptoms when you need medical attention sooner than a routine appointment.",
    },
    {
      type: "p",
      text: "At Umbrella Health, same-day appointments are part of the practice's primary care model, subject to availability. The clinic is located at 32 West 14th Street, New York, NY 10011, near Union Square, Greenwich Village, Chelsea, SoHo, and the West Village.",
      links: [{ label: "primary care", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Need primary care today?",
      label: "Explore Primary Care NYC at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Are Same-Day Sick Visits?",
    },
    {
      type: "p",
      text: "A same-day sick visit is an appointment for an acute health concern that needs medical attention but is not necessarily an emergency.",
    },
    {
      type: "p",
      text: "Examples may include:",
    },
    {
      type: "ul",
      items: [
        "Cold and flu symptoms",
        "Cough or sore throat",
        "Fever",
        "Minor infections",
        "Urinary symptoms",
        "New rashes",
        "Mild gastrointestinal symptoms",
        "Sinus or respiratory symptoms",
        "New or worsening symptoms related to an existing condition",
        "Other short-term illnesses that require prompt evaluation",
      ],
    },
    {
      type: "p",
      text: "The appropriate type of care depends on your symptoms and their severity. A same-day primary care appointment is not a substitute for emergency medical care when symptoms are severe or potentially life-threatening.",
    },

    {
      type: "h2",
      heading: "What Should You Do If You're Not Sure How Serious Your Symptoms Are?",
    },
    {
      type: "p",
      text: "If you are unsure where to seek care, contact a healthcare professional for guidance rather than relying on an online diagnosis.",
    },
    {
      type: "p",
      text: "For symptoms that are severe, rapidly worsening, or concerning, emergency evaluation may be necessary.",
    },

    {
      type: "h2",
      heading: "When Should You Choose Same-Day Primary Care?",
    },
    {
      type: "p",
      text: "Same-day primary care can be useful when you need prompt medical evaluation but your symptoms do not appear to require an emergency department.",
    },
    {
      type: "p",
      text: "For example, someone with a persistent cough, sore throat, urinary symptoms, or a mild infection may benefit from a prompt physician evaluation.",
    },
    {
      type: "p",
      text: "A primary care physician can review your symptoms, medical history, medications, and risk factors and determine whether additional testing or follow-up is appropriate.",
    },
    {
      type: "p",
      text: "Learn more about what primary care is and what a primary care doctor does.",
      links: [
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Patient discussing acute symptoms during a same-day sick visit at Umbrella Health",
    },
    {
      type: "cta",
      prompt: "Have a new, non-emergency health concern?",
      label: "Book a Primary Care Visit with Umbrella Health →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Can a Doctor Evaluate During a Same-Day Sick Visit?",
    },
    {
      type: "p",
      text: "The evaluation depends on your symptoms.",
    },
    {
      type: "p",
      text: "Your physician may:",
    },
    {
      type: "ul",
      items: [
        "Review your symptoms and when they started",
        "Take your medical history",
        "Review medications and allergies",
        "Check vital signs",
        "Perform an appropriate physical examination",
        "Determine whether diagnostic testing is needed",
        "Recommend treatment or supportive care",
        "Explain warning signs that require additional medical attention",
        "Arrange follow-up care when appropriate",
      ],
    },
    {
      type: "p",
      text: "A same-day appointment is therefore more than simply treating a symptom. It can help determine what may be causing the problem and what should happen next.",
    },

    {
      type: "h2",
      heading: "Can Testing Be Done During a Same-Day Visit?",
    },
    {
      type: "p",
      text: "Depending on the concern and clinical need, testing may be available during or in connection with the visit.",
    },
    {
      type: "p",
      text: "Umbrella Health's current same-day-care information describes access to testing such as strep, flu, COVID-19 testing, urinalysis, and basic laboratory testing when appropriate. More extensive evaluation can also connect to the practice's Diagnostic Testing NYC services.",
      links: [{ label: "Diagnostic Testing NYC", href: ROUTES.diagnostics }],
    },
    {
      type: "p",
      text: "Testing should be based on the patient's symptoms and clinical circumstances rather than performed automatically during every sick visit.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.diagnostics,
      alt: "Diagnostic testing available with same-day primary care at Umbrella Health NYC",
    },
    {
      type: "cta",
      prompt: "Need evaluation and diagnostic testing in one care setting?",
      label: "Explore Diagnostic Testing at Umbrella Health →",
      href: ROUTES.diagnostics,
    },

    {
      type: "h2",
      heading: "How Is Same-Day Primary Care Different From an Emergency Room?",
    },
    {
      type: "p",
      text: "The right setting depends on how serious your symptoms are.",
    },
    {
      type: "p",
      text: "Same-day primary care may be appropriate for certain acute illnesses that need prompt evaluation but are not emergencies.",
    },
    {
      type: "p",
      text: "An emergency department is designed for potentially life-threatening conditions or situations requiring immediate emergency treatment.",
    },
    {
      type: "p",
      text: "Emergency warning signs can include difficulty breathing, persistent chest pain or pressure, severe confusion, inability to stay awake, seizures, or severe worsening symptoms. The CDC advises seeking emergency medical care immediately when serious warning signs are present.",
      links: [{ label: "CDC", href: CDC_EMERGENCY_CARE_URL }],
    },

    {
      type: "h2",
      heading: "When Should You Seek Emergency Care?",
    },
    {
      type: "p",
      text: "Do not wait for a same-day primary care appointment if you are experiencing a medical emergency.",
    },
    {
      type: "p",
      text: "Seek emergency care for symptoms such as:",
    },
    {
      type: "ul",
      items: [
        "Significant difficulty breathing",
        "Persistent chest pain or pressure",
        "Severe confusion or inability to stay awake",
        "Seizures",
        "Severe weakness or rapidly worsening symptoms",
        "Other symptoms that appear life-threatening",
      ],
    },
    {
      type: "p",
      text: "This is not a complete list. The severity and combination of symptoms matter, and emergency warning signs can vary by illness.",
    },

    {
      type: "h2",
      heading: "Can Same-Day Visits Help With Chronic Conditions?",
    },
    {
      type: "p",
      text: "Same-day care can also be relevant when someone with an existing condition develops a new or worsening symptom.",
    },
    {
      type: "p",
      text: "For example, a patient who already has asthma, diabetes, hypertension, or another chronic condition may need prompt evaluation when symptoms change.",
    },
    {
      type: "p",
      text: "However, acute visits should not replace planned long-term management.",
    },
    {
      type: "p",
      text: "For ongoing care, Primary Care NYC can provide a consistent point of contact for preventive care, chronic disease monitoring, medication management, and follow-up.",
      links: [{ label: "Primary Care NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "You can also read Managing Chronic Conditions Without the Runaround for more information about ongoing primary care.",
      links: [
        {
          label: "Managing Chronic Conditions Without the Runaround",
          href: BLOG_PATHS.chronicConditions,
        },
      ],
    },

    {
      type: "h2",
      heading: "Where Are Same-Day Sick Visits Available in Lower Manhattan?",
    },
    {
      type: "p",
      text: "Umbrella Health is located at:",
    },
    {
      type: "ul",
      items: ["32 West 14th Street", "New York, NY 10011"],
    },
    {
      type: "p",
      text: "The practice is conveniently positioned near Union Square, Greenwich Village, Chelsea, SoHo, the West Village, and the Flatiron District, making it accessible for patients who live or work in Lower Manhattan.",
    },
    {
      type: "p",
      text: "The goal is to make primary care easier to access when an unexpected health concern comes up.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.acceptingNewPatients,
      alt: "Umbrella Health Lower Manhattan location for same-day primary care near Union Square",
    },
    {
      type: "cta",
      prompt: "Looking for a primary care practice near Union Square or Lower Manhattan?",
      label: "Learn more about Umbrella Health Primary Care →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "Is Telehealth Available for Same-Day Sick Concerns?",
    },
    {
      type: "p",
      text: "Telehealth may be appropriate for some health concerns when an in-person examination is not necessary.",
    },
    {
      type: "p",
      text: "Umbrella Health currently states that established patients may use telehealth across New York State for select follow-ups and acute concerns, depending on the situation.",
    },
    {
      type: "p",
      text: "Whether telehealth is appropriate depends on the symptoms, medical history, and type of evaluation needed.",
    },

    {
      type: "h2",
      heading: "How Should You Prepare for a Same-Day Sick Visit?",
    },
    {
      type: "p",
      text: "Before your appointment, it can help to have the following information available:",
    },
    {
      type: "ul",
      items: [
        "When your symptoms started",
        "Whether they are getting better or worse",
        "Current medications",
        "Known allergies",
        "Relevant medical conditions",
        "Recent test results, when available",
        "Your temperature or other measurements if you have taken them",
        "Any specific questions you want to ask",
      ],
    },
    {
      type: "p",
      text: "Being prepared can help your physician understand your symptoms and decide whether additional testing or follow-up is needed.",
    },

    {
      type: "h2",
      heading: "What Happens After a Same-Day Sick Visit?",
    },
    {
      type: "p",
      text: "Your care may end with treatment and home-care instructions, or your doctor may recommend additional evaluation.",
    },
    {
      type: "p",
      text: "Depending on the situation, follow-up could include:",
    },
    {
      type: "ul",
      items: [
        "Additional laboratory testing",
        "Diagnostic evaluation",
        "Medication management",
        "A follow-up primary care appointment",
        "Monitoring of symptoms",
        "Referral to a specialist when appropriate",
      ],
    },
    {
      type: "p",
      text: "If your symptoms point to a condition requiring specialty evaluation, primary care can serve as the starting point for coordinated care.",
    },
    {
      type: "p",
      text: "Umbrella Health connects primary care with specialties including Cardiology & Vascular Medicine, Neurology, Sleep Medicine, and Interventional Pain Management.",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management →", href: ROUTES.painManagement },
      ],
    },

    {
      type: "h2",
      heading: "What Should You Look for in a Same-Day Primary Care Practice?",
    },
    {
      type: "p",
      text: "When comparing practices, look beyond whether they advertise same-day appointments.",
    },
    {
      type: "p",
      text: "Consider:",
    },
    {
      type: "ul",
      items: [
        "Whether appointments are available when you need them",
        "Whether the physician provides ongoing primary care",
        "Whether the office is conveniently located",
        "Whether appropriate diagnostic testing is accessible",
        "Whether follow-up care is available",
        "Whether the practice accepts your insurance",
        "Whether specialists are available when additional care is needed",
      ],
    },
    {
      type: "p",
      text: "This helps connect same-day care with the larger goal of maintaining a consistent primary care relationship.",
    },
    {
      type: "p",
      text: "For more guidance, read How to Choose a Primary Care Doctor in NYC.",
      links: [
        {
          label: "How to Choose a Primary Care Doctor in NYC",
          href: BLOG_PATHS.choosePrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "Same-Day Sick Visit Checklist",
    },
    {
      type: "p",
      text: "Use this simple checklist before, during, and after your visit:",
    },
    {
      type: "h3",
      heading: "Before Your Visit",
    },
    {
      type: "ul",
      items: [
        "Note when symptoms began",
        "List medications",
        "Know your allergies",
        "Bring relevant records",
        "Note any worsening symptoms",
      ],
    },
    {
      type: "h3",
      heading: "During Your Visit",
    },
    {
      type: "ul",
      items: [
        "Describe symptoms clearly",
        "Review medical history",
        "Discuss testing needs",
        "Ask questions",
        "Discuss next steps",
      ],
    },
    {
      type: "h3",
      heading: "After Your Visit",
    },
    {
      type: "ul",
      items: [
        "Follow treatment instructions",
        "Complete recommended testing",
        "Monitor symptoms",
        "Schedule follow-up if needed",
        "Seek urgent/emergency care if symptoms worsen",
      ],
    },

    {
      type: "h2",
      heading: "Need a Same-Day Sick Visit in Lower Manhattan?",
    },
    {
      type: "p",
      text: "When a new illness or non-emergency health concern cannot wait for a routine appointment, same-day primary care may provide a practical option.",
    },
    {
      type: "p",
      text: "Umbrella Health provides primary care from 32 West 14th Street in Lower Manhattan, with access to diagnostic testing and multiple medical specialties when additional evaluation is appropriate.",
    },
    {
      type: "ctaBox",
      title: "Need to be seen for a non-emergency illness or new symptom?",
      body: "Book a same-day primary care appointment with Umbrella Health when availability allows, or call the office if you are unsure whether your concern is urgent.",
      links: [
        { label: "Book a Same-Day Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet the Umbrella Health Physicians →", href: ROUTES.ourTeam },
      ],
    },
    { type: "clinicFooter" },
  ],
};
