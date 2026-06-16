# 🤖 Glitch — KI-Lernbegleiter für IHK Prüfung

**Glitch** ist ein KI-powered Learning Bot für Fachinformatiker-Azubis (Anwendungsentwicklung) zur Vorbereitung auf die **IHK-Prüfung**.

## 📚 Was ist Glitch?

Ein persistenter Lernbegleiter, der:
- ✅ **18 Lernfelder** der IHK Prüfung abdeckt (LF1-LF18)
- 🧠 **Intelligente Fragen stellt** statt nur Antworten zu geben
- 📊 **Lernfortschritt speichert** - permanentes Gedächtnis ohne Account
- 🎯 **Fokussiert auf Prüfungsvorbereitung** nicht bloß Stoff-Lernen
- 🚀 **Claude AI powered** - mit aktuellen Sprachmodellen

## 🎓 Für wen?

- Fachinformatiker-Azubis (Fachrichtung: **Anwendungsentwicklung**)
- IHK Prüfungsvorbereitung (schriftlich + praktisch)
- Selbstständiges Lernen zwischen Unterricht/Berufsschule

## 🚀 Schnellstart

### 1. Abhängigkeiten installieren
```bash
npm install
```

### 2. API-Key konfigurieren
Kopiere `.env.example` zu `.env` und füge deinen Anthropic API Key ein:
```bash
cp .env.example .env
```

Dann in `.env` editieren:
```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxx
```

> API Key bekommen: https://console.anthropic.com/keys

### 3. Server starten
```bash
npm start
```

Dann öffne: **http://localhost:3003**

## 🔌 API Endpoints

```javascript
// Chat mit Glitch
POST /chat
{
  "message": "Erkläre mir OOP",
  "words": "kernel.deploy.merge"
}

// Profil abrufen
POST /identify
{
  "words": "kernel.deploy.merge"
}

// Verlauf anschauen
POST /history
{
  "words": "kernel.deploy.merge"
}

// Exportieren
POST /export
{
  "words": "kernel.deploy.merge"
}
```

## 🐛 Problem: API-Key nicht gesetzt

**Fehler:** "Fehler bei der Verbindung zur KI. Versuche es später nochmal."

**Lösung:**
1. Erstelle eine `.env` Datei basierend auf `.env.example`
2. Besorge einen API-Key: https://console.anthropic.com/keys
3. Setze die ANTHROPIC_API_KEY in `.env`
4. Starte den Server neu

**Beispiel `.env`:**
```
ANTHROPIC_API_KEY=sk-ant-d7a1234567890abcdef
PORT=3003
```

---

**Für IHK Fachinformatiker Prüfung (Anwendungsentwicklung)**  
**Powered by Claude AI**
