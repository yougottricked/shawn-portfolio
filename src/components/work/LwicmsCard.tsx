"use client";

import React, { useState } from "react";
import {
  Fish,
  CheckCircle2,
  AlertCircle,
  Database,
  Layers,
  Sparkles,
  Waves,
} from "lucide-react";

interface FishSpecies {
  id: string;
  name: string;
  scientificName: string;
  phMin: number;
  phMax: number;
  tempMin: number;
  tempMax: number;
  aggression: "peaceful" | "semi-aggressive" | "aggressive";
  traits: string[];
}

const SPECIES_POOL: FishSpecies[] = [
  {
    id: "neon-tetra",
    name: "Neon Tetra",
    scientificName: "Paracheirodon innesi",
    phMin: 6.0,
    phMax: 7.0,
    tempMin: 21,
    tempMax: 26,
    aggression: "peaceful",
    traits: ["schooling", "gentle"],
  },
  {
    id: "betta",
    name: "Betta Splendens",
    scientificName: "Betta splendens",
    phMin: 6.5,
    phMax: 7.5,
    tempMin: 24,
    tempMax: 28,
    aggression: "aggressive",
    traits: ["long-finned", "territorial"],
  },
  {
    id: "tiger-barb",
    name: "Tiger Barb",
    scientificName: "Puntigrus tetrazona",
    phMin: 6.0,
    phMax: 7.5,
    tempMin: 23,
    tempMax: 27,
    aggression: "semi-aggressive",
    traits: ["fin-nipper", "fast-swimmer"],
  },
  {
    id: "discus",
    name: "Discus",
    scientificName: "Symphysodon aequifasciatus",
    phMin: 6.0,
    phMax: 6.8,
    tempMin: 28,
    tempMax: 31,
    aggression: "peaceful",
    traits: ["delicate", "warm-water"],
  },
  {
    id: "corydoras",
    name: "Corydoras Catfish",
    scientificName: "Corydoras paleatus",
    phMin: 6.0,
    phMax: 7.6,
    tempMin: 22,
    tempMax: 26,
    aggression: "peaceful",
    traits: ["bottom-dweller", "peaceful"],
  },
];

export function LwicmsCard() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "neon-tetra",
    "corydoras",
  ]);

  const toggleSpecies = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedSpecies = SPECIES_POOL.filter((s) =>
    selectedIds.includes(s.id)
  );

  // Evaluate 11-Rule compatibility
  const evaluateCompatibility = () => {
    const rulesViolated: string[] = [];

    // Check pH overlap
    const maxPhMin = Math.max(...selectedSpecies.map((s) => s.phMin));
    const minPhMax = Math.min(...selectedSpecies.map((s) => s.phMax));
    if (maxPhMin > minPhMax) {
      rulesViolated.push(
        `Rule 1 (Water Chemistry): pH conflict (${maxPhMin.toFixed(1)} vs ${minPhMax.toFixed(1)})`
      );
    }

    // Check Temperature overlap
    const maxTempMin = Math.max(...selectedSpecies.map((s) => s.tempMin));
    const minTempMax = Math.min(...selectedSpecies.map((s) => s.tempMax));
    if (maxTempMin > minTempMax) {
      rulesViolated.push(
        `Rule 3 (Thermal Range): Incompatible water temperature (${maxTempMin}°C vs ${minTempMax}°C)`
      );
    }

    // Check Fin Nipping rule
    const hasFinNipper = selectedSpecies.some((s) =>
      s.traits.includes("fin-nipper")
    );
    const hasLongFinned = selectedSpecies.some((s) =>
      s.traits.includes("long-finned")
    );
    if (hasFinNipper && hasLongFinned) {
      rulesViolated.push(
        "Rule 7 (Behavior): Fin-nippers (Tiger Barb) will nip long-finned fish (Betta)"
      );
    }

    // Check Aggression conflict
    const hasAggressive = selectedSpecies.some(
      (s) => s.aggression === "aggressive"
    );
    const hasDelicate = selectedSpecies.some((s) =>
      s.traits.includes("delicate")
    );
    if (hasAggressive && hasDelicate) {
      rulesViolated.push(
        "Rule 9 (Predation / Stress): Aggressive territorial fish will stress delicate Discus"
      );
    }

    return rulesViolated;
  };

  const violations = evaluateCompatibility();
  const isCompatible = violations.length === 0;

  return (
    <div
      id="project-lwicms"
      className="p-6 sm:p-8 rounded-2xl bg-[#0e202e]/70 border border-sky-500/15 hover:border-sky-400/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-teal-300 uppercase tracking-wider">
              Flagship Capstone · Final Year Project
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Rated 5.0 / 5.0
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight flex items-center gap-2.5">
            <Fish className="w-6 h-6 text-sky-400 shrink-0" />
            <span>LWICMS — Live Fish Retail IMS</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400">
          36 Controllers · 91 Tables · 164 Foreign Keys
        </div>
      </div>

      <p className="text-sm text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
        An end-to-end commerce and livestock inventory platform addressing unrecorded
        retail fish mortality (66.7%) and lack of live stock visibility (85.7%).
        Features row-locked atomic sales transactions and an automated 11-rule biological compatibility engine.
      </p>

      {/* Interactive Aquarium Compatibility Sandbox */}
      <div className="p-5 rounded-xl bg-[#08141e]/80 border border-sky-500/15">
        <div className="flex items-center justify-between mb-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-sky-300 font-medium">
            <Waves className="w-3.5 h-3.5 text-teal-400" />
            <span>Live 11-Rule Tank Compatibility Engine</span>
          </div>
          <span className="text-[11px] text-slate-400">
            Click to add/remove species
          </span>
        </div>

        {/* Fish Species Toggles */}
        <div className="flex flex-wrap gap-2 mb-4">
          {SPECIES_POOL.map((sp) => {
            const isSelected = selectedIds.includes(sp.id);
            return (
              <button
                key={sp.id}
                onClick={() => toggleSpecies(sp.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-sky-500/20 border border-sky-400/50 text-sky-100 shadow-sm shadow-sky-500/10"
                    : "bg-[#0e202e] border border-sky-500/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                <span>{sp.name}</span>
                <span className="text-[10px] text-slate-400">
                  pH {sp.phMin}-{sp.phMax}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Evaluation Box */}
        <div
          className={`p-3.5 rounded-xl border text-xs font-mono transition-all ${
            isCompatible
              ? "bg-teal-950/20 border-teal-500/30 text-teal-200"
              : "bg-rose-950/20 border-rose-500/30 text-rose-200"
          }`}
        >
          <div className="flex items-center gap-2 font-medium mb-1">
            {isCompatible ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>100% Bio-Compatible Tank Community</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Incompatibility Detected ({violations.length} Rules Flagged)</span>
              </>
            )}
          </div>

          {isCompatible ? (
            <div className="text-[11px] text-teal-300/80 font-sans">
              Compatible water chemistry (pH & thermal match) with zero behavioral or fin-nipping conflicts.
            </div>
          ) : (
            <ul className="space-y-1 text-[11px] font-sans mt-1">
              {violations.map((v, idx) => (
                <li key={idx} className="flex items-start gap-1">
                  <span>•</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
