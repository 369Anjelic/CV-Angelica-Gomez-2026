# Fibonacci-Sequenz Generator
print("=== Fibonacci-Sequenz ===\n")

n = int(input("Wie viele Fibonacci-Zahlen? "))

# Ersten zwei Zahlen
a, b = 0, 1
fibonacci = []

for _ in range(n):
    fibonacci.append(a)
    a, b = b, a + b

print(f"\nDie ersten {n} Fibonacci-Zahlen:")
print(fibonacci)

# Visualisierung
print("\nVisualisierung:")
for num in fibonacci:
    print("█" * num)
