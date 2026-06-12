# 📚 MOI Bot - Code Beispiele

> 10+ Copy-Paste-fertige Code-Beispiele für Bot-Entwicklung

---

## 1️⃣ Einfacher Chat-Bot (Node.js)

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function chat(message) {
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [{ role: "user", content: message }],
  });

  return response.content[0].text;
}

// Test
const answer = await chat("Was ist ein Bot?");
console.log(answer);
```

**Starten:**
```bash
npm install @anthropic-ai/sdk dotenv
node example.js
```

---

## 2️⃣ Bot mit Conversation History

```javascript
import Anthropic from "@anthropic-ai/sdk";

class ConversationBot {
  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    this.history = [];
  }

  async chat(message) {
    // Add user message to history
    this.history.push({
      role: "user",
      content: message,
    });

    // Send to Claude with full history
    const response = await this.client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: "Du bist ein hilfreicher Bot.",
      messages: this.history,
    });

    const assistantMessage = response.content[0].text;

    // Add response to history
    this.history.push({
      role: "assistant",
      content: assistantMessage,
    });

    return assistantMessage;
  }
}

// Test
const bot = new ConversationBot();
console.log(await bot.chat("Hi, wie heißt du?"));
console.log(await bot.chat("Was hast du gerade gesagt?"));
```

---

## 3️⃣ Express Web-Bot mit API

```javascript
import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const client = new Anthropic();

app.use(express.json());

// Store conversation per user
const conversations = new Map();

app.post("/api/chat", async (req, res) => {
  const { userId, message } = req.body;

  if (!conversations.has(userId)) {
    conversations.set(userId, []);
  }

  const history = conversations.get(userId);
  history.push({ role: "user", content: message });

  try {
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: history,
    });

    const reply = response.content[0].text;
    history.push({ role: "assistant", content: reply });

    res.json({ message: reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Bot running on :3000"));
```

**Testen:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"userId":"user1","message":"Hallo!"}'
```

---

## 4️⃣ Bot mit Datenbank (SQLite)

```javascript
import sqlite3 from "sqlite3";
import Anthropic from "@anthropic-ai/sdk";

const db = new sqlite3.Database("./bot.db");
const client = new Anthropic();

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY,
    userId TEXT,
    role TEXT,
    content TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function chatWithHistory(userId, message) {
  // Get history from DB
  const history = await new Promise((resolve, reject) => {
    db.all(
      "SELECT role, content FROM conversations WHERE userId = ? ORDER BY id",
      [userId],
      (err, rows) => {
        if (err) reject(err);
        resolve(rows || []);
      }
    );
  });

  // Add new message
  history.push({ role: "user", content: message });

  // Get response
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: history,
  });

  const reply = response.content[0].text;

  // Save to DB
  db.run(
    "INSERT INTO conversations (userId, role, content) VALUES (?, ?, ?)",
    [userId, "user", message]
  );
  db.run(
    "INSERT INTO conversations (userId, role, content) VALUES (?, ?, ?)",
    [userId, "assistant", reply]
  );

  return reply;
}

// Test
const answer = await chatWithHistory("user1", "Ich bin neu!");
console.log(answer);
```

---

## 5️⃣ Bot mit Rate Limiting

```javascript
import express from "express";
import rateLimit from "express-rate-limit";
import Anthropic from "@anthropic-ai/sdk";

const app = express();
const client = new Anthropic();

// Rate limiting: max 10 requests per minute per user
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  keyGenerator: (req) => req.body.userId || req.ip,
  message: "Too many requests, please try again later",
});

app.post("/api/chat", limiter, async (req, res) => {
  const { message } = req.body;

  try {
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [{ role: "user", content: message }],
    });

    res.json({ message: response.content[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000);
```

---

## 6️⃣ Error Handling Patterns

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function chatWithErrorHandling(message) {
  try {
    // Validate input
    if (!message || message.trim().length === 0) {
      throw new Error("Message cannot be empty");
    }

    if (message.length > 10000) {
      throw new Error("Message too long (max 10000 chars)");
    }

    // Call API with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000); // 30s timeout

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [{ role: "user", content: message }],
    });

    clearTimeout(timeout);
    return response.content[0].text;
  } catch (error) {
    if (error.message.includes("API key")) {
      console.error("❌ API Key not configured");
      return "API nicht konfiguriert";
    }

    if (error.message.includes("quota")) {
      console.error("❌ API Quota exceeded");
      return "Zu viele Anfragen";
    }

    if (error.name === "AbortError") {
      console.error("❌ Request timeout");
      return "Anfrage zu lange";
    }

    console.error("❌ Error:", error.message);
    return "Fehler bei der Verarbeitung";
  }
}

// Test
console.log(await chatWithErrorHandling("Hallo!"));
```

---

## 7️⃣ Logging & Monitoring

```javascript
import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";

class MonitoredBot {
  constructor() {
    this.client = new Anthropic();
    this.logFile = "./bot.log";
    this.stats = {
      messagesProcessed: 0,
      tokensUsed: 0,
      errors: 0,
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logEntry);
  }

  async chat(message) {
    try {
      this.log(`📥 User: ${message.substring(0, 50)}...`);

      const response = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: message }],
      });

      const reply = response.content[0].text;
      const tokens = response.usage.output_tokens;

      this.stats.messagesProcessed++;
      this.stats.tokensUsed += tokens;

      this.log(
        `📤 Bot: ${reply.substring(0, 50)}... [tokens: ${tokens}]`
      );

      return reply;
    } catch (error) {
      this.stats.errors++;
      this.log(`❌ Error: ${error.message}`);
      throw error;
    }
  }

  getStats() {
    return this.stats;
  }
}

