import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface GlobalToastProps {
  toast: { title: string; message: string } | null;
  onClose: () => void;
}

export const GlobalToast: React.FC<GlobalToastProps> = ({ toast, onClose }) => {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-24 z-50 bg-white border border-slate-200 text-slate-900 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3.5 animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-sm">
      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
        <CheckCircle2 className="w-5 h-5 text-blue-600" />
      </div>
      <div className="flex-1 pr-2">
        <h4 className="text-xs font-bold text-slate-900 font-heading">{toast.title}</h4>
        <p className="text-[11px] text-slate-600 leading-tight mt-0.5">{toast.message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
