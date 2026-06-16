# Glitch Local — Startup Script für Windows
# Starte: .\START.ps1 im PowerShell

Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   🚀 Glitch Local — Startup          ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Prüfe ob wir im richtigen Ordner sind
if (-not (Test-Path "server.js")) {
    Write-Host "❌ FEHLER: server.js nicht gefunden!" -ForegroundColor Red
    Write-Host "   Navigiere zum glitch local Ordner und versuche erneut." -ForegroundColor Red
    exit 1
}

# Prüfe Dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installiere Dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host "✅ Dependencies installiert!" -ForegroundColor Green
}

# Prüfe .env
if (-not (Test-Path ".env")) {
    Write-Host "❌ FEHLER: .env Datei nicht gefunden!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔧 Starte beide Server..." -ForegroundColor Green
Write-Host ""

# Starte Frontend (Port 3000)
Write-Host "1️⃣  Frontend auf Port 3000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; python -m http.server 3000"
Start-Sleep -Seconds 2

# Starte Backend (Port 3003)
Write-Host "2️⃣  Backend API auf Port 3003..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; node server.js"
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   ✅ Alle Server laufen!              ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "📖 Öffne dein Browser und gehe zu:" -ForegroundColor Cyan
Write-Host "   http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  Drücke CTRL+C in den Server-Fenster um zu stoppen" -ForegroundColor Gray
Write-Host ""
