"use client";

import type { ReactNode } from "react";
import {
  BackPain,
  Cardiogram,
  Diagnostics,
  Neurology,
  Sleepy,
  Stethoscope,
  Weight,
} from "healthicons-react/outline-24px";
import { cn } from "@/lib/utils";
import type { HealthIconName } from "./icon-keys";

const GLYPHS: Record<HealthIconName, ReactNode> = {
  "primary-care": <Stethoscope />,
  cardiology: <Cardiogram />,
  neurology: <Neurology />,
  sleep: <Sleepy />,
  diagnostics: <Diagnostics />,
  "weight-loss": <Weight />,
  pain: <BackPain />,
};

interface HealthIconProps {
  name: HealthIconName;
  className?: string;
}

/** Health Icons (MIT)  outline 24px glyphs for medical specialties. */
export function HealthIcon({ name, className }: HealthIconProps) {
  return (
    <span
      className={cn(
        "grid h-full w-full place-items-center text-current [&_svg]:h-full [&_svg]:w-full",
        className,
      )}
    >
      {GLYPHS[name]}
    </span>
  );
}
