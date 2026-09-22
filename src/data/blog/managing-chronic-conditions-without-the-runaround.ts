import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const USPSTF_URL = "https://www.uspreventiveservicestaskforce.org/uspstf/";
const CDC_CHRONIC_DISEASE_URL = "https://www.cdc.gov/chronic-disease/about/index.html";
const ADA_STANDARDS_URL = "https://diabetesjournals.org/care/issue/49/Supplement_1";
const AHA_BP_MEDICATION_URL =
  "https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/types-of-blood-pressure-medications";

export const chronicConditionsPost: BlogPost = {
  slug: BLOG_SLUGS.chronicConditions,
  title: "Managing Chronic Conditions Without the Runaround",
  subtitle:
    "Learn how primary care helps manage chronic conditions like hypertension, diabetes, and high cholesterol with monitoring, testing, treatment, and follow-up.",
  excerpt:
    "Learn how primary care helps manage chronic conditions like hypertension, diabetes, and high cholesterol with monitoring, testing, treatment, and follow-up.",
  seoTitle: "Chronic Disease Management in NYC | Umbrella Health",
  metaDescription:
    "Learn how primary care helps manage chronic conditions like hypertension, diabetes, and high cholesterol with monitoring, testing, treatment, and follow-up.",
  focusKeyword: "chronic disease management in NYC",
  category: "Chronic Care",
  readTime: "12 min read",
  publishedAt: "2026-05-10",
  image: BLOG_IMAGES.chronicConditions,
  imageAlt: "Laboratory testing for chronic disease management at Umbrella Health",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "Managing a chronic condition is rarely about a single appointment. Conditions such as high blood pressure, type 2 diabetes, high cholesterol, asthma, and thyroid disorders often require ongoing monitoring, medication review, lifestyle changes, preventive care, and follow-up over time.",
    },
    {
      type: "p",
      text: "That is why chronic disease management in NYC is an important part of primary care. A primary care physician can help track changes in your health, review relevant test results, address new concerns, and coordinate additional care when needed.",
      links: [{ label: "primary care", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "The goal is not simply to treat a diagnosis. It is to create a consistent plan for managing your health over time.",
    },
    {
      type: "cta",
      prompt: "Looking for ongoing medical care in Lower Manhattan?",
      label: "Explore Primary Care NYC at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Is Chronic Disease Management?",
    },
    {
      type: "p",
      text: "Chronic disease management is the ongoing process of monitoring and treating a health condition over time.",
    },
    {
      type: "p",
      text: "Depending on the condition, management may involve:",
    },
    {
      type: "ul",
      items: [
        "Regular medical visits",
        "Monitoring symptoms and health measurements",
        "Laboratory testing",
        "Medication management",
        "Lifestyle and nutrition counseling",
        "Preventive care",
        "Risk-factor management",
        "Follow-up after treatment changes",
        "Coordination with specialists",
      ],
    },
    {
      type: "p",
      text: "The specific approach depends on the condition and the individual patient's medical history.",
    },
    {
      type: "p",
      text: "The CDC recommends regular medical care and following an individualized treatment plan for people living with chronic conditions. Some treatment plans may also involve monitoring health measurements such as blood pressure or blood sugar at home.",
      links: [{ label: "CDC", href: CDC_CHRONIC_DISEASE_URL }],
    },

    {
      type: "h2",
      heading: "Which Chronic Conditions Can Primary Care Help Manage?",
    },
    {
      type: "p",
      text: "Primary care physicians commonly help patients monitor and manage a range of chronic health concerns.",
    },
    {
      type: "p",
      text: "These may include:",
    },

    {
      type: "h3",
      heading: "High Blood Pressure",
    },
    {
      type: "p",
      text: "High blood pressure often has no noticeable symptoms, which makes regular measurement important.",
    },
    {
      type: "p",
      text: "For adults, the U.S. Preventive Services Task Force recommends screening for hypertension. When an elevated reading suggests possible hypertension, measurements outside the clinical setting can be used to help confirm the diagnosis before treatment begins.",
      links: [{ label: "U.S. Preventive Services Task Force", href: USPSTF_URL }],
    },
    {
      type: "p",
      text: "Ongoing management may involve blood-pressure monitoring, lifestyle changes, medications when appropriate, and follow-up with your physician.",
    },
    {
      type: "cta",
      prompt: "Have you been diagnosed with hypertension or had repeatedly elevated readings?",
      label: "Learn more about Primary Care at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h3",
      heading: "Type 2 Diabetes",
    },
    {
      type: "p",
      text: "Diabetes management involves monitoring blood glucose and addressing factors that affect long-term health.",
    },
    {
      type: "p",
      text: "The American Diabetes Association's 2026 Standards of Care identify A1C as a primary tool for assessing glycemic status and recommend assessing glycemic status at least twice a year, with more frequent assessment for patients who are not meeting treatment goals or whose treatment has recently changed.",
      links: [
        {
          label: "American Diabetes Association's 2026 Standards of Care",
          href: ADA_STANDARDS_URL,
        },
      ],
    },
    {
      type: "p",
      text: "Primary care may play an important role in coordinating these measurements, medication management, preventive care, and lifestyle changes.",
    },

    {
      type: "h3",
      heading: "High Cholesterol",
    },
    {
      type: "p",
      text: "Cholesterol is one of several factors that can contribute to cardiovascular risk.",
    },
    {
      type: "p",
      text: "Your physician may review your lipid profile together with other factors such as blood pressure, diabetes, smoking, family history, and overall cardiovascular risk when developing a care plan.",
    },
    {
      type: "p",
      text: "For patients who need cardiovascular evaluation, Umbrella Health also provides Cardiology & Vascular Medicine.",
      links: [{ label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.cardiology,
      alt: "Cardiovascular evaluation as part of chronic disease management at Umbrella Health NYC",
    },

    {
      type: "h3",
      heading: "Asthma and Other Long-Term Conditions",
    },
    {
      type: "p",
      text: "Primary care may also help with the ongoing management of conditions such as asthma, thyroid disorders, and other chronic illnesses.",
    },
    {
      type: "p",
      text: "The type and frequency of follow-up will depend on the specific condition, symptom control, medications, and whether specialist care is needed.",
    },

    {
      type: "h2",
      heading: "Why Does Continuity of Care Matter for Chronic Conditions?",
    },
    {
      type: "p",
      text: "Chronic conditions change over time.",
    },
    {
      type: "p",
      text: "A medication that worked well previously may need to be reassessed. A laboratory value may change. New symptoms may appear. Your risk factors may also change as your lifestyle, age, or other health conditions change.",
    },
    {
      type: "p",
      text: "Having an ongoing relationship with a primary care physician allows your doctor to consider those changes in context rather than evaluating every visit as an isolated event.",
    },
    {
      type: "p",
      text: "That can include reviewing:",
    },
    {
      type: "ul",
      items: [
        "Previous diagnoses",
        "Medication history",
        "Blood pressure readings",
        "Laboratory results",
        "Weight and metabolic measurements",
        "Previous treatment responses",
        "Family and personal health history",
        "New or changing symptoms",
      ],
    },
    {
      type: "p",
      text: "For patients establishing care for the first time, our guide on how to choose a primary care doctor in NYC covers important factors such as physician credentials, access, location, insurance, diagnostics, and continuity.",
      links: [
        {
          label: "how to choose a primary care doctor in NYC",
          href: BLOG_PATHS.choosePrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Role Do Lab Tests Play in Chronic Disease Management?",
    },
    {
      type: "p",
      text: "Laboratory testing can provide objective information that helps physicians monitor certain conditions and evaluate treatment.",
    },
    {
      type: "p",
      text: "Depending on the patient's situation, testing may include:",
    },
    {
      type: "ul",
      items: [
        "A1C",
        "Blood glucose",
        "Lipid testing",
        "Complete blood count",
        "Metabolic panels",
        "Kidney or liver function tests",
        "Thyroid testing",
        "Other condition-specific laboratory tests",
      ],
    },
    {
      type: "p",
      text: "Not every patient needs every test, and testing frequency should be based on the medical condition and clinical circumstances.",
    },
    {
      type: "p",
      text: "Umbrella Health provides Diagnostic Testing NYC services that can support primary care evaluation and ongoing monitoring.",
      links: [{ label: "Diagnostic Testing NYC", href: ROUTES.diagnostics }],
    },

    {
      type: "h2",
      heading: "Why Is Timely Review of Test Results Important?",
    },
    {
      type: "p",
      text: "Test results are most useful when they are interpreted alongside your symptoms, medical history, medications, and previous results.",
    },
    {
      type: "p",
      text: "Your physician may compare current and previous measurements to identify trends and determine whether additional monitoring, treatment changes, or further evaluation are appropriate.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.diagnostics,
      alt: "Diagnostic laboratory testing for chronic care monitoring at Umbrella Health NYC",
    },
    {
      type: "cta",
      prompt: "Need diagnostic testing as part of ongoing medical care?",
      label: "Explore Diagnostic Testing at Umbrella Health →",
      href: ROUTES.diagnostics,
    },

    {
      type: "h2",
      heading: "How Often Should You See a Doctor for a Chronic Condition?",
    },
    {
      type: "p",
      text: "There is no single schedule that applies to every chronic condition.",
    },
    {
      type: "p",
      text: "Your follow-up frequency may depend on:",
    },
    {
      type: "ul",
      items: [
        "The type of condition",
        "How well it is controlled",
        "Current medications",
        "Recent treatment changes",
        "Laboratory results",
        "New or worsening symptoms",
        "Other health conditions",
        "Your physician's treatment plan",
      ],
    },
    {
      type: "p",
      text: "Patients with diabetes, for example, may need glycemic monitoring at different intervals depending on whether they are meeting their treatment goals and whether their treatment has changed.",
    },
    {
      type: "p",
      text: "For general guidance on primary-care visit frequency, read How Often Should You See a Primary Care Doctor?.",
      links: [
        {
          label: "How Often Should You See a Primary Care Doctor?",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h2",
      heading: "Can Primary Care Manage More Than One Chronic Condition?",
    },
    {
      type: "p",
      text: "Yes. Many patients have more than one ongoing health concern.",
    },
    {
      type: "p",
      text: "For example, a patient may have:",
    },
    {
      type: "ul",
      items: ["High blood pressure + high cholesterol + diabetes"],
    },
    {
      type: "p",
      text: "These conditions can overlap in terms of cardiovascular and metabolic risk, medications, monitoring, and lifestyle factors.",
    },
    {
      type: "p",
      text: "A primary care physician can help coordinate the overall picture rather than addressing each diagnosis completely separately.",
    },
    {
      type: "p",
      text: "This is one reason a consistent primary care relationship can be useful for patients with multiple ongoing conditions.",
    },
    {
      type: "cta",
      prompt: "Managing more than one health condition?",
      label: "Establish Ongoing Primary Care in NYC →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "When Should You See a Specialist?",
    },
    {
      type: "p",
      text: "Primary care does not replace specialty care when a specialist is appropriate.",
    },
    {
      type: "p",
      text: "Depending on your condition, your primary care physician may coordinate care with another medical specialty.",
    },

    {
      type: "h3",
      heading: "Cardiology",
    },
    {
      type: "p",
      text: "Patients with cardiovascular conditions or risk factors may need evaluation by a cardiologist.",
    },
    {
      type: "p",
      text: "Umbrella Health provides Cardiology & Vascular Medicine in NYC.",
      links: [{ label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology }],
    },

    {
      type: "h3",
      heading: "Neurology",
    },
    {
      type: "p",
      text: "Certain neurological conditions and symptoms, including neuropathy and other neurological concerns, may require specialist evaluation.",
    },
    {
      type: "cta",
      label: "Neurology at Umbrella Health →",
      href: ROUTES.neurology,
    },

    {
      type: "h3",
      heading: "Sleep Medicine",
    },
    {
      type: "p",
      text: "Sleep disorders may affect overall health and may require dedicated evaluation and treatment.",
    },
    {
      type: "cta",
      label: "Sleep Medicine in NYC →",
      href: ROUTES.sleepMedicine,
    },

    {
      type: "h3",
      heading: "Medical Weight Loss",
    },
    {
      type: "p",
      text: "Weight and metabolic health can also be part of chronic-condition management.",
    },
    {
      type: "p",
      text: "For patients who need physician-guided weight management, Umbrella Health offers Medical Weight Loss NYC.",
      links: [{ label: "Medical Weight Loss NYC", href: ROUTES.medicalWeightLoss }],
    },
    {
      type: "p",
      text: "The appropriate specialty depends on the patient's diagnosis, symptoms, risk factors, and treatment needs.",
    },

    {
      type: "h2",
      heading: "Why Coordinated Care Can Make Chronic Disease Management Easier",
    },
    {
      type: "p",
      text: "Chronic disease management may involve more than one type of healthcare service.",
    },
    {
      type: "p",
      text: "A patient might need:",
    },
    {
      type: "process",
      alt: "Primary care to laboratory testing to medication management to specialist evaluation to follow-up",
      steps: ["Primary care", "Laboratory testing", "Specialist follow-up"],
    },
    {
      type: "p",
      text: "When these parts of care are coordinated, your physicians can work from the relevant clinical information rather than treating each appointment as completely separate.",
    },
    {
      type: "p",
      text: "Umbrella Health brings primary care, specialty medicine, diagnostic testing, and preventive health services together in Lower Manhattan.",
    },
    {
      type: "ctaGroup",
      links: [
        { label: "Cardiology & Vascular Medicine →", href: ROUTES.cardiology },
        { label: "Neurology →", href: ROUTES.neurology },
        { label: "Sleep Medicine →", href: ROUTES.sleepMedicine },
        { label: "Medical Weight Loss NYC →", href: ROUTES.medicalWeightLoss },
        { label: "Diagnostic Testing NYC →", href: ROUTES.diagnostics },
      ],
    },

    {
      type: "h2",
      heading: "What Can You Do Between Chronic Care Visits?",
    },
    {
      type: "p",
      text: "Your healthcare does not stop between appointments.",
    },
    {
      type: "p",
      text: "Depending on your treatment plan, your physician may recommend that you:",
    },
    {
      type: "ul",
      items: [
        "Take medications as prescribed",
        "Monitor blood pressure or blood glucose when instructed",
        "Follow nutrition recommendations",
        "Stay physically active within your medical limitations",
        "Avoid or stop tobacco use",
        "Keep scheduled appointments",
        "Complete recommended laboratory testing",
        "Report significant changes in symptoms",
      ],
    },
    {
      type: "p",
      text: "The CDC emphasizes following the treatment plan agreed upon with your healthcare team and asking questions when you are unsure about medications or other parts of your care.",
      links: [{ label: "CDC", href: CDC_CHRONIC_DISEASE_URL }],
    },
    {
      type: "p",
      text: "Do not independently change or stop prescribed medication based only on home readings or symptoms without discussing it with your healthcare professional. The American Heart Association specifically advises people with hypertension not to stop blood-pressure medication without consulting their healthcare professional.",
      links: [{ label: "American Heart Association", href: AHA_BP_MEDICATION_URL }],
    },

    {
      type: "h2",
      heading: "What Should You Bring to a Chronic Care Appointment?",
    },
    {
      type: "p",
      text: "A little preparation can make a follow-up visit more useful.",
    },
    {
      type: "p",
      text: "Consider bringing:",
    },
    {
      type: "ul",
      items: [
        "Current medication list",
        "Home blood-pressure or blood-glucose readings when relevant",
        "Recent laboratory results",
        "List of symptoms or changes since your last visit",
        "Questions about medications",
        "Information about side effects",
        "Relevant records from other physicians",
      ],
    },
    {
      type: "p",
      text: "For patients seeing multiple specialists, keeping an updated medication list is particularly useful.",
    },

    {
      type: "h2",
      heading: "What Happens If Your Condition Is Not Well Controlled?",
    },
    {
      type: "p",
      text: "If a chronic condition is not meeting treatment goals, your physician may reassess the situation.",
    },
    {
      type: "p",
      text: "Depending on the condition, this could involve:",
    },
    {
      type: "ul",
      items: [
        "Reviewing medication adherence",
        "Adjusting treatment",
        "Repeating laboratory testing",
        "Reviewing lifestyle factors",
        "Evaluating new symptoms",
        "Looking for contributing conditions",
        "Coordinating specialist care",
        "Scheduling closer follow-up",
      ],
    },
    {
      type: "p",
      text: "For example, the ADA recommends more frequent glycemic assessment for people with diabetes who are not meeting their goals or who have recently changed treatment.",
      links: [{ label: "ADA", href: ADA_STANDARDS_URL }],
    },
    {
      type: "p",
      text: "The appropriate next step depends on the individual patient's circumstances.",
    },

    {
      type: "h2",
      heading: "How Chronic Disease Management Fits Into Primary Care",
    },
    {
      type: "p",
      text: "Chronic disease management is one part of a broader primary care relationship.",
    },
    {
      type: "p",
      text: "A primary care physician may also help coordinate:",
    },
    {
      type: "ul",
      items: [
        "Annual physicals",
        "Preventive screenings",
        "Vaccinations",
        "Acute sick visits",
        "Medication management",
        "Laboratory testing",
        "Lifestyle counseling",
        "Specialist referrals",
        "Long-term follow-up",
      ],
    },
    {
      type: "p",
      text: "You can learn more about what primary care is and what a primary care doctor does.",
      links: [
        {
          label: "what primary care is and what a primary care doctor does",
          href: BLOG_PATHS.whatIsPrimaryCare,
        },
      ],
    },

    {
      type: "h2",
      heading: "Chronic Disease Management Checklist",
    },
    {
      type: "p",
      text: "When choosing a practice for ongoing care, consider whether it provides:",
    },
    {
      type: "table",
      headers: ["Factor", "What to Look For"],
      rows: [
        ["Continuity", "Ongoing access to a primary care physician"],
        ["Monitoring", "Appropriate follow-up of your condition"],
        ["Diagnostics", "Access to relevant laboratory or diagnostic testing"],
        ["Medication management", "Medication review and treatment adjustments"],
        ["Prevention", "Screening, vaccinations, and risk-factor management"],
        ["Coordination", "Ability to work with specialists when needed"],
        ["Accessibility", "Convenient appointments and follow-up"],
        ["Location", "A practice that is practical to reach regularly"],
      ],
    },

    {
      type: "h2",
      heading: "Chronic Disease Management in Lower Manhattan",
    },
    {
      type: "p",
      text: "For patients living or working in Lower Manhattan, having a convenient primary care practice can make ongoing healthcare easier to maintain.",
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
      text: "The practice serves patients in and around Union Square, Greenwich Village, Chelsea, Flatiron, SoHo, NoHo, Gramercy, the West Village, and the East Village, with primary care connected to diagnostic and specialty services.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for chronic disease management in Lower Manhattan NYC",
    },
    {
      type: "cta",
      prompt: "Looking for coordinated chronic care in Lower Manhattan?",
      label: "Explore Primary Care NYC at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "Ready to Establish Ongoing Primary Care?",
    },
    {
      type: "p",
      text: "Managing a chronic condition is easier when there is a consistent plan for monitoring, treatment, preventive care, and follow-up.",
    },
    {
      type: "p",
      text: "Umbrella Health provides primary care in Lower Manhattan with access to diagnostic testing and multiple specialties when additional evaluation is appropriate.",
    },
    {
      type: "ctaBox",
      title: "Ready to establish ongoing care for a chronic condition?",
      body: "Book a primary care appointment with Umbrella Health and meet the physicians who provide coordinated chronic care.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Meet the Umbrella Health Physicians →", href: ROUTES.ourTeam },
      ],
    },
    { type: "clinicFooter" },
  ],
};
