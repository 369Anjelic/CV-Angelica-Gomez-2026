const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');
require('dotenv').config();

const { Anthropic } = require('@anthropic-ai/sdk');

const PORT = 3003;
const DATA_DIR = path.join(__dirname, 'data');
const PYTHON_PROFILE_DIR = path.join(__dirname, 'brain von glitch', 'python profie');

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

// Erstelle data Ordner falls nicht vorhanden
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Lade Python-Profile (aber NICHT in jeden Chat einbauen - zu groß!)
let pythonProfileAvailable = false;
function loadPythonProfile() {
    try {
        if (fs.existsSync(PYTHON_PROFILE_DIR)) {
            const files = fs.readdirSync(PYTHON_PROFILE_DIR);
            if (files.length > 0) {
                pythonProfileAvailable = true;
                console.log('[PYTHON] Profile verfügbar: ' + files.join(', '));
            }
        }
    } catch (err) {
        console.error('[PYTHON] Fehler beim Laden:', err.message);
    }
}
loadPythonProfile();

function generateWords() {
    const words = ['kernel', 'deploy', 'merge', 'commit', 'draft', 'cache', 'stack', 'queue', 'heap', 'node'];
    return [
        words[Math.floor(Math.random() * words.length)],
        words[Math.floor(Math.random() * words.length)],
        words[Math.floor(Math.random() * words.length)]
    ].join('.');
}

function getUserFile(words) {
    return path.join(DATA_DIR, `${words}.json`);
}

async function handlePythonExecution(body, callback) {
    const { code, words } = body;
    console.log(`[PYTHON] Executing code for user: ${words}`);

    try {
        // Schreibe Code in temporäre Datei
        const tempFile = path.join(os.tmpdir(), `glitch_${Date.now()}.py`);
        fs.writeFileSync(tempFile, code);

        // Führe Python aus
        let output = '';
        let error = '';
        try {
            output = execSync(`python "${tempFile}"`, {
                encoding: 'utf8',
                timeout: 10000,
                maxBuffer: 1024 * 1024 * 10
            });
        } catch (err) {
            error = err.stdout ? err.stdout + err.stderr : err.message;
        }

        // Lösche temporäre Datei
        fs.unlinkSync(tempFile);

        // Speichere Code-Ausführung wenn User existiert
        if (words) {
            const userFile = getUserFile(words);
            let userData = { words, messages: [], level: 'draft', jokers: 3, learned: [], python_codes: [] };

            if (fs.existsSync(userFile)) {
                userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
            }

            userData.python_codes = userData.python_codes || [];
            userData.python_codes.push({
                code,
                output: output || error,
                error: !!error,
                ts: new Date().toISOString(),
            });

            fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
        }

        callback({
            output: output || error,
            error: !!error,
            executed: true,
        });
    } catch (err) {
        console.error('[PYTHON] Execution Error:', err.message);
        callback({
            output: `Fehler: ${err.message}`,
            error: true,
            executed: false,
        });
    }
}

