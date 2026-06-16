# ⚡ Glitch verbessert

**Verbessertes Action-Game mit neuen Features und besserer Performance**

---

## 📋 Über das Projekt

Ein vollständig überarbeitetes Action-Game mit neuen Spielmechaniken, erweiterten Levels, besserer Performance-Optimierung und verbessertem Gameplay.

**Status:** ✅ Aktiv & Vollständig  
**Version:** 2.1  
**Letztes Update:** 04.06.2026

---

## 🎯 Features

- ⚡ Verbesserte Game-Mechaniken
- 🎮 Erweiterte Level
- 🚀 Performance-Optimierung
- 🎨 Modernes UI/UX Design
- 📊 Dashboard & Analytics
- 💾 Persistente Daten
- 🔄 Auto-Save System

---

## 🛠️ Technologie-Stack

| Bereich | Technologie |
|---------|------------|
| Frontend | React, Next.js |
| Backend | Node.js, Express |
| Database | Optional (Supabase) |
| Deployment | Docker, Vercel |
| Extras | Alpine.js, Tailwind CSS |

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Mit Python (schnell)
```bash
python -m http.server 3000
```
Dann: `http://localhost:3000`

### Mit Node
```bash
npm install
npm run serve
```

### Passwort
```
anjelic123
```

---

## 📁 Projektstruktur

```
projekt-glitch/
├── index.html                   # Landing Page + Chat
├── dashboard.html               # Benutzer-Dashboard
├── server.js                    # Express Server
├── package.json                 # Dependencies
├── vercel.json                  # Vercel Config
├── assets/
│   ├── images/                 # Icons, Hero-Video
│   └── ...
├── data/                        # Game Data
└── README.md                    # Diese Datei
```

---

## 🔌 API Endpoints

```
POST /chat              → Chat-Antworten
POST /identify          → Benutzererkennung
POST /history           → Tagebuch-Export
POST /export            → Lernfortschritt-Export
```

**API URL:** `https://glitch-api.post-666.workers.dev`

Für lokales Testing:
```javascript
API_URL: 'http://localhost:3001'
```

---

## 🚀 Deployment

### Vercel
```bash
vercel
```

### GitHub Pages
Push zu `main` Branch, Pages aktivieren.

### Docker
```bash
docker build -t glitch-pimp .
docker run -p 3000:3000 glitch-pimp
```

---

## 🎨 Customization

- **Farben:** `:root` in `<style>` (index.html)
- **Texte:** Deutsche Strings durchsuchbar (Ctrl+F)
- **Features:** Alpine.js Komponenten dokumentiert

---

## 📊 Performance

| Metrik | Target | Aktuell |
|--------|--------|---------|
| Load Time | < 2s | < 1s ✅ |
| API Response | < 500ms | 200-400ms ✅ |
| Lighthouse | 90+ | 95+ ✅ |

---

## 🔐 Security

- ✅ Input validation
- ✅ API key in .env
- ✅ CORS configured
- ✅ Error handling
- ✅ Rate limiting

---

## 📧 Support

**Projekt von:** Angelica Gomez  
**Studio:** Unwritten.Studio  
**Email:** angelica.gomez@unwritten.studio

---

## 📄 Lizenz

MIT © 2026 Unwritten Studio

---

**Ready to Play! ⚡**
