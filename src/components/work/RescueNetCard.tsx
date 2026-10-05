"use client";

import React, { useState } from "react";
import { Cloud, Sliders, Radio } from "lucide-react";

export function RescueNetCard() {
  const [occupants, setOccupants] = useState<number>(315);
  const [capacity] = useState<number>(350);
  const [supplyDays, setSupplyDays] = useState<number>(3.2);

  const occupancyRate = Math.round((occupants / capacity) * 100);
  const isCritical = supplyDays < 4.0 || occupancyRate > 90;

  return (
    <div
      id="project-rescuenet"
      className="p-6 sm:p-8 rounded-2xl bg-[#0e202e]/70 border border-sky-500/15 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-sky-300 uppercase tracking-wider">
              Cloud & Serverless Microservices
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              AWS SAM Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight flex items-center gap-2.5">
            <Cloud className="w-6 h-6 text-sky-400 shrink-0" />
            <span>RescueNet: Serverless Crisis Logistics</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Node.js 20.x · Lambda · RDS PostgreSQL
        </div>
      </div>

      <p className="text-sm text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
        Serverless humanitarian management system with a zero-route RPC client bridge,
        coordinating emergency shelter capacity and relief supplies in private VPC subnets.
      </p>

      {/* Simulator */}
      <div className="p-5 rounded-xl bg-[#08141e]/80 border border-sky-500/15">
        <div className="flex items-center justify-between mb-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-sky-300 font-medium">
            <Radio className="w-3.5 h-3.5 text-sky-400" />
            <span>Shelter Telemetry & Urgency Evaluation</span>
          </div>
          <span className="text-[11px] text-slate-400">
            Simulate logistics buffer
          </span>
        </div>

        {/* 2 Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs font-mono">
          {/* Occupancy */}
          <div className="p-3 rounded-lg bg-[#0e202e] border border-sky-500/10">
            <div className="flex justify-between mb-1.5">
              <span className="text-slate-400">Occupancy</span>
              <span className="text-sky-300 font-semibold">{occupancyRate}% ({occupants}/{capacity})</span>
            </div>
            <input
              type="range"
              min="100"
              max="350"
              step="5"
              value={occupants}
              onChange={(e) => setOccupants(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          {/* Supply Days */}
          <div className="p-3 rounded-lg bg-[#0e202e] border border-sky-500/10">
            <div className="flex justify-between mb-1.5">
              <span className="text-slate-400">Supply Cover</span>
              <span className="text-teal-300 font-semibold">{supplyDays.toFixed(1)} Days</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="14.0"
              step="0.5"
              value={supplyDays}
              onChange={(e) => setSupplyDays(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#0e202e] border border-sky-500/15 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isCritical ? "bg-amber-400" : "bg-teal-400"}`} />
            <span className="text-white font-medium">
              {isCritical ? "Critical Alert: Relief Dispatch Required" : "Nominal Buffer Maintained"}
            </span>
          </div>
          <div className="text-slate-400">
            Latency: <span className="text-sky-300">Sub-100ms RPC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
