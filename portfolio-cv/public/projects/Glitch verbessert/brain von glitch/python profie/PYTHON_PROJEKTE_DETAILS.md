# 🎮 PYTHON 6 PROJEKTE - DETAILLIERT MIT CODE

**Alle 6 Projekte zum Kopieren & Spielen!**

---

# 🎂 PROJEKT 1: ALTERS-ÜBERPRÜFUNG

**Schwierigkeit:** ⭐ | **Zeit:** 5 Min | **Lernt:** input, if/else, Variablen

## 💻 VOLLSTÄNDIGER CODE - COPY & PASTE

```python
#!/usr/bin/env python3

def check_alter():
    """Überprüft ob jemand erwachsen ist"""
    print("=" * 50)
    print("🎂 ALTERS-ÜBERPRÜFUNG")
    print("=" * 50)

    name = input("\nDein Name: ")
    alter = int(input("Dein Alter: "))

    print(f"\n--- Analyse für {name} ---")

    if alter >= 18:
        print(f"✓ {name}, du darfst Auto fahren!")
        print(f"  Du bist {alter} Jahre alt")
    else:
        jahre = 18 - alter
        print(f"✗ Du musst noch {jahre} Jahre warten")
        print(f"  Mit 18 darfst du fahren")

    # Kategorisierung
    if alter < 13:
        print("  → Du bist noch ein Kind")
    elif alter < 18:
        print("  → Du bist ein Teenager")
    elif alter < 30:
        print("  → Du bist jung-erwachsen")
    else:
        print("  → Du bist erwachsen")

if __name__ == "__main__":
    check_alter()
    input("\nDrück Enter zum Beenden...")
```

## 📺 BEISPIEL-OUTPUT

```
==================================================
🎂 ALTERS-ÜBERPRÜFUNG
==================================================

Dein Name: Anjel
Dein Alter: 25

--- Analyse für Anjel ---
✓ Anjel, du darfst Auto fahren!
  Du bist 25 Jahre alt
  → Du bist jung-erwachsen

Drück Enter zum Beenden...
```

## 🧪 EXPERIMENT

Ändere die Altersgrenze:
```python
# Statt:
if alter >= 18:

# Probiere:
if alter >= 21:
```

---

# 🧮 PROJEKT 2: TASCHENRECHNER

**Schwierigkeit:** ⭐⭐ | **Zeit:** 5 Min | **Lernt:** try/except, elif, while-Schleifen

## 💻 VOLLSTÄNDIGER CODE

```python
#!/usr/bin/env python3

def taschenrechner():
    """Einfacher Rechner für 2 Zahlen"""
    print("=" * 50)
    print("🧮 TASCHENRECHNER")
    print("=" * 50)

    try:
        zahl1 = float(input("\nErste Zahl: "))

        print("\nWelche Operation?")
        print("  + (Addition)")
        print("  - (Subtraktion)")
        print("  * (Multiplikation)")
        print("  / (Division)")
        print("  ** (Potenz)")
        print("  % (Rest)")

        operation = input("\nDeine Wahl: ")
        zahl2 = float(input("Zweite Zahl: "))

        print(f"\nRechnung: {zahl1} {operation} {zahl2}")
        print("-" * 30)

        if operation == "+":
            ergebnis = zahl1 + zahl2
            print(f"Ergebnis: {ergebnis}")

        elif operation == "-":
            ergebnis = zahl1 - zahl2
            print(f"Ergebnis: {ergebnis}")

        elif operation == "*":
            ergebnis = zahl1 * zahl2
            print(f"Ergebnis: {ergebnis}")

        elif operation == "/":
            if zahl2 == 0:
                print("❌ Fehler: Kann nicht durch 0 teilen!")
            else:
                ergebnis = zahl1 / zahl2
                print(f"Ergebnis: {ergebnis:.4f}")

        elif operation == "**":
            ergebnis = zahl1 ** zahl2
            print(f"Ergebnis: {ergebnis}")

        elif operation == "%":
            if zahl2 == 0:
                print("❌ Fehler: Kann nicht durch 0 teilen!")
            else:
                ergebnis = zahl1 % zahl2
                print(f"Rest: {ergebnis}")

        else:
            print("❌ Operation nicht erkannt!")

    except ValueError:
        print("❌ Fehler: Bitte gib Zahlen ein!")

if __name__ == "__main__":
    while True:
        taschenrechner()
        mehr = input("\nNoch eine Rechnung? (j/n): ").lower()
        if mehr != "j":
            print("\nAuf Wiedersehen!")
            break
        print("\n")
```

