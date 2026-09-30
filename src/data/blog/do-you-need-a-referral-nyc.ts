import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const HEALTHCARE_GOV_REFERRAL_URL = "https://www.healthcare.gov/glossary/referral/";
const HEALTHCARE_GOV_PLAN_TYPES_URL = "https://www.healthcare.gov/choose-a-plan/plan-types/";
const HEALTHCARE_GOV_HMO_URL =
  "https://www.healthcare.gov/glossary/health-maintenance-organization-hmo/";
const HEALTHCARE_GOV_PPO_URL =
  "https://www.healthcare.gov/glossary/preferred-provider-organization-ppo/";
const HEALTHCARE_GOV_EPO_URL =
  "https://www.healthcare.gov/glossary/exclusive-provider-organization-epo-plan/";
const HEALTHCARE_GOV_PREAUTH_URL = "https://www.healthcare.gov/glossary/preauthorization/";
const MEDICARE_COMPARE_URL =
  "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/your-coverage-options/compare-original-medicare-medicare-advantage";

export const referralNycPost: BlogPost = {
  slug: BLOG_SLUGS.referralNyc,
  title: "Do You Need a Referral to See a Primary Care Doctor or Specialist in NYC?",
  subtitle:
    "How HMO, PPO and Medicare referral rules work, how referrals differ from prior authorization, and how primary care can help.",
  excerpt:
    "Do you need a referral to see a specialist in NYC? Learn how HMO, PPO and Medicare rules work and how a primary care doctor helps. Book at Umbrella Health.",
  seoTitle: "Do You Need a Referral to See a Specialist in NYC?",
  metaDescription:
    "Do you need a referral to see a specialist in NYC? Learn how HMO, PPO and Medicare rules work and how a primary care doctor helps. Book at Umbrella Health.",
  focusKeyword: "do you need a referral to see a specialist",
  category: "Insurance & Access",
  readTime: "12 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.referralNyc,
  imageAlt: "Patient checking insurance referral requirements at a primary care front desk in NYC",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "You generally do not need a referral to see a primary care doctor. Whether you need one to see a specialist depends mostly on your insurance plan. HMO plans and some other managed care plans often require a referral from your primary care doctor, while many PPO plans let you book a specialist directly. Always check your plan's rules, because seeing a specialist without a required referral may mean the visit is not covered.",
    },
    {
      type: "p",
      text: "Referrals are one of the most common sources of frustration in New York healthcare. The good news is that the rules usually come down to a few questions about your plan. Here is how referrals work, how they differ from prior authorization, and how a primary care doctor in NYC can make the process smoother.",
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Not sure whether your plan needs a referral?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "What Is a Referral?",
    },
    {
      type: "p",
      text: "According to HealthCare.gov, a referral is a written order from your primary care doctor for you to see a specialist or get certain medical services. In many managed care plans, you need the referral before the visit for the plan to pay for it.",
      links: [{ label: "HealthCare.gov", href: HEALTHCARE_GOV_REFERRAL_URL }],
    },
    {
      type: "p",
      text: "A referral usually includes:",
    },
    {
      type: "ul",
      items: [
        "Your information and insurance details",
        "The specialist or type of specialty you are being referred to",
        "The reason for the referral",
        "Sometimes, a limit on the number of visits or a time window",
      ],
    },

    {
      type: "h2",
      heading: "Do You Need a Referral to See a Primary Care Doctor?",
    },
    {
      type: "p",
      text: "In most cases, no. You can usually book directly with an in-network primary care doctor. Some plans ask you to choose, or assign you, a primary care provider (PCP) on file, so check that the doctor you want is listed on your plan or update your selection before your visit. If you are still looking, our guides on how to choose a primary care doctor in NYC and how to find a primary care doctor accepting new patients walk through the process.",
      links: [
        {
          label: "how to choose a primary care doctor in NYC",
          href: BLOG_PATHS.choosePrimaryCare,
        },
        {
          label: "how to find a primary care doctor accepting new patients",
          href: BLOG_PATHS.acceptingNewPatients,
        },
      ],
    },

    {
      type: "h2",
      heading: "When Do You Need a Referral to See a Specialist?",
    },
    {
      type: "table",
      headers: ["Plan type", "Referral usually needed for specialists?"],
      rows: [
        ["HMO (health maintenance organization)", "Often yes, from your PCP"],
        ["PPO (preferred provider organization)", "Usually no"],
        ["EPO (exclusive provider organization)", "Varies by plan"],
        ["POS (point of service)", "Often yes"],
      ],
      note: "These are general patterns, not rules for every plan.",
    },
    {
      type: "p",
      text: "The main factor is your plan type. HealthCare.gov explains the common plan types, including HMO (health maintenance organization), PPO (preferred provider organization) and EPO (exclusive provider organization). These are general patterns, not rules for every plan. Employer plans, Medicaid managed care plans and Medicare Advantage plans can each set their own requirements.",
      links: [
        { label: "plan types", href: HEALTHCARE_GOV_PLAN_TYPES_URL },
        { label: "HMO (health maintenance organization)", href: HEALTHCARE_GOV_HMO_URL },
        { label: "PPO (preferred provider organization)", href: HEALTHCARE_GOV_PPO_URL },
        { label: "EPO (exclusive provider organization)", href: HEALTHCARE_GOV_EPO_URL },
      ],
    },

    {
      type: "h3",
      heading: "What About Medicare?",
    },
    {
      type: "p",
      text: "Medicare.gov notes that with Original Medicare you generally do not need a referral to see a specialist, while Medicare Advantage plans may require one. Check your specific plan documents.",
      links: [{ label: "Medicare.gov notes", href: MEDICARE_COMPARE_URL }],
    },

    {
      type: "h2",
      heading: "Referral vs. Prior Authorization: What's the Difference?",
    },
    {
      type: "p",
      text: "These terms are often confused:",
    },
    {
      type: "ul",
      items: [
        "A referral comes from your doctor and says you should see a specialist.",
        "Prior authorization (also called preauthorization or precertification) is approval from your insurance plan before certain services, tests, procedures or medicines are covered.",
      ],
    },
    {
      type: "p",
      text: "You might need one, both or neither. For example, a plan might require a referral to see a specialist and a separate prior authorization for an imaging test that specialist orders.",
      links: [{ label: "Prior authorization", href: HEALTHCARE_GOV_PREAUTH_URL }],
    },
    {
      type: "diagram",
      variant: "process",
      alt: "Flowchart showing how a primary care referral to a specialist works",
      steps: [
        "Primary care visit",
        "Referral when your plan requires it",
        "Specialist visit and follow-up",
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.referralFlow,
      alt: "Flowchart showing how a primary care referral to a specialist works",
    },
    {
      type: "cta",
      prompt: "Not sure whether your plan needs a referral?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE}. Umbrella Health's insurance page says the team verifies benefits before your visit.`,
      links: [{ label: "insurance page", href: ROUTES.insurance }],
    },

    {
      type: "h2",
      heading: "How to Get a Referral from Your Primary Care Doctor",
    },
    {
      type: "ul",
      items: [
        "Check your plan. Look at your member handbook, insurer app or the back of your card, or call member services.",
        "See your primary care doctor. Most plans require that the PCP evaluate the problem first. That visit may also answer your question without a specialist.",
        "Confirm the specialist is in network. A referral does not guarantee coverage if the specialist is out of network.",
        "Ask about timing. Some referrals expire or cover a set number of visits.",
        "Bring records. Recent test results and a list of medicines help the specialist.",
      ],
    },

    {
      type: "h2",
      heading: "Why a Primary Care Doctor Is Still Valuable, Even with a PPO",
    },
    {
      type: "p",
      text: "Even when you can self-refer, starting with primary care can help. Your primary care doctor can:",
    },
    {
      type: "ul",
      items: [
        "Help decide which specialty you actually need",
        "Order first-line tests, so the specialist visit is more productive",
        "Keep your medicines and results in one place",
        "Follow up after the specialist visit",
      ],
    },
    {
      type: "p",
      text: "See blood tests included in a primary care checkup for common labs, and managing chronic conditions for how coordinated care helps people with issues such as high blood pressure or diabetes.",
      links: [
        {
          label: "blood tests included in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
        {
          label: "managing chronic conditions",
          href: BLOG_PATHS.chronicConditions,
        },
      ],
    },

    {
      type: "h2",
      heading: "Common Reasons Primary Care Refers to Specialists",
    },
    {
      type: "ul",
      items: [
        "Heart and blood pressure concerns may lead to Cardiology & Vascular Medicine.",
        "Headaches, numbness or memory concerns may lead to Neurology.",
        "Snoring, poor sleep or daytime sleepiness may lead to Sleep Medicine.",
        "Ongoing back, neck or joint pain may lead to Interventional Pain Management.",
      ],
    },
    {
      type: "p",
      text: "See our guide to primary care for high blood pressure and our article on when a headache should be evaluated for related warning signs. Umbrella Health offers these specialties within the same practice, and its Primary Care NYC page lists specialist referrals and coordinated care among its services. Ask the office whether you can book Umbrella Health specialists directly and how HMO referrals are submitted.",
      links: [
        { label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology },
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
        { label: "Neurology", href: ROUTES.neurology },
        {
          label: "when a headache should be evaluated",
          href: BLOG_PATHS.headacheWhenToSeeDoctor,
        },
        { label: "Sleep Medicine", href: ROUTES.sleepMedicine },
        { label: "Interventional Pain Management", href: ROUTES.painManagement },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
      ],
    },

    {
      type: "h2",
      heading: "What to Bring to a Specialist Appointment",
    },
    {
      type: "p",
      text: "A little preparation helps a referral turn into a useful visit:",
    },
    {
      type: "ul",
      items: [
        "Your insurance card and photo ID",
        "The referral number or paperwork, if your plan uses one",
        "A current list of medicines, doses and supplements",
        "Recent lab results, imaging reports or ECGs",
        "A short timeline of your symptoms and what you have already tried",
        "Questions you want answered before you leave",
      ],
    },
    {
      type: "p",
      text: "After the visit, ask how the specialist's findings will be shared with your primary care doctor. Closing that loop is what keeps your care connected.",
    },

    {
      type: "h2",
      heading: "Referrals and Specialist Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. Having primary care and several specialties in one location can reduce back-and-forth between offices. You can learn more about the physicians on the Our Team page.",
      links: [{ label: "Our Team page", href: ROUTES.ourTeam }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for primary care referrals and specialist care in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about specialist referrals, HMO and PPO rules, and prior authorization in NYC.",
      items: [
        {
          q: "Can I See a Specialist Without a Referral in New York?",
          a: "Often yes if you have a PPO or Original Medicare, but many HMO and managed care plans require a referral. Check your plan before booking to avoid unexpected costs.",
        },
        {
          q: "How Long Is a Referral Good For?",
          a: "It depends on your plan. Some referrals are valid for a set time or number of visits. Ask your insurer or your doctor's office.",
        },
        {
          q: "Does a Referral Mean My Insurance Will Cover the Visit?",
          a: "Not necessarily. The specialist must usually be in network, and some services also need prior authorization.",
        },
        {
          q: "Can I Get a Referral Without Seeing My Doctor?",
          a: "Some plans and practices allow this for established patients, but many require a visit first so the doctor can evaluate the problem.",
        },
        {
          q: "What If My Referral Is Denied?",
          a: "Ask your doctor's office and insurer why. You may be able to provide more information, choose a different in-network specialist or file an appeal.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Start with Primary Care",
    },
    {
      type: "p",
      text: "If you are unsure whether you need a referral, a primary care visit is a sensible first step. Visit Umbrella Health's home page, explore Primary Care NYC, or book online.",
      links: [
        { label: "Umbrella Health's home page", href: ROUTES.home },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "book online", href: BOOKING_URL },
      ],
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    },
    {
      type: "ctaBox",
      title: "Need help navigating a specialist referral?",
      body: "Book a primary care appointment at Umbrella Health in Lower Manhattan. The team can help verify benefits and coordinate specialty care.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Check Insurance →", href: ROUTES.insurance },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
