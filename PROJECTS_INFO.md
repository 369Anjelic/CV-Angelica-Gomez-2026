# 📚 Portfolio Projekte Übersicht

## 🎯 Alle 6 Sub-Projekte im CV-Portfolio

Dieses Portfolio enthält **6 vollständige Web-Projekte**, alle lokal verfügbar und einsatzbereit:

---

## 1️⃣ 🤖 **Glitch** — KI Learning Bot
**Port:** 3003  
**Tech:** Node.js + Claude AI  
**Status:** ✅ Aktiv

### Was ist Glitch?
Ein intelligenter KI-Lernbegleiter für Fachinformatiker-Azubis zur **IHK-Prüfung** (Anwendungsentwicklung).

- ✅ 18 Lernfelder (LF1-LF18)
- ✅ Intelligente Fragen stellen
- ✅ Persistentes Gedächtnis (JSON-basiert)
- ✅ Claude AI powered

### Setup:
```bash
cd projekte/3\ projekt\ Glitch
cp .env.example .env
# ANTHROPIC_API_KEY einfügen
npm install
npm start
```

### Link:
- Lokal: http://localhost:3003
- Vercel: https://cv-angelica-gomez.vercel.app/glitch

### Problem gelöst:
❌ **Fehler:** "Fehler bei der Verbindung zur KI"  
✅ **Lösung:** `.env` mit API-Key erstellt

---

## 2️⃣ 🏠 **Kaspar Hauser Homepage**
**Port:** 3000  
**Tech:** HTML, CSS, JavaScript  
**Status:** ✅ Aktiv

### Was ist es?
Eine elegante Homepage für das Kaspar Hauser Stadträtsel-Spiel mit Navigation und Projektinfos.

### Setup:
```bash
cd projekte/1\ kaspar-hauser-quest
npm install
npm start
```

### Link:
- Lokal: http://localhost:3000
- Im Portfolio: http://localhost:3000/kaspar

---

## 3️⃣ ✈️ **Flight Trainer**
**Port:** 3001  
**Tech:** JavaScript, Three.js (3D)  
**Status:** ✅ Aktiv

### Was ist es?
Ein interaktives 3D-Flugsimulator-Spiel für Pilot-Training mit 2-Player-Modus.

### Setup:
```bash
cd projekte/2\ projekt\ fly
npm install
npm start
```

### Link:
- Lokal: http://localhost:3001
- Im Portfolio: http://localhost:3000/fly

---

## 4️⃣ 🎮 **Glitch Action Game** (Verbesserte Version)
**Port:** 3003 (mit Glitch)  
**Tech:** JavaScript, HTML5 Canvas  
**Status:** ✅ Integriert

### Was ist es?
Action-Game mit verbessertem Gameplay und neuen Features.

### Setup:
```bash
cd projekte/3\ projekt\ Glitch
npm start
```

---

## 5️⃣ 🤖 **MOI Bot**
**Port:** 3004  
**Tech:** Node.js + AI  
**Status:** ✅ Aktiv

### Was ist es?
Ein Chatbot-Projekt für KI-Integration und Automation.

### Setup:
```bash
cd projekte/4\ Projekt\ MOI
npm install
npm start
```

---

## 6️⃣ 🐍 **Python Learning Tools**
**Port:** 3005  
**Tech:** Python, JavaScript  
**Status:** ✅ Aktiv

### Was ist es?
Sammlung von Python-Programmier-Übungen und Lerntools.

### Setup:
```bash
cd projekte/5\ projekt\ python\ codes
npm install
npm start
```

---

## 🎯 **CV Homepage** (Next.js Wrapper)
**Port:** 3002 (Default) / 3000 (Dev)  
**Tech:** Next.js 14, React, Tailwind  
**Status:** ✅ Aktiv

### Was ist es?
Die zentrale Homepage, die alle 6 Projekte zusammenfasst und verlinkt.

### Setup:
```bash
# Hautverzeichnis
npm install
npm run dev
```

### Features:
- Header mit Navigation
- Hero Section mit Stats
- Projekt-Grid mit Filter
- Responsive Design
- Unwritten Styleguide Colors

---

## 🚀 **SCHNELLSTART — ALLE SERVER STARTEN**

### Option 1: START.bat (Windows)
```cmd
cd "C:\Users\Anjel\Desktop\Work Projekt\12 CV\CV Power new"
START.bat
```

