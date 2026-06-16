export async function GET(request: Request) {
  try {
    const auth = request.headers.get('authorization');
    if (!auth) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = auth.replace('Bearer ', '');
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [email] = decoded.split(':');

    return Response.json({
      user: { email }
    });
  } catch (error) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
}
