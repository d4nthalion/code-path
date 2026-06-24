import type { ExecutionResult } from '../types';
import type { Language } from '../types';
import { JUDGE0_LANGUAGE_IDS } from '../data/languages';

export interface PistonFile {
  name: string;
  content: string;
}

// Self-hosted Piston (set VITE_PISTON_URL=http://localhost:2000/api/v2)
const PISTON_URL = import.meta.env.VITE_PISTON_URL as string | undefined;
// Judge0 via RapidAPI (set VITE_JUDGE0_KEY)
const JUDGE0_KEY = import.meta.env.VITE_JUDGE0_KEY as string | undefined;

// --- Judge0 ---

async function executeJudge0(
  langId: Language,
  files: PistonFile[],
  stdin = ''
): Promise<ExecutionResult> {
  const languageId = JUDGE0_LANGUAGE_IDS[langId];
  const sourceCode = files.map(f => f.content).join('\n\n');

  const res = await fetch(
    'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': JUDGE0_KEY!,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      body: JSON.stringify({ source_code: sourceCode, language_id: languageId, stdin }),
    }
  );

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Judge0 error: ${res.status} — ${body}`);
  }

  const data = await res.json();
  const exitCode = data.exit_code ?? (data.status?.id === 3 ? 0 : 1);

  return {
    stdout: data.stdout ?? '',
    stderr: data.stderr ?? data.compile_output ?? '',
    exitCode,
    compile_output: data.compile_output ?? '',
  };
}

// --- Self-hosted Piston ---

interface PistonRuntime { language: string; version: string; aliases: string[]; }
let runtimesCache: PistonRuntime[] | null = null;

async function getPistonVersion(pistonName: string): Promise<string> {
  if (!runtimesCache) {
    const res = await fetch(`${PISTON_URL}/runtimes`);
    if (!res.ok) throw new Error(`Piston runtimes error: ${res.status}`);
    runtimesCache = await res.json();
  }
  const match = runtimesCache!.find(
    r => r.language === pistonName || r.aliases?.includes(pistonName)
  );
  if (!match) throw new Error(`Runtime not found: ${pistonName}`);
  return match.version;
}

async function executePiston(
  pistonName: string,
  files: PistonFile[],
  stdin = ''
): Promise<ExecutionResult> {
  const version = await getPistonVersion(pistonName);
  const res = await fetch(`${PISTON_URL}/execute`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language: pistonName, version, files, stdin }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Piston error: ${res.status} — ${body}`);
  }

  const data = await res.json();
  const run = data.run ?? {};
  const compile = data.compile ?? {};
  return {
    stdout: run.stdout ?? '',
    stderr: run.stderr ?? compile.stderr ?? '',
    exitCode: run.code ?? compile.code ?? -1,
    compile_output: compile.output ?? '',
  };
}

// --- Public entry point ---

export async function executeCode(
  langId: Language,
  pistonName: string,
  files: PistonFile[],
  stdin = ''
): Promise<ExecutionResult> {
  if (PISTON_URL) {
    return executePiston(pistonName, files, stdin);
  }
  if (JUDGE0_KEY) {
    return executeJudge0(langId, files, stdin);
  }
  throw new Error(
    'No hay proveedor de ejecución configurado. Añade VITE_JUDGE0_KEY (RapidAPI) o VITE_PISTON_URL (self-hosted) en el archivo .env'
  );
}
