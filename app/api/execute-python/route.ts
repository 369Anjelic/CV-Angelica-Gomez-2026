import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return Response.json(
        { error: 'No code provided' },
        { status: 400 }
      );
    }

    try {
      const { stdout, stderr } = await execPromise(
        `python -c "${code.replace(/"/g, '\\"')}"`,
        { timeout: 5000, maxBuffer: 1024 * 1024 * 10 }
      );

      return Response.json({
        success: true,
        output: stdout,
        error: stderr || null
      });
    } catch (err: any) {
      return Response.json({
        success: false,
        output: null,
        error: err.stderr || err.message || err.toString()
      });
    }
  } catch (error: any) {
    return Response.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
