# ⚡ Power Python Learning Module

**Willkommen im Power Python Modul!** 🚀 Hier schreibst, lernst und testierst du Python live mit KI-Unterstützung.

---

## 🎯 Was ist neu?

### 1. **⚡ Power Python Button** (rechts in der Sidebar)
Klick auf "⚡ Power Python Modul" um den interaktiven Code-Editor zu öffnen.

### 2. **📝 Code-Editor** (Links oben)
- Schreib deinen Python-Code hier
- Syntax-Highlighting mit Dark-Mode
- Copy/Paste Funktion

### 3. **🖥️ Terminal Output** (Links unten)
- Echte Python-Ausführung
- Alle Print-Statements werden angezeigt
- Fehler werden in rot angezeigt
- Output ist live & interaktiv

### 4. **💬 Power Python Mentor** (Rechts)
- Bot hilft dir mit Code-Erklärungen
- Fragt dich, was der Code macht
- Erklärt Fehler und Best Practices
- Motiviert dich zum Lernen

---

## 🚀 So funktioniert's

### **Schritt 1: Code schreiben**
```python
# Beispiel in den Editor schreiben:
name = input("Wie heißt du? ")
print(f"Hallo {name}!")
```

### **Schritt 2: Code ausführen**
Klick auf **"▶ Code Ausführen"** Button

### **Schritt 3: Output sehen**
Der Terminal zeigt sofort:
```
Wie heißt du? [wartet auf Input...]
```

### **Schritt 4: Mit Bot lernen**
Der Bot erklärt automatisch deinen Code:
> "Glitch: Du nutzt f-Strings für String-Interpolation! Das ist Python 3.6+. Gut gemacht!"

---

## 📚 Python Profile (Dein Gedächtnis)

Die Python-Profile aus `brain von glitch/python profie/` sind automatisch in den Bot integriert:

- **PYTHON_CRASH_KURS_KOMPLETT.md** — 75-Minuten Komplett-Kurs
- **PYTHON_SCHRITT_FUER_SCHRITT.md** — Step-by-Step Anleitung
- **PYTHON_PROJEKTE_DETAILS.md** — 6 komplette Projekte zum Lernen

Der Bot **kennt dein Python-Profil** und kann dir gezielt helfen!

---

## 🎓 Übungs-Beispiele

### Beispiel 1: Schleifen
```python
for i in range(5):
    print(f"Zahl: {i}")
```

### Beispiel 2: Listen
```python
zahlen = [1, 2, 3, 4, 5]
quadrate = [x**2 for x in zahlen]
print(quadrate)
```

### Beispiel 3: Funktionen
```python
def greet(name, age):
    return f"{name} ist {age} Jahre alt"

print(greet("Anjel", 25))
```

### Beispiel 4: Dateien lesen
```python
with open("test.txt", "r") as f:
    content = f.read()
    print(content)
```

### Beispiel 5: API Request
```python
import requests
resp = requests.get("https://api.github.com")
print(resp.status_code)
```

---

## 💡 Features

| Feature | Beschreibung |
|---------|-------------|
| **Live Python Execution** | Code wird sofort ausgeführt (subprocess) |
| **Keine Sicherheitsbeschränkungen** | Du kannst ALLES testen - import os, Dateisystem, etc. |
| **Bot-Feedback** | Automatische Erklärungen nach Code-Ausführung |
| **Session-Speicher** | Dein Code wird in der 3-Wort-Session gespeichert |
| **Python-Profil Integration** | Bot kennt alle Crash-Kurs-Inhalte |
| **Terminal Output** | Echtzeit-Output wie in der echten Shell |

---

## 🔧 Technologie

```
Frontend: Alpine.js + HTML5
Backend: Node.js (child_process)
Python: subprocess execution
Bot: Claude API mit Power Python Mentor Mode
Storage: 3-Wort-Session JSON
```

---

## 📝 Verwendete Endpoints

### `/execute-python` (POST)
**Input:**
```json
{
  "code": "print('Hello')",
  "words": "kernel.deploy.merge"
}
```

**Output:**
```json
{
  "output": "Hello\n",
  "error": false,
  "executed": true
}
```

### `/chat` (POST - Power Python Mode)
**Input:**
```json
{
  "message": "Erkläre meinen Code",
  "words": "kernel.deploy.merge"
}
```

**Output:**
```json
{
  "response": "Der Code...",
  "learned_lf": "LF2",
  "learned_topic": "functions"
}
```

---

## 🎯 Nächste Schritte

1. **Starte den Server:**
   ```bash
   npm start
   # oder
   node server.js
   ```

2. **Öffne im Browser:**
   ```
   http://localhost:3003
   ```

3. **Klick auf ⚡ Power Python Modul**

4. **Schreib deinen ersten Code!** 🚀

---

## 🐛 Debugging Tips

- **Code läuft nicht?** → Klick "Clear Output" und versuche es nochmal
- **Fehler unklar?** → Frag den Glitch Bot "Was ist der Fehler?"
- **Nicht genug geladen?** → Der Bot hat Python-Profil geladen, nutze es!

---

## 📞 Support

Wenn was nicht läuft:
1. Überprüfe: `node server.js` läuft
2. Port 3003 ist frei
3. `.env` hat gültigen `ANTHROPIC_API_KEY`
4. Python 3.x ist installiert

---

**Viel Spaß beim Python-Lernen mit deinem persönlichen Mentor!** 🎓⚡

