"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

/** Initial fallback so layout is stable before first paint measurement. */
const FOOTER_HEIGHT_FALLBACK = 580;

export function SiteLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(FOOTER_HEIGHT_FALLBACK);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.offsetHeight;
      if (h > 0) setFooterHeight(h);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative isolate">
      <SiteHeader />

      {/* Solid cream mask — scrolls over the footer beneath */}
      <div
        className="relative z-10 min-h-screen bg-background"
        style={{ marginBottom: footerHeight }}
      >
        {children}
      </div>

      {/* Sticky footer revealed as the mask scrolls away */}
      <div
        ref={footerRef}
        className="sticky bottom-0 -z-10 w-full"
        style={{ marginTop: -footerHeight }}
      >
        <SiteFooter />
      </div>
    </div>
  );
}
