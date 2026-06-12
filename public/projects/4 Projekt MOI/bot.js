#!/usr/bin/env node
import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: "claude-opus-4-1-20250805",
  maxTokens: parseInt(process.env.MAX_TOKENS || "2000"),
  temperature: parseFloat(process.env.TEMPERATURE || "0.7"),
  botName: process.env.BOT_NAME || "MOI",
  language: process.env.BOT_LANGUAGE || "de",
  logFile: process.env.LOG_FILE || "./logs/bot.log",
};

// Ensure logs directory exists
const logsDir = path.dirname(CONFIG.logFile);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Conversation history storage
const conversationHistories = new Map();

// System prompt for MOI Bot
const SYSTEM_PROMPT = `Du bist ${CONFIG.botName}, ein intelligenter KI-Expert für Bot-Entwicklung und Onboarding.

DEINE HAUPTAUFGABEN:
1. Erklären wie man Bots baut (grundlagen, technologie, rechtliches, coding, deployment)
2. Praktische Code-Beispiele zeigen (copy-paste fertig)
3. Rechtliche Anforderungen erklären (DSGVO, AGB, Haftung)
4. Deployment-Strategien zeigen (Vercel, Railway, Docker)
5. Best Practices und Security vermitteln

SPRACHE: Deutsch, praktisch, verständlich
ZIELGRUPPE: Anfänger bis Fortgeschrittene
FOKUS: Unwritten Studio - KI und Onboarding leicht machen

WICHTIG:
- Antworte IMMER auf Deutsch
- Gib praktische Code-Beispiele (markiert mit \`\`\`code)
- Erkläre auch das WARUM hinter den Dingen
- Sei hilfreich, nicht zu technisch
- Verweise auf EXAMPLES.md und LEGAL.md für Details
- Nutze Struktur mit Überschriften (##) für Klarheit`;

class MOIBot {
  constructor() {
    if (!CONFIG.apiKey) {
      throw new Error(
        "❌ ANTHROPIC_API_KEY ist nicht gesetzt! Siehe SETUP.md"
      );
    }
    this.client = new Anthropic({ apiKey: CONFIG.apiKey });
    this.conversationHistory = [];
    this.messageCount = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);

    try {
      fs.appendFileSync(CONFIG.logFile, logMessage);
    } catch (err) {
      console.error("Logging Error:", err.message);
    }
  }

  async chat(userMessage) {
    try {
      // Add user message to history
      this.conversationHistory.push({
        role: "user",
        content: userMessage,
      });

      // Call Claude API
      const response = await this.client.messages.create({
        model: CONFIG.model,
        max_tokens: CONFIG.maxTokens,
        temperature: CONFIG.temperature,
        system: SYSTEM_PROMPT,
        messages: this.conversationHistory,
      });

      // Extract response text
      const assistantMessage =
        response.content[0].type === "text" ? response.content[0].text : "";

      // Add to history
      this.conversationHistory.push({
        role: "assistant",
        content: assistantMessage,
      });

      // Track usage
      this.messageCount++;
      this.log(
        `✅ Message #${this.messageCount} | Input: ${response.usage.input_tokens} | Output: ${response.usage.output_tokens}`
      );

      return {
        message: assistantMessage,
        tokensUsed: response.usage.output_tokens,
        inputTokens: response.usage.input_tokens,
        model: CONFIG.model,
      };
    } catch (error) {
      this.log(`❌ API Error: ${error.message}`);
      throw error;
    }
  }

  clearHistory() {
    this.conversationHistory = [];
    this.log("🗑️  Conversation history cleared");
  }

  getStats() {
    return {
      messageCount: this.messageCount,
      historyLength: this.conversationHistory.length,
      model: CONFIG.model,
      timestamp: new Date().toISOString(),
    };
  }
}

// Interactive CLI Interface
async function startInteractiveMode() {
  const bot = new MOIBot();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n🤖 ========================================");
  console.log(`   MOI Bot v10.5.2026 - Ready to Chat!`);
  console.log("🤖 ========================================\n");
  console.log("Du:  (type 'exit' zum beenden, 'clear' für neues Gespräch)\n");

  const askQuestion = () => {
    rl.question("Du: ", async (input) => {
      if (!input.trim()) {
        askQuestion();
        return;
      }

      if (input.toLowerCase() === "exit") {
        console.log("\n👋 Auf Wiedersehen!");
        rl.close();
        return;
      }

      if (input.toLowerCase() === "clear") {
        bot.clearHistory();
        console.log("✅ Conversation history cleared\n");
        askQuestion();
        return;
      }

      if (input.toLowerCase() === "stats") {
        const stats = bot.getStats();
        console.log("\n📊 Statistics:");
        console.log(`   Messages: ${stats.messageCount}`);
        console.log(`   History Length: ${stats.historyLength}`);
        console.log(`   Model: ${stats.model}\n`);
        askQuestion();
        return;
      }

      try {
        const response = await bot.chat(input);
        console.log(`\n${CONFIG.botName}: ${response.message}\n`);
        console.log(
          `[Tokens: input=${response.inputTokens}, output=${response.tokensUsed}]\n`
        );
      } catch (error) {
        console.error(`\n❌ Error: ${error.message}\n`);
      }

      askQuestion();
    });
  };

  askQuestion();
}

// API Mode - Export bot instance for server.js
export { MOIBot };

// CLI Mode - Start interactive if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startInteractiveMode().catch((err) => {
    console.error("Fatal Error:", err.message);
    process.exit(1);
  });
}
