"use client";

import type { ComponentType } from "react";
import {
  Certificate,
  Clock,
  FirstAidKit,
  MapPin,
  MoonStars,
  Scan,
  Stethoscope,
  UserFocus,
  UsersThree,
  Waveform,
  type IconProps,
} from "@phosphor-icons/react";
import { medicalSvgProps, type MedicalGlyphProps } from "./MedicalIcon";

const PHOSPHOR_DEFAULTS: Pick<IconProps, "weight" | "size"> = {
  weight: "regular",
  size: 22,
};

function PhosphorGlyph({
  icon: Icon,
  className,
  size = 22,
}: MedicalGlyphProps & { icon: ComponentType<IconProps> }) {
  return <Icon {...PHOSPHOR_DEFAULTS} size={size} className={className} />;
}

/** Migraine & chronic headaches — head profile with pain pulse rays. */
export function MigraineGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M14 4.5c2.2 1.2 3.5 3.4 3.5 6 0 3.6-2.4 6.5-6 7.5" />
      <path d="M11.5 18v2.5" />
      <path d="M8.5 20.5h6" />
      <path d="M7.5 9.5c0-2.8 2-5 4.5-5.5" />
      <path d="M5.5 8.5 4 7" />
      <path d="M6 11.5 4.5 11.5" />
      <path d="M7 14.5 5.5 16" />
      <circle cx="10.5" cy="10" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Memory loss & dementia — brain with connected memory nodes. */
export function MemoryBrainGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <circle cx="9.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <path d="M9.5 10 12 8.5M12 8.5l2.5 2M9.5 10l5 0.5" />
    </svg>
  );
}

/** Parkinson's & tremors — hand with motion arcs. */
export function TremorHandGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M8.5 10V6.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M11.5 10V5.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M14.5 10V6.5a1.5 1.5 0 0 1 3 0v5.5a5.5 5.5 0 0 1-5.5 5.5H10a3 3 0 0 1-3-3v-1.5" />
      <path d="M5.5 12.5c1-.8 2.2-1 3.2-.6" />
      <path d="M4.5 15c1.2-.4 2.4-.2 3.3.5" />
      <path d="M4 17.5c1.4-.2 2.7.3 3.5 1.3" />
    </svg>
  );
}

/** Dystonia & movement disorders — spine with highlighted joints. */
export function MovementDisorderGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 3.5v17" />
      <path d="M9 7h6M8.5 11.5h7M9 16h6" />
      <circle cx="12" cy="7" r="1.35" />
      <circle cx="12" cy="11.5" r="1.35" />
      <circle cx="12" cy="16" r="1.35" />
      <path d="M7.5 19.5c1.2.8 2.6 1 4.5 1s3.3-.2 4.5-1" />
    </svg>
  );
}

/** Epilepsy & seizures — brain with electrical signal. */
export function EpilepsyBrainGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M13.5 8.5 11.5 12l2 1-1.5 3" />
    </svg>
  );
}

/** Stroke prevention — brain with blood vessel pathway. */
export function StrokeBrainGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M7.5 11.5c1.5 1 3 1.2 4.5.5 1.8-.8 3.5-.2 4.5 1.5" />
      <path d="M8 14.5h5.5" />
      <circle cx="14.5" cy="14.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Peripheral neuropathy — branching nerve network. */
export function NeuropathyGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="5.5" r="1.5" />
      <path d="M12 7v3.5" />
      <path d="M12 10.5 8.5 14" />
      <path d="M12 10.5h3.5" />
      <path d="M12 10.5 12 16" />
      <circle cx="8.5" cy="14" r="1.2" />
      <circle cx="15.5" cy="14" r="1.2" />
      <circle cx="12" cy="16" r="1.2" />
      <path d="M8.5 15.2v2.3M15.5 15.2v2.3M12 17.2v2.3" />
      <circle cx="8.5" cy="18.5" r="1" />
      <circle cx="15.5" cy="18.5" r="1" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  );
}

/** Brain fog & cognitive changes — brain with diffuse haze lines. */
export function BrainFogGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M6.5 17.5c1.2-.8 2.6-1.2 4-1.1M7 19.5c1.5-.5 3.2-.4 4.7.4M8.5 21c2-.4 3.8-.2 5.5.8" />
    </svg>
  );
}

/** Sleep disorders — moon with neural sleep waveform. */
export function SleepNeuroGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M15.5 5.5a5.5 5.5 0 1 0 6.2 8.7A7 7 0 1 1 15.5 5.5Z" />
      <path d="M5 15.5h2.5l1.2-2.2 1.3 4.4 1.5-3.1H14" />
    </svg>
  );
}

/** EMG & nerve conduction — nerve pathway to muscle fiber. */
export function EmgNerveGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <circle cx="12" cy="5" r="1.5" />
      <path d="M12 6.5v4" />
      <path d="M8.5 14.5 12 10.5l3.5 4" />
      <path d="M7.5 17.5h9" />
      <path d="M8 15.5v4M10.5 16v3.5M13.5 16v3.5M16 15.5v4" />
    </svg>
  );
}

/** Memory & cognitive assessment — brain with evaluation markers. */
export function CognitiveAssessmentGlyph(props: MedicalGlyphProps) {
  const svg = medicalSvgProps(props);
  return (
    <svg {...svg}>
      <path d="M12 4.5c-2.2 0-4 1.5-4.5 3.5-.8.3-1.5 1-1.8 2-.5 1.6.2 3.3 1.6 4.2-.3 1.4.4 2.8 1.7 3.5.8 1.6 2.6 2.3 4.3 1.8 1.2.8 2.8.6 3.8-.5 1.3-.4 2.2-1.6 2.2-3 1.2-.9 1.8-2.5 1.4-4-.3-1.2-1.2-2.1-2.4-2.5C16.2 6.2 14.3 4.5 12 4.5Z" />
      <path d="M9 18.5h6" />
      <path d="M10 16.5h4" />
      <path d="M11 14.5h2" />
    </svg>
  );
}

/** Advanced diagnostics / technology. */
export function DiagnosticsTechGlyph(props: MedicalGlyphProps) {
  return <PhosphorGlyph icon={Scan} {...props} />;
}

export const NEUROLOGY_CONDITION_GLYPHS = [
  MigraineGlyph,
  MemoryBrainGlyph,
  TremorHandGlyph,
  MovementDisorderGlyph,
  EpilepsyBrainGlyph,
  StrokeBrainGlyph,
  NeuropathyGlyph,
  BrainFogGlyph,
  SleepNeuroGlyph,
] as const;

export const NEUROLOGY_DIAGNOSTIC_GLYPHS = [
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={Stethoscope} {...props} />,
  EmgNerveGlyph,
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={Waveform} {...props} />,
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={Scan} {...props} />,
  CognitiveAssessmentGlyph,
] as const;

export const NEUROLOGY_WHY_GLYPHS = [
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={Certificate} {...props} />,
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={UserFocus} {...props} />,
  DiagnosticsTechGlyph,
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={UsersThree} {...props} />,
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={MapPin} {...props} />,
  (props: MedicalGlyphProps) => <PhosphorGlyph icon={Clock} {...props} />,
] as const;

export {
  Certificate as InsuranceGlyph,
  MoonStars as SleepAccentGlyph,
  FirstAidKit as InsuranceSectionGlyph,
};
