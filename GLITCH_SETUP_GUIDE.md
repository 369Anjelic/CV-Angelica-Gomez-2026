# 🚀 Glitch Setup & Deployment Guide

## 📋 Überblick

**Glitch** ist ein **KI-Lernbegleiter** für die IHK-Prüfung (Fachinformatiker Anwendungsentwicklung) und läuft als Sub-Projekt im CV-Portfolio.

---

## ❌ PROBLEM: API-Verbindung fehlgeschlagen

### Fehler:
```
"Fehler bei der Verbindung zur KI. Versuche es später nochmal."
"Claude API Error: undefined"
```

### Grund:
Die `ANTHROPIC_API_KEY` Umgebungsvariable ist nicht gesetzt.

---

## ✅ LÖSUNG: 3 Schritte

### Step 1: `.env` Datei erstellen
```bash
cd "C:\Users\Anjel\Desktop\Work Projekt\12 CV\CV Power new\projekte\3 projekt Glitch"
cp .env.example .env
```

Oder manuell die Datei `.env` erstellen mit:
```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxx
PORT=3003
```

### Step 2: API-Key besorgen
1. Gehe zu: https://console.anthropic.com/keys
2. "Create Key" klicken
3. Generierter Key kopieren (beginnt mit `sk-ant-`)
4. In `.env` einfügen

**Beispiel .env:**
```
ANTHROPIC_API_KEY=sk-ant-d7a1234567890abcdef1234567890
PORT=3003
```

### Step 3: Server starten

**Option A: Mit START.bat (Alle Projekte)**
```cmd
cd "C:\Users\Anjel\Desktop\Work Projekt\12 CV\CV Power new"
START.bat
```

**Option B: Nur Glitch**
```bash
cd "C:\Users\Anjel\Desktop\Work Projekt\12 CV\CV Power new\projekte\3 projekt Glitch"
npm install
npm start
```

Dann: `http://localhost:3003` öffnen

---

## 🤖 Was ist Glitch?

| Aspekt | Details |
|--------|---------|
| **Name** | Glitch — KI Learning Bot |
| **Ziel** | IHK Prüfungsvorbereitung (Anwendungsentwicklung) |
| **Nutzer** | Fachinformatiker-Azubis (2.-3. Lehrjahr) |
| **Lernfelder** | 18 IHK-Lernfelder (LF1-LF18) |
| **Tech** | Node.js + Claude AI (Anthropic) |
| **Port** | 3003 |
| **Datenspeicherung** | JSON (lokal, kein Account) |

---

## 🎓 18 Lernfelder der IHK

Glitch unterstützt alle:

```
LF1  → IT-Systeme                  LF10 → Design Patterns
LF2  → Programmiergrundlagen       LF11 → Testing & QA
LF3  → Datenbanken                 LF12 → Team-Entwicklung
LF4  → Frontend (HTML/CSS/JS)      LF13 → Enterprise
LF5  → Backend (API/Auth/DB)       LF14 → Cloud-Native
LF6  → Web-Sicherheit              LF15 → DevOps
LF7  → Mobile iOS                  LF16 → KI & ML
LF8  → Mobile Android              LF17 → Data & BigData
LF9  → Cross-Platform              LF18 → Embedded & IoT
```

---

## 🔧 API Endpoints

```javascript
// 1. Chat (Hauptfunktion)
POST http://localhost:3003/chat
{
  "message": "Erkläre mir OOP",
  "words": "kernel.deploy.merge"    // Optional: Nutzer-ID
}

// 2. Profil abrufen
POST http://localhost:3003/identify
{
  "words": "kernel.deploy.merge"
}

// 3. Konversationsverlauf
POST http://localhost:3003/history
{
  "words": "kernel.deploy.merge"
}

// 4. Als Markdown exportieren
POST http://localhost:3003/export
{
  "words": "kernel.deploy.merge"
}
```

---

## 📁 Projektstruktur

```
3 projekt Glitch/
├── server.js                    # Node.js Server + Claude API
├── index.html                   # Frontend UI
├── package.json                 # Dependencies
├── .env.example                 # ← KOPIERE ZU .env!
├── .env                         # ← SETZE HIER API-KEY!
├── .gitignore                   # ← Schützt .env vor Git
├── README.md                    # Vollständige Docs
├── GLITCH_INFO.txt             # Kurzinfo
├── data/                        # Nutzer-Profile
│   ├── kernel.deploy.merge.json
│   └── ...
└── brain von glitch/           # Lernfeld-Definitionen
    └── lernfelder.json
```

---

## 🐛 Troubleshooting

### 1️⃣ "Module not found"
```bash
npm install
npm start
```

### 2️⃣ "Port 3003 already in use"
```bash
# Windows: Prozess beenden
netstat -ano | find ":3003"
taskkill /PID <PID> /F

# Oder anderen Port nutzen:
PORT=3004 npm start
```

### 3️⃣ "Cannot find .env"
```bash
# Kopiere .env.example
copy .env.example .env

# Editiere .env mit deinem API-Key
# ANTHROPIC_API_KEY=sk-ant-xxxxx
```

### 4️⃣ "Fehler bei der Verbindung zur KI"
**Problem:** API-Key ungültig oder nicht gesetzt
**Lösung:**
1. Prüfe `.env` — hat ANTHROPIC_API_KEY einen Wert?
2. Prüfe API-Key: https://console.anthropic.com/keys
3. Server neustarten

---

## 🔐 Sicherheit

✅ **Was ist geschützt:**
- `.env` Datei wird nicht in Git gespeichert (`.gitignore`)
- API-Key bleibt lokal auf dem Computer
- Keine Secrets in GitHub/Vercel visible

⚠️ **Was du tun musst:**
- NIE `.env` in Git committen!
- API-Key sicher behandeln (nicht teilen)
- `.gitignore` muss `.env` enthalten

---

## 🚀 Deployment auf Vercel

Wenn du auf Vercel deployest:

1. **In Vercel Dashboard:**
   - Environment Variable hinzufügen:
   ```
   Key: ANTHROPIC_API_KEY
   Value: sk-ant-xxxxxxxxxxxxx
   ```

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Add Glitch learning bot"
   git push
   ```

3. **Live URL:**
   - https://cv-angelica-gomez.vercel.app/glitch

---

## 📚 Weitere Ressourcen

| Link | Beschreibung |
|------|-------------|
| [Anthropic Console](https://console.anthropic.com) | API-Keys verwalten |
| [Claude API Docs](https://docs.anthropic.com) | API Dokumentation |
| [README.md](./README.md) | Ausführliche Glitch Docs |
| [GLITCH_INFO.txt](./GLITCH_INFO.txt) | Kurzinfo Glitch |

---

## ✅ Checklist zum Starten

- [ ] API-Key besorgt? https://console.anthropic.com/keys
- [ ] `.env` Datei erstellt? (Copy von `.env.example`)
- [ ] API-Key in `.env` eingefügt?
- [ ] `npm install` ausgeführt?
- [ ] `npm start` startet den Server?
- [ ] http://localhost:3003 funktioniert?
- [ ] Test-Nachricht sendet & erhält Antwort?

---

**Noch Fragen?**
- Schau [README.md](./README.md) für vollständige Docs
- Oder [GLITCH_INFO.txt](./GLITCH_INFO.txt) für Übersicht

**Status:** ✅ Setup Complete — Ready to learn!

---

*Created: 2026-06-16*  
*For: Angelica Gomez CV Portfolio*  
*Purpose: IHK Fachinformatiker Prüfungsvorbereitung*
