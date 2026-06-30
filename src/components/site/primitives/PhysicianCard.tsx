import type { PhysicianAccent } from "@/data/physicians";

interface PhysicianCardProps {
  name: string;
  title: string;
  focus?: string[];
  accent?: PhysicianAccent;
  className?: string;
}

const ACCENT_SURFACE: Record<PhysicianAccent, string> = {
  navy: "bg-secondary text-primary",
  emerald: "bg-accent-emerald-surface text-accent-emerald",
  teal: "bg-accent-teal-surface text-accent-teal",
  amber: "bg-accent-amber-surface text-accent-amber",
};

function initials(name: string) {
  const cleaned = name.replace(/^Dr\.?\s+/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const letters = parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0]?.[0] ?? "";
  return letters.toUpperCase();
}

/** Art-directed physician card — monogram placeholder, no stock photography. */
export function PhysicianCard({ name, title, focus, accent = "navy", className }: PhysicianCardProps) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition-premium hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${className ?? ""}`}
    >
      <div
        className={`relative aspect-[4/5] w-full place-items-center ${ACCENT_SURFACE[accent]}`}
        aria-hidden
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden>
          <defs>
            <pattern id={`grid-${accent}`} width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${accent})`} />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-5xl font-medium tracking-tight transition-premium group-hover:scale-105">
            {initials(name)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-medium leading-tight text-foreground">{name}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {title}
        </p>
        {focus && focus.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-border/70 bg-secondary/40 px-2.5 py-1 text-[11px] text-foreground/70"
              >
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
