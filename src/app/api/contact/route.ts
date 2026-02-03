import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'temp_key_for_build');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectDetails, type = 'inquiry' } = body;

    const subject = type === 'waitlist'
      ? `New Waitlist Signup: ${email}`
      : `New Inquiry from ${name || email}`;

    const text = type === 'waitlist'
      ? `New Waitlist Signup:\nEmail: ${email}`
      : `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Project Details: ${projectDetails}
      `;

    const { data, error } = await resend.emails.send({
      from: 'Fordest Website <info@mail.fordestech.com>',
      to: ['support@mails.fordestech.com'],
      subject,
      text,
    });

    if (error) {
      return NextResponse.json({ error: error.message || error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
