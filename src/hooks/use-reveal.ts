import { useEffect } from "react";

const AUTO_REVEAL_SELECTOR = [
  "main section",
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main img",
  "main article",
  "main li",
  "main a[class*='rounded']",
  "main button",
  "main svg",
  "footer img",
  "footer p",
  "footer h3",
  "footer li",
  "footer a",
].join(",");

function prepareRevealElements() {
  const candidates = document.querySelectorAll<HTMLElement>(AUTO_REVEAL_SELECTOR);
  let groupIndex = 0;

  candidates.forEach((el) => {
    if (
      el.closest("[data-no-reveal]") ||
      el.closest(".fixed") ||
      el.classList.contains("reveal") ||
      el.classList.contains("reveal-auto")
    ) {
      return;
    }

    el.classList.add("reveal-auto");

    const parent = el.parentElement;
    const siblingIndex = parent
      ? Array.from(parent.children)
          .filter((child) => (child as HTMLElement).matches?.("article, li, a, button"))
          .indexOf(el)
      : -1;
    const delayIndex = siblingIndex >= 0 ? siblingIndex % 6 : groupIndex++ % 4;

    el.style.setProperty("--reveal-delay", `${Math.min(delayIndex * 70, 360)}ms`);

    if (el.matches("img, svg")) {
      el.classList.add("reveal-soft-scale");
    }
  });
}

/**
 * Adds an IntersectionObserver that toggles a `is-visible` class on any element
 * carrying the `.reveal` class the first time it enters the viewport.
 * Re-runs whenever `key` changes so newly mounted route trees get observed too.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const run = () => {
      prepareRevealElements();

      const els = document.querySelectorAll<HTMLElement>(
        ".reveal:not(.is-visible), .reveal-auto:not(.is-visible)",
      );
      if (!els.length) return () => {};

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return () => {};
      }

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

      // Safety fallback: reveal elements should enhance the page, never hide it.
      // Some mobile browsers can delay observer callbacks during first paint.
      const timeout = window.setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-auto:not(.is-visible)")
          .forEach((el) => el.classList.add("is-visible"));
      }, 700);

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
