import { IMG } from "./images";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  body: string[];
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-primary-care-doctor-nyc",
    title: "How to Choose a Primary Care Doctor in NYC",
    excerpt:
      "Moving to New York City? Here's what to look for in a primary care physician — from insurance and location to continuity of care and same-day access.",
    category: "Primary Care",
    readTime: "6 min read",
    publishedAt: "2026-06-12",
    image: IMG.consult,
    imageAlt: "Primary care physician consulting with patient in NYC clinic",
    author: "Umbrella Health",
    body: [
      "Finding a primary care doctor in New York City can feel overwhelming. With hundreds of practices across Manhattan alone, how do you choose someone who will actually know your history, accept your insurance, and be there when you need them?",
      "Start with location and access. If you live or work in Lower Manhattan, Union Square, Chelsea, or Greenwich Village, a clinic within a short subway ride makes it far more likely you'll keep up with annual physicals and follow-up visits.",
      "Look for board-certified physicians in Internal Medicine or Family Medicine. Board certification means your doctor has completed rigorous training and stays current with continuing education.",
      "Ask about same-day sick visits and weekend availability. Busy professionals often need care outside standard 9-to-5 hours — a practice that offers Saturday appointments or telehealth across New York State can be a game-changer.",
      "Finally, consider whether specialists and diagnostics are under one roof. When your primary care doctor, cardiologist, and lab work share the same medical record, your care moves faster and makes more sense.",
    ],
  },
  {
    slug: "annual-physical-what-to-expect",
    title: "What to Expect at Your Annual Physical in NYC",
    excerpt:
      "Annual wellness exams are the foundation of preventive care. Learn what labs, screenings, and conversations to expect at your next visit.",
    category: "Preventive Care",
    readTime: "5 min read",
    publishedAt: "2026-05-28",
    image: IMG.consult,
    imageAlt: "Doctor reviewing health results during annual physical exam",
    author: "Umbrella Health",
    body: [
      "An annual physical is more than a quick checkup — it's your opportunity to establish a baseline, catch problems early, and build a relationship with a physician who understands your goals.",
      "Most visits include a review of your medical history, vital signs (blood pressure, heart rate, weight), and a head-to-toe exam. Depending on your age and risk factors, your doctor may order blood work for cholesterol, blood sugar, thyroid function, and vitamin levels.",
      "Women's wellness visits may include discussions about contraception, menopause, and preventive screenings. Men's health visits often focus on cardiovascular risk, prostate health, and lifestyle factors.",
      "Come prepared with a list of medications, any new symptoms, and questions about sleep, stress, nutrition, and exercise. The more your physician knows, the more personalized your plan becomes.",
      "At Umbrella Health, many patients complete labs and EKG on the same visit — so you leave with answers, not a list of referrals across town.",
    ],
  },
  {
    slug: "managing-chronic-conditions-manhattan",
    title: "Managing Chronic Conditions Without the Runaround",
    excerpt:
      "Hypertension, diabetes, and high cholesterol require ongoing care — not scattered appointments. How coordinated primary care changes the experience.",
    category: "Chronic Care",
    readTime: "7 min read",
    publishedAt: "2026-05-10",
    image: IMG.lab,
    imageAlt: "Laboratory testing for chronic disease management at Umbrella Health",
    author: "Umbrella Health",
    body: [
      "Living with a chronic condition like hypertension, type 2 diabetes, or high cholesterol means regular monitoring, medication adjustments, and lifestyle guidance — often for years.",
      "The challenge in NYC isn't finding a doctor. It's finding one who has time to coordinate your care, review your trends over time, and adjust your plan before small issues become emergencies.",
      "Effective chronic disease management starts with consistent measurement: blood pressure logs, A1c trends, lipid panels, and weight. When these live in one connected record, your physician sees the full picture at every visit.",
      "Same-day lab review matters. Waiting weeks for results across multiple portals creates gaps in care. In-house diagnostics let your doctor act on data while it's still relevant.",
      "If you need a specialist — cardiology for heart risk, neurology for neuropathy — having them in the same practice means your primary care doctor and specialist are literally on the same team.",
    ],
  },
  {
    slug: "same-day-sick-visits-lower-manhattan",
    title: "Same-Day Sick Visits in Lower Manhattan",
    excerpt:
      "Feeling unwell and need to be seen today? How Umbrella Health handles acute visits for busy New Yorkers — without the ER wait.",
    category: "Patient Guide",
    readTime: "4 min read",
    publishedAt: "2026-04-22",
    image: IMG.clinicInterior,
    imageAlt: "Umbrella Health clinic reception in NoHo Lower Manhattan",
    author: "Umbrella Health",
    body: [
      "When you wake up with a fever, persistent cough, or sudden symptoms, the last thing you want is a week-long wait for an appointment — or hours in an emergency room for something your primary care doctor could handle.",
      "Same-day sick visits are designed for acute concerns: cold and flu, sore throat, urinary symptoms, minor infections, rashes, and flare-ups of known conditions. If you're unsure whether your issue is urgent, call the office — our team can help you decide.",
      "Our NoHo clinic at 200 Lafayette Street is two blocks from the Spring Street subway, making it accessible from Union Square, SoHo, Chelsea, and the West Village.",
      "Many appointments include on-site testing when needed — strep, flu, COVID, urinalysis, and basic labs — so you leave with a diagnosis and treatment plan, not another appointment to schedule.",
      "For established patients, telehealth across New York State is available for select follow-ups and acute concerns when an in-person visit isn't necessary.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
