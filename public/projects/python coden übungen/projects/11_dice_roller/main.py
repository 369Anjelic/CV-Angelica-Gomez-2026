# Würfel-Simulator
import random

print("=== Würfel-Simulator ===\n")

while True:
    print("1. Einen Würfel werfen (1-6)")
    print("2. Mehrere Würfel werfen")
    print("3. Beenden")

    choice = input("\nWähle (1/2/3): ")

    if choice == "1":
        result = random.randint(1, 6)
        print(f"🎲 Ergebnis: {result}\n")

    elif choice == "2":
        num_dice = int(input("Wie viele Würfel? "))
        results = [random.randint(1, 6) for _ in range(num_dice)]
        print(f"🎲 Ergebnisse: {results}")
        print(f"Summe: {sum(results)}\n")

    elif choice == "3":
        break
