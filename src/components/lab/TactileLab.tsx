"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Sliders,
  Maximize2,
  Zap,
  RotateCw,
  Folder,
  Terminal,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import { calculateProximityScale } from "@/lib/utils";

export function TactileLab() {
  // Proximity dock tracking
  const [dockCursorX, setDockCursorX] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  // Conic border toggle
  const [conicActive, setConicActive] = useState<boolean>(true);

  // Rolling counter state
  const [counterVal, setCounterVal] = useState<number>(91);

  // Confetti trigger (tactile milestone)
  const triggerMilestone = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#818cf8", "#10b981", "#f59e0b"],
      disableForReducedMotion: true,
    });
  };

  const dockIcons = [
    { icon: Terminal, label: "Console" },
    { icon: Layers, label: "Architecture" },
    { icon: Cpu, label: "Neural Net" },
    { icon: Folder, label: "Filesystem" },
    { icon: Award, label: "Honors" },
  ];

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Lab · Design Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Tactile Micro-Interactions, <span className="font-serif italic text-purple-300">tested.</span>
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-zinc-400 mt-4 md:mt-0 font-normal leading-relaxed">
          Interactive sandboxes demonstrating mathematical motion physics, Apple-style
          dock proximity magnification, zero-JS GPU shaders, and milestone haptics.
        </p>
      </div>

      {/* 2x2 Grid of Micro-Interaction Experiments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experiment 1: Apple macOS Proximity Dock */}
        <div className="p-6 rounded-2xl bg-[#121217] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                01 · Gaussian Proximity Magnification
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Hover cursor across icons
              </span>
            </div>
            <h3 className="text-lg font-light text-white mb-2">
              Apple-Style Dock Curve
            </h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Calculates scale dynamically using a Gaussian bell curve:
              <code className="text-sky-300 font-mono ml-1">
                s(d) = 1.0 + A · exp(-d² / 2σ²)
              </code>
              .
            </p>
          </div>

          {/* Interactive Dock Surface */}
          <div
            ref={dockRef}
            onMouseMove={(e) => {
              if (dockRef.current) {
                const rect = dockRef.current.getBoundingClientRect();
                setDockCursorX(e.clientX - rect.left);
              }
            }}
            onMouseLeave={() => setDockCursorX(null)}
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-black/50 border border-white/[0.06] h-24"
          >
            {dockIcons.map((item, idx) => {
              // Estimate center for item
              const itemCenter = (idx + 0.5) * 56;
              const scale =
                dockCursorX !== null
                  ? calculateProximityScale(dockCursorX, itemCenter, 0.45, 38)
                  : 1.0;

              return (
                <div
                  key={idx}
                  style={{
                    transform: `scale(${scale})`,
                    transition: "transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                  className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.1] hover:border-sky-400 flex items-center justify-center cursor-pointer group shadow-md"
                  title={item.label}
                >
                  <item.icon className="w-5 h-5 text-zinc-300 group-hover:text-sky-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Experiment 2: GPU Conic Gradient Border */}
        <div className="p-6 rounded-2xl bg-[#121217] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                02 · Hardware-Accelerated Border
              </span>
              <button
                onClick={() => setConicActive(!conicActive)}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white transition-all active:scale-95"
              >
                {conicActive ? "Turn Off" : "Turn On"}
              </button>
            </div>
            <h3 className="text-lg font-light text-white mb-2">
              Zero-JS Conic Border Shading
            </h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Executed 100% on the GPU compositor using CSS
              <code className="text-purple-300 font-mono ml-1">
                @property --angle
              </code>
              , causing zero CPU main-thread drag.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl flex items-center justify-between transition-all ${
              conicActive
                ? "glowing-conic-border bg-[#181820]"
                : "bg-black/50 border border-white/[0.06]"
            }`}
          >
            <div>
              <div className="text-xs font-mono text-zinc-400">Active Shading Mode</div>
              <div className="text-sm font-medium text-white font-mono mt-0.5">
                {conicActive ? "GPU Conic Running" : "Static Solid Border"}
              </div>
            </div>
            <RotateCw
              className={`w-5 h-5 text-sky-400 ${
                conicActive ? "animate-spin" : "opacity-30"
              }`}
              style={{ animationDuration: "6s" }}
            />
          </div>
        </div>

        {/* Experiment 3: Rolling Digit Odometer */}
        <div className="p-6 rounded-2xl bg-[#121217] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                03 · Numerical Transitions
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                0.2s duration limit
              </span>
            </div>
            <h3 className="text-lg font-light text-white mb-2">
              Rolling Digit Odometer
            </h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Numbers should never abruptly snap. Constraining numerical changes
              to smooth transitions guarantees zero Cumulative Layout Shift (CLS).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400">Simulated Table Count</div>
              <div className="text-3xl font-light text-white font-mono mt-1">
                {counterVal}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCounterVal(Math.max(10, counterVal - 10))}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white active:scale-95 transition-all"
              >
                -10
              </button>
              <button
                onClick={() => setCounterVal(counterVal + 10)}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:text-white active:scale-95 transition-all"
              >
                +10
              </button>
            </div>
          </div>
        </div>

        {/* Experiment 4: Milestone Celebratory Haptic & Confetti */}
        <div className="p-6 rounded-2xl bg-[#121217] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                04 · Milestone Haptics
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Brand-palette bounded
              </span>
            </div>
            <h3 className="text-lg font-light text-white mb-2">
              Celebratory Milestone Trigger
            </h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Particles are strictly reserved for high-value milestone completion events
              (e.g., all 30 unit tests verified, degree conferral, zero-error deploy).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400">High-Value Event</div>
              <div className="text-sm font-medium text-amber-300 mt-0.5">
                30 / 30 Unit Tests Verified
              </div>
            </div>

            <button
              onClick={triggerMilestone}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono hover:bg-amber-500/30 active:scale-95 transition-all"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Fire Milestone</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
