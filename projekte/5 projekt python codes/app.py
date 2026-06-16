#!/usr/bin/env python3
"""Flask Server für Python-Code Execution"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import sys
import json
import os
from pathlib import Path
import tempfile
import uuid

app = Flask(__name__)
CORS(app)

class CodeExecutor:
    """Führt Python-Code sicher aus"""
    
    @staticmethod
    def execute(code):
        """Führt Python-Code aus und gibt Output/Fehler zurück"""
        try:
            # Temporäre Datei erstellen
            temp_dir = Path(tempfile.gettempdir()) / "python_exec"
            temp_dir.mkdir(exist_ok=True)
            
            code_file = temp_dir / f"code_{uuid.uuid4()}.py"
            code_file.write_text(code, encoding='utf-8')
            
            # Code ausführen mit Timeout
            result = subprocess.run(
                [sys.executable, str(code_file)],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            # Datei aufräumen
            code_file.unlink()
            
            return {
                'output': result.stdout,
                'error': result.stderr,
                'success': result.returncode == 0,
                'returncode': result.returncode
            }
            
        except subprocess.TimeoutExpired:
            return {
                'output': '',
                'error': 'Timeout: Code dauerte länger als 10 Sekunden',
                'success': False,
                'returncode': -1
            }
        except Exception as e:
            return {
                'output': '',
                'error': str(e),
                'success': False,
                'returncode': -1
            }

@app.route('/run', methods=['POST'])
def run_code():
    """POST /run - Führe Python-Code aus"""
    try:
        data = request.get_json()
        code = data.get('code', '')
        
        if not code:
            return jsonify({
                'output': '',
                'error': 'Kein Code übergeben',
                'success': False
            }), 400
        
        result = CodeExecutor.execute(code)
        return jsonify(result)
        
    except Exception as e:
        return jsonify({
            'output': '',
            'error': f'Server Fehler: {str(e)}',
            'success': False
        }), 500

@app.route('/health', methods=['GET'])
def health():
    """GET /health - Server Status"""
    return jsonify({'status': 'ok'}), 200

@app.route('/', methods=['GET'])
def index():
    """GET / - Server Info"""
    return jsonify({
        'name': 'Python Code Executor',
        'version': '1.0',
        'endpoints': {
            'POST /run': 'Execute Python code',
            'GET /health': 'Server status'
        }
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"[OK] Server läuft auf Port {port}")
    app.run(host='0.0.0.0', port=port, debug=False)
