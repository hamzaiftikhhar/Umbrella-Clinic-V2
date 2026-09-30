import { ROUTES } from "@/data/site-architecture";
import { BOOKING_URL, SITE_PHONE } from "@/lib/site";
import { BLOG_IMAGES } from "./images";
import { BLOG_PATHS, BLOG_SLUGS } from "./slugs";
import type { BlogPost } from "./types";

const MEDLINEPLUS_CBC_URL = "https://medlineplus.gov/lab-tests/complete-blood-count-cbc/";
const MEDLINEPLUS_CMP_URL = "https://medlineplus.gov/lab-tests/comprehensive-metabolic-panel-cmp/";
const MEDLINEPLUS_BMP_URL = "https://medlineplus.gov/lab-tests/basic-metabolic-panel-bmp/";
const MEDLINEPLUS_CHOLESTEROL_URL = "https://medlineplus.gov/lab-tests/cholesterol-levels/";
const MEDLINEPLUS_A1C_URL = "https://medlineplus.gov/lab-tests/hemoglobin-a1c-hba1c-test/";
const MEDLINEPLUS_THYROID_URL = "https://medlineplus.gov/thyroidtests.html";
const HEALTHCARE_GOV_PREVENTIVE_URL = "https://www.healthcare.gov/coverage/preventive-care-benefits/";

