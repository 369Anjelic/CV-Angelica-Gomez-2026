# 🐍 PYTHON CRASH-KURS - KOMPLETTE VERSION

**Status: READY | Zeit: 75 Minuten | Level: Anfänger → Profi-Anfänger**

---

## 📍 ÜBERBLICK

Dieser Kurs bringt dir Python in **75 Minuten** bei:
- ✅ 15 Core-Konzepte erklärt
- ✅ 6 Projekte zum Selbermachen (mit Code + Shell-Output)
- ✅ Mit Diagrammen, Visualisierungen & Beispielen
- ✅ Strukturiert von einfach zu komplex

---

## ⏱️ LEARNING PATH (75 MINUTEN)

```
00:00 - 05:00  → Diese Übersicht lesen
05:00 - 35:00  → THEORIE durchgehen (30 Min)
35:00 - 40:00  → PROJEKT 1 spielen (5 Min)
40:00 - 45:00  → PROJEKT 2 spielen (5 Min)
45:00 - 55:00  → PROJEKT 3 spielen (10 Min)
55:00 - 65:00  → PROJEKT 4 spielen (10 Min)
65:00 - 70:00  → PROJEKT 5 spielen (5 Min)
70:00 - 75:00  → PROJEKT 6 spielen (5 Min)

ERGEBNIS: Du kennst Python! 🎉
```

---

# 📖 THEORIE - 15 KONZEPTE

## 1️⃣ HELLO WORLD - PRINT()

### 💻 Code:
```python
print("Hallo Welt")
```

### 📺 Output:
```
Hallo Welt
```

---

## 2️⃣ VARIABLEN & INPUT

### 💻 Code:
```python
name = input("Wie heißt du? ")
print(f"Hallo {name}!")
```

### 📺 Output (Beispiel):
```
Wie heißt du? Anjel
Hallo Anjel!
```

---

## 3️⃣ DATENTYPEN

```python
# String (Text)
text = "Hallo"

# Integer (Ganze Zahl)
zahl = 42

# Float (Dezimalzahl)
dezimal = 3.14

# Boolean (True/False)
wahr = True
```

---

## 4️⃣ MATHEMATIK & VERGLEICHE

### Mathematik:
```python
10 + 5      # 15
10 - 5      # 5
10 * 5      # 50
10 / 5      # 2.0
10 ** 2     # 100 (Potenz)
10 % 3      # 1 (Rest)
```

### Vergleiche (geben True/False):
```python
10 > 5      # True
10 < 5      # False
10 == 10    # True
10 != 5     # True
```

---

## 5️⃣ IF-ELSE - ENTSCHEIDUNGEN

### 💻 Code:
```python
alter = 20

if alter >= 18:
    print("Du bist erwachsen")
else:
    print("Du bist noch jung")
```

### 📺 Output:
```
Du bist erwachsen
```

**Flow-Diagramm:**
```
alter >= 18?
  ↙        ↖
 JA        NEIN
  ↓         ↓
Erwachsen  Jung
```

---

## 6️⃣ IF-ELIF-ELSE

### 💻 Code:
```python
note = 2

if note == 1:
    print("Sehr gut!")
elif note == 2:
    print("Gut!")
elif note == 3:
    print("Befriedigend")
else:
    print("Schlechte Note")
```

### 📺 Output:
```
Gut!
```

---

## 7️⃣ FOR-SCHLEIFE

### 💻 Code:
```python
for i in range(3):
    print(f"Nummer {i}")
```

### 📺 Output:
```
Nummer 0
Nummer 1
Nummer 2
```

**Über Liste:**
```python
früchte = ["Apfel", "Banane", "Orange"]

for frucht in früchte:
    print(frucht)
```

**Output:**
```
Apfel
Banane
Orange
```

---

## 8️⃣ WHILE-SCHLEIFE

### 💻 Code:
```python
counter = 0
while counter < 3:
    print(f"Zähler: {counter}")
    counter += 1
```

### 📺 Output:
```
Zähler: 0
Zähler: 1
Zähler: 2
```

**While True mit Break:**
```python
while True:
    wahl = input("Wahl (1-3): ")
    if wahl == "3":
        break
    print(f"Du hast {wahl} gewählt")
```

---

## 9️⃣ FUNKTIONEN

### 💻 Code:
```python
def grüße(name):
    print(f"Hallo {name}!")

grüße("Anjel")    # Aufruf
```

### 📺 Output:
```
Hallo Anjel!
```

