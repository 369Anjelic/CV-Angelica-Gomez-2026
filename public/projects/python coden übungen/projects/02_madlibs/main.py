# Mad Libs Spiel
print("=== Mad Libs Spiel ===\n")

adjective1 = input("Adjektiv eingeben: ")
noun1 = input("Substantiv eingeben: ")
verb = input("Verb eingeben: ")
adjective2 = input("Adjektiv eingeben: ")
noun2 = input("Substantiv eingeben: ")

story = f"""
Es war eine {adjective1} {noun1}. Sie konnte {verb}.
Das war sehr {adjective2} für die {noun2}.
Alle waren überrascht!
"""

print("\n--- Deine Geschichte ---")
print(story)
