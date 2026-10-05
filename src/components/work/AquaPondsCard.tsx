"use client";

import React, { useState } from "react";
import { Cpu, Sliders, Waves, Activity } from "lucide-react";

export function AquaPondsCard() {
  const [ph, setPh] = useState<number>(7.2);
  const [dissolvedOxygen, setDissolvedOxygen] = useState<number>(6.8);
  const [temperature, setTemperature] = useState<number>(26.5);
  const [ammonia, setAmmonia] = useState<number>(0.15);

  const phPenalty = Math.abs(ph - 7.5) * 18;
  const doScore = Math.min(100, Math.max(0, (dissolvedOxygen / 8.0) * 100));
  const tempPenalty = Math.abs(temperature - 27) * 4;
  const ammoniaPenalty = Math.min(60, ammonia * 80);

  const rawWqi = Math.max(
    10,
    Math.min(99, Math.round(doScore * 0.45 + (100 - phPenalty) * 0.3 - tempPenalty - ammoniaPenalty))
  );

  const reconstructionMse = (
    0.008 +
    (phPenalty > 20 ? 0.035 : 0.002) +
    (dissolvedOxygen < 4.0 ? 0.045 : 0.001) +
    (ammonia > 0.5 ? 0.06 : 0.001)
  ).toFixed(3);

  const isSafe = rawWqi >= 75;

  return (
    <div
      id="project-aquaponds"
      className="p-6 sm:p-8 rounded-2xl bg-[#0e202e]/70 border border-sky-500/15 hover:border-teal-400/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-teal-300 uppercase tracking-wider">
              Deep Learning & Aquaculture IoT
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              97.4% Test F1
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight flex items-center gap-2.5">
            <Cpu className="w-6 h-6 text-teal-400 shrink-0" />
            <span>AquaPonds — Deep Learning WQI & Autoencoder</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400">
          KerasTuner · Latent Autoencoder
        </div>
      </div>

      <p className="text-sm text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
        Continuous multivariate sensor telemetry classification and unsupervised latent autoencoder
        reconstruction for aquaculture ponds, diagnosing sensor drift and aquatic distress.
      </p>

      {/* Simulator */}
      <div className="p-5 rounded-xl bg-[#08141e]/80 border border-sky-500/15">
        <div className="flex items-center justify-between mb-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-teal-300 font-medium">
            <Sliders className="w-3.5 h-3.5 text-teal-400" />
            <span>Pond Telemetry & Anomaly Inference</span>
          </div>
          <span className="text-[11px] text-slate-400">
            Adjust water parameters
          </span>
        </div>

        {/* 2 Sliders for minimalism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs font-mono">
          {/* Dissolved Oxygen */}
          <div className="p-3 rounded-lg bg-[#0e202e] border border-sky-500/10">
            <div className="flex justify-between mb-1.5">
              <span className="text-slate-400">Dissolved Oxygen</span>
              <span className="text-sky-300 font-semibold">{dissolvedOxygen.toFixed(1)} mg/L</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="10.0"
              step="0.1"
              value={dissolvedOxygen}
              onChange={(e) => setDissolvedOxygen(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>

          {/* Ammonia */}
          <div className="p-3 rounded-lg bg-[#0e202e] border border-sky-500/10">
            <div className="flex justify-between mb-1.5">
              <span className="text-slate-400">Ammonia TAN</span>
              <span className="text-teal-300 font-semibold">{ammonia.toFixed(2)} mg/L</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.5"
              step="0.05"
              value={ammonia}
              onChange={(e) => setAmmonia(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#0e202e] border border-sky-500/15 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isSafe ? "bg-teal-400" : "bg-amber-400"}`} />
            <span className="text-white font-medium">WQI {rawWqi} / 100</span>
            <span className="text-slate-400">({isSafe ? "Optimal Bio-Safety" : "Cautionary Stress"})</span>
          </div>
          <div className="text-slate-400">
            Recon Loss: <span className="text-sky-300">{reconstructionMse} MSE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
