import type { AIReviewResult } from '../types';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function reviewCode(
  code: string,
  exerciseDescription: string,
  expectedConcept: string,
  executionOutput: string,
  executionError: string,
  exitCode: number,
  apiKey: string
): Promise<AIReviewResult> {
  if (!apiKey) {
    return {
      passed: false,
      feedback: 'No hay API key de Gemini configurada. Añade VITE_GEMINI_API_KEY en el archivo .env',
      suggestions: ['Crea un archivo .env en la raíz del proyecto con: VITE_GEMINI_API_KEY=tu_key'],
    };
  }

  const executionSuccess = exitCode === 0 && !executionError;

  const prompt = `You are a programming exercise reviewer. Analyze the student's code submission.

## Exercise
${exerciseDescription}

## What the student should demonstrate
${expectedConcept}

## Student's code
\`\`\`
${code}
\`\`\`

## Execution result
- Exit code: ${exitCode}
- Output: ${executionOutput || '(no output)'}
- Error: ${executionError || '(no error)'}
- Execution: ${executionSuccess ? 'SUCCESS' : 'FAILED'}

## Your task
1. Check if the code compiles/runs correctly
2. Check if the student used the CORRECT approach/concept for this lesson (e.g., if it's a loops exercise, they must use an actual loop, not manual repetition)
3. Check if the output is reasonable for the exercise

Respond ONLY with valid JSON (no markdown, no code blocks):
{
  "passed": boolean,
  "feedback": "Brief explanation in Spanish (2-3 sentences) of what the student did right or wrong",
  "suggestions": ["improvement 1 in Spanish", "improvement 2 in Spanish"]
}

Be strict about the expected concept. If the exercise requires a specific construct (loop, recursion, OOP, etc.) and the student didn't use it, mark as failed.`;

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 512 },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  try {
    // Strip any accidental markdown wrapping
    const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(clean) as AIReviewResult;
  } catch {
    return {
      passed: false,
      feedback: `No se pudo analizar la respuesta de la IA. Respuesta: ${text.slice(0, 200)}`,
      suggestions: ['Intenta de nuevo'],
    };
  }
}
