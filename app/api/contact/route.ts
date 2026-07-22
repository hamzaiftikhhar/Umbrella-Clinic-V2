import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  reason: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few details.").max(4000),
  // Honeypot — bots fill hidden fields; humans leave them empty.
  company: z.string().max(0).optional().or(z.literal("")),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ error: firstIssue }, { status: 422 });
  }

  const { name, email, phone, reason, message, company } = parsed.data;

  // Silently accept honeypot hits so bots don't learn anything.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form email cannot be delivered.");
    return NextResponse.json(
      { error: "Messaging is temporarily unavailable. Please call the clinic or try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  // Verified sender domain (falls back to Resend's onboarding sender for first-run testing).
  const from = process.env.CONTACT_FROM_EMAIL ?? `${SITE_NAME} <onboarding@resend.dev>`;

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Reason", reason || "General enquiry"],
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;max-width:560px;margin:0 auto">
      <h2 style="font-size:18px;margin:0 0 16px">New contact form message</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0">
        <p style="margin:0 0 6px;color:#64748b;font-size:14px">Message</p>
        <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-line">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await resend.emails.send({
      from,
      to: SITE_EMAIL,
      reply_to: email,
      subject: `Contact form — ${reason || "General enquiry"} — ${name}`,
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again shortly." },
      { status: 500 },
    );
  }
}
