# Zahlenratespiel
import random

print("=== Zahlenratespiel ===")
print("Ich denke an eine Zahl zwischen 1 und 100...")

secret_number = random.randint(1, 100)
guesses = 0

while True:
    try:
        guess = int(input("\nDeine Vermutung: "))
        guesses += 1

        if guess < secret_number:
            print("Die Zahl ist höher!")
        elif guess > secret_number:
            print("Die Zahl ist niedriger!")
        else:
            print(f"🎉 Richtig! Du hast {guesses} Versuche gebraucht!")
            break
    except ValueError:
        print("Bitte gib eine ganze Zahl ein!")
