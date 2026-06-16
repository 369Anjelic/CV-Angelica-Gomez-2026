# Kaspar Hauser Quest | Project Description

## 📌 Projektübersicht

**Kaspar Hauser Quest** ist ein immersives, interaktives Stadträtsel-Spiel, das die historische Geschichte des mysteriösen Kaspar Hauser mit modernem Gameplay kombiniert. Das Spiel nutzt AI-unterstützte Hinweise und historische Fakten, um Spieler durch Nürnberg zu führen.

---

## 🎯 Projektziele

1. **Historisches Lernen** - Kaspar Hauser Geschichte entdecken
2. **Interaktive Rätsel** - 10 Nürnberg-Rätsel lösen
3. **AI-Integration** - Claude Bot für intelligente Hinweise
4. **Immersive Umgebung** - Mittelalterliches Setting
5. **Engagement** - Motivierende Progression & Achievements
6. **Community** - Leaderboards & Score Sharing

---

## 🔑 Key Features

### Spielmodus
- ✅ 3-Phase Quest System (Entdeckung, Rätsel, Finale)
- ✅ 10 Nürnberg-basierte Rätsel
- ✅ AI-Bot mit intelligenten Hinweisen
- ✅ Historische Fakten & Storytelling
- ✅ Progressive Difficulty
- ✅ Achievement System
- ✅ Leaderboards

### Interaktivität
- 🎮 Intuitive Steuerung
- 💬 Natural Language mit Claude AI
- 🗺️ Interaktive Karten
- 📸 Ortsfotos & Visualisierung
- 🔔 Notifications & Reminders
- 💾 Auto-Save System

### Historischer Kontext
- 📚 Authentische Nürnberg-Lokationen
- 🏰 Historische Gebäude & Architektur
- 📖 Kaspar Hauser Biographie
- 🎭 Mittelalterliche Atmosphäre
- 🗺️ Echtzeit-Kartographie
- 📜 Geschichtliche Quellen

---

## 💻 Technisches Design

### Frontend Architecture
```
┌────────────────────────────────────┐
│  React / TypeScript                │
│  - Game UI Components              │
│  - Quest Manager                   │
│  - Interactive Map                 │
├────────────────────────────────────┤
│  State Management                  │
│  - User Progress                   │
│  - Quest Status                    │
│  - Achievements                    │
├────────────────────────────────────┤
│  Styling                           │
│  - CSS Grid / Flexbox              │
│  - Medieval Theme                  │
│  - Dark Mode                       │
└────────────────────────────────────┘
```

### Backend Architecture
```
┌────────────────────────────────────┐
│  Node.js / Express                 │
│  - Game Server                     │
│  - Session Management              │
│  - Score Tracking                  │
├────────────────────────────────────┤
│  AI Integration                    │
│  - Claude API Client               │
│  - Bot Prompts                     │
│  - Context Management              │
├────────────────────────────────────┤
│  Data Layer                        │
│  - User Profiles                   │
│  - Quest Progress                  │
│  - Leaderboards                    │
└────────────────────────────────────┘
```

### Data Flow
```
React Frontend
       ↓
Express API
       ↓
Claude API (for AI responses)
       ↓
Local Database / JSON
       ↓
Response back to UI
```

---

## 🎭 10 Nürnberg Quests

### Quest 1-3: Anfänger
| Quest | Ort | Rätsel | Schwierigkeit |
|-------|-----|--------|----------------|
| 1 | Handwerkerhof | Das goldene Nürnberg | ⭐ |
| 2 | St. Lorenz | Engelssalutation | ⭐ |
| 3 | Nassauer Haus | Geschlechterturm | ⭐⭐ |

### Quest 4-7: Mittelstufe
| Quest | Ort | Rätsel | Schwierigkeit |
|-------|-----|--------|----------------|
| 4 | Schöner Brunnen | Wunschring | ⭐⭐ |
| 5 | Frauenkirche | Männleinlaufen | ⭐⭐ |
| 6 | Altes Rathaus | Eiserne Jungfrau | ⭐⭐⭐ |
| 7 | St. Sebald | Sebaldus | ⭐⭐ |

### Quest 8-10: Fortgeschritten
| Quest | Ort | Rätsel | Schwierigkeit |
|-------|-----|--------|----------------|
| 8 | Kaiserburg | Reichskleinodien | ⭐⭐⭐ |
| 9 | Weinstadel | Lepra | ⭐⭐⭐ |
| 10 | Henkersteg | Folter | ⭐⭐⭐⭐ |

---

## 🤖 AI Bot Integration

### Claude API Usage
```javascript
// Bot Prompt Structure
const systemPrompt = `
Du bist ein mittelalterlicher Gelehrter in Nürnberg.
Du kannst Hinweise zu den 10 Rätseln geben,
aber nicht direkt die Antwort sagen.
Verwende historische Kontexte.
`;
```

### Conversation Flow
1. **User Message** → Spieler fragt nach Hinweis
2. **Context Building** → Sammle bereits gelöste Rätsel
3. **Claude Response** → AI generiert Hinweis
4. **UI Update** → Zeige Antwort in Chat

### Hint Levels
- Level 1: Vager Hinweis
- Level 2: Historischer Kontext
- Level 3: Direkter Hinweis
- Level 4: Fast die Antwort

---

## 📊 Game Mechanics