// Test
const bot = new MonitoredBot();
await bot.chat("Hallo!");
console.log(bot.getStats());
```

---

## 8️⃣ Frontend HTML/CSS Chat Interface

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Chat Bot</title>
    <style>
      .chat-container {
        max-width: 600px;
        height: 500px;
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      .messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        background: #f9f9f9;
      }

      .message {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 8px;
        max-width: 80%;
      }

      .user {
        background: #3987b8;
        color: white;
        margin-left: auto;
      }

      .bot {
        background: #e0e0e0;
        color: black;
      }

      .input-area {
        display: flex;
        border-top: 1px solid #ddd;
        padding: 10px;
      }

      input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-right: 10px;
      }

      button {
        padding: 10px 20px;
        background: #3987b8;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="chat-container">
      <div class="messages" id="messages"></div>
      <div class="input-area">
        <input
          type="text"
          id="input"
          placeholder="Nachricht..."
        />
        <button onclick="sendMessage()">Senden</button>
      </div>
    </div>

    <script>
      async function sendMessage() {
        const input = document.getElementById("input");
        const message = input.value;

        if (!message) return;

        // Add user message
        addMessage(message, "user");
        input.value = "";

        // Get response
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: "web-user",
            message,
          }),
        });

        const data = await response.json();
        addMessage(data.message, "bot");
      }

      function addMessage(text, role) {
        const messages = document.getElementById("messages");
        const div = document.createElement("div");
        div.className = `message ${role}`;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
      }

      document
        .getElementById("input")
        .addEventListener("keypress", (e) => {
          if (e.key === "Enter") sendMessage();
        });
    </script>
  </body>
</html>
```

---

## 9️⃣ Deployment Script (Vercel)

```bash
#!/bin/bash
# deploy.sh - Deploy MOI to Vercel

echo "🚀 Deploying MOI to Vercel..."

# Install Vercel CLI
npm install -g vercel

# Login (first time only)
# vercel login

# Deploy
vercel --prod

echo "✅ Deployment complete!"
echo "🌍 Check: https://your-domain.vercel.app"
```

**Run:**
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🔟 Testing mit Jest

```javascript
import Anthropic from "@anthropic-ai/sdk";

describe("Bot Tests", () => {
  let bot;

  beforeEach(() => {
    bot = new Anthropic();
  });

  test("should respond to greeting", async () => {
    const response = await bot.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 100,
      messages: [{ role: "user", content: "Hallo" }],
    });

    expect(response.content[0].text).toBeTruthy();
    expect(response.content[0].text.length).toBeGreaterThan(0);
  });

  test("should handle empty message", async () => {
    expect(() => {
      if (!message || message.trim().length === 0) {
        throw new Error("Empty message");
      }
    }).toThrow();
  });

  test("should track token usage", async () => {
    const response = await bot.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 100,
      messages: [{ role: "user", content: "Test" }],
    });

    expect(response.usage.input_tokens).toBeGreaterThan(0);
    expect(response.usage.output_tokens).toBeGreaterThan(0);
  });
});
```

**Run:**
```bash
npm install --save-dev jest
npm test
```

---

## 1️⃣1️⃣ Environment Configuration (Best Practices)

**.env Template:**
```bash
# API
ANTHROPIC_API_KEY=sk-ant-xxxxx

# Server
NODE_ENV=development
PORT=3000
HOST=localhost

# Bot
BOT_NAME=MOI
BOT_LANGUAGE=de
MAX_TOKENS=2000
TEMPERATURE=0.7

# Security
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60000

# Deployment
VERCEL_PROJECT_ID=
RAILWAY_API_TOKEN=
```

**Load Configuration:**
```javascript
import dotenv from "dotenv";

dotenv.config();

const config = {
  apiKey: process.env.ANTHROPIC_API_KEY,
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};

if (!config.apiKey) {
  throw new Error("ANTHROPIC_API_KEY not set");
}
```

---

## 🔗 Häufige Fehler & Lösungen

### Fehler: "API Key not found"
```javascript
// ❌ Falsch
const client = new Anthropic({ apiKey: "sk-ant-..." });

// ✅ Richtig
import dotenv from "dotenv";
dotenv.config();
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
```

### Fehler: "Message too large"
```javascript
// ✅ Lösung: Token limit
const maxTokens = 2000;
const response = await client.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: maxTokens,
  messages: [{ role: "user", content: message }],
});
```

### Fehler: "Rate limit exceeded"
```javascript
// ✅ Lösung: Retry with exponential backoff
async function chatWithRetry(message, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: message }],
      });
    } catch (err) {
      if (err.status === 429 && i < maxRetries - 1) {
        await new Promise((r) => setTimeout(r, 1000 * Math.pow(2, i)));
        continue;
      }
      throw err;
    }
  }
}
```

---

## 📚 Nächste Schritte

1. **Wähle ein Beispiel** - Pick dein Use-Case
2. **Copy-Paste Code** - Verwende den Code
3. **Personalisiere** - Ändere für dein Projekt
4. **Teste lokal** - npm start
5. **Deploye** - Auf Vercel/Railway
6. **Überprüfe Logs** - tail -f logs/bot.log

---

**Happy Coding! 🚀**

*MOI v10.5.2026*
