# Pyramiden-Muster Generator
print("=== Pyramiden-Muster ===\n")

n = int(input("Größe der Pyramide: "))

print("\n1. Sternen-Pyramide")
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))

print("\n2. Zahlen-Pyramide")
for i in range(1, n + 1):
    print(" " * (n - i) + "".join(str(j % 10) for j in range(i)))

print("\n3. Umgekehrte Pyramide")
for i in range(n, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))

print("\n4. Hohlpyramide")
for i in range(1, n + 1):
    if i == 1:
        print(" " * (n - 1) + "*")
    elif i == n:
        print("*" * (2 * n - 1))
    else:
        spaces = " " * (n - i)
        middle = " " * (2 * i - 3)
        print(f"{spaces}*{middle}*")
