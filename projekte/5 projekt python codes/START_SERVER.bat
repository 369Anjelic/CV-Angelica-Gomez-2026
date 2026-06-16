@echo off
REM Start Python Flask Server für Python Codier IDE
cd /d "%~dp0"
echo.
echo [*] Starte Python Flask Server...
echo [*] Server läuft auf http://127.0.0.1:5000
echo [*] Drücke Ctrl+C zum Beenden
echo.
python app.py
pause
