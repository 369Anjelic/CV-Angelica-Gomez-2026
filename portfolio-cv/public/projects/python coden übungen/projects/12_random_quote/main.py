# Zufälliges Zitat Generator
import random

quotes = [
    "Das einzige Ding, das man braucht, ist Mut. - Nelson Mandela",
    "Die beste Zeit einen Baum zu pflanzen ist vor 20 Jahren. Zweitbeste ist jetzt.",
    "Erfolg ist nicht endgültig, Fehler nicht fatal. - Winston Churchill",
    "Träume nicht von Erfolg, arbeite dafür.",
    "Der Weg ist das Ziel. - Konfuzius",
    "Gib nicht auf, es ist nie zu spät.",
    "Du bist stärker als du denkst.",
    "Kleine Schritte führen zu großen Zielen."
]

print("=== Zufälliger Zitat Generator ===\n")

while True:
    zitat = random.choice(quotes)
    print(f"💭 {zitat}\n")

    again = input("Ein weiteres Zitat? (j/n): ").lower()
    if again != "j":
        print("Auf Wiedersehen!")
        break
