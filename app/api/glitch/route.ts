export async function POST(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  try {
    const body = await request.json();
    const isVercel = process.env.VERCEL === '1';
    const hostname = isVercel ? 'vercel' : 'localhost';

    // On localhost, proxy to the local server
    if (hostname === 'localhost' || process.env.NODE_ENV === 'development') {
      const localUrl = `http://localhost:3003${pathname.replace('/api/glitch', '')}`;
      console.log(`[Glitch Proxy] Forwarding to: ${localUrl}`);

      try {
        const response = await fetch(localUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return Response.json(data, { status: response.status });
      } catch (err) {
        console.error(`[Glitch Proxy] Failed to reach localhost:3003:`, err);
        return Response.json(
          { error: 'Glitch server not running. Start with: npm run glitch' },
          { status: 503 }
        );
      }
    }

    // On Vercel production, handle with in-memory or Claude API
    const path = pathname.replace('/api/glitch', '');

    if (path === '/chat') {
      return handleChat(body);
    } else if (path === '/identify') {
      return handleIdentify(body);
    } else if (path === '/history') {
      return handleHistory(body);
    } else if (path === '/export') {
      return handleExport(body);
    } else if (path === '/execute-python') {
      return handlePython(body);
    } else {
      return Response.json({ error: 'Endpoint not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('[Glitch API] Error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function handleChat(body: any) {
  const { message, words } = body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        response: 'Glitch: "Fehler - KI-Engine nicht konfiguriert. Bitte API-Schlüssel setzen."',
        error: 'API key missing',
      },
      { status: 503 }
    );
  }

  try {
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    const client = new Anthropic({ apiKey });

    const systemPrompt = `Du bist Glitch, ein KI-Lernbegleiter für Fachinformatiker-Azubis (Anwendungsentwicklung).
Du hilfst bei Prüfungsvorbereitung für die IHK Prüfung.

**Beim normalen Lernen:**
- Stelle Fragen statt Antworten zu geben
- Leite zum eigenen Denken an
- Sei unterstützend aber fordernd
- Fokus auf praktisches Verständnis
- Kurze, prägnante Antworten (max 3-4 Sätze)
- Erkenne automatisch welches LF der User lernt`;

    const completion = await client.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 400,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }],
    });

    const assistantMessage = completion.content[0].type === 'text' ? completion.content[0].text : '';

    // Generate words if needed
    const wordsAssigned = words ? null : generateWords();

    return Response.json({
      response: assistantMessage,
      words_assigned: wordsAssigned,
      level_up: null,
      jokers_remaining: 3,
      learned_lf: null,
      learned_topic: null,
    });
  } catch (error: any) {
    console.error('[Glitch Chat] Error:', error);
    return Response.json(
      { response: 'Glitch: "Fehler bei der Verbindung... Versuche es später."' },
      { status: 500 }
    );
  }
}

function handleIdentify(body: any) {
  // On Vercel, always return false (no persistence)
  return Response.json({ found: false });
}

function handleHistory(body: any) {
  // On Vercel, return empty history
  return Response.json({ history: [] });
}

function handleExport(body: any) {
  const { words } = body;
  const markdown = `# Glitch Lernfortschritt\n\n**Nutzer:** \`${words || 'unknown'}\`\n\nKeine Daten verfügbar auf Vercel. Nutze localhost für persistente Daten.`;
  return Response.json({ markdown });
}

async function handlePython(body: any) {
  const { code } = body;
  // Python execution not available on Vercel - would need a sandbox
  return Response.json(
    {
      output: 'Python-Ausführung nur lokal verfügbar. Bitte nutze http://localhost:3003',
      error: 'Python execution not available',
    },
    { status: 503 }
  );
}

function generateWords() {
  const words = ['kernel', 'deploy', 'merge', 'commit', 'draft', 'cache', 'stack', 'queue', 'heap', 'node'];
  return [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
  ].join('.');
}
