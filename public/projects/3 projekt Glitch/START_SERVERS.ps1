# GLITCH Local - Server Startup Script
# Dieses Script startet Frontend und Backend automatisch

Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   GLITCH Local - Server Startup        ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Setze das Arbeitsverzeichnis
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Funktion zum Killen von Ports
function Kill-Port {
    param([int]$Port)
    Write-Host "🔍 Prüfe Port $Port..." -ForegroundColor Yellow

    $connections = netstat -ano | Select-String ":$Port"
    if ($connections) {
        foreach ($conn in $connections) {
            if ($conn -match "(\d+)$") {
                $procId = [int]$matches[1]
                if ($procId -gt 0 -and $procId -ne [System.Diagnostics.Process]::GetCurrentProcess().Id) {
                    Write-Host "  ✓ Beende Prozess PID: $procId" -ForegroundColor Green
                    Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
                }
            }
        }
    }
    Start-Sleep -Seconds 1
}

# Töte alte Prozesse
Write-Host ""
Write-Host "🧹 Räume alte Prozesse auf..." -ForegroundColor Yellow
Kill-Port 3000
Kill-Port 3003

# Starte Backend
Write-Host ""
Write-Host "🚀 Starte Backend API Server (Port 3003)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$ScriptDir'; node server.js" -WindowStyle Normal

# Warte kurz
Start-Sleep -Seconds 2

# Starte Frontend
Write-Host "🚀 Starte Frontend Server (Port 3000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$ScriptDir'; python -m http.server 3000" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Server starten sich in neuen Fenstern..." -ForegroundColor Green
Write-Host ""
Write-Host "📖 Öffne: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Drücke eine beliebige Taste zum Beenden..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
