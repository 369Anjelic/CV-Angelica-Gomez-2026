# ✈️ Flight Trainer - 2 Player

**Interaktiver Flight Simulator für Piloten-Training**

---

## 📋 Über das Projekt

Ein realistischer Flight Simulator für das Training von zwei Piloten. Mit fortgeschrittenem 3D-Rendering, Flugphysiken und umfangreichen Trainingsmodi.

**Status:** ✅ Aktiv & Vollständig  
**Version:** v13  
**Letztes Update:** 04.06.2026

---

## 🎯 Features

- ✈️ Realistische Flugphysik (Cessna 172)
- 🌍 World Landmarks & Sehenswürdigkeiten
- 👥 2-Player Multiplayer Mode
- 📊 Vollständiges Instrument Panel
- 🗺️ GPS Navigation
- 🎮 Intuitive Keyboard Controls
- 📈 Flugtraining & Metriken

---

## 🛠️ Technologie-Stack

| Bereich | Technologie |
|---------|------------|
| Frontend | HTML5, Canvas, JavaScript |
| 3D Graphics | Three.js, WebGL |
| Mapping | Cesium, ArcGIS |
| Server | Node.js |

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Server starten
```bash
npm start
```

### Browser öffnen
```
http://localhost:3001
```

---

## 🎮 Controls

| Taste | Funktion |
|-------|----------|
| **W/A/S/D** | Flugrichtung (oben/links/unten/rechts) |
| **Q/E** | Roll (Links/Rechts drehen) |
| **Space** | Höhe halten / Autopilot |
| **Shift** | Schneller fliegen |
| **M** | Landkarte anzeigen/verbergen |
| **N** | Navigationsmarker setzen |
| **L** | Landmark suchen & anfliegen |

---

## 📁 Projektstruktur

```
projekt-fly/
├── index.html           # Hauptspiel
├── server.js            # HTTP Server
├── package.json         # Dependencies
├── README.md            # Diese Datei
└── assets/              # Bilder & Ressourcen
```

---

## 🔧 Konfiguration

### Environment
```bash
NODE_ENV=development
PORT=3001
```

---

## 🚀 Deployment

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker build -t flight-trainer .
docker run -p 3001:3001 flight-trainer
```

---

## 📊 Performance

| Metrik | Target |
|--------|--------|
| Load Time | < 2s |
| Frame Rate | 60 FPS |
| Response Time | < 100ms |

---

## 🔐 Security

- ✅ Input validation
- ✅ CORS configured
- ✅ Rate limiting
- ✅ Error handling

---

## 📧 Support

**Projekt von:** Angelica Gomez  
**Studio:** Unwritten.Studio  
**Email:** angelica.gomez@unwritten.studio

---

## 📄 Lizenz

MIT © 2026 Unwritten Studio

---

**Viel Spaß beim Fliegen! 🛫**
