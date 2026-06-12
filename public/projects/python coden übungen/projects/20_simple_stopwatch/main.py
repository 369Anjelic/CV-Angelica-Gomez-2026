# Einfache Stoppuhr
import time

print("=== Einfache Stoppuhr ===\n")

print("1. Countdown")
print("2. Zeitmesser")

choice = input("\nWähle (1/2): ")

if choice == "1":
    seconds = int(input("Sekunden für Countdown: "))
    print(f"Starten... {seconds}")

    for i in range(seconds, 0, -1):
        print(f"\r{i} Sekunden verbleibend", end="", flush=True)
        time.sleep(1)
    print("\n⏰ Zeit abgelaufen!")

elif choice == "2":
    input("Drücke Enter zum Starten... ")
    start_time = time.time()

    try:
        while True:
            elapsed = time.time() - start_time
            minutes, seconds = divmod(int(elapsed), 60)
            print(f"\r{minutes:02d}:{seconds:02d}", end="", flush=True)
            time.sleep(0.1)
    except KeyboardInterrupt:
        elapsed = time.time() - start_time
        minutes, seconds = divmod(int(elapsed), 60)
        print(f"\n\n⏱️ Gezeigte Zeit: {minutes:02d}:{seconds:02d}")
