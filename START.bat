@echo off
chcp 65001 > nul
title CV Homepage & Kaspar Hauser Quest - Lokale Server
color 0A
cls

echo ============================================
echo  CV Homepage - Lokale Server Startup
echo ============================================
echo.

REM Prüfe ob Node installiert ist
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js nicht installiert!
    echo Bitte installiere Node.js von https://nodejs.org/
    pause
    exit /b 1
)

REM Speichere aktuelles Verzeichnis
set ORIGINAL_DIR=%cd%

REM Installiere Dependencies im Main Project
echo [1/4] Installiere Dependencies im CV-Projekt...
call npm install
if errorlevel 1 (
    echo ERROR: npm install fehlgeschlagen!
    pause
    exit /b 1
)

REM Installiere Dependencies im Kaspar Projekt
echo [2/4] Installiere Dependencies im Kaspar Hauser Projekt...
cd "projekte\1 kaspar-hauser-quest"
call npm install
cd "%ORIGINAL_DIR%"
if errorlevel 1 (
    echo ERROR: Kaspar npm install fehlgeschlagen!
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Server werden gestartet...
echo ============================================
echo.
echo [3/4] Starte CV Homepage auf PORT 3000...
start "CV Homepage - localhost:3000" npm run dev

timeout /t 2

echo [4/4] Starte Kaspar Hauser API auf PORT 3001...
start "Kaspar Hauser - localhost:3001" cmd /k "cd "%ORIGINAL_DIR%\projekte\1 kaspar-hauser-quest" && npm start"

timeout /t 2

echo [5/5] Starte Flight Trainer auf PORT 3002...
start "Flight Trainer - localhost:3002" cmd /k "cd "%ORIGINAL_DIR%\projekte\2 projekt fly" && npm start"

timeout /t 3

cls
echo.
echo ============================================
echo  ✓ ALLE SERVER GESTARTET!
echo ============================================
echo.
echo Homepage:         http://localhost:3000
echo.
echo Projekte:
echo   Kaspar Quest:   http://localhost:3000/kaspar (Port 3001)
echo   Flight Trainer: http://localhost:3000/fly (Port 3002)
echo.
echo Fenster NICHT schliessen - Server laufen im Hintergrund!
echo Zum Beenden: Schliesse alle CMD-Fenster
echo.
pause
