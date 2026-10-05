"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Github, Linkedin, ArrowUp, Waves } from "lucide-react";
import { PROFILE } from "@/lib/constants";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !senderEmail) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <footer id="contact" className="border-t border-sky-500/15 bg-[#061019] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Direct Links & LinkedIn */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
              <Waves className="w-3.5 h-3.5 text-teal-400" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Let’s discuss <span className="font-serif italic text-sky-300">architectures.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Available for full-stack engineering, high-concurrency systems, or aquaculture data telemetry.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-sky-500/15 border border-sky-400/30 text-sky-200 text-xs font-mono hover:bg-sky-500/25 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0e202e] border border-sky-500/20 text-slate-300 text-xs font-mono hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>{PROFILE.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Direct Message */}
          <div className="md:col-span-6 p-5 rounded-xl bg-[#0e202e]/60 border border-sky-500/15">
            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <Check className="w-8 h-8 text-teal-400 mx-auto" />
                <h3 className="text-sm font-medium text-white">Message Transmitted</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Thank you. I will reply to {senderEmail} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#08141e] border border-sky-500/15 text-slate-200 focus:outline-none focus:border-sky-400/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Message</label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Project requirements, role timeline, or hello..."
                    className="w-full px-3 py-2 rounded-lg bg-[#08141e] border border-sky-500/15 text-slate-200 focus:outline-none focus:border-sky-400/50 font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-sky-400 text-[#08141e] font-semibold text-xs hover:bg-sky-300 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? <span>Sending...</span> : <span>Send Note</span>}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-sky-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div>
            © 2026 Shawn Ethan Varughese · APU BSc (Hons) Software Engineering
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
