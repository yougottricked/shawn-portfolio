"use client";

import React, { useEffect } from "react";
import { Command } from "cmdk";
import {
  Search,
  FolderGit2,
  Cpu,
  Cloud,
  FileText,
  Github,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
} from "lucide-react";
import { PROFILE, PROJECTS } from "@/lib/constants";

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  if (!open) return null;

  const navigateTo = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-[#0b1a26] border border-sky-500/20 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Global Command Menu" className="w-full">
          <div className="flex items-center gap-3 px-4 border-b border-sky-500/15 bg-white/[0.02]">
            <Search className="w-4 h-4 text-sky-400 shrink-0" />
            <Command.Input
              placeholder="Type a command or search portfolio..."
              className="w-full py-3.5 bg-transparent text-sm text-sky-100 placeholder:text-slate-500 focus:outline-none font-mono"
            />
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white/[0.06] text-slate-400 rounded font-mono">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 text-sm text-slate-300">
            <Command.Empty className="py-6 text-center text-xs text-slate-400 font-mono">
              No matching commands or projects found.
            </Command.Empty>

            <Command.Group
              heading="Flagship Systems & Projects"
              className="text-xs font-mono text-teal-300/80 px-2 py-1.5 font-semibold"
            >
              <Command.Item
                onSelect={() => navigateTo("project-lwicms")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-sky-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-slate-200">
                    LWICMS: Fish Retail Inventory IMS
                  </span>
                  <span className="text-xs text-slate-400">
                    36 Controllers, 274 Routes, 91 Tables, 11-Rule Tank Engine
                  </span>
                </div>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("project-aquaponds")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <Cpu className="w-4 h-4 text-teal-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-slate-200">
                    AquaPonds: Deep Learning IoT WQI
                  </span>
                  <span className="text-xs text-slate-400">
                    Multivariate Telemetry, KerasTuner DNN & Latent Autoencoder
                  </span>
                </div>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("project-rescuenet")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <Cloud className="w-4 h-4 text-sky-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-slate-200">
                    RescueNet: Serverless Crisis Platform
                  </span>
                  <span className="text-xs text-slate-400">
                    AWS SAM, Lambda Node 20.x, RDS PostgreSQL, Zero-Route RPC
                  </span>
                </div>
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Sections & Navigation"
              className="text-xs font-mono text-teal-300/80 px-2 py-1.5 font-semibold mt-2"
            >
              <Command.Item
                onSelect={() => navigateTo("projects")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-sky-400" />
                <span>Selected Flagship Work</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("arsenal")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <Code2 className="w-4 h-4 text-teal-400" />
                <span>Technical Arsenal & Architecture Stack</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("field-notes")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Field Notes & Academic Validation (5.0/5.0)</span>
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Quick Links & Contact"
              className="text-xs font-mono text-teal-300/80 px-2 py-1.5 font-semibold mt-2"
            >
              <Command.Item
                onSelect={() => {
                  setOpen(false);
                  window.open(PROFILE.linkedin, "_blank");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Profile (Shawn Ethan Varughese)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  setOpen(false);
                  window.open(PROFILE.github, "_blank");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  setOpen(false);
                  window.location.href = `mailto:${PROFILE.email}`;
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-sky-500/10 hover:text-sky-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span>Email Shawn ({PROFILE.email})</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-4 py-2 bg-white/[0.01] border-t border-sky-500/15 text-[11px] text-slate-400 font-mono">
            <span>Use ↑↓ to navigate, Enter to select</span>
            <span>ESC to dismiss</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
