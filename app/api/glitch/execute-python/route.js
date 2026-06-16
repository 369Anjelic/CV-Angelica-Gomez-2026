export async function POST(request) {
  const body = await request.json();
  return Response.json({
    executed: false,
    output: 'Python-Ausführung: Nutze die lokale Version für Tests 🐍',
    error: false
  }, { status: 200 });
}
