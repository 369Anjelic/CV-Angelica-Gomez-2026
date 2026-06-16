#!/bin/bash
# Start both Flask + Next.js for development

echo "🚀 Starte Python + Next.js Development Server..."

# Start Flask in background
echo "[1] Starte Flask-Server auf Port 5000..."
cd "C:/Users/Anjel/Desktop/Work Projekt/11 Porfolio bearbeiten 28.5.2026/11 Portfolio/portfolio projekte/aktiv/3 python coden übungen"
python app.py &
FLASK_PID=$!

# Wait for Flask to start
sleep 2

# Start Next.js
echo "[2] Starte Next.js auf Port 3000..."
cd "C:/Users/Anjel/portfolio-cv"
npm run dev &
NEXTJS_PID=$!

echo ""
echo "✅ Beide Server laufen!"
echo "📱 Öffne: http://localhost:3000/python"
echo ""
echo "Drücke Ctrl+C zum Beenden..."

# Wait for Ctrl+C
trap "kill $FLASK_PID $NEXTJS_PID 2>/dev/null; exit" INT

wait
