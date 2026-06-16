// Glitch Chat API - Direct endpoint
export async function POST(request) {
  try {
    const body = await request.json();
    const { message, words } = body;
    const apiKey = process.env.ANTHROPIC_API_KEY;

    console.log('[Glitch Chat API] Message:', { message: message?.substring(0, 50), apiKey: !!apiKey });

    // If no API key, return offline response
    if (!apiKey) {
      return Response.json({
        response: 'Willkommen bei Glitch! 💡 Ich bin dein KI-Lernbegleiter. Was möchtest du über die IHK-Prüfung lernen?',
        words_assigned: generateWords(),
        level_up: null,
        jokers_remaining: 3,
        learned_lf: null,
        learned_topic: null,
      }, { status: 200 });
    }

    // Use Anthropic API
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey });

    const completion = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 300,
      system: `Du bist Glitch, ein KI-Lernbegleiter für Fachinformatiker-Azubis.
Du hilfst bei der IHK-Prüfungsvorbereitung.
- Stelle Fragen statt Antworten
- Leite zum eigenen Denken an
- Sei kurz und prägnant (max 3-4 Sätze)
- Nutze Emojis zum Auflockern`,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const responseText = completion.content[0]?.type === 'text'
      ? completion.content[0].text
      : 'Glitch: Fehler bei der Antwort';

    return Response.json({
      response: responseText,
      words_assigned: words ? null : generateWords(),
      level_up: null,
      jokers_remaining: 3,
      learned_lf: null,
      learned_topic: null,
    }, { status: 200 });

  } catch (error) {
    console.error('[Glitch Chat Error]', error);
    return Response.json({
      response: `Glitch: Fehler - ${error.message}`,
      error: error.message,
    }, { status: 500 });
  }
}

function generateWords() {
  const words = ['kernel', 'deploy', 'merge', 'commit', 'draft', 'cache'];
  return [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
  ].join('.');
}