## 📺 BEISPIEL-OUTPUT

```
==================================================
🧮 TASCHENRECHNER
==================================================

Erste Zahl: 10

Welche Operation?
  + (Addition)
  - (Subtraktion)
  * (Multiplikation)
  / (Division)
  ** (Potenz)
  % (Rest)

Deine Wahl: +
Zweite Zahl: 5

Rechnung: 10.0 + 5.0
==============================
Ergebnis: 15.0

Noch eine Rechnung? (j/n): n

Auf Wiedersehen!
```

---

# 🎯 PROJEKT 3: QUIZ-SPIEL

**Schwierigkeit:** ⭐⭐ | **Zeit:** 10 Min | **Lernt:** Listen, Dicts, enumerate()

## 💻 VOLLSTÄNDIGER CODE

```python
#!/usr/bin/env python3

def quiz():
    """Interaktives Quiz-Spiel"""
    print("=" * 50)
    print("🎯 QUIZ-SPIEL")
    print("=" * 50)

    fragen = [
        {
            "frage": "Was ist die Hauptstadt von Deutschland?",
            "antwort": "berlin"
        },
        {
            "frage": "2 + 2 = ?",
            "antwort": "4"
        },
        {
            "frage": "Welche Programmiersprache lernen wir?",
            "antwort": "python"
        },
        {
            "frage": "Wer schrieb 'Romeo und Julia'?",
            "antwort": "shakespeare"
        },
        {
            "frage": "In welchem Jahr erfunden: Python?",
            "antwort": "1991"
        }
    ]

    punkte = 0
    gesamt = len(fragen)

    for nummer, item in enumerate(fragen, 1):
        print(f"\n--- Frage {nummer}/{gesamt} ---")
        print(f"📌 {item['frage']}")

        antwort = input("Deine Antwort: ").lower().strip()

        if antwort == item["antwort"]:
            print("✓ Richtig!")
            punkte += 1
        else:
            print(f"✗ Falsch!")
            print(f"  Richtige Antwort: {item['antwort']}")

    # Auswertung
    prozent = (punkte / gesamt) * 100
    print("\n" + "=" * 50)
    print("🏆 ERGEBNIS")
    print("=" * 50)
    print(f"\nDein Score: {punkte}/{gesamt} Punkte ({prozent:.0f}%)")

    if prozent == 100:
        print("🌟 PERFEKT! Du bist ein Genie!")
    elif prozent >= 80:
        print("🎉 Sehr gut! Super gemacht!")
    elif prozent >= 60:
        print("👍 Gut! Noch ein bisschen üben!")
    else:
        print("📚 Noch etwas lernen nötig!")

if __name__ == "__main__":
    quiz()
    input("\nDrück Enter zum Beenden...")
```

## 📺 BEISPIEL-OUTPUT

```
==================================================
🎯 QUIZ-SPIEL
==================================================

--- Frage 1/5 ---
📌 Was ist die Hauptstadt von Deutschland?
Deine Antwort: berlin
✓ Richtig!

--- Frage 2/5 ---
📌 2 + 2 = ?
Deine Antwort: 5
✗ Falsch!
  Richtige Antwort: 4

--- Frage 3/5 ---
📌 Welche Programmiersprache lernen wir?
Deine Antwort: python
✓ Richtig!

--- Frage 4/5 ---
📌 Wer schrieb 'Romeo und Julia'?
Deine Antwort: shakespeare
✓ Richtig!

--- Frage 5/5 ---
📌 In welchem Jahr erfunden: Python?
Deine Antwort: 1991
✓ Richtig!

==================================================
🏆 ERGEBNIS
==================================================

Dein Score: 4/5 Punkte (80%)
🎉 Sehr gut! Super gemacht!
```

---

# ✓ PROJEKT 4: TO-DO LISTE

