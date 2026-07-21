import { useEffect } from "react";

/**
 * Adds an IntersectionObserver that toggles a `is-visible` class on any element
 * carrying the `.reveal` class the first time it enters the viewport.
 * Re-runs whenever `key` changes so newly mounted route trees get observed too.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const run = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!els.length) return () => {};

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      els.forEach((el) => io.observe(el));

      // Safety fallback: any reveal element that hasn't fired within 1.2s
      // (e.g. above the fold on a very tall viewport, or observer misfire on
      // route change) becomes visible so pages never render blank.
      const timeout = window.setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
          .forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) el.classList.add("is-visible");
          });
      }, 1200);

      return () => {
        io.disconnect();
        window.clearTimeout(timeout);
      };
    };

    // Run on next frame so freshly-mounted route elements are in the DOM.
    const raf = window.requestAnimationFrame(() => {
      cleanup = run();
    });
    let cleanup: (() => void) | undefined;

    return () => {
      window.cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [key]);
}
