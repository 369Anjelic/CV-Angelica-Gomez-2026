# 📚 CV Homepage - Projekte Setup & Debugging Guide

## 🎯 Projektübersicht

Alle Projekte sind in der Struktur `/projekte` integriert und können über die CV Homepage auf Port 3002 zugegriffen werden.

---

## 🔧 Port-Zuordnung

| Projekt | Port | Status | Start-Befehl |
|---------|------|--------|--------------|
| **CV Homepage** | 3002 | ✅ Next.js | `npm run dev` |
| **Kaspar Hauser Quest** | 3000 | ✅ Node.js | `cd projekte/1\ kaspar-hauser-quest && npm start` |
| **Flight Trainer** | 3001 | ✅ Node.js | `cd projekte/2\ projekt\ fly && npm start` |
| **Glitch verbessert** | 3003 | ✅ Node.js | `cd projekte/3\ projekt\ Glitch && npm start` |
| **MOI Bot** | 3004 | ✅ Node.js | `cd projekte/4\ Projekt\ MOI && npm start` |
| **Python Coding Übungen** | 3005 | ✅ Node.js | `cd projekte/5\ projekt\ python\ codes && npm start` |
| **Umfrage App** | 3006 | ✅ Node.js | `cd projekte/6\ projekt\ umfrage && npm start` |

---

## 🚀 Quick Start

### Alle Server gleichzeitig starten (Empfohlen):

```bash
# Terminal 1 - CV Homepage
npm run dev

# Terminal 2 - Kaspar Hauser Quest
cd projekte/1\ kaspar-hauser-quest && npm start

# Terminal 3 - Flight Trainer
cd projekte/2\ projekt\ fly && npm start

# Terminal 4 - Glitch
cd projekte/3\ projekt\ Glitch && npm start

# Terminal 5 - MOI Bot
cd projekte/4\ Projekt\ MOI && npm start

# Terminal 6 - Python Coding
cd projekte/5\ projekt\ python\ codes && npm start

# Terminal 7 - Umfrage
cd projekte/6\ projekt\ umfrage && npm start
```

---

## 🔗 Zugriff auf Projekte

### Über CV Homepage (http://localhost:3002)
- Klick auf "🚀 Projekt öffnen" in der Projects-Sektion
- Links sind automatisch auf die localhost-Ports gesetzt

### Direkte Links
- 🎭 **Kaspar Hauser:** http://localhost:3000
- ✈️ **Flight Trainer:** http://localhost:3001
- ⚡ **Glitch:** http://localhost:3003
- 💬 **MOI Bot:** http://localhost:3004
- 🐍 **Python Coding:** http://localhost:3005
- 📊 **Umfrage:** http://localhost:3006

---

## 🐛 Debugging Checklist

### ✅ Vor dem Start überprüfen:

```bash
# 1. Alle Port-Abhängigkeiten vorhanden?
for dir in projekte/*/; do echo "=== $(basename "$dir") ==="; ls "$dir" | grep -E "server.js|index.html|package.json"; done

# 2. Ports sind frei?
netstat -ano | grep -E "300[0-6]"

# 3. Node.js Versionen ok?
node --version

# 4. Dependencies installiert?
npm --version
```

### ❌ Fehlerbehandlung:

**Port bereits in Benutzung:**
```bash
# Windows: Port freigeben
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux: Port freigeben
lsof -i :3000
kill -9 <PID>
```

**Module nicht gefunden:**
```bash
# In jedem Projekt-Verzeichnis:
npm install
```

**Server startet nicht:**
```bash
# Logs überprüfen
npm start 2>&1 | tee server.log

# Oder direkt Node starten:
node server.js
```

---

## 📋 Projekt-Struktur

```
1 CV Homepage (Port 3002)
├── app/
│   ├── components/
│   │   ├── Projects.tsx ← Links zu allen Projekten
│   │   ├── FullCV.tsx
│   │   ├── DeveloperSkills.tsx
│   │   └── ...
│   └── page.tsx
├── package.json
└── projekte/
    ├── 1 kaspar-hauser-quest/ (Port 3000)
    │   ├── server.js
    │   ├── index.html
    │   ├── package.json
    │   └── ...
    ├── 2 projekt fly/ (Port 3001)
    │   ├── server.js
    │   ├── index.html
    │   ├── package.json
    │   └── ...
    ├── 3 projekt Glitch/ (Port 3003)
    │   ├── server.js
    │   ├── index.html
    │   └── ...
    ├── 4 Projekt MOI/ (Port 3004)
    │   ├── server.js
    │   ├── bot.js
    │   ├── package.json
    │   └── ...
    ├── 5 projekt python codes/ (Port 3005)
    │   ├── server.js
    │   ├── index.html
    │   └── ...
    └── 6 projekt umfrage/ (Port 3006)
        ├── server.js
        ├── index.html
        └── ...
```

---

## 🔍 Häufige Probleme & Lösungen

### Problem: "Projekt öffnen" link funktioniert nicht
**Lösung:** 
- Server auf dem angegebenen Port läuft nicht
- Port-Nummer in Projects.tsx überprüfen
- Browser-Konsole für Fehler überprüfen (F12)

### Problem: CORS Fehler
**Lösung:**
- CV Homepage und Projekte sind auf verschiedenen Ports
- CORS ist in den Projekt-Servern normalerweise konfiguriert
- Falls Fehler: `npm install cors` im Projekt-Verzeichnis

### Problem: "Cannot GET /"
**Lösung:**
- server.js Route ist nicht auf "/" konfiguriert
- Überprüfen Sie die server.js Datei
- Standardroute sollte index.html servieren

### Problem: Module `express` nicht vorhanden
**Lösung:**
```bash
cd projekte/<projekt-name>
npm install
npm start
```

---

## ✨ Neue Projekte hinzufügen

Um ein neues Projekt hinzuzufügen:

1. **Ordner erstellen:**
   ```bash
   mkdir "projekte/7 neues projekt"
   ```

2. **Dateien kopieren:**
   ```bash
   cp projekte/2\ projekt\ fly/server.js "projekte/7 neues projekt/"
   cp projekte/2\ projekt\ fly/package.json "projekte/7 neues projekt/"
   ```

3. **Port aktualisieren:** (server.js)
   ```javascript
   const PORT = process.env.PORT || 3007;
   ```

4. **Projects.tsx aktualisieren:**
   ```typescript
   {
     id: 'neues-projekt',
     title: 'Neues Projekt',
     description: 'Beschreibung',
     icon: '🆕',
     category: 'web',
     status: 'completed',
     technologies: ['HTML5', 'JavaScript'],
     link: 'http://localhost:3007/',
   },
   ```

5. **npm install ausführen:**
   ```bash
   cd "projekte/7 neues projekt"
   npm install
   ```

---

## 📞 Support

**Bei Problemen überprüfen:**
- [ ] Alle Ports frei? (netstat)
- [ ] Node.js installiert? (node --version)
- [ ] Dependencies installiert? (npm install)
- [ ] server.js vorhanden? (ls server.js)
- [ ] index.html vorhanden? (ls index.html)
- [ ] Browser-Konsole für Fehler? (F12)

---

**Version:** 1.0  
**Letztes Update:** 2026-06-11  
**Status:** ✅ All Systems Ready

