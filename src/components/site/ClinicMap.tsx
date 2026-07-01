import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Container } from "./primitives/Container";
import { SITE_ADDRESS, SITE_NAME, SITE_PHONE } from "@/lib/site";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Umbrella+Health,+32+W+14th+St,+New+York,+NY+10011&output=embed";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Umbrella+Health,+32+W+14th+St,+New+York,+NY+10011";

export function ClinicMap() {
  return (
    <section aria-labelledby="map-heading" className="bg-background py-20 sm:py-28">
      <Container size="lg">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
            Find us
          </p>
          <h2
            id="map-heading"
            className="font-display text-balance text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
          >
            In the heart of{" "}
            <span className="font-light italic text-primary">Lower Manhattan.</span>
          </h2>
        </div>

        <div className="group relative overflow-hidden rounded-[1.75rem] border border-border/60 shadow-[var(--shadow-card)]">
          <iframe
            title={`Map showing ${SITE_NAME} in New York`}
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[420px] w-full border-0 transition-[filter] duration-500 ease-[var(--ease-premium)] [filter:grayscale(0.4)_contrast(1.02)] group-hover:[filter:grayscale(0)] sm:h-[500px]"
          />

          {/* Floating info card */}
          <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-auto sm:left-6 sm:top-6 sm:bottom-auto">
            <div className="pointer-events-auto max-w-sm rounded-2xl border border-border/60 bg-card/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:p-6">
              <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                {SITE_NAME}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {SITE_ADDRESS}
              </p>
              <a
                href={`tel:${SITE_PHONE.replace(/[^\d+]/g, "")}`}
                className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition-premium hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {SITE_PHONE}
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-premium hover:opacity-90"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4 transition-premium group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
