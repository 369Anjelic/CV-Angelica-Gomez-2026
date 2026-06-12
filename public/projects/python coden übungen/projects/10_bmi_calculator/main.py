# BMI (Body Mass Index) Rechner
print("=== BMI Rechner ===\n")

weight = float(input("Gewicht in kg: "))
height = float(input("Größe in m: "))

bmi = weight / (height ** 2)

print(f"\nDein BMI: {bmi:.2f}")

if bmi < 18.5:
    print("Kategorie: Untergewicht")
elif bmi < 25:
    print("Kategorie: Normalgewicht")
elif bmi < 30:
    print("Kategorie: Übergewicht")
else:
    print("Kategorie: Adipositas")
