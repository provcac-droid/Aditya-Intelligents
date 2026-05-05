import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { GEMS, Gem } from "../types";

interface DashboardProps {
  onSelectGem: (gem: Gem) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectGem }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-8 max-w-6xl mx-auto w-full"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles size={12} />
          Platform Live
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Welcome to <span className="text-indigo-600">Academic Intelligence</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          Empower your academic journey with specialized AI models designed specifically for Aditya University's unique standards and workflows.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GEMS.map((gem, index) => (
          <motion.div
            key={gem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => onSelectGem(gem)}
            className="group cursor-pointer bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 flex flex-col h-full"
          >
            <div className={`w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${gem.color}`}>
              <gem.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">{gem.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
              {gem.description}
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
              Launch Agent
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
