import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const QUESTS = [
  { id: 1, name: 'Handwerkerhof', answer: 'gold', context: 'Das goldene Nürnberg' },
  { id: 2, name: 'St. Lorenz Kirche', answer: 'verkündigung', context: 'Engelssalutation' },
  { id: 3, name: 'Nassauer Haus', answer: 'geschlechterturm', context: 'Stadtturm' },
  { id: 4, name: 'Schöner Brunnen', answer: 'wunsch', context: 'Wunschring' },
  { id: 5, name: 'Frauenkirche', answer: 'männleinlaufen', context: 'Männleinlaufen' },
  { id: 6, name: 'Altes Rathaus', answer: 'eiserne jungfrau', context: 'Foltergerät' },
  { id: 7, name: 'St. Sebald', answer: 'sebaldus', context: 'Schutzpatron' },
  { id: 8, name: 'Kaiserburg', answer: 'reichskleinodien', context: 'Kaiser-Schätze' },
  { id: 9, name: 'Weinstadel', answer: 'lepra', context: 'Ausatz' },
  { id: 10, name: 'Henkersteg', answer: 'folter', context: 'Hinrichtung' },
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
        conversationState: 'initial',
      });
    }

    const session = userSessions.get(userId);
    const currentQuest = session.activeQuest < QUESTS.length ? QUESTS[session.activeQuest] : null;
    let response: string;

    // Check für korrekte Antwort
    if (currentQuest && message.toLowerCase().trim().length < 50) {
      const msgLower = message.toLowerCase().trim();
      if (
        msgLower === currentQuest.answer.toLowerCase() ||
        msgLower.includes(currentQuest.answer.toLowerCase())
      ) {
        session.solved.push(currentQuest.id);
        session.activeQuest++;
        const isLast = session.activeQuest >= QUESTS.length;
        if (isLast) {
          response = `✓ Richtig! "${currentQuest.context}"\n\n🏆 ALLE 10 RÄTSEL GELÖST!`;
        } else {
          const nextQuest = QUESTS[session.activeQuest];
          response = `✓ Richtig! "${currentQuest.context}"\n\n📍 Station ${session.activeQuest + 1}: ${nextQuest.name}`;
        }
        return NextResponse.json({
          response,
          correct: true,
          progress: `${session.solved.length}/10`,
        });
      }
    }

    // Claude API für Hinweise
    try {
      const apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        response = `Kaspar: "Denke über die Geschichte Nürnbergs nach..."`;
      } else {
        const client = new Anthropic({ apiKey });
        const systemPrompt = `Du bist Kaspar Hauser, rätselhafter Charakter aus Nürnberg. Antworte auf Deutsch, konzise (2-3 Sätze). Sei mysteriös und einfühlsam.`;
        const messages = (history || [])
          .slice(-5)
          .map((h: any) => ({
            role: h.role || 'user',
            content: h.content || '',
          }));
        messages.push({ role: 'user', content: message });

        const completion = await client.messages.create({
          model: 'claude-opus-4-7',
          max_tokens: 300,
          system: systemPrompt,
          messages: messages as any,
        });

        response = completion.content[0].type === 'text' ? completion.content[0].text : 'Keine Antwort';
      }
    } catch (apiError) {
      console.error('Claude API error:', apiError);
      response = `Kaspar: "Die Zeit scheint zu verschwinden..."`;
    }

    return NextResponse.json({
      response,
      audio: null,
      progress: `${session.solved.length}/10`,
    });
  } catch (error: any) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error: ' + error.message }, { status: 500 });
  }
}
