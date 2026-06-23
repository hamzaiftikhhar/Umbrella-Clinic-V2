import { Link } from "@/components/AppLink";
import { Instagram, Facebook } from "lucide-react";
import { FOOTER_COLUMNS } from "@/data/nav";
import { FOOTER_DESCRIPTION, FOOTER_TAGLINE } from "@/data/site-content";
import { SITE_ADDRESS, SITE_PHONE } from "@/lib/site";
import { Wordmark } from "./primitives/Wordmark";

export function SiteFooter() {
  return (
    <footer
      className="relative bg-primary text-primary-foreground"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10 lg:gap-14">
          <div className="flex flex-col justify-end">
            <Wordmark light imageClassName="h-28 sm:h-36" />
            <p className="mt-10 max-w-sm font-display text-4xl font-light italic leading-tight text-primary-foreground/95 sm:text-5xl">
              {FOOTER_TAGLINE}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {FOOTER_DESCRIPTION}
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, TikTokIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground/90 transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="pt-4 md:pt-16">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
                {col.title}
              </p>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-10 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>
            {SITE_ADDRESS} · {SITE_PHONE}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-primary-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground">
              Terms
            </Link>
            <Link to="/hipaa-accessibility" className="hover:text-primary-foreground">
              HIPAA & Accessibility
            </Link>
            <span suppressHydrationWarning>© {new Date().getFullYear()} Umbrella Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 3v3.2A5 5 0 0 0 21 11v3a8 8 0 0 1-5-1.7V17a6 6 0 1 1-6-6h1v3.1a3 3 0 1 0 2 2.8V3h3Z" />
    </svg>
  );
}
