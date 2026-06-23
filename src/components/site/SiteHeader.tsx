"use client";

import { Link } from "@/components/AppLink";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BookButton } from "./primitives/BookButton";
import { Wordmark } from "./primitives/Wordmark";
import { PRIMARY_NAV, MORE_NAV } from "@/data/nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
        : "bg-background/85 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <div className="w-full grid grid-cols-2 xl:grid-cols-[1fr_auto_1fr] items-center h-16 px-4 xl:px-8">
        <div className="flex justify-start items-center">
          <Link to="/" aria-label="Umbrella Health home" className="flex-shrink-0 translate-y-1">
            <Wordmark imageClassName="h-[4rem] sm:h-[4.5rem] scale-[1.3] origin-left" />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden xl:flex justify-center -translate-y-1">
          <ul className="flex items-center gap-0.5">
            {PRIMARY_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeProps={{ className: "text-primary font-medium" }}
                  className="rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
              >
                More <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full min-w-[220px] pt-2 z-50">
                  <ul className="rounded-2xl border border-border/60 bg-card p-2 shadow-[var(--shadow-card)]">
                    {MORE_NAV.map((m) => (
                      <li key={m.to}>
                        <Link
                          to={m.to}
                          className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                        >
                          {m.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className="hidden xl:flex justify-end items-center -translate-y-1">
          <BookButton showArrow={false}>Book appointment</BookButton>
        </div>

        <div className="flex justify-end xl:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border/70 bg-background/60 p-2.5 backdrop-blur"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-xl xl:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <ul className="flex flex-col gap-0.5">
              {[...PRIMARY_NAV, ...MORE_NAV].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-foreground/85 hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <BookButton className="w-full">Book appointment</BookButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
