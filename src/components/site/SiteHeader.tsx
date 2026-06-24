"use client";

import { Link } from "@/components/AppLink";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookButton } from "./primitives/BookButton";
import { Wordmark } from "./primitives/Wordmark";
import { PRIMARY_NAV, SPECIALTIES_NAV } from "@/data/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ${
        scrolled
          ? "border-b border-border/50 bg-background/95 shadow-sm"
          : "border-b border-transparent bg-background/90"
      }`}
    >
      <div className="grid h-16 w-full grid-cols-2 items-center px-4 xl:grid-cols-[1fr_auto_1fr] xl:px-8">
        <div className="flex items-center justify-start">
          <Link to="/" aria-label="Umbrella Health home" className="flex-shrink-0 translate-y-1">
            <Wordmark imageClassName="h-[4rem] sm:h-[4.5rem] scale-[1.3] origin-left" />
          </Link>
        </div>

        <nav aria-label="Primary" className="-translate-y-1 hidden justify-center xl:flex">
          <ul className="flex items-center gap-0.5">
            {!isHome && (
              <li>
                <Link
                  to="/"
                  activeProps={{ className: "text-primary font-medium" }}
                  className="rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
            )}
            <li
              className="relative"
              onMouseEnter={() => setSpecialtiesOpen(true)}
              onMouseLeave={() => setSpecialtiesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
              >
                Our Specialties <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {specialtiesOpen && (
                <div className="absolute left-0 top-full z-50 min-w-[280px] pt-2">
                  <ul className="rounded-2xl border border-border/60 bg-card p-2 shadow-[var(--shadow-card)]">
                    {SPECIALTIES_NAV.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          className="block rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-secondary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            {PRIMARY_NAV.filter((item) => item.label !== "Home").map((item) => (
              <li key={item.to + item.label}>
                <Link
                  to={item.to}
                  activeProps={{ className: "text-primary font-medium" }}
                  className="rounded-full px-3 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="-translate-y-1 hidden items-center justify-end xl:flex">
          <BookButton showArrow={false}>Book appointment</BookButton>
        </div>

        <div className="flex justify-end xl:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border/70 bg-card p-2.5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border/60 bg-background xl:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <ul className="flex flex-col gap-0.5">
              {!isHome && (
                <li>
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-foreground/85 hover:bg-secondary"
                  >
                    Home
                  </Link>
                </li>
              )}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileSpecialtiesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base text-foreground/85 hover:bg-secondary"
                >
                  Our Specialties
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileSpecialtiesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSpecialtiesOpen && (
                  <ul className="mb-2 ml-3 border-l border-border/60 pl-3">
                    {SPECIALTIES_NAV.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-sm text-foreground/75 hover:bg-secondary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {PRIMARY_NAV.filter((item) => item.label !== "Home").map((item) => (
                <li key={item.to + item.label}>
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
