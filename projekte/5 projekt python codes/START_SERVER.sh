#!/bin/bash
# Start Python Flask Server für Python Coding IDE

echo ""
echo "[*] Starte Python Flask Server..."
echo "[*] Server läuft auf http://127.0.0.1:5000"
echo "[*] Drücke Ctrl+C zum Beenden"
echo ""

cd "$(dirname "$0")"
python app.py