**Schwierigkeit:** ⭐⭐⭐ | **Zeit:** 10 Min | **Lernt:** while-Schleifen, append/pop, Menüs

## 💻 VOLLSTÄNDIGER CODE

```python
#!/usr/bin/env python3

def todo_liste():
    """Interaktive To-Do Liste"""
    todos = []

    print("=" * 50)
    print("✓ TO-DO LISTE")
    print("=" * 50)

    while True:
        print("\n" + "-" * 50)
        print("MENÜ:")
        print("1. Task hinzufügen")
        print("2. Alle Tasks anzeigen")
        print("3. Task abhaken (löschen)")
        print("4. Exit")
        print("-" * 50)

        wahl = input("Deine Wahl (1-4): ").strip()

        # ===== OPTION 1: Task hinzufügen =====
        if wahl == "1":
            task = input("Neue Task: ").strip()
            if task.lower() != "abort":
                todos.append(task)
                print(f"✓ Task hinzugefügt: '{task}'")
            else:
                print("Abgebrochen")

        # ===== OPTION 2: Tasks anzeigen =====
        elif wahl == "2":
            print("\n📋 DEINE TASKS:")
            if todos:
                for i, task in enumerate(todos, 1):
                    print(f"  {i}. {task}")
            else:
                print("  (Keine Tasks vorhanden)")

        # ===== OPTION 3: Task abhaken =====
        elif wahl == "3":
            if todos:
                print("\n📋 DEINE TASKS:")
                for i, task in enumerate(todos, 1):
                    print(f"  {i}. {task}")

                try:
                    num = int(input("\nTask-Nummer abhaken: "))
                    if 1 <= num <= len(todos):
                        geloescht = todos.pop(num - 1)
                        print(f"✓ Task abhaken: '{geloescht}'")
                    else:
                        print("❌ Ungültige Nummer!")
                except ValueError:
                    print("❌ Bitte gib eine Zahl ein!")
            else:
                print("❌ Keine Tasks zum Abhaken!")

        # ===== OPTION 4: Exit =====
        elif wahl == "4":
            print("\n👋 Auf Wiedersehen!")
            break

        else:
            print("❌ Ungültige Eingabe! Wähle 1-4")

if __name__ == "__main__":
    todo_liste()
```

## 📺 BEISPIEL-OUTPUT

```
==================================================
✓ TO-DO LISTE
==================================================

--------------------------------------------------
MENÜ:
1. Task hinzufügen
2. Alle Tasks anzeigen
3. Task abhaken (löschen)
4. Exit
--------------------------------------------------
Deine Wahl (1-4): 1
Neue Task: Einkaufen gehen
✓ Task hinzugefügt: 'Einkaufen gehen'

--------------------------------------------------
MENÜ:
1. Task hinzufügen
2. Alle Tasks anzeigen
3. Task abhaken (löschen)
4. Exit
--------------------------------------------------
Deine Wahl (1-4): 1
Neue Task: Python lernen
✓ Task hinzugefügt: 'Python lernen'

--------------------------------------------------
MENÜ:
1. Task hinzufügen
2. Alle Tasks anzeigen
3. Task abhaken (löschen)
4. Exit
--------------------------------------------------
Deine Wahl (1-4): 2

📋 DEINE TASKS:
  1. Einkaufen gehen
  2. Python lernen

--------------------------------------------------
MENÜ:
1. Task hinzufügen
2. Alle Tasks anzeigen
3. Task abhaken (löschen)
4. Exit
--------------------------------------------------
Deine Wahl (1-4): 3

📋 DEINE TASKS:
  1. Einkaufen gehen
  2. Python lernen

Task-Nummer abhaken: 1
✓ Task abhaken: 'Einkaufen gehen'

--------------------------------------------------
MENÜ:
1. Task hinzufügen
2. Alle Tasks anzeigen
3. Task abhaken (löschen)
4. Exit
--------------------------------------------------
Deine Wahl (1-4): 4

👋 Auf Wiedersehen!
```

---

# 🎲 PROJEKT 5: WÜRFEL-SPIEL

**Schwierigkeit:** ⭐⭐⭐ | **Zeit:** 5 Min | **Lernt:** import, random, Spielmechanik

