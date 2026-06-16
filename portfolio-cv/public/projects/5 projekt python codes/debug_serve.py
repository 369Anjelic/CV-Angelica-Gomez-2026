#!/usr/bin/env python3
"""Server mit SICHTBAREM Debug-Output im Terminal"""

import json
import subprocess
import sys
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler

class H(BaseHTTPRequestHandler):
    def do_GET(self):
        print(f"[GET] {self.path}", flush=True)
        path = self.path if self.path != '/' else '/index.html'
        f = Path(__file__).parent / path.lstrip('/')
        if f.exists():
            self.send_response(200)
            self.send_header('Content-Type', 'text/html' if f.suffix == '.html' else 'text/plain')
            self.end_headers()
            self.wfile.write(f.read_bytes())
            print(f"[OK] {path} gesendet", flush=True)
        else:
            self.send_response(404)
            self.end_headers()
            print(f"[ERROR] {path} nicht gefunden", flush=True)

    def do_POST(self):
        print(f"\n[POST] {self.path}", flush=True)

        if self.path == '/run':
            print("[1] Request zu /run empfangen", flush=True)

            try:
                size = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(size).decode('utf-8')
                print(f"[2] Body gelesen ({size} bytes)", flush=True)

                data = json.loads(body)
                code = data.get('code', '')
                print(f"[3] JSON geparst, Code-Länge: {len(code)}", flush=True)

                # Write code (absolute path)
                base_dir = Path(__file__).parent
                code_file = base_dir / 'temp_code.py'
                output_file = base_dir / 'temp_output.json'

                code_file.write_text(code, encoding='utf-8-sig')
                print("[4] Code geschrieben", flush=True)

                # Run code
                print("[5] Führe Code aus...", flush=True)
                try:
                    result = subprocess.run(
                        [sys.executable, str(base_dir / 'runner.py')],
                        cwd=str(base_dir),
                        capture_output=True,
                        timeout=30,
                        text=True
                    )
                    print(f"[5b] Return code: {result.returncode}", flush=True)
                    if result.stdout:
                        print(f"[5c] stdout: {result.stdout[:100]}", flush=True)
                    if result.stderr:
                        print(f"[5d] stderr: {result.stderr[:100]}", flush=True)
                except subprocess.TimeoutExpired:
                    print("[ERROR] runner.py TIMEOUT nach 30 Sekunden!", flush=True)
                    raise
                except Exception as e:
                    print(f"[ERROR] runner.py fehlgeschlagen: {e}", flush=True)
                    raise
                print("[6] Code fertig", flush=True)

                # Read result
                if not output_file.exists():
                    print(f"[ERROR] Output-Datei existiert nicht: {output_file}", flush=True)
                    raise FileNotFoundError(f"Output-Datei nicht erstellt: {output_file}")

                result = json.loads(output_file.read_text(encoding='utf-8'))
                print(f"[7] Ergebnis gelesen: {result.get('output', '')[:50]}...", flush=True)

                # Send response
                resp = json.dumps(result).encode()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Length', len(resp))
                self.end_headers()
                self.wfile.write(resp)
                print("[8] Response gesendet!", flush=True)

            except Exception as e:
                print(f"[ERROR] {e}", flush=True)
                resp = json.dumps({'output': '', 'error': str(e), 'success': False}).encode()
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', len(resp))
                self.end_headers()
                self.wfile.write(resp)

    def log_message(self, *args):
        pass

try:
    print("=" * 60, flush=True)
    print("[START] Server wird gestartet...", flush=True)
    print("=" * 60, flush=True)

    HTTPServer.allow_reuse_address = True
    server = HTTPServer(('127.0.0.1', 5000), H)

    print("[OK] Server läuft auf http://127.0.0.1:5000", flush=True)
    print("[OK] Warte auf Requests...", flush=True)
    print("[OK] Wenn du 'Run Code' klickst, siehst du hier Debug-Output!", flush=True)
    print("=" * 60, flush=True)
    print("", flush=True)

    sys.stdout.flush()
    server.serve_forever()

except Exception as e:
    print(f"[CRASH] {e}", flush=True)
    sys.exit(1)
