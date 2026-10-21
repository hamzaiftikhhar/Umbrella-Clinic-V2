import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmailBodies, contactFormSchema } from "@/lib/contact-form";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const runtime = "nodejs";

const FROM_ADDRESS = "Website Contact Form <contact@myumbrellahealth.com>";
/** Override with CONTACT_FORM_TO if set; defaults to info@myumbrellahealth.com (SITE_EMAIL). */
const TO_ADDRESS = (process.env.CONTACT_FORM_TO?.trim() || SITE_EMAIL).toLowerCase();
const SUBJECT = "New website contact form submission";
const MIN_SUBMIT_MS = 2_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

type RateBucket = { count: number; resetAt: number };
const rateBuckets = new Map<string, RateBucket>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = rateBuckets.get(ip);
  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX;
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return jsonError("Too many requests. Please wait a moment and try again.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check your details and try again.";
    return jsonError(first, 400);
  }

  const { name, email, message, website, startedAt } = parsed.data;

  // Honeypot filled — pretend success so bots do not retry.
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const elapsed = typeof startedAt === "number" ? Date.now() - startedAt : 0;
  if (!startedAt || elapsed < MIN_SUBMIT_MS || elapsed > 1000 * 60 * 60 * 24) {
    // Timing / missing token — pretend success to avoid tipping off bots.
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return jsonError("Unable to send your message right now. Please try again later.", 503);
  }

  const { text, html } = buildContactEmailBodies({ name, email, message });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: SUBJECT,
      text,
      html,
      headers: {
        "X-Entity-Ref-ID": `uh-contact-${Date.now()}`,
      },
      tags: [{ name: "source", value: "website-contact-form" }],
    });

    if (error) {
      console.error("[contact] Resend error:", error.message ?? error);
      return jsonError("Unable to send your message right now. Please try again later.", 502);
    }

    return NextResponse.json({
      ok: true,
      message: `Thanks — your message was sent to ${SITE_NAME}. We will reply by email.`,
    });
  } catch (err) {
    console.error("[contact] Unexpected send failure:", err);
    return jsonError("Unable to send your message right now. Please try again later.", 502);
  }
}
