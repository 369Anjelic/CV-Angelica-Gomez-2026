# Münzwurf Simulator
import random

print("=== Münzwurf Simulator ===")

while True:
    user_choice = input("\nKopf oder Zahl? (K/Z oder q zum Beenden): ").upper()

    if user_choice == "Q":
        print("Auf Wiedersehen!")
        break

    if user_choice not in ["K", "Z"]:
        print("Ungültige Eingabe!")
        continue

    result = random.choice(["K", "Z"])
    result_text = "Kopf" if result == "K" else "Zahl"

    print(f"Münze fällt... {result_text}!")

    if user_choice == result:
        print("✅ Du hast gewonnen!")
    else:
        print("❌ Du hast verloren!")
