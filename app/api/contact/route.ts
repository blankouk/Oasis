import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, type, description } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Oasis Studio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL ?? '',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nType: ${type ?? '—'}\n\n${description ?? ''}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
  }
}
