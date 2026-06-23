import { CTABanner } from "./CTABanner";

/** Homepage gallery — same carousel as sitewide CTABanner with home-specific copy. */
export function GalleryBanner() {
  return (
    <CTABanner
      eyebrow="Our space"
      title="Inside"
      italic="Umbrella Health."
      ariaLabel="Inside Umbrella Health"
      imageAlt="Inside Umbrella Health"
    />
  );
}
