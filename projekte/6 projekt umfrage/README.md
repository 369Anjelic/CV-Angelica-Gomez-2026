# 📊 Umfrage App

**Interaktive Umfrage-Anwendung mit Datenerfassung und Auswertung**

---

## 📋 Über das Projekt

Eine umfangreiche Umfrage-Anwendung für die Erfassung, Verwaltung und Auswertung von Umfragedaten mit benutzerfreundlicher Oberfläche. Perfekt für Marktforschung, Kundenfeedback und Datenanalyse.

**Status:** ✅ Aktiv & Vollständig  
**Letztes Update:** 04.06.2026

---

## 🎯 Features

- 📝 Flexible Umfrage-Erstellung
- 📊 Echtzeit-Auswertung
- 📈 Datenvisualisierung
- 💾 Persistente Speicherung
- 📱 Responsive Design
- 🎨 Modernes UI
- 📥 Daten-Export (CSV, JSON)
- 📧 Email-Versand
- 📍 Geolocation Support

---

## 🛠️ Technologie-Stack

| Bereich | Technologie |
|---------|------------|
| Frontend | HTML5, JavaScript, CSS |
| Interaktion | Vanilla JavaScript |
| Daten | JSON, LocalStorage |
| Visualisierung | Chart.js |
| Deployment | Vercel |

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

Die App läuft dann auf `http://localhost:3000`

---

## 📁 Projektstruktur

```
projekt-umfrage/
├── index.html               # Umfrage Interface
├── public/                  # Static Assets
│   ├── styles.css
│   ├── scripts.js
│   └── ...
├── package.json             # Dependencies
├── vercel.json              # Vercel Config
├── README.md                # Diese Datei
└── data/                    # Umfrage-Daten
```

---

## 📊 Umfrage-Typen

- ✅ Multiple Choice
- ✅ Single Select
- ✅ Text Input
- ✅ Rating Scale
- ✅ Ranking
- ✅ Matrix
- ✅ Open Questions

---

## 💾 Datenformate

### JSON Export
```json
{
  "umfrage_id": "123",
  "titel": "Kundenzufriedenheit",
  "erstellt": "2026-06-04",
  "antworten": [
    {
      "user_id": "abc",
      "timestamp": "2026-06-04T10:30:00Z",
      "responses": {...}
    }
  ]
}
```

### CSV Export
```
Frage | Antwort | Benutzer | Datum
------|---------|----------|------
...
```

---

## 🎨 Customization

### Farben
```css
--primary: #3987b8;
--secondary: #3e4447;
--background: #f4f5f5;
```

### Fonts
- Plus Jakarta Sans
- Weights: 300, 400, 600, 700

---

## 🚀 Deployment

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker build -t umfrage-app .
docker run -p 3000:3000 umfrage-app
```

---

## 📊 Performance

| Metrik | Target |
|--------|--------|
| Load Time | < 2s |
| Form Submit | < 500ms |
| Export | < 3s |

---

## 🔐 Security

- ✅ Input validation
- ✅ CSRF protection
- ✅ Rate limiting
- ✅ Data encryption
- ✅ Privacy compliance (DSGVO)

---

## 📧 Support

**Projekt von:** Angelica Gomez  
**Studio:** Unwritten.Studio  
**Email:** angelica.gomez@unwritten.studio

---

## 📄 Lizenz

MIT © 2026 Unwritten Studio

---

**Umfragen erstellen & analysieren! 📊**
