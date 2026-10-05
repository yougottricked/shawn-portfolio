"use client";

import React, { useEffect, useState } from "react";

export function AquaticCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: -1000,
    y: -1000,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer devices that support hover (not mobile touch)
    if (window.matchMedia("(hover: none)").matches) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!visible) setVisible(true);
      });
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.075), rgba(45, 212, 191, 0.035) 45%, transparent 75%)`,
      }}
      aria-hidden="true"
    />
  );
}
