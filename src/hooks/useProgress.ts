import { useState, useCallback } from 'react';
import type { UserProgress, Language } from '../types';

const STORAGE_KEY = 'codepath_progress';

function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { completedLessons: [], failedLessons: [] };
  } catch {
    return { completedLessons: [], failedLessons: [] };
  }
}

function saveProgress(p: UserProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  const markCompleted = useCallback((topicId: string, lang: Language) => {
    setProgress(prev => {
      const key = `${topicId}-${lang}`;
      if (prev.completedLessons.includes(key)) return prev;
      const next = {
        ...prev,
        completedLessons: [...prev.completedLessons, key],
        failedLessons: prev.failedLessons.filter(k => k !== key),
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const markSkipped = useCallback((topicId: string, lang: Language) => {
    setProgress(prev => {
      const key = `${topicId}-${lang}`;
      if (prev.failedLessons.includes(key)) return prev;
      const next = { ...prev, failedLessons: [...prev.failedLessons, key] };
      saveProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback((topicId: string, lang: Language) => {
    return progress.completedLessons.includes(`${topicId}-${lang}`);
  }, [progress]);

  const isSkipped = useCallback((topicId: string, lang: Language) => {
    return progress.failedLessons.includes(`${topicId}-${lang}`);
  }, [progress]);

  const resetProgress = useCallback(() => {
    const empty = { completedLessons: [], failedLessons: [] };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  return { progress, markCompleted, markSkipped, isCompleted, isSkipped, resetProgress };
}
