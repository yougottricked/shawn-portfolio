"use client";

import React from "react";
import { LwicmsCard } from "./LwicmsCard";
import { AquaPondsCard } from "./AquaPondsCard";
import { RescueNetCard } from "./RescueNetCard";
import { Layers } from "lucide-react";

export function BentoGrid() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-sky-500/15 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-300 mb-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Work · 01:03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Systems &amp; Models, <span className="font-serif italic text-sky-300">in execution.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-0 font-normal">
          Interactive sandboxes demonstrating live inventory rules, AI, and cloud systems.
        </p>
      </div>

      {/* 3 Streamlined Project Cards */}
      <div className="space-y-6">
        <LwicmsCard />
        <AquaPondsCard />
        <RescueNetCard />
      </div>
    </section>
  );
}
