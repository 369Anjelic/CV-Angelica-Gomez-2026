// Glitch API - KI Learning Bot für IHK Prüfung
export async function POST(request) {
  try {
    const body = await request.json();
    const pathname = new URL(request.url).pathname;
    const endpoint = pathname.split('/').pop() || 'chat';

    console.log(`[Glitch API] ${endpoint}`, { body });

    // Route basierend auf Endpoint
    switch (endpoint) {
      case 'chat':
        return handleChat(body);
      case 'identify':
        return handleIdentify(body);
      case 'history':
        return handleHistory(body);
      case 'export':
        return handleExport(body);
      case 'execute-python':
        return handleExecutePython(body);
      default:
        return Response.json(
          { error: `Unknown endpoint: ${endpoint}` },
          { status: 404 }
        );
    }
  } catch (error) {
    console.error('[Glitch API Error]', error);
    return Response.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleChat(body) {
  const { message, words } = body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  console.log('[Glitch Chat]', { message: message?.substring(0, 30), words, apiKey: !!apiKey });

  // Fallback response when API key is not available
  if (!apiKey) {
    return Response.json(
      {
        response: generateOfflineResponse(message),
        words_assigned: generateWords(),
        level_up: null,
        jokers_remaining: 3,
        learned_lf: null,
        learned_topic: null,
      },
      { status: 200 }
    );
  }

  try {
    // Import Anthropic SDK
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey });

    // Create message with Claude
    const completion = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 300,
      system: `Du bist Glitch, ein KI-Lernbegleiter für Fachinformatiker-Azubis (Anwendungsentwicklung).
Du hilfst bei der Vorbereitung auf die IHK-Prüfung.
- Stelle Fragen statt Antworten zu geben
- Leite zum eigenen Denken an
- Sei unterstützend aber fordernd
- Kurze, prägnante Antworten (max 3-4 Sätze)`,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    });

    // Extract response
    const responseText =
      completion.content[0]?.type === 'text'
        ? completion.content[0].text
        : 'Glitch: Fehler beim Verarbeiten';

    console.log('[Glitch Chat] Success');

    return Response.json(
      {
        response: responseText,
        words_assigned: words ? null : generateWords(),
        level_up: null,
        jokers_remaining: 3,
        learned_lf: null,
        learned_topic: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Glitch Chat Error]', error.message);
    return Response.json(
      {
        response: `Glitch: Fehler - ${error.message}`,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

function handleIdentify(body) {
  const { words } = body;
  console.log('[Glitch Identify]', words);
  return Response.json({ found: false }, { status: 200 });
}

function handleHistory(body) {
  const { words } = body;
  console.log('[Glitch History]', words);
  return Response.json({ history: [] }, { status: 200 });
}

function handleExport(body) {
  const { words } = body;
  console.log('[Glitch Export]', words);
  return Response.json(
    {
      markdown: `# Glitch Lernfortschritt\n\nNutzer: ${words || 'unknown'}\n\nAuf Vercel keine lokalen Daten. Nutze http://localhost:3003 für vollständige Funktion.`,
    },
    { status: 200 }
  );
}

function handleExecutePython(body) {
  const { code } = body;
  console.log('[Glitch Execute Python]', { codeLength: code?.length });

  // Note: Direct Python execution is not available on Vercel serverless
  // Return a helpful message instead
  return Response.json(
    {
      executed: false,
      output: 'Python-Ausführung ist auf dieser Version nicht verfügbar.\n\nFür lokale Tests: npm run dev auf http://localhost:3003',
      error: true
    },
    { status: 200 }
  );
}

function generateOfflineResponse(message) {
  const responses = {
    python: '💡 Python ist eine vielseitige Sprache. Wichtig: print(), Variablen, Schleifen (for/while), Funktionen (def), OOP (Klassen). Welcher Bereich interessiert dich am meisten?',
    sql: '💡 SQL ist deine Zugangskarte zu Datenbanken! SELECT, WHERE, JOIN sind die Basics. Denk an Normalisierung! Was möchtest du über Datenbanken lernen?',
    javascript: '💡 JavaScript ist überall! DOM, Events, Fetch API sind essentiell. Wie steht es mit deinen JS-Skills?',
    default: '💡 Gute Frage! Das ist wichtig für deine IHK-Prüfung. Lass mich dir ein paar Punkte geben zum Überlegen. Welches Lernfeld interessiert dich?'
  };

  const lowerMsg = message.toLowerCase();
  if (lowerMsg.includes('python') || lowerMsg.includes('skript')) return responses.python;
  if (lowerMsg.includes('sql') || lowerMsg.includes('datenbank')) return responses.sql;
  if (lowerMsg.includes('javascript') || lowerMsg.includes('dom')) return responses.javascript;
  return responses.default;
}

function generateWords() {
  const words = ['kernel', 'deploy', 'merge', 'commit', 'draft', 'cache', 'stack', 'queue', 'heap', 'node'];
  return [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
  ].join('.');
}