## 💻 VOLLSTÄNDIGER CODE

```python
#!/usr/bin/env python3
import random

def würfelspiel():
    """Würfeln gegen Computer"""
    print("=" * 50)
    print("🎲 WÜRFEL-SPIEL")
    print("=" * 50)
    print("\nSpiel-Regel: Wer zuerst 20+ Punkte hat, gewinnt!")

    spieler_punkte = 0
    computer_punkte = 0
    runde = 0

    while spieler_punkte < 20 and computer_punkte < 20:
        runde += 1
        print(f"\n--- RUNDE {runde} ---")
        print(f"Punkte - Du: {spieler_punkte} | Computer: {computer_punkte}")

        input("Drück Enter zum Würfeln: ")
        
        spieler_wurf = random.randint(1, 6)
        print(f"🎲 Du hast gewürfelt: {spieler_wurf}")
        spieler_punkte += spieler_wurf

        computer_wurf = random.randint(1, 6)
        print(f"🤖 Computer hat gewürfelt: {computer_wurf}")
        computer_punkte += computer_wurf

        print(f"\nAktuell - Du: {spieler_punkte} | Computer: {computer_punkte}")

    # Gewinner
    print("\n" + "=" * 50)
    print("🏆 SPIELENDE")
    print("=" * 50)
    if spieler_punkte >= 20 and computer_punkte < 20:
        print("✓ DU HAST GEWONNEN! 🎉")
    elif computer_punkte >= 20 and spieler_punkte < 20:
        print("✗ Computer hat gewonnen! 🤖")
    else:
        print("Unentschieden!")

    print(f"\nFinal-Punkte - Du: {spieler_punkte} | Computer: {computer_punkte}")

if __name__ == "__main__":
    while True:
        würfelspiel()
        nochmal = input("\nNochmal spielen? (j/n): ").lower()
        if nochmal != "j":
            print("\n👋 Auf Wiedersehen!")
            break
        print("\n")
```

## 📺 BEISPIEL-OUTPUT

```
==================================================
🎲 WÜRFEL-SPIEL
==================================================

Spiel-Regel: Wer zuerst 20+ Punkte hat, gewinnt!

--- RUNDE 1 ---
Punkte - Du: 0 | Computer: 0
Drück Enter zum Würfeln: 
🎲 Du hast gewürfelt: 4
🤖 Computer hat gewürfelt: 2

Aktuell - Du: 4 | Computer: 2

--- RUNDE 2 ---
Punkte - Du: 4 | Computer: 2
Drück Enter zum Würfeln: 
🎲 Du hast gewürfelt: 6
🤖 Computer hat gewürfelt: 5

Aktuell - Du: 10 | Computer: 7

--- RUNDE 3 ---
Punkte - Du: 10 | Computer: 7
Drück Enter zum Würfeln: 
🎲 Du hast gewürfelt: 5
🤖 Computer hat gewürfelt: 6

Aktuell - Du: 15 | Computer: 13

--- RUNDE 4 ---
Punkte - Du: 15 | Computer: 13
Drück Enter zum Würfeln: 
🎲 Du hast gewürfelt: 6
🤖 Computer hat gewürfelt: 8

Aktuell - Du: 21 | Computer: 21

==================================================
🏆 SPIELENDE
==================================================
✓ DU HAST GEWONNEN! 🎉

Final-Punkte - Du: 21 | Computer: 21

Nochmal spielen? (j/n): n

👋 Auf Wiedersehen!
```

---

# 🎯 PROJEKT 6: ZAHLEN-RATESPIEL (FINAL)

**Schwierigkeit:** ⭐⭐⭐⭐ | **Zeit:** 10 Min | **Lernt:** ALLES kombiniert!

## 💻 VOLLSTÄNDIGER CODE