**Mit Return:**
```python
def addiere(a, b):
    return a + b

result = addiere(10, 5)
print(result)     # 15
```

---

## 🔟 LISTEN

### 💻 Code:
```python
früchte = ["Apfel", "Banane", "Orange"]

print(früchte[0])        # Apfel
print(früchte[-1])       # Orange
print(len(früchte))      # 3

früchte.append("Mango")  # Hinzufügen
früchte.pop(0)           # Entfernen

for frucht in früchte:
    print(frucht)
```

**Speicher-Bild:**
```
früchte = [Apfel, Banane, Orange, Mango]
          [0]    [1]      [2]      [3]
```

---

## 1️⃣1️⃣ DICTIONARIES

### 💻 Code:
```python
person = {
    "name": "Anjel",
    "alter": 25,
    "stadt": "Stuttgart"
}

print(person["name"])      # Anjel
person["beruf"] = "Dev"    # Hinzufügen

for schlüssel, wert in person.items():
    print(f"{schlüssel}: {wert}")
```

**Output:**
```
name: Anjel
alter: 25
stadt: Stuttgart
beruf: Dev
```

---

## 1️⃣2️⃣ TRY-EXCEPT (FEHLERBEHANDLUNG)

### 💻 Code:
```python
try:
    zahl = int(input("Zahl: "))
    print(10 / zahl)
except ValueError:
    print("Das ist keine Zahl!")
except ZeroDivisionError:
    print("Kann nicht durch 0 teilen!")
```

**Szenario 1 (Input: "ABC"):**
```
Zahl: ABC
Das ist keine Zahl!
```

**Szenario 2 (Input: "0"):**
```
Zahl: 0
Kann nicht durch 0 teilen!
```

---

## 1️⃣3️⃣ F-STRINGS

### 💻 Code:
```python
name = "Anjel"
alter = 25

print(f"Ich bin {name}, {alter} Jahre alt")
```

### 📺 Output:
```
Ich bin Anjel, 25 Jahre alt
```

---

## 1️⃣4️⃣ IMPORTS - RANDOM

### 💻 Code:
```python
import random

zahl = random.randint(1, 10)
print(zahl)
```

### 📺 Output (zufällig):
```
7
```

---

## 1️⃣5️⃣ STRING-METHODEN

### 💻 Code:
```python
text = "Hallo Python"

print(text.upper())              # HALLO PYTHON
print(text.lower())              # hallo python
print(text.split())              # ["Hallo", "Python"]
print(text.replace("Python", "Welt"))  # Hallo Welt
print(len(text))                 # 12
```

---

# 🎮 PROJEKTE

## PROJEKT 1: ALTERS-ÜBERPRÜFUNG ⭐

**Lernt:** input, if/else, f-Strings

### 💻 Code:
```python
def check_alter():
    name = input("Dein Name: ")
    alter = int(input("Dein Alter: "))
    
    print(f"--- Analyse für {name} ---")
    
    if alter >= 18:
        print(f"✓ {name}, du darfst Auto fahren!")
    else:
        jahre = 18 - alter
        print(f"✗ Du musst noch {jahre} Jahre warten")

check_alter()
```

### 📺 Output:
```
Dein Name: Anjel
Dein Alter: 25

--- Analyse für Anjel ---
✓ Anjel, du darfst Auto fahren!
```

---

## PROJEKT 2: TASCHENRECHNER ⭐⭐

**Lernt:** try/except, elif, float

### 💻 Code:
```python
def taschenrechner():
    try:
        z1 = float(input("Erste Zahl: "))
        op = input("Operation (+,-,*,/): ")
        z2 = float(input("Zweite Zahl: "))
        
        print(f"{z1} {op} {z2}")
        
        if op == "+":
            print(f"= {z1 + z2}")
        elif op == "-":
            print(f"= {z1 - z2}")
        elif op == "*":
            print(f"= {z1 * z2}")
        elif op == "/":
            if z2 == 0:
                print("❌ Kann nicht durch 0 teilen!")
            else:
                print(f"= {z1 / z2:.2f}")
        else:
            print("❌ Unbekannte Operation!")
    except ValueError:
        print("❌ Bitte Zahlen eingeben!")

taschenrechner()
```

### 📺 Output:
```
Erste Zahl: 10
Operation (+,-,*,/): +
Zweite Zahl: 5
10.0 + 5.0
= 15.0
```

---

## PROJEKT 3: QUIZ ⭐⭐

