/** Homepage and sitewide approved copy from SEO content document */
export const SITE_FAQS = [
  {
    q: "Do you accept insurance?",
    a: "Yes. Umbrella Health works with most major insurance plans for medical services and offers transparent self-pay options for preventive and specialized programs.",
  },
  {
    q: "What services do you provide?",
    a: "We offer primary care, cardiology, neurology, sleep medicine, interventional pain management, medical weight loss, advanced diagnostics, and preventive health services.",
  },
  {
    q: "Do I need referrals for specialists?",
    a: "Many specialty services are available directly through Umbrella Health, reducing the need for outside referrals and multiple appointments.",
  },
  {
    q: "What makes Umbrella Health different?",
    a: "Unlike traditional practices, Umbrella combines primary care, specialists, diagnostics, and preventive medicine under one roof with a data-driven approach to healthcare.",
  },
  {
    q: "Do you offer sleep studies?",
    a: "Yes. We provide convenient home sleep studies and comprehensive sleep evaluations.",
  },
  {
    q: "Do you offer medical weight loss programs?",
    a: "Yes. Our physician-supervised weight loss programs include GLP-1 medications when appropriate, along with metabolic assessments and ongoing monitoring.",
  },
  {
    q: "Where are you located?",
    a: "Umbrella Health is located in Union Square, serving patients throughout Lower Manhattan, Downtown NYC, and surrounding neighborhoods.",
  },
  {
    q: "How do I book an appointment?",
    a: "Appointments can be scheduled online or by contacting our office directly.",
  },
] as const;

export const FOOTER_TAGLINE = "Connect with us.";

export const FOOTER_DESCRIPTION =
  "Umbrella Health combines primary care, specialty medicine, advanced diagnostics, and preventive health under one roof in Lower Manhattan, helping patients make smarter decisions through data-driven care.";

export const FEATURED_SERVICE_COPY = {
  title: "Medical Weight Loss, Backed By Data",
  description:
    "Sustainable weight loss starts with understanding your metabolism. Our physician-led GLP-1 programs combine medical supervision, advanced testing, and ongoing support to help you achieve lasting results, not quick fixes.",
  cta: "Explore Weight Loss Programs",
  href: "/weight-loss-glp1",
} as const;

export type SiteFaq = (typeof SITE_FAQS)[number];
