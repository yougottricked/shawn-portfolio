"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

/** Links that stay visible on phones; the rest only show from `sm` up. */
const MOBILE = new Set(["work", "contact"]);

/** Header nav that highlights the section currently being read. */
export function SiteNav() {
  const [current, setCurrent] = useState("work");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setCurrent(NAV[NAV.length - 1].id);
        return;
      }
      // The active section is the last one whose top has passed just below the sticky header.
      const line = window.innerHeight * 0.3;
      let active = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) active = id;
      }
      setCurrent(active);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="flex items-center gap-5 text-sm sm:gap-7">
      {NAV.map((item) => {
        const active = item.id === current;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active ? "location" : undefined}
            className={`relative py-1 transition-colors ${active ? "text-fg" : "text-muted hover:text-fg"} ${
              MOBILE.has(item.id) ? "" : "max-sm:hidden"
            }`}
          >
            {item.label}
            <span
              aria-hidden
              className={`absolute inset-x-0 -bottom-px h-px bg-accent transition-opacity duration-300 ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
