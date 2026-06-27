import { useState, useCallback, useEffect } from 'react';
import type { Language } from '../types';
import { LANGUAGES } from '../data/languages';

export interface EditorFile {
  name: string;
  content: string;
  language: string;
}

export function useEditor(lang: Language, starterCode: string) {
  const langConfig = LANGUAGES[lang];

  const [files, setFiles] = useState<EditorFile[]>([
    { name: langConfig.defaultFile, content: starterCode, language: langConfig.monacoLang },
  ]);
  const [activeFile, setActiveFile] = useState(langConfig.defaultFile);

  const activeContent = files.find(f => f.name === activeFile)?.content ?? '';

  // Reset editor when starterCode or lang changes (e.g. switching exercises)
  useEffect(() => {
    setFiles([{ name: langConfig.defaultFile, content: starterCode, language: langConfig.monacoLang }]);
    setActiveFile(langConfig.defaultFile);
  }, [starterCode, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateFile = useCallback((name: string, content: string) => {
    setFiles(prev => prev.map(f => f.name === name ? { ...f, content } : f));
  }, []);

  const addFile = useCallback((name: string) => {
    if (files.find(f => f.name === name)) return;
    const ext = name.split('.').pop() ?? '';
    const monacoLang = ext === 'js' ? 'javascript' : ext === 'py' ? 'python' : ext === 'java' ? 'java' : ext === 'cpp' || ext === 'h' ? 'cpp' : ext === 'cs' ? 'csharp' : 'plaintext';
    setFiles(prev => [...prev, { name, content: '', language: monacoLang }]);
    setActiveFile(name);
  }, [files]);

  const deleteFile = useCallback((name: string) => {
    if (files.length <= 1) return;
    setFiles(prev => prev.filter(f => f.name !== name));
    if (activeFile === name) {
      setActiveFile(files.find(f => f.name !== name)?.name ?? files[0].name);
    }
  }, [files, activeFile]);

  const resetToStarter = useCallback(() => {
    setFiles([{ name: langConfig.defaultFile, content: starterCode, language: langConfig.monacoLang }]);
    setActiveFile(langConfig.defaultFile);
  }, [langConfig, starterCode]);

  return {
    files,
    activeFile,
    activeContent,
    setActiveFile,
    updateFile,
    addFile,
    deleteFile,
    resetToStarter,
  };
}
