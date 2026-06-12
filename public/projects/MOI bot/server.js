import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import { MOIBot } from "./bot.js";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const NODE_ENV = process.env.NODE_ENV || "development";

// Ensure logs directory exists
const logsDir = path.join(__dirname, "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Middleware
app.use(compression());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

// Logging
const logStream = fs.createWriteStream(path.join(logsDir, "server.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: logStream }));
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate limiting
if (process.env.ENABLE_RATE_LIMITING !== "false") {
  const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW || "60000"),
    max: parseInt(process.env.RATE_LIMIT_REQUESTS || "100"),
    message:
      "Too many requests, please try again later",
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/", limiter);
}

// Bot instance per user (for conversation history)
const bots = new Map();

function getBotForUser(userId) {
  if (!bots.has(userId)) {
    try {
      bots.set(userId, new MOIBot());
    } catch (err) {
      console.error(`Bot creation error for user ${userId}:`, err.message);
      throw err;
    }
  }
  return bots.get(userId);
}

// ============================================
// ROUTES
// ============================================

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    bot: "MOI v10.5.2026",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: NODE_ENV,
  });
});

// GET / - Serve homepage (MOI index.html)
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.json({
      message: "MOI Bot Server Running",
      version: "10.5.2026",
      endpoints: {
        chat: "POST /api/chat",
        clear: "POST /api/clear/:userId",
        stats: "GET /api/stats",
        health: "GET /health",
      },
    });
  }
});

// Static files - serve markdown files and assets
app.use(express.static(__dirname));

// Mock-Antworten für Tests ohne API Key
const mockResponses = {
  "wie baue ich": `Großartig, dass du einen Bot bauen möchtest! Hier sind die wichtigsten Schritte:

1. **Voraussetzungen**
   - Node.js installieren (v18+)
   - Claude API Key holen (https://console.anthropic.com)
   - Grundkenntnis in JavaScript

2. **Schritt-für-Schritt**
   \`\`\`bash
   npm install @anthropic-ai/sdk dotenv
   npm install express cors body-parser
   \`\`\`

3. **Ersten Bot schreiben**
   \`\`\`javascript
   import Anthropic from "@anthropic-ai/sdk";
   const client = new Anthropic();
   const message = await client.messages.create({
     model: "claude-opus-4-1-20250805",
     max_tokens: 1024,
     messages: [{ role: "user", content: "Hallo!" }]
   });
   \`\`\`

4. **Testen**
   \`npm start\`

Brauchst du mehr Details zu einem Schritt?`,

  "code": `Hier ist ein einfaches Chat-Bot Beispiel:

\`\`\`javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

class ChatBot {
  constructor() {
    this.history = [];
  }

  async chat(userMessage) {
    this.history.push({
      role: "user",
      content: userMessage
    });

    const response = await client.messages.create({
      model: "claude-opus-4-1-20250805",
      max_tokens: 1024,
      messages: this.history
    });

    const assistantMessage = response.content[0].text;
    this.history.push({
      role: "assistant",
      content: assistantMessage
    });

    return assistantMessage;
  }
}

const bot = new ChatBot();
const answer = await bot.chat("Hallo! Wie heißt du?");
console.log(answer);
\`\`\`

Vollständige Code-Beispiele findest du in EXAMPLES.md!`,

  "dsgvo": `Die wichtigsten DSGVO-Anforderungen für deinen Bot:

1. **Datenschutzerklärung**
   - Welche Daten sammelst du?
   - Wie lange speicherst du sie?
   - Wer hat Zugriff?
   - Wie schützt du Daten?

2. **Benutzer-Rechte**
   - Auskunftsrecht (Art. 15)
   - Berichtigungsrecht (Art. 16)
   - Löschungsrecht (Art. 17)
   - Datenportabilität (Art. 20)

3. **Technische Maßnahmen**
   - HTTPS Verschlüsselung
   - Daten-Minimierung
   - Sicherheits-Updates
   - Zugriffskontrolle

4. **Cookies & Consent**
   - Cookie-Banner
   - Explizite Einwilligung
   - Opt-in (nicht opt-out!)
   - Einfaches Widerrufen

Alle Templates findest du in LEGAL.md mit klickbarem Code!`,

  "vercel": `Wie du deinen Bot auf Vercel deployst (30 Sekunden):

1. **Vercel CLI installieren**
   \`\`\`bash
   npm install -g vercel
   vercel login
   \`\`\`

2. **Deployen**
   \`\`\`bash
   vercel
   # Beantworte die Fragen, dann ist es live!
   \`\`\`

3. **Environment Variables setzen**
   \`\`\`bash
   vercel env add ANTHROPIC_API_KEY
   # Paste dein API Key
   \`\`\`

4. **Zur Production deployen**
   \`\`\`bash
   vercel --prod
   \`\`\`

Dein Bot läuft dann auf: https://your-project.vercel.app

Detaillierte Anleitung in DEPLOYMENT.md!`,

  "sicherheit": `Wichtigste Security-Maßnahmen für deinen Bot:

1. **API Keys schützen**
   ✅ In .env speichern
   ❌ NIEMALS in Git pushen
   ✅ Umgebungsvariablen nutzen

2. **Input Validation**
   ✅ Länge begrenzen (max 10.000 chars)
   ✅ XSS-Protection
   ✅ SQL-Injection verhindern
   ✅ Rate Limiting

3. **HTTPS & Verschlüsselung**
   ✅ Production: nur HTTPS
   ✅ TLS 1.2+
   ✅ Sichere Header

4. **Error Handling**
   ✅ Fehler loggen
   ❌ Keine sensiblen Daten in Logs
   ✅ Generische Error-Messages

5. **Monitoring**
   ✅ Logs überprüfen
   ✅ API-Quotas monitoren
   ✅ Fehler tracken (Sentry)

Vollständige Checkliste in LEGAL.md und DEPLOYMENT.md!`
};

