import React from 'react';
import { LayoutDashboard, LogOut, Settings, HelpCircle, Sparkles } from "lucide-react";
import { GEMS, GemId } from "../types";

interface NavbarProps {
  activeGemId: GemId | 'dashboard';
  onSelectGem: (id: GemId | 'dashboard') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeGemId, onSelectGem }) => {
  return (
    <aside className="w-64 bg-white text-slate-600 flex flex-col h-full shrink-0 border-r border-slate-200">
      {/* Brand */}
      <div className="p-6 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/10">
            <Sparkles size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-base tracking-tight leading-none">Aditya</span>
            <span className="text-indigo-600 text-xs font-bold tracking-wider uppercase mt-1">Intelligems</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-1.5 custom-scrollbar">
        <button
          onClick={() => onSelectGem('dashboard')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
            activeGemId === 'dashboard' 
              ? 'bg-indigo-50 text-indigo-700' 
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <LayoutDashboard size={18} className={activeGemId === 'dashboard' ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-700'} />
          Dashboard
        </button>

        <div className="pt-6 pb-2 px-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Academic Suite</span>
        </div>

        {GEMS.map((gem) => (
          <button
            key={gem.id}
            onClick={() => onSelectGem(gem.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
              activeGemId === gem.id 
                ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <div className={`shrink-0 transition-colors ${activeGemId === gem.id ? 'text-indigo-600' : gem.color} opacity-80 group-hover:opacity-100`}>
              <gem.icon size={18} />
            </div>
            <span className="truncate">{gem.title}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Nav */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white/50 transition-all">
          <HelpCircle size={18} />
          Help Center
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all mt-4">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
