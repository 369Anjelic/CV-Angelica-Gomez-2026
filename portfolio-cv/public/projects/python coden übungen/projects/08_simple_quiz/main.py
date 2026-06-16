# Einfaches Quiz
questions = [
    {"frage": "Was ist die Hauptstadt von Frankreich?", "antwort": "paris"},
    {"frage": "Wie viele Kontinente gibt es?", "antwort": "7"},
    {"frage": "Was ist die größte Zahl unter 100?", "antwort": "99"},
    {"frage": "Wie heißt der größte Planet?", "antwort": "jupiter"},
    {"frage": "Was ist das chemische Symbol für Gold?", "antwort": "au"},
]

print("=== Quiz Zeit ===\n")

score = 0

for i, q in enumerate(questions, 1):
    print(f"Frage {i}: {q['frage']}")
    answer = input("Deine Antwort: ").lower()

    if answer == q['antwort']:
        print("✅ Richtig!\n")
        score += 1
    else:
        print(f"❌ Falsch! Richtige Antwort: {q['antwort']}\n")

print(f"=== Ergebnis: {score}/{len(questions)} Punkte ===")
