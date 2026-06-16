export async function POST(request: Request) {
  try {
    const { teamName } = await request.json();
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();

    return Response.json({
      success: true,
      code,
      teamName,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    return Response.json({ error: 'Failed to create team' }, { status: 400 });
  }
}
