import { useState } from 'react';
import { FilePlus, Trash2, FileCode } from 'lucide-react';
import type { EditorFile } from '../hooks/useEditor';
import type { Theme } from '../types';

interface FileExplorerProps {
  files: EditorFile[];
  activeFile: string;
  onSelect: (name: string) => void;
  onAdd: (name: string) => void;
  onDelete: (name: string) => void;
  theme: Theme;
}

export function FileExplorer({ files, activeFile, onSelect, onAdd, onDelete, theme }: FileExplorerProps) {
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const dark = theme === 'dark';

  function handleAdd() {
    const name = newName.trim();
    if (name) {
      onAdd(name);
      setNewName('');
      setAdding(false);
    }
  }

  return (
    <div className={`h-full flex flex-col border-r text-xs font-mono ${
      dark ? 'bg-[#0d1424] border-[#1e3a5f]' : 'bg-[#e8f4ff] border-[#93c5fd]'
    }`}>
      <div className={`px-3 py-2 flex items-center justify-between border-b ${
        dark ? 'border-[#1e3a5f] text-slate-500' : 'border-[#93c5fd] text-slate-500'
      }`}>
        <span className="uppercase tracking-wider text-[10px]">Archivos</span>
        <button
          onClick={() => setAdding(true)}
          title="Nuevo archivo"
          className={`p-0.5 rounded cursor-pointer transition-colors ${
            dark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
          }`}
        >
          <FilePlus size={13} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {files.map(file => (
          <div
            key={file.name}
            onClick={() => onSelect(file.name)}
            className={`flex items-center gap-1.5 px-3 py-1.5 cursor-pointer group transition-colors ${
              file.name === activeFile
                ? dark
                  ? 'bg-cyan-950/40 text-cyan-300'
                  : 'bg-cyan-100 text-cyan-700'
                : dark
                  ? 'text-slate-400 hover:bg-[#111827] hover:text-slate-200'
                  : 'text-slate-600 hover:bg-[#dbeafe] hover:text-slate-800'
            }`}
          >
            <FileCode size={12} className="shrink-0" />
            <span className="flex-1 truncate">{file.name}</span>
            {files.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); onDelete(file.name); }}
                className={`opacity-0 group-hover:opacity-100 p-0.5 rounded transition-opacity cursor-pointer ${
                  dark ? 'hover:text-red-400' : 'hover:text-red-500'
                }`}
              >
                <Trash2 size={11} />
              </button>
            )}
          </div>
        ))}
      </div>

      {adding && (
        <div className={`p-2 border-t ${dark ? 'border-[#1e3a5f]' : 'border-[#93c5fd]'}`}>
          <input
            autoFocus
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleAdd();
              if (e.key === 'Escape') { setAdding(false); setNewName(''); }
            }}
            placeholder="archivo.ext"
            className={`w-full text-xs font-mono px-2 py-1 rounded border outline-none ${
              dark
                ? 'bg-[#0a0f1a] border-[#1e3a5f] text-slate-200 focus:border-cyan-600'
                : 'bg-white border-[#93c5fd] text-slate-800 focus:border-cyan-500'
            }`}
          />
        </div>
      )}
    </div>
  );
}
