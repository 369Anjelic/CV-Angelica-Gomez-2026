# Alter und Lebenstage Rechner
from datetime import datetime

print("=== Altersrechner ===\n")

birth_year = int(input("Dein Geburtsjahr: "))
birth_month = int(input("Dein Geburtsmonat (1-12): "))
birth_day = int(input("Dein Geburtstag (1-31): "))

today = datetime.now()
age = today.year - birth_year

# Überprüfe ob Geburtstag dieses Jahr schon war
if (today.month, today.day) < (birth_month, birth_day):
    age -= 1

print(f"\n🎂 Du bist {age} Jahre alt!")
print(f"📅 Geburtstag: {birth_day}.{birth_month}.{birth_year}")

# Zusätzliche Infos
days_lived = (today - datetime(birth_year, birth_month, birth_day)).days
print(f"Du hast {days_lived} Tage gelebt!")