**Lernt:** Listen, Dicts, enumerate()

### 💻 Code:
```python
def quiz():
    fragen = [
        {"frage": "Was ist Hauptstadt von Deutschland?", "antwort": "berlin"},
        {"frage": "2 + 2 = ?", "antwort": "4"},
        {"frage": "Programmiersprache: python oder java?", "antwort": "python"}
    ]
    
    punkte = 0
    for num, item in enumerate(fragen, 1):
        print(f"\nFrage {num}/{len(fragen)}: {item['frage']}")
        antwort = input("Antwort: ").lower().strip()
        
        if antwort == item["antwort"]:
            print("✓ Richtig!")
            punkte += 1
        else:
            print(f"✗ Falsch! Antwort: {item['antwort']}")
    
    prozent = (punkte / len(fragen)) * 100
    print(f"\n🏆 Score: {punkte}/{len(fragen)} ({prozent:.0f}%)")

quiz()
```

### 📺 Output:
```
Frage 1/3: Was ist Hauptstadt von Deutschland?
Antwort: berlin
✓ Richtig!

Frage 2/3: 2 + 2 = ?
Antwort: 5
✗ Falsch! Antwort: 4

Frage 3/3: Programmiersprache: python oder java?
Antwort: python
✓ Richtig!

🏆 Score: 2/3 (67%)
```

---

## PROJEKT 4: TO-DO LISTE ⭐⭐⭐

**Lernt:** while-Schleifen, append, pop, Menüs

### 💻 Code:
```python
def todo_liste():
    todos = []
    
    while True:
        print("\n1. Task hinzufügen  2. Anzeigen  3. Abhaken  4. Exit")
        wahl = input("Wahl: ")
        
        if wahl == "1":
            task = input("Task: ")
            todos.append(task)
            print(f"✓ {task} hinzugefügt")
        
        elif wahl == "2":
            if todos:
                for i, task in enumerate(todos, 1):
                    print(f"  {i}. {task}")
            else:
                print("  (Leer)")
        
        elif wahl == "3":
            if todos:
                for i, task in enumerate(todos, 1):
                    print(f"  {i}. {task}")
                num = int(input("Nr: ")) - 1
                print(f"✓ {todos.pop(num)} abhaken")
        
        elif wahl == "4":
            break

todo_liste()
```

### 📺 Output:
```
1. Task hinzufügen  2. Anzeigen  3. Abhaken  4. Exit
Wahl: 1
Task: Einkaufen gehen
✓ Einkaufen gehen hinzugefügt

1. Task hinzufügen  2. Anzeigen  3. Abhaken  4. Exit
Wahl: 1
Task: Python lernen
✓ Python lernen hinzugefügt

1. Task hinzufügen  2. Anzeigen  3. Abhaken  4. Exit
Wahl: 2
  1. Einkaufen gehen
  2. Python lernen

1. Task hinzufügen  2. Anzeigen  3. Abhaken  4. Exit
Wahl: 3
  1. Einkaufen gehen
  2. Python lernen
Nr: 1
✓ Einkaufen gehen abhaken
```

---

## PROJEKT 5: WÜRFEL-SPIEL ⭐⭐⭐

**Lernt:** import random, Spielmechanik

### 💻 Code:
```python
import random

def würfelspiel():
    print("🎲 WÜRFEL-SPIEL - Wer erreicht 20 Punkte zuerst?")
    
    du = 0
    computer = 0
    runde = 0
    
    while du < 20 and computer < 20:
        runde += 1
        print(f"\n--- Runde {runde} ---")
        print(f"Punkte: Du={du}, Computer={computer}")
        
        input("Drück Enter zum Würfeln: ")
        dein_wurf = random.randint(1, 6)
        print(f"🎲 Du: {dein_wurf}")
        du += dein_wurf
        
        comp_wurf = random.randint(1, 6)
        print(f"🤖 Computer: {comp_wurf}")
        computer += comp_wurf
    
    print(f"\n{'✓ DU GEWONNEN!' if du >= 20 else '✗ Computer gewonnen!'}")
    print(f"Final: Du={du}, Computer={computer}")

würfelspiel()
```

### 📺 Output:
```
🎲 WÜRFEL-SPIEL - Wer erreicht 20 Punkte zuerst?

--- Runde 1 ---
Punkte: Du=0, Computer=0
Drück Enter zum Würfeln: 
🎲 Du: 4
🤖 Computer: 2

--- Runde 2 ---
Punkte: Du=4, Computer=2
Drück Enter zum Würfeln: 
🎲 Du: 5
🤖 Computer: 6

--- Runde 3 ---
Punkte: Du=9, Computer=8
...
✓ DU GEWONNEN!
Final: Du=21, Computer=18
```

