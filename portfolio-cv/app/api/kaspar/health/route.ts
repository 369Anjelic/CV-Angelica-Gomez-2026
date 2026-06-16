import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    anthropic: !!process.env.ANTHROPIC_API_KEY ? 'configured' : 'missing',
  });
}
