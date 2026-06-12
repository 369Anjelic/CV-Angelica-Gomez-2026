import { NextRequest, NextResponse } from 'next/server';

const QUESTS = [
  { id: 1, name: "Handwerkerhof", answer: "gold", context: "Das goldene Nürnberg" },
  { id: 2, name: "St. Lorenz Kirche", answer: "verkündigung", context: "Engelssalutation" },
  { id: 3, name: "Nassauer Haus", answer: "geschlechterturm", context: "Stadtturm" },
  { id: 4, name: "Schöner Brunnen", answer: "wunsch", context: "Wunschring" },
  { id: 5, name: "Frauenkirche", answer: "männleinlaufen", context: "Männleinlaufen" },
  { id: 6, name: "Altes Rathaus", answer: "eiserne jungfrau", context: "Foltergerät" },
  { id: 7, name: "St. Sebald", answer: "sebaldus", context: "Schutzpatron" },
  { id: 8, name: "Kaiserburg", answer: "reichskleinodien", context: "Kaiser-Schätze" },
  { id: 9, name: "Weinstadel", answer: "lepra", context: "Ausatz" },
  { id: 10, name: "Henkersteg", answer: "folter", context: "Hinrichtung" }
];

const userSessions = new Map<string, any>();

export async function POST(request: NextRequest) {
  try {
    const { message, history = [], userId = 'default' } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 });
    }

    if (!userSessions.has(userId)) {
      userSessions.set(userId, {
        activeQuest: 0,
        solved: [],
        questStarted: false,
        conversationState: 'initial'
      });
    }

    const session = userSessions.get(userId);
    const currentQuest = session.activeQuest < QUESTS.length ? QUESTS[session.activeQuest] : null;

    if (currentQuest && message.toLowerCase().trim().length < 50) {
      const msgLower = message.toLowerCase().trim();
      if (msgLower === currentQuest.answer.toLowerCase() || msgLower.includes(currentQuest.answer.toLowerCase())) {
        session.solved.push(currentQuest.id);
        session.activeQuest++;
        const isLast = session.activeQuest >= QUESTS.length;

        if (isLast) {
          return NextResponse.json({
            response: `✓ Richtig! "${currentQuest.context}"\n\n🏆 ALLE 10 RÄTSEL GELÖST!`,
            correct: true,
            progress: `${session.solved.length}/10`
          });
        } else {
          const nextQuest = QUESTS[session.activeQuest];
          return NextResponse.json({
            response: `✓ Richtig! "${currentQuest.context}"\n\n📍 Station ${session.activeQuest + 1}: ${nextQuest.name}`,
            correct: true,
            progress: `${session.solved.length}/10`
          });
        }
      }
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        response: 'Kaspar: "Die Zeit scheint zu verschwinden..."',
        progress: `${session.solved.length}/10`
      });
    }

    try {
      const { Anthropic } = await import('@anthropic-ai/sdk');
      const client = new Anthropic({ apiKey });

      const systemPrompt = `Du bist Kaspar Hauser, rätselhafter Charakter aus Nürnberg. Antworte auf Deutsch, konzise (2-3 Sätze). Sei mysteriös und einfühlsam.`;

      const messages = (history || [])
        .slice(-5)
        .map((h: any) => ({ role: h.role || 'user', content: h.content || '' }));
      messages.push({ role: 'user', content: message });

      const completion = await client.messages.create({
        model: 'claude-opus-4-7',
        max_tokens: 300,
        system: systemPrompt,
        messages: messages as any
      });

      const response = completion.content[0].type === 'text' ? completion.content[0].text : 'Kaspar: "..."';

      return NextResponse.json({
        response,
        audio: null,
        progress: `${session.solved.length}/10`
      });
    } catch (error) {
      console.error('Claude API error:', error);
      return NextResponse.json({
        response: 'Kaspar: "Die Erinnerung verblasst..."',
        progress: `${session.solved.length}/10`
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'ok',
    anthropic: process.env.ANTHROPIC_API_KEY ? 'configured' : 'missing',
    deepgram: process.env.DEEPGRAM_API_KEY ? 'configured' : 'missing'
  });
}
