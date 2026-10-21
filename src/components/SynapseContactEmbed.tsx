"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { getSynapseEmbedSrc } from "@/lib/synapse";
import {
  type WidgetAppearance,
  DEFAULT_WIDGET_RADIUS,
  normalizeWidgetAppearance,
  readCachedWidgetAppearance,
  WIDGET_APPEARANCE_FALLBACK,
  writeCachedWidgetAppearance,
} from "@/lib/synapse-widget-appearance";

const EMBED_SRC = getSynapseEmbedSrc();
/** Height of Synapse's embedded header — cropped so the site owns the chrome. */
const EMBED_HEADER_PX = 69;

/**
 * Contact-page Synapse embed: fixed shell, site-owned header, iframe cropped
 * so the chat fills the viewport without nested scroll / clipped chrome.
 */
export function SynapseContactEmbed() {
  // Keep SSR + first client paint identical — hydrate from cache/API only in effects.
  const [look, setLook] = useState<WidgetAppearance>(WIDGET_APPEARANCE_FALLBACK);
  const [embedBlocked, setEmbedBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const cached = readCachedWidgetAppearance();
    if (cached) setLook(cached);

    let cancelled = false;
    fetch("/api/synapse-widget-config")
      .then((r) => r.json())
      .then((data: Partial<WidgetAppearance>) => {
        if (cancelled) return;
        const next = normalizeWidgetAppearance(data);
        setLook(next);
        writeCachedWidgetAppearance(next);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const checkBlocked = () => {
      try {
        const href = iframe.contentWindow?.location.href ?? "";
        if (!href || href === "about:blank" || /chromewebdata|chrome-error/.test(href)) {
          setEmbedBlocked(true);
        }
      } catch {
        // Cross-origin — embed is loading normally.
      }
    };

    iframe.addEventListener("load", checkBlocked);
    const timeout = window.setTimeout(checkBlocked, 3500);
    return () => {
      iframe.removeEventListener("load", checkBlocked);
      window.clearTimeout(timeout);
    };
  }, []);

  const radiusPx = `${look.cornerRadius || DEFAULT_WIDGET_RADIUS}px`;
  const avatarSrc = look.avatarUrl || WIDGET_APPEARANCE_FALLBACK.avatarUrl;
  const assistantTitle = `${look.clinicName} Assistant`;

  return (
    <div
      className="relative mx-auto mt-8 flex w-full max-w-[540px] flex-col overflow-hidden border border-border/70 bg-background shadow-[var(--shadow-card)]"
      style={
        {
          // Mobile-first: fit the chat + composer in the viewport without page-cutting the shell.
          height: "min(580px, calc(100dvh - 11.5rem))",
          minHeight: "420px",
          borderRadius: radiusPx,
          ["--widget-radius" as string]: radiusPx,
        } as CSSProperties
      }
    >
      <div
        className="relative z-20 flex shrink-0 items-center gap-3 border-b border-border/60 bg-background px-4 py-3.5"
        style={{ borderTopLeftRadius: radiusPx, borderTopRightRadius: radiusPx }}
      >
        {/* Backend avatar is often a data URL — next/image cannot optimize it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          alt=""
          className="size-9 shrink-0 rounded-full bg-secondary object-cover ring-1 ring-border/70"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-tight text-foreground">
            {assistantTitle}
          </p>
          <p className="mt-0.5 truncate text-xs leading-tight text-muted-foreground">
            {look.greeting}
          </p>
        </div>
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-success-surface px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-success"
          aria-hidden
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Online
        </span>
      </div>

      <div className="relative z-0 min-h-0 flex-1 overflow-hidden bg-background">
        <iframe
          ref={iframeRef}
          src={EMBED_SRC}
          title={assistantTitle}
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-x-0 bottom-0 w-full border-0"
          style={{
            top: -EMBED_HEADER_PX,
            height: `calc(100% + ${EMBED_HEADER_PX}px)`,
            borderBottomLeftRadius: radiusPx,
            borderBottomRightRadius: radiusPx,
          }}
        />
        {embedBlocked ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background px-6 text-center">
            <p className="text-sm font-semibold text-foreground">Assistant couldn&apos;t load</p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Please refresh the page, or use the Send a message form above / call the clinic.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
