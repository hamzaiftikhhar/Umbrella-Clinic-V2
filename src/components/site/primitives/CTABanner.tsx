"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { BookButton } from "./BookButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CLINIC_GALLERY_IMAGES = [
  "/images/APNQkAG2VC7P3b3M7-u1nk5TVqiBrhB-Jb-5gMl7-7wE-NF0Kcu7wYmgGbcKNfvO6wNuHyqWjKZXLFcLcvM0DbAWHqx-CAt3pFKtN5_lavgX1uEgq4VCtVczKo-eZe09-F_0mwaJxsD03Qw3890-h2918-k-no.jpg",
  "/images/APNQkAFOczQSQGPfH60lyTslmZBtZS0FORi3PpPqefEzCy0rafeDlr1WtadgUpPDgQLDBYTpu_fsIF7J0xfmK1rBpLbTIVvqlr4bMDIdleffPWPsFhTPFAm57JFQdgpaB6R4K4DeLYlkw3627-h3024-k-no.jpg",
  "/images/APNQkAE3aRckid3msJlKgTpj6ZemfukqgTeRybAw3fyQR3cHS302IFTaomOuHAdO04rb2vYv4VC1f5jtD-5X-ny4QmQzzbjDk_ajwNTKfMjgc0l1wHpeiEOdRT_DNZ0i46xFhzUqu6ipw4032-h3024-k-no.jpg",
] as const;

export interface CTABannerProps {
  eyebrow?: string;
  title?: string;
  italic?: string;
  ctaLabel?: string;
  images?: readonly string[];
  imageAlt?: string;
  ariaLabel?: string;
}

export function CTABanner({
  eyebrow,
  title = "Take the first step to",
  italic = "feel measurably better.",
  ctaLabel = "Book your appointment",
  images = CLINIC_GALLERY_IMAGES,
  imageAlt = "Inside Umbrella Health clinic",
  ariaLabel = "Get started",
}: CTABannerProps) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section aria-label={ariaLabel} className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-elegant)]">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{ loop: true }}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={src}>
                    <div className="relative h-[320px] w-full sm:h-[400px]">
                      <Image
                        src={src}
                        alt={`${imageAlt} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 1216px"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 hidden border-none bg-background/50 text-white backdrop-blur-sm hover:bg-background/80 sm:flex" />
              <CarouselNext className="right-4 hidden border-none bg-background/50 text-white backdrop-blur-sm hover:bg-background/80 sm:flex" />
            </Carousel>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            <div className="pointer-events-none absolute inset-0 flex items-center p-8 sm:p-14">
              <div className="pointer-events-auto max-w-md text-primary-foreground">
                {eyebrow && (
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                    {eyebrow}
                  </p>
                )}
                <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                  {title}{" "}
                  <span className="font-display font-light italic">{italic}</span>
                </h2>
                <div className="mt-6">
                  <BookButton variant="light">{ctaLabel}</BookButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
