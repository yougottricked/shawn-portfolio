"use client";

import React from "react";
import { ArrowDownRight, Linkedin, Github, Waves, Fish, Sparkles } from "lucide-react";
import { AmbientCanvas } from "./AmbientCanvas";
import { PROFILE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
      <AmbientCanvas />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Aquatic Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-mono mb-6">
          <Fish className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          <span>Aquatic Software Architecture · APU Software Engineering</span>
        </div>

        {/* Hero Editorial Heading */}
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6 leading-[1.15]">
          Engineering software for{" "}
          <span className="font-serif italic font-normal text-sky-300">
            living aquatic ecosystems
          </span>{" "}
          and high-concurrency commerce.
        </h1>

        {/* Narrative subtext - Minimal & Direct */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          I am <strong className="text-white font-medium">Shawn Ethan Varughese</strong>, a Software Engineering
          graduate from Asia Pacific University (APU). I specialize in high-concurrency relational data architectures
          for ornamental fish retail, deep learning water quality telemetry, and resilient cloud systems.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 text-[#08141e] font-medium text-xs hover:bg-sky-300 transition-all active:scale-[0.97] shadow-lg shadow-sky-500/10"
          >
            <span>Explore Flagship Work</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e202e] border border-sky-500/20 text-sky-200 font-medium text-xs hover:border-sky-400/50 hover:bg-[#13283a] transition-all active:scale-[0.97]"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-mono transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>yougottricked</span>
          </a>
        </div>

        {/* Minimalist 3-Stat Marine Ribbon */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sky-500/15 max-w-xl text-xs font-mono text-slate-400">
          <div>
            <div className="text-xl sm:text-2xl font-light text-white font-mono">
              91 Tables
            </div>
            <div className="text-[11px] text-teal-300/80 mt-0.5">
              LWICMS Fish IMS
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-light text-white font-mono">
              5.0 / 5.0
            </div>
            <div className="text-[11px] text-sky-300/80 mt-0.5">
              Industry Evaluation
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-light text-white font-mono">
              6 Streams
            </div>
            <div className="text-[11px] text-emerald-300/80 mt-0.5">
              AquaPonds IoT AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
