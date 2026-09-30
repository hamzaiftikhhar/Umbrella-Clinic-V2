import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_DIABETES_URL = "https://medlineplus.gov/diabetes.html";
const MEDLINEPLUS_PREDIABETES_URL = "https://medlineplus.gov/prediabetes.html";
const MEDLINEPLUS_A1C_URL = "https://medlineplus.gov/lab-tests/hemoglobin-a1c-hba1c-test/";
const MEDLINEPLUS_GLUCOSE_URL = "https://medlineplus.gov/lab-tests/blood-glucose-test/";
const MEDLINEPLUS_HYPOGLYCEMIA_URL = "https://medlineplus.gov/ency/article/000386.htm";
const USPSTF_DIABETES_URL =
  "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-prediabetes-and-type-2-diabetes";
const NIDDK_TESTS_URL =
  "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis";
const NIDDK_MANAGING_URL =
  "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes";

export const primaryCareDiabetesPost: BlogPost = {
  slug: BLOG_SLUGS.primaryCareDiabetes,
  title: "Primary Care for Diabetes: A1C Testing, Prevention and Ongoing Care",
  subtitle:
    "How primary care screens for prediabetes and type 2 diabetes, uses A1C testing, and coordinates prevention and long-term management in NYC.",
  excerpt:
    "How primary care for diabetes works in NYC: A1C testing, prediabetes, prevention and ongoing care. Book a primary care visit with Umbrella Health in Manhattan.",
  seoTitle: "Primary Care for Diabetes: A1C, Prevention and Ongoing Care",
  metaDescription:
    "How primary care for diabetes works in NYC: A1C testing, prediabetes, prevention and ongoing care. Book a primary care visit with Umbrella Health in Manhattan.",
  focusKeyword: "primary care for diabetes",
  category: "Chronic Care",
  readTime: "13 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.primaryCareDiabetes,
  imageAlt:
    "Primary care doctor reviewing A1C blood test results with a patient in Manhattan",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "A primary care doctor can screen for prediabetes and type 2 diabetes with blood tests such as the hemoglobin A1C, confirm a diagnosis, and coordinate ongoing care. That care often includes regular A1C checks, blood pressure and cholesterol management, kidney, eye and foot checks, medication review and lifestyle support, with referrals to specialists when needed.",
    },
    {
      type: "p",
      text: "Type 2 diabetes can develop slowly and quietly. Many people feel fine for years, which is why screening and regular follow-up matter. A consistent relationship with a primary care doctor in NYC means your results are tracked over time rather than looked at once and forgotten.",
      links: [{ label: "primary care doctor in NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "cta",
      prompt: "Looking for primary care for diabetes in Lower Manhattan?",
      label: "Explore Primary Care NYC at Umbrella Health →",
      href: ROUTES.primaryCare,
    },

    {
      type: "h2",
      heading: "What Is Diabetes?",
    },
    {
      type: "p",
      text: "Diabetes is a condition in which blood glucose (blood sugar) stays too high. According to MedlinePlus, in type 1 diabetes the body does not make insulin, while in type 2 diabetes, the most common type, the body does not make or use insulin well. Over time, high blood glucose can affect the heart, blood vessels, kidneys, eyes and nerves.",
      links: [{ label: "MedlinePlus", href: MEDLINEPLUS_DIABETES_URL }],
    },
    {
      type: "p",
      text: "Prediabetes means blood glucose is higher than normal but not high enough to be diagnosed as diabetes. MedlinePlus notes that prediabetes raises the risk of type 2 diabetes, and that lifestyle changes may help delay or prevent it.",
      links: [{ label: "MedlinePlus notes", href: MEDLINEPLUS_PREDIABETES_URL }],
    },

    {
      type: "h2",
      heading: "Who Should Be Screened for Diabetes?",
    },
    {
      type: "p",
      text: "The U.S. Preventive Services Task Force recommends screening for prediabetes and type 2 diabetes in adults aged 35 to 70 who have overweight or obesity. Your doctor may suggest earlier or more frequent testing based on other risk factors, such as:",
      links: [{ label: "U.S. Preventive Services Task Force", href: USPSTF_DIABETES_URL }],
    },
    {
      type: "ul",
      items: [
        "A family history of diabetes",
        "A history of gestational diabetes",
        "High blood pressure or high cholesterol",
        "Certain medications or health conditions",
        "Symptoms such as increased thirst, frequent urination, blurred vision or unexplained weight loss",
      ],
    },
    {
      type: "p",
      text: "Screening is often part of a routine visit. Our guide to what to expect at your annual physical in NYC explains how preventive testing fits into a yearly checkup.",
      links: [
        {
          label: "what to expect at your annual physical in NYC",
          href: BLOG_PATHS.annualPhysical,
        },
      ],
    },

    {
      type: "h2",
      heading: "What Is an A1C Test?",
    },
    {
      type: "p",
      text: "The hemoglobin A1C test reflects your average blood glucose over roughly the past two to three months, according to MedlinePlus. You usually do not need to fast for it.",
      links: [{ label: "MedlinePlus", href: MEDLINEPLUS_A1C_URL }],
    },
    {
      type: "p",
      text: "The National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) describes these general A1C ranges for diagnosis:",
      links: [
        {
          label: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
          href: NIDDK_TESTS_URL,
        },
      ],
    },
    {
      type: "table",
      headers: ["A1C result", "What it generally means"],
      rows: [
        ["Below 5.7%", "Normal"],
        ["5.7% to 6.4%", "Prediabetes"],
        ["6.5% or higher", "Diabetes"],
      ],
      note: "Chart of A1C ranges for normal, prediabetes and diabetes. Your doctor interprets results in clinical context.",
    },
    {
      type: "p",
      text: "Your doctor may also use a fasting blood glucose test or other tests, and a diagnosis is usually confirmed with repeat testing unless the situation is clear. Some conditions can affect A1C accuracy, so your doctor will interpret results in context.",
      links: [{ label: "fasting blood glucose test", href: MEDLINEPLUS_GLUCOSE_URL }],
    },
    {
      type: "p",
      text: "A1C is often ordered alongside other routine labs. See our article on blood tests included in a primary care checkup for how CBC, metabolic panels and lipid tests fit together.",
      links: [
        {
          label: "blood tests included in a primary care checkup",
          href: BLOG_PATHS.bloodTestsCheckup,
        },
      ],
    },
    {
      type: "image",
      src: BLOG_IMAGES.a1cResults,
      alt: "Chart of A1C ranges for normal, prediabetes and diabetes",
    },
    {
      type: "cta",
      prompt: "Due for diabetes screening or an A1C check?",
      label: "Book a Primary Care Visit →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE}. The practice's diagnostic testing page lists blood glucose testing, hemoglobin A1C and diabetes screening among its lab services.`,
      links: [{ label: "diagnostic testing page", href: ROUTES.diagnostics }],
    },

    {
      type: "h2",
      heading: "How Can Primary Care Help Prevent Type 2 Diabetes?",
    },
    {
      type: "p",
      text: "If you have prediabetes, primary care can help you understand your risk and build a realistic plan. Prevention may include:",
    },
    {
      type: "ul",
      items: [
        "Gradual changes to eating patterns",
        "Regular physical activity that fits your health and schedule",
        "Weight management support, if relevant",
        "Better sleep and stress management",
        "Repeat testing at intervals your doctor recommends",
      ],
    },
    {
      type: "p",
      text: "Some patients benefit from physician-guided weight management. Umbrella Health offers Medical Weight Loss NYC, which your primary care doctor can discuss with you if it fits your goals.",
      links: [{ label: "Medical Weight Loss NYC", href: ROUTES.medicalWeightLoss }],
    },

    {
      type: "h2",
      heading: "What Does Ongoing Diabetes Care in Primary Care Look Like?",
    },
    {
      type: "p",
      text: "Ongoing care is about more than blood sugar. According to the NIDDK guide to managing diabetes, managing blood glucose, blood pressure and cholesterol together can help lower the risk of diabetes-related health problems.",
      links: [{ label: "NIDDK guide to managing diabetes", href: NIDDK_MANAGING_URL }],
    },
    {
      type: "p",
      text: "A primary care plan may include:",
    },
    {
      type: "ul",
      items: [
        "Regular A1C testing. Many people with diabetes have an A1C at least twice a year, and more often if their treatment changes or they are not meeting their goals.",
        "Blood pressure checks at visits. Our guide to primary care for high blood pressure explains screening and management.",
        "Cholesterol testing and cardiovascular risk review.",
        "Kidney checks, such as blood and urine tests.",
        "Foot checks and questions about numbness or tingling.",
        "Eye exam reminders and referrals for dilated eye exams.",
        "Medication review, including side effects and interactions.",
        "Vaccination review, based on current guidance.",
      ],
    },
    {
      type: "p",
      text: "Learn more in our guide to primary care for high blood pressure, and about visit frequency in how often you should see a primary care doctor.",
      links: [
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
        {
          label: "how often you should see a primary care doctor",
          href: BLOG_PATHS.howOften,
        },
      ],
    },

    {
      type: "h3",
      heading: "Tracking Glucose at Home",
    },
    {
      type: "p",
      text: "Your doctor may ask you to check blood glucose at home or may discuss a continuous glucose monitor, depending on your treatment. Bring your readings or device data to visits so your clinician can spot patterns.",
    },

    {
      type: "h2",
      heading: "How Diabetes Connects to Your Other Health Needs",
    },
    {
      type: "p",
      text: "Diabetes often overlaps with high blood pressure, high cholesterol, weight concerns and sleep issues. That is where coordinated care helps. Read managing chronic conditions without the runaround to see how one primary care team can bring these threads together. If nerve symptoms such as numbness or burning pain develop, your doctor may involve Neurology; if heart risk is a concern, Cardiology & Vascular Medicine is available in the same practice.",
      links: [
        {
          label: "managing chronic conditions without the runaround",
          href: BLOG_PATHS.chronicConditions,
        },
        { label: "Neurology", href: ROUTES.neurology },
        { label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology },
      ],
    },

    {
      type: "h2",
      heading: "When Is It Urgent?",
    },
    {
      type: "p",
      text: "Seek emergency care right away, or call 911, for symptoms such as confusion, fainting, trouble breathing, severe vomiting, a fruity breath smell with nausea, or very high or very low blood sugar readings with symptoms. MedlinePlus explains the warning signs of low blood sugar. If you are unsure, call your care team or seek urgent medical advice.",
      links: [
        {
          label: "MedlinePlus explains the warning signs of low blood sugar",
          href: MEDLINEPLUS_HYPOGLYCEMIA_URL,
        },
      ],
    },

    {
      type: "h2",
      heading: "Diabetes Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, near Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and across New York City.",
    },
    {
      type: "p",
      text: "The Primary Care NYC page lists diabetes, hypertension and cholesterol management among its services, and laboratory testing is offered in the same practice.",
      links: [{ label: "Primary Care NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for primary care diabetes management in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about primary care for diabetes, A1C testing, and prediabetes in NYC.",
      items: [
        {
          q: "Can a Primary Care Doctor Manage Type 2 Diabetes?",
          a: "Yes. Many people with type 2 diabetes are cared for by a primary care doctor, who orders tests, prescribes and adjusts medicines, and coordinates specialist care such as eye exams or endocrinology when needed.",
        },
        {
          q: "How Often Should I Get an A1C Test?",
          a: "If you have diabetes and are meeting your goals, many clinicians check A1C about twice a year. If your treatment changes or you are not at goal, it may be checked more often. If you don't have diabetes, your doctor will suggest a screening interval based on your risk.",
        },
        {
          q: "Do I Need to Fast for an A1C Test?",
          a: "Usually not. A fasting glucose test does require fasting, so ask your doctor which tests are being ordered.",
        },
        {
          q: "Can Prediabetes Be Reversed?",
          a: "For many people, lifestyle changes can bring blood glucose back into a normal range or delay type 2 diabetes. Results vary, so regular follow-up testing is important.",
        },
        {
          q: "What Are Early Signs of Diabetes?",
          a: "Some people have no symptoms. Others notice increased thirst, frequent urination, fatigue, blurred vision or slow-healing sores. Talk to a doctor if you notice these changes.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Start or Continue Your Diabetes Care",
    },
    {
      type: "p",
      text: "Whether you want to be screened, have just been told you have prediabetes, or need a primary care home for long-term diabetes care, a visit is a good first step. Visit Umbrella Health's home page, explore Primary Care NYC, or book an appointment online.",
      links: [
        { label: "Umbrella Health's home page", href: ROUTES.home },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "book an appointment online", href: BOOKING_URL },
      ],
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE} or email ${SITE_EMAIL}.`,
    },
    {
      type: "ctaBox",
      title: "Ready for diabetes screening or ongoing A1C care?",
      body: "Book a primary care appointment at Umbrella Health in Lower Manhattan for A1C testing, prevention, and diabetes management.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Explore Primary Care NYC →", href: ROUTES.primaryCare },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
