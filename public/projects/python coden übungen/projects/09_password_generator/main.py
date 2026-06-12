# Passwort Generator
import random
import string

print("=== Passwort Generator ===\n")

length = int(input("Passwortlänge eingeben (mindestens 8): "))

if length < 8:
    print("Passwort muss mindestens 8 Zeichen lang sein!")
else:
    # Alle möglichen Zeichen
    characters = string.ascii_letters + string.digits + string.punctuation

    # Passwort generieren
    password = ''.join(random.choice(characters) for _ in range(length))

    print(f"\n🔐 Dein Passwort: {password}")
    print(f"Länge: {len(password)} Zeichen")
