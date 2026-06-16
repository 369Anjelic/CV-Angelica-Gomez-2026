export default async (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");

  // Health check
  if (pathname === "/health") {
    res.setHeader("Content-Type", "application/json");
    res.status(200).end(JSON.stringify({
      status: "ok",
      bot: "MOI v10.5.2026"
    }));
    return;
  }

  // API Chat endpoint
  if (pathname === "/api/chat" && req.method === "POST") {
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

      const mockAnswer = `Echo: ${message}`;

      res.status(200);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({
        message: mockAnswer,
        tokensUsed: 100,
        inputTokens: 50,
        model: "claude-opus",
        userId,
        timestamp: new Date().toISOString(),
      }));
    } catch (err) {
      console.error("Chat error:", err);
      res.status(500);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Chat failed" }));
    }
    return;
  }

  // Default 404
  res.status(404);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ error: "Not found", path: pathname }));
};
