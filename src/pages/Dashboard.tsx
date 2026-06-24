import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Lock, Cpu, GitBranch, Repeat, List, Code2, Box, Zap } from 'lucide-react';
import { TOPICS } from '../data/curriculum';
import { LANGUAGE_LIST } from '../data/languages';
import { useProgress } from '../hooks/useProgress';
import type { Language, Theme } from '../types';

const TOPIC_ICONS: Record<string, any> = {
  cpu: Cpu,
  'git-branch': GitBranch,
  repeat: Repeat,
  list: List,
  'code-2': Code2,
  box: Box,
  zap: Zap,
};

interface DashboardProps {
  theme: Theme;
}

export function Dashboard({ theme }: DashboardProps) {
  const navigate = useNavigate();
  const { isCompleted, isSkipped } = useProgress();
  const dark = theme === 'dark';

  const [selectedLang, setSelectedLang] = React.useState<Language>('javascript');

  return (
    <div className={`min-h-screen pt-14 ${dark ? 'bg-[#0a0f1a]' : 'bg-[#f0f7ff]'}`}>
      {/* Hero */}
      <div className={`border-b py-10 px-6 text-center ${dark ? 'border-[#1e3a5f]' : 'border-[#93c5fd]'}`}>
        <h1 className={`text-3xl font-bold font-mono mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-700'}`}
          style={{ textShadow: dark ? '0 0 30px #22d3ee40' : 'none' }}>
          Aprende a programar
        </h1>
        <p className={`text-sm max-w-md mx-auto ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
          Teoría concisa + ejercicios prácticos con IDE integrado y corrección por IA.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Language selector */}
        <div className="mb-8">
          <h2 className={`text-xs font-mono uppercase tracking-wider mb-3 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
            Lenguaje
          </h2>
          <div className="flex flex-wrap gap-2">
            {LANGUAGE_LIST.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all cursor-pointer ${
                  selectedLang === lang.id
                    ? dark
                      ? 'border-cyan-500 bg-cyan-950/50 text-cyan-300 shadow-[0_0_12px_#22d3ee20]'
                      : 'border-cyan-500 bg-cyan-50 text-cyan-700'
                    : dark
                      ? 'border-[#1e3a5f] text-slate-400 hover:border-cyan-800 hover:text-slate-200'
                      : 'border-[#93c5fd] text-slate-500 hover:border-cyan-400 hover:text-slate-700'
                }`}
              >
                <span
                  className="text-xs font-mono font-bold px-1 py-0.5 rounded"
                  style={{ color: lang.color, backgroundColor: `${lang.color}20` }}
                >
                  {lang.icon}
                </span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Topics grid */}
        <div>
          <h2 className={`text-xs font-mono uppercase tracking-wider mb-3 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
            Temario
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TOPICS.map((topic, idx) => {
              const Icon = TOPIC_ICONS[topic.icon] ?? Code2;
              const hasLesson = !!topic.lessons[selectedLang];
              const completed = isCompleted(topic.id, selectedLang);
              const skipped = isSkipped(topic.id, selectedLang);

              return (
                <button
                  key={topic.id}
                  onClick={() => hasLesson && navigate(`/lesson/${topic.id}/${selectedLang}`)}
                  disabled={!hasLesson}
                  className={`group text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    !hasLesson
                      ? dark
                        ? 'border-[#1e3a5f] opacity-40 cursor-not-allowed'
                        : 'border-[#93c5fd] opacity-40 cursor-not-allowed'
                      : completed
                        ? dark
                          ? 'border-green-800/60 bg-green-950/20 hover:border-green-600/80 hover:shadow-[0_0_16px_#16a34a15]'
                          : 'border-green-300 bg-green-50 hover:border-green-400'
                        : skipped
                          ? dark
                            ? 'border-yellow-800/60 bg-yellow-950/20 hover:border-yellow-600/80'
                            : 'border-yellow-300 bg-yellow-50 hover:border-yellow-400'
                          : dark
                            ? 'border-[#1e3a5f] bg-[#0d1424] hover:border-cyan-700 hover:shadow-[0_0_16px_#22d3ee10]'
                            : 'border-[#93c5fd] bg-white hover:border-cyan-400 hover:shadow-[0_0_16px_#0891b215]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-1.5 rounded-lg ${
                      completed
                        ? dark ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-600'
                        : dark ? 'bg-cyan-950/40 text-cyan-500' : 'bg-cyan-50 text-cyan-600'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`text-[10px] font-mono ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {completed && <CheckCircle size={13} className={dark ? 'text-green-400' : 'text-green-500'} />}
                      {skipped && !completed && <AlertTriangle size={13} className={dark ? 'text-yellow-400' : 'text-yellow-500'} />}
                      {!hasLesson && <Lock size={13} className={dark ? 'text-slate-600' : 'text-slate-400'} />}
                    </div>
                  </div>
                  <h3 className={`font-semibold text-sm mb-1 ${
                    dark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-cyan-700'
                  } transition-colors`}>
                    {topic.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
                    {topic.description}
                  </p>
                  {hasLesson && (
                    <div className={`mt-2 text-[10px] font-mono ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                      {topic.lessons[selectedLang]?.exercises.length ?? 0} ejercicios
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Need React import for useState
import React from 'react';
