"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/components/AppLink";
import { cn } from "@/lib/utils";

export interface ClinicalServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
}

export function ClinicalServiceCard({
  title,
  description,
  imageUrl,
  href,
  className,
}: ClinicalServiceCardProps) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <article className="relative h-[400px] w-full overflow-hidden rounded-[2rem]">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
            <p className="max-w-[90%] text-sm leading-relaxed text-stone-200">{description}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
