"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import {
  CONTACT_EMAIL_MAX,
  CONTACT_MESSAGE_MAX,
  CONTACT_NAME_MAX,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import { PremiumButton } from "@/components/site/primitives/PremiumButton";
import { cn } from "@/lib/utils";

type Status = "idle" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-border/80 bg-background px-3.5 py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted-foreground/65 focus:border-primary/45 focus:ring-2 focus:ring-primary/12 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm";

function FormNotice({
  tone,
  title,
  children,
  role,
}: {
  tone: "neutral" | "success" | "error";
  title: string;
  children: ReactNode;
  role?: "status" | "alert";
}) {
  const toneClass =
    tone === "success"
      ? "border-l-success bg-success-surface/70"
      : tone === "error"
        ? "border-l-destructive bg-destructive/[0.04]"
        : "border-l-primary/55 bg-secondary/50";

  return (
    <div
      role={role}
      className={cn("border border-border/50 border-l-[3px] px-4 py-3.5", toneClass)}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (status !== "success") return;
    const timer = window.setTimeout(() => setStatus("idle"), 12_000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    setServerMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt }),
      });

      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        message?: string;
      } | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setServerMessage(
          data?.error || "Something went wrong. Please try again or call the clinic.",
        );
        return;
      }

      setStatus("success");
      setServerMessage(data.message || "Thanks — your message was sent. We will reply by email.");
      reset({ name: "", email: "", message: "", website: "" });
    } catch {
      setStatus("error");
      setServerMessage("Unable to reach the server. Check your connection and try again.");
    }
  });

  return (
    <div className="border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] sm:p-7 md:p-8">
      <FormNotice tone="neutral" title="Please note">
        Do not include medical information or sensitive patient details. This form is for general
        enquiries only — not clinical messages or medical records.
      </FormNotice>

      <form
        onSubmit={onSubmit}
        noValidate
        className="mt-6 space-y-5"
        aria-describedby="contact-form-privacy"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          style={{ position: "absolute", left: "-10000px", top: "auto" }}
          {...register("website")}
        />

        <div className="grid gap-5">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
              Full name <span className="text-destructive">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              maxLength={CONTACT_NAME_MAX}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              placeholder="Jane Doe"
              className={cn(
                fieldClass,
                errors.name && "border-destructive/55 focus:ring-destructive/15",
              )}
              {...register("name")}
            />
            {errors.name && (
              <p id="contact-name-error" role="alert" className="text-xs text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={CONTACT_EMAIL_MAX}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder="you@example.com"
              className={cn(
                fieldClass,
                errors.email && "border-destructive/55 focus:ring-destructive/15",
              )}
              {...register("email")}
            />
            {errors.email && (
              <p id="contact-email-error" role="alert" className="text-xs text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-3">
            <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
              Message <span className="text-destructive">*</span>
            </label>
            <span id="contact-message-hint" className="text-[11px] text-muted-foreground">
              Max {CONTACT_MESSAGE_MAX}
            </span>
          </div>
          <textarea
            id="contact-message"
            rows={5}
            maxLength={CONTACT_MESSAGE_MAX}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-message-hint"}
            placeholder="Hours, insurance, or how to get started — keep it general."
            className={cn(
              fieldClass,
              "min-h-[8.5rem] resize-y",
              errors.message && "border-destructive/55 focus:ring-destructive/15",
            )}
            {...register("message")}
          />
          {errors.message && (
            <p id="contact-message-error" role="alert" className="text-xs text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>

        {status === "success" && serverMessage && (
          <FormNotice tone="success" title="Message sent" role="status">
            {serverMessage}
          </FormNotice>
        )}

        {status === "error" && serverMessage && (
          <FormNotice tone="error" title="Unable to send" role="alert">
            <p>{serverMessage}</p>
            <p className="mt-2 text-muted-foreground">
              Call{" "}
              <a
                className="font-medium text-foreground underline-offset-2 hover:underline"
                href={`tel:${SITE_PHONE.replace(/\D/g, "")}`}
              >
                {SITE_PHONE}
              </a>{" "}
              or email{" "}
              <a
                className="font-medium text-foreground underline-offset-2 hover:underline"
                href={`mailto:${SITE_EMAIL}`}
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </FormNotice>
        )}

        <div className="flex flex-col gap-3 border-t border-border/50 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p id="contact-form-privacy" className="text-xs leading-relaxed text-muted-foreground">
            We may reply by email about your enquiry. Do not use this form for emergencies — call
            911.
          </p>
          <PremiumButton
            type="submit"
            disabled={isSubmitting}
            className="w-full shrink-0 sm:w-auto sm:min-w-[11.5rem]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" aria-hidden />
                Send message
              </>
            )}
          </PremiumButton>
        </div>
      </form>
    </div>
  );
}
