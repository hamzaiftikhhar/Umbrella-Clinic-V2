"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setFooterHeight(entries[0].target.getBoundingClientRect().height);
      }
    });

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <SiteHeader />

      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-0 z-0">
        <div ref={footerRef} className="pointer-events-auto">
          <SiteFooter />
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 bg-background">{children}</div>
        <div
          aria-hidden="true"
          style={{ height: footerHeight ? `${footerHeight}px` : undefined }}
          className={!footerHeight ? "h-[540px] sm:h-[620px]" : "shrink-0"}
        />
      </div>
    </div>
  );
}
