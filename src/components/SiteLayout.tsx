"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { cn } from "@/lib/utils";

/** Prevents layout shift before footer is measured on desktop. */
const FOOTER_HEIGHT_FALLBACK = 580;

const DESKTOP_LAYOUT_MQ = "(min-width: 768px)";

function useDesktopLayout() {
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(DESKTOP_LAYOUT_MQ);
    const update = () => setIsDesktopLayout(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktopLayout;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(FOOTER_HEIGHT_FALLBACK);
  const isDesktopLayout = useDesktopLayout();

  useLayoutEffect(() => {
    if (!isDesktopLayout) return;

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
  }, [isDesktopLayout]);

  return (
    <div
      className={cn(
        "relative isolate overflow-x-clip",
        /* Mobile: cream canvas, footer in normal flow  no blue layer under content */
        "flex min-h-dvh flex-col bg-background",
        /* Desktop: parallax reveal  blue canvas behind the scrolling cream mask */
        "md:block md:min-h-0 md:bg-primary",
      )}
    >
      <SiteHeader />

      <div
        className={cn(
          "relative z-10 bg-background",
          "flex-1 md:flex-none md:min-h-screen md:overflow-x-clip",
        )}
        style={isDesktopLayout ? { marginBottom: footerHeight } : undefined}
      >
        {children}
      </div>

      <div
        ref={footerRef}
        className={cn("w-full shrink-0", isDesktopLayout && "sticky bottom-0 -z-10")}
        style={isDesktopLayout ? { marginTop: -footerHeight } : undefined}
      >
        <SiteFooter />
      </div>
    </div>
  );
}
