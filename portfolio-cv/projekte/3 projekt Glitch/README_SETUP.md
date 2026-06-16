# 🎯 Glitch Local — Setup & Bedienung

## 📦 Überblick

**Glitch** ist ein KI-Lernbegleiter für Fachinformatiker-Azubis mit Claude AI Integration.

- **Frontend:** Static HTML (Port 3000)
- **Backend:** Node.js + Claude API (Port 3003)
- **Daten:** JSON-Files im `data/` Ordner
- **Auth:** Passwort-geschützt (login.html)

---

## ⚡ Schnellstart (Windows)

### Option A: PowerShell Script (Empfohlen)
```powershell
# Im Explorer: Rechtsklick auf START.ps1 → Mit PowerShell ausführen
# Oder im PowerShell:
.\START.ps1
```

### Option B: Manuell in 2 Terminals

**Terminal 1 — Frontend (Port 3000):**
```bash
python -m http.server 3000
```

**Terminal 2 — Backend (Port 3003):**
```bash
npm start
# oder: node server.js
```

Dann öffne: **http://localhost:3000**

---

## 🔐 Login

Das System ist durch ein Login geschützt.

### Zugang:
- Gehe zu `http://localhost:3000` → du wirst zu `login.html` weitergeleitet
- Das Passwort findest du in `login.html:213`

### Login deaktivieren:
Falls du Login nicht brauchst, öffne `index.html` und uncommentare:
```javascript
// Line 24-26 in <head>
// if (!sessionStorage.getItem('glitch_auth_session')) {
//     window.location.href = 'login.html';
// }
```

---

## 💬 So nutzt du Glitch

### 1. Chat starten
- Schreibe etwas über ein IT-Thema
- z.B.: "Ich möchte SQL lernen" oder "Erkläre mir Programmiergrundlagen"

### 2. Glitch erkennt dich
- Beim ersten Chat bekommst du ein Identifier: `kernel.merge.deploy`
- Speichere diesen ab! Damit kannst du deine Daten später wieder abrufen
- Der Identifier wird automatisch in einem Cookie gespeichert

### 3. Lernfortschritt tracken
- Glitch vermerkt automatisch, was du verstanden hast
- In `data/` werden deine Gesprächsprotokolle gespeichert
- Du kannst dein Tagebuch exportieren als Markdown

### 4. Lernfelder (LF1-LF18)
Glitch kennt alle 18 Lernfelder der IHK Ausbildung:
- LF1: IT-Systeme
- LF2: Programmiergrundlagen
- LF3: Datenbanken
- LF4: Frontend
- LF5: Backend
- ... (siehe server.js Zeile 56-57 für alle)

---

## 🛠️ Technische Details

### Dateistruktur
```
glitch local/
├── index.html           ← Hauptfrontend
├── login.html           ← Login-Seite
├── server.js            ← Node.js Backend
├── package.json         ← NPM Config
├── .env                 ← API Key (NICHT committen!)
├── DEBUG_REPORT.md      ← Diese Debug-Info
├── START.ps1            ← Windows Startup Script
├── data/
│   └── {identifier}.json ← User-Daten (auto-erstellt)
└── assets/
    └── images/          ← Bilder
```

### Backend Endpoints

| Endpoint | Methode | Was? |
|----------|---------|------|
| `/chat` | POST | Glitch Chat, Claude API |
| `/identify` | POST | User wiederherstellen |
| `/history` | POST | Gesprächstagebuch laden |
| `/export` | POST | Progress exportieren |

### Server.js — Claude Integration

```javascript
// Nutzt Claude Opus 4.7
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// System Prompt mit 18 Lernfeldern
// Erkennt automatisch gelerntes Wissen mit [LEARNED:LF{N}:{topic}]
```

### Daten-Persistenz

Jeder User hat eine `.json` Datei mit:
```json
{
  "words": "kernel.merge.deploy",
  "messages": [...],
  "level": "draft",
  "jokers": 3,
  "learned": ["LF2", "LF3:sql"]
}
```

---

## 🐛 Troubleshooting

### ❌ "Connection refused: 3003"
→ Backend Server läuft nicht!
```bash
npm start  # oder: node server.js
```

### ❌ "API Key invalid"
→ `.env` Datei prüfen:
```bash
cat .env  # Linux/Mac
type .env # Windows
```

### ❌ "EADDRINUSE: address already in use :::3003"
→ Port 3003 ist belegt!
```bash
# Linux/Mac: Suche Prozess
lsof -i :3003
kill -9 <PID>

# Windows: Suche Prozess
netstat -ano | findstr :3003
taskkill /PID <PID> /F
```

### ❌ Daten werden nicht gespeichert
→ `data/` Ordner muss exist:
```bash
mkdir data  # Wird auto-erstellt vom Server
```

---

## 🚀 Production Deployment

Für echtes Deployment (z.B. zu Vercel):

1. **Env var setzen:**
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

2. **Server starten:**
   ```
   npm start
   ```

3. **Frontend servieren:**
   - Vercel: Static HTML wird auto-deployed
   - Oder: Vercel + Node.js Runtime

4. **Daten:**
   - Lokal: JSON Files
   - Production: PostgreSQL/MongoDB statt Files

---

## 📚 Weitere Ressourcen

- **Claude API Docs:** https://docs.anthropic.com
- **IHK Lernfelder:** https://www.ihk.de (Fachinformatiker)
- **Glitch Design:** Unwritten Studio (2026)

---

## 💡 Tipps für Entwicklung

### Debug Mode
Öffne Browser Console (F12) → sehe alle API Calls:
```javascript
console.log('Chat error:', err);
console.log('✅ Glitch hat erkannt: LF3:sql');
```

### Daten reset
```bash
rm -rf data/  # Alle User-Daten löschen
```

### Neue Lernfelder hinzufügen
Edit `server.js` Zeile 39-82 (System Prompt)

### API Model wechseln
Edit `server.js` Zeile 85:
```javascript
model: 'claude-opus-4-7',  // → andere Models
```

Verfügbare Models:
- `claude-opus-4-7` (Schnell & Gut)
- `claude-sonnet-4-6` (Sehr schnell)
- `claude-haiku-4-5` (Sehr einfach)

---

## 📞 Support

Fehler gefunden? Check:
1. `DEBUG_REPORT.md` — Technische Fehleranalyse
2. Browser Console (F12)
3. Server Console Output

---

**Last Updated:** 2026-05-06  
**Glitch Version:** 1.0.0 (Local)  
**By:** Unwritten Studio
