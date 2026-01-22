'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const mensaje = formData.get('mensaje') as string;

    if (!nombre || !email || !mensaje) {
        return { error: 'Faltan campos requeridos' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['thomasespinosa98@gmail.com'],
            replyTo: email,
            subject: `Nuevo mensaje de contacto de ${nombre}`,
            html: `
                <div>
                    <h1>Nuevo mensaje de contacto</h1>
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${mensaje}</p>
                </div>
            `,
        });

        if (error) {
            console.error('Error sending email:', error);
            return { error: error.message };
        }

        return { success: true, data };
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return { error: error.message || 'Error desconocido' };
    }
}
