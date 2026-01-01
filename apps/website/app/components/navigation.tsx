import { useState } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#ministry", label: "Ministry" },
  { href: "#impact", label: "Impact" },
  { href: "#mentorship", label: "Mentorship" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-sm font-medium text-primary/80 hover:text-primary transition-colors py-1 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  className="sticky top-0 z-50 bg-white text-primary shadow-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Real Men Logo" className="w-10 h-10" />
            {/* <div className="text-2xl font-bold tracking-tight">
              REAL MEN
            </div> */}
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="ml-4">Get Involved</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <Button variant="default" className="w-full">
                Join the Brotherhood
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
