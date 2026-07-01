"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "./Container";
import { BookButton } from "./BookButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GALLERY_IMAGES = [
  "/images/APNQkAG2VC7P3b3M7-u1nk5TVqiBrhB-Jb-5gMl7-7wE-NF0Kcu7wYmgGbcKNfvO6wNuHyqWjKZXLFcLcvM0DbAWHqx-CAt3pFKtN5_lavgX1uEgq4VCtVczKo-eZe09-F_0mwaJxsD03Qw3890-h2918-k-no.jpg",
  "/images/APNQkAFOczQSQGPfH60lyTslmZBtZS0FORi3PpPqefEzCy0rafeDlr1WtadgUpPDgQLDBYTpu_fsIF7J0xfmK1rBpLbTIVvqlr4bMDIdleffPWPsFhTPFAm57JFQdgpaB6R4K4DeLYlkw3627-h3024-k-no.jpg",
  "/images/APNQkAE3aRckid3msJlKgTpj6ZemfukqgTeRybAw3fyQR3cHS302IFTaomOuHAdO04rb2vYv4VC1f5jtD-5X-ny4QmQzzbjDk_ajwNTKfMjgc0l1wHpeiEOdRT_DNZ0i46xFhzUqu6ipw4032-h3024-k-no.jpg",
] as const;

/** Homepage “Our space” — approved carousel layout with clinic photography */
export function GalleryBanner() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section aria-label="Inside Umbrella Health" className="px-5 pb-16 sm:px-8 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-card)]">
          <Carousel plugins={[plugin.current]} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {GALLERY_IMAGES.map((src, index) => (
                <CarouselItem key={src}>
                  <div className="relative h-[360px] w-full sm:h-[420px]">
                    <Image
                      src={src}
                      alt={`Inside Umbrella Health ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1216px"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 hidden border-none bg-black/40 text-white hover:bg-black/55 sm:flex" />
            <CarouselNext className="right-4 hidden border-none bg-black/40 text-white hover:bg-black/55 sm:flex" />
          </Carousel>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

          <div className="pointer-events-none absolute inset-0 flex items-center p-8 sm:p-14">
            <div className="pointer-events-auto max-w-md text-primary-foreground">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Our space
              </p>
              <h2 className="mt-3 font-display text-balance text-3xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-4xl">
                Inside <span className="font-light italic">Umbrella Health.</span>
              </h2>
              <div className="mt-6">
                <BookButton variant="light">Book your appointment</BookButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