---

## PROJEKT 6: ZAHLEN-RATESPIEL ⭐⭐⭐⭐

**Lernt:** ALLES kombiniert!

### 💻 Code:
```python
import random

def zahlenratespiel():
    geheimzahl = random.randint(1, 100)
    versuche = 0
    max_versuche = 7
    
    print("🎯 ZAHLEN-RATESPIEL: 1-100")
    print(f"Du hast {max_versuche} Versuche!\n")
    
    while versuche < max_versuche:
        try:
            geraten = int(input("Vermutung: "))
            
            if geraten < 1 or geraten > 100:
                print("❌ Zwischen 1-100!")
                continue
            
            versuche += 1
            
            if geraten == geheimzahl:
                print(f"\n🎉 GEWONNEN! Die Zahl war {geheimzahl}")
                print(f"Du brauchtest {versuche} Versuche!")
                break
            elif geraten < geheimzahl:
                print(f"📈 Zu niedrig! ({max_versuche - versuche} übrig)")
            else:
                print(f"📉 Zu hoch! ({max_versuche - versuche} übrig)")
        
        except ValueError:
            print("❌ Zahl eingeben!")
    else:
        print(f"\n😢 Game Over! Zahl war {geheimzahl}")

zahlenratespiel()
```

### 📺 Output:
```
🎯 ZAHLEN-RATESPIEL: 1-100
Du hast 7 Versuche!

Vermutung: 50
📉 Zu hoch! (6 übrig)
Vermutung: 25
📈 Zu niedrig! (5 übrig)
Vermutung: 35
📉 Zu hoch! (4 übrig)
Vermutung: 30
📈 Zu niedrig! (3 übrig)
Vermutung: 32
📈 Zu niedrig! (2 übrig)
Vermutung: 33
🎉 GEWONNEN! Die Zahl war 33
Du brauchtest 6 Versuche!
```

---

# 📚 SPICKZETTEL - TOP 30 BEFEHLE

## INPUT/OUTPUT
```python
print("Text")
name = input("Frage: ")
print(f"Hallo {name}")
```

## DATENTYPEN
```python
x = 42              # Integer
y = 3.14            # Float
text = "Hallo"      # String
flag = True         # Boolean

int("42")           # Konvertierung
str(42)
bool(0)
```

## MATHEMATIK
```python
10 + 5, 10 - 5, 10 * 5, 10 / 5
10 ** 2             # Potenz
10 % 3              # Rest
```

## VERGLEICHE
```python
x > 5, x < 5, x == 5, x != 5
x >= 5, x <= 5
```

## LOGIK
```python
x > 5 and y < 10    # UND
x > 5 or y < 10     # ODER
not x               # NICHT
```

## KONTROLLFLUSS
```python
if x > 5:
    print("Groß")
elif x > 2:
    print("Mittel")
else:
    print("Klein")

for i in range(5):
    print(i)

for item in liste:
    print(item)

for i, item in enumerate(liste, 1):
    print(f"{i}. {item}")

while x < 10:
    x += 1
```

## FUNKTIONEN
```python
def add(a, b):
    return a + b

result = add(10, 5)
```

## LISTEN
```python
liste = [1, 2, 3]
liste[0]            # 1
liste.append(4)
liste.pop(0)
len(liste)
```

## DICTIONARIES
```python
person = {"name": "Anjel", "alter": 25}
person["name"]      # Anjel
person["beruf"] = "Dev"

for key, val in person.items():
    print(f"{key}: {val}")
```

## FEHLERBEHANDLUNG
```python
try:
    x = int(input("Zahl: "))
except ValueError:
    print("Fehler!")
```

## IMPORTS
```python
import random
random.randint(1, 10)
random.choice([1, 2, 3])
```

## STRINGS
```python
text = "Hallo Python"
text.upper()        # HALLO PYTHON
text.lower()        # hallo python
text.split()        # ["Hallo", "Python"]
text.replace("Python", "Welt")
len(text)           # 12
```

---

# ✅ LERNZIELE - KENNST DU ALLES?

