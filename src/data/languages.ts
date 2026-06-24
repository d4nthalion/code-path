import type { Language, LanguageConfig } from '../types';

// Judge0 CE language IDs (RapidAPI)
// https://ce.judge0.com/languages/
export const JUDGE0_LANGUAGE_IDS: Record<Language, number> = {
  javascript: 63,  // Node.js 12.14.0
  python: 71,      // Python 3.8.1
  java: 62,        // Java (OpenJDK 13.0.1)
  cpp: 54,         // C++ (GCC 9.2.0)
  csharp: 51,      // C# (Mono 6.6.0.161)
};

export const LANGUAGES: Record<Language, LanguageConfig> = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    color: '#f7df1e',
    pistonName: 'javascript',
    pistonVersion: '18.15.0',
    fileExtension: 'js',
    defaultFile: 'main.js',
    monacoLang: 'javascript',
  },
  python: {
    id: 'python',
    name: 'Python',
    icon: 'PY',
    color: '#3776ab',
    pistonName: 'python',
    pistonVersion: '3.10.0',
    fileExtension: 'py',
    defaultFile: 'main.py',
    monacoLang: 'python',
  },
  java: {
    id: 'java',
    name: 'Java',
    icon: 'JV',
    color: '#ed8b00',
    pistonName: 'java',
    pistonVersion: '15.0.2',
    fileExtension: 'java',
    defaultFile: 'Main.java',
    monacoLang: 'java',
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    icon: 'C++',
    color: '#00599c',
    pistonName: 'c++',
    pistonVersion: '10.2.0',
    fileExtension: 'cpp',
    defaultFile: 'main.cpp',
    monacoLang: 'cpp',
  },
  csharp: {
    id: 'csharp',
    name: 'C#',
    icon: 'C#',
    color: '#239120',
    pistonName: 'csharp',
    pistonVersion: '6.12.0',
    fileExtension: 'cs',
    defaultFile: 'Program.cs',
    monacoLang: 'csharp',
  },
};

export const LANGUAGE_LIST = Object.values(LANGUAGES);
