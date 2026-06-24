export type Language = 'javascript' | 'python' | 'java' | 'cpp' | 'csharp';

export interface LanguageConfig {
  id: Language;
  name: string;
  icon: string;
  color: string;
  pistonName: string;
  pistonVersion: string;
  fileExtension: string;
  defaultFile: string;
  monacoLang: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  instructions: string;
  starterCode: string;
  expectedConcept: string; // what the AI checks for
  hints: string[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  theory: string; // markdown-like HTML string
  exercises: Exercise[];
  topics: string[]; // tags
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  lessons: { [lang in Language]?: Lesson };
}

export interface UserProgress {
  completedLessons: string[]; // "topicId-langId"
  failedLessons: string[];    // skipped despite failing
}

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  compile_output?: string;
}

export interface AIReviewResult {
  passed: boolean;
  feedback: string;
  suggestions: string[];
}

export type Theme = 'dark' | 'light';
