import { cn } from "@/lib/utils";
import Image from "next/image";

export function Wordmark({ className, imageClassName, light }: { className?: string; imageClassName?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/combination-mark.webp"
        alt="Umbrella Health primary care NYC logo"
        width={800}
        height={200}
        className={cn("h-20 sm:h-24 w-auto object-contain", light && "brightness-0 invert", imageClassName)}
      />
    </span>
  );
}
