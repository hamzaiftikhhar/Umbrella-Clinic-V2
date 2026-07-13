"use client";

import Image, { type ImageProps } from "next/image";
import { IMAGE_GEO, imageGeoProps, type ImageAltKey, getImageAlt } from "@/data/image-seo";

type SeoImageProps = Omit<ImageProps, "alt"> & {
  /** Lookup key for SEO-optimized alt + keyword pair. */
  altKey?: ImageAltKey;
  alt?: string;
};

/**
 * next/image wrapper that attaches clinic geo data attributes and SEO alt text.
 * Latitude/longitude: 32 West 14th Street, New York, NY 10011.
 */
export function SeoImage({ altKey, alt, ...props }: SeoImageProps) {
  const resolvedAlt = altKey ? getImageAlt(altKey) : (alt ?? "");
  return (
    <Image
      {...props}
      alt={resolvedAlt}
      {...imageGeoProps()}
      title={`${resolvedAlt} · ${IMAGE_GEO.address}`}
    />
  );
}
