import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { IMG } from "@/data/images";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Umbrella+Health/@40.7366832,-73.9952339,4z/data=!4m16!1m9!3m8!1s0x89c259dd725169a1:0xe7be074e390093f4!2sUmbrella+Health!8m2!3d40.7363331!4d-73.9952765!9m1!1b1!16s%2Fg%2F11v5wmp9bk!3m5!1s0x89c259dd725169a1:0xe7be074e390093f4!8m2!3d40.7363331!4d-73.9952765!16s%2Fg%2F11v5wmp9bk?entry=ttu";

export function LocationBanner() {
  return (
    <section aria-labelledby="location-heading" className="relative w-full bg-background">
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[424px] w-full sm:h-[494px] md:h-[541px] lg:h-[588px]">
            <Image
              src={IMG.clinicInterior}
              alt="Inside Umbrella Health clinic in New York City"
              fill
              className="object-cover object-[center_42%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Asymmetric organic wave — high left, dips past center, rises right */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-0 z-10 w-full fill-background"
              viewBox="0 0 1440 160"
              preserveAspectRatio="none"
              style={{ height: "7.5vw", minHeight: "58px", maxHeight: "112px" }}
              aria-hidden
            >
              <path d="M0,0 L1440,0 L1440,52 C1310,78 1120,138 760,128 C460,118 200,42 0,12 Z" />
            </svg>

            <div className="pointer-events-none absolute inset-0 z-20 flex items-center pb-0">
              <Container className="pointer-events-auto pb-0">
                <div className="max-w-2xl text-primary-foreground">
                  <p className="text-base font-medium tracking-tight text-primary-foreground/90 sm:text-lg">
                    Visit Us
                  </p>

                  <h2
                    id="location-heading"
                    className="mt-3 max-w-lg text-balance text-xl font-semibold leading-snug tracking-tight sm:text-2xl md:text-[1.75rem]"
                  >
                    Modern Medicine In The Heart Of Lower Manhattan
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                    Conveniently located near Union Square, Umbrella Health serves patients across
                    Flatiron, Gramercy, Greenwich Village, Chelsea, SoHo, Tribeca, FiDi, and Downtown
                    NYC.
                  </p>

                  <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/90 sm:text-base">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                    <span>32 W 14th St, New York</span>
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      to="/visit-us"
                      className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 bg-primary-foreground/10 px-6 py-2.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/55 hover:bg-primary-foreground/15"
                    >
                      Our Clinics
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-transparent px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:border-primary-foreground/45 hover:bg-primary-foreground/10"
                    >
                      Get Directions
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
    </section>
  );
}
