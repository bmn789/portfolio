"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function scrollWindowToTop() {
  window.scrollTo(0, 0);
}

/**
 * Keeps route changes anchored at the top. Scroll is applied without smooth animation
 * (overrides inherited scroll-behavior: smooth for this jump).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!pathname) return;
    scrollWindowToTop();
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    const id = requestAnimationFrame(() => {
      scrollWindowToTop();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
