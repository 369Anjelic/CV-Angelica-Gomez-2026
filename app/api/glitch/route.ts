export async function POST(request: Request) {
  try {
    const body = await request.json();
    const url = new URL(request.url);
    const pathname = url.pathname;
    const endpoint = pathname.split('/').pop() || '';

    console.log(`[Glitch API] Endpoint: ${endpoint}`);

    if (endpoint === 'chat') {
      return await handleChat(body);
    } else if (endpoint === 'identify') {
      return handleIdentify(body);
    } else if (endpoint === 'history') {
      return handleHistory(body);
    } else if (endpoint === 'export') {
      return handleExport(body);
    } else {
      return Response.json({ error: 'Unknown endpoint: ' + endpoint }, { status: 404 });
    }
  } catch (error: any) {
    console.error('[Glitch API] Error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

async function handleChat(body: any) {
  const { message, words } = body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json({
      response: 'Glitch: API-Key nicht konfiguriert!',
      error: 'ANTHROPIC_API_KEY missing',
    }, { status: 503 });
  }

  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey });

    const completion = await client.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 300,
      system: 'Du bist Glitch, ein Lernbegleiter für Fachinformatiker-Prüfung. Stelle Fragen statt Antworten.',
      messages: [{ role: 'user', content: message }],
    });

    const assistantMessage =
      completion.content[0].type === 'text' ? completion.content[0].text : 'Fehler';

    return Response.json({
      response: assistantMessage,
      words_assigned: words ? null : generateWords(),
      level_up: null,
      jokers_remaining: 3,
      learned_lf: null,
      learned_topic: null,
    });
  } catch (error: any) {
    console.error('[Glitch] Chat Error:', error.message);
    return Response.json({
      response: 'Glitch: Fehler bei der KI-Verbindung',
      error: error.message,
    }, { status: 500 });
  }
}

function handleIdentify(body: any) {
  return Response.json({ found: false });
}

function handleHistory(body: any) {
  return Response.json({ history: [] });
}

function handleExport(body: any) {
  const { words } = body;
  return Response.json({
    markdown: `# Glitch Lernfortschritt\n\nNutzer: ${words || 'unknown'}\n\nKeine Daten auf Vercel.`,
  });
}

function generateWords() {
  const words = ['kernel', 'deploy', 'merge', 'commit', 'draft', 'cache'];
  return [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
  ].join('.');
}
