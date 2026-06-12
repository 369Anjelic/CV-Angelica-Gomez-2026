# 🎭 Kaspar Hauser Quest

**Interaktives Stadträtsel-Spiel über die Kaspar Hauser Geschichte**

---

## 📋 Über das Projekt

Ein innovatives 3-phasen Stadträtsel-Spiel basierend auf der historischen Figur Kaspar Hauser. Das Spiel kombiniert immersives Gameplay mit einem mittelalterlichen Setting, historischen Fakten und rätselhaften Herausforderungen.

**Status:** ✅ Aktiv & Vollständig  
**Version:** 1.0  
**Letztes Update:** 04.06.2026

---

## 🎯 Features

- 🎭 Immersives Story-Gameplay
- 📖 Historische Fakten über Kaspar Hauser
- 🗺️ Nürnberg als Spielwelt
- 💬 AI-Bot unterstützte Rätsel
- 🎮 3-Phase Quest System
- 🏆 Achievement System
- 📊 Progress Tracking
- 🔑 Intelligente Hinweise

---

## 🛠️ Technologie-Stack

| Bereich | Technologie |
|---------|------------|
| Frontend | HTML5, React, TypeScript |
| Backend | Node.js, Express |
| KI | Anthropic Claude API |
| Database | Optional (JSON/Local) |
| Deployment | Vercel, Node.js |

---

## 🚀 Quick Start

### Installation
```bash
npm install
cp .env.example .env
```

### Environment Setup
```env
ANTHROPIC_API_KEY=sk-ant-xxxxx
PORT=3000
```

### Development Server
```bash
npm run dev
# oder
npm start
```

### Browser öffnen
```
http://localhost:3000
```

---

## 📁 Projektstruktur

```
projekt-kaspar-hauser/
├── index.html              # Hauptspiel (Frontend)
├── api/
│   ├── index.js            # Express Server
│   └── routes/             # API Endpoints
├── bot/
│   ├── index.js            # Bot Logic
│   └── prompts/            # Bot Prompts
├── public/                 # Static Assets
│   ├── styles.css
│   └── images/
├── package.json            # Dependencies
├── .env.example            # Environment Template
├── README.md               # Diese Datei
└── server.js               # Server Script
```

---

## 🎮 Spielmechaniken

### Phase 1: Entdeckung
- 🗺️ Erkunde Nürnberg
- 🏰 Besuche historische Orte
- 🎭 Treffe Charaktere
- 💡 Sammle erste Hinweise

### Phase 2: Rätsel Lösen
- 🧩 Löse 10 Nürnberg-Rätsel
- 💬 Nutze AI-Bot für Hinweise
- 📚 Lerne historische Fakten
- 🔑 Sammle Schlüssel

### Phase 3: Finale Quest
- 🏆 Löse das Haupträtsel
- 🎊 Erreiche das Ziel
- 📈 Verdiene Achievement
- ⭐ Teile deinen Score

---

## 📊 Nürnberg Orte (10 Quests)

| # | Ort | Rätsel | Kategorie |
|---|-----|--------|-----------|
| 1 | Handwerkerhof | Das goldene Nürnberg | Mittelalter |
| 2 | St. Lorenz Kirche | Engelssalutation | Kunstgeschichte |
| 3 | Nassauer Haus | Geschlechterturm | Architektur |
| 4 | Schöner Brunnen | Wunschring | Volkskunde |
| 5 | Frauenkirche | Männleinlaufen | Technik |
| 6 | Altes Rathaus | Eiserne Jungfrau | Geschichte |
| 7 | St. Sebald | Sebaldus | Religion |
| 8 | Kaiserburg | Reichskleinodien | Politik |
| 9 | Weinstadel | Lepra | Medizin |
| 10 | Henkersteg | Folter | Justiz |

---

## 🔌 API Endpoints

### POST /api/bot
Sendet eine Nachricht an den Kaspar Hauser Bot

```bash
curl -X POST http://localhost:3000/api/bot \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hinweis für das erste Rätsel?",
    "history": [],
    "userId": "player1"
  }'
```

**Response:**
```json
{
  "response": "Das goldene Nürnberg... ein altes Sprichwort.",
  "tokens": 145
}
```

### POST /api/quest
Überprüfe Antwort auf ein Rätsel

```bash
curl -X POST http://localhost:3000/api/quest \
  -H "Content-Type: application/json" \
  -d '{
    "questId": 1,
    "answer": "gold"
  }'
```

### GET /api/progress/:userId
Hole Spielfortschritt

```bash
curl http://localhost:3000/api/progress/player1
```

---

## 🎨 Design & Theme

### Farben (Mittelalter)
```css
--primary: #8B4513;        /* Braun */
--secondary: #D4AF37;      /* Gold */
--dark: #2C1810;           /* Dunkelbraun */
--light: #F5DEB3;          /* Beige */
```

### Schriftarten
- Überschriften: Gothic/Medieval Font
- Text: Plus Jakarta Sans
- Datentyp: Monospace (Code)

---

## 🚀 Deployment

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker build -t kaspar-hauser .
docker run -p 3000:3000 \
  -e ANTHROPIC_API_KEY=sk-ant-xxxxx \
  kaspar-hauser
```

### Environment Setup
```bash
PORT=3000
NODE_ENV=production
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

---

## 📊 Performance

| Metrik | Target | Status |
|--------|--------|--------|
| Page Load | < 2s | ✅ |
| API Response | < 500ms | ✅ |
| Bot Response | < 2s | ✅ |

---

## 🔐 Security

- ✅ API Key in .env
- ✅ CORS configured
- ✅ Input validation
- ✅ Rate limiting
- ✅ Error handling
- ✅ HTTPS enforced

---

## 📚 Kapar Hauser Geschichte

Kaspar Hauser war eine historische Figur des 19. Jahrhunderts, die als mysteriöser Findling auftauchte. Dieses Spiel basiert auf dieser faszinierenden Geschichte und verbindet sie mit Nürnbergs Geschichte.

**Historische Fakten:**
- 📅 Erschien: 1828 in Nürnberg
- 🏰 Kaiserburg: Zentrum der Aktion
- 👑 Adlige Familie: Mögliche Vergangenheit
- 🗝️ Viele Rätsel: Ungelöst bis heute

---

## 📧 Support

**Projekt von:** Angelica Gomez  
**Studio:** Unwritten.Studio  
**Email:** angelica.gomez@unwritten.studio

---

## 📄 Lizenz

MIT © 2026 Unwritten Studio

---

**Löse die Rätsel und entdecke Kaspar Hauser! 🎭🔑**
