# Galgenmännchen (Hangman)
import random

words = ["python", "javascript", "computer", "programm", "entwickler", "variable"]

print("=== Galgenmännchen ===\n")

word = random.choice(words)
guessed = ["_"] * len(word)
wrong_letters = []
attempts = 6

while attempts > 0 and "_" in guessed:
    print(f"\nWort: {' '.join(guessed)}")
    print(f"Falsche Buchstaben: {', '.join(wrong_letters)}")
    print(f"Versuche übrig: {attempts}")

    letter = input("\nBuchstabe eingeben: ").lower()

    if letter in word:
        for i, char in enumerate(word):
            if char == letter:
                guessed[i] = letter
        print("✅ Richtig!")
    else:
        wrong_letters.append(letter)
        attempts -= 1
        print("❌ Falsch!")

if "_" not in guessed:
    print(f"\n🎉 Du gewinnst! Das Wort war: {word}")
else:
    print(f"\n💀 Game Over! Das Wort war: {word}")