Nach diesem Kurs:
- [ ] print() und input()
- [ ] Variablen speichern
- [ ] Datentypen kennen
- [ ] Mathematik & Vergleiche
- [ ] if/elif/else schreiben
- [ ] for-Schleifen schreiben
- [ ] while-Schleifen schreiben
- [ ] Funktionen bauen
- [ ] Listen nutzen
- [ ] Dictionaries nutzen
- [ ] try/except nutzen
- [ ] Strings manipulieren
- [ ] f-Strings verwenden
- [ ] import nutzen
- [ ] 6 Projekte bauen

**Alle JA?** → Du kennst Python! 🎉

---

# 🚀 SO GEHT'S WEITER

## Nächste Schritte:
1. **Eigene kleine Projekte** bauen
2. **Libraries** lernen (pandas, flask, requests)
3. **Andere Sprachen** lernen (JavaScript, Go)
4. **Open Source** beitragen

## Tipps:
- ✅ Code selbst tippen, nicht kopieren
- ✅ Experimentieren & ändern
- ✅ Error-Messages lesen
- ✅ Mit anderen Code teilen
- ✅ Regelmäßig üben

---

# 🎯 HÄUFIGE FEHLER & LÖSUNGEN

## Fehler 1: = statt ==
```python
❌ if x = 5:
✅ if x == 5:
```

## Fehler 2: Doppelpunkt vergessen
```python
❌ if x > 5
✅ if x > 5:
```

## Fehler 3: Falsche Einrückung
```python
❌ if x > 5:
print("groß")

✅ if x > 5:
    print("groß")
```

## Fehler 4: + statt Konvertierung
```python
❌ print("Zahl: " + 42)
✅ print("Zahl: " + str(42))
✅ print(f"Zahl: {42}")
```

## Fehler 5: Index-Verwirrung
```python
liste = ["a", "b", "c"]
✅ liste[0]    # "a" (NICHT liste[1]!)
```

---

# 💡 DEBUGGING TIPPS

```python
# Print überall:
x = input("Zahl: ")
print(f"DEBUG: x = {x}, type = {type(x)}")

# Error Message lesen:
ValueError: invalid literal for int() with base 10: 'ABC'
                                              ↑ Das ist das Problem!

# Google den Error:
"ValueError: invalid literal for int()"

# Code vereinfachen zum Debuggen:
# KOMPLIZIERT:
result = int(input("Zahl: ")) * 2 + 5

# VEREINFACHT:
x = input("Zahl: ")
print(f"x = {x}")
y = int(x)
result = y * 2 + 5
```

---

# 🎓 TEMPLATE ZUM STARTEN

```python
#!/usr/bin/env python3
"""
Beschreibung: Was macht dieses Programm?
Author: Dein Name
Date: 2026-05-10
"""

def main():
    """Hauptfunktion"""
    print("=" * 50)
    print("🎯 MEIN PROGRAMM")
    print("=" * 50)
    
    # Dein Code hier
    name = input("\nDein Name: ")
    print(f"Hallo {name}!")

if __name__ == "__main__":
    main()
    input("\nDrück Enter zum Beenden...")
```

---

# 📊 QUICK REFERENCE

| Konzept | Code | Effekt |
|---------|------|--------|
| Ausgabe | `print("Hi")` | Text zeigen |
| Eingabe | `x = input()` | Frag Nutzer |
| Speichern | `x = 5` | Variable |
| Entscheidung | `if x > 5:` | Bedingung |
| Schleife | `for i in range(5):` | Wiederholen |
| Funktion | `def add(a,b):` | Code reuse |
| Liste | `[1,2,3]` | Sammlung |
| Dict | `{"k":"v"}` | Schlüssel-Wert |
| Fehler | `try/except` | Abfangen |
| Import | `import random` | Modul laden |

---

# 🎁 BONUS

## Code nie kopieren - IMMER selbst tippen!
Das ist das Geheimnis zum Lernen!

## Experimentieren ist OK
Ändere Zahlen, Texte, Bedingungen - sieh was passiert!

## Fehler sind gut
Jeder Fehler ist eine Lernmöglichkeit!

## Mit anderen teilen
Erkläre den Code jemandem = echtes Verständnis!

---

# 🏆 DU SCHAFFST DAS!

Nach diesem Kurs bist du kein Anfänger mehr.
Du weißt wie man programmiert.
Du kannst deine Ideen in Code umsetzen.

**Das ist der Anfang einer großen Reise!** 🚀

---

**Erstellt:** 2026-05-10  
**Status:** READY TO LEARN 🐍✨  
**Time to Master:** 75 Minuten

**VIEL ERFOLG!** 💪
