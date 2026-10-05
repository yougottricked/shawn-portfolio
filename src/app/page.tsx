"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/chrome/Navbar";
import { CommandMenu } from "@/components/chrome/CommandMenu";
import { HeroSection } from "@/components/hero/HeroSection";
import { BentoGrid } from "@/components/work/BentoGrid";
import { ArsenalGrid } from "@/components/skills/ArsenalGrid";
import { FieldNotes } from "@/components/credentials/FieldNotes";
import { Footer } from "@/components/chrome/Footer";
import { AquaticCursor } from "@/components/chrome/AquaticCursor";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08141e] text-[#f0f9ff] selection:bg-sky-500/25 selection:text-sky-200 aquatic-gradient-bg">
      {/* Subtle Aquatic Ambient Mouse Spotlight */}
      <AquaticCursor />

      {/* Top Fixed Aquatic Navigation */}
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      {/* Global Command Palette (Cmd+K) */}
      <CommandMenu open={commandOpen} setOpen={setCommandOpen} />

      {/* Main Single-Page Canvas */}
      <main id="main-content" className="relative z-10">
        {/* 1. Minimalist Aquatic Hero */}
        <HeroSection />

        {/* 2. Selected Work (LWICMS Fish IMS, AquaPonds AI, RescueNet Cloud) */}
        <BentoGrid />

        {/* 3. Technical Arsenal & Engineering Matrix */}
        <ArsenalGrid />

        {/* 4. Field Notes, Accolades & Academic Validation */}
        <FieldNotes />
      </main>

      {/* 5. Minimalist Aquatic Footer */}
      <Footer />
    </div>
  );
}
