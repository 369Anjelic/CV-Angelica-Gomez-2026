# Python Coding Übungen | Project Description

## 📌 Projektübersicht

**Python Coding Übungen** ist eine umfassende Lernplattform mit 20 strukturierten Python-Programmierübungen. Das Projekt bietet eine interaktive Browser-basierte IDE zum Schreiben, Ausführen und Debuggen von Python-Code.

---

## 🎯 Projektziele

1. **Anfängerfreundlich** - Einstieg in Python-Programmierung
2. **Strukturiert** - 20 Übungen von einfach bis komplex
3. **Praktisch** - Code sofort ausführen und testen
4. **Interaktiv** - Live-Feedback und Fehlerbehandlung
5. **Offline-fähig** - Keine externen APIs nötig
6. **Visuell** - Modern Design mit Syntax-Highlighting

---

## 🔑 Key Features

### Lernplattform
- ✅ 20 strukturierte Programmierübungen
- ✅ Von Anfänger bis Fortgeschritten
- ✅ Schwierigkeitsstufen
- ✅ Detaillierte Erklärungen
- ✅ Beispielcode
- ✅ Lösungen & Tipps

### Editor & IDE
- 💻 Browser-basierter Code-Editor
- 🎨 Syntax-Highlighting (Highlight.js)
- 📝 Line Numbers
- 🔝 Auto-indentation
- 🌙 Dark Theme (VS Code Style)
- ⚡ Real-time Error Detection

### Ausführungsumgebung
- 🚀 One-Click Code-Ausführung
- 🖥️ Live Terminal Output
- ⏱️ Execution Timeout (30s)
- 🐛 Stack Trace & Error Messages
- 📊 Performance Metrics
- 🔄 Clear Button

### Benutzerunterstützung
- 📚 Ausführliche Aufgabenbeschreibung
- 💡 Tipps & Tricks
- 🎯 Schwierigkeitsstufe anzeigen
- ✅ Completion Tracking
- 📈 Progress Dashboard
- 🏆 Achievement Badges

---

## 💻 Technisches Design

### Frontend
```
┌────────────────────────────────────┐
│  HTML5 / CSS3                      │
│  - Editor Panel                    │
│  - Instructions Panel              │
│  - Terminal Panel                  │
├────────────────────────────────────┤
│  JavaScript (Vanilla)              │
│  - Code Editor Interface           │
│  - API Communication               │
│  - UI Interactions                 │
├────────────────────────────────────┤
│  Highlight.js                      │
│  - Syntax Highlighting             │
└────────────────────────────────────┘
```

### Backend
```
┌────────────────────────────────────┐
│  Python HTTP Server                │
│  - debug_serve.py                  │
│  - File Serving                    │
│  - Request Routing                 │
├────────────────────────────────────┤
│  Code Execution Engine             │
│  - runner.py                       │
│  - subprocess Management           │
│  - Timeout Handling                │
│  - Error Capturing                 │
└────────────────────────────────────┘
```

### Data Flow
```
Browser (JavaScript)
       ↓
    fetch() → POST /execute
       ↓
Python Server (debug_serve.py)
       ↓
runner.py (executes code)
       ↓
subprocess (python interpreter)
       ↓
Output (stdout/stderr)
       ↓
JSON Response
       ↓
Browser (Display results)
```

---

## 📚 20 Programmierübungen

### Stufe 1: Anfänger (1-10)

| # | Übung | Konzept | Zeit |
|---|-------|---------|------|
| 1 | **Calculator** | Variables, Basic Math | 10 min |
| 2 | **Mad Libs** | String Input, Formatting | 15 min |
| 3 | **Number Guessing** | Loops, Conditionals | 15 min |
| 4 | **Coin Flip** | Random Module | 10 min |
| 5 | **Rock Paper Scissors** | Game Logic | 20 min |
| 6 | **Temperature Converter** | Functions, Math | 15 min |
| 7 | **Todo List** | Lists, Basic CRUD | 20 min |
| 8 | **Simple Quiz** | Lists, Loops | 20 min |
| 9 | **Password Generator** | Strings, Random | 15 min |
| 10 | **BMI Calculator** | Functions, User Input | 15 min |

### Stufe 2: Mittelstufe (11-15)

| # | Übung | Konzept | Zeit |
|---|-------|---------|------|
| 11 | **Dice Roller** | OOP Basics, Classes | 20 min |
| 12 | **Random Quote** | Lists, File I/O | 20 min |
| 13 | **Text Analyzer** | String Methods, Loops | 25 min |
| 14 | **Word Counter** | Dictionaries, Sorting | 25 min |
| 15 | **Age Calculator** | Date/Time Module | 20 min |

### Stufe 3: Fortgeschritten (16-20)

| # | Übung | Konzept | Zeit |
|---|-------|---------|------|
| 16 | **Fibonacci** | Recursion | 20 min |
| 17 | **Palindrome Checker** | String Manipulation | 20 min |
| 18 | **Hangman** | Complex Game Logic | 30 min |
| 19 | **Pyramid Patterns** | Nested Loops | 25 min |
| 20 | **Simple Stopwatch** | Time Tracking | 30 min |

---

## 🎓 Lernpfad

### Anfänger-Route (0-4 Stunden)
```
Woche 1:
├─ Übung 1-5: Grundlagen (Variables, Loops, Conditionals)
├─ Übung 6-10: Funktionen & Module
└─ Review & Hausaufgaben

Woche 2:
├─ Übung 11-15: Mittelstufe (OOP, Dictionaries)
├─ Mini-Projekt: Dein eigenes Spiel
└─ Testing & Debugging
```

