import { useState } from 'react';
import { Play, Bot, RotateCcw, ChevronLeft, ChevronRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { FileExplorer } from './FileExplorer';
import { CodeEditor } from './CodeEditor';
import { OutputPanel } from './OutputPanel';
import { useEditor } from '../hooks/useEditor';
import { executeCode } from '../services/pistonApi';
import { reviewCode } from '../services/geminiApi';
import type { Exercise, Language, ExecutionResult, AIReviewResult } from '../types';
import type { Theme } from '../types';
import { LANGUAGES } from '../data/languages';

interface ExerciseIDEProps {
  exercises: Exercise[];
  lang: Language;
  theme: Theme;
  onComplete: () => void;
  onSkip: () => void;
  isCompleted: boolean;
}

export function ExerciseIDE({ exercises, lang, theme, onComplete, onSkip, isCompleted }: ExerciseIDEProps) {
  const [exerciseIdx, setExerciseIdx] = useState(0);
  const exercise = exercises[exerciseIdx];

  const { files, activeFile, setActiveFile, updateFile, addFile, deleteFile, resetToStarter } =
    useEditor(lang, exercise.starterCode);

  const [execution, setExecution] = useState<ExecutionResult | null>(null);
  const [review, setReview] = useState<AIReviewResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSkipDialog, setShowSkipDialog] = useState(false);

  const langConfig = LANGUAGES[lang];
  const dark = theme === 'dark';
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY ?? '';

  async function handleRun() {
    setIsRunning(true);
    setExecution(null);
    setReview(null);
    try {
      const result = await executeCode(lang, langConfig.pistonName, files.map(f => ({ name: f.name, content: f.content })));
      setExecution(result);
    } catch (e) {
      setExecution({ stdout: '', stderr: String(e), exitCode: -1 });
    } finally {
      setIsRunning(false);
    }
  }

  async function handleReview() {
    if (!execution) {
      await handleRun();
    }
    setIsReviewing(true);
    setReview(null);
    try {
      const result = await reviewCode(
        files.map(f => f.content).join('\n\n'),
        exercise.description + '\n' + exercise.instructions,
        exercise.expectedConcept,
        execution?.stdout ?? '',
        execution?.stderr ?? '',
        execution?.exitCode ?? -1,
        apiKey
      );
      setReview(result);
      if (result.passed && exerciseIdx === exercises.length - 1) {
        onComplete();
      }
    } catch (e) {
      setReview({ passed: false, feedback: `Error al contactar la IA: ${e}`, suggestions: [] });
    } finally {
      setIsReviewing(false);
    }
  }

  function handleNextExercise() {
    if (exerciseIdx < exercises.length - 1) {
      setExerciseIdx(i => i + 1);
      setExecution(null);
      setReview(null);
      setShowHint(false);
    }
  }

  function handlePrevExercise() {
    if (exerciseIdx > 0) {
      setExerciseIdx(i => i - 1);
      setExecution(null);
      setReview(null);
      setShowHint(false);
    }
  }

  const btnBase = `flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer`;

  return (
    <div className="h-full flex flex-col">
      {/* Exercise header */}
      <div className={`px-4 py-3 border-b flex items-start justify-between gap-4 ${
        dark ? 'bg-[#0d1424] border-[#1e3a5f]' : 'bg-[#e8f4ff] border-[#93c5fd]'
      }`}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`text-[10px] font-mono uppercase tracking-wider ${dark ? 'text-cyan-600' : 'text-cyan-600'}`}>
              Ejercicio {exerciseIdx + 1}/{exercises.length}
            </span>
            {isCompleted && (
              <CheckCircle size={12} className={dark ? 'text-green-400' : 'text-green-500'} />
            )}
          </div>
          <h3 className={`font-semibold text-sm truncate ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
            {exercise.title}
          </h3>
          <p className={`text-xs mt-0.5 line-clamp-2 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
            {exercise.instructions}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {exercise.hints.length > 0 && (
            <button
              onClick={() => setShowHint(h => !h)}
              className={`${btnBase} ${
                dark
                  ? 'bg-yellow-950/40 text-yellow-400 hover:bg-yellow-950/70 border border-yellow-900'
                  : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200'
              }`}
            >
              <AlertTriangle size={12} />
              Pista
            </button>
          )}
          {exerciseIdx > 0 && (
            <button onClick={handlePrevExercise} className={`${btnBase} ${dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}`}>
              <ChevronLeft size={14} />
            </button>
          )}
          {exerciseIdx < exercises.length - 1 && (
            <button onClick={handleNextExercise} className={`${btnBase} ${dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}`}>
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Hint */}
      {showHint && (
        <div className={`px-4 py-2 text-xs border-b ${
          dark
            ? 'bg-yellow-950/20 border-yellow-900/50 text-yellow-300'
            : 'bg-yellow-50 border-yellow-200 text-yellow-700'
        }`}>
          {exercise.hints.map((h, i) => (
            <div key={i} className="flex gap-1.5">
              <span className="opacity-60">›</span>
              {h}
            </div>
          ))}
        </div>
      )}

      {/* IDE area */}
      <div className="flex-1 flex min-h-0">
        {/* File explorer */}
        <div className="w-36 shrink-0">
          <FileExplorer
            files={files}
            activeFile={activeFile}
            onSelect={setActiveFile}
            onAdd={addFile}
            onDelete={deleteFile}
            theme={theme}
          />
        </div>

        {/* Editor + Output */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 min-h-0">
            <CodeEditor
              file={files.find(f => f.name === activeFile)!}
              onChange={content => updateFile(activeFile, content)}
              theme={theme}
            />
          </div>
          <div className="h-56 shrink-0">
            <OutputPanel
              execution={execution}
              review={review}
              isRunning={isRunning}
              isReviewing={isReviewing}
              theme={theme}
            />
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className={`px-4 py-2 border-t flex items-center gap-2 ${
        dark ? 'bg-[#0d1424] border-[#1e3a5f]' : 'bg-[#e8f4ff] border-[#93c5fd]'
      }`}>
        <button
          onClick={handleRun}
          disabled={isRunning}
          className={`${btnBase} ${
            dark
              ? 'bg-cyan-900/50 text-cyan-300 hover:bg-cyan-800/60 border border-cyan-800 disabled:opacity-50'
              : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 border border-cyan-300 disabled:opacity-50'
          }`}
        >
          <Play size={12} />
          Ejecutar
        </button>

        <button
          onClick={handleReview}
          disabled={isRunning || isReviewing}
          className={`${btnBase} ${
            dark
              ? 'bg-teal-900/50 text-teal-300 hover:bg-teal-800/60 border border-teal-800 disabled:opacity-50'
              : 'bg-teal-100 text-teal-700 hover:bg-teal-200 border border-teal-300 disabled:opacity-50'
          }`}
        >
          <Bot size={12} />
          Corregir con IA
        </button>

        <button
          onClick={resetToStarter}
          className={`${btnBase} ${
            dark
              ? 'text-slate-500 hover:text-slate-300'
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <RotateCcw size={12} />
          Resetear
        </button>

        <div className="flex-1" />

        {!isCompleted && (
          <button
            onClick={() => setShowSkipDialog(true)}
            className={`${btnBase} text-[11px] ${
              dark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Marcar como completado igualmente
          </button>
        )}
      </div>

      {/* Skip confirmation dialog */}
      {showSkipDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className={`rounded-xl border p-6 max-w-sm w-full mx-4 shadow-2xl ${
            dark
              ? 'bg-[#0d1424] border-[#1e3a5f]'
              : 'bg-white border-[#93c5fd]'
          }`}>
            <div className={`flex items-center gap-2 mb-3 ${dark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              <AlertTriangle size={18} />
              <h3 className="font-semibold">¿Continuar sin completar?</h3>
            </div>
            <p className={`text-sm mb-5 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              No has pasado la corrección de la IA para este ejercicio. ¿Seguro que quieres continuar de todas formas?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowSkipDialog(false)}
                className={`${btnBase} ${
                  dark
                    ? 'border border-[#1e3a5f] text-slate-400 hover:text-slate-200'
                    : 'border border-[#93c5fd] text-slate-600 hover:text-slate-800'
                }`}
              >
                Cancelar
              </button>
              <button
                onClick={() => { setShowSkipDialog(false); onSkip(); }}
                className={`${btnBase} ${
                  dark
                    ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-800 hover:bg-yellow-800/60'
                    : 'bg-yellow-100 text-yellow-700 border border-yellow-300 hover:bg-yellow-200'
                }`}
              >
                Continuar igualmente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
