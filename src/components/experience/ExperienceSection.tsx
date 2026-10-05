"use client";

import React from "react";
import { EXPERIENCES } from "@/lib/constants";
import { Briefcase, Building2, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-sky-500/15 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-300 mb-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Industry <span className="font-serif italic text-teal-300">Experience.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-0 font-normal">
          Enterprise IT operations and commercial frontend delivery.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0e202e]/70 border border-sky-500/15 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-xs text-sky-300/80 font-normal font-mono">
                      @ {exp.company}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1 sm:mt-0">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                <span>
                  {exp.period} · {exp.duration}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3 ml-10">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{exp.location}</span>
              </div>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-sky-500/10 text-teal-300 border border-sky-500/15">
                {exp.type} ({exp.workplace})
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 ml-10 max-w-2xl font-normal">
              {exp.description}
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-1.5 ml-10">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#08141e] border border-sky-500/15 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
