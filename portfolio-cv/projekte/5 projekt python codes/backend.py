#!/usr/bin/env python3
"""
Python Code Runner Backend Server
Führt Python-Code aus und gibt das Ergebnis zurück
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import json
import sys
import os
import tempfile

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/run', methods=['POST'])
def run_code():
    """Execute Python code and return output"""
    try:
        data = request.get_json()
        code = data.get('code', '')

        if not code:
            return jsonify({'error': 'Kein Code vorhanden'}), 400

        # Mock input() für Demo-Zwecke
        if 'input(' in code:
            # Replace input() calls with mock values for demonstration
            mock_code = code

            # Common patterns
            mock_code = mock_code.replace('input("Erste Zahl eingeben: ")', '5')
            mock_code = mock_code.replace('input("Zweite Zahl eingeben: ")', '3')
            mock_code = mock_code.replace('input("\\nWähle (1/2/3/4): ")', '"1"')
            mock_code = mock_code.replace('input("\\nWähle (Stein/Papier/Schere) oder \'quit\': ").capitalize()', '"Stein"')
            mock_code = mock_code.replace('input("\\nWähle (1/2/3): ")', '"1"')
            mock_code = mock_code.replace('input("Adjektiv: ")', '"wunderbar"')
            mock_code = mock_code.replace('input("Nomen: ")', '"Katze"')
            mock_code = mock_code.replace('input("Verb: ")', '"springen"')
            mock_code = mock_code.replace('input("Adverb: ")', '"schnell"')
            mock_code = mock_code.replace('input("Wie viele Würfe? ")', '10')
            mock_code = mock_code.replace('int(input("Raten Sie eine Zahl (1-100): "))', '42')
            mock_code = mock_code.replace('input("Wie heisst du? ")', '"Max"')

            # Generic fallback
            import re
            mock_code = re.sub(r"input\(['\"]([^'\"]*)['\"]\)", '"test_input"', mock_code)

            code = mock_code

        # Create a temporary Python file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False, encoding='utf-8') as f:
            f.write(code)
            temp_file = f.name

        try:
            # Execute the Python code with timeout
            result = subprocess.run(
                [sys.executable, temp_file],
                capture_output=True,
                text=True,
                timeout=5,
                encoding='utf-8'
            )

            output = result.stdout
            error = result.stderr

            return jsonify({
                'success': result.returncode == 0,
                'output': output,
                'error': error,
                'code': result.returncode
            })

        finally:
            # Clean up temp file
            if os.path.exists(temp_file):
                os.remove(temp_file)

    except subprocess.TimeoutExpired:
        return jsonify({
            'success': False,
            'output': '',
            'error': 'Timeout: Code-Ausfuehrung dauerte zu lange (>5 Sekunden)',
            'code': -1
        }), 500

    except Exception as e:
        return jsonify({
            'success': False,
            'output': '',
            'error': f'Fehler: {str(e)}',
            'code': -1
        }), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'service': 'Python Code Runner Backend',
        'version': '1.0'
    })

if __name__ == '__main__':
    try:
        print("[START] Python Code Runner Backend auf Port 5000")
        print("[INFO] Server lauft auf http://127.0.0.1:5000")
        print("[API] POST /run - Code ausfuehren")
        print("[API] GET /health - Health Check")
    except:
        pass
    app.run(host='127.0.0.1', port=5000, debug=True)
