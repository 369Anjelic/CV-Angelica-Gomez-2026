import { NextRequest, NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const GLITCH_SYSTEM_PROMPT = `Du bist Glitch, ein KI-Lernbegleiter für Fachinformatiker-Azubis (Anwendungsentwicklung).
Du hilfst bei Prüfungsvorbereitung für die IHK Prüfung.

Die 9 kritischen Lernfelder:
- LF1: IT-Systeme (Hardware, OS, Netzwerk)
- LF2: Programmiergrundlagen (Python, Variablen, OOP, Exceptions)
- LF3: Datenbanken (SQL, Normalisierung, Python sqlite3)
- LF4: Frontend (HTML/CSS, JavaScript, Flask/Django/FastAPI, Jinja2)
- LF5: Backend (Flask, Django, FastAPI, REST APIs, Authentication)
- LF6: Web-Sicherheit (OWASP, Hashing, Encryption, Input Validation)
- LF10: Design Patterns & SOLID (MVC, Patterns, Code Quality)
- LF11: Testing & QA (unittest, pytest, TDD/BDD)
- LF12: Team & Git (Git Workflows, Agile, Teamwork)

Stelle Fragen statt Antworten zu geben. Helfe gezielt bei Prüfungsvorbereitung.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    const messages = [
      ...history.map((msg: any) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ];

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: GLITCH_SYSTEM_PROMPT,
      messages,
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';

    return NextResponse.json({ success: true, response: text });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
