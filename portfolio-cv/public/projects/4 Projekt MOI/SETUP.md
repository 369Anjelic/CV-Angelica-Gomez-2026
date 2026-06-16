# 🚀 MOI Bot - Installation & Setup Guide

> Schritt-für-Schritt Anleitung zum Starten von MOI

---

## ⏱️ Zeitaufwand
- **Installation**: 5 Minuten
- **Setup**: 5 Minuten
- **Erste Tests**: 5 Minuten
- **Total**: ~15 Minuten

---

## 📋 Voraussetzungen

### 1. Node.js installiert?
```bash
node --version
npm --version
```

Falls nicht: https://nodejs.org (LTS Version empfohlen)

### 2. Claude API Key
Gehe zu: https://console.anthropic.com
- Sign up / Log in
- "API Keys" 
- "Create Key"
- Kopiere den Key

---

## 🔧 Installation Schritt für Schritt

### Schritt 1: Projekt-Ordner erstellen
```bash
# Gehe zu deinem Projekts-Verzeichnis
cd ~/Desktop/Work\ Projekt/4\ MOI/MOI\ 10.5.2026

# Falls Ordner noch nicht existiert:
mkdir -p "MOI 10.5.2026"
cd "MOI 10.5.2026"
```

### Schritt 2: Dependencies installieren
```bash
npm install
```

Das dauert 2-5 Minuten und downloaded alle Pakete.

**Was wird installiert?**
- `@anthropic-ai/sdk` - Claude API
- `express` - Web Server
- `cors` - Cross-Origin Requests
- `dotenv` - Environment Variables
- Weitere Tools für Logging & Sicherheit

### Schritt 3: Environment Setup
```bash
# Kopiere die Template-Datei
cp .env.example .env

# Editiere .env mit deinem Editor
# (VS Code, Sublime Text, etc.)
```

**In .env eintragen:**
```
ANTHROPIC_API_KEY=sk-ant-deinKeyHier
NODE_ENV=development
PORT=3000
```

**Speichern und schließen!**

### Schritt 4: Starte den Bot
```bash
npm start
```

**Du solltest sehen:**
```
✅ MOI Bot Server läuft auf http://localhost:3000
🤖 Bot ready - Frag mich was!
```

---

## ✅ Test: Funktioniert es?

### Test 1: Bot im Terminal

**Im gleichen Terminal solltest du schreiben können:**
```
Du: Was ist ein Bot?
```

**MOI antwortet:**
```
MOI: Ein Bot ist ein Programm, das automatisch 
Aufgaben erfüllt. Zum Beispiel...
```

### Test 2: Homepage im Browser

Öffne: http://localhost:3000

Du solltest sehen:
- 🎨 Moderne Landing Page
- 💬 Chat Interface
- 🚀 "Powered by Claude" 
- ✨ Modern Design

### Test 3: Chat in der Homepage

1. Gehe auf http://localhost:3000
2. Schreib im Chat: "Hallo MOI!"
3. MOI sollte antworten

---

## 🐛 Troubleshooting

### Problem: "npm: command not found"
**Lösung:** Node.js nicht installiert
```bash
# Check
node --version

# Falls nicht installiert:
# https://nodejs.org → Download & Install
```

### Problem: "ANTHROPIC_API_KEY is not set"
**Lösung:** .env nicht richtig konfiguriert
```bash
# Check
cat .env | grep ANTHROPIC_API_KEY

# Sollte ausgeben:
# ANTHROPIC_API_KEY=sk-ant-xxxxx

# Falls leer: .env editieren und API Key eintragen
```

### Problem: "Port 3000 already in use"
**Lösung:** Ein anderes Programm nutzt Port 3000
```bash
# Entweder:
# 1. Anderes Programm schließen
# 2. Oder einen anderen Port nutzen:

# .env editieren:
PORT=3001
# Dann npm start nochmal

# Jetzt: http://localhost:3001
```

