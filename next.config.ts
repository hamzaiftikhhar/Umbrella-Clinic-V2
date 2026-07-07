import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  async redirects() {
    return [
      { source: "/specialties/primary-care", destination: "/specialties/primary-care-nyc", permanent: true },
      { source: "/specialties/cardiology-vascular", destination: "/specialties/cardiologist-nyc", permanent: true },
      { source: "/specialties/neurology", destination: "/specialties/neurologist-nyc", permanent: true },
      { source: "/specialties/sleep-medicine", destination: "/specialties/sleep-medicine-nyc", permanent: true },
      { source: "/specialties/pain-management", destination: "/specialties/pain-management-nyc", permanent: true },
      { source: "/weight-loss-glp1", destination: "/specialties/medical-weight-loss-nyc", permanent: true },
      { source: "/our-physicians", destination: "/our-team", permanent: true },
      { source: "/reviews", destination: "/patient-reviews", permanent: true },
      { source: "/visit-us", destination: "/contact-us", permanent: true },
      { source: "/longevity", destination: "/medical-spa", permanent: true },
    ];
  },
};

export default nextConfig;
