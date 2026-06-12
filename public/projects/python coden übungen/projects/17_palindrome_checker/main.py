# Palindrom-Prüfer
print("=== Palindrom-Prüfer ===\n")

text = input("Gib einen Text ein: ").lower().replace(" ", "")

# Nur Buchstaben und Zahlen
clean_text = ''.join(char for char in text if char.isalnum())

if clean_text == clean_text[::-1]:
    print(f"✅ '{text}' ist ein Palindrom!")
else:
    print(f"❌ '{text}' ist kein Palindrom!")

# Beispiele
examples = ["racecar", "level", "hello", "anna"]
print("\n--- Beispiele ---")
for word in examples:
    if word == word[::-1]:
        print(f"✅ {word}")
    else:
        print(f"❌ {word}")
