export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const token = Buffer.from(`${email}:${password}`).toString('base64');

    return Response.json({
      success: true,
      token,
      user: { email }
    });
  } catch (error) {
    return Response.json({ error: 'Login failed' }, { status: 401 });
  }
}
