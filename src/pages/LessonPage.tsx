import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code2 } from 'lucide-react';
import { useState } from 'react';
import { TOPIC_MAP } from '../data/curriculum';
import { LANGUAGES } from '../data/languages';
import { TheoryPanel } from '../components/TheoryPanel';
import { ExerciseIDE } from '../components/ExerciseIDE';
import { useProgress } from '../hooks/useProgress';
import type { Language, Theme } from '../types';

interface LessonPageProps {
  theme: Theme;
}

type Tab = 'theory' | 'exercises';

export function LessonPage({ theme }: LessonPageProps) {
  const { topicId, langId } = useParams<{ topicId: string; langId: string }>();
  const navigate = useNavigate();
  const { markCompleted, markSkipped, isCompleted } = useProgress();
  const [tab, setTab] = useState<Tab>('theory');

  const dark = theme === 'dark';
  const topic = topicId ? TOPIC_MAP[topicId] : null;
  const lang = langId as Language;
  const lesson = topic?.lessons[lang];
  const langConfig = LANGUAGES[lang];

  if (!topic || !lesson || !langConfig) {
    return (
      <div className={`flex items-center justify-center h-screen ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        Lección no encontrada.{' '}
        <button onClick={() => navigate('/')} className="ml-2 underline cursor-pointer">Volver</button>
      </div>
    );
  }

  const completed = isCompleted(topic.id, lang);

  const tabBtn = (t: Tab, label: string, Icon: any) => (
    <button
      onClick={() => setTab(t)}
      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
        tab === t
          ? dark
            ? 'border-cyan-400 text-cyan-400'
            : 'border-cyan-600 text-cyan-600'
          : dark
            ? 'border-transparent text-slate-500 hover:text-slate-300'
            : 'border-transparent text-slate-400 hover:text-slate-600'
      }`}
    >
      <Icon size={14} />
      {label}
    </button>
  );

  return (
    <div className={`flex flex-col h-screen pt-14 ${dark ? 'bg-[#0a0f1a]' : 'bg-[#f0f7ff]'}`}>
      {/* Lesson header */}
      <div className={`px-4 py-3 border-b flex items-center gap-3 ${
        dark ? 'bg-[#0d1424] border-[#1e3a5f]' : 'bg-[#e8f4ff] border-[#93c5fd]'
      }`}>
        <button
          onClick={() => navigate('/')}
          className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
            dark ? 'text-slate-500 hover:text-cyan-400 hover:bg-cyan-950/40' : 'text-slate-400 hover:text-cyan-600 hover:bg-cyan-100'
          }`}
        >
          <ArrowLeft size={16} />
        </button>

        <div className="flex-1 min-w-0">
          <div className={`text-[10px] font-mono uppercase tracking-wider ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            {topic.title}
          </div>
          <h1 className={`text-sm font-semibold truncate ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
            {lesson.title}
          </h1>
        </div>

        <span
          className="text-xs font-mono font-bold px-2 py-1 rounded border"
          style={{
            color: langConfig.color,
            backgroundColor: `${langConfig.color}15`,
            borderColor: `${langConfig.color}40`,
          }}
        >
          {langConfig.icon}
        </span>
      </div>

      {/* Tabs */}
      <div className={`flex px-4 border-b ${dark ? 'border-[#1e3a5f]' : 'border-[#93c5fd]'}`}>
        {tabBtn('theory', 'Teoría', BookOpen)}
        {tabBtn('exercises', `Ejercicios (${lesson.exercises.length})`, Code2)}
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0">
        {tab === 'theory' ? (
          <TheoryPanel lesson={lesson} theme={theme} />
        ) : (
          <ExerciseIDE
            exercises={lesson.exercises}
            lang={lang}
            theme={theme}
            isCompleted={completed}
            onComplete={() => markCompleted(topic.id, lang)}
            onSkip={() => markSkipped(topic.id, lang)}
          />
        )}
      </div>
    </div>
  );
}
