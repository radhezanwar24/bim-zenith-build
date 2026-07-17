import { useReveal } from "@/hooks/use-reveal";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

/**
 * Runs the scroll-reveal observer on every route change and also fades the
 * main content in for a smooth page-transition feel.
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  const location = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(location);

  useEffect(() => {
    setKey(location);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  useReveal();

  return (
    <div key={key} className="page-transition">
      {children}
    </div>
  );
}
