import { Anthropic } from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, history } = body;

    if (!message) {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const messages: Message[] = [
      ...history,
      { role: 'user', content: message },
    ];

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: 'Du bist MOI, ein hilfreicher KI-Assistent. Du sprichst auf Deutsch und hilfst dem Benutzer mit verschiedenen Aufgaben und Fragen.',
      messages: messages,
    });

    const assistantMessage =
      response.content[0].type === 'text' ? response.content[0].text : '';

    return Response.json({
      response: assistantMessage,
    });
  } catch (error: any) {
    console.error('MOI Chat Error:', error);
    return Response.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
