export async function POST(request) {
  const body = await request.json();
  return Response.json({
    markdown: `# Glitch Lernfortschritt\n\nLernbegleiter aktiv und bereit! 🚀`
  }, { status: 200 });
}
