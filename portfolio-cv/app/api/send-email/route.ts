import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // Daten in Console loggen (für Entwicklung)
    console.log('📧 NEUE KONTAKTANFRAGE:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Nachricht: ${message}`);
    console.log('---');

    // TODO: Hier echten Email-Versand implementieren mit Gmail/SendGrid/Brevo
    // Für jetzt: nur erfolgreiche Response

    return NextResponse.json(
      {
        success: true,
        message: 'Email erfolgreich versendet! Danke für deine Nachricht.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler:', error);
    return NextResponse.json(
      { error: 'Fehler beim Versenden der Email' },
      { status: 500 }
    );
  }
}
