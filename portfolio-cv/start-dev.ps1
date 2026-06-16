# Start both Flask + Next.js for development

Write-Host "🚀 Starte Python + Next.js Development Server..." -ForegroundColor Cyan

# Start Flask in background
Write-Host "[1] Starte Flask-Server auf Port 5000..." -ForegroundColor Yellow
$flaskDir = "C:\Users\Anjel\Desktop\Work Projekt\11 Porfolio bearbeiten 28.5.2026\11 Portfolio\portfolio projekte\aktiv\3 python coden übungen"
$flaskProcess = Start-Process python -ArgumentList "$flaskDir\app.py" -PassThru -NoNewWindow

# Wait for Flask to start
Start-Sleep -Seconds 2

# Start Next.js
Write-Host "[2] Starte Next.js auf Port 3000..." -ForegroundColor Yellow
Set-Location "C:\Users\Anjel\portfolio-cv"
$nextProcess = Start-Process npm -ArgumentList "run dev" -PassThru -NoNewWindow

Write-Host ""
Write-Host "✅ Beide Server laufen!" -ForegroundColor Green
Write-Host "📱 Öffne: http://localhost:3000/python" -ForegroundColor Cyan
Write-Host ""
Write-Host "Drücke Ctrl+C zum Beenden..." -ForegroundColor Yellow

# Keep running
try {
    while ($true) { Start-Sleep -Seconds 1 }
} finally {
    $flaskProcess.Kill()
    $nextProcess.Kill()
    Write-Host "Prozesse beendet."
}
