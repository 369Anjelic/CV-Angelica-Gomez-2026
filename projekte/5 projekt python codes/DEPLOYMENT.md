# 🚀 Python Coding IDE - Deployment Guide

## 🎯 Problem gelöst: HTTP 501 Error

**Der Fehler tritt auf, weil der Python Flask-Server nicht läuft!**

```
ERROR: HTTP 501
Server auf http://127.0.0.1:5000 prüfen
```

---

## ✅ LOKAL STARTEN (Schnellste Lösung)

### Windows: 
Doppelklick auf `START_SERVER.bat`

### macOS / Linux:
```bash
./START_SERVER.sh
```

oder:

```bash
python app.py
```

**Erwartet:**
```
[OK] Server läuft auf Port 5000
 * Running on http://127.0.0.1:5000
```

Dann öffne: `index.html` im Browser

---

## 📦 Production Deployment (Railway + Vercel)

### Schritt 1: Server auf Railway deployieren

```bash
# Railway CLI installieren
npm install -g @railway/cli

# Im Projektordner
cd "projekte/5 projekt python codes"

# Login
railway login

# Projekt initialisieren
railway init
# → Wähle: Python
# → Name: python-executor

# Deployen
railway up

# Public Domain kopieren
railway domains
# Output: https://python-executor-prod.railway.app
```

### Schritt 2: Vercel Environment Variable setzen

```bash
# In der CV-Homepage (Next.js)
cd /path/to/portfolio-cv

vercel env add PYTHON_SERVER_URL
# → Paste die Railway-URL: https://python-executor-prod.railway.app
# → Wähle: Production, Preview

vercel deploy --prod
```

### Schritt 3: index.html aktualisieren (Production)

Ändere in `index.html`:
```javascript
// LOKAL (Zeile ~2103):
const response = await fetch('http://127.0.0.1:5000/run', {

// PRODUCTION:
const baseUrl = process.env.PYTHON_SERVER_URL || 'http://127.0.0.1:5000';
const response = await fetch(`${baseUrl}/run`, {
```

---

## 📁 Dateien

- `app.py` - Flask Server (Code Execution Engine)
- `requirements.txt` - Python Dependencies
- `Procfile` - Railway Deployment Config
- `railway.json` - Railway Service Config
- `START_SERVER.bat` - Windows Quick Start
- `START_SERVER.sh` - Unix Quick Start
- `index.html` - Frontend (Python IDE)
- `runner.py` - Code Executor (Helper)

---

## 🧪 Test

### Lokal:
1. Starte `START_SERVER.bat` oder `python app.py`
2. Öffne `index.html` im Browser
3. Gib Python-Code ein:
   ```python
   print("Hallo Welt!")
   for i in range(1, 4):
       print(f"Nummer {i}")
   ```
4. Drücke "Run" → Output sollte erscheinen ✅

### Production:
Gleich wie lokal, aber auf der Live-Website!

---

## 🔧 Troubleshooting

| Problem | Lösung |
|---------|--------|
| `ERROR: HTTP 501` | Server nicht gestartet → `python app.py` |
| `ModuleNotFoundError: Flask` | Dependencies fehlen → `pip install -r requirements.txt` |
| `Port 5000 already in use` | Anderer Prozess auf Port → `lsof -i :5000` dann `kill -9 <PID>` |
| `Timeout` | Code dauert > 10s → Kürzer machen |

---

## ✨ Status

- [x] Flask Server funktioniert ✅
- [x] Python Code Execution funktioniert ✅
- [x] Terminal UI funktioniert ✅
- [x] Start-Scripts erstellt ✅
- [ ] Production auf Railway deployed
- [ ] Vercel Environment Variable gesetzt

---

## 🎬 Nächste Schritte

1. **Sofort testen:** `python app.py`
2. **Production vorbereiten:** Railway Account
3. **Deployieren:** `railway up`
4. **Vercel verbinden:** `vercel env add PYTHON_SERVER_URL`

**Viel Spaß!** 🐍
