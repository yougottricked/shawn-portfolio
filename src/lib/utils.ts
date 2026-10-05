import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Critically damped spring physics configuration (tactile-ui-ux rule)
 * zero cartoonish bouncing, natural organic settling
 */
export const springTransition = {
  type: "spring",
  stiffness: 350,
  damping: 32,
  mass: 0.8,
};

export const snappySpring = {
  type: "spring",
  stiffness: 450,
  damping: 28,
};

/**
 * Apple macOS dock proximity scale math
 * s(d) = 1.0 + A * exp(-d^2 / (2 * sigma^2))
 */
export function calculateProximityScale(
  cursorX: number,
  elementCenterX: number,
  amplitude = 0.45,
  sigma = 42
): number {
  const d = Math.abs(cursorX - elementCenterX);
  return 1.0 + amplitude * Math.exp(-(d * d) / (2 * sigma * sigma));
}

/**
 * Nested border radius formula: R_inner = max(0, R_outer - padding)
 */
export function calculateInnerRadius(outerRadius: number, padding: number): number {
  return Math.max(0, outerRadius - padding);
}
