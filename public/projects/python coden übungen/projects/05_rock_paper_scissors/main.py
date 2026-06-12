# Schnick-Schnack-Schnuck Spiel
import random

print("=== Schnick-Schnack-Schnuck ===")

choices = ["stein", "papier", "schere"]

while True:
    player = input("\nStein, Papier oder Schere? (oder 'q' zum Beenden): ").lower()

    if player == "q":
        print("Auf Wiedersehen!")
        break

    if player not in choices:
        print("Ungültige Eingabe!")
        continue

    computer = random.choice(choices)

    print(f"Du: {player} | Computer: {computer}")

    if player == computer:
        print("🤝 Unentschieden!")
    elif (player == "stein" and computer == "schere") or \
         (player == "papier" and computer == "stein") or \
         (player == "schere" and computer == "papier"):
        print("✅ Du gewinnst!")
    else:
        print("❌ Computer gewinnt!")
