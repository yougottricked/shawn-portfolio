"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { Terminal, ShieldCheck } from "lucide-react";

export function ArsenalGrid() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="arsenal" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-sky-500/15 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-300 mb-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Technical Arsenal, <span className="font-serif italic text-teal-300">verified.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-0 font-normal">
          High-concurrency data, empirical AI, and cloud architectures.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                isActive
                  ? "bg-sky-500/20 border border-sky-400/40 text-sky-100 shadow-sm"
                  : "bg-[#0e202e] border border-sky-500/10 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {SKILL_CATEGORIES[activeTab].items.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#0e202e]/60 border border-sky-500/10 hover:border-sky-500/25 transition-all flex items-start justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-slate-100">
                  {skill.name}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-teal-300 border border-sky-500/20">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                {skill.note}
              </p>
            </div>
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5 opacity-80" />
          </div>
        ))}
      </div>
    </section>
  );
}
