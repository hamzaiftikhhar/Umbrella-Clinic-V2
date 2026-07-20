import type { ReactNode } from "react";
import { GeoImage, geoImgProps } from "./GeoImage";
import { Container } from "./Container";
import { BookButton } from "./BookButton";

export function StatCallout({
  stat,
  title,
  description,
  image,
  imageAlt,
  cta,
}: {
  stat: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: ReactNode;
}) {
  const isRemote = image.startsWith("http");

  return (
    <section className="section-py bg-secondary/30" aria-label="Outcomes">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-card)]">
          <div className="grid items-stretch md:grid-cols-2">
              <div className="flex flex-col justify-center bg-primary p-8 text-primary-foreground sm:p-12 md:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
                  Patient outcomes
                </p>
                <p className="mt-4 font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl md:text-8xl">
                  {stat}
                </p>
                <h2 className="mt-5 max-w-md text-balance text-2xl font-semibold sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                  {description}
                </p>
                <div className="mt-8">
                  {cta ?? <BookButton variant="light">Book appointment</BookButton>}
                </div>
              </div>

              <div className="relative min-h-[300px] md:min-h-full">
                {isRemote ? (
                  <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    {...geoImgProps(imageAlt)}
                  />
                ) : (
                  <GeoImage
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-l md:from-primary/20 md:to-transparent" />
              </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
