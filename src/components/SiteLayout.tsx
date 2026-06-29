"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

/** Desktop parallax reveal — xl matches the desktop nav breakpoint. */
const DESKTOP_REVEAL_MQ = "(min-width: 1280px)";
const FOOTER_HEIGHT_FALLBACK = "580px";

export function SiteLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const syncFooterHeight = () => {
      const h = el.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty("--site-footer-height", `${h}px`);
      }
    };

    syncFooterHeight();

    const ro = new ResizeObserver(syncFooterHeight);
    ro.observe(el);

    const mq = window.matchMedia(DESKTOP_REVEAL_MQ);
    mq.addEventListener("change", syncFooterHeight);

    return () => {
      ro.disconnect();
      mq.removeEventListener("change", syncFooterHeight);
    };
  }, []);

  return (
    /*
     * Mobile / tablet: normal flex column, cream shell — footer is the document end.
     * Desktop (xl+): parallax reveal — cream mask scrolls over the navy footer.
     *
     * Root cause of iOS overscroll blue bleed: bg-primary + negative footer margins
     * on mobile created extra scroll depth and exposed the blue layer behind content.
     */
    <div className="flex min-h-dvh flex-col bg-background xl:block xl:min-h-0 xl:bg-primary xl:overflow-x-clip">
      <SiteHeader />

      <div
        className="flex-1 xl:relative xl:z-10 xl:min-h-screen xl:flex-none xl:overflow-x-clip xl:bg-background xl:shadow-[0_28px_64px_-24px_rgba(12,20,34,0.18)] xl:mb-[var(--site-footer-height,var(--site-footer-fallback))] xl:rounded-b-[3.5rem] 2xl:rounded-b-[5rem]"
        style={
          {
            "--site-footer-fallback": FOOTER_HEIGHT_FALLBACK,
          } as React.CSSProperties
        }
      >
        {children}
      </div>

      <div
        ref={footerRef}
        className="xl:sticky xl:bottom-0 xl:-z-10 xl:w-full xl:-mt-[var(--site-footer-height,var(--site-footer-fallback))]"
        style={
          {
            "--site-footer-fallback": FOOTER_HEIGHT_FALLBACK,
          } as React.CSSProperties
        }
      >
        <SiteFooter />
      </div>
    </div>
  );
}