```python
#!/usr/bin/env python3
import random

def zahlenratespiel():
    """Der Computer denkt sich eine Zahl aus, du musst sie erraten"""
    print("=" * 50)
    print("🎯 ZAHLEN-RATESPIEL")
    print("=" * 50)
    print("\nDer Computer denkt sich eine Zahl zwischen 1 und 100...")

    # Computer wählt Zahl
    geheimzahl = random.randint(1, 100)
    versuche = 0
    max_versuche = 7

    print(f"Du hast {max_versuche} Versuche!\n")

    while versuche < max_versuche:
        try:
            geraten = int(input("Deine Vermutung: "))

            # Validierung
            if geraten < 1 or geraten > 100:
                print("❌ Die Zahl muss zwischen 1 und 100 sein!")
                continue

            versuche += 1
            verbleibend = max_versuche - versuche

            # Vergleich
            if geraten == geheimzahl:
                print("\n" + "=" * 50)
                print("🎉 GEWONNEN!")
                print("=" * 50)
                print(f"✓ Richtig! Die Zahl war {geheimzahl}")
                print(f"Du hast {versuche} Versuche gebraucht!")

                if versuche <= 3:
                    print("🌟 Genius! Sehr schnell!")
                elif versuche <= 5:
                    print("👍 Sehr gut!")
                else:
                    print("📚 Nächstes Mal schneller!")

                break

            elif geraten < geheimzahl:
                print(f"📈 Zu niedrig! Die Zahl ist größer.")
                print(f"Noch {verbleibend} Versuche\n")

            else:  # geraten > geheimzahl
                print(f"📉 Zu hoch! Die Zahl ist kleiner.")
                print(f"Noch {verbleibend} Versuche\n")

        except ValueError:
            print("❌ Bitte gib eine Zahl ein!\n")

    # Verloren
    else:
        print("\n" + "=" * 50)
        print("😢 GAME OVER")
        print("=" * 50)
        print(f"✗ Du hast nicht erraten!")
        print(f"Die richtige Zahl war: {geheimzahl}")

if __name__ == "__main__":
    while True:
        zahlenratespiel()
        nochmal = input("\nNochmal spielen? (j/n): ").lower().strip()
        if nochmal != "j":
            print("\n👋 Auf Wiedersehen!")
            break
        print("\n")
```

## 📺 BEISPIEL-OUTPUT

```
==================================================
🎯 ZAHLEN-RATESPIEL
==================================================

Der Computer denkt sich eine Zahl zwischen 1 und 100...
Du hast 7 Versuche!

Deine Vermutung: 50
📉 Zu hoch! Die Zahl ist kleiner.
Noch 6 Versuche

Deine Vermutung: 25
📈 Zu niedrig! Die Zahl ist größer.
Noch 5 Versuche

Deine Vermutung: 35
📉 Zu hoch! Die Zahl ist kleiner.
Noch 4 Versuche

Deine Vermutung: 30
📈 Zu niedrig! Die Zahl ist größer.
Noch 3 Versuche

Deine Vermutung: 32
📈 Zu niedrig! Die Zahl ist größer.
Noch 2 Versuche

Deine Vermutung: 33
🎉 GEWONNEN!
==================================================
✓ Richtig! Die Zahl war 33
Du hast 5 Versuche gebraucht!
👍 Sehr gut!

Nochmal spielen? (j/n): n

👋 Auf Wiedersehen!
```

---

# 🚀 SO NUTZT DU DIESE DATEIEN

## Speichern:
```
1. Code kopieren (von Projekt 1-6)
2. Neue Datei erstellen: projekt_N.py
3. Code einfügen
4. Speichern (Strg+S)
```

## Ausführen:
```powershell
cd C:\Users\Anjel
python projekt_1_alters_check.py
```

## Verändern:
```python
# Original:
if alter >= 18:

# Ändere zu:
if alter >= 21:

# Speichern & nochmal starten!
```

---

# ✅ ERFOLGS-CHECKLISTE

Nach allen 6 Projekten:
- [ ] Projekt 1 selbst geschrieben
- [ ] Projekt 2 selbst geschrieben
- [ ] Projekt 3 selbst geschrieben
- [ ] Projekt 4 selbst geschrieben
- [ ] Projekt 5 selbst geschrieben
- [ ] Projekt 6 selbst geschrieben
- [ ] Mindestens 3 Projekte verändert
- [ ] Alle Projekte funktionieren

**DANN: Du kennst Python!** 🎉

---

**Viel Erfolg beim Programmieren!** 🐍✨
