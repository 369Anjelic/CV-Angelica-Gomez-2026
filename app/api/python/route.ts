export async function POST(request: Request) {
  try {
    const body = await request.json();
    const hostname = process.env.VERCEL ? 'vercel' : 'localhost';

    // On localhost, proxy to the local Python server on port 5000
    if (hostname === 'localhost' || process.env.NODE_ENV === 'development') {
      const localUrl = 'http://127.0.0.1:5000/run';
      console.log(`[Python Proxy] Forwarding to: ${localUrl}`);

      try {
        const response = await fetch(localUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return Response.json(data, { status: response.status });
      } catch (err) {
        console.error(`[Python Proxy] Failed to reach localhost:5000:`, err);
        return Response.json(
          {
            success: false,
            output: '',
            error: 'Python Server auf http://127.0.0.1:5000 nicht erreichbar. Starte den Server mit: npm run python',
          },
          { status: 503 }
        );
      }
    }

    // On Vercel production, return a helpful message
    return Response.json(
      {
        success: false,
        output: '',
        error: 'Python Code Execution ist nur lokal verfügbar. Nutze http://localhost:3000/python für lokale Python-Übungen.',
      },
      { status: 501 }
    );
  } catch (error) {
    console.error('[Python API] Error:', error);
    return Response.json(
      { success: false, output: '', error: 'Internal server error' },
      { status: 500 }
    );
  }
}
