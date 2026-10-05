"use client";

import React from "react";
import { CREDENTIALS } from "@/lib/constants";
import { GraduationCap, Award, FileText } from "lucide-react";

export function FieldNotes() {
  return (
    <section id="field-notes" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-sky-500/15 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-300 mb-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Field Notes &amp; Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Academic Track &amp; <span className="font-serif italic text-teal-300">Credentials.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-0 font-normal">
          BSc (Hons) Software Engineering at APU backed by empirical validation.
        </p>
      </div>

      {/* Timeline items */}
      <div className="space-y-3.5">
        {CREDENTIALS.map((cred, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#0e202e]/60 border border-sky-500/10 hover:border-sky-500/25 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                {idx === 0 ? (
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                ) : (
                  <Award className="w-4 h-4 text-teal-400" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium text-white">
                    {cred.title}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-sky-500/10 text-slate-400 border border-sky-500/15">
                    {cred.year}
                  </span>
                </div>
                <div className="text-[11px] text-teal-300/80 font-mono mb-1">
                  {cred.issuer}
                </div>
                <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                  {cred.detail}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center sm:self-center">
              <span className="px-2.5 py-1 rounded bg-[#08141e] border border-sky-500/15 text-[11px] font-mono text-sky-300">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
