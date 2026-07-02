"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ClinicalServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export function ClinicalServiceCard({
  title,
  description,
  imageUrl,
  className,
}: ClinicalServiceCardProps) {
  return (
    <div className={cn("group/card relative min-w-0", className)}>
      <article className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover/card:scale-[1.05]"
          sizes="(max-width: 640px) 50vw, 25vw"
        />

        {/* Default gradient + title */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30 transition-opacity duration-300 group-hover/card:opacity-0"
          aria-hidden
        />
        <h3 className="absolute left-4 top-4 z-10 max-w-[85%] text-balance text-base font-semibold leading-snug text-white transition-opacity duration-300 group-hover/card:opacity-0 sm:left-5 sm:top-5 sm:text-lg">
          {title}
        </h3>

        {/* Hover: in-card overlay — description stays on the same card */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/75 to-black/40 p-5 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 sm:p-6 max-lg:hidden"
          aria-hidden
        >
          <h3 className="mb-2 text-base font-semibold leading-snug text-white sm:text-lg">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-white/85">{description}</p>
        </div>
      </article>

      {/* Mobile / touch: description below card */}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:hidden">{description}</p>
    </div>
  );
}

export function ClinicalServiceRows({
  services,
}: {
  services: ClinicalServiceCardProps[];
}) {
  const rows = [services.slice(0, 4), services.slice(4, 8)];

  return (
    <div className="space-y-4 sm:space-y-5">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {row.map((service) => (
            <ClinicalServiceCard key={service.title} {...service} />
          ))}
        </div>
      ))}
    </div>
  );
}
