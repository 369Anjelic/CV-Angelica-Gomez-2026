import { NextResponse } from 'next/server';

export async function POST() {
  const words = ['kernel', 'deploy', 'merge', 'commit', 'draft', 'cache', 'stack', 'queue', 'heap', 'node', 'sync', 'fetch', 'parse', 'build', 'test'];
  const identifier = [
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
    words[Math.floor(Math.random() * words.length)],
  ].join('.');

  return NextResponse.json({ success: true, words: identifier });
}