### Fortgeschritten-Route (4-8 Stunden)
```
Woche 3:
├─ Übung 16-20: Algorithmen & komplexe Logik
├─ Performance-Optimierung
└─ Best Practices

Woche 4:
├─ Dein erstes größeres Projekt
├─ Code Review
└─ Deployment (CLI Tool bauen)
```

---

## 🔑 Python-Konzepte

### Fundamentals
- ✅ Variables & Data Types
- ✅ Operators & Expressions
- ✅ Conditionals (if/else)
- ✅ Loops (for/while)

### Intermediate
- ✅ Functions & Return Values
- ✅ Lists & List Methods
- ✅ Dictionaries & Key-Value Pairs
- ✅ String Methods & Formatting

### Advanced
- ✅ Object-Oriented Programming (OOP)
- ✅ Classes & Objects
- ✅ Modules & Imports
- ✅ Exception Handling
- ✅ Recursion
- ✅ Lambda Functions
- ✅ List Comprehensions

### Libraries
- ✅ `random` - Zufallszahlen
- ✅ `datetime` - Datums-/Zeitfunktionen
- ✅ `os` - Datei-Operationen
- ✅ `json` - JSON Handling
- ✅ `math` - Mathematische Funktionen

---

## 💻 API Reference

### Code Execution Endpoint

**Request:**
```javascript
POST /execute
Content-Type: application/json

{
  "code": "print('Hello, World!')",
  "timeout": 30
}
```

**Response:**
```json
{
  "success": true,
  "output": "Hello, World!\n",
  "execution_time": 0.023,
  "status": "completed"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "NameError: name 'x' is not defined",
  "error_type": "NameError",
  "line": 2,
  "output": ""
}
```

---

## ⚙️ Konfiguration

### Server (debug_serve.py)
```python
# Server-Port
PORT = 5000

# Execution Timeout
DEFAULT_TIMEOUT = 30  # Sekunden

# Allowed Modules (Whitelist)
ALLOWED_MODULES = [
    'os', 'sys', 'math', 'random',
    'datetime', 'json', 'collections'
]
```

### Environment
```
PYTHON_VERSION=3.8+
HOST=127.0.0.1
PORT=5000
DEBUG=True (Development only)
```

---

## 🔐 Security & Isolation

### Code Execution
- ✅ Timeout (30 Sekunden)
- ✅ Subprocess Isolation
- ✅ Resource Limits
- ✅ Output Buffering
- ✅ Error Containment

### Safety Measures
- ✅ No External Network Access
- ✅ No File System Access (whitelist)
- ✅ Input Validation
- ✅ Safe Module Whitelist
- ✅ Memory Limits

---

## 📊 Performance Metrics

| Metrik | Target | Status |
|--------|--------|--------|
| Page Load | < 1s | ✅ |
| Code Execution | < 30s | ✅ |
| UI Response | < 100ms | ✅ |
| Memory Usage | < 100MB | ✅ |
| Concurrent Users | 50+ | ✅ |

---

## 🎯 Schwierigkeitsstufen

### 1️⃣ Anfänger (Grün)
- Einfache Konzepte
- Kurze Code-Snippets
- Step-by-Step Anleitung
- ~10-15 Minuten

### 2️⃣ Mittelstufe (Gelb)
- Mehrere Konzepte kombiniert
- Längere Code-Abschnitte
- Selbstständiges Denken
- ~20-25 Minuten

### 3️⃣ Fortgeschritten (Rot)
- Komplexe Probleme
- Mehrere Lösungsansätze
- Optimierungsdenken
- ~25-30 Minuten

---

## 🚀 Deployment & Hosting

### Lokal
```bash
python debug_serve.py
# → http://127.0.0.1:5000
```

### Vercel / Cloud
```bash
# Requires Python runtime
vercel deploy
```

### Docker
```dockerfile
FROM python:3.10
WORKDIR /app
COPY . .
EXPOSE 5000
CMD ["python", "debug_serve.py"]
```

---

## 📈 Future Enhancements

### Phase 2 (Q3 2026)
- 🎮 Interactive Challenges
- 📊 Progress Tracking
- 🏆 Leaderboards
- 💾 Solution Sharing

### Phase 3 (Q4 2026)
- 🤖 AI Code Review
- 🎓 Video Tutorials
- 📚 Textbook Integration
- 🌍 Multi-language Support

---

## 👥 Team & Support

**Entwickler:** Angelica Gomez  
**Studio:** Unwritten.Studio  
**Email:** angelica.gomez@unwritten.studio  
**Status:** Active & Maintained

---

## 📄 Links & Ressourcen

### Dokumentation
- [README.md](./README.md) - Quick Start
- [Fehlerbehandlung](./docs/troubleshooting.md) - Häufige Probleme

### Externe Links
- 🐍 Python Docs: https://docs.python.org
- 📚 Real Python: https://realpython.com
- 🎓 Codecademy: https://codecademy.com

---

## 📜 Lizenz & Nutzungsbedingungen

© 2026 Angelica Gomez / Unwritten Studio  
MIT License - Frei nutzbar für Bildungszwecke

---

**Version:** 2.0  
**Letztes Update:** 04.06.2026  
**Status:** ✅ Production Ready
