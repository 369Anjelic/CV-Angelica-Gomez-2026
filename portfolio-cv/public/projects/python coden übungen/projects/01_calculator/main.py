# Einfacher Taschenrechner
print("=== Einfacher Taschenrechner ===")

num1 = float(input("Erste Zahl eingeben: "))
num2 = float(input("Zweite Zahl eingeben: "))

print("\nWähle Operation:")
print("1. Addition (+)")
print("2. Subtraktion (-)")
print("3. Multiplikation (*)")
print("4. Division (/)")

operation = input("\nWähle (1/2/3/4): ")

if operation == "1":
    print(f"Ergebnis: {num1} + {num2} = {num1 + num2}")
elif operation == "2":
    print(f"Ergebnis: {num1} - {num2} = {num1 - num2}")
elif operation == "3":
    print(f"Ergebnis: {num1} * {num2} = {num1 * num2}")
elif operation == "4":
    if num2 != 0:
        print(f"Ergebnis: {num1} / {num2} = {num1 / num2}")
    else:
        print("Fehler: Division durch Null nicht möglich!")
else:
    print("Ungültige Operation!")
