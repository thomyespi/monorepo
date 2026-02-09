import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `GEN12 Web <${process.env.SENDER_EMAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.CONTACT_EMAIL || 'gen12software@gmail.com'],
      subject: `Nuevo contacto: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">Nueva Consulta desde la Web</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Servicio de Interés:</strong> ${service}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
            Este mensaje fue enviado desde el formulario de contacto de GEN12 Software.
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
