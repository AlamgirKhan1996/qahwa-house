// ─────────────────────────────────────────────────────────────
//  Qahwa House · Contact Form API Route
//  POST /api/contact
//
//  Validates form data server-side and sends an email.
//  Configure RESEND_API_KEY in .env.local to enable real sending.
//  Falls back to a console log in development.
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';

// ── Types ─────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredLanguage: 'en' | 'ar';
}

// ── Validation helpers ────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function sanitize(str: string): string {
  // Remove potential HTML/script injection
  return str.replace(/[<>]/g, '').trim();
}

// ── Rate limiting (simple in-memory store) ────────────────────
//
// For production, use Upstash Redis or Vercel KV.
// This in-memory store resets on each serverless cold start.

const rateLimitStore = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_MAX = 3;        // max requests
const RATE_LIMIT_WINDOW = 60_000; // per 60 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return true; // allowed
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false; // blocked
  }

  entry.count++;
  return true; // allowed
}

// ── Email sender ──────────────────────────────────────────────
//
// Replace this stub with your preferred email service.
// Example: Resend (https://resend.com)

async function sendContactEmail(data: ContactPayload): Promise<void> {
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL ?? 'hello@qahwahouse.sa';
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL ?? 'noreply@qahwahouse.sa';
  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    // Development fallback — log to console
    console.log('\n📧 [Contact Form Submission]');
    console.log('─'.repeat(40));
    console.log(`From:    ${data.name} <${data.email}>`);
    console.log(`Phone:   ${data.phone ?? 'Not provided'}`);
    console.log(`Subject: ${data.subject}`);
    console.log(`Lang:    ${data.preferredLanguage}`);
    console.log(`Message:\n${data.message}`);
    console.log('─'.repeat(40));
    return;
  }

  // ── Resend integration ──────────────────────────────────────
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: `Qahwa House Contact <${fromEmail}>`,
      to: [toEmail],
      reply_to: data.email,
      subject: `[Qahwa House] ${data.subject}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0A0804; padding: 32px; text-align: center;">
            <h1 style="color: #D4AF37; font-size: 24px; margin: 0;">
              Qahwa House · قهوة هاوس
            </h1>
            <p style="color: #8B7355; font-size: 12px; margin-top: 8px; letter-spacing: 2px; text-transform: uppercase;">
              New Contact Form Submission
            </p>
          </div>

          <div style="padding: 32px; background: #fff; border: 1px solid #e5e5e5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #B8860B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${sanitize(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #B8860B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #D4AF37;">${sanitize(data.email)}</a></td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #B8860B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${sanitize(data.phone)}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #B8860B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${sanitize(data.subject)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #B8860B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Language</td>
                <td style="padding: 8px 0; color: #1a1a1a;">${data.preferredLanguage === 'ar' ? 'Arabic (العربية)' : 'English'}</td>
              </tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />

            <h3 style="color: #B8860B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Message</h3>
            <div style="background: #f9f7f4; padding: 16px; border-left: 3px solid #D4AF37; line-height: 1.8; color: #333; white-space: pre-wrap;">
${sanitize(data.message)}
            </div>
          </div>

          <div style="background: #0A0804; padding: 16px; text-align: center;">
            <p style="color: #5c5c5c; font-size: 11px; margin: 0;">
              Qahwa House · Al-Olaya, Riyadh, Saudi Arabia
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Email sending failed: ${error}`);
  }
}

// ── Route Handler ─────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // ── Rate limiting ──────────────────────────────────────────
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      '127.0.0.1';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 },
      );
    }

    // ── Parse body ─────────────────────────────────────────────
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }

    const payload = body as Partial<ContactPayload>;

    // ── Server-side validation ─────────────────────────────────
    const errors: Record<string, string> = {};

    if (!payload.name?.trim()) {
      errors.name = 'Name is required.';
    }
    if (!payload.email?.trim()) {
      errors.email = 'Email is required.';
    } else if (!isValidEmail(payload.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!payload.subject?.trim()) {
      errors.subject = 'Subject is required.';
    }
    if (!payload.message?.trim()) {
      errors.message = 'Message is required.';
    } else if (payload.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 422 });
    }

    // ── Build sanitized payload ────────────────────────────────
    const clean: ContactPayload = {
      name: sanitize(payload.name!),
      email: payload.email!.trim().toLowerCase(),
      phone: payload.phone ? sanitize(payload.phone) : undefined,
      subject: sanitize(payload.subject!),
      message: sanitize(payload.message!),
      preferredLanguage: payload.preferredLanguage === 'ar' ? 'ar' : 'en',
    };

    // ── Send email ─────────────────────────────────────────────
    await sendContactEmail(clean);

    return NextResponse.json(
      {
        success: true,
        message:
          clean.preferredLanguage === 'ar'
            ? 'تم استلام رسالتك. سنرد عليك خلال 24 ساعة.'
            : "Your message has been received. We'll get back to you within 24 hours.",
      },
      { status: 200 },
    );
  } catch (err) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}

// Only allow POST
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
