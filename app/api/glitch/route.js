// Glitch API Route - Learning Bot for IHK Exam
export async function POST(request) {
  try {
    const body = await request.json();
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || 'chat';

    if (action === 'chat') {
      const { message, words } = body;
      const apiKey = process.env.ANTHROPIC_API_KEY;

      if (!apiKey) {
        return Response.json({
          response: 'Glitch: API-Schlüssel nicht konfiguriert!',
          error: 'API key missing',
        }, { status: 503 });
      }

      try {
        const { default: Anthropic } = await import('@anthropic-ai/sdk');
        const client = new Anthropic({ apiKey });

        const completion = await client.messages.create({
          model: 'claude-opus-4-7',
          max_tokens: 300,
          system: 'Du bist Glitch, ein KI-Lernbegleiter für Fachinformatiker-Prüfung (IHK). Stelle Fragen.',
          messages: [{ role: 'user', content: message }],
        });

        const text = completion.content[0]?.text || 'Fehler';

        return Response.json({
          response: text,
          words_assigned: words ? null : generateWords(),
          status: 'ok',
        });
      } catch (error) {
        return Response.json({
          response: 'Glitch: KI-Verbindung fehlgeschlagen',
          error: error.message,
        }, { status: 500 });
      }
    }

    if (action === 'identify') {
      return Response.json({ found: false });
    }

    if (action === 'history') {
      return Response.json({ history: [] });
    }

    return Response.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    console.error('[Glitch API]', error);
    return Response.json({ error: 'Internal error' }, { status: 500 });
  }
}

function generateWords() {
  const words = ['kernel', 'deploy', 'merge', 'commit', 'draft'];
  return words
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .join('.');
}