export const bloodTestsCheckupPost: BlogPost = {
  slug: BLOG_SLUGS.bloodTestsCheckup,
  title: "What Blood Tests Are Included in a Primary Care Checkup?",
  subtitle:
    "Common labs like CBC, CMP, lipid panel and A1C — why they are ordered, how to prepare, and how results are used in context.",
  excerpt:
    "Learn which blood tests in a primary care checkup are common, like CBC, CMP, lipid panel and A1C, plus fasting tips. Book blood work at Umbrella Health NYC.",
  seoTitle: "Blood Tests in a Primary Care Checkup: What's Included",
  metaDescription:
    "Learn which blood tests in a primary care checkup are common, like CBC, CMP, lipid panel and A1C, plus fasting tips. Book blood work at Umbrella Health NYC.",
  focusKeyword: "blood tests in a primary care checkup",
  category: "Preventive Care",
  readTime: "12 min read",
  publishedAt: "2026-09-30",
  image: BLOG_IMAGES.bloodTestsCheckup,
  imageAlt: "Blood sample tubes prepared for routine primary care lab tests",
  author: "Umbrella Health",
  body: [
    {
      type: "p",
      text: "There is no single blood panel that every adult gets at every checkup. Depending on your age, health history, symptoms and risk factors, a primary care doctor may order a complete blood count (CBC), a metabolic panel (BMP or CMP), a lipid (cholesterol) panel, blood glucose or hemoglobin A1C, and sometimes thyroid or other tests. Your doctor chooses tests based on what is useful for you, then explains the results in context.",
    },
    {
      type: "p",
      text: "Routine blood work is one of the most common reasons people book a primary care visit, and one of the most common sources of confusion. This guide explains the tests you are most likely to hear about, what they check, and how to prepare. For a full picture of the visit itself, see what to expect at your annual physical in NYC.",
      links: [
        {
          label: "what to expect at your annual physical in NYC",
          href: BLOG_PATHS.annualPhysical,
        },
      ],
    },
    {
      type: "cta",
      prompt: "Need routine blood work as part of a checkup?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },

    {
      type: "h2",
      heading: "Why Does a Primary Care Doctor Order Blood Tests?",
    },
    {
      type: "p",
      text: "Blood tests can help your doctor:",
    },
    {
      type: "ul",
      items: [
        "Screen for conditions that may not cause symptoms yet, such as diabetes or high cholesterol",
        "Diagnose the cause of symptoms like fatigue, dizziness or unexplained weight change",
        "Monitor chronic conditions and the effects of medications",
        "Set a baseline so future results can be compared over time",
      ],
    },
    {
      type: "p",
      text: "Tests are most useful when they answer a clinical question. That is why two people of the same age may leave a checkup with very different lab orders.",
    },

    {
      type: "h2",
      heading: "Common Blood Tests in a Primary Care Checkup",
    },

    {
      type: "h3",
      heading: "Complete Blood Count (CBC)",
    },
    {
      type: "p",
      text: "A CBC measures red blood cells, white blood cells, hemoglobin, hematocrit and platelets. According to MedlinePlus, it can help check for conditions such as anemia, infection and some blood disorders.",
      links: [{ label: "MedlinePlus", href: MEDLINEPLUS_CBC_URL }],
    },

    {
      type: "h3",
      heading: "Basic or Comprehensive Metabolic Panel (BMP or CMP)",
    },
    {
      type: "p",
      text: "A comprehensive metabolic panel measures substances such as glucose, electrolytes (sodium, potassium), kidney markers (BUN and creatinine), calcium, proteins and liver-related markers. A basic metabolic panel is a smaller version without the liver tests. These panels are often used to check kidney and liver function, especially if you take certain medicines.",
      links: [
        { label: "comprehensive metabolic panel", href: MEDLINEPLUS_CMP_URL },
        { label: "basic metabolic panel", href: MEDLINEPLUS_BMP_URL },
      ],
    },

    {
      type: "h3",
      heading: "Lipid Panel (Cholesterol Test)",
    },
    {
      type: "p",
      text: 'A lipid panel typically measures total cholesterol, LDL ("bad") cholesterol, HDL ("good") cholesterol and triglycerides. MedlinePlus explains cholesterol testing and why results are looked at together with other heart-risk factors like blood pressure, smoking and diabetes.',
      links: [
        { label: "MedlinePlus explains cholesterol testing", href: MEDLINEPLUS_CHOLESTEROL_URL },
      ],
    },

    {
      type: "h3",
      heading: "Blood Glucose and Hemoglobin A1C",
    },
    {
      type: "p",
      text: "Fasting glucose shows your blood sugar at one moment, while hemoglobin A1C reflects your average over about the past two to three months. These tests are used to screen for prediabetes and diabetes and to monitor diabetes care. Our guide to primary care for diabetes explains A1C ranges and follow-up.",
      links: [
        { label: "hemoglobin A1C", href: MEDLINEPLUS_A1C_URL },
        { label: "primary care for diabetes", href: BLOG_PATHS.primaryCareDiabetes },
      ],
    },

    {
      type: "h3",
      heading: "Thyroid Tests",
    },
    {
      type: "p",
      text: "A TSH (thyroid-stimulating hormone) test, sometimes with other thyroid tests, may be ordered if you have symptoms such as fatigue, weight changes, feeling cold or hot, or a history of thyroid problems. It is not automatically part of every checkup.",
      links: [{ label: "thyroid tests", href: MEDLINEPLUS_THYROID_URL }],
    },

    {
      type: "h3",
      heading: "Other Tests Your Doctor May Consider",
    },
    {
      type: "p",
      text: "Depending on your situation, your doctor may also discuss:",
    },
    {
      type: "ul",
      items: [
        "Screening for HIV or hepatitis C, based on current screening guidance",
        "Tests for sexually transmitted infections, if relevant",
        "Vitamin or iron studies when symptoms or history suggest a deficiency",
        "A urine test (urinalysis) to check for infection, kidney issues or protein",
      ],
    },
    {
      type: "p",
      text: "Our article on preventive health screenings adults need explains which screenings are recommended at different ages.",
      links: [
        {
          label: "preventive health screenings adults need",
          href: BLOG_PATHS.preventiveScreenings,
        },
      ],
    },
    {
      type: "table",
      headers: ["Common test", "What it generally checks"],
      rows: [
        ["CBC", "Red and white blood cells, hemoglobin, platelets"],
        ["CMP / BMP", "Glucose, electrolytes, kidney and (for CMP) liver markers"],
        ["Lipid panel", "Total, LDL and HDL cholesterol, triglycerides"],
        ["A1C / glucose", "Average or current blood sugar for diabetes screening"],
        ["TSH", "Thyroid function when symptoms or history suggest it"],
      ],
      note: "Infographic of common blood tests ordered at a primary care checkup. Your doctor personalizes the order.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.bloodTestsInfographic,
      alt: "Infographic of common blood tests ordered at a primary care checkup",
    },
    {
      type: "cta",
      prompt: "Need routine blood work as part of a checkup?",
      label: "Book a Primary Care Appointment →",
      href: BOOKING_URL,
    },
    {
      type: "p",
      text: `You can also call ${SITE_PHONE}. Umbrella Health's diagnostic testing services list CBC, CMP, lipid profile, blood glucose, hemoglobin A1C, thyroid, kidney and liver function tests, among others.`,
      links: [{ label: "diagnostic testing services", href: ROUTES.diagnostics }],
    },

    {
      type: "h2",
      heading: "Do You Need to Fast Before Blood Work?",
    },
    {
      type: "p",
      text: "It depends on the tests. A fasting glucose test requires fasting, usually for about 8 hours. A1C does not. Some lipid panels can be done without fasting, while others may be ordered fasting. Always follow the instructions your doctor's office gives you, and ask whether you should take your usual medicines that morning.",
    },
    {
      type: "p",
      text: "A few simple tips can make the blood draw easier:",
    },
    {
      type: "ul",
      items: [
        "Drink water unless told otherwise",
        "Wear a top with sleeves that roll up easily",
        "Bring a list of your medicines and supplements, since some can affect results",
        "Tell the team if you tend to feel faint during blood draws",
      ],
    },

    {
      type: "h2",
      heading: "How to Understand Your Results",
    },
    {
      type: "p",
      text: "Lab reports list a reference range for each test. A result slightly outside that range does not always mean something is wrong. Hydration, recent illness, exercise, medicines and normal variation can all affect numbers. Your doctor will look at the overall pattern, your history and previous results before deciding whether anything needs follow-up.",
    },
    {
      type: "p",
      text: "If a result does need attention, the next step might be repeat testing, further evaluation, a medication change or a referral. For example, an abnormal result might lead to follow-up with Cardiology & Vascular Medicine if heart risk is a concern. Ongoing monitoring is a core part of managing chronic conditions without the runaround, and blood pressure results are covered in our guide to primary care for high blood pressure.",
      links: [
        { label: "Cardiology & Vascular Medicine", href: ROUTES.cardiology },
        {
          label: "managing chronic conditions without the runaround",
          href: BLOG_PATHS.chronicConditions,
        },
        {
          label: "primary care for high blood pressure",
          href: BLOG_PATHS.highBloodPressure,
        },
      ],
    },

    {
      type: "h2",
      heading: "Are Routine Blood Tests Covered by Insurance?",
    },
    {
      type: "p",
      text: "Coverage varies by plan. HealthCare.gov explains that many plans cover certain preventive services without cost-sharing when you use an in-network provider. Tests ordered to investigate a symptom or monitor a condition may be billed differently. Umbrella Health's insurance page says the team verifies coverage before your visit, so ask about your specific plan when you book.",
      links: [
        { label: "HealthCare.gov explains", href: HEALTHCARE_GOV_PREVENTIVE_URL },
        { label: "insurance page", href: ROUTES.insurance },
      ],
    },

    {
      type: "h2",
      heading: "Blood Work Through Primary Care in Lower Manhattan",
    },
    {
      type: "p",
      text: "Umbrella Health is at 32 West 14th Street, New York, NY 10011, steps from Union Square, and serves patients from Greenwich Village, Chelsea, the Flatiron District, SoHo, NoHo, Gramercy, the East Village, the West Village and throughout New York City. The practice's Primary Care NYC page describes in-house diagnostics that your primary care physician can order, with results feeding into your care plan.",
      links: [{ label: "Primary Care NYC", href: ROUTES.primaryCare }],
    },
    {
      type: "p",
      text: "When you schedule, ask the office about typical turnaround for routine lab results, how results are shared, and whether blood draws require a scheduled visit.",
    },
    {
      type: "image",
      src: BLOG_IMAGES.clinicInterior,
      alt: "Umbrella Health clinic for primary care lab testing in Lower Manhattan NYC",
    },

    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subtitle:
        "Common questions about blood tests in a primary care checkup, fasting, and results.",
      items: [
        {
          q: "What Blood Tests Are Done at a Yearly Physical?",
          a: "Common tests include a CBC, a metabolic panel, a lipid panel and glucose or A1C. Your doctor may add or skip tests based on your age, history and risk factors.",
        },
        {
          q: "Is a Thyroid Test Part of Routine Blood Work?",
          a: "Not always. A TSH test is often ordered when symptoms or history suggest a thyroid problem. Ask your doctor whether it makes sense for you.",
        },
        {
          q: "How Long Does It Take to Get Blood Test Results?",
          a: "It depends on the test and the lab. Some results come back within a day or two, while others take longer. Your care team can tell you what to expect.",
        },
        {
          q: "Can I Request Specific Blood Tests?",
          a: "You can ask. Your doctor will talk through whether a test is likely to be useful for you and how it may be covered by your insurance.",
        },
        {
          q: "Why Would My Doctor Repeat a Blood Test?",
          a: "A test may be repeated to confirm an unexpected result, track a trend, or check how a treatment is working.",
        },
      ],
    },

    {
      type: "h2",
      heading: "Book Your Checkup and Blood Work",
    },
    {
      type: "p",
      text: "A primary care visit is the easiest way to get the right blood tests for your age and health, and to have someone explain what the results mean. Start at Umbrella Health's home page, learn about Primary Care NYC, or book online. If you are still choosing a doctor, see finding a primary care doctor in NYC who is accepting new patients.",
      links: [
        { label: "Umbrella Health's home page", href: ROUTES.home },
        { label: "Primary Care NYC", href: ROUTES.primaryCare },
        { label: "book online", href: BOOKING_URL },
        {
          label: "finding a primary care doctor in NYC who is accepting new patients",
          href: BLOG_PATHS.acceptingNewPatients,
        },
      ],
    },
    {
      type: "ctaBox",
      title: "Ready for a checkup and routine blood work?",
      body: "Book a primary care appointment at Umbrella Health in Lower Manhattan for personalized lab testing and follow-up.",
      links: [
        { label: "Book a Primary Care Appointment →", href: BOOKING_URL },
        { label: "Explore Diagnostic Testing NYC →", href: ROUTES.diagnostics },
      ],
    },
    {
      type: "p",
      text: "This article is for general information only and is not medical advice, diagnosis or treatment. Health needs differ from person to person, so talk with a qualified clinician about your own symptoms, test results and treatment options. Please do not share personal health details in comments or on social media. If you think you are having a medical emergency, call 911 or go to the nearest emergency department right away.",
    },
    { type: "clinicFooter" },
  ],
};