Das startet ALLE Server automatisch:
```
Port 3000 → Kaspar Hauser Quest
Port 3001 → Flight Trainer
Port 3002 → CV Homepage (Next.js)
Port 3003 → Glitch Learning Bot
Port 3004 → MOI Bot
Port 3005 → Python Tools
Port 3006 → Umfrage App
```

### Option 2: Manuell
```bash
# Terminal 1: CV Homepage
npm run dev

# Terminal 2: Kaspar
cd projekte/1\ kaspar-hauser-quest && npm start

# Terminal 3: Flight
cd projekte/2\ projekt\ fly && npm start

# Terminal 4: Glitch (WICHTIG: .env mit API-Key!)
cd projekte/3\ projekt\ Glitch && npm start

# Terminal 5: MOI
cd projekte/4\ Projekt\ MOI && npm start

# Terminal 6: Python
cd projekte/5\ projekt\ python\ codes && npm start
```

---

## ⚙️ **SYSTEM ANFORDERUNGEN**

- Node.js 18+ (check: `node --version`)
- npm (check: `npm --version`)
- Anthropic API Key für Glitch
- 6 verfügbare Ports (3000-3006)

---

## 🔐 **WICHTIG: API-Key für Glitch**

Damit Glitch funktioniert, brauchst du einen **ANTHROPIC_API_KEY**:

1. Gehe zu: https://console.anthropic.com/keys
2. "Create Key" klicken
3. Key kopieren (beginnt mit `sk-ant-`)
4. In `.env` Datei einfügen:
   ```
   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
   ```

**Dateiort:** `projekte/3 projekt Glitch/.env`

---

## 📊 **PORTS ÜBERSICHT**

| # | Projekt | Port | Server | Status |
|---|---------|------|--------|--------|
| 0 | CV Homepage (Next.js) | 3000 | npm run dev | ✅ |
| 1 | Kaspar Hauser | 3000 | npm start | ✅ |
| 2 | Flight Trainer | 3001 | npm start | ✅ |
| 3 | Glitch Learning Bot | 3003 | npm start | ✅ |
| 4 | MOI Bot | 3004 | npm start | ✅ |
| 5 | Python Tools | 3005 | npm start | ✅ |
| 6 | Umfrage App | 3006 | npm start | ✅ |

---

## 🐛 **TROUBLESHOOTING**

### "Server not found" oder "Port in use"
```bash
# Windows: Prozesse ansehen
netstat -ano

# Prozess beenden
taskkill /PID <PID> /F
```

### Glitch zeigt "Fehler bei der Verbindung zur KI"
```bash
# Gehe in Glitch Verzeichnis
cd projekte/3\ projekt\ Glitch

# Prüfe .env Datei
cat .env

# Muss enthalten:
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

### Dependencies Fehler
```bash
# Im Projektverzeichnis:
rm -rf node_modules package-lock.json
npm install
```

---

## ✅ **DEPLOYMENT PLAN**

| Status | Komponente | Aktion |
|--------|-----------|--------|
| ✅ | Code ready | Alle Projekte entwickelt |
| ✅ | Next.js configured | Server läuft lokal |
| ✅ | API Keys setup | `.env.example` bereit |
| ⏳ | Vercel deployment | Push zu https://vercel.com |
| ⏳ | Domain setup | Optional: Custom Domain |

---

## 📞 **SUPPORT**

**Kontakt:**
- Email: AnjelicFilms@hotmail.com
- Studio: Unwritten Studio (https://unwritten.studio)

**Dokumentation:**
- [GLITCH_SETUP_GUIDE.md](./projekte/3\ projekt\ Glitch/GLITCH_SETUP_GUIDE.md) — Glitch Setup
- [README.md](./projekte/3\ projekt\ Glitch/README.md) — Glitch Docs
- [STATUS.md](./STATUS.md) — Homepage Status

---

## 🎓 **BESONDERHEIT: GLITCH**

Glitch ist das **Kernstück** dieses Portfolios — ein **KI-Lernbegleiter** speziell für die **IHK-Prüfung Fachinformatiker**.

### Warum Glitch wichtig ist:
1. **Educationally sound** — 18 IHK-Lernfelder
2. **AI-powered** — Claude AI stellt intelligente Fragen
3. **Portfolio-showcaser** — Zeigt deine AI/LLM-Kompetenzen
4. **Career relevant** — Genau was Prüfer sehen wollen

### Nächste Entwicklung:
- Mock-Prüfungen
- Lernstatistiken-Dashboard
- Multi-Sprachen Support (Deutsch/Englisch)

---

**Stand:** 2026-06-16  
**Für:** Angelica Gomez - CV Portfolio  
**Next.js + React + Claude AI**

