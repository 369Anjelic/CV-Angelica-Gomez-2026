import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const conversations = new Map();

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    let body = "";
    for await (const chunk of req) {
      body += chunk;
    }
    const data = JSON.parse(body);
    const { message, userId = "default" } = data;

    if (!message || !message.trim()) {
      res.status(400);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Message required" }));
      return;
    }

    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.includes("xxx")) {
      res.status(500);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({
        error: "API Key not configured",
        message: "⚠️ ANTHROPIC_API_KEY ist nicht konfiguriert",
      }));
      return;
    }

    // Get or create conversation history
    if (!conversations.has(userId)) {
      conversations.set(userId, []);
    }
    const history = conversations.get(userId);
    history.push({ role: "user", content: message });

    // Call Claude API
    const response = await client.messages.create({
      model: "claude-opus-4-1-20250805",
      max_tokens: 1024,
      system: "Du bist MOI, ein freundlicher KI-Bot-Experte von Unwritten Studio. Antworte auf Deutsch, prägnant und hilfreich.",
      messages: history,
    });

    const assistantMessage = response.content[0].text;
    history.push({ role: "assistant", content: assistantMessage });

    // Keep history limit
    if (history.length > 20) {
      conversations.set(userId, history.slice(-20));
    }

    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      message: assistantMessage,
      tokensUsed: response.usage.output_tokens + response.usage.input_tokens,
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
      model: response.model,
      userId,
      timestamp: new Date().toISOString(),
    }));
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      error: "Chat failed",
      message: err.message,
    }));
  }
};
