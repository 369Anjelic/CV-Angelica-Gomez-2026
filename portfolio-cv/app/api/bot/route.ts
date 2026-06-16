// Proxy to /api/kaspar for Kaspar game compatibility
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const kasparResponse = await fetch(
      new URL('/api/kaspar', request.url),
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
    );

    const data = await kasparResponse.json();
    return new Response(JSON.stringify(data), {
      status: kasparResponse.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Server error',
        response: 'Kaspar: "Etwas stimmt nicht..."'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET() {
  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
