import React from 'react';
import { LayoutDashboard, LogOut, Settings, HelpCircle, Sparkles } from "lucide-react";
import { GEMS, GemId } from "../types";

interface NavbarProps {
  activeGemId: GemId | 'dashboard';
  onSelectGem: (id: GemId | 'dashboard') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeGemId, onSelectGem }) => {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-full shrink-0">
      {/* Brand */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Aditya <span className="text-indigo-400">Gems</span></span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
        <button
          onClick={() => onSelectGem('dashboard')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
            activeGemId === 'dashboard' 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <div className="pt-4 pb-2 px-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Gem Ecosystem</span>
        </div>

        {GEMS.map((gem) => (
          <button
            key={gem.id}
            onClick={() => onSelectGem(gem.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              activeGemId === gem.id 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <gem.icon size={18} />
            <span className="truncate">{gem.title}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Nav */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">
          <HelpCircle size={18} />
          Help Center
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-all mt-4">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
