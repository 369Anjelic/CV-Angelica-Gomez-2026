#!/usr/bin/env python3
"""Einfacher Code-Runner - liest Code aus Datei und führt aus"""

import sys
import io
import traceback
import json
import os
from pathlib import Path

class InfiniteInputFile:
    """Bereitstellung von unendlich vielen Default-Inputs"""
    def __init__(self):
        self.inputs = [
            "10", "5", "1",  # Calculator
            "magisch", "Drache", "fliegen", "schnell",  # Mad Libs
            "50", "75", "65",  # Number Guessing
            "100",  # Coin Flip
            "Stein", "Papier", "Schere", "quit",  # Rock Paper Scissors
            "1", "25", "2", "77.0", "3",  # Temperature
            "1", "Python lernen", "2", "1", "3",  # Todo List
            "Berlin", "4", "Jupiter",  # Quiz
            "12", "j", "j", "n",  # Password Generator
            "75", "1.8",  # BMI
            "3d6",  # Dice Roller
            "yes", "no", "hello", "exit",  # Various
        ]
        self.index = 0

    def readline(self):
        if self.index < len(self.inputs):
            result = self.inputs[self.index] + "\n"
            self.index += 1
            return result
        # Unendlich "1" zurückgeben um Loops zu stoppen
        return "1\n"

    def read(self, *args):
        return ""

    def __iter__(self):
        return self

    def __next__(self):
        return self.readline()

def run_code(code):
    """Führt Python-Code aus und gibt Output zurück"""

    # Capture output
    old_stdout = sys.stdout
    old_stderr = sys.stderr
    old_stdin = sys.stdin

    capture_out = io.StringIO()
    capture_err = io.StringIO()

    output = ""
    error = None
    success = True

    try:
        sys.stdout = capture_out
        sys.stderr = capture_err
        sys.stdin = InfiniteInputFile()

        # Execute code
        exec(code, {})
        output = capture_out.getvalue()
        success = True

    except Exception as e:
        success = False
        output = capture_out.getvalue()
        error = traceback.format_exc()

    finally:
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        sys.stdin = old_stdin

    return {
        'output': output,
        'error': error,
        'success': success
    }

if __name__ == '__main__':
    # Input file: temp_code.py
    # Output file: temp_output.json

    input_file = Path(__file__).parent / 'temp_code.py'
    output_file = Path(__file__).parent / 'temp_output.json'

    try:
        # Read code from file (remove BOM)
        if input_file.exists():
            code = input_file.read_text(encoding='utf-8-sig')

            # Run code
            result = run_code(code)

            # Write output to JSON file
            output_file.write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')

            # Delete input file
            input_file.unlink()
        else:
            output_file.write_text(json.dumps({'error': 'Input file not found', 'output': '', 'success': False}), encoding='utf-8')

    except Exception as e:
        result = {'error': str(e), 'output': '', 'success': False}
        output_file.write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')
