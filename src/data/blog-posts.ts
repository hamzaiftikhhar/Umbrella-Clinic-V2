import { acceptingNewPatientsPost } from "./blog/primary-care-doctor-nyc-accepting-new-patients";
import { annualPhysicalPost } from "./blog/what-to-expect-at-your-annual-physical-in-nyc";
import { annualPhysicalVsWellnessPost } from "./blog/annual-physical-vs-wellness-visit";
import { bloodTestsCheckupPost } from "./blog/blood-tests-in-a-primary-care-checkup";
import { chronicConditionsPost } from "./blog/managing-chronic-conditions-without-the-runaround";
import { headacheWhenToSeeDoctorPost } from "./blog/when-to-see-a-doctor-for-a-headache";
import { highBloodPressurePost } from "./blog/primary-care-for-high-blood-pressure";
import { howOftenPrimaryCarePost } from "./blog/how-often-should-you-see-a-primary-care-doctor";
import { howToChoosePrimaryCarePost } from "./blog/how-to-choose-a-primary-care-doctor-in-nyc";
import { primaryCareDiabetesPost } from "./blog/primary-care-for-diabetes";
import { primaryCareOrUrgentCarePost } from "./blog/primary-care-doctor-or-urgent-care";
import { primaryCareVsInternalMedicinePost } from "./blog/primary-care-vs-internal-medicine";
import { referralNycPost } from "./blog/do-you-need-a-referral-nyc";
import { sameDaySickVisitsPost } from "./blog/same-day-sick-visits-in-lower-manhattan";
import { whatIsPrimaryCarePost } from "./blog/what-is-primary-care";
import type { BlogPost } from "./blog/types";

export type { BlogBlock, BlogFaq, BlogLink, BlogPost } from "./blog/types";
export { getPostFaqs, getPostToc, headingId } from "./blog/types";
export { BLOG_PATHS, BLOG_SLUGS } from "./blog/slugs";

export const BLOG_POSTS: BlogPost[] = [
  annualPhysicalVsWellnessPost,
  primaryCareVsInternalMedicinePost,
  headacheWhenToSeeDoctorPost,
  primaryCareOrUrgentCarePost,
  referralNycPost,
  bloodTestsCheckupPost,
  primaryCareDiabetesPost,
  highBloodPressurePost,
  acceptingNewPatientsPost,
  howOftenPrimaryCarePost,
  whatIsPrimaryCarePost,
  howToChoosePrimaryCarePost,
  annualPhysicalPost,
  chronicConditionsPost,
  sameDaySickVisitsPost,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
