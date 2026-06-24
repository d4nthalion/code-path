import Editor from '@monaco-editor/react';
import type { EditorFile } from '../hooks/useEditor';
import type { Theme } from '../types';

interface CodeEditorProps {
  file: EditorFile;
  onChange: (content: string) => void;
  theme: Theme;
}

const DARK_THEME_ID = 'cyber-dark';
const LIGHT_THEME_ID = 'cyber-light';

function defineThemes(monaco: any) {
  monaco.editor.defineTheme(DARK_THEME_ID, {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '4a6a8a', fontStyle: 'italic' },
      { token: 'keyword', foreground: '22d3ee', fontStyle: 'bold' },
      { token: 'string', foreground: '2dd4bf' },
      { token: 'number', foreground: '60a5fa' },
      { token: 'type', foreground: '38bdf8' },
      { token: 'function', foreground: '34d399' },
      { token: 'variable', foreground: 'e2e8f0' },
    ],
    colors: {
      'editor.background': '#0a1628',
      'editor.foreground': '#e2e8f0',
      'editor.lineHighlightBackground': '#0d1e35',
      'editor.selectionBackground': '#1e3a5f80',
      'editor.inactiveSelectionBackground': '#1e3a5f40',
      'editorLineNumber.foreground': '#2a4a6a',
      'editorLineNumber.activeForeground': '#22d3ee',
      'editorCursor.foreground': '#22d3ee',
      'editorIndentGuide.background1': '#1e3a5f30',
      'editorIndentGuide.activeBackground1': '#22d3ee40',
      'scrollbarSlider.background': '#1e3a5f60',
      'scrollbarSlider.hoverBackground': '#22d3ee30',
    },
  });

  monaco.editor.defineTheme(LIGHT_THEME_ID, {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '64748b', fontStyle: 'italic' },
      { token: 'keyword', foreground: '0891b2', fontStyle: 'bold' },
      { token: 'string', foreground: '0d9488' },
      { token: 'number', foreground: '2563eb' },
      { token: 'type', foreground: '0369a1' },
      { token: 'function', foreground: '059669' },
    ],
    colors: {
      'editor.background': '#f0f9ff',
      'editor.foreground': '#0f172a',
      'editor.lineHighlightBackground': '#e0f2fe',
      'editor.selectionBackground': '#bae6fd80',
      'editorLineNumber.foreground': '#94a3b8',
      'editorLineNumber.activeForeground': '#0891b2',
      'editorCursor.foreground': '#0891b2',
    },
  });
}

export function CodeEditor({ file, onChange, theme }: CodeEditorProps) {
  const dark = theme === 'dark';

  return (
    <Editor
      height="100%"
      language={file.language}
      value={file.content}
      theme={dark ? DARK_THEME_ID : LIGHT_THEME_ID}
      onChange={val => onChange(val ?? '')}
      beforeMount={defineThemes}
      options={{
        fontSize: 14,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontLigatures: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: 'on',
        renderLineHighlight: 'line',
        tabSize: 2,
        automaticLayout: true,
        padding: { top: 12, bottom: 12 },
        smoothScrolling: true,
        cursorBlinking: 'smooth',
        cursorSmoothCaretAnimation: 'on',
        bracketPairColorization: { enabled: true },
        guides: { indentation: true, bracketPairs: true },
        suggest: { showKeywords: true },
        wordWrap: 'on',
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
      }}
    />
  );
}
