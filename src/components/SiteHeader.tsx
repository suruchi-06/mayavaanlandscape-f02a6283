import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Mayavaan logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition" />
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-primary tracking-tight">MAYAVAAN</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Landscape Pvt. Ltd.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="px-4 py-2 text-sm font-medium rounded-full text-foreground/75 hover:text-primary hover:bg-secondary/60 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-leaf text-primary-foreground text-sm font-semibold shadow-leaf hover:scale-[1.03] transition-transform"
        >
          <Leaf className="h-4 w-4" /> Get a Quote
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
