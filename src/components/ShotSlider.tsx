"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import type { Shot } from "@/lib/constants";

const AUTOPLAY_MS = 2600;

/**
 * Screenshot carousel. Hovering (or focusing) the frame plays through the
 * slides once and stops on the last one; arrows, dots, keyboard and swipe all
 * work too. As soon as the viewer moves it themselves, autoplay stops for good
 * so it never pulls them away from the slide they chose. Native scroll-snap
 * does the movement so touch scrolling feels right on phones. A video slide
 * holds autoplay until the viewer moves on, and screenshots open full size.
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
  const [zoomed, setZoomed] = useState<Shot | null>(null);
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
    if (!active || manual || index >= last || shots[index]?.video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, manual, index, last, goTo, shots]);

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
              {shot.video ? (
                <LoopVideo shot={shot} />
              ) : (
                <button
                  type="button"
                  onClick={() => setZoomed(shot)}
                  tabIndex={i === index ? 0 : -1}
                  aria-label={`Enlarge: ${shot.alt}`}
                  className="absolute inset-0 cursor-zoom-in"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 976px, 100vw"
                    priority={priority && i === 0}
                    className={shot.fit === "contain" ? "object-scale-down p-6 sm:p-10" : "object-cover object-top"}
                  />
                </button>
              )}
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

      {zoomed && <Lightbox shot={zoomed} onClose={() => setZoomed(null)} />}

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

/**
 * Muted looping clip that only plays while it is on screen, and never for reduced motion.
 * The pause button is required for moving content longer than five seconds (WCAG 2.2.2),
 * and once the viewer pauses, scrolling back into view does not restart it.
 */
function LoopVideo({ shot }: { shot: Shot }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          if (!userPaused.current) video.play().catch(() => {});
        } else video.pause();
      },
      { threshold: [0, 0.5, 1] }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={shot.video}
        poster={shot.src}
        muted
        loop
        playsInline
        preload="metadata"
        controls={still}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={shot.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!still && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute bottom-3 left-3 rounded-full border border-line bg-bg/90 p-2 text-fg shadow-sm backdrop-blur"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      )}
    </>
  );
}

/** Full-size view of one screenshot; closes on Escape, the close button or a click anywhere. */
function Lightbox({ shot, onClose }: { shot: Shot; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={onClose}
      aria-label={shot.alt}
      className="m-auto flex h-dvh max-h-none w-screen max-w-none items-center overflow-auto bg-transparent p-3 backdrop:bg-black/80 sm:p-8"
    >
      {/* On a portrait phone a landscape screenshot would be tiny, so it is shown twice the screen width to pan across. */}
      <div className="relative h-full w-full shrink-0 portrait:aspect-[16/10] portrait:h-auto portrait:w-[200vw]">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes="(orientation: portrait) 200vw, 100vw"
          className={`object-contain ${shot.fit === "contain" ? "bg-white" : ""}`}
        />
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-bg/90 p-2 text-fg shadow-sm"
      >
        <X className="h-5 w-5" />
      </button>
    </dialog>
  );
}