### Problem: "No responses from MOI"
**Lösung:** API Key ungültig oder Quota überschritten
```bash
# Check
# 1. Ist der API Key richtig? (in .env)
# 2. Hat der API Key Credits? (console.anthropic.com)
# 3. Logs ansehen:
tail -f logs/bot.log
```

### Problem: "Cannot find module '@anthropic-ai/sdk'"
**Lösung:** Dependencies nicht installiert
```bash
npm install
# Dauert 2-5 Minuten
```

---

## 🎯 Nächste Schritte

### Nach erfolgreichem Start:

#### 1. BOT testen
```bash
# Im Terminal frag den Bot:
Du: Wie baue ich einen Bot mit Claude?

# MOI sollte praktische Antwort geben
```

#### 2. Dokumentation lesen
- `README.md` - Was ist MOI?
- `EXAMPLES.md` - Code-Beispiele
- `LEGAL.md` - Rechtliches

#### 3. Dein erstes Projekt
```bash
# Nutze EXAMPLES.md
# Schreib deinen ersten Bot

# Frag Claude Code:
# "Schreib mir einen Bot der..."
```

#### 4. Deployment vorbereiten
```bash
# Lies: DEPLOYMENT.md
# Deploy auf Vercel/Railway
```

---

## 📊 Überprüfungs-Checkliste

- [ ] Node.js installiert
  ```bash
  node --version  # Sollte v18+ sein
  ```

- [ ] Claude API Key geholt
  - Gehe zu https://console.anthropic.com
  - Erstelle API Key
  - Kopiere den Key

- [ ] Projekt geklont/kopiert
  ```bash
  ls -la  # Sollte package.json zeigen
  ```

- [ ] Dependencies installiert
  ```bash
  npm install  # Dauert 2-5 Min
  ```

- [ ] .env konfiguriert
  ```bash
  cp .env.example .env
  # Editor: ANTHROPIC_API_KEY=sk-ant-xxxxx
  ```

- [ ] Bot gestartet
  ```bash
  npm start
  # Sollte "Bot ready" zeigen
  ```

- [ ] Bot antwortet
  ```
  Du: Hallo!
  MOI: Hallo! Ich bin MOI, dein KI-Expert...
  ```

- [ ] Homepage lädt
  - Browser: http://localhost:3000
  - Sollte moderne Landing Page zeigen

- [ ] Chat im Browser funktioniert
  - http://localhost:3000
  - Schreib eine Nachricht
  - MOI antwortet

---

## 🎓 Erste Fragen um MOI zu testen

Teste mit diesen Fragen ob alles funktioniert:

```
1. "Was kann ich mit dir machen?"
   → MOI listed alle Features

2. "Zeig mir Code Beispiel für einen Bot"
   → MOI gibt Code-Beispiel

3. "Welche rechtlichen Dinge muss ich beachten?"
   → MOI erklärt DSGVO, AGB, etc.

4. "Wie deploye ich meinen Bot?"
   → MOI zeigt Deployment-Optionen

5. "Was kostet das?"
   → MOI erklärt Preise & Optionen
```

---

## 🚀 Fertig!

Glückwunsch! 🎉

Du hast MOI erfolgreich aufgesetzt. Jetzt:

1. **Erkunde MOI** - Frag den Bot Fragen
2. **Lies die Docs** - EXAMPLES.md, LEGAL.md
3. **Bau dein Projekt** - Mit Claude Code Hilfe
4. **Deploy** - Auf Vercel/Railway

---

## 📞 Hilfe brauchst du?

### In Terminal:
```bash
npm start
Du: Ich hab ein Problem mit [X]
MOI: [gibt dir Lösung]
```

### Im Code:
```bash
claude code
# Sag Claude Code dein Problem
# Claude Code macht den Rest
```

### Offizielle Docs:
- https://docs.anthropic.com
- https://nodejs.org

---

**Happy Bot Building! 🤖🚀**

*MOI - Version 10.5.2026*
