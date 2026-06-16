import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    success: true,
    markdown: '# Glitch Lernfortschritt\n\nKeine Daten verfügbar.',
  });
}
