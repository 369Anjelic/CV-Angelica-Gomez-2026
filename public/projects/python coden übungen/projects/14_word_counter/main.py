# Wort-Zähler
print("=== Wort-Zähler ===\n")

text = input("Gib einen Text ein: ").lower()
word = input("Welches Wort möchtest du zählen: ").lower()

# Worte trennen
words = text.split()

count = words.count(word)

print(f"\nDas Wort '{word}' kommt {count} mal vor.")

# Zusätzliche Info: Top 5 Wörter
from collections import Counter
word_freq = Counter(words)
top_5 = word_freq.most_common(5)

print("\nTop 5 häufigste Wörter:")
for word, freq in top_5:
    print(f"  {word}: {freq}x")
