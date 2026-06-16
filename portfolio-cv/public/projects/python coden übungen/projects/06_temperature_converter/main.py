# Temperaturkonverter
print("=== Temperaturkonverter ===")

print("\n1. Celsius zu Fahrenheit")
print("2. Fahrenheit zu Celsius")
print("3. Celsius zu Kelvin")

choice = input("\nWähle (1/2/3): ")

if choice == "1":
    celsius = float(input("Celsius eingeben: "))
    fahrenheit = (celsius * 9/5) + 32
    print(f"{celsius}°C = {fahrenheit}°F")

elif choice == "2":
    fahrenheit = float(input("Fahrenheit eingeben: "))
    celsius = (fahrenheit - 32) * 5/9
    print(f"{fahrenheit}°F = {celsius}°C")

elif choice == "3":
    celsius = float(input("Celsius eingeben: "))
    kelvin = celsius + 273.15
    print(f"{celsius}°C = {kelvin}K")

else:
    print("Ungültige Wahl!")
