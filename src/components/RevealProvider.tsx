import { useReveal } from "@/hooks/use-reveal";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * Scrolls to the top on route change and re-runs the scroll-reveal observer
 * so newly mounted route elements animate in reliably.
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useReveal(pathname);

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