### Progression System
```
Start Game
   ↓
Phase 1: Explore Nürnberg
   ├─ Visit 10 Locations
   ├─ Learn History
   └─ Unlock Quests
   ↓
Phase 2: Solve Riddles
   ├─ Answer 10 Riddles
   ├─ Use Bot Hints
   ├─ Gain Experience
   └─ Unlock Achievements
   ↓
Phase 3: Final Quest
   ├─ Solve Main Mystery
   ├─ Reach Conclusion
   └─ See Leaderboard
```

### Achievement System
- 🎯 Quest Solver (solve all 10)
- 🚀 Speed Runner (< 30 min)
- 🧠 Scholar (use no hints)
- 🏆 Champion (top 10 leaderboard)
- 📚 Historian (collect all facts)
- 🎭 Storyteller (complete final phase)

### Scoring
```
Base Score = 1000
- Difficulty Multiplier (1x - 4x)
- Time Bonus (faster = more points)
- Hint Penalty (-50 per hint)
- Bonus Achievements (+200 each)
```

---

## 🗺️ Nürnberg Locations

### Historical Accuracy
- ✅ Real Nürnberg Locations
- ✅ Authentic Building Names
- ✅ Verified Historical Facts
- ✅ Period-Appropriate Details
- ✅ Photo References

### Location Details
```
Each Location includes:
- Name & German Name
- Address & Coordinates
- Historical Background
- Architectural Details
- Photo / Illustration
- Associated Riddle
- Historical Figure Link
```

---

## 📊 Performance & Metrics

### Technical Performance
| Metrik | Target | Status |
|--------|--------|--------|
| Page Load | < 2s | ✅ |
| API Response | < 500ms | ✅ |
| AI Response | < 3s | ✅ |
| Memory Usage | < 150MB | ✅ |

### Engagement Metrics
| Metrik | Target |
|--------|--------|
| Avg Session | > 30 min |
| Completion Rate | > 60% |
| Hint Usage | < 3 per quest |
| Repeat Players | > 40% |

---

## 🔐 Security & Privacy

### Data Protection
- ✅ Encrypted User Data
- ✅ GDPR Compliance
- ✅ Privacy Policy
- ✅ Cookie Consent
- ✅ Secure Sessions

### API Security
- ✅ Rate Limiting
- ✅ Input Validation
- ✅ CORS Configuration
- ✅ Error Handling
- ✅ Logging & Monitoring

---

## 🎓 Kaspar Hauser Historical Context

### The Mystery
- 📅 **Found:** 26 May 1828, Nuremberg
- 👤 **Age:** ~17 years old
- 💬 **First Words:** "Ich möchte ein Reiter werden wie mein Vater"
- 🏰 **Location:** Nuremberg Castle Guard House
- 🔍 **Mystery:** Who was he really?

### Theories
1. **Royal Bastard** - Illegitimate child of Crown Prince
2. **Imposter** - Put up to deceive
3. **Feral Child** - Raised in isolation
4. **Victim** - Of political conspiracy

### Historical Sources
- 📚 Anselm Feuerbach: "Kaspar Hauser"
- 📖 Contemporary Accounts (1828-1833)
- 🏛️ Nuremberg Archives
- 📜 Official Documents

---

## 🚀 Deployment & Hosting

### Requirements
- Node.js 16+
- 512MB RAM
- 200MB Disk Space
- ANTHROPIC_API_KEY

### Vercel Deployment
```bash
vercel deploy --prod
```

### Docker Setup
```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
```env
ANTHROPIC_API_KEY=sk-ant-xxxxx
PORT=3000
NODE_ENV=production
DATABASE_URL=optional
```

---

## 📈 Future Roadmap

### Phase 1 (Current) ✅
- ✅ Core Game Mechanics
- ✅ 10 Basic Quests
- ✅ AI Bot Hints
- ✅ Score Tracking

### Phase 2 (Q3 2026)
- 🎮 Multiplayer Mode
- 📱 Mobile App
- 🌐 Global Leaderboards
- 🎓 Educational Materials

### Phase 3 (Q4 2026)
- 🤖 Advanced AI Features
- 🎬 Video Storytelling
- 🗣️ Voice Dialogue
- 🌍 Other Cities & Games

---

## 👥 Team & Credits

**Developer:** Angelica Gomez  
**Studio:** Unwritten.Studio  
**AI:** Anthropic Claude  
**Email:** angelica.gomez@unwritten.studio  
**Status:** Active & Maintained

---

## 📄 Links & Resources

### Project Links
- 🌐 **Live Game:** [https://kaspar-hauser.vercel.app](https://kaspar-hauser.vercel.app)
- 🏆 **Leaderboards:** [https://kaspar-hauser.vercel.app/leaderboards](https://kaspar-hauser.vercel.app/leaderboards)
- 📖 **Story:** [https://kaspar-hauser.vercel.app/story](https://kaspar-hauser.vercel.app/story)

### Historical References
- 🏛️ Nuremberg Castle: https://www.nuernbergburg.de
- 📚 Kaspar Hauser: https://en.wikipedia.org/wiki/Kaspar_Hauser
- 🗺️ Historic Nuremberg: https://www.fuerth.de

### External APIs
- 🤖 Claude API: https://docs.anthropic.com
- 🗺️ OpenStreetMap: https://www.openstreetmap.org
- 📸 Wikimedia: https://commons.wikimedia.org

---

## 📜 Lizenz & Nutzungsbedingungen

© 2026 Angelica Gomez / Unwritten Studio  
MIT License - Frei nutzbar für Bildungszwecke

---

**Version:** 1.0  
**Letztes Update:** 04.06.2026  
**Status:** ✅ Production Ready

🎭 **Entdecke die Rätsel von Kaspar Hauser!** 🔑
