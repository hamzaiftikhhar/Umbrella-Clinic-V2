"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const REASONS = [
  "General enquiry",
  "New patient appointment",
  "Insurance & billing",
  "Existing patient",
  "Careers",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground shadow-[var(--shadow-soft)] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/15";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
      {children}
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      reason: String(data.get("reason") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-border/60 bg-card p-10 text-center shadow-[var(--shadow-card)]">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--accent-emerald)]/12 text-[color:var(--accent-emerald)]">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium text-foreground">Message sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. A member of our team will get back to you within one business
          day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">Full name</Label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Jane Doe"
              className={fieldClass}
            />
          </div>
          <div>
            <Label htmlFor="contact-email">Email</Label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jane@email.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-phone">Phone (optional)</Label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(212) 555-0100"
              className={fieldClass}
            />
          </div>
          <div>
            <Label htmlFor="contact-reason">Reason for contact</Label>
            <select id="contact-reason" name="reason" defaultValue={REASONS[0]} className={fieldClass}>
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="contact-message">How can we help?</Label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Share a few details so we can point you to the right team…"
            className={cn(fieldClass, "resize-y")}
          />
        </div>

        {/* Honeypot — hidden from users, catches bots */}
        <div aria-hidden className="hidden">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {status === "error" && error && (
          <p role="alert" className="text-sm font-medium text-[color:var(--destructive,#dc2626)]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_32px_-14px_color-mix(in_oklab,var(--primary)_65%,transparent)] ring-1 ring-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-glow disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to be contacted about your enquiry. Please don&apos;t share
          sensitive medical details here.
        </p>
      </div>
    </form>
  );
}
