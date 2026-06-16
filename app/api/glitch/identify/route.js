export async function POST(request) {
  const body = await request.json();
  return Response.json({ found: false }, { status: 200 });
}
