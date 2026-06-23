"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MIN_IMAGE_SCALE = 1.06;
const MAX_IMAGE_SCALE = 1.22;

export function HeroParallaxImage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [imageScale, setImageScale] = useState(MIN_IMAGE_SCALE);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const el = frameRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.92;
      const end = viewport * 0.08;
      const progress = 1 - Math.min(Math.max((rect.top - end) / (start - end), 0), 1);
      setImageScale(MIN_IMAGE_SCALE + progress * (MAX_IMAGE_SCALE - MIN_IMAGE_SCALE));
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border/60 shadow-[var(--shadow-elegant)] sm:rounded-[36px]"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `scale(${imageScale})`,
          transformOrigin: "center center",
        }}
      >
        <Image
          src="/images/Dr-rajat-hero-section.png"
          alt="Dr. Rajat at Umbrella Health clinic in New York City"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1152px"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 via-primary/5 to-transparent" />
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
        <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
          Union Square · NYC
        </span>
      </div>
    </div>
  );
}
