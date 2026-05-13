import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-accent" />
            <h3 className="font-display text-2xl font-bold">Mayavaan Landscape</h3>
          </div>
          <p className="text-primary-foreground/75 max-w-md leading-relaxed">
            Bringing meaningful greenery into modern spaces. Sustainable, horticulture-driven
            landscaping for homes, resorts, and commercial environments across India.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-accent">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-accent">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>+91 60013 19663<br />+91 94522 58324</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>mayavaanlandscape@gmail.com</span></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>Ajwa, Patna, Bihar, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Mayavaan Landscape Pvt. Ltd. All rights reserved.</p>
          <p>Crafted with care for nature.</p>
        </div>
      </div>
    </footer>
  );
}
