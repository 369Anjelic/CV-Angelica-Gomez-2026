export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code;

  return Response.json({
    code,
    members: [],
    createdAt: new Date().toISOString()
  });
}
