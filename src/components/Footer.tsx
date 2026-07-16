import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logo} alt="Infinity BIM" className="h-10 w-auto" />
          <h3 className="mt-6 text-base font-semibold">About us</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            We are a Digital Engineering and BIM consultancy delivering intelligent,
            coordinated, and automation-driven solutions for architects, consultants,
            contractors, and developers. Our expertise helps transform complex projects
            into efficient, accurate, and construction-ready outcomes.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
            Helpful Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-navy">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-navy">About us</Link></li>
            <li><span className="cursor-not-allowed text-muted-foreground/60" aria-disabled>Products <span className="ml-1 text-[10px] uppercase">(coming soon)</span></span></li>
            <li><span className="cursor-not-allowed text-muted-foreground/60" aria-disabled>Services <span className="ml-1 text-[10px] uppercase">(coming soon)</span></span></li>
            <li><span className="cursor-not-allowed text-muted-foreground/60" aria-disabled>Legal <span className="ml-1 text-[10px] uppercase">(coming soon)</span></span></li>
            <li><span className="cursor-not-allowed text-muted-foreground/60" aria-disabled>Privacy Policy <span className="ml-1 text-[10px] uppercase">(coming soon)</span></span></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-navy">Reach out to us</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
            Connect with us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-navy">
                Reach out to us
              </Link>
            </li>
            <li>
              <a
                href="mailto:info.infinitybim@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy"
              >
                <Mail className="h-4 w-4" aria-hidden />
                info.infinitybim@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919067059933"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy"
              >
                <Phone className="h-4 w-4" aria-hidden />
                +91 9067059933
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>Copyright © {year} Infinity BIM</p>
          <p>Endless Possibilities in BIM</p>
        </div>
      </div>
    </footer>
  );
}
