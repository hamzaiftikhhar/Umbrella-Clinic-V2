import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";

export function LocationBanner() {
  return (
    <section aria-labelledby="location-heading" className="relative w-full overflow-hidden">
      <Reveal>
        {/* Wavy top edge using background color */}
        <svg 
          className="absolute inset-x-0 -top-1 z-20 w-full fill-background" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          style={{ height: "6vw", minHeight: "50px", maxHeight: "100px" }}
          aria-hidden="true"
        >
          <path d="M0,0 L1440,0 L1440,20 C1000,120 400,100 0,10 Z" />
        </svg>

        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=80"
            alt="Umbrella Health reception with sage green millwork and warm wood accents"
            className="h-[500px] w-full object-cover sm:h-[600px]"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/30 to-transparent" />
          
          {/* Content container so text aligns with the rest of the page */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <div className="max-w-[420px] text-primary-foreground">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/80">
                  Now open
                </p>
                <h2 id="location-heading" className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[3.5rem]">
                  Visit us in{" "}
                  <span className="font-display font-medium italic">New York City</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                  200 Lafayette Street, NoHo — steps from Spring Street station.
                </p>
                <Link
                  to="/visit-us"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-8 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-all hover:bg-background hover:text-foreground hover:shadow-lg active:scale-95"
                >
                  Our Clinics
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
