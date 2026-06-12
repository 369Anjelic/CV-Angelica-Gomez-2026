# Einfache To-Do Liste
todos = []

while True:
    print("\n=== To-Do Liste ===")
    print("1. Aufgabe hinzufügen")
    print("2. Aufgaben anzeigen")
    print("3. Aufgabe abhaken")
    print("4. Beenden")

    choice = input("\nWähle (1/2/3/4): ")

    if choice == "1":
        task = input("Neue Aufgabe: ")
        todos.append({"task": task, "done": False})
        print("✅ Aufgabe hinzugefügt!")

    elif choice == "2":
        if todos:
            print("\nDeine Aufgaben:")
            for i, item in enumerate(todos, 1):
                status = "✓" if item["done"] else "○"
                print(f"{i}. [{status}] {item['task']}")
        else:
            print("Keine Aufgaben!")

    elif choice == "3":
        if todos:
            num = int(input("Aufgabennummer zum Abhaken: ")) - 1
            if 0 <= num < len(todos):
                todos[num]["done"] = True
                print("✅ Aufgabe abgehakt!")

    elif choice == "4":
        print("Auf Wiedersehen!")
        break