async function handleChat(body, callback) {
    const { message, words } = body;
    console.log(`[CHAT] Input - message: "${message.substring(0, 30)}...", words: ${words}`);

    try {
        // Nutze Claude als Glitch Mentor
        const systemPrompt = `Du bist Glitch, ein KI-Lernbegleiter für Fachinformatiker-Azubis (Anwendungsentwicklung).
Du hilfst bei Prüfungsvorbereitung für die IHK Prüfung und beim POWER PYTHON LEARNING.

## POWER PYTHON MENTOR MODE

Wenn der User im Power Python Modul ist (Code-Editor Bereich), bist du PYTHON SPEZIALIST:
- Du erklärst Python-Code Line-by-Line
- Du hilfst beim Debuggen von Fehlern
- Du zeigst Best Practices und Optimierungen
- Du stellst Aufgaben um das Verstandene zu trainieren
- Du erkennst Python-Konzepte und bestätigst Lernfortschritt

**Python Grundlagen (75-Min Crash-Kurs Gedächtnis):**
- Variablen & Datentypen (int, str, list, dict, tuple)
- Schleifen & Bedingungen (if/elif/else, for, while)
- Funktionen (def, Parameter, Return, *args, **kwargs)
- OOP: Klassen, Vererbung, Polymorphismus, self
- Exception Handling (try/except/finally, raise)
- Dateioperationen, Imports, Module
- Listen-Komprehensionen, Lambda-Funktionen
- RegEx, JSON, CSV, APIs

**Beim normalen Lernen (Standard Mode):**
- Stelle Fragen statt Antworten zu geben
- Leite zum eigenen Denken an
- Sei unterstützend aber fordernd
- Fokus auf praktisches Verständnis
- Kurze, prägnante Antworten (max 3-4 Sätze)
- Erkenne automatisch welches LF der User lernt (z.B. durch Erwähnung wie "Datenbanken", "SQL", "Flask" etc.)

**Am Anfang (erste Nachricht oder wenn User "anleitung" sagt):**
- Gib eine kurze Anleitung (max 3-4 Sätze), wie das System funktioniert
- Erkläre die 18 Lernfelder: LF1-LF18
- Frag den User, welches Fach er lernen möchte
- Oder gib ein Beispiel ("z.B. LF2 Programmiergrundlagen" oder "LF3 Datenbanken")

**18 Lernfelder:**
LF1: IT-Systeme | LF2: Programmiergrundlagen | LF3: Datenbanken | LF4: Frontend | LF5: Backend | LF6: Web-Sicherheit | LF7: Mobile iOS | LF8: Mobile Android | LF9: Cross-Platform | LF10: Design Patterns | LF11: Testing & QA | LF12: Team-Entwicklung | LF13: Enterprise | LF14: Cloud-Native | LF15: DevOps | LF16: KI & ML | LF17: Data & BigData | LF18: Embedded & IoT

**WICHTIG - Verstandene Lernschritte erkennen:**
Nutze am ENDE deiner Nachricht einen dieser Codes wenn der User es versteht:

**EINZELNE LERNSCHRITTE (bevorzugt!):**
[LEARNED:LF{Nummer}:{TopicId}]

**ALLE VERFÜGBAREN TOPICS:**
LF1: [LEARNED:LF1:hardware], [LEARNED:LF1:betriebssysteme], [LEARNED:LF1:netzwerk]
LF2: [LEARNED:LF2:loops], [LEARNED:LF2:functions], [LEARNED:LF2:oop], [LEARNED:LF2:error_handling], [LEARNED:LF2:variables]
LF3: [LEARNED:LF3:select], [LEARNED:LF3:joins], [LEARNED:LF3:where], [LEARNED:LF3:insert]
LF4: [LEARNED:LF4:html], [LEARNED:LF4:css], [LEARNED:LF4:javascript]
LF5: [LEARNED:LF5:api], [LEARNED:LF5:auth], [LEARNED:LF5:database_connection]
LF6: [LEARNED:LF6:injection], [LEARNED:LF6:xss], [LEARNED:LF6:encryption]
LF7: [LEARNED:LF7:swift], [LEARNED:LF7:ui_grundlagen]
LF8: [LEARNED:LF8:kotlin], [LEARNED:LF8:ui_grundlagen]
LF9: [LEARNED:LF9:framework]
LF10: [LEARNED:LF10:patterns], [LEARNED:LF10:solid], [LEARNED:LF10:code_quality]
LF11: [LEARNED:LF11:unit_testing], [LEARNED:LF11:integration_testing], [LEARNED:LF11:tdd]
LF12: [LEARNED:LF12:git], [LEARNED:LF12:workflows], [LEARNED:LF12:agile]
LF13: [LEARNED:LF13:microservices], [LEARNED:LF13:patterns], [LEARNED:LF13:erp]
LF14: [LEARNED:LF14:kubernetes], [LEARNED:LF14:docker], [LEARNED:LF14:cloud]
LF15: [LEARNED:LF15:cicd], [LEARNED:LF15:monitoring], [LEARNED:LF15:iac]
LF16: [LEARNED:LF16:ml], [LEARNED:LF16:deep_learning], [LEARNED:LF16:llms], [LEARNED:LF16:ai_safety]
LF17: [LEARNED:LF17:analysis], [LEARNED:LF17:visualization], [LEARNED:LF17:bigdata]
LF18: [LEARNED:LF18:arduino], [LEARNED:LF18:raspberry_pi], [LEARNED:LF18:protocols]

**BEISPIELE wann LEARNED verwenden:**
- User versteht SQL SELECT → [LEARNED:LF3:select]
- User versteht Schleifen → [LEARNED:LF2:loops]
- User versteht OOP Konzepte → [LEARNED:LF2:oop]
- User kann ein Thema erklären oder anwenden → [LEARNED:LF{N}:{topic}]

**GANZES LERNFELD (nur wenn ALLE Topics verstanden):**
[LEARNED:LF{Nummer}]

Nutze diese Codes NUR wenn der User wirklich demonstriert, dass er es verstanden hat:
- Mehrere richtige Antworten in Folge
- Gute/durchdachte Fragen zum Thema
- Kann das Konzept selbst erklären oder anwenden`;

        const response = await client.messages.create({
            model: 'claude-opus-4-7',
            max_tokens: 400,
            system: systemPrompt,
            messages: [
                {
                    role: 'user',
                    content: message,
                },
            ],
        });

        let assistantMessage = response.content[0].text;
        let learnedLF = null;
        let learnedTopic = null;

        // Extrahiere [LEARNED:LF{N}:TOPIC] oder [LEARNED:LF{N}] Tags wenn vorhanden
        const learnedFullMatch = assistantMessage.match(/\[LEARNED:LF(\d+):(\w+)\]/);
        if (learnedFullMatch) {
            learnedLF = `LF${learnedFullMatch[1]}`;
            learnedTopic = learnedFullMatch[2].toLowerCase();
            assistantMessage = assistantMessage.replace(/\[LEARNED:LF\d+:\w+\]/g, '').trim();
        } else {
            const learnedMatch = assistantMessage.match(/\[LEARNED:LF(\d+)\]/);
            if (learnedMatch) {
                learnedLF = `LF${learnedMatch[1]}`;
                assistantMessage = assistantMessage.replace(/\[LEARNED:LF\d+\]/g, '').trim();
            }
        }

        // Generiere neue Wörter wenn noch keine (IMMER!)
        let wordsAssigned = null;
        if (!words) {
            wordsAssigned = generateWords();
            console.log(`[CHAT] Generated new words: ${wordsAssigned}`);
        }

        // Speichere Nachricht wenn User existiert
        if (words) {
            const userFile = getUserFile(words);
            let userData = { words, messages: [], level: 'draft', jokers: 3, learned: [] };

            if (fs.existsSync(userFile)) {
                userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
                console.log(`[CHAT] Found existing file: ${userFile}`);
            } else {
                console.log(`[CHAT] Creating new file: ${userFile}`);
            }

            userData.messages.push({
                role: 'user',
                content: message,
                ts: new Date().toISOString(),
            });
            userData.messages.push({
                role: 'assistant',
                content: assistantMessage,
                ts: new Date().toISOString(),
                learned: learnedLF,
            });

            // Speichere gelernte Lernfelder
            if (learnedLF && !userData.learned.includes(learnedLF)) {
                userData.learned.push(learnedLF);
            }

            fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
            console.log(`[CHAT] Saved to: ${userFile}`);
        }

        callback({
            response: assistantMessage,
            words_assigned: wordsAssigned,
            level_up: null,
            jokers_remaining: 3,
            learned_lf: learnedLF,
            learned_topic: learnedTopic,
        });
    } catch (err) {
        console.error('Claude API Error:', err.message);
        callback({
            response: 'Fehler bei der Verbindung zur KI. Versuche es später nochmal.',
            error: err.message,
        });
    }
}

