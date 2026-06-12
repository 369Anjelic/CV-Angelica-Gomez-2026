# Text-Analyzer
print("=== Text-Analyzer ===\n")

text = input("Gib einen Text ein: ")

# Analyse
char_count = len(text)
word_count = len(text.split())
line_count = text.count('\n') + 1
unique_words = len(set(text.lower().split()))

print(f"\n--- Ergebnisse ---")
print(f"Zeichen: {char_count}")
print(f"Wörter: {word_count}")
print(f"Zeilen: {line_count}")
print(f"Eindeutige Wörter: {unique_words}")
print(f"Durchschnittliche Wortlänge: {char_count / word_count:.2f}")
