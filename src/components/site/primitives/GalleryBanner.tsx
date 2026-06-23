"use client";

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
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function GalleryBanner() {
  const images = [
    "/images/APNQkAG2VC7P3b3M7-u1nk5TVqiBrhB-Jb-5gMl7-7wE-NF0Kcu7wYmgGbcKNfvO6wNuHyqWjKZXLFcLcvM0DbAWHqx-CAt3pFKtN5_lavgX1uEgq4VCtVczKo-eZe09-F_0mwaJxsD03Qw3890-h2918-k-no.jpg",
    "/images/APNQkAFOczQSQGPfH60lyTslmZBtZS0FORi3PpPqefEzCy0rafeDlr1WtadgUpPDgQLDBYTpu_fsIF7J0xfmK1rBpLbTIVvqlr4bMDIdleffPWPsFhTPFAm57JFQdgpaB6R4K4DeLYlkw3627-h3024-k-no.jpg",
    "/images/APNQkAE3aRckid3msJlKgTpj6ZemfukqgTeRybAw3fyQR3cHS302IFTaomOuHAdO04rb2vYv4VC1f5jtD-5X-ny4QmQzzbjDk_ajwNTKfMjgc0l1wHpeiEOdRT_DNZ0i46xFhzUqu6ipw4032-h3024-k-no.jpg",
  ];

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section aria-label="Inside Umbrella Health" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-elegant)]">
            <Carousel
              plugins={[plugin.current as any]}
              className="w-full"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={src}
                      alt={`Inside Umbrella Health ${index + 1}`}
                      className="h-[360px] w-full object-cover sm:h-[420px]"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 hidden sm:flex bg-background/50 hover:bg-background/80 border-none text-white backdrop-blur-sm" />
              <CarouselNext className="right-4 hidden sm:flex bg-background/50 hover:bg-background/80 border-none text-white backdrop-blur-sm" />
            </Carousel>

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />

            <div className="absolute inset-0 flex items-center p-8 sm:p-14 pointer-events-none">
              <div className="max-w-md text-primary-foreground pointer-events-auto">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                  Our space
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
                  Inside <span className="font-display italic font-medium">Umbrella Health.</span>
                </h2>
                <div className="mt-6">
                  <BookButton variant="light">Book your appointment</BookButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
