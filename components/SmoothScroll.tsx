"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Weighted momentum scrolling for the whole page. Adapted from the Hebras
 * build: Lenis drives the real window scroll rather than transforming a
 * wrapper, so the scroll-driven CSS in globals.css keeps working untouched.
 *
 * ponytail: module-level singleton, not a context provider. One Lenis per page
 * and the only consumer is the hero's one anchor.
 */
let lenis: Lenis | null = null;

/** Smooth-scrolls to a section without touching the URL. Safe before mount. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis();

    // Firefox has no scroll-driven animations, so the CSS parallax in
    // globals.css never runs there. Drive the same drift off the rAF loop that
    // already exists — the feature test self-disables the day Firefox ships it.
    // ponytail: linear approximation of the view-timeline, not the same curve.
    const drifters = CSS.supports("animation-timeline: view()")
      ? []
      : [...document.querySelectorAll<HTMLElement>(".hero-parallax")];
    for (const el of drifters) {
      el.style.top = "-8vh";
      el.style.height = "calc(100% + 16vh)";
      el.style.willChange = "transform";
    }

    let frame = requestAnimationFrame(function raf(time) {
      lenis?.raf(time);
      if (drifters.length) {
        const p = Math.min(1, window.scrollY / window.innerHeight);
        const y = `translateY(${(p * 2 - 1) * 8}vh)`;
        for (const el of drifters) el.style.transform = y;
      }
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
