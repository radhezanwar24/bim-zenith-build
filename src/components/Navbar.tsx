import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";

import logo from "@/assets/logo.png";

const INTRO_REPLAY_EVENT = "infinity-bim:replay-intro";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (to: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // Ensure destination page also lands at top (SSR + navigation).
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
    }
  };

  const linkBase =
    "relative px-4 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-white shadow-[0_4px_20px_-12px_rgba(11,28,58,0.15)]"
          : "border-b border-border/40 bg-white"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => {
            setOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              window.dispatchEvent(new Event(INTRO_REPLAY_EVENT));
            }
          }}
          className="flex items-center gap-2"
          aria-label="Infinity BIM home"
        >
          <img
            src={logo}
            alt="Infinity BIM"
            className="h-14 w-auto transition-all duration-500 sm:h-16"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={handleNavClick(n.to)}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "after:scale-x-100" }}
              className={`${linkBase} text-muted-foreground hover:text-navy after:bg-royal`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick("/contact")}
            className="ml-3 inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal hover:shadow-md"
          >
            Reach out to us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <span
            aria-hidden
            className={`absolute block h-[2px] w-5 rounded bg-current transition-all duration-300 ease-out ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-[2px] w-5 rounded bg-current transition-all duration-200 ${
              open ? "scale-x-0 opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-[2px] w-5 rounded bg-current transition-all duration-300 ease-out ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background md:hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col py-3" aria-label="Mobile">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={handleNavClick(n.to)}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-navy" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick("/contact")}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-royal"
          >
            Reach out to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
