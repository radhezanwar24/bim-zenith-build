import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo.png";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-navy text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="bg-blueprint absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(40rem 20rem at 10% 0%, oklch(0.52 0.19 260 / 0.35), transparent 60%), radial-gradient(40rem 20rem at 90% 100%, oklch(0.78 0.10 240 / 0.20), transparent 60%)",
          }}
        />
      </div>

      <div className="container-page relative grid gap-10 py-14 sm:py-16 md:gap-12 md:py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={logo}
            alt="Infinity BIM"
            className="h-20 w-auto opacity-95"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Infinity BIM is a global Digital Engineering and BIM consultancy delivering intelligent,
            coordinated, and automation-driven solutions for architects, consultants, contractors,
            and developers.
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About Us</FooterLink>
            </li>
            <li>
              <FooterLink to="/services">Services</FooterLink>
            </li>
            <li>
              <FooterLink to="/team">Team</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="mailto:info.infinitybim@gmail.com"
                className="inline-flex items-center gap-3 text-primary-foreground/75 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-sky" aria-hidden />
                info.infinitybim@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919067059933"
                className="inline-flex items-center gap-3 text-primary-foreground/75 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-sky" aria-hidden />
                +91 9067059933
              </a>
            </li>
            <li className="inline-flex items-start gap-3 text-primary-foreground/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden />
              <span>Global delivery - India, UAE, UK, USA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {year} Infinity BIM · Established in 2022 · All rights reserved</p>
          <p className="italic">Endless Possibilities in BIM</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-primary-foreground/70 transition-colors hover:text-white">
      {children}
    </Link>
  );
}
