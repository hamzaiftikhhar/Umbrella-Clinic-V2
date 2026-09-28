"use client";

import { useEffect, useState } from "react";
import { getSynapseEmbedSrc } from "@/lib/synapse";
import {
  DEFAULT_WIDGET_RADIUS,
  clampWidgetRadius,
  readCachedWidgetAppearance,
} from "@/lib/synapse-widget-appearance";

/** Contact-page always-visible Synapse embed — shell radius from backend config. */
export function SynapseContactEmbed() {
  const [radius, setRadius] = useState(
    () => readCachedWidgetAppearance()?.cornerRadius ?? DEFAULT_WIDGET_RADIUS,
  );

  useEffect(() => {
    let cancelled = false;
    fetch("/api/synapse-widget-config")
      .then((r) => r.json())
      .then((data: { cornerRadius?: number }) => {
        if (cancelled) return;
        setRadius(clampWidgetRadius(data.cornerRadius));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const radiusPx = `${radius}px`;

  return (
    <iframe
      src={getSynapseEmbedSrc()}
      title="Umbrella Health AI Assistant"
      allow="clipboard-write"
      referrerPolicy="strict-origin-when-cross-origin"
      className="mt-8 h-[min(720px,85dvh)] min-h-[520px] w-full border-0 shadow-[0_18px_50px_-18px_rgba(11,14,46,0.2)]"
      style={{ borderRadius: radiusPx }}
    />
  );
}
