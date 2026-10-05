"use client";

import React, { useState, useEffect } from "react";
import { Command, Clock, Linkedin, Github, Waves } from "lucide-react";
import { PROFILE } from "@/lib/constants";

interface NavbarProps {
  onOpenCommand: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [time, setTime] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-MY", {
          timeZone: "Asia/Kuala_Lumpur",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08141e]/85 backdrop-blur-md border-b border-sky-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Wordmark with subtle fish / aquatic touch */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Shawn Ethan Varughese home"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-300 group-hover:border-teal-400/40 transition-colors">
            <Waves className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-sky-100 group-hover:text-white transition-colors">
              Shawn Ethan Varughese
            </span>
            <span className="text-[11px] text-teal-300/70 font-mono">
              Aquatic Systems Architect · APU
            </span>
          </div>
        </a>

        {/* Minimal Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300"
          aria-label="Primary navigation"
        >
          <a
            href="#projects"
            className="hover:text-sky-300 transition-colors"
          >
            Work
          </a>
          <a
            href="#arsenal"
            className="hover:text-sky-300 transition-colors"
          >
            Engineering
          </a>
          <a
            href="#field-notes"
            className="hover:text-sky-300 transition-colors"
          >
            Validation
          </a>
          <a
            href="#contact"
            className="hover:text-sky-300 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right side: LinkedIn, Time, Cmd+K */}
        <div className="flex items-center gap-2.5">
          {/* LinkedIn Direct Link */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shawn Ethan Varughese LinkedIn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 text-sky-200 text-xs font-mono transition-all active:scale-95"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* Time Clock */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0e202e] border border-sky-500/15 text-slate-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span>MYT {time || "16:00"}</span>
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommand}
            aria-label="Open command palette"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0e202e] border border-sky-500/15 hover:border-sky-400/40 text-slate-300 text-xs font-mono transition-all active:scale-95"
          >
            <Command className="w-3.5 h-3.5 text-sky-400" />
            <kbd className="hidden sm:inline px-1 py-0.5 text-[10px] bg-white/[0.06] text-slate-400 rounded">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
