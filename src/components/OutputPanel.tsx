import { CheckCircle, XCircle, AlertTriangle, Loader } from 'lucide-react';
import type { ExecutionResult, AIReviewResult } from '../types';
import type { Theme } from '../types';

interface OutputPanelProps {
  execution: ExecutionResult | null;
  review: AIReviewResult | null;
  isRunning: boolean;
  isReviewing: boolean;
  theme: Theme;
}

export function OutputPanel({ execution, review, isRunning, isReviewing, theme }: OutputPanelProps) {
  const dark = theme === 'dark';

  const base = dark
    ? 'bg-[#0a1628] text-slate-300 border-[#1e3a5f]'
    : 'bg-[#f0f9ff] text-slate-700 border-[#93c5fd]';

  return (
    <div className={`h-full flex flex-col border-t ${base}`}>
      {/* Execution output */}
      <div className={`flex-1 overflow-y-auto p-3 font-mono text-xs leading-relaxed ${
        dark ? 'border-b border-[#1e3a5f]' : 'border-b border-[#93c5fd]'
      }`}>
        <div className={`text-[10px] uppercase tracking-wider mb-2 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
          Salida
        </div>

        {isRunning && (
          <div className="flex items-center gap-2 text-cyan-400">
            <Loader size={12} className="animate-spin" />
            <span>Ejecutando...</span>
          </div>
        )}

        {!isRunning && !execution && (
          <span className={dark ? 'text-slate-600' : 'text-slate-400'}>
            Pulsa "Ejecutar" para ver la salida
          </span>
        )}

        {execution && !isRunning && (
          <>
            {execution.stdout && (
              <pre className={`whitespace-pre-wrap ${dark ? 'text-green-400' : 'text-green-700'}`}>
                {execution.stdout}
              </pre>
            )}
            {execution.stderr && (
              <pre className={`whitespace-pre-wrap ${dark ? 'text-red-400' : 'text-red-600'}`}>
                {execution.stderr}
              </pre>
            )}
            {execution.compile_output && !execution.stderr && (
              <pre className={`whitespace-pre-wrap ${dark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                {execution.compile_output}
              </pre>
            )}
            {!execution.stdout && !execution.stderr && (
              <span className={dark ? 'text-slate-500' : 'text-slate-400'}>
                (sin salida)
              </span>
            )}
            <div className={`mt-2 text-[10px] ${execution.exitCode === 0 ? 'text-green-500' : 'text-red-500'}`}>
              Exit code: {execution.exitCode}
            </div>
          </>
        )}
      </div>

      {/* AI Review */}
      <div className="flex-1 overflow-y-auto p-3 text-xs">
        <div className={`text-[10px] uppercase tracking-wider mb-2 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
          Revisión IA
        </div>

        {isReviewing && (
          <div className="flex items-center gap-2 text-cyan-400">
            <Loader size={12} className="animate-spin" />
            <span>Analizando código...</span>
          </div>
        )}

        {!isReviewing && !review && (
          <span className={dark ? 'text-slate-600' : 'text-slate-400'}>
            Pulsa "Corregir" para analizar tu solución
          </span>
        )}

        {review && !isReviewing && (
          <div className="space-y-2">
            <div className={`flex items-center gap-2 font-semibold ${
              review.passed
                ? dark ? 'text-green-400' : 'text-green-600'
                : dark ? 'text-red-400' : 'text-red-600'
            }`}>
              {review.passed
                ? <CheckCircle size={14} />
                : <XCircle size={14} />
              }
              {review.passed ? 'Ejercicio completado' : 'Necesita mejoras'}
            </div>

            <p className={`leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
              {review.feedback}
            </p>

            {review.suggestions.length > 0 && (
              <div>
                <div className={`flex items-center gap-1 mb-1 ${dark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  <AlertTriangle size={11} />
                  <span className="text-[10px] uppercase tracking-wider">Sugerencias</span>
                </div>
                <ul className="space-y-1">
                  {review.suggestions.map((s, i) => (
                    <li key={i} className={`flex gap-1.5 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className={dark ? 'text-cyan-600' : 'text-cyan-500'}>›</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
