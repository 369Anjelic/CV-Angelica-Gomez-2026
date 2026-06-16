export async function POST(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  try {
    const body = await request.json();
    const hostname = process.env.VERCEL ? 'vercel' : 'localhost';

    // On localhost, proxy to the local MOI server on port 3004
    if (hostname === 'localhost' || process.env.NODE_ENV === 'development') {
      const endpoint = pathname.replace('/api/moi', '');
      const localUrl = `http://localhost:3004/api${endpoint}`;
      console.log(`[MOI Proxy] Forwarding to: ${localUrl}`);

      try {
        const response = await fetch(localUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return Response.json(data, { status: response.status });
      } catch (err) {
        console.error(`[MOI Proxy] Failed to reach localhost:3004:`, err);
        return Response.json(
          { error: 'MOI server not running. Start with: npm run moi' },
          { status: 503 }
        );
      }
    }

    // On Vercel production, handle with Claude API
    return handleMOIChat(body);
  } catch (error) {
    console.error('[MOI API] Error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleMOIChat(body: any) {
  const { userId = 'default', message, context } = body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!message || message.trim().length === 0) {
    return Response.json(
      { error: 'Message is required', message: 'Bitte schreib eine Nachricht' },
      { status: 400 }
    );
  }

  if (!apiKey) {
    // Return mock response if API key is missing
    return Response.json({
      message: `Hallo! 👋 Ich bin MOI, dein KI-Bot-Expert!\n\nIch bemerke, dass dein ANTHROPIC_API_KEY noch nicht richtig konfiguriert ist. Um die volle Funktionalität zu nutzen:\n\n1. Gehe zu https://console.anthropic.com\n2. Erstelle einen API Key\n3. Trage ihn in die Vercel Environment Variables ein\n4. Starte neu\n\nFür jetzt kann ich dir aber trotzdem helfen!`,
      tokensUsed: 100,
      inputTokens: 50,
      model: 'claude-opus-4-7',
      userId: userId,
      timestamp: new Date().toISOString(),
      notice: '⚠️ Mock Response (API Key nicht konfiguriert)',
    });
  }

  try {
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    const client = new Anthropic({ apiKey });

    const systemPrompt = `Du bist MOI, ein freundlicher und erfahrener KI-Bot-Experte.
Du erklärst wie man intelligente Bots mit Claude API baut.
Antworte auf Deutsch, sei prägnant und praktisch orientiert.
Gib Code-Beispiele wenn relevant.`;

    const completion = await client.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }],
    });

    const responseText = completion.content[0].type === 'text' ? completion.content[0].text : '';

    return Response.json({
      message: responseText,
      tokensUsed: completion.usage.output_tokens + completion.usage.input_tokens,
      inputTokens: completion.usage.input_tokens,
      model: 'claude-opus-4-7',
      userId: userId,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('[MOI Chat] Claude API Error:', error);
    return Response.json(
      { error: 'Chat Error', message: 'Fehler beim Verarbeiten deiner Nachricht' },
      { status: 500 }
    );
  }
}
