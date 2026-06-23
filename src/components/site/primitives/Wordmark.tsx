import { cn } from "@/lib/utils";
import Image from "next/image";

export function Wordmark({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/combination-mark.png"
        alt="Umbrella Health"
        width={180}
        height={48}
        className={cn("h-10 w-auto object-contain", light && "brightness-0 invert")}
      />
    </span>
  );
}
