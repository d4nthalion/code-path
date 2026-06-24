import type { Lesson } from '../types';
import type { Theme } from '../types';

interface TheoryPanelProps {
  lesson: Lesson;
  theme: Theme;
}

export function TheoryPanel({ lesson, theme }: TheoryPanelProps) {
  const dark = theme === 'dark';

  return (
    <div className={`h-full overflow-y-auto p-5 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
      <h2 className={`text-lg font-semibold font-mono mb-1 ${dark ? 'text-cyan-400' : 'text-cyan-700'}`}>
        {lesson.title}
      </h2>
      <p className={`text-sm mb-4 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
        {lesson.description}
      </p>
      <div
        className="theory-content text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: lesson.theory }}
        style={{
          ['--theory-code-bg' as string]: dark ? '#0d1e35' : '#e0f2fe',
          ['--theory-code-color' as string]: dark ? '#22d3ee' : '#0e7490',
          ['--theory-h-color' as string]: dark ? '#e2e8f0' : '#0f172a',
          ['--theory-pre-bg' as string]: dark ? '#0a1628' : '#f0f9ff',
          ['--theory-border' as string]: dark ? '#1e3a5f' : '#bae6fd',
        }}
      />
      <style>{`
        .theory-content h2 {
          color: var(--theory-h-color);
          font-size: 1rem;
          font-weight: 600;
          margin: 1.25rem 0 0.5rem;
          padding-bottom: 0.25rem;
          border-bottom: 1px solid var(--theory-border);
        }
        .theory-content p {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .theory-content code {
          background: var(--theory-code-bg);
          color: var(--theory-code-color);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82em;
        }
        .theory-content pre {
          background: var(--theory-pre-bg);
          border: 1px solid var(--theory-border);
          border-radius: 8px;
          padding: 0.875rem 1rem;
          margin: 0.75rem 0;
          overflow-x: auto;
        }
        .theory-content pre code {
          background: none;
          padding: 0;
          color: var(--theory-code-color);
          font-size: 0.8rem;
          line-height: 1.6;
        }
        .theory-content ul {
          padding-left: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .theory-content li {
          margin-bottom: 0.3rem;
        }
        .theory-content strong {
          color: var(--theory-h-color);
        }
      `}</style>
    </div>
  );
}
