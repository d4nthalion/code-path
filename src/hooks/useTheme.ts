import { useState, useEffect } from 'react';
import type { Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('codepath_theme') as Theme) ?? 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    localStorage.setItem('codepath_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return { theme, toggleTheme };
}
