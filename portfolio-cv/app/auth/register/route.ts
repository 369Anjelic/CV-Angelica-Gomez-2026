export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();
    const token = Buffer.from(`${email}:${password}`).toString('base64');

    return Response.json({
      success: true,
      token,
      user: { username, email }
    });
  } catch (error) {
    return Response.json({ error: 'Registration failed' }, { status: 400 });
  }
}