// POST /api/chat - Main chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { userId = "default", message, context } = req.body;

    // Validation
    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        error: "Message is required",
        message: "Bitte schreib eine Nachricht",
      });
    }

    if (message.length > 10000) {
      return res.status(400).json({
        error: "Message too long",
        message: "Nachricht ist zu lang (max 10000 Zeichen)",
      });
    }

    // Check if API Key is configured
    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.includes("xxx")) {
      // Use mock responses for testing
      let mockAnswer = `Hallo! 👋 Ich bin MOI, dein KI-Bot-Expert!\n\nIch bemerke, dass dein ANTHROPIC_API_KEY noch nicht richtig konfiguriert ist. Um die volle Funktionalität zu nutzen:\n\n1. Gehe zu https://console.anthropic.com\n2. Erstelle einen API Key\n3. Trage ihn in .env ein (ersetze sk-ant-xxx)\n4. Starte den Server neu\n\nFür jetzt kann ich dir aber trotzdem helfen!`;

      // Find matching mock response
      const lowerMessage = message.toLowerCase();
      for (const [keyword, response] of Object.entries(mockResponses)) {
        if (lowerMessage.includes(keyword)) {
          mockAnswer = response;
          break;
        }
      }

      return res.json({
        message: mockAnswer,
        tokensUsed: 100,
        inputTokens: 50,
        model: "claude-opus-4-1-20250805",
        userId: userId,
        timestamp: new Date().toISOString(),
        notice: "⚠️ Mock Response (API Key nicht konfiguriert)",
      });
    }

    // Get or create bot for user
    const bot = getBotForUser(userId);

    // Send to Claude
    const response = await bot.chat(message);

    // Log interaction
    console.log(`[${userId}] User: ${message.substring(0, 50)}...`);
    console.log(
      `[${userId}] Response tokens: ${response.tokensUsed} (input: ${response.inputTokens})`
    );

    res.json({
      message: response.message,
      tokensUsed: response.tokensUsed,
      inputTokens: response.inputTokens,
      model: response.model,
      userId: userId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API Error:", error.message);

    if (error.message.includes("API key")) {
      return res.status(500).json({
        error: "API Configuration Error",
        message:
          "ANTHROPIC_API_KEY nicht konfiguriert. Siehe SETUP.md für Anleitung.",
        hint: "Stelle sicher dass .env die richtige ANTHROPIC_API_KEY enthält",
      });
    }

    if (error.message.includes("quota")) {
      return res.status(429).json({
        error: "API Quota Exceeded",
        message: "Claude API Quota überschritten. Später nochmal versuchen.",
      });
    }

    res.status(500).json({
      error: "Chat Error",
      message: "Fehler beim Verarbeiten deiner Nachricht",
      detail: NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// POST /api/clear/:userId - Clear conversation history
app.post("/api/clear/:userId", (req, res) => {
  const userId = req.params.userId;

  if (bots.has(userId)) {
    const bot = bots.get(userId);
    bot.clearHistory();
    bots.delete(userId);
    console.log(`Cleared history for user: ${userId}`);
  }

  res.json({
    message: "Conversation cleared",
    userId: userId,
    timestamp: new Date().toISOString(),
  });
});

// GET /api/stats - Server statistics
app.get("/api/stats", (req, res) => {
  const stats = {
    server: {
      uptime: process.uptime(),
      environment: NODE_ENV,
      port: PORT,
      timestamp: new Date().toISOString(),
    },
    bots: {
      activeUsers: bots.size,
      users: Array.from(bots.keys()),
    },
    memory: {
      rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
      heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
    },
  };

  res.json(stats);
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    path: req.path,
    method: req.method,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(500).json({
    error: "Internal Server Error",
    message: NODE_ENV === "development" ? err.message : "Something went wrong",
  });
});

// ============================================
// SERVER START
// ============================================

app.listen(PORT, HOST, () => {
  console.log("\n🤖 ========================================");
  console.log(`   MOI Bot Server v10.5.2026`);
  console.log("🤖 ========================================");
  console.log(`\n✅ Server läuft auf http://${HOST}:${PORT}`);
  console.log(`📝 Logs: ./logs/server.log`);
  console.log(`🌍 Environment: ${NODE_ENV}\n`);
  console.log("📡 API Endpoints:");
  console.log(`   POST   /api/chat`);
  console.log(`   POST   /api/clear/:userId`);
  console.log(`   GET    /api/stats`);
  console.log(`   GET    /health\n`);
  console.log("🎯 Öffne Browser: http://localhost:3000\n");
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n\n👋 Server wird heruntergefahren...");
  process.exit(0);
});
