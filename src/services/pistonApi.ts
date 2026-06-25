import type { ExecutionResult } from '../types';
import type { Language } from '../types';
import { JUDGE0_LANGUAGE_IDS } from '../data/languages';

export interface PistonFile {
  name: string;
  content: string;
}

// Piston self-hosted (local Docker)
const PISTON_PROXY = '/piston';
const USE_PISTON = !!import.meta.env.VITE_PISTON_URL;

// Judge0 via RapidAPI
const JUDGE0_KEY = import.meta.env.VITE_JUDGE0_KEY as string | undefined;

// JDoodle
const JDOODLE_CLIENT_ID = import.meta.env.VITE_JDOODLE_CLIENT_ID as string | undefined;
const JDOODLE_CLIENT_SECRET = import.meta.env.VITE_JDOODLE_CLIENT_SECRET as string | undefined;

// JDoodle language configs
const JDOODLE_LANGUAGES: Record<Language, { language: string; versionIndex: string }> = {
  javascript: { language: 'nodejs',  versionIndex: '4' },
  python:     { language: 'python3', versionIndex: '4' },
  java:       { language: 'java',    versionIndex: '4' },
  cpp:        { language: 'cpp17',   versionIndex: '1' },
  csharp:     { language: 'csharp',  versionIndex: '4' },
};

// --- Piston ---

interface PistonRuntime { language: string; version: string; aliases: string[]; }
let runtimesCache: PistonRuntime[] | null = null;

async function getPistonVersion(pistonName: string): Promise<string> {
  if (!runtimesCache) {
    const res = await fetch(`${PISTON_PROXY}/runtimes`);
    if (!res.ok) throw new Error(`Piston runtimes error: ${res.status}`);
    runtimesCache = await res.json();
  }
  const match = runtimesCache!.find(
    r => r.language === pistonName || r.aliases?.includes(pistonName)
  );
  if (!match) throw new Error(`Runtime no instalado: ${pistonName}. Ejecuta start.bat para instalar los runtimes.`);
  return match.version;
}

async function executePiston(pistonName: string, files: PistonFile[], stdin = ''): Promise<ExecutionResult> {
  const version = await getPistonVersion(pistonName);
  const res = await fetch(`${PISTON_PROXY}/execute`, {
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

// --- JDoodle ---

async function executeJDoodle(langId: Language, files: PistonFile[], stdin = ''): Promise<ExecutionResult> {
  const cfg = JDOODLE_LANGUAGES[langId];
  const script = files.map(f => f.content).join('\n\n');

  const res = await fetch('https://api.jdoodle.com/v1/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientId: JDOODLE_CLIENT_ID,
      clientSecret: JDOODLE_CLIENT_SECRET,
      script,
      language: cfg.language,
      versionIndex: cfg.versionIndex,
      stdin,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`JDoodle error: ${res.status} — ${body}`);
  }

  const data = await res.json();
  // JDoodle returns { output, statusCode, memory, cpuTime }
  // statusCode 200 = OK, 429 = rate limit, etc.
  const output: string = data.output ?? '';
  const isError = data.statusCode !== 200 || output.toLowerCase().startsWith('error');

  return {
    stdout: isError ? '' : output,
    stderr: isError ? output : '',
    exitCode: isError ? 1 : 0,
    compile_output: '',
  };
}

// --- Judge0 ---

async function executeJudge0(langId: Language, files: PistonFile[], stdin = ''): Promise<ExecutionResult> {
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

// --- Public entry point (priority: Piston > JDoodle > Judge0) ---

export async function executeCode(
  langId: Language,
  pistonName: string,
  files: PistonFile[],
  stdin = ''
): Promise<ExecutionResult> {
  if (USE_PISTON) return executePiston(pistonName, files, stdin);
  if (JDOODLE_CLIENT_ID && JDOODLE_CLIENT_SECRET) return executeJDoodle(langId, files, stdin);
  if (JUDGE0_KEY) return executeJudge0(langId, files, stdin);
  throw new Error(
    'No hay proveedor de ejecución configurado. Añade VITE_JDOODLE_CLIENT_ID y VITE_JDOODLE_CLIENT_SECRET en el .env'
  );
}