function handleIdentify(body, callback) {
    const { words } = body;
    const userFile = getUserFile(words);
    console.log(`[IDENTIFY] Looking for: ${words} at ${userFile}`);

    if (fs.existsSync(userFile)) {
        const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
        console.log(`[IDENTIFY] Found! Level: ${userData.level}, Jokers: ${userData.jokers}`);
        callback({
            found: true,
            profile: {
                name: 'Azubi',
                level: userData.level || 'draft',
                jokers: userData.jokers || 3,
            },
        });
    } else {
        console.log(`[IDENTIFY] NOT FOUND - File does not exist`);
        callback({ found: false });
    }
}

function handleHistory(body, callback) {
    const { words } = body;
    const userFile = getUserFile(words);

    let history = [];
    if (fs.existsSync(userFile)) {
        const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
        history = userData.messages || [];
    }

    callback({ history });
}

function handleExport(body, callback) {
    const { words } = body;
    const userFile = getUserFile(words);

    let markdown = `# Glitch Lernfortschritt\n\n**Nutzer:** \`${words}\`\n\n`;

    if (fs.existsSync(userFile)) {
        const userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
        markdown += `**Level:** ${userData.level || 'draft'}\n`;
        markdown += `**Joker übrig:** ${userData.jokers || 3}\n\n`;
        markdown += `## Konversationen\n\n`;

        for (const msg of userData.messages || []) {
            const role = msg.role === 'user' ? '**Du**' : '**Glitch**';
            markdown += `${role}\n${msg.content}\n\n`;
        }
    }

    callback({ markdown });
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Serviere statische Dateien (HTML, CSS, JS)
    if (req.method === 'GET' && pathname !== '/') {
        let filePath = path.join(__dirname, pathname);

        // Prevent directory traversal
        if (!filePath.startsWith(__dirname)) {
            res.writeHead(403);
            res.end('Forbidden');
            return;
        }

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.json': 'application/json',
                '.svg': 'image/svg+xml',
                '.jpg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif'
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.writeHead(200);
            res.end(fs.readFileSync(filePath));
            return;
        }
    }

    // Serviere index.html für root path
    if (pathname === '/' && req.method === 'GET') {
        const indexPath = path.join(__dirname, 'index.html');
        if (fs.existsSync(indexPath)) {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(fs.readFileSync(indexPath, 'utf8'));
            return;
        }
    }

    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
        try {
            const data = body ? JSON.parse(body) : {};

            if (pathname === '/chat' && req.method === 'POST') {
                handleChat(data, (response) => {
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                });
            } else if (pathname === '/identify' && req.method === 'POST') {
                handleIdentify(data, (response) => {
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                });
            } else if (pathname === '/history' && req.method === 'POST') {
                handleHistory(data, (response) => {
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                });
            } else if (pathname === '/export' && req.method === 'POST') {
                handleExport(data, (response) => {
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                });
            } else if (pathname === '/execute-python' && req.method === 'POST') {
                handlePythonExecution(data, (response) => {
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                });
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: 'Endpoint nicht gefunden' }));
            }
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        }
    });
});

server.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   Glitch Local API Server mit Claude   ║
║   http://localhost:${PORT}               ║
║   Powered by Anthropic Claude          ║
╚════════════════════════════════════════╝
    `);
});
