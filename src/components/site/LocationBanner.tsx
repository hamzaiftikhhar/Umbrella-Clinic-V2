import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Reveal } from "./primitives/Reveal";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Umbrella+Health/@40.7366832,-73.9952339,4z/data=!4m16!1m9!3m8!1s0x89c259dd725169a1:0xe7be074e390093f4!2sUmbrella+Health!8m2!3d40.7363331!4d-73.9952765!9m1!1b1!16s%2Fg%2F11v5wmp9bk!3m5!1s0x89c259dd725169a1:0xe7be074e390093f4!8m2!3d40.7363331!4d-73.9952765!16s%2Fg%2F11v5wmp9bk?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

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

        <div className="relative w-full pt-12 sm:pt-16 bg-background">
          <img
            src="/images/street-view.png"
            alt="Umbrella Health clinic exterior at 200 Lafayette Street in New York City"
            className="h-[500px] w-full object-cover object-top sm:h-[600px]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/30 to-transparent" />

          {/* Content container so text aligns with the rest of the page */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <div className="max-w-[480px] text-primary-foreground">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/80">
                  Visit Us
                </p>
                <h2
                  id="location-heading"
                  className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[3.5rem]"
                >
                  Modern Medicine In The Heart Of{" "}
                  <span className="font-display font-medium italic">Lower Manhattan</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                  Conveniently located near Union Square, Umbrella Health serves patients across
                  Flatiron, Gramercy, Greenwich Village, Chelsea, SoHo, Tribeca, FiDi, and
                  Downtown NYC.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-95"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    Get Directions
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    to="/visit-us"
                    className="group inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-all hover:bg-background/20 active:scale-95"
                  >
                    Our Clinics
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
