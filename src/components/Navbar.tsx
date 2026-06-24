import { Link } from 'react-router-dom';
import { Sun, Moon, Terminal } from 'lucide-react';
import type { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const dark = theme === 'dark';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 border-b backdrop-blur-md ${
      dark
        ? 'bg-[#0a0f1a]/90 border-[#1e3a5f]'
        : 'bg-[#f0f7ff]/90 border-[#93c5fd]'
    }`}>
      <Link
        to="/"
        className="flex items-center gap-2 cursor-pointer"
      >
        <Terminal
          size={22}
          className={dark ? 'text-cyan-400' : 'text-cyan-600'}
        />
        <span className={`font-mono font-semibold text-lg tracking-tight ${
          dark ? 'text-cyan-400' : 'text-cyan-700'
        }`}>
          CodePath
        </span>
        <span className={`text-xs font-mono px-1.5 py-0.5 rounded border ${
          dark
            ? 'border-cyan-800 text-cyan-600 bg-cyan-950/40'
            : 'border-cyan-300 text-cyan-700 bg-cyan-50'
        }`}>
          BETA
        </span>
      </Link>

      <div className="flex-1" />

      <button
        onClick={onToggleTheme}
        aria-label={dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        className={`p-2 rounded-lg cursor-pointer transition-colors ${
          dark
            ? 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-950/40'
            : 'text-slate-600 hover:text-cyan-600 hover:bg-cyan-100'
        }`}
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
}
