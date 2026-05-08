"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function scrollWindowToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Next.js restores scroll positions in some layouts; forcing the window/document
 * root here keeps route changes anchored at the top of the viewport.
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
