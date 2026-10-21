import { z } from "zod";

export const CONTACT_NAME_MAX = 100;
export const CONTACT_EMAIL_MAX = 254;
export const CONTACT_MESSAGE_MAX = 2000;
export const CONTACT_MESSAGE_MIN = 10;

/** Shared client + server validation for the general enquiry form. */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(CONTACT_NAME_MAX, `Name must be ${CONTACT_NAME_MAX} characters or fewer.`),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(CONTACT_EMAIL_MAX, `Email must be ${CONTACT_EMAIL_MAX} characters or fewer.`)
    .email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(CONTACT_MESSAGE_MIN, `Message must be at least ${CONTACT_MESSAGE_MIN} characters.`)
    .max(CONTACT_MESSAGE_MAX, `Message must be ${CONTACT_MESSAGE_MAX} characters or fewer.`),
  /** Honeypot — bots that fill this are rejected silently on the server. */
  website: z.string().max(200).optional(),
  /** Client-set timestamp (ms) used for a basic timing check. */
  startedAt: z.number().int().positive().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function escapePlainText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactEmailBodies(input: { name: string; email: string; message: string }): {
  text: string;
  html: string;
} {
  const text = [
    "New website contact form submission",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    "Message:",
    input.message,
    "",
    "—",
    "This is a general enquiry from the website contact form.",
    "Please do not expect medical information in this message.",
  ].join("\n");

  const safeName = escapePlainText(input.name);
  const safeEmail = escapePlainText(input.email);
  const safeMessage = escapePlainText(input.message).replace(/\n/g, "<br />");

  const html = `
    <div style="font-family: system-ui, -apple-system, Segoe UI, sans-serif; line-height: 1.5; color: #111;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New website contact form submission</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
      <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e5e5;" />
      <p style="margin: 0; font-size: 12px; color: #666;">
        This is a general enquiry from the website contact form.
        Please do not expect medical information in this message.
      </p>
    </div>
  `.trim();

  return { text, html };
}
