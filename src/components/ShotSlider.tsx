"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Shot } from "@/lib/constants";

const AUTOPLAY_MS = 2600;

/**
 * Screenshot carousel. Hovering (or focusing) the frame plays through the
 * slides once and stops on the last one; arrows, dots, keyboard and swipe all
 * work too. As soon as the viewer moves it themselves, autoplay stops for good
 * so it never pulls them away from the slide they chose. Native scroll-snap
 * does the movement so touch scrolling feels right on phones.
 */
export function ShotSlider({
  shots,
  title,
  aspect = "aspect-[16/10]",
  priority = false,
}: {
  shots: Shot[];
  title: string;
  /** Tailwind aspect-ratio class for every slide. */
  aspect?: string;
  /** Preload the first slide; only for the slider at the top of the page. */
  priority?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [manual, setManual] = useState(false);
  const last = shots.length - 1;
  // Slide the last goTo aimed at, so quick repeated clicks keep advancing
  // even while the smooth scroll from the previous click is still running.
  const targetRef = useRef(0);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const next = Math.min(Math.max(i, 0), last);
      targetRef.current = next;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({ left: next * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
    },
    [last]
  );

  /** Any move the viewer makes themselves ends autoplay. */
  const step = (delta: number) => {
    setManual(true);
    goTo(targetRef.current + delta);
  };
  const jump = (i: number) => {
    setManual(true);
    goTo(i);
  };

  useEffect(() => {
    if (!active || manual || index >= last) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, manual, index, last, goTo]);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const ratio = track.scrollLeft / track.clientWidth;
    const current = Math.round(ratio);
    setIndex(current);
    // Once a scroll has settled (including a swipe), it becomes the new target.
    if (Math.abs(ratio - current) < 0.01) targetRef.current = current;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  return (
    <figure>
      <div
        className="group relative overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-muted/50 focus-within:border-muted/50"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          onTouchStart={() => setManual(true)}
          onWheel={(e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) setManual(true);
          }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${title} screenshots`}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {shots.map((shot, i) => (
            <div
              key={shot.src}
              className={`relative ${aspect} w-full shrink-0 snap-start ${
                shot.fit === "contain" ? "bg-white" : ""
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 976px, 100vw"
                priority={priority && i === 0}
                className={shot.fit === "contain" ? "object-contain p-6 sm:p-10" : "object-cover object-top"}
              />
            </div>
          ))}
        </div>

        {shots.length > 1 && (
          <>
            <SliderButton side="left" onClick={() => step(-1)} label="Previous screenshot" hidden={index === 0} />
            <SliderButton side="right" onClick={() => step(1)} label="Next screenshot" hidden={index === last} />
          </>
        )}
      </div>

      <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm text-muted">
        <span aria-live="polite">{shots[index]?.caption}</span>
        <span className="flex shrink-0 items-center gap-1.5 pt-1.5">
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => jump(i)}
              aria-label={`Show screenshot ${i + 1} of ${shots.length}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-fg" : "w-1.5 bg-muted/40 hover:bg-muted"
              }`}
            />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

function SliderButton({
  side,
  onClick,
  label,
  hidden,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
  /** At the first or last slide, the button that would go past it is hidden. */
  hidden: boolean;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={hidden}
      className={`absolute top-1/2 ${side === "left" ? "left-3" : "right-3"} -translate-y-1/2 rounded-full border border-line bg-bg/90 p-2 text-fg opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 max-sm:hidden ${
        hidden ? "pointer-events-none" : "group-hover:opacity-100 focus-visible:opacity-100"
      }`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
