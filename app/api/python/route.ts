export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Determine Python server URL based on environment
    const getPythonServerUrl = () => {
      // On localhost, use local server
      if (process.env.NODE_ENV === 'development') {
        return 'http://127.0.0.1:5000';
      }

      // On production, use Railway or custom backend
      const railwayUrl = process.env.PYTHON_SERVER_URL;
      if (railwayUrl) {
        return railwayUrl;
      }

      // Fallback
      return 'http://127.0.0.1:5000';
    };

    const pythonServerUrl = getPythonServerUrl();
    const runUrl = `${pythonServerUrl}/run`;

    console.log(`[Python Proxy] Forwarding to: ${runUrl}`);

    try {
      // Use AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(runUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const data = await response.json();
        return Response.json(data, { status: response.status });
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (err: any) {
      console.error(`[Python Proxy] Failed to reach ${runUrl}:`, err);

      // Determine error message based on environment
      const errorMessage =
        process.env.NODE_ENV === 'development'
          ? 'Python Server auf http://127.0.0.1:5000 nicht erreichbar. Starte: python app.py'
          : `Python Server nicht erreichbar. URL: ${runUrl}. Bitte Railway deployment prüfen.`;

      return Response.json(
        {
          success: false,
          output: '',
          error: errorMessage,
        },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('[Python API] Error:', error);
    return Response.json(
      { success: false, output: '', error: 'Internal server error' },
      { status: 500 }
    );
  }
}
