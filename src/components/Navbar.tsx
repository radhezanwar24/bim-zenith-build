import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Infinity BIM home">
          <img src={logo} alt="Infinity BIM" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-navy" }}
              className="relative px-4 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-royal after:transition-transform hover:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-navy px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-royal hover:shadow-md"
          >
            Reach out to us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-navy" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Reach out to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
